import Navbar from '../components/navbar';
import Banner from '../components/banner';
import globeImage from '../assets/globe-image.png'; 
import flyerImage from '../assets/flyer-image.png'; 
import AIcon from '../assets/icons/a-accountability.png'; 
import CIcon from '../assets/icons/c-commitment.png'; 
import CIcon2 from '../assets/icons/c-clarity.png'; 
import EIcon from '../assets/icons/e-empathy.png'; 
import NIcon from '../assets/icons/n-nurturing.png'; 
import TIcon from '../assets/icons/t-transparency.png';   
import RIcon from '../assets/icons/r-reliability.png'; 
import EIcon2 from '../assets/icons/e-excellence.png'; 
import XIcon from '../assets/icons/x-experience.png'; 
import Footer from '../components/footer';


export default function AboutUs() {
  return (
    <div className="font-sans text-[#660000] bg-white">
      <Navbar />
      <Banner title="ABOUT US" />

      {/* study live migrate + image */}
      <div className="flex flex-col md:flex-row items-center px-9 py-6 gap-225">
        <div className="flex-1 text-7xl md:text-8xl font-bold space-y-2 text-center md:text-left">
          <p>study</p>
          <p>live</p>
          <p>migrate</p>
        </div>
        <div className="flex-1">
          <img
            src={globeImage}
            alt="Globe"
            className="rounded w-full max-w-sm mx-auto"
          />
        </div>
      </div>

      {/* Our Mission section */}
      <section className="px-13 pb-10">
        <h3 className="text-4xl font-bold mb-4">Our Mission</h3>
        <div className="border border-[#660000] rounded-xl p-4 text-[25px] text-justify leading-relaxed">
          <p className="mb-4">
            At Accenttrex, we help Filipinos turn their migration dreams into reality. Our mission is to simplify what can often be a long and overwhelming process by providing step-by-step guidance tailored to your personal circumstances.
          </p>
          <p>
            We have proudly assisted thousands of Filipinos in migrating to Australia, New Zealand, and Canada, opening new doors for careers, education, and a better life for their families.
          </p>
        </div>
      </section>

      {/* Why Choose Accentrex */}
      {/* Combined Frame: Why Choose Accentrex + What We Do */}
    <section className="bg-[#611221] text-white font-sans py-12 px-6 md:px-20" >
      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto items-start">
        
        {/* Left Side: Why Choose Accentrex */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Why Choose Accentrex?
          </h2>
          <p className="text-base mb-6 leading-relaxed">
            We are led by experienced and qualified migration professionals with strong international credentials:
          </p>
          <ul className="list-disc pl-5 space-y-4 text-sm md:text-base">
            <li>Graduate of Australian Migration Law</li>
            <li>Studied at the Australian National University</li>
            <li>Former Australian Registered Migration Agent</li>
            <li>Former New Zealand Licensed Immigration Adviser</li>
            <li>Processed over 500 visa applications</li>
            <li>More than 400 visa approvals</li>
            <li>15+ years of experience in student visa and skilled migration processing</li>
          </ul>
          <p className="mt-8 text-base leading-relaxed">
            With Accentrex, you’re guided by experts who know immigration inside and out, not just by theory, but by real-world success.
          </p>
        </div>

        {/* Right Side: What We Do */}
        <div className="flex-1 bg-[#fff2f2] text-[#611221] rounded-lg p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            What we do?
          </h2>
          <p className="text-sm mb-6 text-center">
            Through our Study, Live & Migrate Program, we offer expert support and practical migration solutions whether you're a:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {[
              "01 Skilled Professional",
              "02 Student",
              "03 Business Owner",
              "04 Family Member",
              "05 Simple Holidaymaker",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#611221] text-white py-3 px-2 rounded-xl font-semibold text-center"
              >
                {item.split(" ")[0]} <br /> {item.split(" ").slice(1).join(" ")}
              </div>
            ))}
          </div>
          <p className="text-sm mb-4 text-center">
            We provide full assistance from identifying the best migration pathway for you, to helping you complete your visa application with confidence and clarity.
          </p>
          <p className="text-sm font-semibold text-center">
            Currently, we are inviting IT professionals and engineers with at least 5 years of experience to attend our FREE seminar on how to migrate to Australia.
          </p>
        </div>
      </div>
    </section>

      {/* Our Core Values section */}
      <section className="bg-white text-[#660000] font-sans py-12 px-6 md:px-20 relative">
        <img
          src="./public/images/bg-mission.jpg"
          alt="Mission background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Core Values</h2>
        <p className="mb-4 font-medium">ACCENTREX is our core values</p>
          <p className="mb-10 text-sm md:text-base leading-relaxed whitespace-nowrap">
            Here at Accentrex, our team possess the following core values intrinsic to our daily operations and lives:
          </p>

        <div className="grid grid-cols-3 gap-8 justify-items-center">
          {/* A - Accountability */}
          <div className="group relative flex flex-col items-center justify-center h-40 w-32 rounded-lg overflow-hidden bg-white shadow-md cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-[#660000] group-hover:opacity-0 transition duration-300">
              A
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#660000] to-white group-hover:opacity-100 opacity-0 transition duration-300">
              <img src={AIcon} alt="Accountability" className="w-12 h-12 mb-2" />
              <p className="text-white text-sm font-semibold">Accountability</p>
            </div>
          </div>
          {/* C - Commitment */}
          <div className="group relative flex flex-col items-center justify-center h-40 w-32 rounded-lg overflow-hidden bg-white shadow-md cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center text-3xl  font-bold text-[#660000] group-hover:opacity-0 transition duration-300">
              C
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#660000] to-white group-hover:opacity-100 opacity-0 transition duration-300">
              <img src={CIcon} alt="Commitment" className="w-12 h-12 mb-2" />
              <p className="text-white text-sm font-semibold">Commitment</p>
            </div>
          </div>

          {/* C - Clarity */}
          <div className="group relative flex flex-col items-center justify-center h-40 w-32 rounded-lg overflow-hidden bg-white shadow-md cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-[#660000] group-hover:opacity-0 transition duration-300">
              C
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#660000] to-white group-hover:opacity-100 opacity-0 transition duration-300">
              <img src={CIcon2} alt="Clarity" className="w-12 h-12 mb-2" />
              <p className="text-white text-sm font-semibold">Clarity</p>
            </div>
          </div>
          {/* E - Empathy */}
          <div className="group relative flex flex-col items-center justify-center h-40 w-32 rounded-lg overflow-hidden bg-white shadow-md cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-[#660000] group-hover:opacity-0 transition duration-300">
              E
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#660000] to-white group-hover:opacity-100 opacity-0 transition duration-300">
              <img src={EIcon} alt="Empathy" className="w-12 h-12 mb-2" />
              <p className="text-white text-sm font-semibold">Empathy</p>
            </div>
          </div>
          {/* N - Nurturing */}
          <div className="group relative flex flex-col items-center justify-center h-40 w-32 rounded-lg overflow-hidden bg-white shadow-md cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-[#660000] group-hover:opacity-0 transition duration-300">
              N
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#660000] to-white group-hover:opacity-100 opacity-0 transition duration-300">
              <img src={NIcon} alt="Nurturing" className="w-12 h-12 mb-2" />
              <p className="text-white text-sm font-semibold">Nurturing</p>
            </div>
          </div>
          {/* T - Transparency */}
          <div className="group relative flex flex-col items-center justify-center h-40 w-32 rounded-lg overflow-hidden bg-white shadow-md cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-[#660000] group-hover:opacity-0 transition duration-300">
              T
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#660000] to-white group-hover:opacity-100 opacity-0 transition duration-300">
              <img src={TIcon} alt="Transparency" className="w-12 h-12 mb-2" />
              <p className="text-white text-sm font-semibold">Transparency</p>
            </div>
          </div>
          {/* R - Reliability */}
          <div className="group relative flex flex-col items-center justify-center h-40 w-32 rounded-lg overflow-hidden bg-white shadow-md cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-[#660000] group-hover:opacity-0 transition duration-300">
              R
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#660000] to-white group-hover:opacity-100 opacity-0 transition duration-300">
              <img src={RIcon} alt="Reliability" className="w-12 h-12 mb-2" />
              <p className="text-white text-sm font-semibold">Reliability</p>
            </div>
          </div>
          {/* E - Excellence */}
          <div className="group relative flex flex-col items-center justify-center h-40 w-32 rounded-lg overflow-hidden bg-white shadow-md cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-[#660000] group-hover:opacity-0 transition duration-300">
              E
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#660000] to-white group-hover:opacity-100 opacity-0 transition duration-300">
              <img src={EIcon2} alt="Excellence" className="w-12 h-12 mb-2" />
              <p className="text-white text-sm font-semibold">Excellence</p>
            </div>
          </div>
          {/* X - Experience */}
          <div className="group relative flex flex-col items-center justify-center h-40 w-32 rounded-lg overflow-hidden bg-white shadow-md cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-[#660000] group-hover:opacity-0 transition duration-300">
              X
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#660000] to-white group-hover:opacity-100 opacity-0 transition duration-300">
              <img src={XIcon} alt="Experience" className="w-12 h-12 mb-2" />
              <p className="text-white text-sm font-semibold">Experience</p>
            </div>
          </div>
        </div>
        </section>
      <Footer />
      </div>
  );
}
