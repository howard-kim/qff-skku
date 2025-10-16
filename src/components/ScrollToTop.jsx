import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();
  useEffect(() => {
    // 라우트가 바뀔 때마다 최상단
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, search, hash]);
  return null;
}
