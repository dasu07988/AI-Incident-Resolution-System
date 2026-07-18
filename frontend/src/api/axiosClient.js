import axios from "axios";

// Single axios instance for the whole app. When the real backend is wired
// in, only this file and the *.api.js modules need to change — nothing in
// features/ or components/ talks to axios directly.
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Something went wrong talking to the backend.";
    return Promise.reject(new Error(message));
  }
);

export const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA !== "false";

// Small helper to simulate realistic network latency for mock mode, so
// loading states are visible during development/demo.
export const mockDelay = (ms = 400) => new Promise((r) => setTimeout(r, ms));

export default axiosClient;
