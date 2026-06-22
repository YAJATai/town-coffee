"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        background: "var(--bg-primary)",
        minHeight: "84vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: "-250px",
          height: "100%",
          width: "auto",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=800&q=80"
          alt=""
          width={500}
          height={800}
          style={{ height: "100%", width: "auto", objectFit: "contain", opacity: 0.15 }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "8%",
          transform: "translateY(-50%)",
          maxWidth: "650px",
          zIndex: 2,
        }}
      >
        <div style={{ marginBottom: "25px" }}>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              fontWeight: 900,
              letterSpacing: "0.05em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
              textShadow: "0 10px 30px #0000004d",
            }}
          >
            Town Coffee
          </h1>
        </div>

        <p
          style={{
            fontSize: "17px",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "var(--text-primary)",
            maxWidth: "500px",
            marginBottom: "30px",
          }}
        >
          Where every cup tells a story of excellence, and every bite is a moment of pure indulgence
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link
            href="#menu"
            style={{
              background: "#e6f1d8",
              color: "#14453d",
              padding: "18px 40px",
              fontSize: "15px",
              fontWeight: 700,
              border: "none",
              borderRadius: "0",
              textDecoration: "none",
              display: "inline-block",
              transition: "transform 0.3s",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Explore Menu
          </Link>
          <Link
            href="#experience"
            style={{
              background: "var(--text-primary)",
              color: "var(--bg-primary)",
              padding: "14px 35px",
              fontSize: "15px",
              fontWeight: 600,
              border: "2px solid #f7f7f74d",
              textDecoration: "none",
              display: "inline-block",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.borderColor = "#f7f7f7";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "#f7f7f74d";
            }}
          >
            Watch Story
          </Link>
        </div>
      </div>

      <div
        className="hero-cup-desktop"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          height: "90vh",
          zIndex: 2,
          transition: "transform 0.5s ease",
        }}
        onMouseEnter={(e) => {
          const cup = e.currentTarget;
          cup.style.transform = "rotate(3deg) translateX(15px)";
          const lid = cup.querySelector(".cup-lid") as HTMLElement;
          if (lid) lid.style.transform = "translateY(-30px) scale(1.03)";
          const steams = cup.querySelectorAll(".steam");
          steams.forEach((s) => {
            (s as HTMLElement).style.opacity = "1";
            (s as HTMLElement).style.transform = "translateY(-40px) scale(1.2)";
          });
        }}
        onMouseLeave={(e) => {
          const cup = e.currentTarget;
          cup.style.transform = "rotate(0deg) translateX(0)";
          const lid = cup.querySelector(".cup-lid") as HTMLElement;
          if (lid) lid.style.transform = "translateY(0) scale(1)";
          const steams = cup.querySelectorAll(".steam");
          steams.forEach((s) => {
            (s as HTMLElement).style.opacity = "0";
            (s as HTMLElement).style.transform = "translateY(0) scale(1)";
          });
        }}
      >
        <div style={{ position: "relative", height: "100%", width: "auto" }}>
          <Image
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
            alt="Coffee cup"
            width={500}
            height={500}
            style={{ height: "100%", width: "auto", objectFit: "contain" }}
          />
          <div
            className="cup-lid"
            style={{
              position: "absolute",
              top: "12%",
              left: "19.4%",
              width: "56%",
              transition: "transform 0.5s ease",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1557008075-7f2c5e4a63be?auto=format&fit=crop&w=400&q=80"
              alt=""
              width={400}
              height={100}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>

          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="steam"
              style={{
                position: "absolute",
                bottom: `${40 + i * 8}%`,
                left: `${30 + i * 6}%`,
                width: `${60 - i * 5}px`,
                height: `${60 - i * 5}px`,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(139,90,60,0.3) 0%, rgba(160,110,80,0.15) 40%, transparent 70%)",
                filter: "blur(15px)",
                opacity: 0,
                transition: "all 0.6s ease",
                transitionDelay: `${i * 0.1}s`,
                pointerEvents: "none",
              }}
            />
          ))}
        </div>
      </div>

      <div
        className="hero-badge"
        style={{
          position: "absolute",
          bottom: 0,
          left: "-50px",
          transform: "rotate(-90deg)",
          transformOrigin: "left bottom",
          background: "var(--text-primary)",
          color: "var(--bg-primary)",
          backdropFilter: "blur(10px)",
          border: "1px solid #f7f7f733",
          borderRadius: "50px",
          padding: "10px 20px",
          fontSize: "13px",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          zIndex: 3,
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#4caf50",
            display: "inline-block",
            animation: "pulse 2s infinite",
          }}
        />
        Crafted with Passion Since 2024
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .hero-cup-desktop { display: none; }
          .hero-badge {
            left: 10px !important;
            transform: rotate(0deg) !important;
            bottom: 20px !important;
            font-size: 11px !important;
            padding: 8px 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
