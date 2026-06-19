import { useRef, useState, useEffect } from "react";
import { Check, ArrowRight, Phone, Star, Shield, Droplets, Thermometer, Palette, Eye } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    slug: "watershield-pro",
    name: "WaterShield Pro",
    nameVi: "Sơn Chống Thấm Cao Cấp",
    category: "CHỐNG THẤM",
    tagColor: "#0055cc",
    image: "https://images.unsplash.com/photo-1629397545188-cf2da30db99b?w=600&h=700&fit=crop&auto=format",
    icon: Droplets,
    rating: 4.9,
    badge: "BÁN CHẠY SỐ 1",
    badgeColor: "#e60012",
    accentColor: "#0055cc",
    shortDesc: "Màng Nano phân tử tạo lớp chắn tuyệt đối chống thấm nước",
    features: [
      "Chống thấm 100% theo chuẩn Nhật Bản",
      "Bền vững 10–15 năm không bong tróc",
      "Kháng UV và chống rêu mốc cực mạnh",
      "Gốc nước, thân thiện với môi trường",
      "Phủ bề mặt bê tông, gạch, tường cũ",
    ],
    spec: "Độ phủ: 10–12 m²/lít",
  },
  {
    id: 2,
    slug: "thermoshield-elite",
    name: "ThermoShield Elite",
    nameVi: "Sơn Cách Nhiệt Phản Xạ",
    category: "CÁCH NHIỆT",
    tagColor: "#e60012",
    image: "https://images.unsplash.com/photo-1492557724230-0399016348c6?w=600&h=700&fit=crop&auto=format",
    icon: Thermometer,
    rating: 4.8,
    badge: "CÔNG NGHỆ MỚI",
    badgeColor: "#0055cc",
    accentColor: "#e60012",
    shortDesc: "Phản xạ 85% nhiệt lượng mặt trời – tiết kiệm điện 30%",
    features: [
      "Phản xạ tới 85% bức xạ nhiệt mặt trời",
      "Giảm nhiệt độ bề mặt 15–20°C",
      "Tiết kiệm điện điều hòa lên đến 30%",
      "Chống nứt và co ngót bề mặt",
      "Ứng dụng mái tôn, sân thượng, tường ngoài",
    ],
    spec: "Độ phủ: 8–10 m²/lít",
  },
  {
    id: 3,
    slug: "nanocolor-ultra",
    name: "NanoColor Ultra",
    nameVi: "Sơn Nội Thất Kháng Khuẩn",
    category: "NỘI THẤT",
    tagColor: "#00aa55",
    image: "https://images.unsplash.com/photo-1604073337719-08cb03cab29d?w=600&h=700&fit=crop&auto=format",
    icon: Shield,
    rating: 4.9,
    badge: "PHỔ BIẾN NHẤT",
    badgeColor: "#00aa55",
    accentColor: "#00aa55",
    shortDesc: "1000+ màu sắc, kháng khuẩn ion bạc – an toàn tuyệt đối",
    features: [
      "1000+ màu sắc phong phú NCS/RAL/Pantone",
      "Kháng khuẩn 99.9% với ion bạc hoạt tính",
      "Không mùi, an toàn cho trẻ nhỏ & thai phụ",
      "Dễ lau chùi, chịu ma sát cao",
      "Bền màu 12–15 năm không phai ố",
    ],
    spec: "Độ phủ: 12–14 m²/lít",
  },
  {
    id: 4,
    slug: "uvguard-premium",
    name: "UVGuard Premium",
    nameVi: "Sơn Ngoại Thất Chống UV",
    category: "NGOẠI THẤT",
    tagColor: "#ff8800",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&h=700&fit=crop&auto=format",
    icon: Palette,
    rating: 4.7,
    badge: "CAO CẤP",
    badgeColor: "#ff8800",
    accentColor: "#ff8800",
    shortDesc: "Bảo vệ ngoại thất bền vững trước tia UV và thời tiết",
    features: [
      "Chống phai màu UV vượt trội 15+ năm",
      "Chống thấm nước và hơi ẩm hiệu quả",
      "Bám dính xuất sắc trên mọi bề mặt",
      "Chịu được tia UV cường độ cao",
      "Màu sắc tươi sáng bền lâu theo thời gian",
    ],
    spec: "Độ phủ: 10–12 m²/lít",
  },
  {
    id: 5,
    slug: "antibac-shield",
    name: "AntiBac Shield",
    nameVi: "Sơn Kháng Khuẩn Y Tế",
    category: "Y TẾ / CÔNG NGHIỆP",
    tagColor: "#8833ff",
    image: "https://images.unsplash.com/photo-1674485190969-4347f72aad0e?w=600&h=700&fit=crop&auto=format",
    icon: Shield,
    rating: 4.8,
    badge: "CHUYÊN DỤNG",
    badgeColor: "#8833ff",
    accentColor: "#8833ff",
    shortDesc: "Tiêu chuẩn y tế – kháng khuẩn, kháng nấm cực mạnh",
    features: [
      "Kháng khuẩn, kháng nấm đạt chuẩn y tế",
      "Chịu hóa chất tẩy rửa mạnh",
      "Bề mặt siêu phẳng, dễ vệ sinh",
      "Phù hợp bệnh viện, phòng sạch, nhà máy",
      "Không độc hại, an toàn sức khỏe tuyệt đối",
    ],
    spec: "Độ phủ: 8–10 m²/lít",
  },
  {
    id: 6,
    slug: "nano-flex",
    name: "NanoFlex Elastic",
    nameVi: "Sơn Đàn Hồi Chống Nứt",
    category: "CHỐNG NỨT",
    tagColor: "#0055cc",
    image: "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?w=600&h=700&fit=crop&auto=format",
    icon: Droplets,
    rating: 4.9,
    badge: "ĐỘT PHÁ",
    badgeColor: "#0055cc",
    accentColor: "#0055cc",
    shortDesc: "Đàn hồi siêu cao – che phủ vết nứt đến 3mm hiệu quả",
    features: [
      "Độ giãn đàn hồi lên đến 350%",
      "Che phủ vết nứt tới 3mm",
      "Chống thấm xuyên vết nứt động",
      "Bám dính cực tốt trên bề mặt co ngót",
      "Bền vững trong điều kiện nhiệt đới",
    ],
    spec: "Độ phủ: 6–8 m²/lít",
  },
];

function ProductCard({ product, index }: { product: typeof PRODUCTS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setTilt({ x, y });
  };

  const Icon = product.icon;

  return (
    <div
      ref={cardRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`,
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
        onMouseMove={handleMouseMove}
        style={{
          position: "relative",
          height: "460px",
          borderRadius: "14px",
          overflow: "hidden",
          cursor: "pointer",
          /* Layer 1 3D tilt */
          transform: hovered
            ? `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(1.03)`
            : "perspective(900px) rotateX(0) rotateY(0) scale(1)",
          transition: "transform 0.35s ease, box-shadow 0.35s ease",
          boxShadow: hovered
            ? `0 30px 70px rgba(0,0,0,0.6), 0 0 40px ${product.accentColor}44`
            : "0 8px 30px rgba(0,0,0,0.35)",
          willChange: "transform",
        }}
      >
        {/* ── LAYER 1: Base image + category chip ── */}
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: hovered ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.6s ease",
            }}
          />
          {/* Permanent dark gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: hovered
                ? "linear-gradient(180deg, rgba(0,8,22,0.3) 0%, rgba(0,8,22,0.97) 100%)"
                : "linear-gradient(180deg, rgba(0,8,22,0.1) 0%, rgba(0,8,22,0.88) 100%)",
              transition: "background 0.4s ease",
            }}
          />
        </div>

        {/* Badge */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            zIndex: 5,
            background: product.badgeColor,
            color: "#fff",
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "1.5px",
            padding: "4px 12px",
            borderRadius: "3px",
            textTransform: "uppercase",
            boxShadow: `0 4px 14px ${product.badgeColor}66`,
          }}
        >
          {product.badge}
        </div>

        {/* Category */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            zIndex: 5,
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(8px)",
            border: `1px solid ${product.tagColor}66`,
            color: product.tagColor,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "1.5px",
            padding: "4px 10px",
            borderRadius: "20px",
          }}
        >
          {product.category}
        </div>

        {/* Layer 1 bottom: name + rating (visible without hover) */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "24px",
            zIndex: 5,
            transform: hovered ? "translateY(-20px)" : "translateY(0)",
            opacity: hovered ? 0 : 1,
            transition: "all 0.4s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
            <Icon size={14} color={product.accentColor} />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                color: product.accentColor,
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              {product.nameVi}
            </span>
          </div>
          <h3
            style={{
              fontFamily: "'Montserrat', 'Be Vietnam Pro', sans-serif",
              fontSize: "26px",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "8px",
              lineHeight: 1.3,
            }}
          >
            {product.name}
          </h3>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              color: "#64748b",
              lineHeight: 1.5,
            }}
          >
            {product.shortDesc}
          </p>
          {/* Rating */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "10px" }}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                fill={i < Math.floor(product.rating) ? "#fbbf24" : "none"}
                color="#fbbf24"
              />
            ))}
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", marginLeft: "4px" }}>
              {product.rating}
            </span>
          </div>
        </div>

        {/* ── LAYER 2: Hover reveal panel ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "24px",
            background: hovered
              ? `linear-gradient(180deg, rgba(0,8,25,0.1) 0%, rgba(0,8,25,0.98) 35%)`
              : "transparent",
            transform: hovered ? "translateY(0)" : "translateY(100%)",
            transition: "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.4s ease",
          }}
        >
          {/* Icon + name */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "12px",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.4s ease 0.1s",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: `${product.accentColor}22`,
                border: `1px solid ${product.accentColor}55`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon size={18} color={product.accentColor} />
            </div>
            <div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: product.accentColor, fontWeight: 600, letterSpacing: "1px" }}>
                {product.nameVi}
              </div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "22px", fontWeight: 800, color: "#fff", lineHeight: 1 }}>
                {product.name}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              width: hovered ? "100%" : "0%",
              height: "1px",
              background: `linear-gradient(90deg, ${product.accentColor}, transparent)`,
              transition: "width 0.5s ease 0.2s",
              marginBottom: "14px",
            }}
          />

          {/* Features list */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 16px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {product.features.map((feat, fi) => (
              <li
                key={fi}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  opacity: hovered ? 1 : 0,
                  transform: hovered ? "translateX(0)" : "translateX(-16px)",
                  transition: `all 0.35s ease ${0.15 + fi * 0.07}s`,
                }}
              >
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: `${product.accentColor}22`,
                    border: `1px solid ${product.accentColor}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "1px",
                  }}
                >
                  <Check size={9} color={product.accentColor} strokeWidth={3} />
                </div>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12.5px",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: 1.5,
                    fontWeight: 300,
                  }}
                >
                  {feat}
                </span>
              </li>
            ))}
          </ul>

          {/* Spec badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "4px",
              padding: "6px 12px",
              marginBottom: "16px",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.4s ease 0.5s",
            }}
          >
            <Eye size={12} color="rgba(255,255,255,0.5)" />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>
              {product.spec}
            </span>
          </div>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.4s ease 0.5s",
            }}
          >
            <a
              href="tel:0947707616"
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                background: "linear-gradient(135deg, #e60012, #b5000e)",
                color: "#fff",
                padding: "11px 16px",
                borderRadius: "6px",
                textDecoration: "none",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.5px",
                boxShadow: "0 6px 20px rgba(230,0,18,0.4)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 10px 28px rgba(230,0,18,0.55)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 20px rgba(230,0,18,0.4)";
              }}
            >
              <Phone size={13} />
              Báo Giá
            </a>
            <a
              href="#products"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
                padding: "11px 16px",
                borderRadius: "6px",
                textDecoration: "none",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.5px",
                transition: "all 0.2s ease",
                backdropFilter: "blur(4px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.18)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
              }}
            >
              Chi Tiết <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* Shimmer light effect on hover */}
        <div
          style={{
            position: "absolute",
            top: "-100%",
            left: "-60%",
            width: "50%",
            height: "300%",
            background: "linear-gradient(105deg, transparent, rgba(255,255,255,0.06), transparent)",
            transform: hovered ? "translateX(350%)" : "translateX(0)",
            transition: hovered ? "transform 0.8s ease" : "none",
            pointerEvents: "none",
            zIndex: 15,
          }}
        />
      </div>
    </div>
  );
}

export function ProductsSection() {
  const [filter, setFilter] = useState("ALL");
  const categories = ["ALL", "CHỐNG THẤM", "CÁCH NHIỆT", "NỘI THẤT", "NGOẠI THẤT"];

  const filtered = filter === "ALL" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section
      id="products"
      style={{
        background: "#f0f4f8",
        padding: "100px 0 120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle top wave */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "6px",
          background: "linear-gradient(90deg, #001235, #0055cc, #e60012, #0055cc, #001235)",
        }}
      />

      <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "0 40px" }}>
        {/* Section header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "48px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "36px", height: "2px", background: "#e60012" }} />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#e60012",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                }}
              >
                Sản Phẩm Nổi Bật
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Montserrat', 'Be Vietnam Pro', sans-serif",
                fontSize: "52px",
                fontWeight: 800,
                color: "#001235",
                lineHeight: 1.3,
                letterSpacing: "-0.5px",
              }}
            >
              Dòng Sản Phẩm
              <br />
              <span style={{ color: "#0055cc" }}>FUJINANO</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  padding: "8px 18px",
                  borderRadius: "50px",
                  border: filter === cat ? "none" : "1.5px solid rgba(0,18,53,0.2)",
                  background: filter === cat ? "linear-gradient(135deg, #001235, #002060)" : "transparent",
                  color: filter === cat ? "#fff" : "#4a5568",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: filter === cat ? "0 4px 16px rgba(0,18,53,0.3)" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <a
            href="tel:0947707616"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "#fff",
              padding: "16px 44px",
              background: "linear-gradient(135deg, #001235, #002a6e)",
              borderRadius: "50px",
              textDecoration: "none",
              boxShadow: "0 8px 30px rgba(0,18,53,0.35)",
              transition: "all 0.25s ease",
              border: "1px solid rgba(0,85,204,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 16px 40px rgba(0,18,53,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 30px rgba(0,18,53,0.35)";
            }}
          >
            <Phone size={16} />
            Tư Vấn Miễn Phí: 0947.707.616
          </a>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              color: "#718096",
              marginTop: "12px",
              fontWeight: 300,
            }}
          >
            Đội ngũ kỹ sư FUJINANO sẵn sàng tư vấn và báo giá miễn phí cho công trình của bạn
          </p>
        </div>
      </div>
    </section>
  );
}
