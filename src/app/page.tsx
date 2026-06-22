import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import MenuSection from "@/components/menu";
import Experience from "@/components/experience";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Features />
      <MenuSection />
      <Experience />
      <Footer />
    </div>
  );
}
