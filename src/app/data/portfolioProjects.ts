export interface PortfolioProject {
  slug: string;
  img: string;
  client: string;
  title: string;
  location: string;
  area: string;
  service: string;
  serviceColor: string;
  span: number;
  // SEO detailed fields
  challenge?: string;
  solution?: string;
  result?: string;
  gallery?: string[];
  completionDate?: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "son-epoxy-nha-ga-vietjet",
    img: "https://images.unsplash.com/photo-1772209415876-76ea6cbc2f0c?w=800&h=560&fit=crop&auto=format",
    client: "Vietjet Air",
    title: "Sơn Epoxy Nhà Ga Bảo Dưỡng",
    location: "Nội Bài, Hà Nội",
    area: "18.000 m²",
    service: "Epoxy Tự San Phẳng",
    serviceColor: "#0055cc",
    span: 2,
    completionDate: "Tháng 12, 2024",
    challenge: "Nhà ga bảo dưỡng máy bay yêu cầu bề mặt sàn phải chịu được tải trọng cực lớn từ máy bay, đồng thời phải kháng lại các loại hóa chất xăng dầu hàng không đặc chủng (Skydrol). Đặc biệt, tiến độ thi công phải cực kỳ gấp rút để không làm gián đoạn hoạt động khai thác của hãng bay.",
    solution: "FUJINANO đã đề xuất sử dụng hệ sơn Epoxy tự san phẳng chuyên dụng cho hangar hàng không với độ dày 3mm. Đội ngũ thi công được huy động chia làm 3 ca làm việc liên tục 24/7. Chúng tôi áp dụng máy mài sàn công nghiệp cỡ lớn để xử lý bề mặt bám dính tốt nhất.",
    result: "Dự án hoàn thành vượt tiến độ 2 ngày. Bề mặt sàn đạt độ phẳng hoàn hảo, độ bóng cao giúp tăng cường ánh sáng trong nhà chứa. Chủ đầu tư đánh giá rất cao về năng lực và sự chuyên nghiệp của đội ngũ FUJINANO.",
    gallery: [
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format",
    ],
  },
  {
    slug: "son-san-nha-may-thuc-pham-chinsu",
    img: "https://images.unsplash.com/photo-1771531072574-af6ed6b954c0?w=560&h=560&fit=crop&auto=format",
    client: "Chin-su Food",
    title: "Sơn Sàn Nhà Máy Thực Phẩm",
    location: "Bình Dương",
    area: "12.000 m²",
    service: "Epoxy Chống Vi Khuẩn",
    serviceColor: "#00aa55",
    span: 1,
    completionDate: "Tháng 8, 2024",
    challenge: "Môi trường sản xuất thực phẩm đòi hỏi tiêu chuẩn vệ sinh an toàn khắt khe (HACCP/ISO 22000). Sàn thường xuyên ẩm ướt và chịu tác động của hóa chất tẩy rửa mạnh.",
    solution: "Sử dụng sơn sàn Polyurethane (PU) cao cấp, kháng khuẩn và chịu sốc nhiệt tuyệt vời. Thiết kế hệ thống rãnh thoát nước và tạo độ dốc tiêu chuẩn.",
    result: "Sàn xưởng không bám bụi, dễ dàng vệ sinh. Đạt 100% tiêu chuẩn kiểm định an toàn thực phẩm.",
  },
  {
    slug: "san-xuong-lap-rap-o-to-isuzu",
    img: "https://images.unsplash.com/photo-1772305595483-6b058aff40f9?w=560&h=560&fit=crop&auto=format",
    client: "Isuzu Việt Nam",
    title: "Sàn Xưởng Lắp Ráp Ô Tô",
    location: "Long Biên, Hà Nội",
    area: "8.500 m²",
    service: "Epoxy Chống Trượt",
    serviceColor: "#0055cc",
    span: 1,
  },
  {
    slug: "son-ngoai-that-chung-cu-cantavil",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=560&h=420&fit=crop&auto=format",
    client: "Cantavil Hoàn Cầu",
    title: "Sơn Ngoại Thất Chung Cư Cao Cấp",
    location: "TP. Hồ Chí Minh",
    area: "22.000 m²",
    service: "Sơn Ngoại Thất",
    serviceColor: "#e60012",
    span: 1,
  },
  {
    slug: "ke-vach-kcn-tra-noc",
    img: "https://images.unsplash.com/photo-1669674309145-52b17350b769?w=560&h=420&fit=crop&auto=format",
    client: "KCN Trà Nóc",
    title: "Kẻ Vạch Toàn Bộ Khu Công Nghiệp",
    location: "Cần Thơ",
    area: "35.000 m²",
    service: "Sơn Giao Thông",
    serviceColor: "#ff8800",
    span: 1,
  },
  {
    slug: "san-the-thao-da-nang-quan-7",
    img: "https://images.unsplash.com/photo-1780221841229-ec9922aee812?w=800&h=420&fit=crop&auto=format",
    client: "Trung Tâm TDTT Quận 7",
    title: "Sân Thể Thao Đa Năng",
    location: "TP. Hồ Chí Minh",
    area: "3.200 m²",
    service: "Sơn Sân Thể Thao",
    serviceColor: "#00aa55",
    span: 2,
    completionDate: "Tháng 3, 2024",
    challenge: "Cải tạo bề mặt sân đã xuống cấp, thi công lớp sơn phủ mới đảm bảo tiêu chuẩn thi đấu quốc tế với khả năng chống trơn trượt tối ưu.",
    solution: "Sử dụng hệ sơn thể thao Acrylic 5 lớp chuẩn quốc tế, đàn hồi cao, giảm chấn tốt giúp bảo vệ vận động viên.",
    result: "Sân thể thao hoàn thiện với màu sắc chuẩn, độ nảy bóng tuyệt vời, được vận động viên và ban quản lý đánh giá cao.",
  },
];
