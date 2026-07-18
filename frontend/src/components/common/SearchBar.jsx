import { HiMagnifyingGlass } from "react-icons/hi2";

export default function SearchBar({ value, onChange, placeholder = "Search incidents..." }) {
  return (
    <div className="relative flex-1 min-w-[200px]">
      <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-text-muted)]" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-lg pl-9 pr-3 py-2 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] transition-colors"
      />
    </div>
  );
}
