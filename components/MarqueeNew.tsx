"use client";

const brands = [
  { name:"SETE TV NEWS",   src:"https://res.cloudinary.com/dnth1inmv/image/upload/f_auto,q_auto/v1779833548/setetvnews_color_branca_H_ggfybe.png",  invert:false },
  { name:"AGROSETE",       src:"https://res.cloudinary.com/dnth1inmv/image/upload/f_auto,q_auto/v1779833541/AGROSETE_LOGO_COLOR_okfgiv.png",         invert:false },
  { name:"SETE ESPORTIVO", src:"https://res.cloudinary.com/dnth1inmv/image/upload/f_auto,q_auto/v1779833556/LOGO_sete_esportivo_xdhrdx.png",         invert:false },
  { name:"SETE TECH",      src:"https://res.cloudinary.com/dnth1inmv/image/upload/f_auto,q_auto/v1779833565/logo_Sete_Tech_branco_rogqsz.png",       invert:false },
];
const all = [...brands,...brands,...brands];

export default function MarqueeNew() {
  return (
    <section className="section-dark" style={{ padding:"48px 0", overflow:"hidden" }}>
      <div style={{ maxWidth:1152, margin:"0 auto", padding:"0 48px 16px" }}>
        <p style={{ fontFamily:"Inter", fontSize:11, fontWeight:600, letterSpacing:"0.12em",
                    textTransform:"uppercase", color:"#999", textAlign:"center" }}>
          Divisões do Grupo SETE
        </p>
      </div>

      <div style={{ position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", left:0, top:0, bottom:0, width:120, zIndex:1,
                      background:"linear-gradient(to right,#0a0a0a,transparent)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", right:0, top:0, bottom:0, width:120, zIndex:1,
                      background:"linear-gradient(to left,#0a0a0a,transparent)", pointerEvents:"none" }}/>

        <div className="marquee-left"
          style={{ display:"flex", alignItems:"center", gap:64, whiteSpace:"nowrap", width:"max-content" }}
          onMouseOver={e => (e.currentTarget.style.animationPlayState="paused")}
          onMouseOut={e => (e.currentTarget.style.animationPlayState="running")}>
          {all.map((b,i) => (
            <div key={i} style={{ flexShrink:0, display:"flex", alignItems:"center", padding:"0 16px" }}>
              <img src={b.src} alt={b.name} draggable={false}
                style={{ height:40, width:"auto", objectFit:"contain", display:"block",
                         opacity:0.55, transition:"opacity .3s",
                         filter: b.invert ? "invert(1)" : "none" }}
                onMouseOver={e => (e.currentTarget.style.opacity="1")}
                onMouseOut={e => (e.currentTarget.style.opacity="0.55")} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
