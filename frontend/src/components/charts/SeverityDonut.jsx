import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = {
  Critical: "#F0424B",
  High: "#F5A623",
  Medium: "#3B82F6",
  Low: "#8B95A5",
};

export default function SeverityDonut({ data }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={3}
          stroke="none"
        >
          {data.map((entry) => (
            <Cell key={entry.name} fill={COLORS[entry.name] || "#5A6472"} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{ background: "#1A1F29", border: "0.5px solid #2E3644", borderRadius: 8, fontSize: 12, color: "#E6E9EF" }}
        />
        <Legend
          layout="vertical"
          verticalAlign="middle"
          align="right"
          wrapperStyle={{ fontSize: 12, color: "#8B95A5" }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
