import axiosClient, { USE_MOCK_DATA, mockDelay } from "./axiosClient";
import mockIncidents from "../mocks/incidents.mock.json";

/**
 * Fetch a page of incidents with optional search/filter/sort params.
 * params: { search, severity, status, sortBy, page, pageSize }
 */
export async function getIncidents(params = {}) {
  if (USE_MOCK_DATA) {
    await mockDelay();
    let data = [...mockIncidents];

    if (params.search) {
      const q = params.search.toLowerCase();
      data = data.filter(
        (i) => i.title.toLowerCase().includes(q) || i.id.toLowerCase().includes(q)
      );
    }
    if (params.severity && params.severity !== "All") {
      data = data.filter((i) => i.severity === params.severity);
    }
    if (params.status && params.status !== "All") {
      data = data.filter((i) => i.status === params.status);
    }

    data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const page = params.page || 1;
    const pageSize = params.pageSize || 8;
    const start = (page - 1) * pageSize;
    const paged = data.slice(start, start + pageSize);

    return {
      items: paged,
      total: data.length,
      page,
      pageSize,
      totalPages: Math.max(1, Math.ceil(data.length / pageSize)),
    };
  }

  const { data } = await axiosClient.get("/incidents", { params });
  return data;
}

export async function getIncidentById(id) {
  if (USE_MOCK_DATA) {
    await mockDelay(300);
    const incident = mockIncidents.find((i) => i.id === id);
    if (!incident) throw new Error(`Incident ${id} not found`);
    return incident;
  }
  const { data } = await axiosClient.get(`/incidents/${id}`);
  return data;
}

export async function getIncidentSummary() {
  if (USE_MOCK_DATA) {
    await mockDelay(250);
    const total = mockIncidents.length;
    const bySeverity = { Critical: 0, High: 0, Medium: 0, Low: 0 };
    let resolved = 0;
    mockIncidents.forEach((i) => {
      bySeverity[i.severity]++;
      if (i.status === "Resolved") resolved++;
    });
    return {
      total,
      critical: bySeverity.Critical,
      high: bySeverity.High,
      medium: bySeverity.Medium,
      low: bySeverity.Low,
      successRate: +((resolved / total) * 100).toFixed(1),
    };
  }
  const { data } = await axiosClient.get("/incidents/summary");
  return data;
}
