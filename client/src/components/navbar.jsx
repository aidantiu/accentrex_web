import React, { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md z-50">
      {/* MOBILE: Logo + Hamburger */}
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 py-4 md:hidden">
        <img
          src="./public/images/companylogo.png"
          alt="Accentex Logo"
          className="h-10"
        />
        <button
          className="text-3xl text-[#831515]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE: Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#831515] rounded-2xl text-white flex flex-col items-center gap-4 py-4 text-base font-medium mx-4">
          <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#account" onClick={() => setMenuOpen(false)}>Account</a>
          <a href="#contacts" onClick={() => setMenuOpen(false)}>Contacts</a>
        </nav>
      )}

      {/* DESKTOP: Logo Centered + Nav Below */}
        <div className="hidden md:flex flex-col items-center w-full max-w-7xl mx-auto px-4 md:px-8 py-4">
        <img
          src="./public/images/companylogo.png"
          alt="Accentrex Logo"
          className="h-20"
        />

        {/* Nav Links */}
        <nav className="w-full mt-4 bg-[#831515] rounded-2xl text-white flex justify-between px-16 py-3 font-medium text-lg">
          <a href="#" className="hover:underline">HOME</a>
          <a href="#about" className="hover:underline">ABOUT US</a>
          <a href="#services" className="hover:underline">SERVICES</a>
          <a href="#account" className="hover:underline">ACCOUNT</a>
          <a href="#contacts" className="hover:underline">CONTACTS</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;