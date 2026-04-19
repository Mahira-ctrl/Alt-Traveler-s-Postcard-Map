import { useMemo, useState } from "react";
import DestinationCard from "../components/DestinationCard.jsx";
import { destinations } from "../data/destinations.js";

const RARITIES = ["All", "Hidden", "Whispered", "Forgotten"];

export default function DestinationsPage() {
  const [filter, setFilter] = useState("All");
  const list = useMemo(
    () => (filter === "All" ? destinations : destinations.filter((d) => d.rarity === filter)),
    [filter]
  );
  return (
    <div className="atlas">
      <div className="container atlas-head">
        <div className="eyebrow">The Atlas · {destinations.length} entries</div>
        <h1 className="page-title">All known whispered places</h1>
        <div className="ink-divider" />
        <div className="rarity-filters">
          {RARITIES.map((r) => (
            <button
              key={r}
              onClick={() => setFilter(r)}
              className={`rarity-chip ${filter === r ? "is-active" : ""}`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <div className="container dest-grid">
        {list.map((d) => (
          <DestinationCard key={d.slug} d={d} />
        ))}
      </div>
    </div>
  );
}
