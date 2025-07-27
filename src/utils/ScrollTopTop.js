import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

let lastPathname = null;

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lastPathname === pathname) {
      // Same route re-clicked, still scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Different route, scroll to top as well
      window.scrollTo({ top: 0, behavior: 'smooth' });
      lastPathname = pathname;
    }
  }, [pathname]);

  return null;
}
