// Single source of truth mapping severity/status -> visual treatment.
// Every badge, stat card, and chart references this instead of hardcoding colors.

export const SEVERITY_CONFIG = {
  Critical: {
    label: "Critical",
    text: "text-[var(--color-critical)]",
    bg: "bg-[var(--color-critical-bg)]",
    dot: "bg-[var(--color-critical)]",
  },
  High: {
    label: "High",
    text: "text-[var(--color-high)]",
    bg: "bg-[var(--color-high-bg)]",
    dot: "bg-[var(--color-high)]",
  },
  Medium: {
    label: "Medium",
    text: "text-[var(--color-medium)]",
    bg: "bg-[var(--color-medium-bg)]",
    dot: "bg-[var(--color-medium)]",
  },
  Low: {
    label: "Low",
    text: "text-[var(--color-low)]",
    bg: "bg-[var(--color-low-bg)]",
    dot: "bg-[var(--color-low)]",
  },
};

export const STATUS_CONFIG = {
  Open: { label: "Open", text: "text-[var(--color-medium)]", bg: "bg-[var(--color-medium-bg)]" },
  "In progress": { label: "In progress", text: "text-[var(--color-high)]", bg: "bg-[var(--color-high-bg)]" },
  Resolved: { label: "Resolved", text: "text-[var(--color-success)]", bg: "bg-[var(--color-success-bg)]" },
  Escalated: { label: "Escalated", text: "text-[var(--color-critical)]", bg: "bg-[var(--color-critical-bg)]" },
};

export const SEVERITY_ORDER = ["Critical", "High", "Medium", "Low"];
export const STATUS_ORDER = ["Open", "In progress", "Escalated", "Resolved"];
