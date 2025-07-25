import React from 'react';

const CountryCards = () => {
  return (
    <section className="p-6">
      <h3 className="text-lg font-bold mb-4">Available Countries</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Australia */}
        <div className="flex flex-col items-start bg-[#fff4f4] rounded-lg shadow-md overflow-hidden">
          <img src="/australia.jpg" alt="Australia" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h4 className="text-xl font-bold">Live Your Dream Life in Australia</h4>
            <p className="text-sm mt-2 text-gray-700">
              Start your journey as a permanent resident through skilled migration
              or student visa options. Australia is one of the world’s most livable
              and notable countries.
            </p>
          </div>
        </div>

        {/* Canada */}
        <div className="flex flex-col items-start bg-[#fff4f4] rounded-lg shadow-md overflow-hidden">
          <img src="/canada.jpg" alt="Canada" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h4 className="text-xl font-bold">Make Canada Your New Home</h4>
            <p className="text-sm mt-2 text-gray-700">
              Experience world-class opportunities. From express entry to study permits,
              we’ll help you make the shift to this multicultural and welcoming country
              with confidence.
            </p>
          </div>
        </div>

        {/* New Zealand */}
        <div className="flex flex-col items-start bg-[#fff4f4] rounded-lg shadow-md overflow-hidden md:col-span-2">
          <img src="/newzealand.jpg" alt="New Zealand" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h4 className="text-xl font-bold">Start Fresh in Peaceful New Zealand</h4>
            <p className="text-sm mt-2 text-gray-700">
              Enjoy a balanced lifestyle, stunning landscapes, and career prospects
              suited for skilled migrants. Let us assist you through the process from
              student migration or family sponsorship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryCards;
