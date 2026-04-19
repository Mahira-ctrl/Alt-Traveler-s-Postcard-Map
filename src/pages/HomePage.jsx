import { Link } from "react-router-dom";
import PolaroidCard from "../components/PolaroidCard.jsx";
import { destinations } from "../data/destinations.js";
import hero from "../assets/hero-destination.jpg";

export default function HomePage() {
  const featured = destinations.slice(0, 3);
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${hero})` }} />
        <div className="hero-veil" />
        <div className="container hero-inner">
          <div className="hero-eyebrow">Bureau of Hidden Atlases · Est. 1894</div>
          <h1 className="hero-title">
            Collect places,
            <br />
            not photos.
          </h1>
          <p className="hero-lead">
            An atlas of underrated destinations whispered between travelers who
            believe the best places aren't trending — they're remembered.
          </p>
          <div className="hero-cta">
            <Link to="/destinations" className="btn-seal">Open the Atlas</Link>
            <Link to="/signup" className="btn-ghost">Begin a journey</Link>
          </div>
        </div>
      </section>

      <section className="container featured">
        <div className="section-head">
          <div className="eyebrow">Three from the latest dispatch</div>
          <h2 className="section-title">Whispered destinations</h2>
          <div className="ink-divider" />
        </div>
        <div className="polaroid-grid">
          {featured.map((d, i) => (
            <PolaroidCard key={d.slug} d={d} rotate={i % 2 === 0 ? -3 : 2.5} />
          ))}
        </div>
        <div className="centered">
          <Link to="/destinations" className="btn-seal">See the full atlas</Link>
        </div>
      </section>
    </div>
  );
}
