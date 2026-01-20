import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [apiKey, setApiKey] = useState("");

  return (
    <div className="search">
      <input
        placeholder="Search card (e.g. Charizard PSA 10)"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <input
        placeholder="eBay API Key (optional)"
        value={apiKey}
        onChange={e => setApiKey(e.target.value)}
      />
      <button onClick={() => onSearch(query, apiKey)}>Search</button>
    </div>
  );
}
