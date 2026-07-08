import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ theme = 'dark' }) => {
    
  // --- Define Colors based on Theme ---
  const isLight = theme === 'light';
  
  // Base Colors
  const bgColor = isLight ? 'bg-white' : 'bg-[#222124]';
  const logoColor = isLight ? 'text-gray-900' : 'text-white';
  const textColor = isLight ? 'text-gray-500' : 'text-white text-opacity-50';
  const headerColor = isLight ? 'text-gray-900' : 'text-white';
  const linkHoverColor = isLight ? 'hover:text-gray-700' : 'hover:text-opacity-75';
  
  // NavLink Component (Nested inside Footer for theme access)
  const NavLink = ({ link, label }) => (
    <li>
      <a
        href={link}
        // Apply conditional text color classes
        className={`inline-block mb-2 text-base leading-loose ${textColor} ${linkHoverColor}`}
      >
        {label}
      </a>
    </li>
  );

  // LinkGroup Component (Nested inside Footer for theme access)
  const LinkGroup = ({ children, header }) => (
    <div className="w-full md:w-auto pl-4 md:pl-0 mb-6 md:mb-0 min-w-[200px]">
      <h4 className={`text-lg font-semibold mb-4 ${headerColor}`}>{header}</h4>
      <ul>{children}</ul>
    </div>
  );
  // ------------------------------------


  return (
    <>
      <footer className={`relative z-10 ${bgColor} pt-10 pb-6 lg:pt-[120px] lg:pb-20 font-circular`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between md:items-start pl-4 md:pl-0 space-y-6 md:space-y-0">
            {/* Logo and Description */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 md:mb-0">
              <div className="w-full mb-6">
                <Link to="/" className={`mb-6 inline-block max-w-[160px] font-circular text-2xl font-bold ${logoColor} hover:cursor-pointer`}>
                  HustleCrowd
                </Link>
                <p className={`text-base mb-4 ${textColor}`}>
                  © {new Date().getFullYear()} Hustle Crowd Technology
                </p>
              </div>
            </div>

            {/* Link Groups */}
            <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col md:flex-row md:justify-end md:space-x-10">
              <LinkGroup header="Quick Links">
                {/* <NavLink link="/templates" label="Templates" /> */}
                <NavLink link="/tools" label="Tools" />
                <NavLink link="/projects" label="Projects" />
                {/* <NavLink link="/courses" label="Courses" /> */}
              </LinkGroup>
              <LinkGroup header="Company">
                <NavLink link="/#services" label="Services" />
                {/* <NavLink link="/about-us" label="About Us" /> */}
              </LinkGroup>
              <LinkGroup header="Resources">
                <NavLink link="/#" label="Terms & conditions" />
                <NavLink link="/#" label="Privacy" />
              </LinkGroup>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;