import { Link } from "react-router-dom";
import passportHero from "../assets/passport-hero.jpg";

export default function SignupPage() {
  return (
    <div className="auth-page">
      <aside className="auth-visual" style={{ backgroundImage: `url(${passportHero})` }}>
        <div className="auth-visual-veil" />
        <div className="auth-visual-text">
          <div className="eyebrow">A new chapter awaits</div>
          <h2>Begin a new journey</h2>
        </div>
      </aside>
      <section className="auth-form-wrap">
        <div className="auth-card">
          <div className="auth-stamp">First Stamp · Issued</div>
          <h1 className="auth-title">Create passport</h1>
          <button className="btn-google">Sign up with Google</button>
          <div className="auth-divider"><span>or by hand</span></div>
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <label className="field">
              <span className="field-label">Traveler's Name</span>
              <input placeholder="Marco Polo" />
            </label>
            <label className="field">
              <span className="field-label">Email</span>
              <input type="email" placeholder="wayfarer@bureau.co" />
            </label>
            <label className="field">
              <span className="field-label">Choose a Cipher</span>
              <input type="password" placeholder="At least 8 characters" />
            </label>
            <label className="vow">
              <input type="checkbox" />
              <span>I vow to keep these hidden destinations sacred and to leave only footprints behind.</span>
            </label>
            <div className="auth-actions">
              <span className="muted-italic">Free entry · no fee</span>
              <button type="submit" className="btn-seal">Stamp In</button>
            </div>
          </form>
          <div className="auth-footer">
            <p className="muted-italic">Already carry a passport?</p>
            <Link to="/login" className="link-ink">← Return to sign in</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
