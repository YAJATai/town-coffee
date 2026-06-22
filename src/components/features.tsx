import { Coffee, Cake, Leaf, Award } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Premium Arabic Coffee",
    desc: "Hand-selected beans roasted to perfection",
  },
  {
    icon: Cake,
    title: "Fresh Daily Cakes",
    desc: "Baked fresh every morning with love",
  },
  {
    icon: Leaf,
    title: "Natural Ingredients",
    desc: "Only the finest natural ingredients",
  },
  {
    icon: Award,
    title: "Premium Quality",
    desc: "Consistent excellence in every cup",
  },
];

export default function Features() {
  return (
    <section className="border-y border-white/10 bg-black/40 py-16 md:py-20">
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <f.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-medium">{f.title}</h3>
              <p className="mt-1 text-sm text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
