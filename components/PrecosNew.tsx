"use client";
import { motion } from "framer-motion";

const plans = [
  { name:"Essencial",    price:"R$ 1.200", period:"/mês", highlight:false,
    items:["2 reportagens/semana","Publicação no Portal","1 transmissão ao vivo/mês","Relatório mensal de alcance"] },
  { name:"Profissional", price:"R$ 2.800", period:"/mês", highlight:true,
    items:["5 reportagens/semana","Portal + Redes Sociais","4 transmissões ao vivo/mês","Assessoria de comunicação","Podcast mensal","Relatório detalhado de alcance"] },
  { name:"Premium",      price:"R$ 5.500", period:"/mês", highlight:false,
    items:["Cobertura diária completa","Todas as plataformas","Transmissões ilimitadas","Assessoria dedicada exclusiva","Campanha institucional","Relatório semanal de resultados"] },
];

export default function PrecosNew() {
  return (
    <section id="precos" className="section-white" style={{ padding:"100px 0" }}>
      <div style={{ maxWidth:1152, margin:"0 auto", padding:"0 48px" }}>
        <motion.div
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.7 }}
          style={{ textAlign:"center", marginBottom:64 }}>
          <span style={{ fontFamily:"Inter", fontSize:11, fontWeight:600, letterSpacing:"0.12em",
                         textTransform:"uppercase", color:"#7B2FE0", display:"block", marginBottom:16 }}>Investimento</span>
          <h2 style={{ fontFamily:"Inter", fontWeight:900, letterSpacing:"-0.04em",
                       fontSize:"clamp(2rem,4.5vw,3.5rem)", color:"#111", lineHeight:1.05, marginBottom:12 }}>
            Planos para cada tamanho<br/>de gestão pública
          </h2>
          <p style={{ fontFamily:"Inter", fontSize:15, color:"#555", maxWidth:480, margin:"0 auto", lineHeight:1.65 }}>
            Soluções transparentes e personalizáveis para cada necessidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3" style={{ gap:20 }}>
          {plans.map((plan,i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:32 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.6, delay:i*0.1 }}
              style={{ position:"relative",
                       background: plan.highlight ? "#0a0a0a" : "#fff",
                       color: plan.highlight ? "#fff" : "#111",
                       border: plan.highlight ? "none" : "1px solid #e5e7eb",
                       borderRadius:20, padding:32,
                       boxShadow: plan.highlight ? "0 24px 64px rgba(0,0,0,0.2)" : "0 2px 12px rgba(0,0,0,0.05)",
                       display:"flex", flexDirection:"column",
                       transform: plan.highlight ? "scale(1.04)" : "scale(1)" }}>
              {plan.highlight && (
                <div style={{ position:"absolute", top:-14, left:"50%", transform:"translateX(-50%)",
                              padding:"5px 18px", background:"#7B2FE0", borderRadius:100,
                              fontFamily:"Inter", fontSize:10, fontWeight:800,
                              letterSpacing:"0.08em", textTransform:"uppercase", color:"#fff", whiteSpace:"nowrap" }}>
                  Mais Escolhido
                </div>
              )}
              <div style={{ fontFamily:"Inter", fontSize:14, fontWeight:600,
                            color: plan.highlight ? "rgba(155,93,229,0.9)" : "#7B2FE0",
                            marginBottom:12 }}>{plan.name}</div>
              <div style={{ fontFamily:"Inter", fontSize:"clamp(2rem,4vw,2.8rem)", fontWeight:900,
                            letterSpacing:"-0.04em", color: plan.highlight ? "#fff" : "#111",
                            lineHeight:1, marginBottom:4 }}>
                {plan.price}
                <span style={{ fontSize:14, fontWeight:400, color: plan.highlight ? "rgba(255,255,255,0.4)" : "#888", marginLeft:4 }}>{plan.period}</span>
              </div>
              <div style={{ height:1, background: plan.highlight ? "rgba(255,255,255,0.1)" : "#e5e7eb", margin:"20px 0" }}/>
              {plan.items.map((item,j) => (
                <div key={j} style={{ display:"flex", alignItems:"flex-start", gap:10,
                                      fontFamily:"Inter", fontSize:13,
                                      color: plan.highlight ? "rgba(255,255,255,0.65)" : "#555",
                                      marginBottom:10, lineHeight:1.5 }}>
                  <span style={{ color:"#7B2FE0", fontWeight:700, flexShrink:0, marginTop:1 }}>✓</span>
                  {item}
                </div>
              ))}
              <div style={{ marginTop:"auto", paddingTop:24 }}>
                <button onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior:"smooth" })}
                  style={{ fontFamily:"Inter", fontSize:13, fontWeight:700, width:"100%",
                           padding:"12px 0", borderRadius:100, cursor:"pointer", transition:"all .25s",
                           background: plan.highlight ? "#7B2FE0" : "#111",
                           color:"#fff", border:"none",
                           boxShadow: plan.highlight ? "0 4px 20px rgba(123,47,224,0.5)" : "none" }}
                  onMouseOver={e => { (e.currentTarget as HTMLElement).style.transform="translateY(-2px)"; }}
                  onMouseOut={e => { (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}>
                  Solicitar proposta
                </button>
                <p style={{ fontFamily:"Inter", fontSize:11, color: plan.highlight ? "rgba(255,255,255,0.3)" : "#aaa",
                             textAlign:"center", marginTop:12 }}>
                  🔒 Proposta sem compromisso
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
