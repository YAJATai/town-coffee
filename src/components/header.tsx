"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [lang, setLang] = useState<"EN" | "AR">("EN");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header
      className="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "20px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="navbar-logo">
        <Image
          src="/logo4.png"
          alt="Town Coffee"
          width={90}
          height={90}
          className="navbar-logo-img"
          priority
        />
      </div>

      <ul className="navbar-links">
        {navLinks.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>

      <div className="navbar-controls">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="toggle-btn theme-toggle-btn"
        >
          <div className="toggle-track">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="toggle-icon-sun">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <div className={`toggle-thumb ${theme === "dark" ? "thumb-dark" : "thumb-light"}`} />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="toggle-icon-moon">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </div>
        </button>

        <button
          onClick={() => setLang(lang === "EN" ? "AR" : "EN")}
          className="toggle-btn lang-toggle-btn"
        >
          <div className="toggle-track">
            <span className="lang-label" style={{ opacity: lang === "AR" ? 1 : 0.3 }}>عر</span>
            <div className={`toggle-thumb ${lang === "AR" ? "thumb-ar" : "thumb-en"}`} />
            <span className="lang-label" style={{ opacity: lang === "EN" ? 1 : 0.3 }}>EN</span>
          </div>
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden hamburger-btn"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)}>
          <div className="mobile-panel" onClick={(e) => e.stopPropagation()}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="mobile-link">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .navbar-logo-img {
          height: 90px;
          width: auto;
          filter: brightness(0) saturate(100%) invert(10%) sepia(15%) saturate(1500%) hue-rotate(100deg) brightness(95%) contrast(95%);
          transition: filter 0.3s;
        }
        [data-theme="dark"] .navbar-logo-img {
          filter: brightness(0) saturate(100%) invert(98%) sepia(5%) saturate(500%) hue-rotate(50deg) brightness(105%) contrast(95%);
        }
        .navbar-links {
          display: flex;
          gap: 40px;
          list-style: none;
        }
        .navbar-links a {
          color: var(--text-primary);
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          transition: opacity 0.3s;
        }
        .navbar-links a:hover { opacity: 0.6; }
        .navbar-controls {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .toggle-btn {
          width: 84px;
          height: 42px;
          border-radius: 21px;
          cursor: pointer;
          position: relative;
          padding: 0 4px;
          background: var(--text-primary);
          border: none;
          box-shadow: 0 4px 12px #17251933;
          transition: all 0.3s;
        }
        [data-theme="dark"] .theme-toggle-btn {
          background: none;
          border: 2px solid #ffffffa6;
          box-shadow: none;
        }
        .lang-toggle-btn {
          background: var(--text-primary) !important;
          border: none !important;
        }
        [data-theme="dark"] .lang-toggle-btn {
          background: none !important;
          border: 2px solid #ffffffa6 !important;
        }
        .toggle-track {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          position: relative;
        }
        .toggle-icon-sun, .toggle-icon-moon {
          color: #f7fbf3;
          transition: all 0.3s;
        }
        .toggle-thumb {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--bg-primary);
          box-shadow: 0 2px 8px #00000026;
          position: absolute;
          z-index: 1;
          transition: all 0.3s ease;
        }
        .thumb-light { right: 4px; }
        .thumb-dark { right: 46px; }
        .thumb-en { left: 4px; }
        .thumb-ar { left: 46px; }
        .lang-label {
          font-size: 11px;
          font-weight: 700;
          color: #f7f7f7;
          font-family: var(--font-tajawal);
          transition: opacity 0.3s;
        }
        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 999;
          backdrop-filter: blur(8px);
          background: #00000080;
        }
        .mobile-panel {
          position: fixed;
          top: 0;
          right: 0;
          width: 280px;
          height: 100vh;
          background: var(--bg-primary);
          padding: 100px 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: slideIn 0.3s ease;
        }
        .mobile-link {
          font-size: 20px;
          font-weight: 600;
          color: var(--text-primary);
          text-decoration: none;
          border-bottom: 1px solid var(--border-color-light);
          padding-bottom: 12px;
        }
        .hamburger-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-primary);
          font-size: 14px;
          font-weight: 700;
        }
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @media (max-width: 768px) {
          header { padding: 15px 20px !important; }
          .navbar-logo-img { height: 50px !important; }
          .navbar-links { display: none !important; }
        }
      `}</style>
    </header>
  );
}
