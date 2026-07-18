import { useAppContext } from "../../context/AppContext";

export default function Topbar({ title, subtitle }) {
  const { systemStatus, statusLoading } = useAppContext();
  const healthy = systemStatus?.system?.status === "Healthy";

  return (
    <header className="h-16 border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur sticky top-0 z-10 flex items-center justify-between px-6">
      <div>
        <h1 className="text-[15px] font-medium leading-tight">{title}</h1>
        {subtitle && <p className="text-xs text-[var(--color-text-muted)] leading-tight mt-0.5">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
        {!statusLoading && (
          <>
            <span className="relative flex h-2 w-2">
              <span
                className={`pulse-dot absolute inline-flex h-full w-full rounded-full ${
                  healthy ? "bg-[var(--color-accent)]" : "bg-[var(--color-critical)]"
                }`}
              />
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${
                  healthy ? "bg-[var(--color-accent)]" : "bg-[var(--color-critical)]"
                }`}
              />
            </span>
            <span className="mono">{healthy ? "systems operational" : "degraded"}</span>
            <span className="text-[var(--color-text-muted)]">·</span>
            <span className="mono">{systemStatus?.aiModel?.avgLatencyMs}ms avg</span>
          </>
        )}
      </div>
    </header>
  );
}
