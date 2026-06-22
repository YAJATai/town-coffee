"use client";

import { useEffect, useRef } from "react";

export default function Footer() {
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("footer-visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    colRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      id="contact"
      style={{
        background: "linear-gradient(#182419 0%, #0f1810 100%)",
        color: "#f7f7f7",
        padding: "80px 0 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, #e6f1d8, transparent)",
          backgroundSize: "200% 100%",
          animation: "shimmer 3s ease-in-out infinite",
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 50px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1.5fr",
            gap: "60px",
            paddingBottom: "60px",
            borderBottom: "1px solid #e6f1d81a",
          }}
          className="footer-grid"
        >
          <div
            ref={(el) => { colRefs.current[0] = el; }}
            className="footer-col"
          >
            <h3
              style={{
                fontSize: "32px",
                fontWeight: 900,
                color: "#e6f1d8",
                marginBottom: "16px",
                position: "relative",
                display: "inline-block",
              }}
              className="footer-title"
            >
              Town Coffee
            </h3>
            <p style={{ color: "#f7f7f7b3", fontSize: "15px", lineHeight: 1.8, maxWidth: "360px" }}>
              Crafting exceptional coffee experiences with passion and precision since day one.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
              {["facebook-f", "instagram", "tiktok"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="social-icon"
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    border: "1px solid #e6f1d833",
                    background: "#e6f1d81a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#e6f1d8",
                    fontSize: "16px",
                    transition: "all 0.4s ease",
                    textDecoration: "none",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "#e6f1d8";
                    el.style.color = "#182419";
                    el.style.transform = "translateY(-4px) rotate(360deg)";
                    el.style.boxShadow = "0 8px 24px #e6f1d84d";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "#e6f1d81a";
                    el.style.color = "#e6f1d8";
                    el.style.transform = "translateY(0) rotate(0deg)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <i className={`fa-brands fa-${icon}`} />
                </a>
              ))}
            </div>
          </div>

          <div
            ref={(el) => { colRefs.current[1] = el; }}
            className="footer-col"
          >
            <h4
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#f7f7f7",
                marginBottom: "20px",
                position: "relative",
                display: "inline-block",
              }}
              className="footer-title-sm"
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Home", "Menu", "Experience", "Contact"].map((l) => (
                <li key={l} style={{ marginBottom: "12px" }}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="footer-link"
                    style={{
                      color: "#f7f7f7b3",
                      fontSize: "15px",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.color = "#e6f1d8";
                      el.style.transform = "translateX(8px)";
                      const arrow = el.querySelector(".link-arrow") as HTMLElement;
                      if (arrow) arrow.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.color = "#f7f7f7b3";
                      el.style.transform = "translateX(0)";
                      const arrow = el.querySelector(".link-arrow") as HTMLElement;
                      if (arrow) arrow.style.opacity = "0";
                    }}
                  >
                    <span className="link-arrow" style={{ opacity: 0, transition: "opacity 0.3s" }}>→</span>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={(el) => { colRefs.current[2] = el; }}
            className="footer-col"
          >
            <h4
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#f7f7f7",
                marginBottom: "20px",
              }}
              className="footer-title-sm"
            >
              Contact Us
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { icon: "fa-location-dot", text: "Anukampa Platina, Sanganer, Jaipur" },
                { icon: "fa-phone", text: "093584 48814", href: "tel:+919358448814" },
                { icon: "fa-envelope", text: "hello@towncoffee.com", href: "mailto:hello@towncoffee.com" },
              ].map((item) => (
                <li key={item.icon} style={{ marginBottom: "18px" }}>
                  <a
                    href={item.href || "#"}
                    className="contact-item"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "#f7f7f7b3",
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.color = "#e6f1d8";
                      el.style.transform = "translateX(5px)";
                      const icon = el.querySelector(".contact-icon") as HTMLElement;
                      if (icon) {
                        icon.style.transform = "scale(1.2) rotate(5deg)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.color = "#f7f7f7b3";
                      el.style.transform = "translateX(0)";
                      const icon = el.querySelector(".contact-icon") as HTMLElement;
                      if (icon) {
                        icon.style.transform = "scale(1) rotate(0deg)";
                      }
                    }}
                  >
                    <i
                      className={`contact-icon fa-solid ${item.icon}`}
                      style={{
                        width: "20px",
                        color: "#e6f1d8",
                        transition: "all 0.3s",
                      }}
                    />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "24px 50px",
          borderTop: "1px solid #e6f1d81a",
        }}
      >
        <p style={{ color: "#f7f7f780", fontSize: "14px", margin: 0 }}>
          © {new Date().getFullYear()} Town Coffee. All rights reserved.
        </p>
      </div>

      <style>{`
        @keyframes shimmer {
          0%, 100% { background-position: -200% 0; }
          50% { background-position: 200% 0; }
        }
        .footer-col {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }
        .footer-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .footer-col:nth-child(1).footer-visible { transition-delay: 0.1s; }
        .footer-col:nth-child(2).footer-visible { transition-delay: 0.2s; }
        .footer-col:nth-child(3).footer-visible { transition-delay: 0.3s; }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
