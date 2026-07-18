import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function Pagination({ page, totalPages, onChange, total, pageSize }) {
  if (totalPages <= 1) return null;

  const pages = [];
  const maxShown = 5;
  let start = Math.max(1, page - Math.floor(maxShown / 2));
  let end = Math.min(totalPages, start + maxShown - 1);
  start = Math.max(1, end - maxShown + 1);
  for (let p = start; p <= end; p++) pages.push(p);

  const rangeStart = (page - 1) * pageSize + 1;
  const rangeEnd = Math.min(page * pageSize, total);

  return (
    <div className="flex items-center justify-between mt-4 text-sm">
      <span className="text-[var(--color-text-muted)]">
        Showing <span className="text-[var(--color-text-secondary)]">{rangeStart}–{rangeEnd}</span> of{" "}
        <span className="text-[var(--color-text-secondary)]">{total}</span>
      </span>
      <div className="flex items-center gap-1">
        <button
          onClick={() => onChange(Math.max(1, page - 1))}
          disabled={page === 1}
          className="p-1.5 rounded-md border border-[var(--color-border)] disabled:opacity-30 hover:bg-[var(--color-surface-2)] disabled:hover:bg-transparent"
          aria-label="Previous page"
        >
          <HiChevronLeft className="h-4 w-4" />
        </button>
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={`h-8 w-8 rounded-md text-sm ${
              p === page
                ? "bg-[var(--color-accent-dim)] text-[var(--color-accent)] font-medium"
                : "hover:bg-[var(--color-surface-2)] text-[var(--color-text-secondary)]"
            }`}
          >
            {p}
          </button>
        ))}
        <button
          onClick={() => onChange(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className="p-1.5 rounded-md border border-[var(--color-border)] disabled:opacity-30 hover:bg-[var(--color-surface-2)] disabled:hover:bg-transparent"
          aria-label="Next page"
        >
          <HiChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
