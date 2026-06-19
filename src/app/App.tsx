import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { HeroSlider } from "./components/HeroSlider";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { BrandsSection } from "./components/BrandsSection";
import { CertificatesSection } from "./components/CertificatesSection";
import { QuoteForm } from "./components/QuoteForm";
import { BlogSection } from "./components/BlogSection";
import { BlogDetailPage } from "./components/BlogDetailPage";
import { Footer } from "./components/Footer";
import { ClientsSection } from "./components/ClientsSection";
import { VideoSection } from "./components/VideoSection";
import { Routes, Route } from "react-router";
import { ScrollToTop } from "./components/ScrollToTop";
import { VideoDetailPage } from "./components/VideoDetailPage";
import { PortfolioDetailPage } from "./components/PortfolioDetailPage";

function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <BrandsSection />
      <ClientsSection />
      <CertificatesSection />
      <QuoteForm />
    </>
  );
}

function VideoPage() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <VideoSection />
    </div>
  );
}

function BlogPage() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <BlogSection />
    </div>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; font-size: 16px; }
        body { background-color: #001A5C; color: #fff; }
        a { text-decoration: none; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #001A5C; }
        ::-webkit-scrollbar-thumb { background: #0055cc; border-radius: 3px; }
        input, select, button { font-family: inherit; }

        .global-bg {
          position: fixed;
          inset: 0;
          z-index: -10;
          background: radial-gradient(circle at 50% 0%, #0044AA 0%, #001A5C 40%, #000E3A 100%);
          pointer-events: none;
        }
        .hex-pattern {
          position: fixed;
          inset: 0;
          z-index: -9;
          pointer-events: none;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='103.923' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 103.923L0 86.603V51.962l30-17.32 30 17.32v34.641l-30 17.32zM30 0L0 17.32v34.642L30 69.282l30-17.32V17.32L30 0z' fill='none' stroke='%23ffffff' stroke-width='1.5'/%3E%3C/svg%3E");
          background-size: 60px 103.923px;
        }
        .metallic-border {
          border: 1.5px solid transparent;
          background: 
            linear-gradient(rgba(0, 20, 70, 0.75), rgba(0, 20, 70, 0.75)) padding-box,
            linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.05) 20%, rgba(0,85,204,0.4) 50%, rgba(255,255,255,0.05) 80%, rgba(255,255,255,0.6) 100%) border-box;
        }

        @media (max-width: 960px) {
          .grid-3 { grid-template-columns: repeat(2,1fr) !important; }
          .grid-4 { grid-template-columns: repeat(2,1fr) !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
          .grid-footer { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-4 { grid-template-columns: 1fr 1fr !important; }
          .grid-footer { grid-template-columns: 1fr !important; }
        }
        @keyframes orbMove1 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(50px, 100px) scale(1.2); }
        }
        @keyframes orbMove2 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-80px, -50px) scale(1.1); }
        }
      `}</style>

      <div className="global-bg" />
      <div className="hex-pattern" />

      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/du-an/:slug" element={<PortfolioDetailPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/video/:slug" element={<VideoDetailPage />} />
        <Route path="/tin-tuc" element={<BlogPage />} />
        <Route path="/tin-tuc/:slug" element={<BlogDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}


