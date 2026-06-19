import { useEffect, useRef, useState } from "react";
import brandImg from "../../imports/image-1.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle, FlaskConical, Atom, Globe } from "lucide-react";

const TECH_POINTS = [
  "Phân tử Nano SiO₂ kích thước < 20nm lấp đầy mọi vi lỗ hổng trên bề mặt",
  "Công nghệ liên kết đa chiều (Cross-linking) tạo màng polymer siêu bền",
  "Hệ thống ion bạc hoạt tính kháng khuẩn 99.9% không phai theo thời gian",
  "Bột phản xạ nhiệt TiO₂ cao cấp phản xạ đến 85% tia bức xạ mặt trời",
  "Được kiểm nghiệm độc lập tại QUATEST 3, SGS Việt Nam và JIS Nhật Bản",
];

const MILESTONES = [
  { year: "2012", title: "Thành lập", desc: "FUJINANO được thành lập tại Cần Thơ" },
  { year: "2015", title: "JapanX", desc: "Hợp tác chiến lược với JapanX Technology" },
  { year: "2018", title: "ISO 9001", desc: "Đạt chứng nhận quản lý chất lượng quốc tế" },
  { year: "2022", title: "500+ Công Trình", desc: "Bảo vệ hơn 500 công trình trên toàn quốc" },
];

export function TechnologySection() {
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
      id="about"
      style={{
        background: "linear-gradient(180deg, #000d1e 0%, #001235 60%, #000d1e 100%)",
        padding: "100px 0 120px",
        position: "relative",
        overflow: "hidden",
      }}
      ref={ref}
    >
      {/* Hex pattern */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }}>
        <defs>
          <pattern id="hex-tech" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
            <polygon points="30,2 56,16 56,44 30,58 4,44 4,16" fill="none" stroke="#0055cc" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-tech)" />
      </svg>

      {/* Blue glow */}
      <div
        style={{
          position: "absolute",
          right: "-200px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,85,204,0.15), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 40px" }}>
        {/* Section label */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "72px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
            <div style={{ width: "36px", height: "1.5px", background: "#e60012" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 700, color: "#e60012", letterSpacing: "3px", textTransform: "uppercase" }}>
              Về Chúng Tôi
            </span>
            <div style={{ width: "36px", height: "1.5px", background: "#e60012" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', 'Be Vietnam Pro', sans-serif",
              fontSize: "52px",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.5px",
              lineHeight: 1.3,
            }}
          >
            Công Nghệ <span style={{ color: "#0055cc" }}>Nano</span> Từ Nhật Bản
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Left: Brand image */}
          <div
            style={{
              position: "relative",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            {/* Decorative frame */}
            <div
              style={{
                position: "absolute",
                top: "-16px",
                left: "-16px",
                right: "16px",
                bottom: "16px",
                border: "1.5px solid rgba(0,85,204,0.3)",
                borderRadius: "16px",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,85,204,0.2)",
              }}
            >
              <ImageWithFallback
                src={brandImg}
                alt="FUJINANO - Nano Paint & Waterproof Japan Technology"
                style={{ width: "100%", display: "block", objectFit: "cover" }}
              />
            </div>

            {/* Icon badges */}
            {[
              { icon: FlaskConical, label: "Lab Tested", x: "-24px", y: "30px", color: "#0055cc" },
              { icon: Atom, label: "Nano Tech", x: "-24px", y: "calc(100% - 80px)", color: "#e60012" },
            ].map(({ icon: Icon, label, x, y, color }) => (
              <div
                key={label}
                style={{
                  position: "absolute",
                  left: x,
                  top: y,
                  zIndex: 5,
                  background: "rgba(0,14,40,0.9)",
                  backdropFilter: "blur(12px)",
                  border: `1px solid ${color}55`,
                  borderRadius: "10px",
                  padding: "10px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Icon size={16} color={color} />
                <span style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "13px", fontWeight: 700, color: "#fff", letterSpacing: "0.5px" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Content */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.7s ease 0.3s",
            }}
          >
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "16px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.9,
                marginBottom: "32px",
                fontWeight: 300,
              }}
            >
              <strong style={{ color: "#fff", fontWeight: 600 }}>FUJINANO</strong> là thương hiệu sơn và chống thấm cao cấp ứng dụng công nghệ Nano tiên tiến từ Nhật Bản. Hệ thống phân tử Nano SiO₂ siêu mịn tạo lớp bảo vệ vượt trội, mang lại giải pháp toàn diện cho mọi công trình dân dụng và công nghiệp.
            </p>

            {/* Tech points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
              {TECH_POINTS.map((point, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(16px)",
                    transition: `all 0.5s ease ${0.4 + i * 0.08}s`,
                  }}
                >
                  <CheckCircle size={18} color="#0055cc" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      color: "#475569",
                      lineHeight: 1.6,
                      fontWeight: 300,
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href="#products"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#fff",
                  padding: "13px 28px",
                  background: "linear-gradient(135deg, #0055cc, #003a99)",
                  borderRadius: "6px",
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(0,85,204,0.35)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 14px 32px rgba(0,85,204,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(0,85,204,0.35)";
                }}
              >
                <Globe size={15} />
                Xem Sản Phẩm
              </a>
              <a
                href="tel:0947707616"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#fff",
                  padding: "13px 28px",
                  background: "linear-gradient(135deg, #e60012, #b5000e)",
                  borderRadius: "6px",
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(230,0,18,0.35)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 14px 32px rgba(230,0,18,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(230,0,18,0.35)";
                }}
              >
                Liên Hệ Ngay
              </a>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div
          style={{
            marginTop: "80px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            borderTop: "1px solid rgba(0,85,204,0.2)",
            paddingTop: "48px",
          }}
        >
          {MILESTONES.map((m, i) => (
            <div
              key={m.year}
              style={{
                padding: "0 32px",
                borderRight: i < MILESTONES.length - 1 ? "1px solid rgba(0,85,204,0.15)" : "none",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${0.6 + i * 0.1}s`,
              }}
            >
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "40px",
                  fontWeight: 800,
                  color: "#0055cc",
                  lineHeight: 1.3,
                  marginBottom: "6px",
                }}
              >
                {m.year}
              </div>
              <div
                style={{
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "6px",
                }}
              >
                {m.title}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.5,
                  fontWeight: 300,
                }}
              >
                {m.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
