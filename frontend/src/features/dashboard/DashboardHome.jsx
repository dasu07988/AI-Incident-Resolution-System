import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/common/Card";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import StatCard from "./StatCard";
import TrendLineChart from "../../components/charts/TrendLineChart";
import SeverityDonut from "../../components/charts/SeverityDonut";
import { useIncidentSummary } from "../../hooks/useIncidents";
import { getAnalytics } from "../../api/analytics.api";
import { getIncidents } from "../../api/incidents.api";
import { SeverityBadge, StatusBadge } from "../../components/common/SeverityBadge";
import { formatDate } from "../../utils/formatDate";

export default function DashboardHome() {
  const { summary, loading: summaryLoading } = useIncidentSummary();
  const [analytics, setAnalytics] = useState(null);
  const [recent, setRecent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAnalytics().then(setAnalytics);
    getIncidents({ page: 1, pageSize: 5 }).then((res) => setRecent(res.items));
  }, []);

  if (summaryLoading || !summary) return <LoadingSpinner label="Loading dashboard..." />;

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard label="Total incidents" value={summary.total} />
        <StatCard label="Critical" value={summary.critical} accentClass="text-[var(--color-critical)]" />
        <StatCard label="High" value={summary.high} accentClass="text-[var(--color-high)]" />
        <StatCard label="Medium" value={summary.medium} accentClass="text-[var(--color-medium)]" />
        <StatCard label="Low" value={summary.low} accentClass="text-[var(--color-low)]" />
        <StatCard
          label="Resolution success rate"
          value={summary.successRate}
          suffix="%"
          accentClass="text-[var(--color-success)]"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <h2 className="text-sm font-medium mb-1">Incident trend</h2>
          <p className="text-xs text-[var(--color-text-muted)] mb-2">Opened vs resolved, last 6 months</p>
          {analytics ? <TrendLineChart data={analytics.trend} /> : <LoadingSpinner />}
        </Card>
        <Card>
          <h2 className="text-sm font-medium mb-1">Severity distribution</h2>
          <p className="text-xs text-[var(--color-text-muted)] mb-2">Across all open and resolved incidents</p>
          {analytics ? <SeverityDonut data={analytics.severityDistribution} /> : <LoadingSpinner />}
        </Card>
      </div>

      <Card padded={false}>
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <h2 className="text-sm font-medium">Recent incidents</h2>
          <button
            onClick={() => navigate("/incidents")}
            className="text-xs text-[var(--color-accent)] hover:underline"
          >
            View all
          </button>
        </div>
        <div className="divide-y divide-[var(--color-border)]">
          {recent.map((incident) => (
            <div
              key={incident.id}
              onClick={() => navigate(`/incidents/${incident.id}`)}
              className="flex items-center justify-between gap-4 px-5 py-3 hover:bg-[var(--color-surface-2)] cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="mono text-xs text-[var(--color-text-muted)] shrink-0">{incident.id}</span>
                <span className="text-sm truncate">{incident.title}</span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <SeverityBadge severity={incident.severity} />
                <StatusBadge status={incident.status} />
                <span className="text-xs text-[var(--color-text-muted)] w-16 text-right">
                  {formatDate(incident.createdAt, { withYear: false })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
