import { useEffect, useRef, useState } from "react";
import { Play, Video } from "lucide-react";

const VIDEOS = [
  {
    title: "Thi công sơn sàn Epoxy nhà máy điện tử",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    duration: "03:45",
  },
  {
    title: "Phủ PU chống thấm tầng hầm chung cư",
    thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&w=800&q=80",
    duration: "02:20",
  },
  {
    title: "Sơn Epoxy chống tĩnh điện phòng sạch",
    thumbnail: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80",
    duration: "04:15",
  },
];

export function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [active, setActive] = useState<typeof VIDEOS[0] | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section id="videos" className="pad-section-mobile" style={{ background: "transparent", padding: "100px 0", color: "#fff" }} ref={ref}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 32px" }}>
          
          <div style={{
            textAlign: "center",
            marginBottom: "56px",
            opacity: vis ? 1 : 0,
            transition: "all 0.6s ease 0.2s",
            transform: vis ? "translateY(0)" : "translateY(15px)",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "12px" }}>
              <Video size={16} color="#e60012" />
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700, color: "#e60012", letterSpacing: "2.5px", textTransform: "uppercase" }}>
                Thực Tế Công Trình
              </p>
            </div>
            <h2 style={{ 
              fontFamily: "'Be Vietnam Pro', sans-serif", 
              fontSize: "clamp(32px, 3.5vw, 44px)", 
              fontWeight: 800, 
              color: "#ffffff", 
              letterSpacing: "0.3px" 
            }}>
              VIDEO THI CÔNG
            </h2>
          </div>

          <div className="grid-mobile-1 gap-mobile-sm" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
          }}>
            {VIDEOS.map((vid, i) => (
              <div
                className="metallic-border"
                key={i}
                onClick={() => setActive(vid)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  cursor: "pointer",
                  opacity: vis ? 1 : 0,
                  transform: vis ? "translateY(0) perspective(1000px) rotateX(0deg)" : "translateY(60px) perspective(1000px) rotateX(-20deg)",
                  transformOrigin: "bottom center",
                  transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + i * 0.15}s`,
                  boxShadow: hoveredIndex === i ? "0 25px 50px rgba(0,0,0,0.5)" : "0 10px 30px rgba(0,0,0,0.3)",
                }}
              >
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: `url(${vid.thumbnail}) center/cover`,
                  transform: hoveredIndex === i ? "scale(1.08)" : "scale(1)",
                  transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                }} />
                
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: hoveredIndex === i 
                    ? "linear-gradient(to top, rgba(2, 18, 48, 0.9) 0%, rgba(2, 18, 48, 0.2) 50%, rgba(0,0,0,0.1) 100%)"
                    : "linear-gradient(to top, rgba(2, 18, 48, 0.95) 0%, rgba(2, 18, 48, 0.4) 50%, rgba(0,0,0,0.2) 100%)",
                  transition: "all 0.4s ease",
                }} />

                {/* Aspect ratio spacer */}
                <div style={{ paddingTop: "65%" }} />

                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: hoveredIndex === i ? "translate(-50%, -50%) scale(1.1)" : "translate(-50%, -50%) scale(1)",
                  width: "64px",
                  height: "64px",
                  background: "rgba(230, 0, 18, 0.9)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: hoveredIndex === i ? "0 0 30px rgba(230,0,18,0.6)" : "0 0 0px rgba(230,0,18,0)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}>
                  <Play size={24} color="#fff" fill="#fff" style={{ marginLeft: "4px" }} />
                </div>

                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "30px",
                  transform: hoveredIndex === i ? "translateY(-10px)" : "translateY(0)",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}>
                  <div style={{
                    display: "inline-block",
                    padding: "6px 12px",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "20px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "12px",
                    border: "1px solid rgba(255,255,255,0.1)"
                  }}>
                    {vid.duration}
                  </div>
                  <h3 style={{
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.4,
                  }}>
                    {vid.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Video Modal */}
      {active && (
        <div style={{ position: "fixed", inset: 0, zIndex: 3000, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => setActive(null)}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.9)", backdropFilter: "blur(10px)" }} />
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(1000px, 95vw)",
              background: "#000",
              borderRadius: "16px",
              overflow: "hidden",
              animation: "videoPop 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
            }}
          >
            <button
              onClick={() => setActive(null)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
                backdropFilter: "blur(4px)",
              }}
            >
              <Play size={18} style={{ transform: "rotate(45deg)", marginLeft: "-2px" }} />
            </button>
            <div style={{ paddingTop: "56.25%", position: "relative", background: `url(${active.thumbnail}) center/cover` }}>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.5)" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ marginBottom: "16px", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>Video Demo (Tính năng mẫu cho Landing Page)</div>
                  <h3 style={{ color: "#fff", fontFamily: "'Montserrat', sans-serif", fontSize: "24px" }}>{active.title}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes videoPop {
          from { transform: scale(0.95) translateY(20px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
      `}</style>
    </>
  );
}
