import React from 'react';
import logo from '../assets/AccentrexLogo.png';
import visaIcon from '../assets/Group 7.png';
import migrateIcon from '../assets/Group 51.png';
import seminarIcon from '../assets/Earth Dots.png';
import footerLogo from '../assets/FooterLOGO.png';
import footerBg from '../assets/Group 66.png';
import '../styles/index.css'; 

function Services() {
  return (
    <div className="font-sans text-black bg-white">
      <header className="text-center p-4">
        <img
          src={logo}
          alt="Accenttrex Logo"
          className="max-w-[237px] max-h-[210px] mx-auto"
        />
      </header>

      <nav className="bg-[#8b0000] flex justify-center flex-wrap gap-6 py-3 rounded-full max-w-[600px] mx-auto mb-6">
        {['HOME', 'ABOUT US', 'SERVICES', 'ACCOUNT', 'CONTACTS'].map((link) => (
          <a
            href="#"
            key={link}
            className="text-white font-bold text-sm no-underline"
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="bg-[#8b0000] text-white text-center px-4 py-6 rounded-3xl max-w-[95%] mx-auto mb-6">
        <h2 className="text-2xl font-bold">SERVICES</h2>
        <div className="mt-3 text-sm border-t border-white pt-2">
          VISA APPLICATION | STUDY, LIVE, AND MIGRATE PROGRAM | SEMINAR REGISTRATION
        </div>
      </div>

      <div className="text-center text-3xl font-bold my-8">We Offer</div>

      <ServiceCard
        title="Visa Application"
        image={visaIcon}
        buttonLabel="Apply Here"
        description="We provide professional assistance for all types of visa applications, including regular tourist visas and student visas for individuals planning to study abroad. Our team ensures a hassle-free process by guiding you through document preparation, submission procedures, and interview readiness, increasing your chances of approval."
      />

      <ServiceCard
        title="Study, Live, and Migrate Program"
        image={migrateIcon}
        buttonLabel="Apply for Migration Assistance"
        description="Our integrated program is designed for individuals seeking long-term opportunities abroad. We offer end-to-end support in studying overseas, transitioning into permanent residency, and eventually settling in your chosen country. With expert advice on educational institutions, immigration pathways, and settlement services, we help turn your global dreams into reality."
      />

      <ServiceCard
        title="Seminar Registration"
        image={seminarIcon}
        buttonLabel="Register here"
        description="Stay informed and prepared by joining our informative seminars on international education, immigration policies, and career opportunities abroad. Register for our upcoming sessions to gain valuable insights, meet industry experts, and receive personalized guidance tailored to your goals."
      />

      <footer
        className="bg-cover bg-no-repeat text-white pt-8 px-4 mt-12"
        style={{ backgroundImage:`url(${footerBg})` }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8">
          <div className="text-center md:text-left">
            <img src={footerLogo} alt="Footer Logo" className="max-w-[70px] mx-auto md:mx-0" />
            <p className="text-sm mt-2">
              We provide personalized migration solutions, visa assistance, and expert guidance to suit your unique goals—whether you're a skilled professional, student, entrepreneur, family member, or traveler. Our mission is to simplify the migration journey with clear, step-by-step support every step of the way.
            </p>
          </div>

          <div className="text-center md:text-left text-sm">
            <p className="font-bold">SERVICES</p>
            <p>Visa Application<br/>Study, Live, and Migrate Program<br/>Seminar Registration</p>

            <p className="font-bold mt-4">CONTACTS</p>
            <p>
              E-mail us: eaoz@gmail.com<br/>
              Call us: 09958494428 / 09454352606<br/>
              Visit us: Suite 1414, 14th floor, AIC Burgundy Empire Tower, ADB Ave. Corner, Garnet Road, Ortigas Center, Pasig City (Back of Robinson's Galleria)<br/>
              Follow us: <a href="https://www.facebook.com/accentrex/" target="_blank" className="underline">https://www.facebook.com/accentrex/</a>
            </p>
          </div>
        </div>

        <div className="w-full bg-[#830F0F] text-white text-center text-xs mt-6 py-5 uppercase z-50">
          Copyright © 2025 ACCENTREX. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, image, description, buttonLabel }) {
  return (
    <div className="bg-[#8b0000] text-white rounded-3xl max-w-[400px] mx-auto my-4 px-6 py-8 text-center">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <img src={image} alt={title} className="max-w-[80px] mx-auto mb-4" />
      <p className="bg-white text-black p-4 rounded-xl text-sm leading-relaxed">
        {description}
      </p>
      <button className="mt-5 bg-white text-[#8b0000] font-bold text-sm px-4 py-2 rounded-xl hover:bg-gray-100">
        {buttonLabel}
      </button>
    </div>
  );
}

export default Services;
