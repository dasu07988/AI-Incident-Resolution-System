import { NavLink } from "react-router-dom";
import {
  HiOutlineSquares2X2,
  HiOutlineListBullet,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineRectangleGroup,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

const NAV_ITEMS = [
  { to: "/", label: "Dashboard", icon: HiOutlineSquares2X2, end: true },
  { to: "/incidents", label: "Incidents", icon: HiOutlineListBullet },
  { to: "/analytics", label: "Analytics", icon: HiOutlineChartBar },
  { to: "/resolution-history", label: "AI resolution history", icon: HiOutlineClock },
  { to: "/trello", label: "Trello", icon: HiOutlineRectangleGroup },
  { to: "/settings", label: "Settings", icon: HiOutlineCog6Tooth },
];

export default function Sidebar() {
  return (
    <aside className="w-60 shrink-0 border-r border-[var(--color-border)] bg-[var(--color-surface-1)] flex flex-col h-screen sticky top-0">
      <div className="flex items-center gap-2.5 px-5 h-16 border-b border-[var(--color-border)]">
  <img
    src="/public/ai-incident-logo..svg"
    alt="Enterprise AI"
    className="h-8 w-8 object-contain"
  />

  <div>
    <p className="text-sm font-semibold leading-tight text-white">
      Enterprise AI
    </p>

    <p className="text-[11px] text-[var(--color-text-muted)] leading-tight">
      Incident Resolution Platform
    </p>
  </div>
</div>
      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-[var(--color-accent-dim)] text-[var(--color-accent)] font-medium"
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-text-primary)]"
              }`
            }
          >
            <Icon className="h-[18px] w-[18px] shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="px-5 py-4 border-t border-[var(--color-border)]">
        <p className="text-[11px] text-[var(--color-text-muted)] mono">v1.4.2 · agent-core</p>
      </div>
    </aside>
  );
}
