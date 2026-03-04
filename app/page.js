export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        🌍 Trade War Room
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3>Oil Price</h3>
          <p>$85.20</p>
        </div>

        <div style={cardStyle}>
          <h3>USD Index</h3>
          <p>104.32</p>
        </div>

        <div style={cardStyle}>
          <h3>China Export</h3>
          <p>Monitoring...</p>
        </div>
      </div>
    </main>
  );
}

const cardStyle = {
  backgroundColor: "#1e293b",
  padding: "20px",
  borderRadius: "10px",
};
