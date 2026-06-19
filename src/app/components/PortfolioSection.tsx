import { useEffect, useRef, useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { PORTFOLIO_PROJECTS } from "../data/portfolioProjects";

function ProjectCard({ p, i }: { p: typeof PORTFOLIO_PROJECTS[0]; i: number }) {
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

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section id="portfolio" className="pad-section-mobile" style={{ padding: "96px 0", background: "transparent" }} ref={ref}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 32px" }}>
          {/* Header */}
          <div
            className="flex-col-mobile align-start-mobile gap-mobile-sm"
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
          <div className="grid-mobile-1 gap-mobile-sm" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {PORTFOLIO_PROJECTS.map((p, i) => (
              <Link to={`/du-an/${p.slug}`} key={p.title} style={{ textDecoration: "none", color: "inherit", display: "block", outline: "none" }}>
                <ProjectCard p={p} i={i} />
              </Link>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
