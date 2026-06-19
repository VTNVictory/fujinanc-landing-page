import { useState, useRef, useEffect } from "react";
import { Maximize2, X, Award, ShieldAlert, CheckCircle } from "lucide-react";

// Import images using Vite alias
import jotunAuth from "@/assets/certificates/jotun_auth.png";
import kccAuth from "@/assets/certificates/kcc_auth.png";
import iso9001 from "@/assets/certificates/iso_9001.png";
import fireSafety from "@/assets/certificates/fire_safety.png";

const CERTIFICATES = [
  {
    id: "jotun",
    img: jotunAuth,
    title: "Chứng Nhận Đại Lý Ủy Quyền Jotun",
    issuer: "Công ty TNHH Sơn Jotun Việt Nam",
    year: "2026",
    desc: "Chứng nhận năng lực phân phối chính hãng các sản phẩm sơn công nghiệp, sơn hàng hải và sơn chống cháy của Jotun."
  },
  {
    id: "kcc",
    img: kccAuth,
    title: "Ủy Quyền Phân Phối Sơn KCC Hàn Quốc",
    issuer: "KCC Corporation Vietnam",
    year: "2026",
    desc: "Đại lý phân phối cấp 1 chính thức dòng sơn Epoxy sàn nhà xưởng, sơn kết cấu thép cao cấp KCC Hàn Quốc."
  },
  {
    id: "iso",
    img: iso9001,
    title: "Chứng Nhận Hệ Thống Quản Lý ISO 9001:2015",
    issuer: "Vương Quốc Anh - Tổng Cục Đo Lường",
    year: "2025 - 2028",
    desc: "Chứng nhận quy trình thi công và quản lý chất lượng đạt tiêu chuẩn quốc tế ISO 9001."
  },
  {
    id: "fireproof",
    img: fireSafety,
    title: "Chứng Nhận Năng Lực Thi Công PCCC",
    issuer: "Cục Cảnh Sát PCCC & CNCH",
    year: "2026",
    desc: "Chứng nhận đủ điều kiện thi công sơn chống cháy bảo vệ kết cấu thép công trình theo quy chuẩn xây dựng Việt Nam."
  }
];

function TiltCard({
  img,
  title,
  issuer,
  year,
  onClick
}: {
  img: string;
  title: string;
  issuer: string;
  year: string;
  onClick: () => void;
}) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates from -15 to 15 degrees
    const xc = ((x / rect.width) - 0.5) * 16;
    const yc = ((y / rect.height) - 0.5) * -16;
    
    setCoords({ x: xc, y: yc });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        position: "relative",
        background: "rgba(0, 11, 32, 0.7)",
        borderRadius: "16px",
        padding: "16px",
        cursor: "pointer",
        overflow: "hidden",
        transform: isHovered 
          ? `perspective(1000px) rotateY(${coords.x}deg) rotateX(${coords.y}deg) scale3d(1.03, 1.03, 1.03)`
          : "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)",
        transition: isHovered ? "none" : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        transformStyle: "preserve-3d",
        boxShadow: isHovered 
          ? "0 30px 60px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 85, 204, 0.2)"
          : "0 10px 30px rgba(0, 0, 0, 0.15)",
      }}
      className="tilt-card-3d metallic-border"
    >
      {/* Light reflecting overlay effect */}
      {isHovered && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at ${coords.x * 2.5 + 50}% ${-coords.y * 2.5 + 50}%, rgba(255,255,255,0.06) 0%, transparent 60%)`,
            pointerEvents: "none",
            zIndex: 3
          }}
        />
      )}

      {/* Frame of Certificate */}
      <div 
        style={{ 
          position: "relative", 
          borderRadius: "12px", 
          overflow: "hidden", 
          aspectRatio: "4/5",
          background: "#1e293b",
          boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)",
          transform: "translateZ(20px)", // Push image out in 3D space
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <img 
          src={img} 
          alt={title} 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover",
            display: "block" 
          }} 
        />
        
        {/* Zoom Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(1, 8, 20, 0.7)",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <div style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "#e60012",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 15px rgba(230,0,18,0.4)"
          }}>
            <Maximize2 size={20} />
          </div>
          <span style={{ color: "#fff", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'DM Sans', sans-serif" }}>
            Click Để Phóng To
          </span>
        </div>
      </div>

      {/* Info */}
      <div 
        style={{ 
          marginTop: "16px",
          transform: "translateZ(30px)", // Push text further out for 3D depth
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <h4 style={{ 
          fontFamily: "'Be Vietnam Pro', sans-serif", 
          fontSize: "19px", 
          fontWeight: 700, 
          color: "#fff",
          lineHeight: 1.25,
          marginBottom: "6px"
        }}>
          {title}
        </h4>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}>
          <span>{issuer}</span>
          <span style={{ fontWeight: 600, color: "#e60012" }}>{year}</span>
        </div>
      </div>
    </div>
  );
}

export function CertificatesSection() {
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="certificates" style={{ padding: "100px 0", background: "transparent", position: "relative", overflow: "hidden" }} ref={ref}>
      {/* Decorative Blur BG */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "rgba(230, 0, 18, 0.05)",
        filter: "blur(120px)",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none"
      }} />

      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ 
          textAlign: "center", 
          maxWidth: "700px", 
          margin: "0 auto 64px",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s ease",
        }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(230,0,18,0.12)", padding: "6px 16px", borderRadius: "50px", marginBottom: "16px" }}>
            <Award size={14} color="#ff4455" />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700, color: "#ff4455", letterSpacing: "2px", textTransform: "uppercase" }}>
              Năng Lực Pháp Lý & Uy Tín
            </span>
          </div>
          
          <h2 style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: "clamp(36px, 4vw, 48px)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.3,
            marginBottom: "16px"
          }}>
            HỒ SƠ PHÁP LÝ & GIẤY ỦY QUYỀN CHÍNH HÃNG
          </h2>
          
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15.5px",
            color: "#64748b",
            lineHeight: 1.7,
            fontWeight: 300
          }}>
            Chúng tôi cam kết chất lượng chuẩn mực với đầy đủ giấy chứng nhận năng lực thi công chuyên nghiệp và giấy ủy quyền đại lý chính hãng từ các tập đoàn sơn hàng đầu thế giới.
          </p>
        </div>

        {/* Certificates Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
          className="certificates-grid"
        >
          {CERTIFICATES.map((cert, index) => (
            <div
              key={cert.id}
              style={{
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0) perspective(1000px) rotateX(0deg)" : "translateY(60px) perspective(1000px) rotateX(20deg)",
                transformOrigin: "top center",
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + index * 0.15}s`,
              }}
            >
              <TiltCard
                key={cert.id}
                img={cert.img}
                title={cert.title}
                issuer={cert.issuer}
                year={cert.year}
                onClick={() => {
                  setActiveImg(cert.img);
                  setActiveTitle(cert.title);
                }}
              />
            </div>
          ))}
        </div>

        {/* Brand Badges Bar */}
        <div style={{
          marginTop: "60px",
          padding: "24px",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "16px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12.5px", fontWeight: 600, color: "rgba(255,255,255,0.45)", letterSpacing: "1px", textTransform: "uppercase" }}>
            Hãng Sơn Đối Tác Chiến Lược:
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", justifyContent: "center" }}>
            {["JOTUN PAINTS", "KCC CORPORATION", "CHOKWANG PAINTS", "SIKA CHEMICALS"].map((b) => (
              <span key={b} style={{
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "16px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "2.5px",
                padding: "4px 12px",
                border: "1px dashed rgba(255,255,255,0.1)",
                borderRadius: "6px"
              }}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImg && (
        <div
          onClick={() => setActiveImg(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            background: "rgba(3, 7, 18, 0.95)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            animation: "fadeModalIn 0.3s ease",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveImg(null)}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
              zIndex: 10001,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#e60012";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#e60012";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.2)";
            }}
          >
            <X size={20} />
          </button>

          {/* Image Wrapper */}
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{ 
              position: "relative", 
              maxWidth: "min(600px, 95vw)", 
              maxHeight: "85vh", 
              borderRadius: "16px",
              overflow: "hidden",
              border: "2px solid rgba(255,255,255,0.15)",
              boxShadow: "0 25px 60px -15px rgba(0,0,0,0.8)",
              animation: "zoomModalIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <img 
              src={activeImg} 
              alt={activeTitle} 
              style={{ 
                width: "100%", 
                height: "auto", 
                maxHeight: "85vh", 
                display: "block",
                objectFit: "contain"
              }} 
            />
            {/* Title Bar */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "16px 20px",
              background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))",
              color: "#fff",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14.5px",
              fontWeight: 500,
              textAlign: "center"
            }}>
              {activeTitle}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeModalIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes zoomModalIn {
          from { transform: scale(0.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .tilt-card-3d:hover .card-img {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
}
