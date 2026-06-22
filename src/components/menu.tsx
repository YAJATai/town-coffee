"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const categories = [
  {
    title: "Speciality Drinks",
    side: "right" as const,
    desc: "Unique signature lattes crafted with premium ingredients and exotic flavors",
    img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80",
    items: [
      { name: "Signature Latte", price: "₹250", desc: "House blend with vanilla & caramel" },
      { name: "Hazelnut Latte", price: "₹280", desc: "Espresso, steamed milk, hazelnut syrup" },
      { name: "Matcha Latte", price: "₹260", desc: "Premium Japanese matcha" },
    ],
  },
  {
    title: "Cappuccino",
    side: "left" as const,
    desc: "Perfect harmony of rich espresso and velvety steamed milk foam",
    img: "https://images.unsplash.com/photo-1557008075-7f2c5e4a63be?auto=format&fit=crop&w=600&q=80",
    items: [
      { name: "Classic Cappuccino", price: "₹200", desc: "Double shot, velvet foam" },
      { name: "Iced Cappuccino", price: "₹220", desc: "Cold brew with cold foam" },
      { name: "Caramel Cappuccino", price: "₹250", desc: "With house-made caramel" },
    ],
  },
  {
    title: "Hot Coffee",
    side: "right" as const,
    desc: "Classic espresso-based beverages brewed to perfection with premium beans",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
    items: [
      { name: "Americano", price: "₹180", desc: "Espresso with hot water" },
      { name: "Espresso", price: "₹150", desc: "Single origin espresso shot" },
      { name: "Flat White", price: "₹220", desc: "Ristretto with microfoam" },
    ],
  },
  {
    title: "Sweet",
    side: "left" as const,
    desc: "Handcrafted desserts and artisan cakes made fresh daily with love",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80",
    items: [
      { name: "Chocolate Lava Cake", price: "₹280", desc: "Warm, gooey center" },
      { name: "Tiramisu", price: "₹250", desc: "Classic Italian dessert" },
      { name: "Belgian Waffle", price: "₹300", desc: "With chocolate sauce & ice cream" },
    ],
  },
];

export default function MenuSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="menu"
      style={{
        background: "var(--bg-primary)",
        minHeight: "190vh",
        padding: "100px 20px 0",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div
          style={{
            background: "#182419",
            display: "inline-block",
            padding: "6px 20px",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              fontFamily: '"Courier New", Courier, monospace',
              fontSize: "48px",
              fontWeight: 900,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#faf9f7",
              margin: 0,
            }}
          >
            Our Signature Menu
          </h2>
        </div>
        <p
          style={{
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: "16px",
            color: "#ffffffbf",
            marginBottom: "60px",
          }}
        >
          Discover our carefully crafted selection of premium beverages and desserts
        </p>

        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "#182419",
              transform: "translateX(-50%)",
            }}
          />

          {categories.map((cat, idx) => {
            const isLeft = cat.side === "left";
            return (
              <div
                key={cat.title}
                style={{
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  alignItems: "center",
                  marginBottom: "80px",
                  position: "relative",
                  cursor: "pointer",
                }}
                onClick={() => setExpanded(expanded === idx ? null : idx)}
              >
                <div
                  style={{
                    width: "45%",
                    ...(isLeft ? { textAlign: "right", paddingRight: "60px" } : { textAlign: "left", paddingLeft: "60px" }),
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      background: "#182419",
                      padding: "4px 16px",
                      marginBottom: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Courier New", Courier, monospace',
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#faf9f7",
                        textTransform: "uppercase",
                      }}
                    >
                      {cat.title}
                    </span>
                  </div>

                  <div
                    style={{
                      width: "300px",
                      height: "200px",
                      overflow: "hidden",
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    <Image
                      src={cat.img}
                      alt={cat.title}
                      width={300}
                      height={200}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "50% 16%",
                        transition: "transform 0.5s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                    />
                  </div>

                  <p
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "17px",
                      lineHeight: 1.75,
                      color: "var(--text-primary)",
                      maxWidth: "300px",
                      marginTop: "16px",
                      ...(isLeft ? { marginLeft: "auto" } : {}),
                    }}
                  >
                    {cat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {expanded !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            backdropFilter: "blur(8px)",
            background: "#000000eb",
            overflow: "auto",
          }}
          onClick={() => setExpanded(null)}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "40px 20px",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setExpanded(null)}
              style={{
                background: "#182419",
                color: "#faf9f7",
                border: "none",
                padding: "10px 24px",
                fontFamily: '"Courier New", Courier, monospace',
                textTransform: "uppercase",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
                marginBottom: "40px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              ← Back
            </button>

            <div style={{ background: "#faf9f7", padding: "60px", borderRadius: "8px" }}>
              <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <p
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "5rem",
                    fontWeight: 900,
                    letterSpacing: "0.15em",
                    color: "#182419",
                    margin: 0,
                  }}
                >
                  TOWN
                </p>
                <p
                  style={{
                    fontSize: "1.1rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.25em",
                    color: "#666",
                  }}
                >
                  Coffee & Desserts
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "60px",
                }}
              >
                {categories[expanded].items.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      borderBottom: "1px dashed #ccc",
                      paddingBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: "#e6f1d8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-geist-sans)",
                        fontSize: "24px",
                        fontWeight: 700,
                        color: "#14453d",
                        flexShrink: 0,
                      }}
                    >
                      {item.name[0]}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "1.7rem",
                            fontWeight: 600,
                            color: "#182419",
                            margin: 0,
                          }}
                        >
                          {item.name}
                        </h3>
                        <span
                          style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "2rem",
                            color: "#14453d",
                            fontWeight: 600,
                          }}
                        >
                          {item.price}
                        </span>
                      </div>
                      <p style={{ color: "#666666d4", fontSize: "1rem", margin: "4px 0 0" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          #menu > div > div:last-child > div {
            width: 100% !important;
            padding: 0 !important;
            text-align: left !important;
          }
          #menu > div > div:last-child > div > div:first-child {
            margin-left: 0 !important;
          }
          #menu > div > div:last-child > div > div:nth-child(2) {
            width: 100% !important;
          }
          #menu > div > div:last-child > div > div:nth-child(2) img {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
