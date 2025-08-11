import React from 'react';
import footerBg from '../assets/footerBg.png'; 
import footerLogo from '../assets/AccentrexLogo.png'; 

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-no-repeat text-white pt-8 px-4 mt-12"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8">
        <div className="text-center md:text-left">
          <img src={footerLogo} alt="Footer Logo" className="max-w-[70px] mx-auto md:mx-0" />
          <p className="text-sm mt-2">
            We provide personalized migration solutions, visa assistance, and expert guidance to suit your unique goals—
            whether you're a skilled professional, student, entrepreneur, family member, or traveler.
            Our mission is to simplify the migration journey with clear, step-by-step support every step of the way.
          </p>
        </div>

        <div className="text-center md:text-left text-sm">
          <p className="font-bold">SERVICES</p>
          <p>
            Visa Application<br />
            Study, Live, and Migrate Program<br />
            Seminar Registration
          </p>

          <p className="font-bold mt-4">CONTACTS</p>
          <p>
            E-mail us: eaoz@gmail.com<br />
            Call us: 09958494428 / 09454352606<br />
            Visit us: Suite 1414, 14th floor, AIC Burgundy Empire Tower, ADB Ave. Corner, Garnet Road, Ortigas Center, Pasig City (Back of Robinson's Galleria)<br />
            Follow us: <a href="https://www.facebook.com/accentrex/" target="_blank" rel="noopener noreferrer" className="underline">
              https://www.facebook.com/accentrex/
            </a>
          </p>
        </div>
      </div>

      <div className="w-full bg-[#830F0F] text-white text-center text-xs mt-6 py-5 uppercase z-50">
        Copyright © 2025 ACCENTREX. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
