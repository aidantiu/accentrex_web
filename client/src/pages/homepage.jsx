import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Headline from '../components/headline';

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
    <div className="bg-white text-[#831515] font-sans">
      <Navbar />
      <Banner />
      <Headline />

      <p className="text-2xl md:text-2xl font-semibold text-center mt-10 px-4">
        Trusted Migration Experts Guiding You Every Step of the Way
      </p>

      {/* Description with background image */}
      <section className="relative py-20 text-center mt-10">
        <img
          src="./public/images/bg-description.png"
          alt="Description background"
          className="absolute inset-0 w-full h-full object-cover opacity-90 z-0"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-base md:text-xl italic leading-relaxed">
            At Accentrex, we simplify the path to your dream life overseas. From expert
            consultation to smooth settlement, our team is here to support you with
            reliable, personalized assistance — every step of the way.
          </p>
        </div>
      </section>

      {/* Country Cards */}
      <section className="px-4 md:px-16 pb-20 mt-10">
        <div className="flex flex-row items-center gap-3 mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold whitespace-nowrap">
            Available Countries
          </h3>
          <img
            src="./public/images/arrow.png"
            alt="Arrow Icon"
            className="w-28 md:w-40 h-5"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
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
      </section>
    </div>
  );
};

export default Homepage;