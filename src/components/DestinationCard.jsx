import { Link } from "react-router-dom";

export default function DestinationCard({ d }) {
  return (
    <Link to={`/destinations/${d.slug}`} className="dest-card">
      <article className="dest-card-inner">
        <div className="dest-card-img-wrap">
          <img src={d.image} alt={d.name} loading="lazy" className="dest-card-img" />
        </div>
        <div className="dest-card-overlay" />
        <span className="dest-card-rarity">{d.rarity}</span>
        <div className="dest-card-text">
          <div className="dest-card-meta">
            {d.continent} · {d.bestSeason}
          </div>
          <h3 className="dest-card-name">{d.name}</h3>
          <p className="dest-card-tagline">{d.tagline}</p>
        </div>
      </article>
    </Link>
  );
}
