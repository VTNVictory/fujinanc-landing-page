import { Check, ArrowRight } from "lucide-react";

const products = [
  {
    name: "FUJINANO WaterShield Pro",
    category: "Chống Thấm Cao Cấp",
    tagline: "Bảo Vệ Tối Ưu Nội & Ngoại Thất",
    price: "Liên hệ báo giá",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=500&fit=crop&auto=format",
    imageAlt: "Premium white paint can",
    badge: "BÁN CHẠY",
    badgeColor: "#e60012",
    features: [
      "Chống thấm 100% theo tiêu chuẩn Nhật",
      "Chống rêu mốc lên đến 10 năm",
      "Bền dưới điều kiện thời tiết khắc nghiệt",
      "Gốc nước, thân thiện môi trường",
    ],
  },
  {
    name: "FUJINANO ThermoShield Elite",
    category: "Cách Nhiệt Phản Xạ",
    tagline: "Giảm Nhiệt Độ, Tiết Kiệm Điện",
    price: "Liên hệ báo giá",
    image: "https://images.unsplash.com/photo-1622467827417-bbe2237067a9?w=600&h=500&fit=crop&auto=format",
    imageAlt: "Blue premium paint can",
    badge: "MỚI",
    badgeColor: "#0066cc",
    features: [
      "Phản xạ 85% nhiệt lượng mặt trời",
      "Giảm nhiệt độ bề mặt 15–20°C",
      "Tiết kiệm chi phí điều hòa 30%",
      "Hiệu quả bền vững 8–12 năm",
    ],
  },
  {
    name: "FUJINANO NanoColor Ultra",
    category: "Sơn Nội Thất Kháng Khuẩn",
    tagline: "Màu Sắc Bền Đẹp, Không Gian Khỏe Mạnh",
    price: "Liên hệ báo giá",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=500&fit=crop&auto=format",
    imageAlt: "Color paint samples and can",
    badge: "PHỔ BIẾN",
    badgeColor: "#003366",
    features: [
      "1000+ màu sắc phong phú theo NCS/RAL",
      "Kháng khuẩn 99.9% ion bạc hoạt tính",
      "Không mùi, an toàn cho trẻ em & thai phụ",
      "Bền màu chống UV 15+ năm",
    ],
  },
];

export function FeaturedProducts() {
  return (
    <section
      id="products"
      style={{
        background: "#f4f7f6",
        padding: "100px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background diagonal stripe */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "240px",
          background: "linear-gradient(180deg, transparent, rgba(0,51,102,0.04))",
        }}
      />

      <div style={{ maxWidth: "1344px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "1px", background: "#e60012" }} />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
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
                fontSize: "48px",
                fontWeight: 800,
                color: "#003366",
                letterSpacing: "-0.5px",
                lineHeight: 1.3,
              }}
            >
              Dòng Sản Phẩm Cao Cấp
            </h2>
          </div>
          <a
            href="#products"
            style={{
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "#0066cc",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              letterSpacing: "0.5px",
              borderBottom: "1px solid rgba(0, 102, 204, 0.3)",
              paddingBottom: "2px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "#0066cc")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0, 102, 204, 0.3)")}
          >
            Xem Tất Cả <ArrowRight size={14} />
          </a>
        </div>

        {/* 3-column product grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0, 51, 102, 0.08)",
                border: "1px solid rgba(0, 51, 102, 0.08)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 24px 60px rgba(0, 51, 102, 0.16)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0, 51, 102, 0.08)";
              }}
            >
              {/* Image area */}
              <div style={{ position: "relative", height: "240px", background: "#e8edf5", overflow: "hidden" }}>
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 50%, rgba(0,20,60,0.4))",
                  }}
                />

                {/* Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    background: product.badgeColor,
                    color: "#021230",
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    padding: "4px 12px",
                    borderRadius: "2px",
                  }}
                >
                  {product.badge}
                </div>

                {/* Category chip */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    background: "rgba(0, 10, 30, 0.7)",
                    backdropFilter: "blur(8px)",
                    color: "#334155",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    padding: "4px 12px",
                    borderRadius: "20px",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "28px" }}>
                <h3
                  style={{
                    fontFamily: "'Be Vietnam Pro', sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#003366",
                    marginBottom: "6px",
                    lineHeight: 1.2,
                  }}
                >
                  {product.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    color: "#4a5568",
                    marginBottom: "20px",
                    fontWeight: 300,
                  }}
                >
                  {product.tagline}
                </p>

                {/* Feature checklist */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {product.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <div
                        style={{
                          width: "18px",
                          height: "18px",
                          borderRadius: "50%",
                          background: "rgba(0, 102, 204, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "1px",
                        }}
                      >
                        <Check size={11} color="#0066cc" strokeWidth={3} />
                      </div>
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "13px",
                          color: "#4a5568",
                          lineHeight: 1.5,
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Price + CTA row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "20px",
                    borderTop: "1px solid rgba(0, 51, 102, 0.08)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Be Vietnam Pro', sans-serif",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#003366",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {product.price}
                  </span>
                  <a
                    href="tel:0947707616"
                    style={{
                      fontFamily: "'Be Vietnam Pro', sans-serif",
                      fontSize: "13px",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                      color: "#021230",
                      textDecoration: "none",
                      background: "linear-gradient(135deg, #e60012, #c4000f)",
                      padding: "8px 20px",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "all 0.2s ease",
                      boxShadow: "0 3px 12px rgba(230, 0, 18, 0.25)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 20px rgba(230, 0, 18, 0.4)";
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 3px 12px rgba(230, 0, 18, 0.25)";
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                    }}
                  >
                    Xem Chi Tiết <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
