"use client";
import { motion } from "framer-motion";

const ageData = [
  { label:"25–34", pct:33.7 }, { label:"35–44", pct:21.6 },
  { label:"45–54", pct:16.5 }, { label:"55–64", pct:11.0 },
  { label:"18–24", pct:8.9  }, { label:"65+",   pct:5.4  },
];

export default function AudienciaNew() {
  return (
    <section id="audiencia" className="section-gray" style={{ padding:"100px 0" }}>
      <div style={{ maxWidth:1152, margin:"0 auto", padding:"0 48px" }}>
        <div className="grid md:grid-cols-2" style={{ gap:72, alignItems:"start" }}>

          <motion.div
            initial={{ opacity:0, y:24 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, margin:"-60px" }}
            transition={{ duration:0.7 }}>
            <span style={{ fontFamily:"Inter", fontSize:11, fontWeight:600, letterSpacing:"0.12em",
                           textTransform:"uppercase", color:"#7B2FE0", display:"block", marginBottom:16 }}>Nosso Público</span>
            <div style={{ fontFamily:"Inter", fontSize:"clamp(4rem,9vw,7rem)", fontWeight:900,
                          letterSpacing:"-0.05em", color:"#111", lineHeight:0.9, marginBottom:12 }}>85%</div>
            <p style={{ fontFamily:"Inter", fontSize:15, color:"#555", maxWidth:280, lineHeight:1.7, marginBottom:32 }}>
              do acesso vem de dispositivos móveis — a SETE TV foi feita para o celular do seu cliente.
            </p>

            <div style={{ marginBottom:32 }}>
              <div style={{ height:6, background:"#e5e7eb", borderRadius:4, overflow:"hidden",
                            display:"flex", marginBottom:10 }}>
                <motion.div
                  initial={{ width:0 }}
                  whileInView={{ width:"61.1%" }}
                  viewport={{ once:true }}
                  transition={{ duration:1.2, delay:0.3, ease:[0.22,1,0.36,1] }}
                  style={{ height:"100%", background:"#111" }}/>
                <motion.div
                  initial={{ width:0 }}
                  whileInView={{ width:"38.9%" }}
                  viewport={{ once:true }}
                  transition={{ duration:1.2, delay:0.3, ease:[0.22,1,0.36,1] }}
                  style={{ height:"100%", background:"#7B2FE0" }}/>
              </div>
              <div style={{ display:"flex", justifyContent:"space-between" }}>
                <span style={{ fontFamily:"Inter", fontSize:12, color:"#666" }}>Feminino <strong style={{ color:"#111" }}>61,1%</strong></span>
                <span style={{ fontFamily:"Inter", fontSize:12, color:"#666" }}>Masculino <strong style={{ color:"#111" }}>38,9%</strong></span>
              </div>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
              {[
                { label:"Mobile",   pct:"85,5%", col:"#111"    },
                { label:"Desktop",  pct:"13,9%", col:"#7B2FE0" },
                { label:"Tablet",   pct:"0,4%",  col:"#888"    },
                { label:"Smart TV", pct:"0,2%",  col:"#bbb"    },
              ].map((d,i) => (
                <motion.div key={i}
                  initial={{ opacity:0, y:12 }}
                  whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }}
                  transition={{ delay:0.4+i*0.08 }}
                  style={{ padding:"16px 14px", background:"#fff",
                           borderRadius:10, border:`1px solid #e5e7eb`, borderLeft:`3px solid ${d.col}`,
                           boxShadow:"0 2px 8px rgba(0,0,0,0.05)" }}>
                  <div style={{ fontFamily:"Inter", fontSize:22, fontWeight:800, letterSpacing:"-0.04em", color:"#111" }}>{d.pct}</div>
                  <div style={{ fontFamily:"Inter", fontSize:10, fontWeight:600, letterSpacing:"0.06em",
                                textTransform:"uppercase", color:"#888", marginTop:4 }}>{d.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity:0, y:24 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, margin:"-60px" }}
            transition={{ duration:0.7, delay:0.2 }}>
            <h3 style={{ fontFamily:"Inter", fontWeight:900, letterSpacing:"-0.04em",
                         fontSize:"clamp(1.8rem,3.5vw,2.8rem)", color:"#111",
                         lineHeight:1.05, marginBottom:40 }}>Faixa etária</h3>
            <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
              {ageData.map((row,i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:14 }}>
                  <span style={{ fontFamily:"Inter", fontSize:12, fontWeight:600, color:"#888",
                                 width:42, textAlign:"right", flexShrink:0 }}>{row.label}</span>
                  <div style={{ flex:1, height:3, background:"#e5e7eb", borderRadius:2, overflow:"hidden" }}>
                    <motion.div
                      initial={{ scaleX:0 }}
                      whileInView={{ scaleX:1 }}
                      viewport={{ once:true }}
                      transition={{ duration:1.2, delay:0.3+i*0.1, ease:[0.22,1,0.36,1] }}
                      style={{ height:"100%", transformOrigin:"left", background:"#111",
                               width:`${(row.pct/35)*100}%` }}/>
                  </div>
                  <span style={{ fontFamily:"Inter", fontSize:14, fontWeight:700,
                                 color:"#111", width:44, flexShrink:0 }}>{row.pct}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
