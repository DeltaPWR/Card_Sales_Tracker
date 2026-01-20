export default function DisclaimerModal({ onAccept }) {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000
    }}>
      <div style={{
        background: "#fff",
        padding: "20px",
        maxWidth: "400px",
        borderRadius: "8px"
      }}>
        <h2>Simulated Data Notice</h2>
        <p>
          If no eBay API key is provided, results shown are simulated predictions.
        </p>
        <button onClick={onAccept}>I Understand</button>
      </div>
    </div>
  );
}
