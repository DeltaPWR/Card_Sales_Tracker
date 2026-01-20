export default function ResultsList({ results }) {
  return (
    <div className="results">
      {results.map((r, i) => (
        <div key={i} className="card">
          <img src={r.image} />
          <h4>{r.card}</h4>
          <p>Sold for: ${r.price}</p>
          <p>Date: {r.date}</p>
          <p>Confidence: {r.confidence}/100</p>
        </div>
      ))}
    </div>
  );
}
