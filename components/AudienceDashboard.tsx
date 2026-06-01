"use client";
import { useEffect, useRef, useState } from "react";

const AGE_BARS = [
  { label: "25–34", value: 33.7 },
  { label: "35–44", value: 21.6 },
  { label: "45–54", value: 16.5 },
  { label: "55–64", value: 11.0 },
  { label: "18–24", value: 8.9  },
  { label: "65+",   value: 5.4  },
];

const DEVICE_CARDS = [
  { value: "85,5%", label: "Mobile"    },
  { value: "13,9%", label: "Desktop"   },
  { value: "0,4%",  label: "Tablet"    },
  { value: "0,2%",  label: "Smart TV"  },
];

export default function AudienceDashboard() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #E5E7EB",
        padding: "80px 24px",
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <style>{`
        .aud-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .aud-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .aud-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .aud-cols {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .aud-big-stat {
            font-size: 80px !important;
          }
        }
      `}</style>

      <div className="aud-inner">
        {/* Header */}
        <div className="aud-header">
          <span style={{
            fontSize: 12,
            letterSpacing: "0.15em",
            color: "#8B5CF6",
            fontWeight: 600,
            textTransform: "uppercase",
          }}>
            NOSSO PÚBLICO
          </span>
          <h2 style={{
            fontSize: 42,
            fontWeight: 700,
            color: "#0A0A0F",
            margin: "8px 0 0",
            lineHeight: 1.15,
          }}>
            Quem assiste a SETE TV
          </h2>
        </div>

        <div className="aud-cols">
          {/* ── LEFT COLUMN ── */}
          <div>
            {/* Big stat */}
            <div>
              <span
                className="aud-big-stat"
                style={{
                  display: "block",
                  fontSize: 120,
                  fontWeight: 800,
                  color: "#0A0A0F",
                  lineHeight: 1,
                }}
              >
                85%
              </span>
              <p style={{ fontSize: 18, color: "#4B5563", margin: "12px 0 0" }}>
                do acesso vem de dispositivos móveis
              </p>
              <p style={{ fontSize: 16, color: "#6B7280", margin: "8px 0 0" }}>
                — a SETE TV foi feita para o celular do seu cliente.
              </p>
            </div>

            {/* Gender bar */}
            <div style={{ marginTop: 32 }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 8,
              }}>
                <span style={{ fontSize: 13, color: "#4B5563" }}>Feminino 61,1%</span>
                <span style={{ fontSize: 13, color: "#4B5563" }}>Masculino 38,9%</span>
              </div>
              <div style={{
                height: 8,
                borderRadius: 100,
                background: "#E5E7EB",
                display: "flex",
                overflow: "hidden",
              }}>
                <div style={{ width: "61.1%", background: "#8B5CF6", borderRadius: 100 }} />
                <div style={{ width: "38.9%", background: "#C4B5FD", borderRadius: 100 }} />
              </div>
            </div>

            {/* Device cards */}
            <div style={{
              marginTop: 32,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}>
              {DEVICE_CARDS.map((card) => (
                <div
                  key={card.label}
                  style={{
                    background: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                    borderRadius: 12,
                    padding: "16px 20px",
                  }}
                >
                  <div style={{ fontSize: 24, fontWeight: 700, color: "#0A0A0F" }}>
                    {card.value}
                  </div>
                  <div style={{
                    fontSize: 12,
                    color: "#6B7280",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginTop: 4,
                  }}>
                    {card.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div>
            <h3 style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#0A0A0F",
              margin: "0 0 32px",
            }}>
              Faixa etária
            </h3>

            {AGE_BARS.map((row, i) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 16,
                }}
              >
                <span style={{ fontSize: 14, color: "#4B5563", minWidth: 40 }}>
                  {row.label}
                </span>

                <div style={{
                  flex: 1,
                  height: 6,
                  background: "#E5E7EB",
                  borderRadius: 100,
                  overflow: "hidden",
                }}>
                  <div style={{
                    height: "100%",
                    background: "#8B5CF6",
                    borderRadius: 100,
                    width: revealed ? `${row.value}%` : "0%",
                    transition: `width 0.8s ease ${i * 100}ms`,
                  }} />
                </div>

                <span style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#0A0A0F",
                  minWidth: 42,
                  textAlign: "right",
                }}>
                  {row.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
