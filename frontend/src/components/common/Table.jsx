export default function Table({ columns, children }) {
  return (
    <div className="overflow-x-auto -mx-5">
      <table className="w-full text-sm border-collapse min-w-[720px]">
        <thead>
          <tr className="text-left border-b border-[var(--color-border)]">
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-5 py-3 font-medium text-[var(--color-text-secondary)] text-xs uppercase tracking-wide"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export function TableRow({ children, onClick, className = "" }) {
  return (
    <tr
      onClick={onClick}
      className={`border-b border-[var(--color-border)] last:border-0 ${
        onClick ? "cursor-pointer hover:bg-[var(--color-surface-2)]" : ""
      } transition-colors ${className}`}
    >
      {children}
    </tr>
  );
}

export function TableCell({ children, className = "" }) {
  return <td className={`px-5 py-3.5 align-middle ${className}`}>{children}</td>;
}
