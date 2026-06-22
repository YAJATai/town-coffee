"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
      style={{
        position: "absolute",
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
          src="/logo.svg"
          alt="Town Coffee"
          width={90}
          height={90}
          style={{
            height: "90px",
            width: "auto",
            filter:
              theme === "light"
                ? "brightness(0) saturate(100%) invert(10%) sepia(15%) saturate(1500%) hue-rotate(100deg) brightness(95%) contrast(95%)"
                : "brightness(0) saturate(100%) invert(98%) sepia(5%) saturate(500%) hue-rotate(50deg) brightness(105%) contrast(95%)",
          }}
        />
      </div>

      <ul
        style={{
          display: "flex",
          gap: "40px",
          listStyle: "none",
          color: "var(--text-primary)",
          fontSize: "16px",
          fontWeight: 500,
        }}
        className="hidden md:flex"
      >
        {navLinks.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              style={{ color: "var(--text-primary)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="theme-toggle"
          style={{
            width: "84px",
            height: "42px",
            borderRadius: "21px",
            border: theme === "dark" ? "2px solid #ffffffa6" : "none",
            background: theme === "light" ? "var(--text-primary)" : "none",
            boxShadow: theme === "light" ? "0 4px 12px #17251933" : "none",
            cursor: "pointer",
            position: "relative",
            padding: "0 4px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
              position: "relative",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke={theme === "light" ? "#f7fbf3" : "#f7fbf3"}
              strokeWidth="2"
              style={{
                opacity: theme === "light" ? 1 : 0.3,
                transition: "all 0.3s",
                transform: theme === "light" ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.5)",
                marginLeft: "6px",
              }}
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <div
              className="theme-thumb"
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                background: "var(--bg-primary)",
                boxShadow: "0 2px 8px #00000026",
                position: "absolute",
                right: theme === "light" ? "4px" : "46px",
                transition: "right 0.3s ease",
                zIndex: 1,
              }}
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke={theme === "light" ? "#f7fbf3" : "#f7fbf3"}
              strokeWidth="2"
              style={{
                opacity: theme === "dark" ? 1 : 0.3,
                transition: "all 0.3s",
                transform: theme === "dark" ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.5)",
                marginRight: "6px",
              }}
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </div>
        </button>

        <button
          onClick={() => setLang(lang === "EN" ? "AR" : "EN")}
          className="lang-toggle"
          style={{
            width: "84px",
            height: "42px",
            borderRadius: "21px",
            border: theme === "dark" ? "2px solid #ffffffa6" : "none",
            background: theme === "light" ? "var(--text-primary)" : "none",
            boxShadow: theme === "light" ? "0 4px 12px #17251933" : "none",
            cursor: "pointer",
            position: "relative",
            padding: "0 4px",
            fontFamily: "var(--font-tajawal)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
              position: "relative",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#f7fbf3",
                marginLeft: "6px",
                opacity: lang === "AR" ? 1 : 0.3,
              }}
            >
              عر
            </span>
            <div
              className="lang-thumb"
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                background: "var(--bg-primary)",
                boxShadow: "0 2px 8px #00000026",
                position: "absolute",
                left: lang === "EN" ? "4px" : "46px",
                transition: "left 0.3s ease",
                zIndex: 1,
              }}
            />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#f7fbf3",
                marginRight: "6px",
                opacity: lang === "EN" ? 1 : 0.3,
              }}
            >
              EN
            </span>
          </div>
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-primary)",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            backdropFilter: "blur(8px)",
            background: "#00000080",
          }}
          onClick={() => setMenuOpen(false)}
        >
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "280px",
              height: "100vh",
              background: "var(--bg-primary)",
              padding: "100px 30px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--border-color-light)",
                  paddingBottom: "12px",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          header {
            padding: 15px 20px !important;
          }
          .navbar-logo img {
            height: 50px !important;
          }
          .hidden\\.md\\:flex {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
