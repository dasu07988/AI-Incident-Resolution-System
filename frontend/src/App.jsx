import { AppProvider } from "./context/AppContext";
import { IncidentProvider } from "./context/IncidentContext";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <AppProvider>
      <IncidentProvider>
        <AppRoutes />
      </IncidentProvider>
    </AppProvider>
  );
}
