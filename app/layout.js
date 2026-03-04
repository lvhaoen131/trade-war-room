export const metadata = {
  title: "Trade War Room",
  description: "Global Risk & Commodity Monitoring System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#0f172a",
          color: "white",
        }}
      >
        {children}
      </body>
    </html>
  );
}
