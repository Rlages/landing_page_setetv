"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "@/components/new/Typewriter";

const BG_IMG =
  "https://res.cloudinary.com/dnth1inmv/image/upload/v1780087111/2_xsvxwu.png";

const DOCK_ICONS = [
  {
    label: "YouTube",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%">
        <path
          fill="#FF0000"
          d="M23 7.6a3 3 0 0 0-2.1-2.13C19.04 5 12 5 12 5s-7.04 0-8.9.47A3 3 0 0 0 1 7.6 31.3 31.3 0 0 0 .53 12 31.3 31.3 0 0 0 1 16.4a3 3 0 0 0 2.1 2.13C4.96 19 12 19 12 19s7.04 0 8.9-.47A3 3 0 0 0 23 16.4 31.3 31.3 0 0 0 23.47 12 31.3 31.3 0 0 0 23 7.6z"
        />
        <path fill="#fff" d="M9.75 15.5v-7l6 3.5z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
        <defs>
          <linearGradient id="ig-hero" x1="2" y1="22" x2="22" y2="2">
            <stop offset="0" stopColor="#feda75" />
            <stop offset=".35" stopColor="#fa7e1e" />
            <stop offset=".65" stopColor="#d62976" />
            <stop offset="1" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="18" height="18" rx="5.5" stroke="url(#ig-hero)" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="url(#ig-hero)" strokeWidth="2" />
        <circle cx="17.3" cy="6.7" r="1.3" fill="url(#ig-hero)" />
      </svg>
    ),
  },
  {
    label: "Equipe",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        width="100%"
        height="100%"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 20.5c0-4.4 3.4-7 7.5-7s7.5 2.6 7.5 7" />
      </svg>
    ),
  },
];

const AVATARS = [
  { initials: "JM", bg: "linear-gradient(135deg,#7B2FE0,#9B5DE5)" },
  { initials: "EL", bg: "linear-gradient(135deg,#d946ef,#7B2FE0)" },
  { initials: "RL", bg: "linear-gradient(135deg,#9B5DE5,#c084fc)" },
  { initials: "LR", bg: "linear-gradient(135deg,#5b21b6,#9B5DE5)" },
  { initials: "LM", bg: "linear-gradient(135deg,#c084fc,#d946ef)" },
];

const SIDE_ITEMS = [
  { cat: "Economia",  title: "Investimentos em tecnologia crescem 40% no PI",      grad: "linear-gradient(135deg,#7B2FE0,#9B5DE5)" },
  { cat: "Esportes",  title: "Piauí FC avança para semifinal do campeonato",        grad: "linear-gradient(135deg,#d946ef,#7B2FE0)" },
  { cat: "Cultura",   title: "Festival de música nordestina este fim de semana",    grad: "linear-gradient(135deg,#5b21b6,#c084fc)" },
  { cat: "Saúde",     title: "Novas UBSs abertas no interior do estado",            grad: "linear-gradient(135deg,#9B5DE5,#d946ef)" },
];

/* ─── Magic Dock ─────────────────────────────────────────────── */
function MagicDock() {
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const BASE = 36, MAX_SCALE = 56 / 36, RANGE = 92;

  function update(clientX: number) {
    iconRefs.current.forEach((ic) => {
      if (!ic) return;
      const rect = ic.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const d = Math.abs(clientX - center);
      let s = 1;
      if (d < RANGE) {
        const t = 1 - d / RANGE;
        s = 1 + (MAX_SCALE - 1) * t * t * (3 - 2 * t);
      }
      ic.style.transform = `scale(${s.toFixed(3)}) translateY(${(-(s - 1) * 16).toFixed(1)}px)`;
    });
  }

  function reset() {
    iconRefs.current.forEach((ic) => {
      if (ic) ic.style.transform = "scale(1)";
    });
  }

  return (
    <div
      onMouseMove={(e) => update(e.clientX)}
      onMouseLeave={reset}
      style={{
        display: "inline-flex",
        alignItems: "flex-end",
        gap: 20,
        padding: "12px 28px",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 100,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
      }}
    >
      {DOCK_ICONS.map((icon, i) => (
        <div
          key={i}
          ref={(el) => { iconRefs.current[i] = el; }}
          aria-label={icon.label}
          style={{
            width: BASE,
            height: BASE,
            flexShrink: 0,
            display: "grid",
            placeItems: "center",
            transformOrigin: "center bottom",
            transition: "transform .22s cubic-bezier(.2,1.4,.35,1)",
            willChange: "transform",
          }}
        >
          {icon.svg}
        </div>
      ))}
    </div>
  );
}

/* ─── Portal mock (inside MacBook screen) ───────────────────── */
function PortalMock() {
  return (
    <div
      className="portal-mock"
      style={{
        position: "absolute",
        inset: 0,
        background: "#0c0710",
        color: "#fff",
        fontSize: "9px",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
      }}
    >
      {/* top bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "7px 11px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          background: "#0a0510",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            background: "#e11d48",
            color: "#fff",
            fontWeight: 800,
            fontSize: "7px",
            letterSpacing: "0.5px",
            padding: "3px 6px",
            borderRadius: "3px",
          }}
        >
          <span className="portal-blink-dot" />
          AO VIVO
        </div>
        <div style={{ fontWeight: 900, fontSize: "13px", letterSpacing: "-0.3px" }}>
          SETE{" "}
          <span
            style={{
              background: "linear-gradient(135deg,#c084fc,#d946ef)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            TV
          </span>
        </div>
        <div
          style={{
            marginLeft: "auto",
            fontSize: "7.5px",
            color: "rgba(255,255,255,0.45)",
            fontWeight: 500,
          }}
        >
          28 Mai. 2026
        </div>
      </div>

      {/* categories */}
      <div
        style={{
          display: "flex",
          gap: "13px",
          padding: "6px 11px",
          fontSize: "7.5px",
          fontWeight: 700,
          letterSpacing: "0.6px",
          color: "rgba(255,255,255,0.6)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          textTransform: "uppercase",
        }}
      >
        <span style={{ color: "#c084fc" }}>Destaque</span>
        <span>Política</span>
        <span>Economia</span>
        <span>Esportes</span>
      </div>

      {/* body */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.7fr 1fr",
          gap: "9px",
          padding: "11px",
          flex: 1,
          overflow: "hidden",
        }}
      >
        {/* featured */}
        <div
          style={{
            position: "relative",
            borderRadius: "7px",
            overflow: "hidden",
            background: "linear-gradient(135deg,#3b1764,#1a0b2e)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 70% 25%, rgba(217,70,239,0.5), transparent 55%), linear-gradient(135deg,#4c1d95,#7B2FE0 55%,#2a0d4a)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "7px",
              left: "7px",
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(4px)",
              color: "#fff",
              fontSize: "6.5px",
              fontWeight: 800,
              letterSpacing: "0.5px",
              padding: "3px 6px",
              borderRadius: "3px",
              textTransform: "uppercase",
              zIndex: 1,
            }}
          >
            Política
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.85) 12%, transparent 60%)",
            }}
          />
          <div style={{ position: "absolute", left: "9px", right: "9px", bottom: "9px" }}>
            <h3
              style={{
                fontSize: "11px",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.3px",
              }}
            >
              Piauí anuncia investimento em infraestrutura digital
            </h3>
            <p
              style={{
                fontSize: "7.5px",
                color: "rgba(255,255,255,0.7)",
                marginTop: "4px",
                lineHeight: 1.3,
              }}
            >
              Secretaria confirma expansão de conectividade
            </p>
          </div>
        </div>

        {/* side */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            overflow: "hidden",
          }}
        >
          {SIDE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              style={{ display: "flex", gap: "7px", alignItems: "flex-start", overflow: "hidden" }}
            >
              <div
                style={{
                  width: "34px",
                  height: "26px",
                  borderRadius: "4px",
                  flexShrink: 0,
                  background: item.grad,
                }}
              />
              <div style={{ flex: 1, overflow: "hidden" }}>
                <div
                  style={{
                    fontSize: "6px",
                    fontWeight: 800,
                    letterSpacing: "0.6px",
                    color: "#c084fc",
                    textTransform: "uppercase",
                  }}
                >
                  {item.cat}
                </div>
                <div
                  style={{
                    fontSize: "8px",
                    fontWeight: 600,
                    lineHeight: 1.25,
                    marginTop: "2px",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Hero ───────────────────────────────────────────────────── */
export default function HeroNew() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        isolation: "isolate",
        overflow: "hidden",
        background: `#07020f url('${BG_IMG}') center center / cover no-repeat`,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      {/* Left legibility overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Two-column content ──────────────────────────────── */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 5,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "120px 40px 64px",
          display: "flex",
          alignItems: "center",
          gap: "64px",
          minHeight: "100vh",
        }}
      >
        {/* ── Left: text ────────────────────────────────────── */}
        <div className="hero-left" style={{ flex: "0 0 auto", maxWidth: 520 }}>

          {/* Headline */}
          <motion.h1
            className="hero-headline"
            initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              lineHeight: 1.04,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#fff",
            }}
          >
            <span style={{ display: "block" }}>Comunicação</span>
            <span style={{ display: "block", color: "#9B5DE5" }}>
              que{" "}
              <Typewriter
                words={["conecta", "inspira", "transforma"]}
                speed={90}
                deleteSpeed={55}
                pauseTime={2000}
                style={{ color: "#9B5DE5" }}
              />
            </span>
            <span style={{ display: "block", color: "#ffffff" }}>o Piauí.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "1.1rem",
              fontWeight: 400,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.6,
              maxWidth: 440,
              marginTop: 18,
            }}
          >
            TV Digital, Portal de Notícias, Podcast e Redes Sociais{" "}
            <span style={{ color: "#9B5DE5", fontWeight: 400 }}>
              a plataforma completa de comunicação do Piauí.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 24 }}
          >
            <button
              onClick={() =>
                document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontSize: 15,
                fontWeight: 600,
                padding: "15px 28px",
                borderRadius: 999,
                cursor: "pointer",
                border: "1px solid transparent",
                background: "#7B2FE0",
                color: "#fff",
                boxShadow:
                  "0 14px 40px -8px rgba(123,47,224,0.65), inset 0 1px 0 rgba(255,255,255,0.18)",
                transition: "transform .2s, box-shadow .2s",
              }}
              onMouseOver={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow =
                  "0 20px 52px -8px rgba(123,47,224,0.8), inset 0 1px 0 rgba(255,255,255,0.18)";
              }}
              onMouseOut={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow =
                  "0 14px 40px -8px rgba(123,47,224,0.65), inset 0 1px 0 rgba(255,255,255,0.18)";
              }}
            >
              Fale Conosco <span>→</span>
            </button>

            <button
              onClick={() =>
                document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontSize: 15,
                fontWeight: 600,
                padding: "15px 28px",
                borderRadius: 999,
                cursor: "pointer",
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(255,255,255,0.04)",
                color: "#fff",
                transition: "background .2s, border-color .2s, transform .2s",
              }}
              onMouseOver={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.09)";
                el.style.borderColor = "rgba(255,255,255,0.3)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.04)";
                el.style.borderColor = "rgba(255,255,255,0.16)";
                el.style.transform = "translateY(0)";
              }}
            >
              Soluções <span>→</span>
            </button>
          </motion.div>

          {/* Dock */}
          <motion.div
            className="hero-dock"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{ display: "flex", justifyContent: "flex-start", marginTop: 20 }}
          >
            <MagicDock />
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 24 }}
          >
            <div style={{ display: "flex" }}>
              {AVATARS.map((av, i) => (
                <div
                  key={i}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    border: "2px solid #07020f",
                    marginLeft: i === 0 ? 0 : -13,
                    display: "grid",
                    placeItems: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#fff",
                    background: av.bg,
                    flexShrink: 0,
                  }}
                >
                  {av.initials}
                </div>
              ))}
            </div>
            <p
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "13.5px",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.5,
                maxWidth: 280,
              }}
            >
              Confiado por{" "}
              <strong style={{ color: "#fff", fontWeight: 600 }}>
                prefeituras e órgãos públicos
              </strong>{" "}
              em todo o Piauí
            </p>
          </motion.div>
        </div>

        {/* ── Right: laptop mockup ───────────────────────────── */}
        <div
          className="laptop-stage"
          style={{ flex: 1, position: "relative", minWidth: 0 }}
        >
          {/* Purple glow */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              width: "128%",
              height: "128%",
              left: "50%",
              top: "44%",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(ellipse at center, rgba(123,47,224,0.50), rgba(155,93,229,0.20) 40%, transparent 68%)",
              filter: "blur(36px)",
              zIndex: -1,
              pointerEvents: "none",
            }}
          />

          {/* MacBook body */}
          <div className="laptop-body">
            {/* Screen casing */}
            <div
              style={{
                background: "linear-gradient(150deg,#2a2a30,#141417)",
                borderRadius: "20px",
                padding: "12px",
                boxShadow:
                  "inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 2px 3px rgba(255,255,255,0.10)",
                position: "relative",
              }}
            >
              {/* Camera notch */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "120px",
                  height: "18px",
                  background: "#141417",
                  borderRadius: "0 0 12px 12px",
                  zIndex: 3,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "6px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#3a3a40",
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
                  }}
                />
              </div>

              {/* Screen viewport */}
              <div
                style={{
                  position: "relative",
                  borderRadius: "9px",
                  overflow: "hidden",
                  aspectRatio: "16 / 10.2",
                  background: "#0a0a0d",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.6)",
                }}
              >
                <PortalMock />
              </div>
            </div>

            {/* Hinge / base */}
            <div
              style={{
                position: "relative",
                height: "16px",
                width: "113%",
                marginLeft: "-6.5%",
                background:
                  "linear-gradient(180deg,#34343a 0%,#26262b 18%,#1a1a1e 60%,#0e0e11 100%)",
                borderRadius: "3px 3px 11px 11px",
                boxShadow:
                  "inset 0 2px 2px rgba(255,255,255,0.12), 0 4px 8px rgba(0,0,0,0.5)",
                clipPath: "polygon(1.5% 0, 98.5% 0, 100% 100%, 0 100%)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "13%",
                  height: "6px",
                  background: "#0c0c0f",
                  borderRadius: "0 0 7px 7px",
                  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.8)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Styles + keyframes ────────────────────────────────── */}
      <style>{`
        /* Desktop laptop animation */
        @keyframes heroFloat {
          0%,100% { transform: perspective(2200px) rotateY(-13deg) rotateX(5deg) rotateZ(0.5deg) translateY(0); }
          50%      { transform: perspective(2200px) rotateY(-12deg) rotateX(4deg) rotateZ(0.3deg) translateY(-14px); }
        }
        .laptop-body {
          width: min(520px, 100%);
          transform: perspective(2200px) rotateY(-13deg) rotateX(5deg) rotateZ(0.5deg);
          animation: heroFloat 7s ease-in-out infinite;
          filter: drop-shadow(0 60px 80px rgba(0,0,0,0.6));
        }

        /* Portal blink dot */
        .portal-blink-dot {
          display: inline-block;
          width: 4px; height: 4px;
          border-radius: 50%; background: #fff;
          animation: portalBlink 1.4s infinite;
        }
        @keyframes portalBlink { 50% { opacity: 0.3; } }

        /* Mobile background image */
        @media (max-width: 768px) {
          #hero {
            background-image: url('https://res.cloudinary.com/dnth1inmv/image/upload/v1780171344/Design_sem_nome_4_f1wrdx.png') !important;
            background-size: cover !important;
            background-position: center top !important;
          }
        }

        /* ── Mobile ≤768px ─────────────────────────────────── */
        @media (max-width: 768px) {
          /* Stack columns, no gap (spacing handled by margin-bottom below) */
          .hero-content {
            flex-direction: column !important;
            align-items: center !important;
            justify-content: flex-start !important;
            padding: 96px 22px 60px !important;
            min-height: 100svh !important;
            gap: 0 !important;
          }

          /* Laptop: in-flow first (order 0 < order 1), centred, flat */
          .laptop-stage {
            order: 0 !important;
            flex: none !important;
            width: 100% !important;
            max-width: 320px !important;
            margin: 0 auto !important;
            margin-bottom: 24px !important;
            overflow: hidden !important;
            transform: none !important;
          }
          .laptop-body {
            transform: none !important;
            animation: none !important;
            filter: drop-shadow(0 20px 40px rgba(0,0,0,0.5)) !important;
            width: 100% !important;
          }

          /* Text: strictly after the mockup */
          .hero-left {
            order: 1 !important;
            flex: none !important;
            max-width: 100% !important;
            width: 100% !important;
            text-align: center !important;
            margin-top: 0 !important;
          }
          .hero-headline {
            font-size: clamp(2rem, 8vw, 2.8rem) !important;
            letter-spacing: -1px !important;
          }
          .hero-sub {
            font-size: 1rem !important;
            max-width: 100% !important;
          }

          /* Buttons: full-width column */
          .hero-cta {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .hero-cta > button {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
          }

          /* Hide portal mock (AO VIVO / news) on mobile */
          .portal-mock {
            display: none !important;
          }

          /* Dock: centered */
          .hero-dock {
            justify-content: center !important;
          }

          /* Social proof: centered */
          .hero-social {
            justify-content: center !important;
            flex-wrap: wrap !important;
          }
          .hero-social p {
            text-align: center !important;
            max-width: 240px !important;
          }
        }
      `}</style>
    </section>
  );
}
