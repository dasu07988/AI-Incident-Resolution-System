export default function LoadingSpinner({ label = "Loading..." }) {
  return (
    <div className="flex items-center justify-center gap-3 py-16 text-[var(--color-text-muted)] text-sm">
      <span className="h-4 w-4 rounded-full border-2 border-[var(--color-border-strong)] border-t-[var(--color-accent)] animate-spin" />
      {label}
    </div>
  );
}
