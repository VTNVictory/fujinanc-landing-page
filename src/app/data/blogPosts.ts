export interface BlogPost {
  slug: string;
  img: string;
  tag: string;
  tagColor: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content?: string; // nội dung đầy đủ (HTML hoặc text)
}

export const POSTS: BlogPost[] = [
  {
    slug: "son-expoxy-ket-cau",
    img: "https://images.unsplash.com/photo-1772209415876-76ea6cbc2f0c?w=1200&h=600&fit=crop&auto=format",
    tag: "Epoxy",
    tagColor: "#0055cc",
    title: "Sơn Epoxy Kết Cấu Thép Là Gì? Khi Nào Cần Dùng?",
    excerpt:
      "Tìm hiểu về hệ sơn Epoxy cho kết cấu thép — loại vật liệu nào phù hợp, quy trình chuẩn và chi phí ước tính cho công trình của bạn.",
    date: "12 Tháng 6, 2025",
    readTime: "5 phút đọc",
    content: `
      <p>Sơn Epoxy kết cấu thép là hệ sơn bảo vệ chuyên dụng được thiết kế để chống ăn mòn, chống rỉ sét và tăng tuổi thọ cho các kết cấu thép trong công trình xây dựng, nhà máy và công nghiệp.</p>
      <h2>1. Sơn Epoxy Kết Cấu Thép Là Gì?</h2>
      <p>Đây là hệ sơn 2 thành phần (sơn lót + sơn phủ), khi trộn lẫn sẽ tạo ra phản ứng hóa học tạo nên lớp màng cứng chắc, bám dính tốt vào bề mặt kim loại. Hệ sơn này có khả năng chống ăn mòn vượt trội so với sơn alkyd thông thường.</p>
      <h2>2. Khi Nào Cần Dùng Sơn Epoxy?</h2>
      <ul>
        <li>Kết cấu thép nhà xưởng, nhà máy công nghiệp</li>
        <li>Cầu thang, lan can, hàng rào thép</li>
        <li>Bồn chứa, đường ống, thiết bị ngoài trời</li>
        <li>Môi trường ăn mòn cao: gần biển, hóa chất, độ ẩm lớn</li>
      </ul>
      <h2>3. Quy Trình Thi Công Chuẩn</h2>
      <p><strong>Bước 1:</strong> Làm sạch bề mặt — Phun cát (Sa2.5) hoặc đánh sạch gỉ sét cơ học đạt St3.</p>
      <p><strong>Bước 2:</strong> Sơn lót Epoxy — 1–2 lớp, độ dày khô 40–60 µm/lớp.</p>
      <p><strong>Bước 3:</strong> Sơn phủ Polyurethane hoặc Epoxy phủ — 1–2 lớp, chống tia UV và chịu thời tiết.</p>
      <h2>4. Chi Phí Ước Tính</h2>
      <p>Chi phí thi công sơn Epoxy kết cấu thép dao động từ <strong>35.000 – 85.000 VNĐ/m²</strong> tùy thuộc vào số lớp sơn, mức độ chuẩn bị bề mặt và loại sơn sử dụng.</p>
      <p>Hãy liên hệ với chúng tôi để nhận báo giá chi tiết và tư vấn miễn phí cho dự án của bạn.</p>
    `,
  },
  {
    slug: "quy-trinh-mai-san-be-tong",
    img: "https://images.unsplash.com/photo-1771530789155-b1f03fbf82b5?w=1200&h=600&fit=crop&auto=format",
    tag: "Nhà Xưởng",
    tagColor: "#e60012",
    title: "Quy Trình Mài Sàn Bê Tông Đúng Chuẩn Trước Khi Sơn",
    excerpt:
      "Mài sàn là bước quan trọng quyết định độ bám của lớp sơn. Bỏ qua bước này là nguyên nhân hàng đầu khiến sơn bong tróc sớm.",
    date: "8 Tháng 6, 2025",
    readTime: "7 phút đọc",
    content: `
      <p>Mài sàn bê tông là công đoạn chuẩn bị bề mặt không thể bỏ qua trước khi thi công sơn Epoxy hoặc sơn sàn công nghiệp. Đây là yếu tố quyết định đến 70% độ bền của lớp sơn.</p>
      <h2>1. Tại Sao Phải Mài Sàn?</h2>
      <p>Bề mặt bê tông thường có lớp "xi măng trắng" (laitance) mỏng trên cùng, rất yếu và không bám dính. Nếu không mài bỏ lớp này, sơn sẽ bong tróc chỉ sau vài tháng dù chất lượng sơn tốt đến đâu.</p>
      <h2>2. Các Phương Pháp Mài Sàn</h2>
      <ul>
        <li><strong>Mài khô (Diamond Grinding):</strong> Phổ biến nhất, dùng đĩa mài kim cương. Phù hợp cho sàn phẳng, diện tích lớn.</li>
        <li><strong>Phun bi (Shot Blasting):</strong> Tạo độ nhám sâu hơn, phù hợp cho sàn cần sơn dày hoặc lớp phủ tự san phẳng.</li>
        <li><strong>Axit (Acid Etching):</strong> Ít dùng, chỉ áp dụng khi không có thiết bị cơ học.</li>
      </ul>
      <h2>3. Độ Nhám Yêu Cầu (CSP)</h2>
      <p>Mức độ nhám bề mặt được đánh giá theo thang CSP (Concrete Surface Profile) từ 1–9. Thông thường:</p>
      <ul>
        <li>Sơn phủ mỏng (< 250 µm): CSP 1–2</li>
        <li>Sơn tự san phẳng (250–500 µm): CSP 3–4</li>
        <li>Phủ dày hoặc mortar Epoxy: CSP 5–6</li>
      </ul>
      <h2>4. Kiểm Tra Bề Mặt Sau Mài</h2>
      <p>Sau khi mài xong, cần kiểm tra: độ ẩm < 5% (dùng máy đo), không còn dầu mỡ, bụi bẩn, và đạt mức nhám yêu cầu. Thi công ngay sau khi bề mặt đã sạch và khô.</p>
    `,
  },
  {
    slug: "so-sanh-son-nuoc-nippon-jotun-dulux",
    img: "https://images.unsplash.com/photo-1693985120993-e9b203ce7631?w=1200&h=600&fit=crop&auto=format",
    tag: "Tư Vấn",
    tagColor: "#00aa55",
    title: "So Sánh Sơn Nước Nippon, Jotun và Dulux: Loại Nào Tốt Nhất?",
    excerpt:
      "Đánh giá khách quan 3 thương hiệu sơn nước phổ biến nhất tại Việt Nam — giá cả, chất lượng và phù hợp với từng loại công trình.",
    date: "3 Tháng 6, 2025",
    readTime: "6 phút đọc",
    content: `
      <p>Nippon, Jotun và Dulux là 3 thương hiệu sơn nước được tin dùng phổ biến nhất tại thị trường Việt Nam. Mỗi hãng có điểm mạnh riêng phù hợp với từng loại công trình và ngân sách khác nhau.</p>
      <h2>1. Nippon Paint</h2>
      <p><strong>Xuất xứ:</strong> Nhật Bản | <strong>Phân khúc:</strong> Trung – Cao cấp</p>
      <p>Nippon nổi bật với công nghệ chống nấm mốc, độ bền màu cao và dải màu phong phú. Dòng Odour-less được nhiều gia đình ưa chuộng vì không mùi, an toàn cho trẻ em.</p>
      <ul>
        <li>✅ Kháng nấm tốt, phù hợp khí hậu nhiệt đới ẩm</li>
        <li>✅ Màu sắc đa dạng, mã màu chuẩn</li>
        <li>❌ Giá cao hơn một số đối thủ</li>
      </ul>
      <h2>2. Jotun</h2>
      <p><strong>Xuất xứ:</strong> Na Uy | <strong>Phân khúc:</strong> Cao cấp – Công nghiệp</p>
      <p>Jotun được đánh giá cao về độ bền thời tiết, đặc biệt trong môi trường biển và công nghiệp. Dòng Jotashield rất phổ biến cho ngoại thất công trình lớn.</p>
      <ul>
        <li>✅ Chịu thời tiết, kháng UV xuất sắc</li>
        <li>✅ Lý tưởng cho công trình gần biển</li>
        <li>❌ Ít lựa chọn màu hơn Nippon/Dulux</li>
      </ul>
      <h2>3. Dulux (AkzoNobel)</h2>
      <p><strong>Xuất xứ:</strong> Anh | <strong>Phân khúc:</strong> Trung – Cao cấp</p>
      <p>Dulux nổi bật với công nghệ màu Ambiance và hệ thống pha màu chính xác. Phù hợp cho nội thất cao cấp, showroom, căn hộ.</p>
      <ul>
        <li>✅ Màu sắc đẹp, độ phủ tốt</li>
        <li>✅ Hệ thống pha màu chuẩn xác</li>
        <li>❌ Giá cao, ít điểm phân phối hơn</li>
      </ul>
      <h2>Kết Luận</h2>
      <p>Không có hãng nào "tốt nhất" tuyệt đối — tùy công trình mà chọn: Nippon cho nhà ở phổ thông, Jotun cho công trình lớn/ven biển, Dulux cho nội thất cao cấp. Liên hệ chúng tôi để được tư vấn cụ thể!</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
