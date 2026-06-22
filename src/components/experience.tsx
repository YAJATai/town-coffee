import Image from "next/image";

const galleries = [
  {
    title: "Cozy Atmosphere",
    desc: "Relax in our warm and inviting space",
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    title: "Specialty Coffee",
    desc: "Premium roasted beans from around the world",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1557008075-7f2c5e4a63be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    title: "Fresh Pastries",
    desc: "Delicious baked goods made daily",
    images: [
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556217477-d325251ece38?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1486427944544-d2c246c4e4c5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1587248720327-8eb72564be1e?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    title: "Work & Study",
    desc: "Perfect spot for productivity and focus",
    images: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-black/30">
      <div className="container-page">
        <div className="text-center mb-14">
          <p className="font-serif text-sm tracking-[0.3em] uppercase text-accent mb-3">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold">Our Space</h2>
        </div>

        <div className="space-y-16">
          {galleries.map((g) => (
            <div key={g.title}>
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-serif font-medium">{g.title}</h3>
                <p className="mt-1 text-muted">{g.desc}</p>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
                {g.images.map((img, i) => (
                  <div key={i} className="relative min-w-[220px] md:min-w-[280px] aspect-[4/5] flex-shrink-0 snap-start rounded-xl overflow-hidden border border-white/10">
                    <Image
                      src={img}
                      alt={`${g.title} ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
