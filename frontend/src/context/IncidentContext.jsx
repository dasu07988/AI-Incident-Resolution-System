import { createContext, useContext, useState } from "react";

const IncidentContext = createContext(null);

// Holds the incident list's filter/pagination state so it survives
// navigating away to a details page and back.
export function IncidentProvider({ children }) {
  const [filters, setFilters] = useState({
    search: "",
    severity: "All",
    status: "All",
    page: 1,
    pageSize: 8,
  });

  const updateFilters = (partial) =>
    setFilters((prev) => ({ ...prev, ...partial, page: partial.page ?? 1 }));

  return (
    <IncidentContext.Provider value={{ filters, setFilters, updateFilters }}>
      {children}
    </IncidentContext.Provider>
  );
}

export function useIncidentContext() {
  const ctx = useContext(IncidentContext);
  if (!ctx) throw new Error("useIncidentContext must be used within IncidentProvider");
  return ctx;
}
