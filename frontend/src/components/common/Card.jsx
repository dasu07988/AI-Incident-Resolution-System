export default function Card({ children, className = "", padded = true, as: Tag = "div", ...rest }) {
  return (
    <Tag
      className={`bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-xl ${
        padded ? "p-5" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
