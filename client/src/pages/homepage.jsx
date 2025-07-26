import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Headline from '../components/headline';

const Homepage = () => {
  return (
    <div className="bg-white text-[#611221] font-sans">
      <Navbar />
      <Banner />
      <Headline />
      {/* Description */}
      <section className="p-6 text-center text-sm text-gray-600 max-w-3xl mx-auto">
        <p>
          Trusted Migration Experts Guiding You Every Step of the Way
        </p>
        <p className="mt-4 italic">
          At Accentex, we simplify the path of your dream life overseas. From expert
          consultation to smooth settlement, our Filipino-led agency will guide you
          with passionate assistance every step of the way.
        </p>
      </section>
      {/* Country Cards */}
      <section className="p-6">
        <h3 className="text-xl font-semibold mb-6">Available Countries</h3>
        <div className="flex flex-col gap-6">
          
          {/* Australia */}
          <div className="flex flex-col md:flex-row bg-[#fff4f4] rounded-lg shadow-md overflow-hidden">
            <div className="md:w-1/2">
              <img src="./public/images/australia.jpg" alt="Australia" className="w-full h-full object-cover md:h-auto" />
            </div>
            <div className="p-6 md:w-1/2 flex items-center">
              <div>
                <h4 className="text-2xl font-bold mb-2">Live Your Dream Life in Australia</h4>
                <p className="text-base text-gray-700 leading-relaxed">
                  Start your journey as a permanent resident through skilled migration. With our
                  expert guidance, you’re one step closer to building a future in one of the
                  world’s most livable countries.
                </p>
              </div>
            </div>
          </div>

          {/* Canada */}
          <div className="flex flex-col md:flex-row bg-[#fff4f4] rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:w-1/2 flex items-center order-2 md:order-1">
              <div>
                <h4 className="text-2xl font-bold mb-2">Make Canada Your New Home</h4>
                <p className="text-base text-gray-700 leading-relaxed">
                  Experience world-class opportunities, inclusive communities, and a better quality
                  of life. Our team will help you navigate the path to permanent residency with ease
                  and confidence.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img src="./public/images/canada.jpg" alt="Canada" className="w-full h-full object-cover md:h-auto" />
            </div>
          </div>

          {/* New Zealand */}
          <div className="flex flex-col md:flex-row bg-[#fff4f4] rounded-lg shadow-md overflow-hidden">
            <div className="md:w-1/2">
              <img src="./public/images/newzealand.png" alt="New Zealand" className="w-full h-full object-cover md:h-auto" />
            </div>
            <div className="p-6 md:w-1/2 flex items-center">
              <div>
                <h4 className="text-2xl font-bold mb-2">Start Fresh in Peaceful New Zealand</h4>
                <p className="text-base text-gray-700 leading-relaxed">
                  Enjoy a balanced lifestyle, stunning landscapes, and great career prospects.
                  Let us assist you in making your move hassle-free through skilled migration
                  or family sponsorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
