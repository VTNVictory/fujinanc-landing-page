import { useEffect, useRef, useState } from "react";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Link } from "react-router";
import { POSTS } from "../data/blogPosts";


export function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section id="blog" className="pad-section-mobile" style={{ padding: "96px 0", background: "transparent" }} ref={ref}>
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
              <h2 className="heading-xl-mobile" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "44px", fontWeight: 800, color: "#fff", letterSpacing: "-0.3px", lineHeight: 1.3 }}>
                Bài Viết Mới Nhất
              </h2>
            </div>
            <Link
              to="/tin-tuc"
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
            </Link>
          </div>

          {/* Cards */}
          <div className="grid-mobile-1 gap-mobile-sm" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}>
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
                <Link
                  to={`/tin-tuc/${post.slug}`}
                  className="metallic-border"
                  key={post.title}
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
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
