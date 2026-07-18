export default function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center gap-2">
      {Icon && <Icon className="h-8 w-8 text-[var(--color-text-muted)] mb-1" />}
      <p className="text-sm font-medium text-[var(--color-text-secondary)]">{title}</p>
      {description && <p className="text-xs text-[var(--color-text-muted)] max-w-xs">{description}</p>}
    </div>
  );
}
