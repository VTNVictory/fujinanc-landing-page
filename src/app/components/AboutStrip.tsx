export function AboutStrip() {
  const stats = [
    { num: "10+", label: "Năm Kinh Nghiệm" },
    { num: "500+", label: "Công Trình Hoàn Thành" },
    { num: "50+", label: "Đối Tác Toàn Quốc" },
    { num: "99%", label: "Khách Hàng Hài Lòng" },
  ];

  return (
    <section
      id="about"
      className="pad-section-mobile"
      style={{
        background: "linear-gradient(135deg, #003366 0%, #001a4d 100%)",
        padding: "64px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hex pattern overlay */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hex-about" x="0" y="0" width="56" height="48.5" patternUnits="userSpaceOnUse">
            <polygon points="28,1 53,14.75 53,42.25 28,56 3,42.25 3,14.75" fill="none" stroke="#ffffff" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-about)" />
      </svg>

      <div
        className="grid-mobile-2 gap-mobile-sm"
        style={{
          maxWidth: "1344px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="border-none-mobile pad-sm-mobile"
            style={{
              textAlign: "center",
              padding: "0 40px",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
            }}
          >
            <div
              className="heading-xl-mobile"
              style={{
                fontFamily: "'Montserrat', 'Be Vietnam Pro', sans-serif",
                fontSize: "60px",
                fontWeight: 800,
                color: "#021230",
                lineHeight: 1.3,
                marginBottom: "8px",
              }}
            >
              <span style={{ color: "#0066cc" }}>{s.num.replace(/[^0-9]/g, "")}</span>
              <span style={{ color: "#e60012", fontSize: "40px" }}>{s.num.replace(/[0-9]/g, "")}</span>
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.65)",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
