import { Outlet, useMatches } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppLayout() {
  const matches = useMatches();
  const current = matches[matches.length - 1];
  const { title, subtitle } = current?.handle || {};

  return (
    <div className="flex min-h-screen bg-[var(--color-bg)]">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <Topbar title={title || "Dashboard"} subtitle={subtitle} />
        <main className="p-6 max-w-[1400px] mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
