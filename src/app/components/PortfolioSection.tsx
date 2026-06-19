import { useEffect, useRef, useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    img: "https://images.unsplash.com/photo-1772209415876-76ea6cbc2f0c?w=800&h=560&fit=crop&auto=format",
    client: "Vietjet Air",
    title: "Sơn Epoxy Nhà Ga Bảo Dưỡng",
    location: "Nội Bài, Hà Nội",
    area: "18.000 m²",
    service: "Epoxy Tự San Phẳng",
    serviceColor: "#0055cc",
    span: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1771531072574-af6ed6b954c0?w=560&h=560&fit=crop&auto=format",
    client: "Chin-su Food",
    title: "Sơn Sàn Nhà Máy Thực Phẩm",
    location: "Bình Dương",
    area: "12.000 m²",
    service: "Epoxy Chống Vi Khuẩn",
    serviceColor: "#00aa55",
    span: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1772305595483-6b058aff40f9?w=560&h=560&fit=crop&auto=format",
    client: "Isuzu Việt Nam",
    title: "Sàn Xưởng Lắp Ráp Ô Tô",
    location: "Long Biên, Hà Nội",
    area: "8.500 m²",
    service: "Epoxy Chống Trượt",
    serviceColor: "#0055cc",
    span: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=560&h=420&fit=crop&auto=format",
    client: "Cantavil Hoàn Cầu",
    title: "Sơn Ngoại Thất Chung Cư Cao Cấp",
    location: "TP. Hồ Chí Minh",
    area: "22.000 m²",
    service: "Sơn Ngoại Thất",
    serviceColor: "#e60012",
    span: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1669674309145-52b17350b769?w=560&h=420&fit=crop&auto=format",
    client: "KCN Trà Nóc",
    title: "Kẻ Vạch Toàn Bộ Khu Công Nghiệp",
    location: "Cần Thơ",
    area: "35.000 m²",
    service: "Sơn Giao Thông",
    serviceColor: "#ff8800",
    span: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1780221841229-ec9922aee812?w=800&h=420&fit=crop&auto=format",
    client: "Trung Tâm TDTT Quận 7",
    title: "Sân Thể Thao Đa Năng",
    location: "TP. Hồ Chí Minh",
    area: "3.200 m²",
    service: "Sơn Sân Thể Thao",
    serviceColor: "#00aa55",
    span: 2,
  },
];

function ProjectCard({ p, i }: { p: typeof PROJECTS[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const [hov, setHov] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates from -10 to 10 degrees
    const xc = ((x / rect.width) - 0.5) * 12;
    const yc = ((y / rect.height) - 0.5) * -12;
    
    setCoords({ x: xc, y: yc });
  };

  const handleMouseLeave = () => {
    setHov(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      className="metallic-border"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        gridColumn: p.span > 1 ? `span ${p.span}` : undefined,
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        height: "320px",
        cursor: "pointer",
        boxShadow: hov 
          ? "0 28px 60px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.05)" 
          : "0 6px 20px rgba(0,0,0,0.06)",
        transform: hov
          ? `perspective(1000px) rotateY(${coords.x}deg) rotateX(${coords.y}deg) scale3d(1.025, 1.025, 1.025)`
          : vis ? "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)" : "translateY(32px) scale(0.97)",
        opacity: vis ? 1 : 0,
        transition: hov ? "none" : "all 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Light Reflection */}
      {hov && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at ${coords.x * 2.5 + 50}% ${-coords.y * 2.5 + 50}%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
          pointerEvents: "none",
          zIndex: 3
        }} />
      )}

      <img
        src={p.img}
        alt={p.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: hov ? "scale(1.08)" : "scale(1)",
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hov
            ? "linear-gradient(180deg, rgba(8,14,26,0.15) 0%, rgba(8,14,26,0.92) 100%)"
            : "linear-gradient(180deg, transparent 35%, rgba(8,14,26,0.8) 100%)",
          transition: "background 0.35s",
          zIndex: 1
        }}
      />

      {/* Service tag */}
      <div
        style={{
          position: "absolute",
          top: "18px",
          left: "18px",
          background: p.serviceColor,
          color: "#fff",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.5px",
          padding: "5px 12px",
          borderRadius: "4px",
          textTransform: "uppercase",
          transform: "translateZ(20px)",
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 2
        }}
      >
        {p.service}
      </div>

      {/* Bottom info */}
      <div style={{ 
        position: "absolute", 
        bottom: 0, 
        left: 0, 
        right: 0, 
        padding: "24px",
        zIndex: 2,
        transform: "translateZ(30px)",
        transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            color: "#64748b",
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          {p.client}
        </div>
        <h3
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: "23px",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.3,
            marginBottom: "8px",
          }}
        >
          {p.title}
        </h3>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <MapPin size={12} color="rgba(255,255,255,0.5)" />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>
              {p.location} · {p.area}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              color: "#ff4455",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12.5px",
              fontWeight: 600,
              opacity: hov ? 1 : 0,
              transform: hov ? "translateX(0)" : "translateX(-8px)",
              transition: "all 0.3s ease",
            }}
          >
            Xem Dự Án <ArrowRight size={13} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  const [active, setActive] = useState<typeof PROJECTS[0] | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section id="portfolio" style={{ padding: "96px 0", background: "transparent" }} ref={ref}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 32px" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "48px",
              flexWrap: "wrap",
              gap: "20px",
              opacity: vis ? 1 : 0,
              transform: vis ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.5s ease",
            }}
          >
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 700, color: "#e60012", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "10px" }}>
                Dự Án Nổi Bật
              </p>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "48px", fontWeight: 800, color: "#fff", letterSpacing: "-0.3px", lineHeight: 1.3 }}>
                Công Trình<br /><span style={{ color: "#0055cc" }}>Đã Hoàn Thành</span>
              </h2>
            </div>
            <a
              href="#portfolio"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#0055cc",
                textDecoration: "none",
                borderBottom: "1.5px solid #0055cc44",
                paddingBottom: "2px",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "#0055cc")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "#0055cc44")}
            >
              Xem Tất Cả <ArrowRight size={14} />
            </a>
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {PROJECTS.map((p, i) => (
              <div key={p.title} onClick={() => setActive(p)}>
                <ProjectCard p={p} i={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {active && (
        <div style={{ position: "fixed", inset: 0, zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => setActive(null)}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(5px)" }} />
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(900px, 90vw)",
              maxHeight: "90vh",
              background: "#020B1D",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.1)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              animation: "modalPop 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div style={{ position: "relative", height: "350px", flexShrink: 0 }}>
              <img src={active.img} alt={active.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <button
                onClick={() => setActive(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(0,11,32,0.9)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                }}
              >
                <ArrowRight size={18} style={{ transform: "rotate(135deg)" }} />
              </button>
            </div>
            <div style={{ padding: "40px", overflowY: "auto" }}>
              <div style={{ display: "inline-block", background: active.serviceColor, color: "#fff", padding: "4px 12px", borderRadius: "4px", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", marginBottom: "16px", fontFamily: "'DM Sans', sans-serif" }}>
                {active.service}
              </div>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "32px", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
                {active.title}
              </h2>
              <div style={{ display: "flex", gap: "24px", marginBottom: "32px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "24px" }}>
                <div>
                  <div style={{ fontSize: "12px", color: "#94a3b8", marginBottom: "4px", fontFamily: "'DM Sans', sans-serif" }}>Khách hàng</div>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "#f8fafc", fontFamily: "'DM Sans', sans-serif" }}>{active.client}</div>
                </div>
                <div>
                  <div style={{ fontSize: "12px", color: "#94a3b8", marginBottom: "4px", fontFamily: "'DM Sans', sans-serif" }}>Vị trí</div>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "#f8fafc", fontFamily: "'DM Sans', sans-serif" }}>{active.location}</div>
                </div>
                <div>
                  <div style={{ fontSize: "12px", color: "#94a3b8", marginBottom: "4px", fontFamily: "'DM Sans', sans-serif" }}>Quy mô</div>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "#f8fafc", fontFamily: "'DM Sans', sans-serif" }}>{active.area}</div>
                </div>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, fontWeight: 300, maxWidth: "500px" }}>
                Dự án {active.title} là một trong những công trình tiêu biểu của chúng tôi trong năm vừa qua. Với yêu cầu khắt khe về chất lượng và tiến độ từ chủ đầu tư {active.client}, đội ngũ kỹ thuật đã áp dụng quy trình thi công {active.service} tiên tiến nhất, đảm bảo bề mặt hoàn thiện đạt chuẩn quốc tế, đáp ứng mọi bài test về độ bền, khả năng chịu tải và tính thẩm mỹ.
              </p>
              <a href="#quote" onClick={() => setActive(null)} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", background: "#e60012", color: "#fff", borderRadius: "8px", textDecoration: "none", fontWeight: 600, fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}>
                Liên hệ thi công tương tự <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes modalPop {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
}
