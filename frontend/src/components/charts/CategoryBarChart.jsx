import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const PALETTE = ["#00D9B5", "#3B82F6", "#F5A623", "#F0424B", "#8B5CF6", "#EC4899", "#22C55E", "#8B95A5"];

export default function CategoryBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} layout="vertical" margin={{ top: 8, right: 24, left: 8, bottom: 0 }}>
        <CartesianGrid stroke="#232935" strokeDasharray="3 3" horizontal={false} />
        <XAxis type="number" stroke="#5A6472" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          type="category"
          dataKey="name"
          stroke="#8B95A5"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          width={140}
        />
        <Tooltip
          contentStyle={{ background: "#1A1F29", border: "0.5px solid #2E3644", borderRadius: 8, fontSize: 12, color: "#E6E9EF" }}
          cursor={{ fill: "#1A1F29" }}
        />
        <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={16}>
          {data.map((entry, idx) => (
            <Cell key={entry.name} fill={PALETTE[idx % PALETTE.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
