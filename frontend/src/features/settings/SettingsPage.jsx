import { useEffect, useState } from "react";
import Card from "../../components/common/Card";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { getSystemSettings } from "../../api/settings.api";
import { formatDateTime } from "../../utils/formatDate";

const STATUS_STYLE = {
  Connected: "text-[var(--color-success)] bg-[var(--color-success-bg)]",
  Operational: "text-[var(--color-success)] bg-[var(--color-success-bg)]",
  Healthy: "text-[var(--color-success)] bg-[var(--color-success-bg)]",
  Degraded: "text-[var(--color-high)] bg-[var(--color-high-bg)]",
  Down: "text-[var(--color-critical)] bg-[var(--color-critical-bg)]",
};

function StatusPill({ status }) {
  return (
    <span
      className={`text-xs font-medium px-2 py-0.5 rounded-md ${
        STATUS_STYLE[status] || "text-[var(--color-text-secondary)] bg-[var(--color-surface-2)]"
      }`}
    >
      {status}
    </span>
  );
}

function InfoRow({ label, value, mono = false }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-[var(--color-border)] last:border-0">
      <span className="text-xs text-[var(--color-text-muted)]">{label}</span>
      <span className={`text-sm ${mono ? "mono" : ""}`}>{value}</span>
    </div>
  );
}

function SectionCard({ title, description, status, children }) {
  return (
    <Card className="flex flex-col gap-1">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <h2 className="text-sm font-medium">{title}</h2>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{description}</p>
        </div>
        {status && <StatusPill status={status} />}
      </div>
      <div className="flex flex-col">{children}</div>
    </Card>
  );
}

export default function SettingsPage() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    getSystemSettings().then(setSettings);
  }, []);

  if (!settings) return <LoadingSpinner label="Loading system settings..." />;

  const { api, aiModel, pinecone, system } = settings;

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SectionCard
          title="API configuration"
          description="Connection to the deployed incident resolution backend"
          status={api.status}
        >
          <InfoRow label="Base URL" value={api.baseUrl} mono />
          <InfoRow label="Version" value={api.version} mono />
          <InfoRow label="Auth method" value={api.authMethod} />
        </SectionCard>

        <SectionCard
          title="AI model"
          description="Model powering classification and resolution agents"
          status={aiModel.status}
        >
          <InfoRow label="Provider" value={aiModel.provider} />
          <InfoRow label="Model" value={aiModel.model} mono />
          <InfoRow label="Role" value={aiModel.role} />
          <InfoRow label="Avg latency" value={`${aiModel.avgLatencyMs}ms`} mono />
        </SectionCard>

        <SectionCard
          title="Pinecone"
          description="Vector store backing the retrieval-augmented agent"
          status={pinecone.status}
        >
          <InfoRow label="Index name" value={pinecone.indexName} mono />
          <InfoRow label="Dimensions" value={pinecone.dimensions} mono />
          <InfoRow label="Metric" value={pinecone.metric} />
          <InfoRow label="Region" value={pinecone.region} mono />
          <InfoRow label="Vector count" value={pinecone.vectorCount.toLocaleString()} mono />
        </SectionCard>

        <SectionCard
          title="System status"
          description="Orchestration layer and deployment health"
          status={system.status}
        >
          <InfoRow label="Orchestrator" value={system.orchestrator} mono />
          <InfoRow label="Deployment" value={system.deployment} />
          <InfoRow label="Uptime" value={system.uptime} mono />
          <InfoRow label="Last deploy" value={formatDateTime(system.lastDeploy)} />
        </SectionCard>
      </div>

      <Card>
        <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
          Settings shown here are read-only and reflect the live status of the deployed backend.
          To change API endpoints or model configuration, update the n8n workflow or the{" "}
          <span className="mono">.env</span> file directly — this dashboard does not modify backend
          configuration.
        </p>
      </Card>
    </div>
  );
}
