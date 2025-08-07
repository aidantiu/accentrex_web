import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Footer from '../components/footer';

const Contacts = () => {
  return (
    <div className="bg-white text-[#831515] font-sans">
      <Navbar />
      <Banner title="CONTACTS" />

      {/* Headline */}
      <section className="text-center mt-12 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Connect with <br /> Accentrex
        </h2>
      </section>

      {/* Subheadline */}
      <section className="text-center mt-6 px-4">
        <p className="text-lg md:text-xl font-semibold">
          Looking for something else?
        </p>
      </section>

      {/* Contact Info Card */}
      <section className="mt-8 px-4 flex justify-center">
        <div className="bg-[#831515] text-white p-6 md:p-8 rounded-xl shadow-lg max-w-xl w-full text-sm md:text-base">
          <div className="space-y-4">
            <div className="flex gap-2">
              <span className="font-bold w-24 md:w-28">E-mail us:</span>
              <span>eaoz@gmail.com</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold w-24 md:w-28">Call us:</span>
              <span>09958494428 or 09454352606</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold w-24 md:w-28">Visit us:</span>
              <span className="max-w-xs">
                Suite 1414, 14th floor, AIC Burgundy Empire Tower, ADB Ave. Corner,
                Garnet Road, Ortigas Center, Pasig City, Philippines (Back of Robinson's
                Galleria)
              </span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold w-24 md:w-28">Follow us:</span>
              <a
                href="https://www.facebook.com/accentrex/"
                className="underline text-white hover:text-gray-200 break-words"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/accentrex/
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
