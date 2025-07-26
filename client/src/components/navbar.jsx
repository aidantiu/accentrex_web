import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <header className="flex flex-col items-center p-6 shadow-md">
      <img src="/logo.png" alt="Accentex Logo" className="h-12 mb-4" />
      <nav className="flex gap-6 text-lg font-medium">
        {/* Palitan to ng <Link> components for better routing */}
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">Services</a>
        <a href="#" className="hover:underline">Account</a>
        <a href="#" className="hover:underline">Contacts</a>
      </nav>
    </header>
  );
};

export default Navbar;
