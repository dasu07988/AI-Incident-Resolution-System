import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HiOutlineArrowLeft, HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import Card from "../../components/common/Card";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import EmptyState from "../../components/common/EmptyState";
import { SeverityBadge, StatusBadge } from "../../components/common/SeverityBadge";
import { getIncidentById } from "../../api/incidents.api";
import { formatDateTime } from "../../utils/formatDate";

export default function IncidentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [incident, setIncident] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getIncidentById(id)
      .then(setIncident)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <LoadingSpinner label="Loading incident..." />;
  if (error || !incident)
    return (
      <EmptyState title="Incident not found" description={error || `No incident matches ${id}.`} />
    );

  return (
    <div className="flex flex-col gap-5">
      <button
        onClick={() => navigate("/incidents")}
        className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] w-fit"
      >
        <HiOutlineArrowLeft className="h-4 w-4" />
        Back to incidents
      </button>

      <Card className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <span className="mono text-xs text-[var(--color-text-muted)]">{incident.id}</span>
            <h1 className="text-lg font-medium mt-0.5">{incident.title}</h1>
          </div>
          <div className="flex items-center gap-2">
            <SeverityBadge severity={incident.severity} size="md" />
            <StatusBadge status={incident.status} size="md" />
          </div>
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{incident.description}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 border-t border-[var(--color-border)] mt-1">
          <Field label="Classification" value={incident.classification} />
          <Field label="Category" value={incident.category} />
          <Field label="Created" value={formatDateTime(incident.createdAt)} />
          <Field label="Resolved" value={incident.resolvedAt ? formatDateTime(incident.resolvedAt) : "—"} />
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card className="flex flex-col gap-2">
          <h2 className="text-sm font-medium">Root cause</h2>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{incident.rootCause}</p>
        </Card>
        <Card className="flex flex-col gap-2">
          <h2 className="text-sm font-medium">AI resolution</h2>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{incident.aiResolution}</p>
        </Card>
      </div>

      <Card>
        <h2 className="text-sm font-medium mb-3">Recommended actions</h2>
        <ul className="flex flex-col gap-2">
          {incident.recommendedActions.map((action, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]">
              <span className="mono text-xs text-[var(--color-accent)] mt-0.5">{String(i + 1).padStart(2, "0")}</span>
              {action}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-sm font-medium mb-1">Trello status</h2>
          <p className="text-xs text-[var(--color-text-muted)]">
            {incident.trello.linked ? `${incident.trello.board} · ${incident.trello.status}` : "Not linked to a Trello card"}
          </p>
        </div>
        {incident.trello.linked && (
          <a
            href={incident.trello.cardUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-[var(--color-accent)] hover:underline"
          >
            Open card <HiOutlineArrowTopRightOnSquare className="h-3.5 w-3.5" />
          </a>
        )}
      </Card>
    </div>
  );
}

function Field({ label, value }) {
  return (
    <div>
      <p className="text-xs text-[var(--color-text-muted)] mb-0.5">{label}</p>
      <p className="text-sm">{value}</p>
    </div>
  );
}
