import { useState, useEffect, useRef } from "react";
import { ArrowRight, X, Check, Phone, ChevronRight } from "lucide-react";

const SERVICES = [
  {
    id: "epoxy",
    title: "Sơn Epoxy",
    short: "Nhà xưởng, kho bãi, nhà máy",
    img: "https://images.unsplash.com/photo-1772209415876-76ea6cbc2f0c?w=800&h=550&fit=crop&auto=format",
    color: "#0055cc",
    tag: "Phổ biến nhất",
    tagBg: "#0055cc",
    subServices: [
      { name: "Epoxy Hệ Lăn", desc: "Sơn Epoxy lăn tiêu chuẩn, phủ trực tiếp lên sàn bê tông, chi phí tối ưu." },
      { name: "Epoxy Tự San Phẳng", desc: "Sơn rót tự phẳng độ dày 2-3mm, bề mặt cực phẳng và bóng, cho môi trường sạch." },
      { name: "Chống Tĩnh Điện", desc: "ESD Epoxy tiêu chuẩn IEC, bảo vệ thiết bị điện tử khỏi tĩnh điện." },
      { name: "Chống Ăn Mòn Axit", desc: "Epoxy chịu hóa chất, axit, kiềm — lý tưởng cho nhà máy hóa chất, xi mạ." },
    ],
    process: ["Khảo sát & đánh giá bề mặt", "Mài & vệ sinh sàn bê tông", "Sơn lót Epoxy primer", "Thi công lớp chính", "Hoàn thiện & nghiệm thu"],
    gallery: [
      "https://images.unsplash.com/photo-1771530789155-b1f03fbf82b5?w=400&h=280&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1771531072574-af6ed6b954c0?w=400&h=280&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1772305595483-6b058aff40f9?w=400&h=280&fit=crop&auto=format",
    ],
    highlights: ["Độ bền 5–10 năm", "Chịu tải trọng nặng", "Kháng hóa chất", "Dễ vệ sinh"],
  },
  {
    id: "warehouse",
    title: "Sơn Nhà Xưởng",
    short: "Mái tôn, tường, sàn bê tông",
    img: "https://images.unsplash.com/photo-1674485190969-4347f72aad0e?w=800&h=550&fit=crop&auto=format",
    color: "#e60012",
    tag: "Bán chạy",
    tagBg: "#e60012",
    subServices: [
      { name: "Mài Sàn Bê Tông", desc: "Mài phẳng & đánh bóng sàn bê tông bằng máy chuyên dụng, tạo bề mặt hoàn hảo." },
      { name: "Sơn Chống Trượt", desc: "Sơn có hạt cát/quartz tạo độ nhám, an toàn lao động theo tiêu chuẩn." },
      { name: "Sơn Chống Thấm", desc: "Hệ sơn chống thấm nước cho tường ngoài, mái, sàn vệ sinh." },
      { name: "Sơn Bảo Vệ Mái Tôn", desc: "Sơn phản nhiệt mái tôn, giảm nhiệt độ 10-15°C, kéo dài tuổi thọ mái." },
    ],
    process: ["Đánh giá hiện trạng công trình", "Làm sạch bề mặt & xử lý hư hỏng", "Thi công lớp lót", "Sơn phủ chính hãng", "Kiểm tra & bàn giao"],
    gallery: [
      "https://images.unsplash.com/photo-1763189880933-8891f803608a?w=400&h=280&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1593785176664-cbc35e1f6b1b?w=400&h=280&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1511822148790-e7b58ba14c72?w=400&h=280&fit=crop&auto=format",
    ],
    highlights: ["Bảo hành 3-5 năm", "Thi công nhanh", "Không gián đoạn sản xuất", "Vật liệu chính hãng"],
  },
  {
    id: "traffic",
    title: "Sơn Giao Thông",
    short: "Kẻ vạch đường, bãi đỗ xe",
    img: "https://images.unsplash.com/photo-1669674309145-52b17350b769?w=800&h=550&fit=crop&auto=format",
    color: "#ff8800",
    tag: "Chuyên biệt",
    tagBg: "#ff8800",
    subServices: [
      { name: "Kẻ Vạch Nhà Xưởng", desc: "Line sơn phân chia khu vực an toàn, lối đi người, lối xe nâng trong nhà máy." },
      { name: "Sơn Kẻ Đường", desc: "Sơn kẻ vạch giao thông mặt đường, bãi đỗ xe, vạch zebra." },
      { name: "Sơn Dẻo Nhiệt", desc: "Thermoplastic chịu nhiệt và mài mòn cao, bền 3-5 năm trong điều kiện thực tế." },
      { name: "Sơn Phản Quang", desc: "Sơn có hạt phản quang glass bead, an toàn giao thông ban đêm." },
    ],
    process: ["Khảo sát mặt bằng & thiết kế layout", "Vệ sinh làm sạch bề mặt", "Định vị & đánh dấu", "Phun/lăn sơn chuyên dụng", "Gắn hạt phản quang & nghiệm thu"],
    gallery: [
      "https://images.unsplash.com/photo-1557520689-69e71457024c?w=400&h=280&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1687585612520-d29d9f0c52ad?w=400&h=280&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1669674309145-52b17350b769?w=400&h=280&fit=crop&auto=format",
    ],
    highlights: ["Đạt tiêu chuẩn TCVN", "Máy phun chuyên dụng", "Bền 3-5 năm", "Phản quang ban đêm"],
  },
  {
    id: "sports",
    title: "Sơn Sân Thể Thao",
    short: "Cầu lông, bóng rổ, tennis",
    img: "https://images.unsplash.com/photo-1780221841229-ec9922aee812?w=800&h=550&fit=crop&auto=format",
    color: "#00aa55",
    tag: "Chất lượng cao",
    tagBg: "#00aa55",
    subServices: [
      { name: "Sân Cầu Lông", desc: "Sơn PU/Acrylic chuyên dụng, độ bám tốt, không trơn trượt, bền màu sắc sân thi đấu." },
      { name: "Sân Bóng Rổ", desc: "Sơn sàn gỗ PU hoặc sàn bê tông Acrylic, đàn hồi tốt, an toàn vận động viên." },
      { name: "Sân Tennis", desc: "Hard court Acrylic ITF chuẩn quốc tế, nhiều màu tùy chọn, bề mặt uniform." },
      { name: "Sân Đa Năng", desc: "Giải pháp kết hợp nhiều môn thể thao trên một mặt sàn, tiết kiệm diện tích." },
    ],
    process: ["Kiểm tra bề mặt nền", "Cải tạo & san phẳng mặt sàn", "Sơn nền 2-3 lớp", "Kẻ vạch theo tiêu chuẩn môn thể thao", "Phủ lớp top coat bảo vệ"],
    gallery: [
      "https://images.unsplash.com/photo-1780221841229-ec9922aee812?w=400&h=280&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=400&h=280&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=280&fit=crop&auto=format",
    ],
    highlights: ["Chuẩn ITF/BWF", "Màu sắc đa dạng", "Không trơn trượt", "Bảo hành 2 năm"],
  },
  {
    id: "special",
    title: "Sơn Chuyên Dụng",
    short: "Chống cháy, hiệu ứng đặc biệt",
    img: "https://images.unsplash.com/photo-1511822148790-e7b58ba14c72?w=800&h=550&fit=crop&auto=format",
    color: "#8833ff",
    tag: "Cao cấp",
    tagBg: "#8833ff",
    subServices: [
      { name: "Sơn Chống Cháy", desc: "Sơn intumescent bảo vệ kết cấu thép, dầm, cột khỏi nhiệt độ cao theo PCCC." },
      { name: "Sơn Hiệu Ứng", desc: "Sơn bóng gương, sơn giả đá, sơn vân gỗ, texture nghệ thuật cho không gian ấn tượng." },
      { name: "Sơn Nước Dân Dụng", desc: "Sơn nội thất cao cấp kháng khuẩn, chịu lau rửa — KCC, Nippon, Jotun." },
      { name: "Sơn Kết Cấu Thép", desc: "Chống gỉ, chống ăn mòn cho kết cấu thép công nghiệp và hạ tầng." },
    ],
    process: ["Tư vấn lựa chọn hệ sơn phù hợp", "Xử lý bề mặt chuyên sâu", "Thi công theo quy trình hãng", "Kiểm tra độ dày lớp sơn", "Bàn giao & cấp chứng chỉ"],
    gallery: [
      "https://images.unsplash.com/photo-1693985120993-e9b203ce7631?w=400&h=280&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?w=400&h=280&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=400&h=280&fit=crop&auto=format",
    ],
    highlights: ["Chứng chỉ PCCC", "Tư vấn kỹ thuật", "Vật liệu chính hãng", "Nhân công lành nghề"],
  },
];

type Service = typeof SERVICES[0];

function ServiceDetail({ svc, onClose }: { svc: Service; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        display: "flex",
        alignItems: "stretch",
      }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }} />

      {/* Panel */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(700px, 100vw)",
          background: "#01122a",
          overflowY: "auto",
          boxShadow: "-20px 0 60px rgba(0,0,0,0.5)",
          animation: "slideInRight 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {/* Hero image */}
        <div style={{ position: "relative", height: "280px", overflow: "hidden", flexShrink: 0 }}>
          <img
            src={svc.img}
            alt={svc.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)" }} />
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.9)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <X size={18} color="#fff" />
          </button>
          <div style={{ position: "absolute", bottom: "24px", left: "28px" }}>
            <div
              style={{
                display: "inline-block",
                background: svc.color,
                color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: "4px",
                marginBottom: "8px",
              }}
            >
              {svc.tag}
            </div>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "36px",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.3,
              }}
            >
              {svc.title}
            </h2>
          </div>
        </div>

        <div style={{ padding: "32px 28px" }}>
          {/* Highlights */}
          <div
            className="grid-mobile-1 gap-mobile-sm"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "10px",
              marginBottom: "32px",
            }}
          >
            {svc.highlights.map((h) => (
              <div
                key={h}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 14px",
                  background: `${svc.color}0d`,
                  border: `1px solid ${svc.color}22`,
                  borderRadius: "8px",
                }}
              >
                <Check size={14} color={svc.color} strokeWidth={2.5} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 500, color: "#fff" }}>
                  {h}
                </span>
              </div>
            ))}
          </div>

          {/* Sub-services */}
          <h3
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "22px",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "16px",
              paddingBottom: "10px",
              borderBottom: `2px solid ${svc.color}`,
            }}
          >
            Các Gói Dịch Vụ
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
            {svc.subServices.map((sub) => (
              <div
                key={sub.name}
                style={{
                  padding: "16px",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = svc.color;
                  (e.currentTarget as HTMLDivElement).style.background = `${svc.color}15`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.05)";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14.5px", fontWeight: 600, color: "#fff" }}>
                    {sub.name}
                  </span>
                  <ChevronRight size={14} color={svc.color} />
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                  {sub.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Process */}
          <h3
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "22px",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "16px",
              paddingBottom: "10px",
              borderBottom: `2px solid ${svc.color}`,
            }}
          >
            Quy Trình Thi Công
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0", marginBottom: "32px" }}>
            {svc.process.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  paddingBottom: i < svc.process.length - 1 ? "16px" : "0",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: svc.color,
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "14px",
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </div>
                  {i < svc.process.length - 1 && (
                    <div style={{ width: "1px", flex: 1, minHeight: "16px", background: `${svc.color}33`, margin: "4px 0" }} />
                  )}
                </div>
                <div style={{ paddingTop: "6px" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>
                    {step}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery */}
          <h3
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "22px",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "14px",
              paddingBottom: "10px",
              borderBottom: `2px solid ${svc.color}`,
            }}
          >
            Hình Ảnh Thực Tế
          </h3>
          <div className="grid-mobile-1 gap-mobile-sm" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px", marginBottom: "32px" }}>
            {svc.gallery.map((img, i) => (
              <div key={i} style={{ borderRadius: "8px", overflow: "hidden", aspectRatio: "4/3" }}>
                <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                />
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "12px" }}>
            <a
              href="tel:0947707616"
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "14px",
                background: "#e60012",
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                boxShadow: "0 6px 20px rgba(230,0,18,0.3)",
                transition: "all 0.2s",
              }}
            >
              <Phone size={16} /> Gọi Báo Giá Ngay
            </a>
            <a
              href="#quote"
              onClick={onClose}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "14px",
                background: svc.color,
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                transition: "all 0.2s",
              }}
            >
              Gửi Yêu Cầu <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(60px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function ServiceCard({ svc, index, onOpen }: { svc: Service; index: number; onOpen: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setMousePos({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s`,
        perspective: "1000px",
      }}
    >
      <div
        className="metallic-border"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={onOpen}
        style={{
          borderRadius: "14px",
          overflow: "hidden",
          cursor: "pointer",
          boxShadow: hovered ? `0 24px 50px ${svc.color}40` : "0 4px 20px rgba(0,0,0,0.3)",
          transform: hovered ? `translateY(-6px) rotateX(${mousePos.x}deg) rotateY(${mousePos.y}deg)` : "translateY(0) rotateX(0) rotateY(0)",
          transition: hovered ? "transform 0.1s ease-out, box-shadow 0.3s ease" : "all 0.5s ease",
          background: "rgba(0, 11, 32, 0.7)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Image */}
        <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
          <img
            src={svc.img}
            alt={svc.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: hovered ? "scale(1.07)" : "scale(1)",
              transition: "transform 0.5s ease",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: hovered
                ? "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)"
                : "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.35) 100%)",
              transition: "background 0.3s",
            }}
          />
          {/* Tag */}
          <div
            style={{
              position: "absolute",
              top: "14px",
              left: "14px",
              background: svc.tagBg,
              color: "#fff",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              padding: "4px 10px",
              borderRadius: "4px",
              textTransform: "uppercase",
            }}
          >
            {svc.tag}
          </div>
          {/* Hover arrow */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              right: "16px",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "scale(1)" : "scale(0.7)",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <ArrowRight size={16} color={svc.color} />
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "20px 22px 24px" }}>
          <div
            style={{
              width: "32px",
              height: "3px",
              background: svc.color,
              borderRadius: "2px",
              marginBottom: "12px",
              transition: "width 0.3s",
              ...(hovered ? { width: "56px" } : {}),
            }}
          />
          <h3
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "22px",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "12px",
              lineHeight: 1.2,
            }}
          >
            {svc.title}
          </h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.7)", marginBottom: "24px" }}>
            {svc.short}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {svc.subServices.slice(0, 3).map((s) => (
              <span
                key={s.name}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11.5px",
                  color: svc.color,
                  background: `${svc.color}0f`,
                  padding: "3px 10px",
                  borderRadius: "50px",
                  border: `1px solid ${svc.color}22`,
                }}
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const [active, setActive] = useState<Service | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="pad-section-mobile" style={{ padding: "96px 0", background: "transparent" }}>
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 32px" }} ref={ref}>
        {/* Header */}
        <div
          style={{
            maxWidth: "600px",
            marginBottom: "56px",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.5s ease",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              color: "#e60012",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Dịch Vụ Của Chúng Tôi
          </p>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "48px",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.3,
              marginBottom: "16px",
              letterSpacing: "-0.3px",
            }}
          >
            Chuyên Nghiệp<br />Từ A Đến Z
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            Đội thợ lành nghề, máy móc chuyên dụng, vật liệu chính hãng. Nhấn vào dịch vụ để xem chi tiết.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid-mobile-1 gap-mobile-sm"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {SERVICES.slice(0, 3).map((svc, i) => (
            <ServiceCard key={svc.id} svc={svc} index={i} onOpen={() => setActive(svc)} />
          ))}
          {/* Last row: 2 cards centered */}
          <div className="grid-mobile-1 gap-mobile-sm" style={{ gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "20px", maxWidth: "760px", margin: "0 auto", width: "100%" }}>
            {SERVICES.slice(3).map((svc, i) => (
              <ServiceCard key={svc.id} svc={svc} index={i + 3} onOpen={() => setActive(svc)} />
            ))}
          </div>
        </div>
      </div>

      {/* Detail panel */}
      {active && <ServiceDetail svc={active} onClose={() => setActive(null)} />}
    </section>
  );
}
