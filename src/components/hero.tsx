import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container-page relative z-10 grid gap-12 md:grid-cols-2 items-center py-20">
        <div className="flex flex-col items-start">
          <div className="relative w-48 h-64 md:w-64 md:h-80 mb-8">
            <Image
              src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=600&q=80"
              alt="Coffee tree"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col items-end text-right">
          <p className="font-serif text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Crafted with Passion Since 2024
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-[0.9] text-foreground mb-6">
            Town
            <br />
            <span className="text-accent">Coffee</span>
          </h1>

          <p className="max-w-md text-foreground/70 text-lg leading-relaxed mb-8">
            Where every cup tells a story of excellence, and every bite is a moment of pure indulgence
          </p>

          <div className="flex gap-4">
            <Link
              href="#menu"
              className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-black transition hover:bg-accent-hover"
            >
              Explore Menu
            </Link>
            <Link
              href="#experience"
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium transition hover:bg-white/10"
            >
              Watch Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
