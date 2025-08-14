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
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/account" onClick={() => setMenuOpen(false)}>Account</Link>
            <Link to="/contacts" onClick={() => setMenuOpen(false)}>Contacts</Link>
        </nav>
      )}

      {/* DESKTOP: Logo Centered + Nav Below */}
        <div className="hidden md:flex flex-col items-center w-full max-w-9xl mx-auto px-4 md:px-4 py-4">
        <img
          src="./public/images/companylogo.png"
          alt="Accentrex Logo"
          className="h-20"
        />

        {/* Nav Links */}
        <nav className="w-full mt-4 bg-[#831515] rounded-2xl text-white flex justify-between px-16 py-3 font-medium text-xl">
          <Link to="/" className="hover:underline">HOME</Link>
          <Link to="/about" className="hover:underline">ABOUT US</Link>
          <Link to="/services" className="hover:underline">SERVICES</Link>
          <Link to="/account" className="hover:underline">ACCOUNT</Link>
          <Link to="/contacts" className="hover:underline">CONTACTS</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;