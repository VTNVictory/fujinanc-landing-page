import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { ArrowLeft, ArrowRight, Clock, Play } from "lucide-react";
import { getVideoBySlug, VIDEOS } from "../data/videoData";

export function VideoDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const video = getVideoBySlug(slug ?? "");

  // SEO: cập nhật title + meta description
  useEffect(() => {
    if (video) {
      document.title = `${video.title} | Fujina Painting`;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", video.description ?? video.title);
    }
    return () => {
      document.title = "Fujina Painting | Giải Pháp Sơn Công Nghiệp";
    };
  }, [video]);

  if (!video) {
    return (
      <div
        style={{
          paddingTop: "140px",
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          fontFamily: "'DM Sans', sans-serif",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: 800, fontFamily: "'Montserrat', sans-serif" }}>
          404
        </h1>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "18px" }}>
          Video không tồn tại hoặc đã bị xóa.
        </p>
        <Link
          to="/video"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 24px",
            background: "#e60012",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          <ArrowLeft size={16} /> Về Danh Sách Video
        </Link>
      </div>
    );
  }

  const related = VIDEOS.filter((v) => v.slug !== slug).slice(0, 2);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Hero video ── */
        .vd-hero {
          position: relative;
          width: 100%;
          min-height: 380px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
          padding-top: 100px;
        }
        .vd-hero__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.35);
        }
        .vd-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,5,20,0.2) 0%, rgba(0,5,20,0.92) 100%);
        }
        .vd-hero__inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 32px 48px;
          animation: fadeUp 0.6s ease both;
        }
        .vd-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 20px;
        }
        .vd-breadcrumb a { color: inherit; text-decoration: none; transition: color 0.2s; }
        .vd-breadcrumb a:hover { color: rgba(255,255,255,0.85); }

        .vd-hero__title {
          font-family: 'Be Vietnam Pro', 'Montserrat', sans-serif;
          font-size: 36px;
          font-weight: 800;
          color: #fff;
          line-height: 1.25;
          margin-bottom: 14px;
          word-break: break-word;
        }
        .vd-hero__meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.5);
        }
        .vd-hero__meta span { display: flex; align-items: center; gap: 5px; }

        /* ── Body ── */
        .vd-body {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .vd-columns {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 48px;
          padding-top: 52px;
          padding-bottom: 72px;
          align-items: start;
        }

        /* ── Video player box ── */
        .vd-player-wrap {
          animation: fadeUp 0.7s ease 0.1s both;
          min-width: 0;
        }
        .vd-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: rgba(255,255,255,0.6);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          margin-bottom: 28px;
          transition: color 0.2s, gap 0.2s;
        }
        .vd-back-btn:hover { color: #e60012; gap: 10px; }

        /* Embed / placeholder */
        .vd-embed {
          position: relative;
          width: 100%;
          padding-top: 56.25%; /* 16:9 */
          border-radius: 16px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 24px 60px rgba(0,0,0,0.5);
          margin-bottom: 28px;
        }
        .vd-embed__inner {
          position: absolute;
          inset: 0;
        }
        .vd-embed__thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.6;
        }
        .vd-embed__overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          background: rgba(0,0,0,0.45);
        }
        .vd-embed__play-btn {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(230,0,18,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 12px rgba(230,0,18,0.15);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .vd-embed__play-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 0 0 18px rgba(230,0,18,0.12);
        }
        .vd-embed__label {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.7);
          text-align: center;
          padding: 0 20px;
        }

        /* Description */
        .vd-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 15.5px;
          color: rgba(255,255,255,0.78);
          line-height: 1.8;
          margin-bottom: 36px;
        }

        /* CTA box */
        .vd-cta {
          padding: 30px;
          background: rgba(230,0,18,0.08);
          border: 1px solid rgba(230,0,18,0.2);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-start;
        }
        .vd-cta__title {
          font-family: 'Montserrat', sans-serif;
          font-size: 19px;
          font-weight: 700;
          color: #fff;
        }
        .vd-cta__desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.65);
          line-height: 1.6;
        }
        .vd-cta__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: #e60012;
          color: #fff;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .vd-cta__btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(230,0,18,0.4); }

        /* ── Sidebar ── */
        .vd-sidebar {
          position: sticky;
          top: 120px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: fadeUp 0.7s ease 0.2s both;
        }
        .vd-sidebar__card {
          background: rgba(0,11,32,0.7);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 20px;
        }
        .vd-sidebar__heading {
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 14px;
        }
        .vd-related-card {
          display: flex;
          gap: 12px;
          text-decoration: none;
          align-items: flex-start;
          transition: opacity 0.2s;
        }
        .vd-related-card + .vd-related-card { margin-top: 14px; }
        .vd-related-card:hover { opacity: 0.75; }
        .vd-related-card__thumb-wrap {
          position: relative;
          width: 80px;
          height: 56px;
          border-radius: 8px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .vd-related-card__thumb-wrap img { width: 100%; height: 100%; object-fit: cover; }
        .vd-related-card__play {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.4);
        }
        .vd-related-card__title {
          font-family: 'DM Sans', sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          color: #fff;
          line-height: 1.4;
          margin-bottom: 4px;
        }
        .vd-related-card:hover .vd-related-card__title { color: #e60012; }
        .vd-related-card__dur {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          color: #94a3b8;
          display: flex;
          align-items: center;
          gap: 3px;
        }

        /* ── More videos grid ── */
        .vd-more { padding-bottom: 72px; }
        .vd-more__heading {
          font-family: 'Montserrat', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 20px;
        }
        .vd-more__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .vd-more-card {
          display: block;
          text-decoration: none;
          border-radius: 14px;
          overflow: hidden;
          background: rgba(0,11,32,0.7);
          border: 1px solid rgba(255,255,255,0.07);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .vd-more-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.35); }
        .vd-more-card__thumb {
          position: relative;
          width: 100%;
          padding-top: 58%;
        }
        .vd-more-card__thumb img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .vd-more-card:hover .vd-more-card__thumb img { transform: scale(1.05); }
        .vd-more-card__play-icon {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.4);
        }
        .vd-more-card__play-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(230,0,18,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s;
        }
        .vd-more-card:hover .vd-more-card__play-circle { transform: scale(1.1); }
        .vd-more-card__dur {
          position: absolute;
          bottom: 10px;
          right: 10px;
          padding: 3px 10px;
          background: rgba(0,0,0,0.7);
          border-radius: 20px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: #fff;
        }
        .vd-more-card__body { padding: 14px 16px; }
        .vd-more-card__title {
          font-family: 'Be Vietnam Pro', 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          line-height: 1.4;
          transition: color 0.2s;
        }
        .vd-more-card:hover .vd-more-card__title { color: #e60012; }

        /* ── Mobile ── */
        @media (max-width: 900px) {
          .vd-hero__title { font-size: 24px; }
          .vd-columns {
            grid-template-columns: 1fr;
            gap: 28px;
            padding-top: 32px;
            padding-bottom: 32px;
          }
          .vd-sidebar { display: none; }
          .vd-body { padding: 0 20px; }
          .vd-hero__inner { padding: 20px 20px 36px; }
        }
        @media (max-width: 600px) {
          .vd-hero { min-height: 280px; }
          .vd-hero__title { font-size: 20px; }
          .vd-more__grid { grid-template-columns: 1fr; }
          .vd-embed { border-radius: 10px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="vd-hero">
        <img className="vd-hero__img" src={video.thumbnail} alt={video.title} />
        <div className="vd-hero__overlay" />

        <div className="vd-hero__inner">
          {/* Breadcrumb */}
          <nav className="vd-breadcrumb">
            <Link to="/">Trang Chủ</Link>
            <span>/</span>
            <Link to="/video">Video Thi Công</Link>
            <span>/</span>
            <span style={{ color: "rgba(255,255,255,0.8)" }}>{video.title}</span>
          </nav>

          {/* Title */}
          <h1 className="vd-hero__title">{video.title}</h1>

          {/* Meta */}
          <div className="vd-hero__meta">
            <span>
              <Clock size={12} /> {video.duration}
            </span>
            <span
              style={{
                padding: "3px 10px",
                background: "rgba(230,0,18,0.2)",
                border: "1px solid rgba(230,0,18,0.35)",
                borderRadius: "20px",
                color: "#ff4455",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Video Thi Công
            </span>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="vd-body">
        <div className="vd-columns">
          {/* Left: player + description */}
          <div className="vd-player-wrap">
            <button className="vd-back-btn" onClick={() => navigate(-1)}>
              <ArrowLeft size={15} /> Quay Lại
            </button>

            {/* Video embed / placeholder */}
            <div className="vd-embed">
              <div className="vd-embed__inner">
                {video.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: "100%", height: "100%", border: "none" }}
                  />
                ) : (
                  <>
                    <img className="vd-embed__thumb" src={video.thumbnail} alt={video.title} />
                    <div className="vd-embed__overlay">
                      <div className="vd-embed__play-btn">
                        <Play size={32} color="#fff" fill="#fff" style={{ marginLeft: "4px" }} />
                      </div>
                      <p className="vd-embed__label">
                        Video demo — Liên hệ chúng tôi để xem nội dung thực tế
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            {video.description && (
              <p className="vd-desc">{video.description}</p>
            )}

            {/* CTA */}
            <div className="vd-cta">
              <p className="vd-cta__title">Quan Tâm Đến Dịch Vụ Này?</p>
              <p className="vd-cta__desc">
                Liên hệ ngay để nhận báo giá và tư vấn kỹ thuật miễn phí từ đội ngũ chuyên gia
                của Fujina Painting.
              </p>
              <Link to="/#quote" className="vd-cta__btn">
                Nhận Báo Giá Miễn Phí <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right: sidebar (desktop only) */}
          <aside className="vd-sidebar">
            <div className="vd-sidebar__card">
              <p className="vd-sidebar__heading">Video Liên Quan</p>
              {related.map((r) => (
                <Link key={r.slug} to={`/video/${r.slug}`} className="vd-related-card">
                  <div className="vd-related-card__thumb-wrap">
                    <img src={r.thumbnail} alt={r.title} />
                    <div className="vd-related-card__play">
                      <Play size={16} color="#fff" fill="#fff" style={{ marginLeft: "2px" }} />
                    </div>
                  </div>
                  <div>
                    <p className="vd-related-card__title">{r.title}</p>
                    <span className="vd-related-card__dur">
                      <Clock size={10} /> {r.duration}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>

        {/* Video khác (mọi màn hình) */}
        <div className="vd-more">
          <p className="vd-more__heading">Video Khác</p>
          <div className="vd-more__grid">
            {related.map((r) => (
              <Link key={r.slug} to={`/video/${r.slug}`} className="vd-more-card">
                <div className="vd-more-card__thumb">
                  <img src={r.thumbnail} alt={r.title} />
                  <div className="vd-more-card__play-icon">
                    <div className="vd-more-card__play-circle">
                      <Play size={22} color="#fff" fill="#fff" style={{ marginLeft: "3px" }} />
                    </div>
                  </div>
                  <span className="vd-more-card__dur">{r.duration}</span>
                </div>
                <div className="vd-more-card__body">
                  <p className="vd-more-card__title">{r.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
