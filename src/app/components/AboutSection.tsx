import { useEffect, useRef, useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    "Hơn 12 năm kinh nghiệm thực chiến",
    "Đội ngũ kỹ thuật viên lành nghề",
    "Trang thiết bị, máy móc hiện đại",
    "Bảo hành dài hạn, bảo trì nhanh chóng"
  ];

  return (
    <section id="about" className="pad-section-mobile" style={{ padding: "100px 0", background: "transparent", position: "relative" }} ref={ref}>
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="grid-mobile-1">

          {/* Left: Text content */}
          <div style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateX(0)" : "translateX(-40px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "40px", height: "2px", background: "#e60012" }} />
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                color: "#e60012",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
              }}>
                CÂU CHUYỆN THƯƠNG HIỆU
              </p>
            </div>

            <h2 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "24px",
            }}>
              KIẾN TẠO BỀ MẶT <br />
              <span style={{ color: "#e60012" }}>HOÀN HẢO</span>
            </h2>

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              marginBottom: "16px",
            }}>
              Với hơn một thập kỷ đồng hành cùng các doanh nghiệp, Fujinano thấu hiểu rằng một bề mặt hoàn thiện vững chắc chính là nền tảng cốt lõi cho sự phát triển trơn tru của mọi nhà máy và hạ tầng dự án.
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              marginBottom: "36px",
            }}>
              Mỗi mét vuông thi công đều là sự kết tinh từ <strong>công nghệ vật liệu tiên tiến</strong>, quy trình kiểm soát chất lượng chuẩn quốc tế và sự tận tâm tuyệt đối từ đội ngũ chuyên gia giàu kinh nghiệm của chúng tôi.
            </p>

            {/* 2x2 Stats Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "40px" }}>
              {[
                { val: "12+", label: "Năm Kinh Nghiệm" },
                { val: "800+", label: "Công Trình Hoàn Thành" },
                { val: "50+", label: "Đối Tác Doanh Nghiệp" },
                { val: "8", label: "Thương Hiệu Ủy Quyền" }
              ].map((s, idx) => (
                <div key={idx} style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  padding: "20px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  transition: "all 0.3s ease",
                  cursor: "default"
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}>
                  <span style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: "28px", fontWeight: 800, color: "#e60012" }}>{s.val}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.6)" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dual Image side */}
          <div style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateX(0)" : "translateX(40px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            position: "relative",
            height: "100%",
            minHeight: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            {/* Background glow */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              height: "80%",
              background: "radial-gradient(circle, rgba(0,85,204,0.15) 0%, transparent 70%)",
              zIndex: 0
            }} />

            {/* Image 1 (Left/Bottom) */}
            <div style={{
              position: "absolute",
              left: 0,
              bottom: "5%",
              width: "55%",
              aspectRatio: "3/4",
              borderRadius: "20px",
              overflow: "hidden",
              zIndex: 2,
              boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.05)"
            }}>
              <img
                src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=600&h=800&fit=crop&auto=format"
                alt="Chuyên gia thi công"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Image 2 (Right/Top) */}
            <div style={{
              position: "absolute",
              right: 0,
              top: "5%",
              width: "60%",
              aspectRatio: "4/5",
              borderRadius: "20px",
              overflow: "hidden",
              zIndex: 1,
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.05)"
            }}>
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=750&fit=crop&auto=format"
                alt="Công nghệ hiện đại"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
