import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 10, suffix: "+", label: "Năm Kinh Nghiệm", sublabel: "Years of excellence" },
  { value: 500, suffix: "+", label: "Công Trình Hoàn Thành", sublabel: "Completed projects" },
  { value: 50, suffix: "+", label: "Đối Tác Toàn Quốc", sublabel: "National partners" },
  { value: 99, suffix: "%", label: "Khách Hàng Hài Lòng", sublabel: "Client satisfaction" },
];

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, active]);
  return count;
}

function StatItem({ stat, active, index }: { stat: typeof STATS[0]; active: boolean; index: number }) {
  const count = useCountUp(stat.value, active);
  return (
    <div
      className="pad-mobile-sm border-none-mobile"
      style={{
        textAlign: "center",
        padding: "40px 48px",
        borderRight: index < STATS.length - 1 ? "1px solid rgba(0,85,204,0.25)" : "none",
        position: "relative",
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      {/* Glow dot */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: index % 2 === 0 ? "#e60012" : "#0055cc",
          boxShadow: `0 0 10px ${index % 2 === 0 ? "#e60012" : "#0055cc"}`,
        }}
      />
      <div
        className="stat-val-mobile"
        style={{
          fontFamily: "'Montserrat', 'Be Vietnam Pro', sans-serif",
          fontSize: "64px",
          fontWeight: 800,
          color: "#fff",
          lineHeight: 1.3,
          marginBottom: "6px",
        }}
      >
        <span style={{ color: index % 2 === 0 ? "#0077ff" : "#fff" }}>{count}</span>
        <span className="stat-suffix-mobile" style={{ color: "#e60012", fontSize: "40px" }}>{stat.suffix}</span>
      </div>
      <div
        className="stat-label-mobile"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          fontWeight: 600,
          color: "#fff",
          marginBottom: "4px",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
      >
        {stat.label}
      </div>
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "12px",
          color: "#94a3b8",
          letterSpacing: "1px",
        }}
      >
        {stat.sublabel}
      </div>
    </div>
  );
}

export function StatsStrip() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #000e28 0%, #001840 50%, #000e28 100%)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(0,85,204,0.2)",
        borderBottom: "1px solid rgba(0,85,204,0.2)",
      }}
    >
      {/* Hex bg */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }}>
        <defs>
          <pattern id="hex-stats" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
            <polygon points="30,2 56,16 56,44 30,58 4,44 4,16" fill="none" stroke="#0055cc" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-stats)" />
      </svg>

      {/* Red left accent */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: "linear-gradient(180deg, transparent, #e60012, transparent)" }} />

      <div
        className="grid-mobile-2 gap-mobile-sm"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {STATS.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} active={active} index={i} />
        ))}
      </div>
    </section>
  );
}
