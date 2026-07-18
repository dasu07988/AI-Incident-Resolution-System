import { useEffect, useState } from "react";
import { HiOutlineRectangleGroup, HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import Card from "../../components/common/Card";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import EmptyState from "../../components/common/EmptyState";
import { SeverityBadge } from "../../components/common/SeverityBadge";
import { getLinkedTrelloCards } from "../../api/trello.api";

const TRELLO_STATUS_COLOR = {
  "To Do": "text-[var(--color-medium)] bg-[var(--color-medium-bg)]",
  "In Progress": "text-[var(--color-high)] bg-[var(--color-high-bg)]",
  Review: "text-[var(--color-accent)] bg-[var(--color-accent-dim)]",
  Done: "text-[var(--color-success)] bg-[var(--color-success-bg)]",
};

export default function TrelloIntegration() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLinkedTrelloCards()
      .then(setCards)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner label="Loading Trello cards..." />;
  if (cards.length === 0)
    return <EmptyState icon={HiOutlineRectangleGroup} title="No incidents are linked to Trello yet" />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {cards.map((card) => (
        <Card key={card.incidentId} className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-2">
            <span className="mono text-xs text-[var(--color-text-muted)]">{card.incidentId}</span>
            <SeverityBadge severity={card.severity} />
          </div>
          <p className="text-sm font-medium leading-snug">{card.incidentTitle}</p>
          <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
            <span>{card.board}</span>
            <span className={`px-2 py-0.5 rounded-md font-medium ${TRELLO_STATUS_COLOR[card.status]}`}>
              {card.status}
            </span>
          </div>
          <a
            href={card.cardUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-[var(--color-accent)] hover:underline mt-1"
          >
            Open in Trello <HiOutlineArrowTopRightOnSquare className="h-3.5 w-3.5" />
          </a>
        </Card>
      ))}
    </div>
  );
}
