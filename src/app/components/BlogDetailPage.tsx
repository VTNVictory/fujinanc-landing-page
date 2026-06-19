import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";
import { getPostBySlug, POSTS } from "../data/blogPosts";

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getPostBySlug(slug ?? "");

  // Cập nhật <title> và meta description cho SEO
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Fujina Painting`;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", post.excerpt);
    }
    return () => {
      document.title = "Fujina Painting | Giải Pháp Sơn Công Nghiệp";
    };
  }, [post]);

  if (!post) {
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
          Bài viết không tồn tại hoặc đã bị xóa.
        </p>
        <Link
          to="/tin-tuc"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 24px",
            background: "#0055cc",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          <ArrowLeft size={16} /> Về Danh Sách Bài Viết
        </Link>
      </div>
    );
  }

  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Hero ── */
        .blog-hero {
          position: relative;
          width: 100%;
          min-height: 420px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-top: 100px; /* offset navbar */
        }
        .blog-hero__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.4);
        }
        .blog-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,10,40,0.2) 0%, rgba(0,10,40,0.88) 100%);
        }
        .blog-hero__inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 32px 48px;
          animation: fadeUp 0.6s ease both;
        }

        /* Breadcrumb */
        .blog-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 20px;
        }
        .blog-breadcrumb a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s;
        }
        .blog-breadcrumb a:hover { color: rgba(255,255,255,0.85); }

        /* Tag badge */
        .blog-hero__tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 14px;
        }

        /* Title */
        .blog-hero__title {
          font-family: 'Montserrat', sans-serif;
          font-size: 38px;
          font-weight: 800;
          color: #fff;
          line-height: 1.25;
          margin-bottom: 14px;
          word-break: break-word;
        }
        .blog-hero__meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 18px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.5);
        }
        .blog-hero__meta span {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* ── Body layout ── */
        .blog-body {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .blog-columns {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 48px;
          padding-top: 56px;
          padding-bottom: 80px;
          align-items: start;
        }

        /* Article */
        .blog-article {
          animation: fadeUp 0.7s ease 0.1s both;
          min-width: 0; /* prevent overflow in grid */
        }
        .blog-back-btn {
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
          margin-bottom: 32px;
          transition: color 0.2s, gap 0.2s;
        }
        .blog-back-btn:hover { color: #0055cc; gap: 10px; }

        /* Excerpt block */
        .blog-excerpt {
          font-family: 'DM Sans', sans-serif;
          font-size: 17px;
          font-weight: 500;
          color: rgba(255,255,255,0.9);
          line-height: 1.7;
          border-radius: 0 8px 8px 0;
          padding: 16px 20px;
          margin-bottom: 36px;
        }

        /* Rich text content */
        .blog-detail-content h2 {
          font-family: 'Montserrat', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          margin: 32px 0 12px;
        }
        .blog-detail-content p {
          font-family: 'DM Sans', sans-serif;
          font-size: 15.5px;
          color: rgba(255,255,255,0.78);
          line-height: 1.85;
          margin-bottom: 14px;
        }
        .blog-detail-content ul {
          padding-left: 22px;
          margin-bottom: 16px;
        }
        .blog-detail-content li {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: rgba(255,255,255,0.75);
          line-height: 1.75;
          margin-bottom: 6px;
        }
        .blog-detail-content strong { color: #fff; font-weight: 700; }

        /* CTA box */
        .blog-cta {
          margin-top: 48px;
          padding: 32px;
          background: rgba(0,85,204,0.1);
          border: 1px solid rgba(0,85,204,0.25);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          align-items: flex-start;
        }
        .blog-cta__title {
          font-family: 'Montserrat', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
        }
        .blog-cta__desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 14.5px;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
        }
        .blog-cta__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          background: #0055cc;
          color: #fff;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          font-size: 14.5px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .blog-cta__btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,85,204,0.4); }

        /* ── Sidebar ── */
        .blog-sidebar {
          position: sticky;
          top: 120px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          animation: fadeUp 0.7s ease 0.2s both;
        }
        .blog-sidebar__card {
          background: rgba(0,11,32,0.7);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 22px;
        }
        .blog-sidebar__heading {
          font-family: 'Montserrat', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 16px;
        }
        .related-card {
          display: flex;
          gap: 12px;
          text-decoration: none;
          align-items: flex-start;
          transition: opacity 0.2s;
        }
        .related-card:hover { opacity: 0.8; }
        .related-card__img {
          width: 68px;
          height: 52px;
          object-fit: cover;
          border-radius: 7px;
          flex-shrink: 0;
        }
        .related-card__title {
          font-family: 'DM Sans', sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          color: #fff;
          line-height: 1.4;
          transition: color 0.2s;
          margin-bottom: 4px;
        }
        .related-card:hover .related-card__title { color: #0055cc; }
        .related-card__time {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          color: #94a3b8;
        }

        /* Tags */
        .blog-tag-chip {
          padding: 4px 11px;
          border-radius: 50px;
          font-size: 11px;
          font-weight: 700;
          font-family: 'DM Sans', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* ── "Bài Viết Khác" grid (dưới cùng) ── */
        .blog-more-grid {
          padding-bottom: 72px;
        }
        .blog-more-grid__heading {
          font-family: 'Montserrat', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 20px;
        }
        .blog-more-grid__cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .blog-more-card {
          display: block;
          text-decoration: none;
          border-radius: 12px;
          overflow: hidden;
          background: rgba(0,11,32,0.7);
          border: 1px solid rgba(255,255,255,0.07);
          transition: transform 0.3s ease, box-shadow 0.3s;
        }
        .blog-more-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.3); }
        .blog-more-card img { width: 100%; height: 160px; object-fit: cover; display: block; }
        .blog-more-card__body { padding: 16px; }
        .blog-more-card__tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 50px;
          text-transform: uppercase;
          font-family: 'DM Sans', sans-serif;
          margin-bottom: 8px;
        }
        .blog-more-card__title {
          font-family: 'Montserrat', sans-serif;
          font-size: 14.5px;
          font-weight: 700;
          color: #fff;
          line-height: 1.35;
        }

        /* ── MOBILE RESPONSIVE ── */
        @media (max-width: 900px) {
          .blog-hero__title { font-size: 26px; }
          .blog-columns {
            grid-template-columns: 1fr;
            gap: 32px;
            padding-top: 36px;
            padding-bottom: 40px;
          }
          .blog-sidebar { display: none; } /* sidebar ẩn, dùng section "Bài Viết Khác" thay thế */
          .blog-body { padding: 0 20px; }
          .blog-hero__inner { padding: 20px 20px 36px; }
          .blog-cta { padding: 24px 20px; }
          .blog-cta__title { font-size: 18px; }
        }

        @media (max-width: 600px) {
          .blog-hero { min-height: 320px; }
          .blog-hero__title { font-size: 22px; }
          .blog-breadcrumb { font-size: 11px; }
          .blog-excerpt { font-size: 15px; }
          .blog-detail-content h2 { font-size: 18px; }
          .blog-detail-content p { font-size: 14.5px; }
          .blog-more-grid__cards { grid-template-columns: 1fr; }
          .blog-more-card img { height: 180px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="blog-hero">
        <img className="blog-hero__img" src={post.img} alt={post.title} />
        <div className="blog-hero__overlay" />

        <div className="blog-hero__inner">
          {/* Breadcrumb */}
          <nav className="blog-breadcrumb">
            <Link to="/">Trang Chủ</Link>
            <span>/</span>
            <Link to="/tin-tuc">Tin Tức</Link>
            <span>/</span>
            <span style={{ color: "rgba(255,255,255,0.8)" }}>{post.title}</span>
          </nav>

          {/* Tag */}
          <div
            className="blog-hero__tag"
            style={{
              background: `${post.tagColor}20`,
              color: post.tagColor,
              border: `1px solid ${post.tagColor}40`,
            }}
          >
            <Tag size={10} /> {post.tag}
          </div>

          {/* Title */}
          <h1 className="blog-hero__title">{post.title}</h1>

          {/* Meta */}
          <div className="blog-hero__meta">
            <span>{post.date}</span>
            <span>
              <Clock size={12} /> {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="blog-body">
        <div className="blog-columns">
          {/* Article */}
          <article className="blog-article">
            <button className="blog-back-btn" onClick={() => navigate(-1)}>
              <ArrowLeft size={15} /> Quay Lại
            </button>

            {/* Excerpt */}
            <p
              className="blog-excerpt"
              style={{
                borderLeft: `4px solid ${post.tagColor}`,
                background: `${post.tagColor}0a`,
              }}
            >
              {post.excerpt}
            </p>

            {/* Content */}
            <div
              className="blog-detail-content"
              dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
            />

            {/* CTA */}
            <div className="blog-cta">
              <p className="blog-cta__title">Bạn Cần Tư Vấn Thêm?</p>
              <p className="blog-cta__desc">
                Đội ngũ kỹ thuật sẵn sàng hỗ trợ bạn lựa chọn giải pháp sơn phù hợp nhất với
                công trình — hoàn toàn miễn phí.
              </p>
              <Link to="/#quote" className="blog-cta__btn">
                Nhận Báo Giá Miễn Phí <ArrowRight size={15} />
              </Link>
            </div>
          </article>

          {/* Sidebar (desktop only) */}
          <aside className="blog-sidebar">
            {/* Related posts */}
            <div className="blog-sidebar__card">
              <p className="blog-sidebar__heading">Bài Viết Liên Quan</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {related.map((r) => (
                  <Link key={r.slug} to={`/tin-tuc/${r.slug}`} className="related-card">
                    <img className="related-card__img" src={r.img} alt={r.title} />
                    <div>
                      <p className="related-card__title">{r.title}</p>
                      <span className="related-card__time">{r.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="blog-sidebar__card">
              <p className="blog-sidebar__heading">Danh Mục</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {POSTS.map((p) => (
                  <span
                    key={p.tag}
                    className="blog-tag-chip"
                    style={{
                      background: `${p.tagColor}15`,
                      color: p.tagColor,
                      border: `1px solid ${p.tagColor}30`,
                    }}
                  >
                    {p.tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Bài Viết Khác (hiển thị trên mọi màn hình, thay sidebar trên mobile) */}
        <div className="blog-more-grid">
          <p className="blog-more-grid__heading">Bài Viết Khác</p>
          <div className="blog-more-grid__cards">
            {related.map((r) => (
              <Link key={r.slug} to={`/tin-tuc/${r.slug}`} className="blog-more-card">
                <img src={r.img} alt={r.title} />
                <div className="blog-more-card__body">
                  <div
                    className="blog-more-card__tag"
                    style={{
                      background: `${r.tagColor}15`,
                      color: r.tagColor,
                    }}
                  >
                    <Tag size={9} /> {r.tag}
                  </div>
                  <p className="blog-more-card__title">{r.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
