import { Mail, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-emerald-100 flex items-center justify-center px-4">

      <div className="w-full max-w-5xl bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Section */}

        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-orange-500 to-orange-600 text-white p-12">

          <div className="bg-white/20 p-6 rounded-full mb-6">
            <PawPrint size={70} />
          </div>

          <h1 className="text-5xl font-bold">
            Forgot Password?
          </h1>

          <p className="mt-6 text-center text-lg leading-8 opacity-90">
            Don't worry! Enter your registered email and we'll send you a password reset link.
          </p>

        </div>

        {/* Right Section */}

        <div className="p-10">

          <h2 className="text-4xl font-bold text-gray-800">
            Recover Account
          </h2>

          <p className="text-gray-500 mt-2">
            Enter your email address.
          </p>

          <form className="mt-10 space-y-6">

            <div>

              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>

              <div className="relative mt-2">

                <Mail
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={20}
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                />

              </div>

            </div>

            <button
              className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
            >
              Send Reset Link
            </button>

          </form>

          <p className="text-center mt-8 text-gray-600">

            Remember your password?

            <Link
              to="/login"
              className="text-orange-600 ml-2 font-semibold hover:underline"
            >
              Back to Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default ForgotPassword;