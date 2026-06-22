"use client";

import { useState } from "react";
import Image from "next/image";

const galleries = [
  {
    title: "Cozy Atmosphere",
    desc: "Relax in our warm and inviting space",
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80",
    ],
  },
  {
    title: "Specialty Coffee",
    desc: "Premium roasted beans from around the world",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1557008075-7f2c5e4a63be?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=400&q=80",
    ],
  },
  {
    title: "Fresh Pastries",
    desc: "Delicious baked goods made daily",
    images: [
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1556217477-d325251ece38?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1486427944544-d2c246c4e4c5?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1587248720327-8eb72564be1e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1556217477-d325251ece38?auto=format&fit=crop&w=400&q=80",
    ],
  },
  {
    title: "Work & Study",
    desc: "Perfect spot for productivity and focus",
    images: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80",
    ],
  },
];

export default function Experience() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="experience"
      style={{
        background: "#f7fbf3",
        paddingBottom: "160px",
      }}
    >
      <h2
        style={{
          fontFamily: "SuisseIntl, helvetica, sans-serif",
          fontSize: "75px",
          fontWeight: 1200,
          letterSpacing: "-0.05em",
          textTransform: "uppercase",
          lineHeight: 0.9,
          color: "#1a1a1a",
          padding: "80px 60px 60px",
          margin: 0,
        }}
      >
        Experience
        <br />
        Our Space
      </h2>

      <div>
        {galleries.map((g, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={g.title}>
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  padding: "20px 60px",
                  border: "none",
                  borderBottom: "1px solid #0000001a",
                  background: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <div style={{ display: "flex", gap: "30px", alignItems: "baseline" }}>
                  <span
                    style={{
                      fontFamily: "SuisseIntl, helvetica, sans-serif",
                      fontSize: "50px",
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: "-0.05em",
                      color: "#1a1a1a",
                    }}
                  >
                    {g.title}
                  </span>
                  <span
                    style={{
                      fontFamily: "EditorialNew, serif",
                      fontSize: "26px",
                      fontWeight: 100,
                      color: "#1a1a1a",
                    }}
                  >
                    {g.desc}
                  </span>
                </div>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    border: "1px solid #00000026",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    fontWeight: 300,
                    color: "#1a1a1a",
                    transition: "all 0.3s",
                    transform: isOpen ? "rotate(135deg)" : "rotate(0deg)",
                    background: isOpen ? "#ecf6e1" : "none",
                    flexShrink: 0,
                  }}
                >
                  +
                </div>
              </button>

              {isOpen && (
                <div style={{ overflow: "hidden", padding: "20px 0" }}>
                  <div
                    className="image-track"
                    style={{
                      display: "flex",
                      gap: "20px",
                      width: "fit-content",
                      animation: "scroll 60s linear infinite",
                    }}
                  >
                    {[...g.images, ...g.images, ...g.images].map((img, i) => (
                      <div
                        key={i}
                        style={{
                          width: "400px",
                          height: "450px",
                          overflow: "hidden",
                          flexShrink: 0,
                          borderRadius: "4px",
                        }}
                      >
                        <Image
                          src={img}
                          alt={`${g.title} ${i + 1}`}
                          width={400}
                          height={450}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          h2 {
            font-size: 32px !important;
            padding: 40px 20px 30px !important;
          }
          button {
            padding: 16px 20px !important;
          }
          button > div {
            flex-direction: column !important;
            gap: 8px !important;
          }
          button span:first-child {
            font-size: 23px !important;
          }
          button span:last-child {
            font-size: 14px !important;
          }
          .image-track > div {
            width: 300px !important;
            height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}
