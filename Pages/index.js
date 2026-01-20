import { useEffect, useState } from "react";
import DisclaimerModal from "../components/DisclaimerModal.jsx";
import SearchBar from "../components/SearchBar.jsx";
import ResultsList from "../components/ResultsList.jsx";
import SidebarAds from "../components/SidebarAds.jsx";

export default function Home() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [results, setResults] = useState([]);
  const [live, setLive] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("acceptedDisclaimer")) {
      setShowDisclaimer(true);
    }
  }, []);

  async function handleSearch(query, apiKey) {
    const res = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, apiKey })
    });
    const data = await res.json();
    setResults(data.results);
    setLive(data.live);
  }

  return (
    <>
      {showDisclaimer && (
        <DisclaimerModal
          onAccept={() => {
            localStorage.setItem("acceptedDisclaimer", "true");
            setShowDisclaimer(false);
          }}
        />
      )}

      <div className="container">
        <SearchBar onSearch={handleSearch} />

        <div className="badge">
          {live ? "🔵 Live eBay Sales" : "🟡 Simulated Prediction Data"}
        </div>

        <div className="layout">
          <ResultsList results={results} />
          <SidebarAds />
        </div>
      </div>
    </>
  );
}
