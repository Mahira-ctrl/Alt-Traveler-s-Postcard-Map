// Tiny Express server that serves the built React app from /dist.
// Run: npm run build && npm start  (or `npm run serve` for both)
import express from "express";
import compression from "compression";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "..", "dist");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(compression());

// Simple JSON API example — could be expanded to back the React app.
app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "wayfarer-passport", time: new Date().toISOString() });
});

// Serve static built assets.
app.use(express.static(DIST_DIR, { maxAge: "1y", index: false }));

// SPA fallback: any non-API GET returns index.html so React Router handles routing.
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api/")) return next();
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`✓ Wayfarer's Passport running at http://localhost:${PORT}`);
});
