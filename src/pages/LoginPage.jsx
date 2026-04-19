import { Link } from "react-router-dom";
import passportHero from "../assets/passport-hero.jpg";

export default function LoginPage() {
  return (
    <div className="auth-page">
      <aside className="auth-visual" style={{ backgroundImage: `url(${passportHero})` }}>
        <div className="auth-visual-veil" />
        <div className="auth-visual-text">
          <div className="eyebrow">Ready for another journey?</div>
          <h2>Welcome back, traveler</h2>
        </div>
      </aside>
      <section className="auth-form-wrap">
        <div className="auth-card">
          <div className="auth-stamp">Re-Entry · Approved</div>
          <h1 className="auth-title">Sign in</h1>
          <button className="btn-google">Continue with Google</button>
          <div className="auth-divider"><span>or sign with quill</span></div>
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <label className="field">
              <span className="field-label">Username / Email</span>
              <input type="email" placeholder="traveler@bureau.co" />
            </label>
            <label className="field">
              <span className="field-label">Password</span>
              <input type="password" placeholder="Your secret cipher" />
            </label>
            <div className="auth-actions">
              <a href="#" className="link-soft">Forgot your password?</a>
              <button type="submit" className="btn-seal">Sign In</button>
            </div>
          </form>
          <div className="auth-footer">
            <p className="muted-italic">New to these uncharted lands?</p>
            <Link to="/signup" className="link-ink">Begin a new journey →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
