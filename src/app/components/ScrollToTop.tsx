import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Tự động cuộn lên đầu trang mỗi khi route thay đổi.
 * Đặt component này bên trong <BrowserRouter> ở App.tsx.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Đợi DOM render xong rồi cuộn tới element
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}
