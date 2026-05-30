"use client";
import { useEffect, useRef } from "react";

function TvIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="56" height="56" rx="14" fill="#9B5DE5" fillOpacity="0.18" />
      <rect x="8" y="14" width="40" height="24" rx="4" fill="#9B5DE5" fillOpacity="0.45" />
      <rect x="10" y="16" width="36" height="20" rx="3" fill="#0d0518" />
      <polygon points="24,21 24,31 33,26" fill="rgba(155,93,229,0.9)" />
      <rect x="21" y="38" width="14" height="2.5" rx="1.25" fill="rgba(155,93,229,0.6)" />
      <rect x="16" y="40.5" width="24" height="2" rx="1" fill="rgba(155,93,229,0.35)" />
    </svg>
  );
}

function NewsIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="56" height="56" rx="14" fill="#d946ef" fillOpacity="0.13" />
      <rect x="11" y="13" width="34" height="30" rx="4" fill="#9B5DE5" fillOpacity="0.38" />
      <rect x="14" y="17" width="28" height="4" rx="2" fill="rgba(255,255,255,0.78)" />
      <rect x="14" y="24" width="20" height="2.5" rx="1.25" fill="rgba(255,255,255,0.5)" />
      <rect x="14" y="28.5" width="24" height="2.5" rx="1.25" fill="rgba(255,255,255,0.5)" />
      <rect x="14" y="33" width="18" height="2.5" rx="1.25" fill="rgba(255,255,255,0.4)" />
      <rect x="14" y="37" width="12" height="2" rx="1" fill="rgba(255,255,255,0.28)" />
    </svg>
  );
}

function PodcastIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="56" height="56" rx="14" fill="#c084fc" fillOpacity="0.13" />
      <rect x="22" y="10" width="12" height="22" rx="6" fill="rgba(155,93,229,0.88)" />
      <path
        d="M15 30 Q15 42 28 42 Q41 42 41 30"
        stroke="rgba(155,93,229,0.75)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <line
        x1="28"
        y1="42"
        x2="28"
        y2="47"
        stroke="rgba(155,93,229,0.7)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="21"
        y1="47"
        x2="35"
        y2="47"
        stroke="rgba(155,93,229,0.7)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const CARDS = [
  {
    icon: <TvIcon />,
    tag: "@setetv.oficial",
    title: "TV Digital",
    desc: "Canal no YouTube com transmissões ao vivo, coberturas jornalísticas e conteúdo sob demanda.",
  },
  {
    icon: <NewsIcon />,
    tag: "setetvnews.com.br",
    title: "Portal de Notícias",
    desc: "Site com alcance mundial — cobertura regional, nacional e internacional em tempo real.",
  },
  {
    icon: <PodcastIcon />,
    tag: "Conexão 7Cast",
    title: "Podcast 7Cast",
    desc: "Canal de podcast com debates, entrevistas e análises aprofundadas dos principais temas.",
  },
];

export default function AboutSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("as-in");
            observer.unobserve(en.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

    const cards = document.querySelectorAll<HTMLElement>(".as-card");
    const handlers: Array<{ el: HTMLElement; fn: (e: MouseEvent) => void }> = [];

    cards.forEach((card) => {
      const fn = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", e.clientX - rect.left + "px");
        card.style.setProperty("--mouse-y", e.clientY - rect.top + "px");
      };
      card.addEventListener("mousemove", fn);
      handlers.push({ el: card, fn });
    });

    return () => {
      observer.disconnect();
      handlers.forEach(({ el, fn }) => el.removeEventListener("mousemove", fn));
    };
  }, []);

  return (
    <section
      id="sobre"
      style={{
        background: "#0a0a0a",
        padding: "80px 40px",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* Left — text */}
        <div ref={textRef} className="as-text as-reveal">
          <span
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "3px",
              color: "#9B5DE5",
              textTransform: "uppercase",
              display: "block",
            }}
          >
            Sobre Nós
          </span>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-1.2px",
              lineHeight: 1.2,
              marginTop: "18px",
              color: "#fff",
              textWrap: "balance" as never,
            }}
          >
            A mais completa{" "}
            <span style={{ color: "#9B5DE5" }}>plataforma de comunicação</span>{" "}
            do Piauí
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.6)",
              marginTop: "26px",
              maxWidth: "460px",
            }}
          >
            A SETE TV nasceu com o propósito de democratizar a informação,
            utilizando a tecnologia como ponte entre os fatos e o público
            piauiense.
          </p>

          <button
            onClick={() =>
              document
                .querySelector("#servicos")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="as-cta-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "32px",
              fontSize: "15px",
              fontWeight: 600,
              fontFamily: "Inter, system-ui, sans-serif",
              padding: "15px 28px",
              borderRadius: "999px",
              background: "#7B2FE0",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              boxShadow:
                "0 14px 40px -8px rgba(123,47,224,0.65), inset 0 1px 0 rgba(255,255,255,0.18)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow =
                "0 20px 52px -8px rgba(123,47,224,0.8), inset 0 1px 0 rgba(255,255,255,0.18)";
              const arrow = el.querySelector<HTMLElement>(".as-arrow");
              if (arrow) arrow.style.transform = "translateX(6px)";
            }}
            onMouseOut={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow =
                "0 14px 40px -8px rgba(123,47,224,0.65), inset 0 1px 0 rgba(255,255,255,0.18)";
              const arrow = el.querySelector<HTMLElement>(".as-arrow");
              if (arrow) arrow.style.transform = "translateX(0)";
            }}
          >
            Ver Nossos Serviços{" "}
            <span
              className="as-arrow"
              style={{ transition: "transform 0.3s ease", display: "inline-block" }}
            >
              →
            </span>
          </button>
        </div>

        {/* Right — cards */}
        <div
          ref={cardsRef}
          className="as-cards as-reveal"
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          {CARDS.map((card, i) => (
            <div
              key={i}
              className={`as-card as-card-${i}`}
              style={{ "--delay": `${i * 0.1}s` } as React.CSSProperties}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                  animation: `asIconFloat 2.5s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
              >
                {card.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0, position: "relative", zIndex: 1 }}>
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "1.6px",
                    color: "rgba(255,255,255,0.38)",
                    textTransform: "uppercase",
                    display: "block",
                  }}
                >
                  {card.tag}
                </span>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "-0.3px",
                    marginTop: "3px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    lineHeight: 1.5,
                    color: "rgba(255,255,255,0.52)",
                    marginTop: "4px",
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Reveal */
        .as-reveal {
          opacity: 0;
          transition: opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1);
        }
        .as-reveal.as-in { opacity: 1; }
        .as-text.as-reveal { transform: translateX(-30px); }
        .as-text.as-reveal.as-in { transform: none; }

        /* Cards reveal */
        .as-cards .as-card {
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1),
                      border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
          transition-delay: var(--delay, 0s);

          position: relative;
          overflow: hidden;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 20px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: grid;
          grid-template-columns: auto 1fr;
          column-gap: 16px;
          align-items: center;
        }
        .as-cards.as-in .as-card {
          opacity: 1;
          transform: none;
        }

        /* Hover lift */
        .as-card:hover {
          transform: translateY(-6px) !important;
          border-color: rgba(155,93,229,0.4);
          background: rgba(155,93,229,0.06);
          box-shadow: 0 12px 32px rgba(168,85,247,0.2);
        }

        /* Magic card glow */
        .as-card::before {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease;
          opacity: 0;
          z-index: 0;
          left: var(--mouse-x, 50%);
          top: var(--mouse-y, 50%);
        }
        .as-card:hover::before { opacity: 1; }
        .as-card > * { position: relative; z-index: 1; }

        /* Icon float */
        @keyframes asIconFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }

        /* Responsive */
        @media (max-width: 980px) {
          #sobre > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 560px) {
          #sobre { padding: 64px 22px !important; }
        }
      `}</style>
    </section>
  );
}
