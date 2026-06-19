import { useEffect, useRef, useState } from "react";
import { Award, ShieldCheck } from "lucide-react";

const BRANDS = [
  { name: "KCC", origin: "Hàn Quốc", color: "#e60012", glow: "rgba(230,0,18,0.22)" },
  { name: "Jotun", origin: "Na Uy", color: "#e87722", glow: "rgba(232,119,34,0.22)" },
  { name: "Nippon", origin: "Nhật Bản", color: "#e60012", glow: "rgba(230,0,18,0.22)" },
  { name: "International", origin: "Hà Lan", color: "#0055a5", glow: "rgba(0,85,165,0.22)" },
  { name: "Chokwang", origin: "Hàn Quốc", color: "#1a7fff", glow: "rgba(26,127,255,0.22)" },
  { name: "Rainbow", origin: "Đài Loan", color: "#ff7b00", glow: "rgba(255,123,0,0.22)" },
  { name: "Kansai", origin: "Nhật Bản", color: "#0055cc", glow: "rgba(0,85,204,0.22)" },
  { name: "Dulux", origin: "Anh Quốc", color: "#cc0099", glow: "rgba(204,0,153,0.22)" },
];

const STATS = [
  { num: "12+", label: "Năm Kinh Nghiệm", color: "#e60012" },
  { num: "800+", label: "Công Trình Hoàn Thành", color: "#0055cc" },
  { num: "50+", label: "Đối Tác Doanh Nghiệp", color: "#ff8800" },
  { num: "8", label: "Thương Hiệu Ủy Quyền", color: "#00aa55" },
];

function useCountUp(target: number, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let v = 0;
    const step = Math.ceil(target / 45); // faster count
    const t = setInterval(() => {
      v = Math.min(v + step, target);
      setVal(v);
      if (v >= target) clearInterval(t);
    }, 25);
    return () => clearInterval(t);
  }, [target, active]);
  return val;
}

function StatCard3D({ num, label, i, active, color }: { num: string; label: string; i: number; active: boolean; color: string }) {
  const numericVal = parseInt(num.replace(/\D/g, ""), 10);
  const suffix = num.replace(/\d/g, "");
  const count = useCountUp(numericVal, active);
  
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = ((x / rect.width) - 0.5) * 12;
    const yc = ((y / rect.height) - 0.5) * -12;
    setCoords({ x: xc, y: yc });
  };

  return (
    <div
      className="metallic-border"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setCoords({ x: 0, y: 0 }); }}
      style={{
        background: "rgba(2, 11, 29, 0.75)",
        backdropFilter: "blur(10px)",
        borderRadius: "16px",
        padding: "36px 20px",
        textAlign: "center",
        transform: hovered 
          ? `perspective(800px) rotateY(${coords.x}deg) rotateX(${coords.y}deg) scale3d(1.04, 1.04, 1.04)`
          : "perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)",
        transition: hovered ? "none" : "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: active ? 1 : 0,
        transformStyle: "preserve-3d",
        boxShadow: hovered 
          ? `0 20px 45px rgba(0,0,0,0.55), 0 0 25px ${color}33`
          : "0 10px 30px rgba(0, 0, 0, 0.15)",
        cursor: "default",
      }}
    >
      <div
        style={{
          fontFamily: "'Be Vietnam Pro', sans-serif",
          fontSize: "56px",
          fontWeight: 800,
          color: "#fff",
          lineHeight: 1.3,
          marginBottom: "8px",
          transform: "translateZ(25px)",
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {count}
        <span style={{ color: color }}>{suffix}</span>
      </div>
      <div style={{ 
        fontFamily: "'DM Sans', sans-serif", 
        fontSize: "13.5px", 
        color: "rgba(255,255,255,0.55)", 
        fontWeight: 500,
        transform: "translateZ(15px)",
        transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
        {label}
      </div>
    </div>
  );
}

function BrandCard3D({ b, i, active }: { b: typeof BRANDS[0]; i: number; active: boolean }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = ((x / rect.width) - 0.5) * 14;
    const yc = ((y / rect.height) - 0.5) * -14;
    setCoords({ x: xc, y: yc });
  };

  return (
    <div
      className="metallic-border"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setCoords({ x: 0, y: 0 }); }}
      style={{
        background: "rgba(0, 11, 32, 0.7)",
        borderRadius: "14px",
        padding: "28px 20px",
        textAlign: "center",
        boxShadow: hovered 
          ? `0 20px 45px rgba(0,0,0,0.12), 0 0 24px ${b.glow}` 
          : "0 4px 16px rgba(0,0,0,0.04)",
        cursor: "default",
        transform: hovered 
          ? `perspective(800px) rotateY(${coords.x}deg) rotateX(${coords.y}deg) scale3d(1.05, 1.05, 1.05)`
          : "perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)",
        transition: hovered ? "none" : "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: active ? 1 : 0,
        transformStyle: "preserve-3d",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Light Reflection */}
      {hovered && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at ${coords.x * 2 + 50}% ${-coords.y * 2 + 50}%, rgba(0,0,0,0.02) 0%, transparent 60%)`,
          pointerEvents: "none",
        }} />
      )}

      {/* Certified Badge */}
      <div
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.25s",
          transform: "translateZ(10px)",
        }}
      >
        <ShieldCheck size={15} color={b.color} />
      </div>

      {/* Brand Avatar */}
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "14px",
          background: hovered ? `${b.color}22` : `${b.color}0f`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 16px",
          border: `1.5px solid ${b.color}33`,
          transition: "all 0.3s ease",
          transform: "translateZ(20px)",
        }}
      >
        <span
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: "22px",
            fontWeight: 800,
            color: b.color,
          }}
        >
          {b.name.slice(0, 2).toUpperCase()}
        </span>
      </div>

      <div style={{ 
        fontFamily: "'Be Vietnam Pro', sans-serif", 
        fontSize: "22px", 
        fontWeight: 800, 
        color: "#fff", 
        marginBottom: "4px",
        transform: "translateZ(15px)"
      }}>
        {b.name}
      </div>
      
      <div style={{ 
        fontFamily: "'DM Sans', sans-serif", 
        fontSize: "12.5px", 
        color: "rgba(255,255,255,0.55)",
        transform: "translateZ(10px)"
      }}>
        {b.origin}
      </div>
    </div>
  );
}

export function BrandsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="brands" className="pad-section-mobile" style={{ background: "transparent", padding: "100px 0" }} ref={ref}>
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 32px" }}>
        
        {/* 3D Glassmorphic Stats Grid */}
        <div
          className="grid-mobile-2 gap-mobile-sm"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
            marginBottom: "88px",
          }}
        >
          {STATS.map((s, i) => (
            <StatCard3D
              key={s.label}
              num={s.num}
              label={s.label}
              color={s.color}
              i={i}
              active={vis}
            />
          ))}
        </div>

        {/* Brands header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "56px",
            opacity: vis ? 1 : 0,
            transition: "all 0.6s ease 0.2s",
            transform: vis ? "translateY(0)" : "translateY(15px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "12px" }}>
            <Award size={16} color="#e60012" />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700, color: "#e60012", letterSpacing: "2.5px", textTransform: "uppercase" }}>
              Đối Tác Chính Hãng
            </p>
          </div>
          <h2 style={{ 
            fontFamily: "'Be Vietnam Pro', sans-serif", 
            fontSize: "clamp(32px, 3.5vw, 44px)", 
            fontWeight: 800, 
            color: "#fff", 
            letterSpacing: "0.3px" 
          }}>
            ỦY QUYỀN PHÂN PHỐI & THI CÔNG CHÍNH HÃNG
          </h2>
        </div>

        {/* 3D Glow Brand Cards Grid */}
        <div className="grid-mobile-2 gap-mobile-sm" style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", 
          gap: "20px" 
        }}>
          {BRANDS.map((b, i) => (
            <BrandCard3D key={b.name} b={b} i={i} active={vis} />
          ))}
        </div>

        {/* Certification note */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginTop: "48px",
            opacity: vis ? 0.6 : 0,
            transition: "opacity 0.5s ease 0.4s",
          }}
        >
          <ShieldCheck size={15} color="#e60012" />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)" }}>
            Có đầy đủ giấy chứng nhận ủy quyền thi công chính hãng từ các tập đoàn sơn hàng đầu thế giới.
          </span>
        </div>
      </div>
    </section>
  );
}

