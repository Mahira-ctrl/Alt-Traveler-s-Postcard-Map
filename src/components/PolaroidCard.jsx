import { useState } from "react";

export default function PolaroidCard({ d, rotate = 0 }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="polaroid-scene" style={{ transform: `rotate(${rotate}deg)` }}>
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className={`polaroid-flipper ${flipped ? "is-flipped" : ""}`}
        aria-label={`Flip ${d.name}`}
      >
        <div className="polaroid-face polaroid-front">
          <span className="polaroid-tape" />
          <div className="polaroid-photo">
            <img src={d.image} alt={d.name} />
          </div>
          <div className="polaroid-caption">{d.caption}</div>
        </div>
        <div className="polaroid-face polaroid-back">
          <div className="polaroid-back-inner">
            <div className="polaroid-back-name">{d.name}</div>
            <div className="polaroid-back-coords">{d.coordinates}</div>
            <p className="polaroid-back-tag">{d.tagline}</p>
            <div className="polaroid-back-meta">
              {d.continent} · {d.bestSeason}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
