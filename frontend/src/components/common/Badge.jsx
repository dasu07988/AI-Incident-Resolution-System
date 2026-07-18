export default function Badge({ label, textClass, bgClass, dotClass, size = "sm" }) {
  const sizing = size === "sm" ? "text-xs px-2 py-0.5" : "text-sm px-2.5 py-1";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md font-medium ${sizing} ${bgClass} ${textClass}`}
    >
      {dotClass && <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />}
      {label}
    </span>
  );
}
