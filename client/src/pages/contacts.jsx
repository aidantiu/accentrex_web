import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Footer from '../components/footer';

const Contacts = () => {
  return (
    <div className="bg-white text-[#831515] font-sans">
      <Navbar />
      <Banner 
      title="CONTACTS" 
      subtitle={"Email Us | Call Us | Visit Us | Follow Us"} 
      />

      {/* Headline */}
      <section className="text-center mt-16 px-4">
        <h2 className="text-4xl md:text-[10rem] font-extrabold leading-tight">
          Connect with Accentrex
        </h2>
      </section>

      {/* Subheadline */}
      <section className="text-center mt-8 md:mt-14 px-4">
        <p className="text-lg md:text-4xl font-semibold">
          Looking for something else?
        </p>
      </section>

      {/* Unified Contact Info Box */}
      <section className="mt-12 flex justify-center">
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-6 max-w-[1200px] w-full px-4 py-9 bg-white rounded-2xl shadow-lg">
          {[
            {
              title: 'E-mail us:',
              content: <p className="break-words">eaoz@gmail.com</p>,
            },
            {
              title: 'Call us:',
              content: <p className="break-words">09958494428 or 09454352606</p>,
            },
            {
              title: 'Visit us:',
              content: (
                <p className="break-words">
                  Suite 1414, 14th floor, AIC Burgundy Empire Tower, ADB Ave. Corner, Garnet Road, Ortigas Center, Pasig City, Philippines (Back of Robinson's Galleria)
                </p>
              ),
            },
            {
              title: 'Follow us:',
              content: (
                <a
                  href="https://www.facebook.com/accentrex/"
                  className="underline break-words hover:text-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/accentrex/
                </a>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#831515] text-white flex-1 min-w-[250px] p-8 md:p-10 rounded-2xl shadow-xl"
            >
              <p className="font-bold text-lg md:text-xl mb-4">{item.title}</p>
              <div className="text-base md:text-lg">{item.content}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
