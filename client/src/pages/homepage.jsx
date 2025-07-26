import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Headline from '../components/headline';
import Descriptions from '../components/description';
import CountryCards from '../components/countrycards';

const Homepage = () => {
  return (
    <div className="bg-white text-[#611221] font-sans">
      <Navbar />
      <Banner />
      <Headline />
      <Descriptions />
      <CountryCards />
    </div>
  );
};

export default Homepage;
