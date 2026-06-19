import { useEffect, useRef, useState } from "react";
import { Droplets, Thermometer, Shield, Palette, Zap, Award } from "lucide-react";

const FEATURES = [
  {
    icon: Droplets,
    titleVi: "Chống Thấm Vượt Trội",
    titleEn: "Nano Waterproof",
    desc: "Màng Nano phân tử tạo lớp chắn siêu mỏng, ngăn hoàn toàn sự xâm nhập của nước và hơi ẩm trong mọi điều kiện thời tiết.",
    color: "#0055cc",
    delay: 0,
  },
  {
    icon: Thermometer,
    titleVi: "Chống Nóng Hiệu Quả",
    titleEn: "Heat Reflective",
    desc: "Phản xạ đến 85% nhiệt lượng mặt trời, giảm nhiệt độ bề mặt 15–20°C, tiết kiệm điện điều hòa lên đến 30%.",
    color: "#e60012",
    delay: 0.1,
  },
  {
    icon: Shield,
    titleVi: "Kháng Khuẩn Bảo Vệ Sức Khỏe",
    titleEn: "Anti-Bacterial",
    desc: "Ion bạc hoạt tính ức chế 99.9% vi khuẩn và nấm mốc, tạo không gian sống lành mạnh, an toàn cho cả gia đình.",
    color: "#00aa55",
    delay: 0.2,
  },
  {
    icon: Palette,
    titleVi: "Bền Màu Vượt Thời Gian",
    titleEn: "Long-lasting Color",
    desc: "Sắc tố cao cấp kháng UV, giữ nguyên vẻ tươi sáng và rực rỡ hơn 15 năm dù mưa nắng khắc nghiệt nhiệt đới.",
    color: "#ff8800",
    delay: 0.3,
  },
  {
    icon: Zap,
    titleVi: "Công Nghệ Nano Nhật Bản",
    titleEn: "Japan Nano Tech",
    desc: "Được nghiên cứu và phát triển bởi các kỹ sư hàng đầu Nhật Bản với hơn 20 năm kinh nghiệm trong lĩnh vực vật liệu Nano.",
    color: "#8833ff",
    delay: 0.4,
  },
  {
    icon: Award,
    titleVi: "Đạt Chuẩn Quốc Tế",
    titleEn: "International Standard",
    desc: "Chứng nhận ISO 9001, JIS và các tiêu chuẩn quốc tế. Sản phẩm đã được kiểm định độc lập tại các phòng thí nghiệm uy tín.",
    color: "#0055cc",
    delay: 0.5,
  },
];

function FeatureCard({ feat, index }: { feat: typeof FEATURES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const Icon = feat.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#fff" : "#fff",
        border: hovered ? `1px solid ${feat.color}55` : "1px solid rgba(0,18,53,0.08)",
        borderRadius: "14px",
        padding: "36px 28px",
        boxShadow: hovered
          ? `0 20px 50px rgba(0,0,0,0.1), 0 0 0 2px ${feat.color}22`
          : "0 4px 20px rgba(0,18,53,0.06)",
        cursor: "default",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.55s ease ${feat.delay}s, transform 0.55s ease ${feat.delay}s, box-shadow 0.3s ease, border-color 0.3s ease`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: `linear-gradient(90deg, ${feat.color}, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${feat.color}12, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Hex icon */}
      <div style={{ position: "relative", width: "64px", height: "64px", marginBottom: "20px" }}>
        <svg viewBox="0 0 64 64" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <polygon
            points="32,3 59,18 59,46 32,61 5,46 5,18"
            fill={`${feat.color}15`}
            stroke={feat.color}
            strokeWidth="1"
            opacity="0.7"
          />
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon size={24} color={feat.color} />
        </div>
      </div>

      {/* En label */}
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "10px",
          fontWeight: 700,
          color: feat.color,
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "8px",
        }}
      >
        {feat.titleEn}
      </div>

      {/* Vi title */}
      <h3
        style={{
          fontFamily: "'Be Vietnam Pro', sans-serif",
          fontSize: "20px",
          fontWeight: 700,
          color: "#001235",
          lineHeight: 1.25,
          marginBottom: "12px",
        }}
      >
        {feat.titleVi}
      </h3>

      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "13.5px",
          color: "#4a5568",
          lineHeight: 1.75,
          fontWeight: 300,
        }}
      >
        {feat.desc}
      </p>

      {/* Bottom link */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginTop: "18px",
          color: feat.color,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.5px",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-8px)",
          transition: "all 0.3s ease",
        }}
      >
        Tìm hiểu thêm →
      </div>
    </div>
  );
}

export function CoreFeatures() {
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
      id="technology"
      style={{ background: "#f0f4f8", padding: "100px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Background decorative */}
      <svg
        style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", opacity: 0.03, pointerEvents: "none" }}
        viewBox="0 0 600 800"
      >
        <defs>
          <pattern id="hex-feat" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
            <polygon points="30,2 56,16 56,44 30,58 4,44 4,16" fill="none" stroke="#001235" strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-feat)" />
      </svg>

      <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 40px" }} ref={ref}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "64px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.6s ease",
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "40px", height: "1.5px", background: "#e60012" }} />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                color: "#e60012",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              日本の技術 · Công Nghệ Nhật Bản
            </span>
            <div style={{ width: "40px", height: "1.5px", background: "#e60012" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', 'Be Vietnam Pro', sans-serif",
              fontSize: "52px",
              fontWeight: 800,
              color: "#001235",
              letterSpacing: "-0.5px",
              lineHeight: 1.3,
              marginBottom: "16px",
            }}
          >
            Ưu Điểm <span style={{ color: "#0055cc" }}>Công Nghệ Nano</span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              color: "#4a5568",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            Mỗi sản phẩm FUJINANO được nghiên cứu chuyên sâu tại phòng thí nghiệm Nano Nhật Bản, mang lại hiệu suất bảo vệ vượt trội.
          </p>
        </div>

        {/* 3x2 grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {FEATURES.map((feat, i) => (
            <FeatureCard key={feat.titleEn} feat={feat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
