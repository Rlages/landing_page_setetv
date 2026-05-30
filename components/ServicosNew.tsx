"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  { num:"01", icon:"🎯", title:"Cobertura Jornalística Municipal",     desc:"Equipe em campo para cobertura completa dos acontecimentos da sua cidade com agilidade e precisão." },
  { num:"02", icon:"📡", title:"Publicação no Portal de Notícias",     desc:"Conteúdos publicados no setetvnews.com.br com alcance mundial e atualização em tempo real." },
  { num:"03", icon:"📬", title:"Assessoria de Comunicação",            desc:"Gestão estratégica da comunicação institucional com profissionalismo e consistência de marca." },
  { num:"04", icon:"🎬", title:"Produção de Conteúdo Audiovisual",     desc:"Vídeos institucionais, reportagens e materiais de alto padrão para diversas plataformas." },
  { num:"05", icon:"📡", title:"Transmissões ao Vivo",                 desc:"Cobertura em tempo real com transmissão simultânea no YouTube, Instagram e demais plataformas." },
  { num:"06", icon:"📋", title:"Cobertura de Eventos Oficiais",        desc:"Presença jornalística profissional em solenidades, inaugurações e atos da administração pública." },
  { num:"07", icon:"⭐", title:"Produção de Campanhas Institucionais", desc:"Campanhas digitais e audiovisuais completas para comunicação de ações governamentais." },
  { num:"08", icon:"🔗", title:"Solução Integrada de Comunicação",     desc:"Pacote crossmídia: TV Digital + Portal + Podcast + Redes Sociais em uma única solução." },
];

function ServiceCard({ s, i }: { s:typeof services[0]; i:number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x:0, y:0 });
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      initial={{ opacity:0, y:24 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, margin:"-40px" }}
      transition={{ duration:0.55, delay:i*0.05, ease:[0.22,1,0.36,1] }}>
      <div ref={cardRef}
        onMouseMove={e => { if(!cardRef.current) return; const r=cardRef.current.getBoundingClientRect(); setMouse({ x:e.clientX-r.left, y:e.clientY-r.top }); }}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{ position:"relative", background:"#fff", border:"1px solid #e5e7eb",
                 borderRadius:16, padding:"28px 28px 24px", display:"flex",
                 flexDirection:"column", minHeight:200, overflow:"hidden",
                 transition:"border-color .3s,box-shadow .3s", cursor:"default",
                 ...(hov ? { border:"1px solid rgba(123,47,224,0.3)", boxShadow:"0 8px 32px rgba(123,47,224,0.1)" } : {}) }}>
        {hov && (
          <div style={{ position:"absolute", inset:0, pointerEvents:"none", zIndex:0,
                        background:`radial-gradient(600px at ${mouse.x}px ${mouse.y}px,rgba(123,47,224,0.06),transparent 40%)` }}/>
        )}
        <div style={{ position:"relative", zIndex:1 }}>
          <span style={{ fontSize:28, display:"block", marginBottom:16 }}>{s.icon}</span>
          <span style={{ fontFamily:"Inter", fontSize:10, fontWeight:700, letterSpacing:"0.1em",
                         color:"rgba(123,47,224,0.6)", textTransform:"uppercase", display:"block", marginBottom:8 }}>{s.num}</span>
          <h3 style={{ fontFamily:"Inter", fontSize:15, fontWeight:700, letterSpacing:"-0.02em",
                       color:"#111", lineHeight:1.35, marginBottom:10 }}>{s.title}</h3>
          <p style={{ fontFamily:"Inter", fontSize:13, color:"#666", lineHeight:1.65, flexGrow:1 }}>{s.desc}</p>
          <div style={{ display:"inline-flex", alignItems:"center", gap:6, marginTop:16,
                        fontFamily:"Inter", fontSize:12, fontWeight:600,
                        color:"#7B2FE0", cursor:"pointer", transition:"gap .2s" }}
            onMouseOver={e => (e.currentTarget.style.gap="10px")}
            onMouseOut={e => (e.currentTarget.style.gap="6px")}
            onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior:"smooth" })}>
            Saiba mais <span>→</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicosNew() {
  return (
    <section id="servicos" className="section-white" style={{ padding:"100px 0" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 48px" }}>
        <div className="grid md:grid-cols-2"
          style={{ gap:48, marginBottom:64, alignItems:"flex-end" }}>
          <motion.div
            initial={{ opacity:0, y:24 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.7 }}>
            <span style={{ fontFamily:"Inter", fontSize:11, fontWeight:600, letterSpacing:"0.12em",
                           textTransform:"uppercase", color:"#7B2FE0", display:"block", marginBottom:16 }}>O Que Fazemos</span>
            <h2 style={{ fontFamily:"Inter", fontWeight:900, letterSpacing:"-0.04em",
                         fontSize:"clamp(2rem,4.5vw,3.5rem)", color:"#111", lineHeight:1.05 }}>
              Nossos Serviços
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity:0, y:24 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.7, delay:0.1 }}
            style={{ fontFamily:"Inter", fontSize:15, color:"#555", lineHeight:1.7 }}>
            Soluções completas em <strong style={{ color:"#111" }}>comunicação institucional, produção audiovisual e divulgação digital</strong> para prefeituras, câmaras municipais e órgãos públicos.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2" style={{ gap:16 }}>
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {services.slice(0,4).map((s,i) => <ServiceCard key={i} s={s} i={i} />)}
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {services.slice(4).map((s,i) => <ServiceCard key={i} s={s} i={i+0.1} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
