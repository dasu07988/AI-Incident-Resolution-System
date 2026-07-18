import { useNavigate } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center py-24 text-center gap-3">
      <HiOutlineExclamationCircle className="h-8 w-8 text-[var(--color-text-muted)]" />

      <p className="text-sm font-medium text-[var(--color-text-secondary)]">
        Page not found
      </p>

      <p className="text-xs text-[var(--color-text-muted)] max-w-xs">
        The page you're looking for doesn't exist or may have moved.
      </p>

      <button
        onClick={() => navigate("/")}
        className="text-xs text-[var(--color-accent)] hover:underline mt-1"
      >
        Back to dashboard
      </button>
    </div>
  );
}
