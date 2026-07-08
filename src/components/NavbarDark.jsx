import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

// Accept 'theme' as a prop and set 'dark' as the default value
const Navbar2 = ({ theme = 'dark' }) => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  // ----------------------------------------------------
  // THEME COLOR DEFINITIONS
  // ----------------------------------------------------
  const isDark = theme === 'dark';

  // Defines the color classes based on the theme prop
  const themeClasses = {
    logoText: isDark ? 'text-white' : 'text-[#212121]',
    navText: isDark ? 'text-white text-opacity-70' : 'text-[#212121] text-opacity-70',
    navTextHover: isDark ? 'hover:text-white' : 'hover:text-black',
    navTextActive: isDark ? 'text-white' : 'text-[#212121]',
    iconColor: isDark ? 'text-white' : 'text-[#212121]',
    mobileBg: isDark ? 'bg-[#2B2D2E] border-gray-700' : 'bg-white border-gray-200',
    mobileText: isDark ? 'text-white' : 'text-[#212121]',
    mobileHover: isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100',
  };

  const scrollTo = (section) => {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    setToggle(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Triggers after 20px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    // { name: 'Services', path: '/#services' },
    // { name: 'Tools', path: '/tools' },
    // { name: 'About Us', path: '/about-us' },
  ];

  // ----------------------------------------------------
  // GLASS BUBBLE EFFECT — only this section was changed
  // Before scroll : fully transparent, no shadow
  // After scroll  : frosted glass using backdrop-blur + 
  //                 semi-transparent bg matched to theme
  // ----------------------------------------------------
  const glassBubbleClasses = isScrolled
    ? isDark
      ? 'bg-[#2C2E2F]/70 backdrop-blur-md shadow-2xl py-4'   // dark glass
      : 'bg-white/80 backdrop-blur-md shadow-sm py-4'         // light glass
    : 'bg-transparent py-4';                                   // transparent default

  return (
    // OUTER CONTAINER: Full width bar with glassmorphism
    <div className={`fixed z-20 w-full transition-all duration-300 ${glassBubbleClasses}`}>

      {/* INNER CONTENT CONTAINER: Centered content with max-width */}
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        {/* LOGO - unchanged */}
        <a
          href="/"
          className={`flex items-center gap-2 font-circular text-lg hover:cursor-pointer ${themeClasses.logoText}`}
        >
          <img
            src="/images/logo.svg"
            alt="HustleCrowd Logo"
            className="h-7 w-auto"
          />
          <h3 className='leading-none font-circularBold'>
            HustleCrowd
          </h3>
        </a>

        {/* Desktop Navigation - unchanged */}
        <div className="hidden md:flex items-center font-circular">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className={`text-sm hover:cursor-pointer transition-colors duration-200 ${
                    activeMenu === item.name
                      ? themeClasses.navTextActive
                      : `${themeClasses.navText} ${themeClasses.navTextHover}`
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Button - unchanged */}
        <div className="hidden md:flex">
          <button
            onClick={() => scrollTo('contact')}
            className="px-5 py-2 text-sm rounded-full bg-[#8800ff] text-white font-circularBold whitespace-nowrap hover:bg-[#9a1aff] transition-colors"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button - unchanged */}
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <FiX className={`text-2xl cursor-pointer ${themeClasses.iconColor}`} />
          ) : (
            <FiMenu className={`text-2xl cursor-pointer ${themeClasses.iconColor}`} />
          )}
        </div>
      </div>

      {/* Mobile Menu Content - unchanged */}
      {toggle && (
        <div className={`md:hidden border-t mt-3 ${themeClasses.mobileBg}`}>
          <div className="max-w-6xl mx-auto px-6 py-4">
            <ul className={themeClasses.mobileText}>
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className={`py-3 px-2 text-sm font-circular ${themeClasses.mobileHover} rounded ${
                    activeMenu === item.name ? 'font-medium' : ''
                  }`}
                >
                  <a href={item.path} onClick={() => setToggle(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
              <div className="mt-4">
                <button
                  onClick={() => scrollTo('contact')}
                  className="w-full px-5 py-3 text-sm rounded-md bg-[#8800ff] text-white font-medium font-circular hover:bg-[#9a1aff] transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar2;