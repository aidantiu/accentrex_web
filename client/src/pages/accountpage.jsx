import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Footer from '../components/footer';

export default function AccountPage() {
  return (
    <div className="bg-white text-[#7e0f0f] font-sans min-h-screen">
      <Navbar />

      <div className="px-6 py-8 max-w-md mx-auto">
        <div className="bg-[#7e0f0f] text-white py-4 px-6 rounded-xl mb-6 text-3xl font-bold">
          ACCOUNT
        </div>

        <h2 className="text-4xl font-bold text-center mb-6">Join us!</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="E-mail or phone number"
            className="w-full px-4 py-2 border border-[#7e0f0f] rounded-md focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-[#7e0f0f] rounded-md focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-[#7e0f0f] text-white font-semibold py-2 rounded-md"
          >
            Log In
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="#" className="text-sm text-[#7e0f0f] hover:underline">
            Forget password?
          </a>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm mb-2">Don’t have an account yet?</p>
          <button className="w-full bg-[#7e0f0f] text-white font-semibold py-2 rounded-md">
            Sign Up
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}