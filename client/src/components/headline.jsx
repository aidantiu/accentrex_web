import React from 'react';

const Headline = ({ title }) => {
  return (
    <section className="p-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        {title}
      </h2>
    </section>
  );
};

export default Headline;
