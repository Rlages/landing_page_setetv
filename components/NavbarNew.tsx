"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label:"Sobre",    href:"#sobre"    },
  { label:"Serviços", href:"#servicos" },
  { label:"Time",     href:"#time"     },
  { label:"Projetos", href:"#projetos" },
  { label:"Preços",   href:"#precos"   },
];

const LOGO = "https://res.cloudinary.com/dnth1inmv/image/upload/f_auto,q_auto/v1779833548/setetvnews_color_branca_H_ggfybe.png";

export default function NavbarNew() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior:"smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y:-64, opacity:0 }} animate={{ y:0, opacity:1 }}
        transition={{ duration:0.6, ease:"easeOut" }}
        style={{
          position:"fixed", top:0, left:0, right:0, zIndex:100,
          transition:"all .35s ease",
          background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
          padding: scrolled ? "12px 0" : "20px 0",
        }}>
        <div style={{ maxWidth:1152, margin:"0 auto", padding:"0 48px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <button onClick={() => go("#hero")} style={{ background:"none", border:"none", cursor:"pointer", padding:0 }}>
            <img src={LOGO} alt="SETE TV News" className="navbar-logo" style={{ height:36, width:"auto", objectFit:"contain", display:"block" }}/>
          </button>

          <div className="hidden md:flex" style={{ gap:32 }}>
            {links.map((l,i) => (
              <motion.button key={i} onClick={() => go(l.href)}
                initial={{ opacity:0, y:-8 }} animate={{ opacity:1, y:0 }}
                transition={{ delay:0.1+i*0.05 }}
                style={{ fontFamily:"Inter", fontSize:13, fontWeight:500,
                         color:"rgba(255,255,255,0.6)", background:"none", border:"none",
                         cursor:"pointer", transition:"color .2s", letterSpacing:"-0.01em" }}
                onMouseOver={e => (e.currentTarget.style.color="#fff")}
                onMouseOut={e => (e.currentTarget.style.color="rgba(255,255,255,0.6)")}>
                {l.label}
              </motion.button>
            ))}
          </div>

          <button onClick={() => go("#contato")} className="hidden md:block"
            style={{ fontFamily:"Inter", fontSize:13, fontWeight:700,
                     color:"#000", background:"#fff", padding:"10px 24px",
                     borderRadius:100, border:"none", cursor:"pointer",
                     transition:"all .2s", letterSpacing:"-0.01em",
                     boxShadow:"0 2px 12px rgba(255,255,255,0.2)" }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.transform="translateY(-1px)"; (e.currentTarget as HTMLElement).style.boxShadow="0 6px 20px rgba(255,255,255,0.3)"; }}
            onMouseOut={e => { (e.currentTarget as HTMLElement).style.transform="translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow="0 2px 12px rgba(255,255,255,0.2)"; }}>
            Fale Conosco
          </button>

          <button onClick={() => setOpen(!open)} className="md:hidden"
            style={{ background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.12)",
                     borderRadius:"50%", width:38, height:38, cursor:"pointer",
                     display:"flex", alignItems:"center", justifyContent:"center", color:"#fff" }}>
            {open ? <X size={16}/> : <Menu size={16}/>}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            style={{ position:"fixed", inset:0, zIndex:99, background:"rgba(10,10,10,0.97)",
                     backdropFilter:"blur(20px)", display:"flex", flexDirection:"column",
                     alignItems:"center", justifyContent:"center", gap:40 }}>
            {links.map((l,i) => (
              <motion.button key={i} onClick={() => go(l.href)}
                initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
                transition={{ delay:i*0.07 }}
                style={{ fontFamily:"Inter", fontSize:36, fontWeight:800,
                         letterSpacing:"-0.04em", color:"#fff",
                         background:"none", border:"none", cursor:"pointer" }}>
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
