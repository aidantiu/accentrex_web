import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Banner from "../components/banner";

export default function AccountPage() {
  return (
    <div className="bg-white text-[#7e0f0f] font-sans min-h-screen flex flex-col">
      <Navbar />
      <Banner title="Account"/>

      {/* Form Section */}
      <div className="flex-grow px-4 py-10 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-center mb-6">Join us!</h2>

          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                E-mail or Phone Number
              </label>
              <input
                id="email"
                type="text"
                placeholder="Enter your email or phone"
                className="w-full px-4 py-2 border border-[#7e0f0f] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7e0f0f]"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-[#7e0f0f] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7e0f0f]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#7e0f0f] hover:bg-[#660d0d] transition-colors duration-200 text-white font-semibold py-2 rounded-md"
            >
              Log In
            </button>
          </form>

          <div className="text-center mt-4">
            <a href="#" className="text-sm text-[#7e0f0f] hover:underline">
              Forgot password?
            </a>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm mb-2">Don’t have an account yet?</p>
            <button className="w-full bg-white text-[#7e0f0f] border border-[#7e0f0f] hover:bg-[#7e0f0f] hover:text-white transition-colors duration-200 font-semibold py-2 rounded-md">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
