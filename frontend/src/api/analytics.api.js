import axiosClient, { USE_MOCK_DATA, mockDelay } from "./axiosClient";
import mockAnalytics from "../mocks/analytics.mock.json";

export async function getAnalytics() {
  if (USE_MOCK_DATA) {
    await mockDelay(350);
    return mockAnalytics;
  }
  const { data } = await axiosClient.get("/analytics");
  return data;
}
