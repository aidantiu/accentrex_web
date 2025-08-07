import React from 'react';

const Banner = ({ title, subtitle, showCountries = false, isServicePage = false }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-5">
      <section className="bg-[#831515] text-white rounded-2xl shadow-md px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h1 className="text-4xl md:text-4xl font-semibold uppercase tracking-wide">
              {title}
            </h1>

            {/* Service-specific subtitle layout */}
            {subtitle && isServicePage ? (
              <div className="flex flex-col items-center md:flex-row md:justify-center gap-2 md:gap-6 mt-4 text-sm text-gray-200">
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
              <div className="flex flex-col items-center md:flex-row md:justify-center gap-2 md:gap-6 mt-4 text-sm text-gray-200">
                <span className="hover:underline cursor-pointer">AUSTRALIA</span>
                <span className="hidden md:inline">|</span>
                <span className="hover:underline cursor-pointer">CANADA</span>
                <span className="hidden md:inline">|</span>
                <span className="hover:underline cursor-pointer">NEW ZEALAND</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
