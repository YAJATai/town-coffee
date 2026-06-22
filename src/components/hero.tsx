"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const cupRef = useRef<HTMLDivElement>(null);

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-decor">
        <Image
          src="/coffeeTree2.png"
          alt=""
          width={500}
          height={800}
          className="hero-tree"
          priority
        />
      </div>

      <div className="hero-beans">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bean" style={{
            left: `${10 + Math.random() * 40}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
            fontSize: `${12 + Math.random() * 16}px`,
          }}>
            <i className="fa-solid fa-seedling" />
          </div>
        ))}
      </div>

      <div className="hero-content">
        <Image
          src="/heroText.png"
          alt="Town Coffee"
          width={500}
          height={200}
          className="hero-text-img"
          priority
        />

        <p className="hero-subtext">
          Where every cup tells a story of excellence, and every bite is a moment of pure indulgence
        </p>

        <div className="hero-buttons">
          <Link href="#menu" className="btn-primary">
            Explore Menu
          </Link>
          <Link href="#experience" className="btn-secondary">
            Watch Story
          </Link>
        </div>
      </div>

      <div
        ref={cupRef}
        className="hero-cup-wrapper"
        onMouseEnter={() => {
          const c = cupRef.current;
          if (!c) return;
          c.classList.add("cup-hover");
        }}
        onMouseLeave={() => {
          const c = cupRef.current;
          if (!c) return;
          c.classList.remove("cup-hover");
        }}
      >
        <Image
          src="/heroCup1.png"
          alt="Coffee cup"
          width={500}
          height={500}
          className="hero-cup"
          priority
        />
        <div className="cup-lid">
          <Image
            src="/cup2.png"
            alt=""
            width={400}
            height={100}
            className="cup-lid-img"
            priority
          />
        </div>
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`steam steam-${i}`} />
        ))}
      </div>

      <div className="hero-badge">
        <span className="badge-dot" />
        Crafted with Passion Since 2024
      </div>

      <style>{`
        .hero-section {
          background: var(--bg-primary);
          min-height: 84vh;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          position: relative;
          overflow: hidden;
        }
        .hero-bg-decor {
          position: absolute;
          top: 0;
          right: -250px;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }
        .hero-tree {
          height: 100%;
          width: auto;
          object-fit: contain;
          opacity: 0.15;
        }
        .hero-beans {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }
        .bean {
          position: absolute;
          top: -30px;
          color: var(--text-primary);
          opacity: 0.15;
          animation: beanFall linear infinite;
        }
        @keyframes beanFall {
          0% { transform: translateY(-30px) rotate(0deg); opacity: 0; }
          10% { opacity: 0.15; }
          90% { opacity: 0.15; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .hero-content {
          position: absolute;
          top: 50%;
          left: 8%;
          transform: translateY(-50%);
          max-width: 650px;
          z-index: 2;
        }
        .hero-text-img {
          width: 100%;
          height: auto;
          margin-bottom: 25px;
          filter: drop-shadow(0 10px 30px #0000004d);
          animation: heroTextReveal 3s ease forwards;
        }
        @keyframes heroTextReveal {
          0% { opacity: 0; filter: drop-shadow(0 10px 30px #0000004d) brightness(0); }
          60% { opacity: 1; filter: drop-shadow(0 10px 30px #0000004d) brightness(0.5); }
          100% { opacity: 1; filter: drop-shadow(0 10px 30px #0000004d) brightness(1); }
        }
        .hero-subtext {
          font-size: 17px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--text-primary);
          max-width: 500px;
          margin-bottom: 30px;
        }
        .hero-buttons {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .btn-primary {
          background: #e6f1d8;
          color: #14453d;
          padding: 18px 40px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s;
        }
        .btn-primary:hover {
          transform: translateY(-3px);
        }
        .btn-primary::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        .btn-primary:hover::after {
          left: 100%;
        }
        .btn-secondary {
          background: var(--text-primary);
          color: var(--bg-primary);
          padding: 14px 35px;
          font-size: 15px;
          font-weight: 600;
          border: 2px solid #f7f7f74d;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s;
        }
        .btn-secondary:hover {
          transform: translateY(-3px);
          border-color: #f7f7f7;
        }
        .hero-cup-wrapper {
          position: absolute;
          bottom: 0;
          right: 0;
          height: 90vh;
          z-index: 2;
          transition: transform 0.5s ease;
          cursor: default;
        }
        .hero-cup-wrapper.cup-hover {
          transform: rotate(3deg) translateX(15px);
        }
        .hero-cup-wrapper.cup-hover .cup-lid {
          transform: translateY(-30px) scale(1.03);
        }
        .hero-cup-wrapper.cup-hover .steam {
          opacity: 1 !important;
          transform: translateY(-40px) scale(1.2) !important;
        }
        .hero-cup {
          height: 100%;
          width: auto;
          object-fit: contain;
        }
        .cup-lid {
          position: absolute;
          top: 12%;
          left: 19.4%;
          width: 56%;
          transition: transform 0.5s ease;
        }
        .cup-lid-img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }
        .steam {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139,90,60,0.3) 0%, rgba(160,110,80,0.15) 40%, transparent 70%);
          filter: blur(15px);
          opacity: 0;
          transition: all 0.6s ease;
          pointer-events: none;
        }
        .steam-0 { bottom: 40%; left: 30%; width: 60px; height: 60px; transition-delay: 0s; }
        .steam-1 { bottom: 48%; left: 36%; width: 55px; height: 55px; transition-delay: 0.1s; }
        .steam-2 { bottom: 56%; left: 42%; width: 50px; height: 50px; transition-delay: 0.2s; }
        .steam-3 { bottom: 44%; left: 48%; width: 45px; height: 45px; transition-delay: 0.3s; }
        .steam-4 { bottom: 52%; left: 54%; width: 40px; height: 40px; transition-delay: 0.4s; }
        .steam-5 { bottom: 60%; left: 60%; width: 35px; height: 35px; transition-delay: 0.5s; }
        .hero-badge {
          position: absolute;
          bottom: 0;
          left: -50px;
          transform: rotate(-90deg);
          transform-origin: left bottom;
          background: var(--text-primary);
          color: var(--bg-primary);
          backdrop-filter: blur(10px);
          border: 1px solid #f7f7f733;
          border-radius: 50px;
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 3;
          white-space: nowrap;
        }
        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4caf50;
          display: inline-block;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .hero-section { min-height: 100vh; }
          .hero-cup-wrapper { display: none; }
          .hero-content {
            position: relative;
            top: 0;
            left: 0;
            transform: none;
            padding: 100px 20px 40px;
          }
          .hero-badge {
            left: 10px !important;
            transform: rotate(0deg) !important;
            bottom: 20px !important;
            font-size: 11px !important;
            padding: 8px 14px !important;
          }
          .hero-bg-decor { right: -180px; width: 350px; }
        }
      `}</style>
    </section>
  );
}
