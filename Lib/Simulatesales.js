export function simulateSales(card) {
  return Array.from({ length: 8 }).map(() => ({
    card,
    price: (Math.random() * 200 + 200).toFixed(2),
    date: randomDate(),
    confidence: Math.floor(Math.random() * 30 + 70),
    image: "/placeholder-card.png"
  }));
}

function randomDate() {
  const d = new Date();
  d.setDate(d.getDate() - Math.floor(Math.random() * 30));
  return d.toISOString().split("T")[0];
}
