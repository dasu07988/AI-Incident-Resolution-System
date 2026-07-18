import { useEffect, useState } from "react";
import Card from "../../components/common/Card";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import TrendLineChart from "../../components/charts/TrendLineChart";
import SeverityDonut from "../../components/charts/SeverityDonut";
import CategoryBarChart from "../../components/charts/CategoryBarChart";
import { getAnalytics } from "../../api/analytics.api";

export default function AnalyticsPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getAnalytics().then(setData);
  }, []);

  if (!data) return <LoadingSpinner label="Loading analytics..." />;

  const { resolutionStats, monthlyReports } = data;

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatBlock label="Total incidents" value={resolutionStats.totalIncidents} />
        <StatBlock label="Resolved" value={resolutionStats.resolved} />
        <StatBlock
          label="Success rate"
          value={`${resolutionStats.successRate}%`}
          accent="text-[var(--color-success)]"
        />
        <StatBlock label="Avg resolution time" value={`${resolutionStats.avgResolutionHours}h`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <h2 className="text-sm font-medium mb-1">Incident trends</h2>
          <p className="text-xs text-[var(--color-text-muted)] mb-2">Opened vs resolved, last 6 months</p>
          <TrendLineChart data={data.trend} />
        </Card>
        <Card>
          <h2 className="text-sm font-medium mb-1">Severity distribution</h2>
          <p className="text-xs text-[var(--color-text-muted)] mb-2">Share of incidents by severity</p>
          <SeverityDonut data={data.severityDistribution} />
        </Card>
      </div>

      <Card>
        <h2 className="text-sm font-medium mb-1">Incident categories</h2>
        <p className="text-xs text-[var(--color-text-muted)] mb-2">Volume by root system / category</p>
        <CategoryBarChart data={data.categoryBreakdown} />
      </Card>

      <Card padded={false}>
        <div className="p-5 pb-3">
          <h2 className="text-sm font-medium">Monthly reports</h2>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
            Retrieval precision and routing accuracy per month
          </p>
        </div>
        <div className="overflow-x-auto -mx-0">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="text-left border-y border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] uppercase tracking-wide">
                <th className="px-5 py-2.5 font-medium">Month</th>
                <th className="px-5 py-2.5 font-medium">Incidents</th>
                <th className="px-5 py-2.5 font-medium">Resolution rate</th>
                <th className="px-5 py-2.5 font-medium">Avg resolution time</th>
                <th className="px-5 py-2.5 font-medium">Retrieval precision</th>
                <th className="px-5 py-2.5 font-medium">Routing accuracy</th>
              </tr>
            </thead>
            <tbody>
              {monthlyReports.map((row) => (
                <tr key={row.month} className="border-b border-[var(--color-border)] last:border-0">
                  <td className="px-5 py-3 font-medium">{row.month}</td>
                  <td className="px-5 py-3 mono text-[var(--color-text-secondary)]">{row.totalIncidents}</td>
                  <td className="px-5 py-3 mono text-[var(--color-success)]">{row.resolutionRate}%</td>
                  <td className="px-5 py-3 mono text-[var(--color-text-secondary)]">{row.avgResolutionTimeHrs}h</td>
                  <td className="px-5 py-3 mono text-[var(--color-text-secondary)]">{row.avgRetrievalPrecision}</td>
                  <td className="px-5 py-3 mono text-[var(--color-text-secondary)]">{row.avgRoutingAccuracy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

function StatBlock({ label, value, accent = "text-[var(--color-text-primary)]" }) {
  return (
    <Card className="flex flex-col gap-1.5">
      <span className="text-xs text-[var(--color-text-secondary)]">{label}</span>
      <span className={`text-2xl font-medium mono ${accent}`}>{value}</span>
    </Card>
  );
}
