import { createContext, useContext, useEffect, useState } from "react";
import { getSystemSettings } from "../api/settings.api";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [systemStatus, setSystemStatus] = useState(null);
  const [statusLoading, setStatusLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getSystemSettings()
      .then((data) => {
        if (mounted) setSystemStatus(data);
      })
      .finally(() => {
        if (mounted) setStatusLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <AppContext.Provider value={{ systemStatus, statusLoading }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within AppProvider");
  return ctx;
}
