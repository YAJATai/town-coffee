import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Upright, Tajawal } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantUpright = Cormorant_Upright({
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  weight: ["400", "500", "700"],
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Town Coffee — Crafted with Passion Since 2024",
  description: "Premium coffee, fresh pastries, and a cozy atmosphere. Where every cup tells a story of excellence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorantUpright.variable} ${tajawal.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/suisse-intl@1.0.0/css/suisse-intl.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/editorial-new@1.0.0/css/editorial-new.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
