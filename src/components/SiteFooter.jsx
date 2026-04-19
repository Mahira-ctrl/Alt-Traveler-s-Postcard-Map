export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-title">Wayfarer's Passport</div>
          <p className="footer-text">
            An atlas for travelers who collect places, not photos.
          </p>
        </div>
        <div className="footer-meta">
          © {new Date().getFullYear()} · Bureau of Hidden Atlases · All rights
          reserved by the wind.
        </div>
      </div>
    </footer>
  );
}
