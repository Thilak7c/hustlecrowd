import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. If a hash exists (e.g., #services), try to scroll to that element.
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      // Use requestAnimationFrame to ensure the element is fully rendered before scrolling.
      // This is crucial for hash scrolling on page load.
      requestAnimationFrame(() => {
        if (element) {
          // You can still use smooth scrolling if desired, but 'auto' is faster for load.
          // We recommend using CSS scroll-padding-top for fixed header offset (as discussed earlier).
          element.scrollIntoView({ behavior: 'smooth' }); 
        } else {
          // If the element isn't found, scroll to the top of the page.
          window.scrollTo(0, 0);
        }
      });
      
    } else {
      // 2. If no hash exists, scroll the page to the top (0, 0).
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); 
  // Dependency array includes both pathname and hash to react to all relevant URL changes.

  return null;
};

export default ScrollToTop;