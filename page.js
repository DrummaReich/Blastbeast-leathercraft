function BlastbeastLanding() {
  const twoLayer = {
    grained: ["Black", "Brown"],
    natural: ["Natural", "Dark Natural", "Orange"],
  };

  return (
    <div style={{ background: "black", color: "white", minHeight: "100vh", padding: 40 }}>
      <h1>BLASTBEAST</h1>
      <p>It works 🚀</p>
    </div>
  );
}

export default function Page() {
  return <BlastbeastLanding />;
}
