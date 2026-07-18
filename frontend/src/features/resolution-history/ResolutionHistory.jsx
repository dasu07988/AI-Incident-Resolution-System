import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/common/Card";
import SearchBar from "../../components/common/SearchBar";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import EmptyState from "../../components/common/EmptyState";
import { HiOutlineClock, HiOutlineChevronDown } from "react-icons/hi2";
import { getResolutionHistory } from "../../api/resolutionHistory.api";
import { useDebounce } from "../../hooks/useDebounce";
import { formatDateTime } from "../../utils/formatDate";

export default function ResolutionHistory() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);
  const debouncedSearch = useDebounce(search, 350);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getResolutionHistory({ search: debouncedSearch })
      .then(setItems)
      .finally(() => setLoading(false));
  }, [debouncedSearch]);

  return (
    <div className="flex flex-col gap-4">
      <SearchBar value={search} onChange={setSearch} placeholder="Search resolution history..." />

      {loading ? (
        <LoadingSpinner label="Loading resolution history..." />
      ) : items.length === 0 ? (
        <EmptyState icon={HiOutlineClock} title="No AI resolution records match your search" />
      ) : (
        <div className="flex flex-col gap-3">
          {items.map((entry) => {
            const isOpen = expanded === entry.id;
            return (
              <Card key={entry.id} padded={false}>
                <button
                  onClick={() => setExpanded(isOpen ? null : entry.id)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="mono text-xs text-[var(--color-text-muted)] shrink-0">{entry.incidentId}</span>
                    <span className="text-sm font-medium truncate">{entry.title}</span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-[var(--color-text-muted)]">{formatDateTime(entry.timestamp)}</span>
                    <HiOutlineChevronDown
                      className={`h-4 w-4 text-[var(--color-text-muted)] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 flex flex-col gap-4 border-t border-[var(--color-border)] pt-4">
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)] mb-1">Prompt</p>
                      <p className="text-sm text-[var(--color-text-secondary)] bg-[var(--color-surface-2)] rounded-lg p-3 mono text-xs leading-relaxed">
                        {entry.prompt}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-[var(--color-text-muted)] mb-2">Agent timeline</p>
                      <div className="flex flex-col gap-2">
                        {entry.agentSteps.map((step, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm">
                            <span className="w-20 shrink-0 text-xs font-medium text-[var(--color-accent)]">
                              {step.agent}
                            </span>
                            <span className="flex-1 text-[var(--color-text-secondary)] text-xs">{step.action}</span>
                            <span className="mono text-xs text-[var(--color-text-muted)] shrink-0">
                              {step.durationMs}ms
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-[var(--color-text-muted)] mb-1">Response</p>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{entry.response}</p>
                    </div>

                    <div className="flex items-center gap-6 pt-1">
                      <Metric label="Retrieval precision" value={entry.retrievalPrecision} />
                      <Metric label="Routing accuracy" value={entry.routingAccuracy} />
                      <Metric label="Resolution accuracy" value={entry.resolutionAccuracy} />
                      <button
                        onClick={() => navigate(`/incidents/${entry.incidentId}`)}
                        className="ml-auto text-xs text-[var(--color-accent)] hover:underline"
                      >
                        View incident
                      </button>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div>
      <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wide">{label}</p>
      <p className="text-sm mono">{value}</p>
    </div>
  );
}
