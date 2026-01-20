import { simulateSales } from "../../lib/simulateSales";

export default function handler(req, res) {
  const { query, apiKey } = req.body || {};

  if (!query) {
    return res.status(400).json({ error: "No search query provided" });
  }

  if (!apiKey) {
    return res.json({
      live: false,
      results: simulateSales(query)
    });
  }

  // Test-run: still simulated data even if key is provided
  return res.json({
    live: true,
    results: simulateSales(query).map(r => ({
      ...r,
      confidence: 100
    }))
  });
}
