"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projetos = [
  { city:"ALTOS – PI",        name:"Festa da Manga 2026", aud:"10K", period:"pessoas estimadas",     emoji:"🥭", bg:"linear-gradient(135deg,#0d1f0d,#1a3d1a)" },
  { city:"ÁGUA BRANCA – PI",  name:"Carnaval 2026",       aud:"12K", period:"pessoas/dia estimadas", emoji:"🎭", bg:"linear-gradient(135deg,#1a0d2e,#3d1a5c)" },
  { city:"UNIÃO – PI",        name:"Carnaval 2026",       aud:"9K",  period:"pessoas/dia estimadas", emoji:"🎭", bg:"linear-gradient(135deg,#1a0d0d,#3d1a1a)" },
  { city:"CAMPO MAIOR – PI",  name:"Corso 2026",          aud:"8K",  period:"pessoas/dia estimadas", emoji:"🎪", bg:"linear-gradient(135deg,#0d1a2e,#1a3060)" },
];
const TOTAL = projetos.length;

function Card({ p, i }: { p:typeof projetos[0]; i:number }) {
  const cRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target:cRef, offset:["start start","end start"] });
  const scale = useTransform(scrollYProgress, [0,1], [1, 1-(TOTAL-1-i)*0.04]);
  return (
    <div ref={cRef} style={{ height:"85vh", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <motion.div style={{ scale, top:`${i*28}px`, position:"sticky", width:"100%", maxWidth:900,
                           background:p.bg, borderRadius:24,
                           overflow:"hidden", border:"1px solid rgba(255,255,255,0.08)",
                           boxShadow:"0 24px 64px rgba(0,0,0,0.5)" }}>
        <div style={{ height:2, background:"linear-gradient(90deg,transparent,rgba(123,47,224,0.8),transparent)" }}/>
        <div style={{ padding:"40px 48px" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:28 }}>
            <div style={{ display:"flex", alignItems:"center", gap:20 }}>
              <span style={{ fontFamily:"Inter", fontSize:"clamp(56px,8vw,96px)", fontWeight:900,
                             color:"rgba(255,255,255,0.04)", letterSpacing:"-0.05em", lineHeight:1, userSelect:"none" }}>
                {String(i+1).padStart(2,"0")}
              </span>
              <div>
                <p style={{ fontFamily:"Inter", fontSize:10, fontWeight:700, letterSpacing:"0.12em",
                             textTransform:"uppercase", color:"rgba(155,93,229,0.8)", marginBottom:6 }}>{p.city}</p>
                <h3 style={{ fontFamily:"Inter", fontSize:"clamp(20px,2.5vw,28px)", fontWeight:700,
                              letterSpacing:"-0.03em", color:"#fff" }}>{p.name}</h3>
              </div>
            </div>
            <span style={{ fontSize:"clamp(36px,5vw,60px)" }}>{p.emoji}</span>
          </div>
          <div style={{ background:"rgba(0,0,0,0.3)", borderRadius:12, padding:"20px 24px",
                        border:"1px solid rgba(255,255,255,0.08)", display:"flex",
                        alignItems:"center", gap:24 }}>
            <div>
              <div style={{ fontFamily:"Inter", fontSize:"clamp(28px,4vw,48px)", fontWeight:800,
                            letterSpacing:"-0.04em", color:"#fff", lineHeight:1 }}>{p.aud}</div>
              <div style={{ fontFamily:"Inter", fontSize:12, color:"rgba(255,255,255,0.4)", marginTop:4 }}>{p.period}</div>
            </div>
            <div style={{ flex:1, height:1, background:"rgba(255,255,255,0.08)" }}/>
            <button onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior:"smooth" })}
              style={{ fontFamily:"Inter", fontSize:12, fontWeight:600, color:"rgba(155,93,229,0.9)",
                       background:"transparent", border:"1px solid rgba(123,47,224,0.3)",
                       borderRadius:100, padding:"10px 22px", cursor:"pointer", transition:"all .2s", whiteSpace:"nowrap" }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.background="#7B2FE0"; (e.currentTarget as HTMLElement).style.color="#fff"; }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.background="transparent"; (e.currentTarget as HTMLElement).style.color="rgba(155,93,229,0.9)"; }}>
              Solicitar cobertura →
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjetosNew() {
  return (
    <section id="projetos" className="section-dark" style={{ borderTop:"1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth:1152, margin:"0 auto", padding:"100px 48px 0" }}>
        <motion.div
          initial={{ opacity:0, y:24, filter:"blur(8px)" }}
          whileInView={{ opacity:1, y:0, filter:"blur(0px)" }}
          viewport={{ once:true }}
          transition={{ duration:0.7, ease:[0.16,1,0.3,1] }}
          style={{ marginBottom:48 }}>
          <span style={{ fontFamily:"Inter", fontSize:11, fontWeight:600, letterSpacing:"0.12em",
                         textTransform:"uppercase", color:"rgba(155,93,229,0.8)", display:"block", marginBottom:16 }}>2026</span>
          <h2 style={{ fontFamily:"Inter", fontWeight:900, letterSpacing:"-0.04em",
                       fontSize:"clamp(2rem,4.5vw,3.5rem)", color:"#fff", lineHeight:1.0 }}>
            Projetos em pauta
          </h2>
        </motion.div>
      </div>
      <div style={{ maxWidth:1152, margin:"0 auto", padding:"0 48px 120px" }}>
        {projetos.map((p,i) => <Card key={i} p={p} i={i} />)}
      </div>
    </section>
  );
}
