import Navbar from '../components/navbar';

import Headline from '../components/headline';
import Footer from '../components/footer';

const CountryCard = ({ image, title, description }) => {
  return (
    <div className="w-full max-w-sm bg-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 flex flex-col gap-3 text-[#831515]">
        <h4 className="text-2xl font-bold">{title}</h4>
        <p className="text-m leading-relaxed text-justify">{description}</p>
      </div>
    </div>
  );
};

const Homepage = () => {
  return (
    <div className="bg-white font-sans min-h-screen">
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-start">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="./public/images/bg-description.png"
            alt="Happy family with passports"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-opacity-40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            {/* Scroll Down indicator */}
            <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-white text-sm tracking-widest">
              <span>← Scroll Down</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Expert Global
              <span className="text-[#831515] block">Migration</span>
              <span className="block">Professionals</span>
            </h1>
            
            <p className="text-lg text-gray-200 leading-relaxed mb-8 max-w-lg">
              At Accentrex, we simplify the path to your dream life overseas. From expert
              consultation to smooth settlement, our team is here to support you with
              reliable, personalized assistance — every step of the way.
            </p>
            
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-none hover:bg-white hover:text-[#831515] transition-all duration-300 flex items-center gap-2">
              Read More <span>→</span>
            </button>
          </div>
        </div>  
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          {/* Section Header */}
          <div className="mb-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-[#831515]"></div>
              <span className="text-[#831515] text-sm tracking-wide uppercase">Trusted Migration Experts Guiding You Every Step of the Way</span>
              <div className="w-12 h-0.5 bg-[#831515]"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">About Accentrex</h2>
          </div>

          {/* About Content */}
          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 leading-relaxed">
            <p className="text-lg">
              At Accentrex, we simplify the path to your dream life overseas. From expert
              consultation to smooth settlement, our team is here to support you with
              reliable, personalized assistance — every step of the way.
            </p>
            <p className="text-lg">
              Our experienced team provides comprehensive immigration services for multiple destinations
              including Australia, Canada, and New Zealand. We understand that each client's journey is unique,
              and we're committed to finding the best pathway that fits your individual circumstances and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div className="flex flex-row items-center justify-center md:justify-start gap-4 mb-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#831515] whitespace-nowrap">
              Available Countries
            </h3>
            <img
              src="./public/images/arrow.png"
              alt="Arrow Icon"
              className="w-32 md:w-48 lg:w-56 h-6 md:h-8"
            />
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center">
            <CountryCard
            image="./public/images/australia.jpg"
            title="Live Your Dream Life in Australia"
            description="Start your journey as a permanent resident through skilled migration. With our expert guidance, you’re one step closer to building a future in one of the world’s most livable countries."
          />

          <CountryCard
            image="./public/images/canada.jpg"
            title="Make Canada Your New Home"
            description="Experience world-class opportunities, inclusive communities, and a better quality of life. Our team will help you navigate the path to permanent residency with ease and confidence."
          />

          <CountryCard
            image="./public/images/newzealand.png"
            title="Start Fresh in Peaceful New Zealand"
            description="Enjoy a balanced lifestyle, stunning landscapes, and great career prospects. Let us assist you in making your move hassle-free through skilled migration or family sponsorship."
            />
          </div>
        </div>
      </section>      <Footer />
    </div>
  );
};

export default Homepage;