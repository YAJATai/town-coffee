import Image from "next/image";

const categories = [
  {
    title: "Speciality Drinks",
    desc: "Unique signature lattes crafted with premium ingredients and exotic flavors",
    img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cappuccino",
    desc: "Perfect harmony of rich espresso and velvety steamed milk foam",
    img: "https://images.unsplash.com/photo-1557008075-7f2c5e4a63be?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Hot Coffee",
    desc: "Classic espresso-based beverages brewed to perfection with premium beans",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sweet",
    desc: "Handcrafted desserts and artisan cakes made fresh daily with love",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 md:py-28">
      <div className="container-page">
        <div className="text-center mb-14">
          <p className="font-serif text-sm tracking-[0.3em] uppercase text-accent mb-3">
            Our Signature Menu
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold">
            Discover our carefully crafted <br className="hidden md:block" />
            selection of premium beverages and desserts
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div key={cat.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card-bg transition hover:border-accent/50">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-medium">{cat.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
