import React from 'react';

const Banner = ({ title, subtitle }) => {
  return (
    <section className="bg-[#611221] text-white p-8 text-center">
      <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      {subtitle && <p className="mt-2 text-sm md:text-base">{subtitle}</p>}
    </section>
  );
};

export default Banner;
