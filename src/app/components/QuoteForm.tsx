import { useState, useRef, useEffect } from "react";
import { Phone, MessageCircle, Send, MapPin, Clock, CheckCircle } from "lucide-react";

const SERVICES_LIST = [
  "Sơn Epoxy Nhà Xưởng",
  "Sơn Nhà Xưởng & Mái Tôn",
  "Sơn Giao Thông & Kẻ Vạch",
  "Sơn Sân Thể Thao",
  "Sơn Chống Cháy",
  "Sơn Nội/Ngoại Thất Dân Dụng",
  "Khác",
];

const BRANCHES = [
  {
    region: "Miền Nam",
    city: "TP. Hồ Chí Minh",
    address: "123 Đường Số 9, Khu Công Nghiệp Lê Minh Xuân, Bình Chánh",
    hotline: "0947.707.616",
    zalo: "0947707616",
    email: "hcm@fujinano.com",
    hours: "T2–T7: 07:30–17:30",
    color: "#0055cc",
  },
  {
    region: "Miền Trung",
    city: "Đà Nẵng",
    address: "45 Mậu Thân, P. Cái Khế, TP. Cần Thơ",
    hotline: "0947.707.616",
    zalo: "0947707616",
    email: "danang@fujinano.com",
    hours: "T2–T7: 07:30–17:30",
    color: "#e60012",
  },
  {
    region: "Miền Bắc",
    city: "Hà Nội",
    address: "8 Phạm Hùng, Khu Đô Thị Mỹ Đình, Nam Từ Liêm",
    hotline: "0947.707.616",
    zalo: "0947707616",
    email: "hanoi@fujinano.com",
    hours: "T2–T7: 07:30–17:30",
    color: "#ff8800",
  },
];

export function QuoteForm() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    area: "",
    note: "",
  });

  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="quote" className="pad-section-mobile" style={{ background: "transparent", padding: "96px 0", position: "relative", overflow: "hidden" }} ref={ref}>
      {/* Background Orbs */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "10%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(230,0,18,0.15) 0%, transparent 60%)",
        filter: "blur(40px)",
        animation: "orbMove1 15s infinite alternate ease-in-out",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        right: "10%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(0,85,204,0.15) 0%, transparent 60%)",
        filter: "blur(40px)",
        animation: "orbMove2 20s infinite alternate-reverse ease-in-out",
        pointerEvents: "none",
      }} />

      {/* Subtle pattern */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.03, pointerEvents: "none" }}>
        <defs>
          <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#fff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>
        <div className="grid-mobile-1 gap-mobile-sm" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          {/* Left: form */}
          <div
            className="metallic-border"
            style={{
              opacity: vis ? 1 : 0,
              transform: vis ? "translateX(0) scale(1)" : "translateX(-24px) scale(0.95)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              background: "rgba(0, 11, 32, 0.6)",
              backdropFilter: "blur(20px) saturate(1.5)",
              borderRadius: "24px",
              padding: "48px",
              boxShadow: "0 30px 60px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.02)",
            }}
          >
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 700, color: "#e60012", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "10px" }}>
              Nhận Báo Giá
            </p>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "44px", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "12px", letterSpacing: "-0.3px" }}>
              Báo Giá Miễn Phí<br /><span style={{ color: "#0077ff" }}>Trong 2 Giờ</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "32px", fontWeight: 300 }}>
              Gửi thông tin công trình, đội kỹ sư FUJINANO sẽ liên hệ tư vấn và báo giá ngay.
            </p>

            {sent ? (
              <div
                style={{
                  background: "rgba(0,170,85,0.12)",
                  border: "1px solid rgba(0,170,85,0.3)",
                  borderRadius: "12px",
                  padding: "32px",
                  textAlign: "center",
                }}
              >
                <CheckCircle size={48} color="#00aa55" style={{ marginBottom: "16px" }} />
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "24px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
                  Đã Nhận Yêu Cầu!
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
                  Chúng tôi sẽ gọi lại cho bạn trong vòng 2 giờ làm việc.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid-mobile-1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                  {[
                    { key: "name", label: "Họ & Tên *", placeholder: "Nguyễn Văn A", type: "text" },
                    { key: "phone", label: "Số Điện Thoại *", placeholder: "0912 345 678", type: "tel" },
                  ].map(({ key, label, placeholder, type }) => (
                    <div key={key}>
                      <label
                        style={{
                          display: "block",
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "rgba(255,255,255,0.7)",
                          marginBottom: "6px",
                        }}
                      >
                        {label}
                      </label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        required
                        value={(form as Record<string, string>)[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          borderRadius: "8px",
                          color: "#fff",
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "14px",
                          outline: "none",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#0055cc"; }}
                        onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
                      />
                    </div>
                  ))}
                </div>

                {/* Service select */}
                <div style={{ marginBottom: "14px" }}>
                  <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.7)", marginBottom: "6px" }}>
                    Dịch Vụ Cần Báo Giá *
                  </label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "8px",
                      color: form.service ? "#fff" : "rgba(255,255,255,0.4)",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      outline: "none",
                      appearance: "none",
                    }}
                  >
                    <option value="">-- Chọn dịch vụ --</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s} style={{ background: "#020B1D" }}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Area + note */}
                <div className="grid-mobile-1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                  <div>
                    <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.7)", marginBottom: "6px" }}>
                      Diện Tích (m²)
                    </label>
                    <input
                      type="number"
                      placeholder="Ví dụ: 500"
                      value={form.area}
                      onChange={(e) => setForm({ ...form, area: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "8px",
                        color: "#fff",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "14px",
                        outline: "none",
                      }}
                      onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#0055cc"; }}
                      onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.7)", marginBottom: "6px" }}>
                      Ghi Chú Thêm
                    </label>
                    <input
                      type="text"
                      placeholder="Địa điểm, yêu cầu đặc biệt..."
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "8px",
                        color: "#fff",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "14px",
                        outline: "none",
                      }}
                      onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "#0055cc"; }}
                      onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
                    />
                  </div>
                </div>

                <button
                  ref={btnRef}
                  type="submit"
                  className="magnetic"
                  style={{
                    width: "100%",
                    padding: "14px",
                    background: "#e60012",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    boxShadow: "0 8px 24px rgba(230,0,18,0.35)",
                    transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s",
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    e.currentTarget.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
                    e.currentTarget.style.boxShadow = "0 14px 32px rgba(230,0,18,0.45)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translate(0px, 0px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(230,0,18,0.35)";
                  }}
                >
                  <Send size={16} /> Gửi Yêu Cầu Báo Giá
                </button>
              </form>
            )}
          </div>

          {/* Right: contact + branches */}
          <div
            style={{
              opacity: vis ? 1 : 0,
              transform: vis ? "translateX(0)" : "translateX(24px)",
              transition: "all 0.6s ease 0.15s",
            }}
          >
            {/* Quick contact */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "40px", flexWrap: "wrap" }}>
              <a
                href="tel:0947707616"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "18px 20px",
                  background: "rgba(230,0,18,0.1)",
                  border: "1px solid rgba(230,0,18,0.3)",
                  borderRadius: "12px",
                  textDecoration: "none",
                  minWidth: "160px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(230,0,18,0.18)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(230,0,18,0.1)"; }}
              >
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#e60012", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone size={18} color="#fff" />
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.5)", marginBottom: "2px" }}>Gọi Ngay</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "20px", fontWeight: 700, color: "#fff" }}>0947.707.616</div>
                </div>
              </a>
              <a
                href="https://zalo.me/0947707616"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "18px 20px",
                  background: "rgba(0,85,204,0.1)",
                  border: "1px solid rgba(0,85,204,0.3)",
                  borderRadius: "12px",
                  textDecoration: "none",
                  minWidth: "160px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,85,204,0.18)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,85,204,0.1)"; }}
              >
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#0055cc", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MessageCircle size={18} color="#fff" />
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.5)", marginBottom: "2px" }}>Chat Zalo</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "20px", fontWeight: 700, color: "#fff" }}>Nhắn Ngay</div>
                </div>
              </a>
            </div>

            {/* Branches */}
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>
              Hệ Thống Chi Nhánh
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {BRANCHES.map((b) => (
                <div
                  key={b.region}
                  style={{
                    padding: "18px",
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${b.color}33`,
                    borderRadius: "12px",
                    borderLeft: `3px solid ${b.color}`,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.07)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <div>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700, color: b.color, letterSpacing: "1px", textTransform: "uppercase" }}>
                        {b.region}
                      </span>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px", fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
                        {b.city}
                      </div>
                    </div>
                    <a
                      href={`tel:${b.hotline.replace(/\./g, "")}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: b.color,
                        textDecoration: "none",
                        background: `${b.color}15`,
                        padding: "5px 12px",
                        borderRadius: "50px",
                        border: `1px solid ${b.color}33`,
                        transition: "all 0.2s",
                      }}
                    >
                      <Phone size={11} /> {b.hotline}
                    </a>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <div style={{ display: "flex", gap: "6px", alignItems: "flex-start" }}>
                      <MapPin size={12} color="rgba(255,255,255,0.35)" style={{ marginTop: "2px", flexShrink: 0 }} />
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12.5px", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{b.address}</span>
                    </div>
                    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                      <Clock size={12} color="rgba(255,255,255,0.35)" style={{ flexShrink: 0 }} />
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12.5px", color: "rgba(255,255,255,0.5)" }}>{b.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
