import { useParams, Link } from "react-router-dom";
import { getDestination } from "../data/destinations.js";

export default function DestinationDetailPage() {
  const { slug } = useParams();
  const d = getDestination(slug);
  if (!d) {
    return (
      <div className="container detail-missing">
        <h1>Not on the map</h1>
        <Link to="/destinations" className="btn-seal">Back to the atlas</Link>
      </div>
    );
  }
  return (
    <article className="detail">
      <div className="detail-hero" style={{ backgroundImage: `url(${d.image})` }}>
        <div className="detail-hero-veil" />
        <div className="container detail-hero-inner">
          <div className="eyebrow">{d.continent} · {d.country}</div>
          <h1 className="detail-title">{d.name}</h1>
          <p className="detail-tagline">{d.tagline}</p>
          <div className="detail-meta">
            <span className="rarity-chip is-active">{d.rarity}</span>
            <span>Best season · {d.bestSeason}</span>
            <span>{d.coordinates}</span>
          </div>
        </div>
      </div>

      <div className="container detail-body">
        <section className="detail-col">
          <h2>The dispatch</h2>
          <p className="detail-prose">{d.description}</p>

          <h2 className="mt-12">Wayfarer's notes</h2>
          <ul className="comments">
            {d.comments.map((c, i) => (
              <li key={i}>
                <div className="comment-meta">
                  <strong>{c.author}</strong> · <em>{c.date}</em>
                </div>
                <p>{c.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <aside className="detail-side">
          <h3>Lore</h3>
          <ol className="lore">
            {d.loreEntries.map((l, i) => (
              <li key={i}>
                <span className="lore-date">{l.date}</span>
                <span>{l.note}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </article>
  );
}
