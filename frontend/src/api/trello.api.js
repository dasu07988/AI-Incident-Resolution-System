import axiosClient, { USE_MOCK_DATA, mockDelay } from "./axiosClient";
import mockIncidents from "../mocks/incidents.mock.json";

export async function getLinkedTrelloCards() {
  if (USE_MOCK_DATA) {
    await mockDelay(300);
    return mockIncidents
      .filter((i) => i.trello.linked)
      .map((i) => ({
        incidentId: i.id,
        incidentTitle: i.title,
        severity: i.severity,
        ...i.trello,
      }));
  }
  const { data } = await axiosClient.get("/trello/cards");
  return data;
}
