import { useNavigate } from "react-router-dom";
import Card from "../../components/common/Card";
import SearchBar from "../../components/common/SearchBar";
import FilterDropdown from "../../components/common/FilterDropdown";
import Table, { TableRow, TableCell } from "../../components/common/Table";
import Pagination from "../../components/common/Pagination";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import EmptyState from "../../components/common/EmptyState";
import { SeverityBadge, StatusBadge } from "../../components/common/SeverityBadge";
import { HiOutlineInbox } from "react-icons/hi2";
import { useIncidentContext } from "../../context/IncidentContext";
import { useIncidents } from "../../hooks/useIncidents";
import { useDebounce } from "../../hooks/useDebounce";
import { SEVERITY_ORDER, STATUS_ORDER } from "../../utils/severityConfig";
import { formatDate } from "../../utils/formatDate";
import { useEffect, useState } from "react";
import { analyzeIncident } from "../../api/incidents.api";

const COLUMNS = [
  { key: "id", label: "ID" },
  { key: "title", label: "Title" },
  { key: "severity", label: "Severity" },
  { key: "status", label: "Status" },
  { key: "created", label: "Created" },
];

export default function IncidentList() {
  const navigate = useNavigate();
  const { filters, updateFilters } = useIncidentContext();
  const [searchInput, setSearchInput] = useState(filters.search);
  const debouncedSearch = useDebounce(searchInput, 350);

  useEffect(() => {
    if (debouncedSearch !== filters.search) {
      updateFilters({ search: debouncedSearch });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  const { items, total, totalPages, page, pageSize, loading } = useIncidents(filters);

  // Temporary AI Test
  const handleTest = async () => {
    try {
      const result = await analyzeIncident({
        title: "Database Connection Failure",
        description: "Users cannot connect to the production database.",
        priority: "High",
      });

      console.log("AI Response:", result);

      alert("✅ AI Workflow executed successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Error: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="flex flex-col gap-4">

      <div className="flex flex-wrap gap-3 items-center">

        <button
          onClick={handleTest}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Test AI
        </button>

        <SearchBar
          value={searchInput}
          onChange={setSearchInput}
        />

        <FilterDropdown
          label="All severities"
          value={filters.severity}
          options={SEVERITY_ORDER}
          onChange={(v) => updateFilters({ severity: v })}
        />

        <FilterDropdown
          label="All statuses"
          value={filters.status}
          options={STATUS_ORDER}
          onChange={(v) => updateFilters({ status: v })}
        />

      </div>

      <Card padded={false}>
        <div className="p-5 pb-0">
          {loading ? (
            <LoadingSpinner label="Loading incidents..." />
          ) : items.length === 0 ? (
            <EmptyState
              icon={HiOutlineInbox}
              title="No incidents match your filters"
              description="Try adjusting the search term or clearing a filter."
            />
          ) : (
            <Table columns={COLUMNS}>
              {items.map((incident) => (
                <TableRow
                  key={incident.id}
                  onClick={() => navigate(`/incidents/${incident.id}`)}
                >
                  <TableCell className="mono text-xs text-[var(--color-text-muted)]">
                    {incident.id}
                  </TableCell>

                  <TableCell className="max-w-xs truncate font-medium">
                    {incident.title}
                  </TableCell>

                  <TableCell>
                    <SeverityBadge severity={incident.severity} />
                  </TableCell>

                  <TableCell>
                    <StatusBadge status={incident.status} />
                  </TableCell>

                  <TableCell className="text-[var(--color-text-secondary)] text-xs">
                    {formatDate(incident.createdAt)}
                  </TableCell>
                </TableRow>
              ))}
            </Table>
          )}
        </div>

        <div className="px-5 pb-5">
          <Pagination
            page={page || filters.page}
            totalPages={totalPages}
            total={total}
            pageSize={pageSize || filters.pageSize}
            onChange={(p) => updateFilters({ page: p })}
          />
        </div>
      </Card>

    </div>
  );
}