"use client";
import { motion } from "framer-motion";

const depos = [
  { init:"JA", name:"James Almeida",  role:"Editor-Chefe de Redação",    text:"A SETE TV tem uma equipe comprometida com a verdade e com o povo do Piauí. É um canal de referência no estado." },
  { init:"LM", name:"Lorena Morais",  role:"Diretora de Comunicação",    text:"Trabalhar na SETE TV é poder transformar informação em impacto real. Nossa cobertura chega onde ninguém chega." },
  { init:"IL", name:"Ilanna Lima",    role:"Jornalista Repórter",         text:"O portal tem alcance mundial e as transmissões ao vivo conectam o cidadão piauiense com os fatos em tempo real." },
  { init:"BL", name:"Bruna Leão",     role:"Jornalista Repórter",         text:"É gratificante ver nosso trabalho chegando às famílias do interior. Jornalismo sério faz diferença na vida das pessoas." },
  { init:"RS", name:"Rafael Sérgio",  role:"Produtor Audiovisual",        text:"A qualidade visual da SETE TV evoluiu muito. Nossos vídeos têm padrão técnico igual ao das grandes emissoras nacionais." },
  { init:"AB", name:"Amadeu Bruno",   role:"Direção Criativa",            text:"A identidade da SETE TV foi pensada para transmitir credibilidade e modernidade. Design e jornalismo lado a lado." },
];
const all = [...depos,...depos];

function Card({ d }: { d: typeof depos[0] }) {
  return (
    <div style={{ flexShrink:0, width:300,
                  background:"#fff", border:"1px solid #e5e7eb",
                  borderRadius:16, padding:24,
                  boxShadow:"0 2px 12px rgba(0,0,0,0.06)" }}>
      <div style={{ color:"#7B2FE0", fontSize:13, marginBottom:10 }}>★★★★★</div>
      <p style={{ fontFamily:"Inter", fontSize:13, color:"#555", lineHeight:1.65, marginBottom:16 }}>"{d.text}"</p>
      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
        <div style={{ width:36, height:36, borderRadius:"50%", background:"rgba(123,47,224,0.12)",
                      border:"1px solid rgba(123,47,224,0.2)", display:"flex", alignItems:"center",
                      justifyContent:"center", fontSize:10, fontWeight:700, color:"#7B2FE0", flexShrink:0 }}>
          {d.init}
        </div>
        <div>
          <div style={{ fontFamily:"Inter", fontSize:13, fontWeight:600, color:"#111" }}>{d.name}</div>
          <div style={{ fontFamily:"Inter", fontSize:11, color:"#888" }}>{d.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function DepoimentosNew() {
  return (
    <section className="section-white" style={{ padding:"80px 0 64px", overflow:"hidden" }}>
      <div style={{ maxWidth:1152, margin:"0 auto", padding:"0 48px 40px" }}>
        <motion.div
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}>
          <span style={{ fontFamily:"Inter", fontSize:11, fontWeight:600, letterSpacing:"0.12em",
                         textTransform:"uppercase", color:"#7B2FE0", display:"block", marginBottom:8 }}>
            Nossa Equipe Fala
          </span>
          <h2 style={{ fontFamily:"Inter", fontWeight:900, letterSpacing:"-0.04em",
                       fontSize:"clamp(1.8rem,4vw,3rem)", color:"#111", lineHeight:1.05 }}>
            Indicado por profissionais
          </h2>
        </motion.div>
      </div>

      <div style={{ position:"relative", overflow:"hidden", marginBottom:16 }}>
        <div style={{ position:"absolute", left:0, top:0, bottom:0, width:80, zIndex:1,
                      background:"linear-gradient(to right,#fff,transparent)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", right:0, top:0, bottom:0, width:80, zIndex:1,
                      background:"linear-gradient(to left,#fff,transparent)", pointerEvents:"none" }}/>
        <div className="marquee-left"
          style={{ display:"flex", gap:16, padding:"8px 0", width:"max-content" }}
          onMouseOver={e => (e.currentTarget.style.animationPlayState="paused")}
          onMouseOut={e => (e.currentTarget.style.animationPlayState="running")}>
          {all.map((d,i) => <Card key={i} d={d} />)}
        </div>
      </div>

      <div style={{ position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", left:0, top:0, bottom:0, width:80, zIndex:1,
                      background:"linear-gradient(to right,#fff,transparent)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", right:0, top:0, bottom:0, width:80, zIndex:1,
                      background:"linear-gradient(to left,#fff,transparent)", pointerEvents:"none" }}/>
        <div className="marquee-right"
          style={{ display:"flex", gap:16, padding:"8px 0", width:"max-content" }}
          onMouseOver={e => (e.currentTarget.style.animationPlayState="paused")}
          onMouseOut={e => (e.currentTarget.style.animationPlayState="running")}>
          {[...all].reverse().map((d,i) => <Card key={i} d={d} />)}
        </div>
      </div>
    </section>
  );
}
