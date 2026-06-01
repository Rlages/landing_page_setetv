"use client";
import { motion } from "framer-motion";

/* ─── Service data ───────────────────────────────────────────── */
const SERVICES = [
  {
    title: "Cobertura Jornalística Municipal",
    desc:  "Equipe em campo para cobertura completa dos acontecimentos da sua cidade com agilidade e precisão.",
    grad:  "radial-gradient(circle at 30% 45%, rgba(123,47,224,0.40), transparent 65%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="14" width="40" height="27" rx="6" stroke="rgba(155,93,229,0.85)" strokeWidth="2"/>
        <circle cx="24" cy="27" r="8" stroke="rgba(155,93,229,0.85)" strokeWidth="2"/>
        <circle cx="24" cy="27" r="3" fill="rgba(155,93,229,0.55)"/>
        <path d="M16 14v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" stroke="rgba(155,93,229,0.85)" strokeWidth="2"/>
        <circle cx="38" cy="20" r="2.5" fill="rgba(217,70,239,0.7)"/>
      </svg>
    ),
  },
  {
    title: "Publicação no Portal de Notícias",
    desc:  "Conteúdos publicados no setetvnews.com.br com alcance mundial e atualização em tempo real.",
    grad:  "radial-gradient(circle at 68% 35%, rgba(155,93,229,0.38), transparent 65%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="rgba(155,93,229,0.85)" strokeWidth="2"/>
        <ellipse cx="24" cy="24" rx="8" ry="18" stroke="rgba(155,93,229,0.85)" strokeWidth="2"/>
        <line x1="6" y1="24" x2="42" y2="24" stroke="rgba(155,93,229,0.85)" strokeWidth="2"/>
        <line x1="11" y1="14" x2="37" y2="14" stroke="rgba(155,93,229,0.5)" strokeWidth="1.5"/>
        <line x1="11" y1="34" x2="37" y2="34" stroke="rgba(155,93,229,0.5)" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Produção de Conteúdo para Redes Sociais",
    desc:  "Criação de conteúdo estratégico para Instagram, YouTube e demais plataformas digitais.",
    grad:  "radial-gradient(circle at 50% 48%, rgba(217,70,239,0.32), transparent 65%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="38" cy="10" r="5" fill="rgba(155,93,229,0.45)" stroke="rgba(155,93,229,0.85)" strokeWidth="2"/>
        <circle cx="10" cy="24" r="5" fill="rgba(155,93,229,0.45)" stroke="rgba(155,93,229,0.85)" strokeWidth="2"/>
        <circle cx="38" cy="38" r="5" fill="rgba(155,93,229,0.45)" stroke="rgba(155,93,229,0.85)" strokeWidth="2"/>
        <line x1="15" y1="21" x2="33" y2="13" stroke="rgba(155,93,229,0.85)" strokeWidth="2"/>
        <line x1="15" y1="27" x2="33" y2="35" stroke="rgba(155,93,229,0.85)" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Assessoria de Imprensa Digital",
    desc:  "Gestão profissional da comunicação institucional com cobertura jornalística e presença digital.",
    grad:  "radial-gradient(circle at 32% 52%, rgba(123,47,224,0.36), transparent 65%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M8 18 L36 10 L36 38 L8 30 Z" stroke="rgba(155,93,229,0.85)" strokeWidth="2" fill="rgba(155,93,229,0.1)" strokeLinejoin="round"/>
        <rect x="3" y="18" width="5" height="12" rx="2.5" fill="rgba(155,93,229,0.55)"/>
        <path d="M8 30 L13 42" stroke="rgba(155,93,229,0.85)" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="40" cy="24" r="4" fill="rgba(217,70,239,0.4)" stroke="rgba(217,70,239,0.8)" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Transmissões ao Vivo",
    desc:  "Cobertura em tempo real com transmissão simultânea no YouTube, Instagram e demais plataformas.",
    grad:  "radial-gradient(circle at 65% 40%, rgba(192,132,252,0.35), transparent 65%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="6" fill="rgba(217,70,239,0.65)"/>
        <path d="M17 31 Q9 24 17 17" stroke="rgba(155,93,229,0.85)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M31 31 Q39 24 31 17" stroke="rgba(155,93,229,0.85)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M12 36 Q3 24 12 12" stroke="rgba(155,93,229,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M36 36 Q45 24 36 12" stroke="rgba(155,93,229,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Cobertura de Eventos Oficiais",
    desc:  "Presença jornalística profissional em solenidades, inaugurações e atos da administração pública.",
    grad:  "radial-gradient(circle at 45% 38%, rgba(155,93,229,0.35), transparent 65%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="32" rx="6" stroke="rgba(155,93,229,0.85)" strokeWidth="2"/>
        <line x1="6" y1="20" x2="42" y2="20" stroke="rgba(155,93,229,0.85)" strokeWidth="2"/>
        <line x1="16" y1="6" x2="16" y2="14" stroke="rgba(155,93,229,0.85)" strokeWidth="2" strokeLinecap="round"/>
        <line x1="32" y1="6" x2="32" y2="14" stroke="rgba(155,93,229,0.85)" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="31" r="2.5" fill="rgba(155,93,229,0.75)"/>
        <circle cx="24" cy="31" r="2.5" fill="rgba(155,93,229,0.75)"/>
        <circle cx="32" cy="31" r="2.5" fill="rgba(155,93,229,0.75)"/>
      </svg>
    ),
  },
];

/* ─── Card ───────────────────────────────────────────────────── */
function ServiceCard({ s, i }: { s: typeof SERVICES[0]; i: number }) {
  return (
    <motion.div
      className="sv-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Placeholder image area */}
      <div
        style={{
          height: "220px",
          borderRadius: "12px",
          background: `rgba(255,255,255,0.04)`,
          backgroundImage: s.grad,
          display: "grid",
          placeItems: "center",
          flexShrink: 0,
        }}
      >
        {s.icon}
      </div>

      {/* Text */}
      <h3
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: "20px",
          fontWeight: 700,
          color: "#ffffff",
          letterSpacing: "-0.3px",
          lineHeight: 1.3,
          marginTop: "20px",
        }}
      >
        {s.title}
      </h3>
      <p
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: "14px",
          color: "rgba(255,255,255,0.6)",
          lineHeight: 1.6,
          marginTop: "8px",
        }}
      >
        {s.desc}
      </p>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export default function ServicosNew() {
  return (
    <section
      id="servicos"
      style={{
        background: "#0a0a0a",
        padding: "100px 0",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>

        {/* ── Header ── */}
        <div className="sv-header">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#8B5CF6",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Nossos Serviços
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "#ffffff",
              }}
            >
              Soluções completas em comunicação
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              maxWidth: "480px",
            }}
          >
            Comunicação institucional, produção audiovisual e divulgação digital para{" "}
            <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>
              prefeituras, câmaras municipais e órgãos públicos
            </span>{" "}
            de todo o Piauí.
          </motion.p>
        </div>

        {/* ── Grid ── */}
        <div className="sv-grid">
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} s={s} i={i} />
          ))}
        </div>
      </div>

      <style>{`
        /* Header: 2 columns on desktop */
        .sv-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: flex-end;
          margin-bottom: 64px;
        }

        /* Cards grid: 3 columns on desktop */
        .sv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* Card base */
        .sv-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          cursor: default;
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .sv-card:hover {
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(139, 92, 246, 0.15);
        }

        /* Responsive */
        @media (max-width: 980px) {
          .sv-header {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .sv-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .sv-grid {
            grid-template-columns: 1fr;
          }
          #servicos { padding: 64px 0 !important; }
          #servicos > div { padding: 0 22px !important; }
        }
      `}</style>
    </section>
  );
}
