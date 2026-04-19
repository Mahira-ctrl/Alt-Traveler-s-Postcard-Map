import { NavLink, Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">W</span>
          <div>
            <div className="brand-title">Wayfarer's Passport</div>
            <div className="brand-sub">Bureau of Hidden Atlases</div>
          </div>
        </Link>
        <nav className="site-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/destinations">The Atlas</NavLink>
          <NavLink to="/login">Sign in</NavLink>
          <NavLink to="/signup" className="btn-join">Join</NavLink>
        </nav>
      </div>
    </header>
  );
}
