import { useEffect } from "react";
import { useParams, Link } from "react-router"; // Fixed import to "react-router-dom" conceptually, though the project uses "react-router" based on App.tsx
import { ArrowLeft, MapPin, CheckCircle, Calendar } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "../data/portfolioProjects";

export function PortfolioDetailPage() {
  const { slug } = useParams();
  const project = PORTFOLIO_PROJECTS.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div style={{ paddingTop: "150px", textAlign: "center", minHeight: "60vh", fontFamily: "'DM Sans', sans-serif" }}>
        <h2>Không tìm thấy dự án</h2>
        <Link to="/" style={{ color: "#0055cc" }}>Quay lại trang chủ</Link>
      </div>
    );
  }

  return (
    <div style={{ background: "#020817", minHeight: "100vh", color: "#fff", paddingBottom: "100px" }}>
      {/* Hero Banner */}
      <div style={{
        position: "relative",
        height: "60vh",
        minHeight: "400px",
        display: "flex",
        alignItems: "flex-end",
        paddingBottom: "80px"
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${project.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(2,8,23,0.3) 0%, rgba(2,8,23,0.95) 100%)"
        }} />

        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 32px", width: "100%", position: "relative", zIndex: 10 }}>
          <Link to="/" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            color: "rgba(255,255,255,0.6)", textDecoration: "none",
            fontFamily: "'DM Sans', sans-serif", fontSize: "14px",
            marginBottom: "24px", transition: "color 0.2s"
          }}
            onMouseEnter={e => e.currentTarget.style.color = "#fff"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
          >
            <ArrowLeft size={16} /> Quay lại trang chủ
          </Link>

          <div style={{ display: "inline-block", background: project.serviceColor, color: "#fff", padding: "6px 16px", borderRadius: "50px", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", marginBottom: "20px", fontFamily: "'DM Sans', sans-serif" }}>
            {project.service}
          </div>
          
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 800, lineHeight: 1.2,
            marginBottom: "24px",
            textShadow: "0 4px 12px rgba(0,0,0,0.5)"
          }}>
            {project.title}
          </h1>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", fontFamily: "'DM Sans', sans-serif" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.8)" }}>
              <MapPin size={18} color={project.serviceColor} />
              <span>{project.location}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.8)" }}>
              <CheckCircle size={18} color={project.serviceColor} />
              <span>Diện tích: {project.area}</span>
            </div>
            {project.completionDate && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.8)" }}>
                <Calendar size={18} color={project.serviceColor} />
                <span>Hoàn thành: {project.completionDate}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "60px 32px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px" }}>
          
          {/* Overview */}
          <div style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
            padding: "32px", borderRadius: "16px",
            display: "flex", flexDirection: "column", gap: "16px"
          }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "24px", fontWeight: 700, color: project.serviceColor }}>Tổng Quan Dự Án</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}>
              Dự án <strong>{project.title}</strong> do chủ đầu tư <strong>{project.client}</strong> triển khai tại {project.location}. 
              Với tổng diện tích lên tới {project.area}, đây là một trong những công trình tiêu biểu của FUJINANO trong việc áp dụng giải pháp {project.service} chất lượng cao.
            </p>
          </div>

          {/* Details (SEO content) */}
          {project.challenge && (
            <div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>1. Thách thức đặt ra</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>{project.challenge}</p>
            </div>
          )}

          {project.solution && (
            <div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>2. Giải pháp thi công từ FUJINANO</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>{project.solution}</p>
            </div>
          )}

          {project.result && (
            <div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>3. Kết quả đạt được</h3>
              <div style={{
                borderLeft: `4px solid ${project.serviceColor}`,
                paddingLeft: "20px", background: "rgba(255,255,255,0.02)", padding: "20px"
              }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.8)", lineHeight: 1.8, fontStyle: "italic" }}>
                  "{project.result}"
                </p>
              </div>
            </div>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div style={{ marginTop: "32px" }}>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "22px", fontWeight: 700, marginBottom: "24px" }}>Hình Ảnh Thực Tế</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
                {project.gallery.map((img, idx) => (
                  <img key={idx} src={img} alt={`${project.title} hình ${idx + 1}`} style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }} />
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: "60px", paddingTop: "60px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "28px", fontWeight: 800, marginBottom: "16px" }}>Bạn cần thi công công trình tương tự?</h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.6)", marginBottom: "32px" }}>Liên hệ với đội ngũ kỹ sư của FUJINANO để nhận tư vấn và báo giá chi tiết trong 2 giờ.</p>
            <Link to="/#quote" style={{
              display: "inline-block", padding: "16px 36px",
              background: "linear-gradient(135deg, #e60012, #cc0010)",
              color: "#fff", borderRadius: "12px", textDecoration: "none",
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px",
              boxShadow: "0 8px 30px rgba(230,0,18,0.4)", transition: "all 0.3s"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              Nhận Báo Giá Ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
