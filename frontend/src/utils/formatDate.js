export function formatDate(isoString, options = {}) {
  if (!isoString) return "—";
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: options.withYear === false ? undefined : "numeric",
  });
}

export function formatDateTime(isoString) {
  if (!isoString) return "—";
  const date = new Date(isoString);
  return `${date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}, ${date.toLocaleTimeString(
    "en-US",
    { hour: "2-digit", minute: "2-digit" }
  )}`;
}

export function timeAgo(isoString) {
  if (!isoString) return "—";
  const diffMs = Date.now() - new Date(isoString).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}
