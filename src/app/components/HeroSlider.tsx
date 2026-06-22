import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Phone, ArrowRight, Play } from "lucide-react";

const SLIDES = [
  {
    img: "/images/slider/epoxy_floor.png",
    label: "01 — SƠN EPOXY",
    headline: "SÀN EPOXY",
    headlineBold: "CHUẨN QUỐC TẾ",
    sub: "Bề mặt siêu phẳng · Kháng hóa chất · Chịu tải hàng chục tấn",
    cta: "Nhận Báo Giá",
    href: "#quote",
    accent: "#e60012",
  },
  {
    img: "/images/slider/sports_court.png",
    label: "02 — SÂN THỂ THAO",
    headline: "SÂN THI ĐẤU",
    headlineBold: "ĐẲNG CẤP QUỐC TẾ",
    sub: "Acrylic/PU giảm chấn · Chống trượt · Chuẩn ITF/BWF",
    cta: "Xem Dự Án",
    href: "#portfolio",
    accent: "#0055cc",
  },
  {
    img: "/images/slider/fireproof_steel.png",
    label: "03 — CHỐNG CHÁY",
    headline: "BẢO VỆ",
    headlineBold: "KẾT CẤU THÉP",
    sub: "Sơn intumescent · Chứng nhận PCCC · Chịu nhiệt 1200°C",
    cta: "Tư Vấn Ngay",
    href: "#quote",
    accent: "#ff8800",
  },
  {
    img: "/images/slider/polished_concrete.png",
    label: "04 — MÀI BÊ TÔNG",
    headline: "MÀI BÓNG",
    headlineBold: "SÀN CÔNG NGHIỆP",
    sub: "Đĩa kim cương · Chống sinh bụi · Bề mặt sáng gương",
    cta: "Xem Dịch Vụ",
    href: "#services",
    accent: "#00aa55",
  },
];

// Floating particle component
function FloatingParticles() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2, overflow: "hidden" }}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="float-particle"
          style={{
            position: "absolute",
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            borderRadius: "50%",
            background: `rgba(255,255,255,${0.04 + Math.random() * 0.08})`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `floatUp ${10 + Math.random() * 15}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}

// Floating 3D Geometries
function FloatingGeometries({ mousePos }: { mousePos: { x: number, y: number } }) {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 3, overflow: "hidden", perspective: "1000px" }}>
      {/* Torus / Ring */}
      <div style={{
        position: "absolute", right: "15%", top: "20%",
        width: "140px", height: "140px",
        border: "1px solid rgba(255,255,255,0.08)", borderRadius: "50%",
        transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px) rotateX(${mousePos.y * 30}deg) rotateY(${mousePos.x * 30}deg)`,
        transition: "transform 0.2s ease-out",
        boxShadow: "0 0 20px rgba(255,255,255,0.03) inset",
      }} />
      {/* Cube wireframe */}
      <div style={{
        position: "absolute", left: "10%", bottom: "25%",
        width: "80px", height: "80px",
        border: "1px solid rgba(230,0,18,0.15)",
        transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px) rotateZ(45deg) rotateX(${mousePos.y * -40}deg)`,
        transition: "transform 0.2s ease-out",
      }}>
        <div style={{ position: "absolute", inset: "-10px", border: "1px dashed rgba(230,0,18,0.1)", transform: "translateZ(-20px)" }} />
      </div>
      {/* Glowing Orb */}
      <div style={{
        position: "absolute", left: "30%", top: "15%",
        width: "250px", height: "250px",
        background: "radial-gradient(circle, rgba(0,85,204,0.1) 0%, transparent 70%)",
        transform: `translate(${mousePos.x * 60}px, ${mousePos.y * 60}px)`,
        transition: "transform 0.2s ease-out",
      }} />
    </div>
  );
}

export function HeroSlider() {
  const [cur, setCur] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const animatingRef = useRef(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [textRevealed, setTextRevealed] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  }, []);

  const go = useCallback((idx: number) => {
    if (animatingRef.current) return;
    setCur((currentCur) => {
      const newIdx = ((idx % SLIDES.length) + SLIDES.length) % SLIDES.length;
      if (newIdx === currentCur) return currentCur;

      setTextRevealed(false);
      setAnimating(true);
      animatingRef.current = true;
      setPrev(currentCur);

      setTimeout(() => {
        setCur(newIdx);
        setTimeout(() => {
          setTextRevealed(true);
          setAnimating(false);
          animatingRef.current = false;
          setPrev(null);
        }, 100);
      }, 500);

      setProgress(0);
      return currentCur; // Keep it same initially, we update it in setTimeout
    });
  }, []);

  const goNext = useCallback(() => {
    setCur(c => {
      go(c + 1);
      return c;
    });
  }, [go]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progRef.current) clearInterval(progRef.current);
    setProgress(0);
    let p = 0;
    progRef.current = setInterval(() => {
      p += 100 / 70;
      setProgress(Math.min(p, 100));
    }, 100);
    timerRef.current = setInterval(() => {
      goNext();
    }, 7000);
  }, [goNext]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progRef.current) clearInterval(progRef.current);
    };
  }, [cur, resetTimer]);

  const slide = SLIDES[cur];

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "700px",
        overflow: "hidden",
        background: "transparent",
        perspective: "1500px",
      }}
    >
      {/* Background Images - Crossfade */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            opacity: i === cur ? 1 : (i === prev ? 1 : 0),
            transform: i === cur ? `scale(1.05) translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)` : (i === prev ? "scale(1.08)" : "scale(1.1)"),
            transition: i === cur
              ? "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s ease-out"
              : "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <img
            src={s.img}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      ))}

      {/* Cinematic Overlays */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        background: "linear-gradient(135deg, rgba(2,11,29,0.88) 0%, rgba(2,11,29,0.55) 50%, rgba(2,11,29,0.75) 100%)",
      }} />
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "40%",
        zIndex: 1,
        background: "linear-gradient(to top, rgba(2,11,29,0.95), transparent)",
      }} />

      {/* Floating Particles and Geometries */}
      <FloatingParticles />
      <FloatingGeometries mousePos={mousePos} />

      {/* Vertical Side Text (removed per request) */}

      {/* Main Content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px 80px 0 80px",
          maxWidth: "1400px",
          margin: "0 auto",
          left: 0,
          right: 0,
          zIndex: 4,
          transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
          transition: "transform 0.2s ease-out",
        }}
        className="hero-main-content"
      >
        {/* Label removed per request to match mobile */}

        {/* Headline - Cinematic 2-line reveal */}
        <h1 style={{ marginBottom: "24px", paddingTop: "8px" }}>
          <span
            style={{
              display: "block",
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "clamp(44px, 6vw, 90px)",
              fontWeight: 700,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.25,
              letterSpacing: "-1px",
              opacity: textRevealed ? 1 : 0,
              transform: textRevealed ? "translateY(0)" : "translateY(40px)",
              transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
            }}
          >
            {slide.headline}
          </span>
          <span
            style={{
              display: "block",
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "clamp(48px, 7vw, 100px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.25,
              letterSpacing: "-1px",
              opacity: textRevealed ? 1 : 0,
              transform: textRevealed ? "translateY(0)" : "translateY(40px)",
              transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.25s",
              textShadow: `0 0 80px ${slide.accent}22`,
            }}
          >
            {slide.headlineBold}
          </span>
        </h1>

        {/* Sub-text removed per request to match mobile */}

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            opacity: textRevealed ? 1 : 0,
            transform: textRevealed ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.45s",
          }}
        >
          <a
            href={slide.href}
            className="hero-cta-primary magnetic"
            style={{
              padding: "15px 36px",
              background: slide.accent,
              color: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s",
              boxShadow: `0 8px 30px ${slide.accent}44`,
              position: "relative",
              overflow: "hidden",
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              e.currentTarget.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translate(0px, 0px)";
            }}
          >
            <span className="btn-shine" />
            <span style={{ position: "relative", zIndex: 1 }}>{slide.cta}</span>
            <ArrowRight size={16} style={{ position: "relative", zIndex: 1 }} />
          </a>
          <a
            href="tel:0947707616"
            className="hero-cta-secondary magnetic"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 28px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              backdropFilter: "blur(12px)",
              transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s",
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              e.currentTarget.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translate(0px, 0px)";
            }}
          >
            <Phone size={15} />
            Gọi Tư Vấn
          </a>
        </div>
      </div>

      {/* 3D Thumbnail Gallery - Bottom Right */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          right: "60px",
          display: "flex",
          gap: "14px",
          zIndex: 6,
          perspective: "800px",
        }}
        className="thumb-gallery"
      >
        {SLIDES.map((s, i) => {
          const isActive = i === cur;
          return (
            <div
              key={i}
              onClick={() => go(i)}
              className="thumb-card-3d"
              style={{
                width: isActive ? "140px" : "80px",
                height: "100px",
                borderRadius: "14px",
                overflow: "hidden",
                cursor: "pointer",
                border: isActive ? `2px solid ${s.accent}` : "1px solid rgba(255,255,255,0.15)",
                boxShadow: isActive
                  ? `0 12px 30px rgba(0,0,0,0.5), 0 0 15px ${s.accent}33`
                  : "0 6px 20px rgba(0,0,0,0.3)",
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
                transform: isActive ? "translateY(-8px) scale(1)" : "translateY(0) scale(1)",
              }}
            >
              <img
                src={s.img}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: isActive ? "none" : "brightness(0.5) saturate(0.7)",
                  transition: "filter 0.4s",
                }}
              />
              {/* Active indicator */}
              {isActive && (
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: s.accent,
                  boxShadow: `0 0 8px ${s.accent}`,
                }} />
              )}
              {/* Number overlay */}
              <div style={{
                position: "absolute",
                top: "6px",
                left: "8px",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                textShadow: "0 1px 4px rgba(0,0,0,0.6)",
              }}>
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Left - Progress + Counter */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "80px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          zIndex: 6,
        }}
        className="hero-bottom-left"
      >
        {/* Circular progress */}
        <div style={{ position: "relative", width: "48px", height: "48px" }}>
          <svg width="48" height="48" viewBox="0 0 48 48" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <circle
              cx="24" cy="24" r="20" fill="none"
              stroke={slide.accent}
              strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - progress / 100)}`}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.1s linear, stroke 0.5s" }}
            />
          </svg>
          <span style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            color: "#fff",
          }}>
            {String(cur + 1).padStart(2, "0")}
          </span>
        </div>

        <div style={{
          width: "1px",
          height: "28px",
          background: "rgba(255,255,255,0.12)",
        }} />

        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "12px",
          fontWeight: 500,
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "2px",
        }}>
          / {String(SLIDES.length).padStart(2, "0")}
        </span>
      </div>

      {/* Navigation Arrows */}
      {[
        { dir: "left" as const, idx: cur - 1, icon: <ChevronLeft size={22} /> },
        { dir: "right" as const, idx: cur + 1, icon: <ChevronRight size={22} /> },
      ].map(({ dir, idx, icon }) => (
        <button
          key={dir}
          onClick={() => go(idx)}
          className={`hero-arrow-3d hero-arrow-${dir}`}
          style={{
            position: "absolute",
            top: "50%",
            [dir]: "32px",
            transform: "translateY(-50%)",
            zIndex: 8,
            width: "52px",
            height: "52px",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {icon}
        </button>
      ))}

      {/* Scroll indicator */}
      <div className="scroll-indicator" style={{
        position: "absolute",
        bottom: "60px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}>
        <div style={{
          width: "1px",
          height: "50px",
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.2))",
          animation: "scrollPulse 2s ease-in-out infinite",
        }} />
      </div>

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: translateX(-50%) scaleY(1); }
          50% { opacity: 0.7; transform: translateX(-50%) scaleY(1.2); }
        }

        .hero-cta-primary:hover {
          transform: translateY(-4px) !important;
          filter: brightness(1.1);
        }

        .hero-cta-secondary:hover {
          background: rgba(255,255,255,0.1) !important;
          border-color: rgba(255,255,255,0.25) !important;
          transform: translateY(-4px);
        }

        .btn-shine {
          position: absolute;
          top: -50%;
          left: -100%;
          width: 50%;
          height: 200%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
          transform: skewX(-20deg);
          animation: btnShine 4s infinite;
          pointer-events: none;
        }

        @keyframes btnShine {
          0% { left: -100%; }
          25% { left: 150%; }
          100% { left: 150%; }
        }

        .hero-arrow-3d:hover {
          background: rgba(230, 0, 18, 0.9) !important;
          border-color: rgba(230, 0, 18, 1) !important;
          box-shadow: 0 8px 25px rgba(230,0,18,0.4);
          transform: translateY(-50%) scale(1.1) !important;
        }

        .thumb-card-3d:hover {
          transform: translateY(-12px) scale(1.05) !important;
          box-shadow: 0 16px 35px rgba(0,0,0,0.5) !important;
        }

        @media (max-width: 960px) {
          .hero-label, .hero-sub-text {
            display: none !important;
          }
          .hero-main-content {
            padding: 0 28px !important;
            justify-content: center !important;
            padding-top: 100px !important;
          }
          .thumb-gallery {
            display: none !important;
          }
          .side-text {
            display: none !important;
          }
          .scroll-indicator {
            display: none !important;
          }
          .hero-bottom-left {
            left: 28px !important;
            bottom: 40px !important;
          }
          .hero-arrow-3d {
            width: 40px !important;
            height: 40px !important;
            display: flex !important;
          }
          .hero-arrow-left {
            left: 12px !important;
          }
          .hero-arrow-right {
            right: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
