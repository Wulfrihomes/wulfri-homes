import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (window.fbq) {
      window.fbq("track", "PageView");

      // Remove after testing
      console.log("Meta PageView:", window.location.href);
    }
  }, [pathname]);

  return null;
};