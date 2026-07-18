import Badge from "./Badge";
import { SEVERITY_CONFIG, STATUS_CONFIG } from "../../utils/severityConfig";

export function SeverityBadge({ severity, size }) {
  const cfg = SEVERITY_CONFIG[severity] || SEVERITY_CONFIG.Low;
  return <Badge label={cfg.label} textClass={cfg.text} bgClass={cfg.bg} dotClass={cfg.dot} size={size} />;
}

export function StatusBadge({ status, size }) {
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.Open;
  return <Badge label={cfg.label} textClass={cfg.text} bgClass={cfg.bg} size={size} />;
}
