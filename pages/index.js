import { useState } from "react";
import DisclaimerModal from "../components/DisclaimerModal";

export default function Home() {
  const [accepted, setAccepted] = useState(false);

  return (
    <>
      {!accepted && <DisclaimerModal onAccept={() => setAccepted(true)} />}
      <main style={{ padding: "20px" }}>
        <h1>Trading Card Sales Tracker</h1>
        <p>If no API key is provided, results are simulated.</p>
      </main>
    </>
  );
}
