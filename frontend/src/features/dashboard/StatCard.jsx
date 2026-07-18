import Card from "../../components/common/Card";

export default function StatCard({ label, value, accentClass = "text-[var(--color-text-primary)]", suffix = "" }) {
  return (
    <Card className="flex flex-col gap-1.5">
      <span className="text-xs text-[var(--color-text-secondary)]">{label}</span>
      <span className={`text-2xl font-medium mono ${accentClass}`}>
        {value}
        {suffix && <span className="text-sm ml-0.5">{suffix}</span>}
      </span>
    </Card>
  );
}
