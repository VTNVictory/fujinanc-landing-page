import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Tự động cuộn lên đầu trang mỗi khi route thay đổi.
 * Đặt component này bên trong <BrowserRouter> ở App.tsx.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
