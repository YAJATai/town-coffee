"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  {
    title: "Speciality Drinks",
    side: "right" as const,
    desc: "Unique signature lattes crafted with premium ingredients and exotic flavors",
    img: "/menuShowcase1.jpg",
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
    img: "/menuShowcase2.jpg",
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
    img: "/menuShowcase3.jpg",
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
    img: "/menuShowcase5.jpg",
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
    <section id="menu" className="menu-section">
      <div className="menu-container">
        <div className="menu-header-box">
          <h2 className="menu-title">Our Signature Menu</h2>
        </div>
        <p className="menu-subtitle">
          Discover our carefully crafted selection of premium beverages and desserts
        </p>

        <div className="menu-timeline">
          <div className="timeline-line" />

          {categories.map((cat, idx) => {
            const isLeft = cat.side === "left";
            return (
              <div
                key={cat.title}
                className={`timeline-item ${isLeft ? "item-left" : "item-right"}`}
                onClick={() => setExpanded(expanded === idx ? null : idx)}
              >
                <div className={`timeline-content ${isLeft ? "content-left" : "content-right"}`}>
                  <div className="item-label">{cat.title}</div>

                  <div className="item-image-wrap">
                    <Image
                      src={cat.img}
                      alt={cat.title}
                      width={300}
                      height={200}
                      className="item-image"
                    />
                  </div>

                  <p className="item-desc">{cat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {expanded !== null && (
        <div className="menu-overlay" onClick={() => setExpanded(null)}>
          <div className="menu-overlay-inner" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setExpanded(null)} className="back-btn">
              ← Back
            </button>

            <div className="inner-menu">
              <div className="inner-menu-header">
                <p className="inner-menu-brand">TOWN</p>
                <p className="inner-menu-tagline">Coffee & Desserts</p>
              </div>

              <div className="inner-menu-grid">
                {categories[expanded].items.map((item) => (
                  <div key={item.name} className="inner-menu-item">
                    <div className="inner-item-icon">{item.name[0]}</div>
                    <div className="inner-item-info">
                      <div className="inner-item-top">
                        <h3 className="inner-item-name">{item.name}</h3>
                        <span className="inner-item-price">{item.price}</span>
                      </div>
                      <p className="inner-item-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .menu-section {
          background: var(--bg-primary);
          min-height: 190vh;
          padding: 100px 20px 0;
          position: relative;
        }
        .menu-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        .menu-header-box {
          background: #182419;
          display: inline-block;
          padding: 6px 20px;
          margin-bottom: 20px;
        }
        .menu-title {
          font-family: "Courier New", Courier, monospace;
          font-size: 48px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #faf9f7;
          margin: 0;
        }
        .menu-subtitle {
          font-family: "Courier New", Courier, monospace;
          font-size: 16px;
          color: #ffffffbf;
          margin-bottom: 60px;
        }
        .menu-timeline { position: relative; }
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #182419;
          transform: translateX(-50%);
          animation: lineGrow 2s ease forwards;
          transform-origin: top;
        }
        @keyframes lineGrow {
          from { transform: translateX(-50%) scaleY(0); }
          to { transform: translateX(-50%) scaleY(1); }
        }
        .timeline-item {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-bottom: 80px;
          position: relative;
          cursor: pointer;
        }
        .item-right { justify-content: flex-end; }
        .timeline-content {
          width: 45%;
          animation: clipReveal 1s ease forwards;
        }
        .content-right { text-align: left; padding-left: 60px; }
        .content-left { text-align: right; padding-right: 60px; }
        @keyframes clipReveal {
          from { clip-path: inset(0 100% 0 0); opacity: 0; }
          to { clip-path: inset(0 0 0 0); opacity: 1; }
        }
        .item-label {
          display: inline-block;
          background: #182419;
          padding: 4px 16px;
          margin-bottom: 16px;
        }
        .item-label {
          font-family: "Courier New", Courier, monospace;
          font-size: 18px;
          font-weight: 700;
          color: #faf9f7;
          text-transform: uppercase;
        }
        .item-image-wrap {
          width: 300px;
          height: 200px;
          overflow: hidden;
          position: relative;
          display: inline-block;
        }
        .item-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 16%;
          transition: transform 0.5s;
        }
        .timeline-content:hover .item-image { transform: scale(1.05); }
        .item-desc {
          font-family: Georgia, serif;
          font-size: 17px;
          line-height: 1.75;
          color: var(--text-primary);
          max-width: 300px;
          margin-top: 16px;
        }
        .content-left .item-desc { margin-left: auto; }
        .menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 2000;
          backdrop-filter: blur(8px);
          background: #000000eb;
          overflow: auto;
        }
        .menu-overlay-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          position: relative;
        }
        .back-btn {
          background: #182419;
          color: #faf9f7;
          border: none;
          padding: 10px 24px;
          font-family: "Courier New", Courier, monospace;
          text-transform: uppercase;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          margin-bottom: 40px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .inner-menu {
          background: #faf9f7;
          padding: 60px;
          border-radius: 8px;
        }
        .inner-menu-header { text-align: center; margin-bottom: 40px; }
        .inner-menu-brand {
          font-family: Georgia, serif;
          font-size: 5rem;
          font-weight: 900;
          letter-spacing: 0.15em;
          color: #182419;
          margin: 0;
        }
        .inner-menu-tagline {
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: #666;
        }
        .inner-menu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }
        .inner-menu-item {
          display: flex;
          align-items: center;
          gap: 16px;
          border-bottom: 1px dashed #ccc;
          padding-bottom: 16px;
        }
        .inner-item-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #e6f1d8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 700;
          color: #14453d;
          flex-shrink: 0;
        }
        .inner-item-info { flex: 1; }
        .inner-item-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        .inner-item-name {
          font-family: var(--font-cormorant);
          font-size: 1.7rem;
          font-weight: 600;
          color: #182419;
          margin: 0;
        }
        .inner-item-price {
          font-family: var(--font-cormorant);
          font-size: 2rem;
          color: #14453d;
          font-weight: 600;
        }
        .inner-item-desc { color: #666666d4; font-size: 1rem; margin: 4px 0 0; }
        @media (max-width: 768px) {
          .menu-title { font-size: 28px !important; }
          .timeline-content { width: 100% !important; text-align: left !important; padding: 0 20px !important; }
          .item-image-wrap { width: 100% !important; }
          .content-left .item-desc { margin-left: 0 !important; }
          .inner-menu-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
          .inner-menu { padding: 30px 20px !important; }
          .inner-menu-brand { font-size: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
