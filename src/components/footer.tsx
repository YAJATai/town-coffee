import Link from "next/link";
import Image from "next/image";
import { Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black/60">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.svg" alt="Town Coffee" width={32} height={32} className="rounded-full" />
              <span className="font-serif text-lg font-semibold tracking-wide">Town Coffee</span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-sm">
              Crafting exceptional coffee experiences with passion and precision since day one.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-foreground/70 transition hover:border-accent hover:text-accent">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-foreground/70 transition hover:border-accent hover:text-accent">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.11 2.525c.636-.247 1.363-.416 2.427-.465C8.83 2.013 9.175 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-foreground/70 transition hover:border-accent hover:text-accent">
                <Music2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-accent mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Menu", "Experience", "Contact"].map((l) => (
                <li key={l}>
                  <Link
                    href={`#${l.toLowerCase()}`}
                    className="text-sm text-foreground/70 transition hover:text-accent"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-accent mb-5">Contact Us</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li>Anukampa Platina, Sanganer</li>
              <li>Jaipur, Rajasthan 302029</li>
              <li>
                <a href="tel:+919358448814" className="transition hover:text-accent">093584 48814</a>
              </li>
              <li>
                <a href="mailto:hello@towncoffee.com" className="transition hover:text-accent">hello@towncoffee.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center gap-2 py-6 text-xs text-muted md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Town Coffee. All rights reserved.</p>
          <p>Crafted with passion</p>
        </div>
      </div>
    </footer>
  );
}
