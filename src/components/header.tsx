"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "AR">("EN");

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="#home" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Town Coffee" width={36} height={36} className="rounded-full" />
          <span className="font-serif text-lg font-semibold tracking-wide">Town Coffee</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm tracking-widest uppercase text-foreground/70 transition hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "EN" ? "AR" : "EN")}
            className="text-sm tracking-widest text-foreground/70 transition hover:text-accent"
          >
            {lang === "EN" ? "AR" : "EN"}
          </button>

          <button onClick={() => setOpen(!open)} className="md:hidden text-sm tracking-widest uppercase">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <nav className="container-page flex flex-col py-4 gap-3">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm tracking-widest uppercase py-1">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
