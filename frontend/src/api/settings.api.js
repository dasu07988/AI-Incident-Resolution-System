import axiosClient, { USE_MOCK_DATA, mockDelay } from "./axiosClient";
import mockSettings from "../mocks/settings.mock.json";

export async function getSystemSettings() {
  if (USE_MOCK_DATA) {
    await mockDelay(300);
    return mockSettings;
  }
  const { data } = await axiosClient.get("/system/status");
  return data;
}
