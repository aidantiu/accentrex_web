import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full bg-white shadow-md relative">
      {/* MOBILE: Logo + Hamburger */}
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 py-4 md:hidden">
        <img
          src="./public/images/companylogo.png"
          alt="Accentex Logo"
          className="h-10"
        />
        <button
          className="text-3xl text-[#831515] z-20 relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE: Slide-out Menu */}
      <nav className={`
        md:hidden fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg z-10
        transform transition-transform duration-300 ease-in-out
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col pt-20 px-6 gap-2 text-gray-700 text-sm">
          <Link 
            to="/" 
            onClick={() => setMenuOpen(false)}
            className={`py-2 border-b hover:text-[#831515] ${
              location.pathname === '/' ? 'text-[#831515] font-semibold' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            onClick={() => setMenuOpen(false)}
            className={`py-2 border-b hover:text-[#831515] ${
              location.pathname === '/about' ? 'text-[#831515] font-semibold' : ''
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/services" 
            onClick={() => setMenuOpen(false)}
            className={`py-2 border-b hover:text-[#831515] ${
              location.pathname === '/services' ? 'text-[#831515] font-semibold' : ''
            }`}
          >
            Services
          </Link>
          <Link 
            to="/account" 
            onClick={() => setMenuOpen(false)}
            className={`py-2 border-b hover:text-[#831515] ${
              location.pathname === '/account' ? 'text-[#831515] font-semibold' : ''
            }`}
          >
            Account
          </Link>
        </div>
      </nav>

      {/* DESKTOP: Logo Centered + Nav Below */}
        <div className="hidden md:flex flex-col items-center w-full max-w-9xl mx-auto px-4 lg:px-20 py-4">
          <div className="flex justify-between w-full items-center gap-x-5">
            <img
              src="./public/images/companylogo.png"
              alt="Accentrex Logo"
              className="h-12"
            />

            {/* Nav Links */}
          <nav className="w-fit text-gray-600 flex gap-5 text-sm max-w-md items-center">
            <Link 
              to="/" 
              className={`hover:underline hover:text-[#831515] hover:underline-offset-10 ${
                location.pathname === '/' ? 'text-[#831515] underline underline-offset-10 font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`hover:underline hover:text-[#831515] hover:underline-offset-10 ${
                location.pathname === '/about' ? 'text-[#831515] underline underline-offset-10 font-semibold' : ''
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className={`hover:underline hover:text-[#831515] hover:underline-offset-10 ${
                location.pathname === '/services' ? 'text-[#831515] underline underline-offset-10 font-semibold' : ''
              }`}
            >
              Services
            </Link>
               <Link 
              to="/enroll" 
              className={`bg-[#831515] text-white rounded-lg py-2 px-3 hover:bg-[#a51a1a] ${
                location.pathname === '/enroll' 
              }`}
            >
              Start your journey
            </Link>
            
          </nav>

          </div>
      </div>
    </header>
  );
};

export default Navbar;