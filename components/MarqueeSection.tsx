"use client";

const LOGOS = [
  {
    src: "https://res.cloudinary.com/dnth1inmv/image/upload/f_auto,q_auto/v1779833548/setetvnews_color_branca_H_ggfybe.png",
    alt: "SETE TV News",
  },
  {
    src: "https://res.cloudinary.com/dnth1inmv/image/upload/v1780281871/AGROSETE_LOGO_BRANCO_wzv6bi.png",
    alt: "AGROSETE",
  },
  {
    src: "https://res.cloudinary.com/dnth1inmv/image/upload/f_auto,q_auto/v1779833556/LOGO_sete_esportivo_xdhrdx.png",
    alt: "SETE Esportivo",
  },
  {
    src: "https://res.cloudinary.com/dnth1inmv/image/upload/f_auto,q_auto/v1779833565/logo_Sete_Tech_branco_rogqsz.png",
    alt: "SETE Tech",
  },
];

const track = [...LOGOS, ...LOGOS];

export default function MarqueeSection() {
  return (
    <section
      style={{
        background: "#0a0a0a",
        padding: "24px 0",
        position: "relative",
        zIndex: 0,
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "3px",
          color: "rgba(255,255,255,0.38)",
          textTransform: "uppercase",
          marginBottom: "24px",
        }}
      >
        Divisões do Grupo Sete
      </p>

      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
        }}
      >
        <div
          className="marquee-section-track"
          onMouseOver={(e) =>
            ((e.currentTarget as HTMLElement).style.animationPlayState =
              "paused")
          }
          onMouseOut={(e) =>
            ((e.currentTarget as HTMLElement).style.animationPlayState =
              "running")
          }
        >
          {track.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              aria-hidden={i >= LOGOS.length ? true : undefined}
              style={{
                height: "45px",
                width: "auto",
                flexShrink: 0,
                display: "block",
                opacity: 1,
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLElement).style.transform = "scale(1.05)")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLElement).style.transform = "scale(1)")
              }
            />
          ))}
        </div>
      </div>

      <style>{`
        .marquee-section-track {
          display: flex;
          align-items: center;
          gap: 100px;
          width: max-content;
          animation: marqueeSectionScroll 34s linear infinite;
        }
        @keyframes marqueeSectionScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
