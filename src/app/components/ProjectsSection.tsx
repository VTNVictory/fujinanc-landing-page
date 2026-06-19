import { useEffect, useRef, useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=440&fit=crop&auto=format",
    title: "Khu Đô Thị Cao Cấp Cần Thơ",
    location: "TP. Cần Thơ",
    tag: "Chống Thấm",
    tagColor: "#0055cc",
    area: "12,000 m²",
    year: "2023",
    span: 1,
  },
  {
    image: "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?w=600&h=440&fit=crop&auto=format",
    title: "Chung Cư The Central",
    location: "Quận Ninh Kiều",
    tag: "Ngoại Thất",
    tagColor: "#e60012",
    area: "8,500 m²",
    year: "2023",
    span: 1,
  },
  {
    image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=1200&h=440&fit=crop&auto=format",
    title: "Nhà Máy Sản Xuất Thực Phẩm FMCG",
    location: "Khu CN Trà Nóc",
    tag: "Kháng Khuẩn",
    tagColor: "#00aa55",
    area: "25,000 m²",
    year: "2022",
    span: 2,
  },
  {
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&h=440&fit=crop&auto=format",
    title: "Biệt Thự Nghỉ Dưỡng Phú Quốc",
    location: "Phú Quốc",
    tag: "Cách Nhiệt",
    tagColor: "#ff8800",
    area: "3,200 m²",
    year: "2023",
    span: 2,
  },
  {
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&h=440&fit=crop&auto=format&crop=left",
    title: "Trường Học Tiểu Học An Bình",
    location: "Bình Thủy, Cần Thơ",
    tag: "Nội Thất",
    tagColor: "#8833ff",
    area: "4,800 m²",
    year: "2022",
    span: 1,
  },
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        gridColumn: project.span > 1 ? `span ${project.span}` : undefined,
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
        height: "260px",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.98)",
        transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s`,
        boxShadow: hovered ? "0 24px 60px rgba(0,0,0,0.5)" : "0 8px 24px rgba(0,0,0,0.25)",
        transitionProperty: "opacity, transform, box-shadow",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "transform 0.6s ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? "linear-gradient(180deg, rgba(0,8,22,0.2) 0%, rgba(0,8,22,0.9) 100%)"
            : "linear-gradient(180deg, transparent 30%, rgba(0,8,22,0.85) 100%)",
          transition: "background 0.4s ease",
        }}
      />

      {/* Tag */}
      <div
        style={{
          position: "absolute",
          top: "16px",
          left: "16px",
          background: project.tagColor,
          color: "#fff",
          fontFamily: "'Be Vietnam Pro', sans-serif",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "1px",
          padding: "4px 12px",
          borderRadius: "3px",
          textTransform: "uppercase",
          boxShadow: `0 4px 12px ${project.tagColor}55`,
        }}
      >
        {project.tag}
      </div>

      {/* Bottom content */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px" }}>
        <h3
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: project.span > 1 ? "20px" : "17px",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "6px",
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </h3>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <MapPin size={12} color="rgba(255,255,255,0.5)" />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>
              {project.location}
            </span>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>
              {project.area}
            </span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>
              {project.year}
            </span>
          </div>
        </div>

        {/* Hover reveal: view link */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginTop: "10px",
            color: project.tagColor,
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.5px",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
            transition: "all 0.3s ease",
          }}
        >
          Xem Dự Án <ArrowRight size={13} />
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="pad-section-mobile"
      style={{ background: "#f0f4f8", padding: "100px 0", position: "relative" }}
      ref={ref}
    >
      <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div
          className="flex-col-mobile align-start-mobile gap-mobile-sm"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "48px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "36px", height: "2px", background: "#e60012" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 700, color: "#e60012", letterSpacing: "3px", textTransform: "uppercase" }}>
                Dự Án Tiêu Biểu
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Montserrat', 'Be Vietnam Pro', sans-serif",
                fontSize: "52px",
                fontWeight: 800,
                color: "#001235",
                letterSpacing: "-0.5px",
                lineHeight: 1.3,
              }}
            >
              Công Trình <span style={{ color: "#0055cc" }}>Nổi Bật</span>
            </h2>
          </div>
          <a
            href="#projects"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "#0055cc",
              textDecoration: "none",
              letterSpacing: "0.5px",
              borderBottom: "1.5px solid rgba(0,85,204,0.3)",
              paddingBottom: "2px",
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "#0055cc")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,85,204,0.3)")}
          >
            Xem Tất Cả <ArrowRight size={14} />
          </a>
        </div>

        {/* Masonry-style grid */}
        <div
          className="grid-mobile-1 gap-mobile-sm"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
