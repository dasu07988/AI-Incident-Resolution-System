import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import DashboardHome from "../features/dashboard/DashboardHome";
import IncidentList from "../features/incidents/IncidentList";
import IncidentDetails from "../features/incidents/IncidentDetails";
import AnalyticsPage from "../features/analytics/AnalyticsPage";
import ResolutionHistory from "../features/resolution-history/ResolutionHistory";
import TrelloIntegration from "../features/trello/TrelloIntegration";
import SettingsPage from "../features/settings/SettingsPage";
import NotFound from "../components/common/NotFound";

// Every route carries a `handle` with title/subtitle so AppLayout's Topbar
// can render the right heading without each page repeating it.
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
        handle: { title: "Dashboard", subtitle: "Overview of all incidents and system health" },
      },
      {
        path: "incidents",
        element: <IncidentList />,
        handle: { title: "Incidents", subtitle: "Search, filter, and triage incidents" },
      },
      {
        path: "incidents/:id",
        element: <IncidentDetails />,
        handle: { title: "Incident details" },
      },
      {
        path: "analytics",
        element: <AnalyticsPage />,
        handle: { title: "Analytics", subtitle: "Trends, distribution, and resolution stats" },
      },
      {
        path: "resolution-history",
        element: <ResolutionHistory />,
        handle: { title: "AI resolution history", subtitle: "Prompt, response, and agent timelines" },
      },
      {
        path: "trello",
        element: <TrelloIntegration />,
        handle: { title: "Trello integration", subtitle: "Incidents linked to Trello cards" },
      },
      {
        path: "settings",
        element: <SettingsPage />,
        handle: { title: "Settings", subtitle: "API, model, and infrastructure configuration" },
      },
      {
        path: "*",
        element: <NotFound />,
        handle: { title: "Not found" },
      },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
