import { Phone, Mail, MapPin, Globe, QrCode, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

const SERVICES = ["Sơn Epoxy Nhà Xưởng", "Sơn Nhà Xưởng & Mái Tôn", "Sơn Giao Thông", "Sơn Sân Thể Thao", "Sơn Chống Cháy", "Sơn Dân Dụng"];
const LINKS = ["Trang Chủ", "Về Chúng Tôi", "Dự Án", "Sản Phẩm", "Blog", "Tuyển Dụng"];

export function Footer() {
  return (
    <footer id="about" style={{ background: "transparent", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative" }}>
      {/* 3D Glowing Top Bar */}
      <div style={{
        height: "4px",
        background: "linear-gradient(90deg, #0a0f1e 0%, #0055cc 30%, #e60012 70%, #0a0f1e 100%)",
        boxShadow: "0 -4px 20px rgba(0,85,204,0.4), 0 4px 20px rgba(230,0,18,0.4)",
        position: "relative",
        zIndex: 10,
      }} />
      <div style={{
        position: "absolute",
        top: 0,
        left: "30%",
        width: "40%",
        height: "2px",
        background: "linear-gradient(90deg, transparent, #ffffff, transparent)",
        opacity: 0.6,
        filter: "blur(1px)",
        zIndex: 11,
      }} />

      {/* Main content */}
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "72px 32px 56px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.4fr", gap: "56px" }}>
        {/* Brand */}
        <div>
          <div style={{ marginBottom: "20px" }}>
            <Logo size="lg" dark={false} />
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13.5px", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, marginBottom: "24px", fontWeight: 300, maxWidth: "280px" }}>
            Đơn vị thi công sơn chuyên nghiệp — Epoxy, chống thấm, kẻ vạch, sân thể thao. Vật liệu chính hãng, đội ngũ lành nghề, bảo hành dài hạn.
          </p>
          {/* Company info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { icon: Globe, text: "CÔNG TY TNHH FUJI NANO VIỆT NAM", bold: true },
              { icon: MapPin, text: "45 Mậu Thân, P. Cái Khế, TP. Cần Thơ" },
              { icon: Mail, text: "baogia@fujinano.com" },
              { icon: Globe, text: "www.fujinano.com" },
            ].map(({ icon: Icon, text, bold }) => (
              <div key={text} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                <Icon size={13} color="rgba(255,255,255,0.3)" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: bold ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)", fontWeight: bold ? 600 : 300, lineHeight: 1.5 }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", fontWeight: 700, color: "#fff", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            Dịch Vụ
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {SERVICES.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.42)",
                    textDecoration: "none",
                    fontWeight: 300,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#0077ff")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.42)")}
                >
                  <div style={{ width: "12px", height: "1px", background: "#e60012", flexShrink: 0 }} />
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", fontWeight: 700, color: "#fff", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            Liên Kết
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {LINKS.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.42)",
                    textDecoration: "none",
                    fontWeight: 300,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#0077ff")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.42)")}
                >
                  <div style={{ width: "12px", height: "1px", background: "#0055cc", flexShrink: 0 }} />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + QR */}
        <div>
          <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", fontWeight: 700, color: "#fff", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            Liên Hệ
          </h4>
          {/* Hotline */}
          <a
            href="tel:0947707616"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px",
              background: "rgba(230,0,18,0.1)",
              border: "1px solid rgba(230,0,18,0.25)",
              borderRadius: "10px",
              textDecoration: "none",
              marginBottom: "10px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(230,0,18,0.18)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(230,0,18,0.1)"; }}
          >
            <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#e60012", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Phone size={16} color="#fff" />
            </div>
            <div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "1px" }}>Hotline Bán Hàng</div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "20px", fontWeight: 800, color: "#fff", letterSpacing: "0.5px" }}>0947.707.616</div>
            </div>
          </a>
          {/* Zalo */}
          <a
            href="https://zalo.me/0947707616"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px",
              background: "rgba(0,85,204,0.1)",
              border: "1px solid rgba(0,85,204,0.25)",
              borderRadius: "10px",
              textDecoration: "none",
              marginBottom: "20px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,85,204,0.18)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,85,204,0.1)"; }}
          >
            <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#0055cc", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <MessageCircle size={16} color="#fff" />
            </div>
            <div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "1px" }}>Chat Zalo</div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "20px", fontWeight: 800, color: "#fff" }}>Nhắn Tin Ngay</div>
            </div>
          </a>

          {/* QR */}
          <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
            <div style={{ width: "80px", height: "80px", background: "#03153B", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: "8px" }}>
              <QrCode size={60} color="#020B1D" strokeWidth={1.2} />
            </div>
            <div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: "4px" }}>Quét QR</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.3)", lineHeight: 1.6, fontWeight: 300 }}>
                Truy cập website và nhận tư vấn miễn phí ngay
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.22)", fontWeight: 300 }}>
            © 2025 FUJINANO — Công Ty TNHH Fuji Nano Việt Nam · MST: 1801784735 · Giám đốc: Ngô Anh Tú
          </span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.22)", fontWeight: 300 }}>
            Thiết kế bởi FUJINANO Team
          </span>
        </div>
      </div>
    </footer>
  );
}
