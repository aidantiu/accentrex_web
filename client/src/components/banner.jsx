import React from 'react';

const Banner = ({ title, subtitle, showCountries = false, isServicePage = false }) => {
  return (
<div className="w-full max-w-9xl mx-auto px-4 md:px-4 mt-6">
  <section className="bg-[#7e0f0f] text-white rounded-2xl shadow-md px-10 py-9">
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-semibold uppercase tracking-wide">
              {title}
            </h1>

            {/* Service-specific subtitle layout */}
            {subtitle && isServicePage ? (
              <div className="flex flex-col items-center md:flex-row md:justify-left gap-2 md:gap-6 mt-4 text-sm text-gray-200">
                <span className="hover:underline cursor-pointer">VISA APPLICATION</span>
                <span className="hidden md:inline">|</span>
                <span className="hover:underline cursor-pointer">STUDY, LIVE, AND MIGRATE PROGRAM</span>
                <span className="hidden md:inline">|</span>
                <span className="hover:underline cursor-pointer">SEMINAR REGISTRATION</span>
              </div>
            ) : (
              subtitle && (
                <p className="text-md text-gray-200 mt-2">{subtitle}</p>
              )
            )}

            {showCountries && (
              <div className="flex flex-col items-center md:flex-row md:justify-left gap-2 md:gap-6 mt-4 text-sm text-gray-200">
                <span className="hover:underline cursor-pointer">AUSTRALIA</span>
                <span className="hidden md:inline">|</span>
                <span className="hover:underline cursor-pointer">CANADA</span>
                <span className="hidden md:inline">|</span>
                <span className="hover:underline cursor-pointer">NEW ZEALAND</span>
              </div>
            )}
          </div>
      </section>
    </div>
  );
};

export default Banner;
