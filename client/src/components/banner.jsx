import React from 'react';

const Banner = ({ title, subtitle }) => {
  return (
    <section className="bg-[#831515] text-white p-8 px-4 md:px-15 rounded-2xl mx-auto mt-5 shadow-md text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-center md:text-left">
        <div>
          <h1 className="text-4xl md:text-4xl font-semibold uppercase tracking-wide">
            Home
          </h1>
          <div className="text-lg md:text-lg mt-6 text-gray-200 space-x-6">
            <span className="hover:underline cursor-pointer">AUSTRALIA</span>
            <span>|</span>
            <span className="hover:underline cursor-pointer">CANADA</span>
            <span>|</span>
            <span className="hover:underline cursor-pointer">NEW ZEALAND</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;