"use client";

import { useState } from "react";
import Image from "next/image";

const imgRange = (start: number, end: number, ext = "jpg") =>
  Array.from({ length: end - start + 1 }, (_, i) => {
    const n = start + i;
    const e = [3, 4, 6, 30, 47, 48, 52, 53].includes(n) ? "jpeg" : n === 54 ? "webp" : ext;
    return `/accordionImages/${n}.${e}`;
  });

const galleries = [
  {
    title: "Cozy Atmosphere",
    desc: "Relax in our warm and inviting space",
    images: imgRange(1, 14),
  },
  {
    title: "Specialty Coffee",
    desc: "Premium roasted beans from around the world",
    images: imgRange(15, 28),
  },
  {
    title: "Fresh Pastries",
    desc: "Delicious baked goods made daily",
    images: imgRange(29, 42),
  },
  {
    title: "Work & Study",
    desc: "Perfect spot for productivity and focus",
    images: imgRange(43, 54),
  },
];

export default function Experience() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">
        Experience
        <br />
        Our Space
      </h2>

      <div className="accordion">
        {galleries.map((g, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={g.title}>
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="accordion-header"
              >
                <div className="accordion-header-left">
                  <span className="accordion-title">{g.title}</span>
                  <span className="accordion-desc">{g.desc}</span>
                </div>
                <div className={`accordion-icon ${isOpen ? "icon-open" : ""}`}>+</div>
              </button>

              {isOpen && (
                <div className="accordion-body">
                  <div className="image-track">
                    <div className="image-strip">
                      {g.images.map((img, i) => (
                        <div key={i} className="image-card">
                          <Image
                            src={img}
                            alt={`${g.title} ${i + 1}`}
                            width={400}
                            height={450}
                            className="gallery-img"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="image-strip">
                      {g.images.map((img, i) => (
                        <div key={`dup1-${i}`} className="image-card">
                          <Image
                            src={img}
                            alt={`${g.title} ${i + 1}`}
                            width={400}
                            height={450}
                            className="gallery-img"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="image-strip">
                      {g.images.map((img, i) => (
                        <div key={`dup2-${i}`} className="image-card">
                          <Image
                            src={img}
                            alt={`${g.title} ${i + 1}`}
                            width={400}
                            height={450}
                            className="gallery-img"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        .experience-section {
          background: #f7fbf3;
          padding-bottom: 160px;
        }
        .experience-title {
          font-family: SuisseIntl, helvetica, sans-serif;
          font-size: 75px;
          font-weight: 1200;
          letter-spacing: -0.05em;
          text-transform: uppercase;
          line-height: 0.9;
          color: #1a1a1a;
          padding: 80px 60px 60px;
          margin: 0;
          animation: titleFadeIn 1s ease;
        }
        @keyframes titleFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 20px 60px;
          border: none;
          border-bottom: 1px solid #0000001a;
          background: none;
          cursor: pointer;
          text-align: left;
          transition: background 0.3s;
        }
        .accordion-header:hover { background: rgba(0,0,0,0.02); }
        .accordion-header-left {
          display: flex;
          gap: 30px;
          align-items: baseline;
        }
        .accordion-title {
          font-family: SuisseIntl, helvetica, sans-serif;
          font-size: 50px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.05em;
          color: #1a1a1a;
        }
        .accordion-desc {
          font-family: EditorialNew, serif;
          font-size: 26px;
          font-weight: 100;
          color: #1a1a1a;
        }
        .accordion-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 1px solid #00000026;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          font-weight: 300;
          color: #1a1a1a;
          transition: all 0.3s;
          flex-shrink: 0;
        }
        .accordion-icon.icon-open {
          transform: rotate(135deg);
          background: #ecf6e1;
        }
        .accordion-body {
          overflow: hidden;
          padding: 20px 0;
        }
        .image-track {
          display: flex;
          gap: 20px;
          width: fit-content;
          animation: scroll 60s linear infinite;
        }
        .image-strip {
          display: flex;
          gap: 20px;
        }
        .image-card {
          width: 400px;
          height: 450px;
          overflow: hidden;
          flex-shrink: 0;
          border-radius: 4px;
        }
        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        .image-card:hover .gallery-img { transform: scale(1.05); }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @media (max-width: 768px) {
          .experience-title { font-size: 32px !important; padding: 40px 20px 30px !important; }
          .accordion-header { padding: 16px 20px !important; }
          .accordion-header-left { flex-direction: column !important; gap: 8px !important; }
          .accordion-title { font-size: 23px !important; }
          .accordion-desc { font-size: 14px !important; }
          .image-card { width: 300px !important; height: 220px !important; }
        }
      `}</style>
    </section>
  );
}
