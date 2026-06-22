const features = [
  {
    title: "Premium Arabic Coffee",
    icon: "fa-mug-saucer",
  },
  {
    title: "Fresh Daily Cakes",
    icon: "fa-cake-candles",
  },
  {
    title: "Natural Ingredients",
    icon: "fa-leaf",
  },
  {
    title: "Premium Quality",
    icon: "fa-award",
  },
];

export default function Features() {
  return (
    <section
      style={{
        background: "#f7fbf3",
        display: "flex",
        flexDirection: "row",
        gap: "30px",
        padding: "40px 50px",
      }}
    >
      <div
        style={{
          flex: "0 0 70%",
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="features-grid"
      >
        {features.map((f) => (
          <div
            key={f.title}
            style={{
              flex: 1,
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "#e6f1d8a9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 12px",
                color: "#14453d",
                fontSize: "28px",
              }}
            >
              <i className={`fa-solid ${f.icon}`} />
            </div>
            <p style={{ color: "#333", fontSize: "16px", fontWeight: 500 }}>{f.title}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          flex: "0 0 30%",
          background: "#182419",
          minHeight: "100px",
        }}
        className="features-panel"
      />

      <style>{`
        @media (max-width: 768px) {
          .features-grid {
            flex-direction: column !important;
            flex: 1 !important;
          }
          .features-grid > div {
            background: #e6f1d84d;
            border-radius: 12px;
            padding: 20px;
            display: flex;
            align-items: center;
            gap: 16px;
            text-align: left !important;
          }
          .features-grid > div > div {
            margin: 0 !important;
            flex-shrink: 0;
          }
          .features-panel { display: none !important; }
        }
      `}</style>
    </section>
  );
}
