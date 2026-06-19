export interface VideoItem {
  slug: string;
  title: string;
  thumbnail: string;
  duration: string;
  description?: string;
  // Nếu có YouTube embed ID thì điền vào đây
  youtubeId?: string;
}

export const VIDEOS: VideoItem[] = [
  {
    slug: "thi-cong-son-san-epoxy-nha-may-dien-tu",
    title: "Thi công sơn sàn Epoxy nhà máy điện tử",
    thumbnail:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    duration: "03:45",
    description:
      "Video ghi lại toàn bộ quy trình thi công sơn sàn Epoxy tại nhà máy sản xuất điện tử — từ bước mài sàn, xử lý bề mặt đến phủ lớp hoàn thiện chống tĩnh điện. Công trình hoàn thành sau 3 ngày thi công liên tục.",
  },
  {
    slug: "phu-pu-chong-tham-tang-ham-chung-cu",
    title: "Phủ PU chống thấm tầng hầm chung cư",
    thumbnail:
      "https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&w=1200&q=80",
    duration: "02:20",
    description:
      "Quy trình phủ Polyurethane (PU) chống thấm cho tầng hầm một tòa chung cư cao tầng tại TP. Cần Thơ. Hệ sơn PU 2 thành phần đạt tiêu chuẩn chống thấm cấp độ 4, bảo hành 5 năm.",
  },
  {
    slug: "son-epoxy-chong-tinh-dien-phong-sach",
    title: "Sơn Epoxy chống tĩnh điện phòng sạch",
    thumbnail:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80",
    duration: "04:15",
    description:
      "Thi công sơn sàn Epoxy chống tĩnh điện (ESD) cho phòng sạch cấp ISO 7 của nhà máy sản xuất thiết bị y tế. Hệ sơn đạt điện trở bề mặt < 10⁹ Ω theo tiêu chuẩn ANSI/ESD S20.20.",
  },
];

export function getVideoBySlug(slug: string): VideoItem | undefined {
  return VIDEOS.find((v) => v.slug === slug);
}
