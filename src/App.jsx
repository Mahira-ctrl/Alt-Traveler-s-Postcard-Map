import { Routes, Route, Link } from "react-router-dom";
import SiteHeader from "./components/SiteHeader.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import HomePage from "./pages/HomePage.jsx";
import DestinationsPage from "./pages/DestinationsPage.jsx";
import DestinationDetailPage from "./pages/DestinationDetailPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";

function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-gold">404</h1>
        <h2 className="mt-4 font-display text-xl tracking-widest uppercase text-parchment">
          This path is not on the map
        </h2>
        <p className="mt-3 text-sm italic text-parchment-faded">
          Even the best wayfarers wander into uncharted parchment.
        </p>
        <Link to="/" className="btn-seal mt-8 inline-block">
          Return to camp
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <SiteHeader />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
