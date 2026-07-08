import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { lock, hamburgerMenu, close } from '../assets';
import { Link } from 'react-router-dom';

// Accept 'theme' as a prop and set 'dark' as the default value
const Navbar = ({ theme = 'dark' }) => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('');

  // ----------------------------------------------------
  // THEME COLOR DEFINITIONS (Based on the 'theme' prop)
  // ----------------------------------------------------
  // These variables hold the Tailwind classes for flexibility
  const isDark = theme === 'dark';

  const themeColors = {
    logoText: isDark ? 'text-[#212121]' : 'text-white', // Dark theme has dark logo text, Light theme has white
    navText: isDark ? 'text-gray-500' : 'text-gray-300',
    navTextActive: isDark ? 'text-black' : 'text-white',
    // Background when scrolled: White for Dark theme, Dark/Black for Light theme
    scrolledBg: isDark ? 'bg-white shadow-lg' : 'bg-black shadow-lg',
    // Mobile menu background and border
    mobileBg: isDark ? 'bg-white border-b' : 'bg-gray-900 border-gray-700 border-b',
    // Mobile menu text color
    mobileText: isDark ? 'text-black' : 'text-white',
    // Hamburger/Close icon based on theme
    icon: isDark ? hamburgerMenu : close, // Assuming 'close' and 'hamburgerMenu' are imported assets
    
    // Note: The mobile menu uses white for background in the dark theme
    // and a dark color in the light theme for contrast against the main content.
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Parse the current route to determine the active menu item
    const pathname = location.pathname;
    let activeMenu = '';
    if (pathname === '/') {
      activeMenu = 'Home';
    } else if (pathname === '/about') {
      activeMenu = 'About';
    } else if (pathname === '/templates') {
      activeMenu = 'Templates';
    }
    setActiveMenu(activeMenu);
  }, [location.pathname]);

  // Use the theme colors defined above
  return (
    <div
      className={`py-5 w-full h-[120px] bg-transparent fixed z-20 top-0 left-0 transition-all duration-300 ${
        isScrolled ? themeColors.scrolledBg : ''
      }`}
    >
      <div className="container h-full flex justify-between items-center px-5">
        {/* LOGO */}
        <Link 
          to="/" 
          className={`font-circular text-2xl hover:cursor-pointer ${themeColors.logoText}`}
        >
          HustleCrowd
        </Link>

        {/* DESKTOP MENU LINKS */}
        <div className="hidden md:flex items-center font-circular">
          <ul className="flex gap-8">
            <li>
              <a 
                href="/" 
                className={activeMenu === 'Home' ? themeColors.navTextActive : themeColors.navText}
              >
                Home
              </a>
            </li>
            {/* <li><a href="/templates" className={activeMenu === 'Templates' ? themeColors.navTextActive : themeColors.navText}>Free templates</a></li> */}
            {/* <li>
              <a 
                href="/about" 
                className={activeMenu === 'About' ? themeColors.navTextActive : themeColors.navText}
              >
                About Us
              </a>
            </li> */}
          </ul>
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex">
          <button className="px-8 py-3 rounded-[100px] bg-[#8800ff] text-white font-circular">
            Contact Us
          </button>
        </div>

        {/* MOBILE HAMBURGER ICON */}
        <div className="md:hidden pr-4" onClick={() => setToggle(!toggle)}>
          {/* Note: If the actual image assets (hamburgerMenu/close) are color-specific, 
              you may need to change the image source based on the theme as well. 
              Here we just use the original hamburgerMenu/close for simplicity. */}
          <img 
            src={toggle ? close : hamburgerMenu} 
            alt="Menu Icon" 
            className={isDark ? 'filter-none' : 'filter invert'} // Example: invert icon color for light theme
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      <div 
        className={toggle ? `absolute z-10 p-4 w-full px-6 md:hidden ${themeColors.mobileBg}` : 'hidden'}
      >
        <ul className={`${themeColors.mobileText}`}>
          <li className={`py-4 px-2 hover:bg-gray-100 ${activeMenu === 'Home' ? 'bg-gray-200' : ''}`}><a href="/">Home</a></li>
          <li className={`py-4 px-2 hover:bg-gray-100 ${activeMenu === 'Templates' ? 'bg-gray-200' : ''}`}><a href="/templates">Templates</a></li>
          {/* <li className={`py-4 px-2 hover:bg-gray-100 ${activeMenu === 'About Us' ? 'bg-gray-200' : ''}`}><a href="/about">About Us</a></li> */}
          <div className="flex flex-col my-4 gap-4">
            <button className="px-8 py-5 rounded-md bg-[#20B486] text-white font-medium">
              Contact Us
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;