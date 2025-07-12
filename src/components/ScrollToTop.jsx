import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { lenis } from "../lenisInstance"; // import your Lenis instance

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Snappy scroll on route change
    const timeout = setTimeout(() => {
      lenis.scrollTo(0, {
        duration: 0.7,
        easing: (t) => t * (2 - t), // easeOutQuad
      });
    }, 50); // Small delay to allow DOM to mount

    return () => clearTimeout(timeout); 
  }, [pathname]);

  return null;
}
