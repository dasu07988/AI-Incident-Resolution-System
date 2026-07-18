import axiosClient, { USE_MOCK_DATA, mockDelay } from "./axiosClient";
import mockHistory from "../mocks/resolutionHistory.mock.json";

export async function getResolutionHistory(params = {}) {
  if (USE_MOCK_DATA) {
    await mockDelay(350);
    let data = [...mockHistory];
    if (params.search) {
      const q = params.search.toLowerCase();
      data = data.filter(
        (h) => h.title.toLowerCase().includes(q) || h.incidentId.toLowerCase().includes(q)
      );
    }
    data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    return data;
  }
  const { data } = await axiosClient.get("/resolution-history", { params });
  return data;
}
