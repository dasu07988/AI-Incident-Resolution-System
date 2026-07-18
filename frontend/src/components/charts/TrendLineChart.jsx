import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const tooltipStyle = {
  background: "#1A1F29",
  border: "0.5px solid #2E3644",
  borderRadius: 8,
  fontSize: 12,
  color: "#E6E9EF",
};

export default function TrendLineChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <CartesianGrid stroke="#232935" strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" stroke="#5A6472" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#5A6472" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip contentStyle={tooltipStyle} labelStyle={{ color: "#8B95A5" }} />
        <Legend wrapperStyle={{ fontSize: 12, color: "#8B95A5" }} />
        <Line type="monotone" dataKey="incidents" name="Incidents" stroke="#F5A623" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="resolved" name="Resolved" stroke="#00D9B5" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
