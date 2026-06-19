import { useEffect, useRef, useState } from "react";
import { ArrowRight, Clock, Tag } from "lucide-react";

const POSTS = [
  {
    img: "https://images.unsplash.com/photo-1772209415876-76ea6cbc2f0c?w=600&h=380&fit=crop&auto=format",
    tag: "Epoxy",
    tagColor: "#0055cc",
    title: "Sơn Epoxy Kết Cấu Thép Là Gì? Khi Nào Cần Dùng?",
    excerpt: "Tìm hiểu về hệ sơn Epoxy cho kết cấu thép — loại vật liệu nào phù hợp, quy trình chuẩn và chi phí ước tính cho công trình của bạn.",
    date: "12 Tháng 6, 2025",
    readTime: "5 phút đọc",
  },
  {
    img: "https://images.unsplash.com/photo-1771530789155-b1f03fbf82b5?w=600&h=380&fit=crop&auto=format",
    tag: "Nhà Xưởng",
    tagColor: "#e60012",
    title: "Quy Trình Mài Sàn Bê Tông Đúng Chuẩn Trước Khi Sơn",
    excerpt: "Mài sàn là bước quan trọng quyết định độ bám của lớp sơn. Bỏ qua bước này là nguyên nhân hàng đầu khiến sơn bong tróc sớm.",
    date: "8 Tháng 6, 2025",
    readTime: "7 phút đọc",
  },
  {
    img: "https://images.unsplash.com/photo-1693985120993-e9b203ce7631?w=600&h=380&fit=crop&auto=format",
    tag: "Tư Vấn",
    tagColor: "#00aa55",
    title: "So Sánh Sơn Nước Nippon, Jotun và Dulux: Loại Nào Tốt Nhất?",
    excerpt: "Đánh giá khách quan 3 thương hiệu sơn nước phổ biến nhất tại Việt Nam — giá cả, chất lượng và phù hợp với từng loại công trình.",
    date: "3 Tháng 6, 2025",
    readTime: "6 phút đọc",
  },
];

export function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  const [active, setActive] = useState<typeof POSTS[0] | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section id="blog" style={{ padding: "96px 0", background: "transparent" }} ref={ref}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 32px" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "48px",
              flexWrap: "wrap",
              gap: "16px",
              opacity: vis ? 1 : 0,
              transform: vis ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.5s ease",
            }}
          >
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 700, color: "#e60012", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "8px" }}>
                Kiến Thức & Tư Vấn
              </p>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "44px", fontWeight: 800, color: "#fff", letterSpacing: "-0.3px", lineHeight: 1.3 }}>
                Bài Viết Mới Nhất
              </h2>
            </div>
            <a
              href="#blog"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#0055cc",
                textDecoration: "none",
                borderBottom: "1.5px solid rgba(0,85,204,0.3)",
                paddingBottom: "2px",
              }}
            >
              Tất Cả Bài Viết <ArrowRight size={14} />
            </a>
          </div>

          {/* Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}>
            {POSTS.map((post, i) => {
              const [hov, setHov] = useState(false);
              const [coords, setCoords] = useState({ x: 0, y: 0 });

              const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const xc = ((x / rect.width) - 0.5) * 10;
                const yc = ((y / rect.height) - 0.5) * -10;
                setCoords({ x: xc, y: yc });
              };

              return (
                <div
                  className="metallic-border"
                  key={post.title}
                  onClick={() => setActive(post)}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setHov(true)}
                  onMouseLeave={() => { setHov(false); setCoords({ x: 0, y: 0 }); }}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    background: "rgba(0, 11, 32, 0.7)",
                    borderRadius: "14px",
                    overflow: "hidden",
                    boxShadow: hov ? "0 20px 48px rgba(0,0,0,0.12)" : "0 4px 16px rgba(0,0,0,0.06)",
                    transform: vis 
                      ? (hov 
                        ? `translateY(-6px) perspective(1000px) rotateY(${coords.x}deg) rotateX(${coords.y}deg) scale3d(1.02, 1.02, 1.02)` 
                        : "translateY(0) perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)") 
                      : "translateY(28px) scale(0.95)",
                    opacity: vis ? 1 : 0,
                    transition: hov 
                      ? "transform 0.1s ease-out, box-shadow 0.3s ease" 
                      : `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease, box-shadow 0.3s ease`,
                    transformStyle: "preserve-3d",
                    cursor: "pointer",
                  }}
                >
                  {/* Image */}
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <img
                      src={post.img}
                      alt={post.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transform: hov ? "scale(1.06)" : "scale(1)",
                        transition: "transform 0.5s ease",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ padding: "22px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          background: `${post.tagColor}0f`,
                          color: post.tagColor,
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "11px",
                          fontWeight: 700,
                          padding: "3px 10px",
                          borderRadius: "50px",
                          border: `1px solid ${post.tagColor}22`,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        <Tag size={10} />
                        {post.tag}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <Clock size={11} color="#94a3b8" />
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#94a3b8" }}>{post.readTime}</span>
                      </div>
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "20px",
                        fontWeight: 700,
                        color: hov ? "#0055cc" : "#fff",
                        lineHeight: 1.25,
                        marginBottom: "10px",
                        flex: 1,
                        transition: "color 0.2s",
                      }}
                    >
                      {post.title}
                    </h3>

                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13.5px", color: "rgba(255,255,255,0.7)", lineHeight: 1.65, marginBottom: "16px", fontWeight: 300 }}>
                      {post.excerpt}
                    </p>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#94a3b8" }}>{post.date}</span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#0055cc",
                          transition: "gap 0.2s",
                          ...(hov ? { gap: "8px" } : {}),
                        }}
                      >
                        Đọc Thêm <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Detail Modal */}
      {active && (
        <div style={{ position: "fixed", inset: 0, zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => setActive(null)}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(5px)" }} />
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(800px, 90vw)",
              maxHeight: "90vh",
              background: "#fff",
              borderRadius: "20px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              animation: "modalPop 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div style={{ position: "relative", height: "300px", flexShrink: 0 }}>
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
                  background: "rgba(255,255,255,0.9)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              >
                <ArrowRight size={18} style={{ transform: "rotate(135deg)" }} />
              </button>
            </div>
            <div style={{ padding: "40px", overflowY: "auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div style={{ display: "inline-block", background: active.tagColor, color: "#fff", padding: "4px 12px", borderRadius: "4px", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>
                  {active.tag}
                </div>
                <div style={{ fontSize: "14px", color: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}>{active.date} · {active.readTime}</div>
              </div>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "32px", fontWeight: 800, color: "#021230", marginBottom: "24px", lineHeight: 1.3 }}>
                {active.title}
              </h2>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#334155", lineHeight: 1.8, marginBottom: "32px" }}>
                <p style={{ marginBottom: "16px" }}>{active.excerpt}</p>
                <p style={{ marginBottom: "16px" }}>
                  Nội dung chi tiết của bài viết đang được cập nhật. Đây là bản demo landing page, nên các nội dung chuyên sâu sẽ được bổ sung sau khi chốt cấu trúc. 
                  Tuy nhiên, bạn có thể tham khảo thêm các dịch vụ của chúng tôi hoặc liên hệ trực tiếp để được tư vấn miễn phí.
                </p>
                <p>
                  Việc lựa chọn đúng loại vật liệu và quy trình thi công chuẩn sẽ giúp tiết kiệm đến 30% chi phí bảo trì trong dài hạn. Hãy để chuyên gia của chúng tôi đồng hành cùng dự án của bạn.
                </p>
              </div>
              <a href="#quote" onClick={() => setActive(null)} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", background: active.tagColor, color: "#fff", borderRadius: "8px", textDecoration: "none", fontWeight: 600, fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}>
                Nhận Tư Vấn Ngay <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
