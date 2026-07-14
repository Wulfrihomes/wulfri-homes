import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (window.fbq) {
      window.fbq("track", "PageView");

      console.log(
        "Meta PageView",
        window.location.pathname,
        window.location.href
      );
    }
  }, [location]);

  return null;
};