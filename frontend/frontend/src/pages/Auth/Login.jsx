import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () =>{
    navigate("/dashboard");
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-emerald-100 flex items-center justify-center px-4">

      <div className="w-full max-w-5xl bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Section */}

        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-orange-500 to-orange-600 text-white p-12">

          <div className="bg-white/20 p-6 rounded-full mb-6">
            <PawPrint size={70} />
          </div>

          <h1 className="text-5xl font-bold">
            PawTrace
          </h1>

          <p className="mt-6 text-center text-lg opacity-90 leading-8">
            Helping lost cats find their way home through
            community, AI Vision and rescue volunteers.
          </p>

        </div>

        {/* Right Section */}

        <div className="p-10">

          <h2 className="text-4xl font-bold text-gray-800">
            Welcome Back 👋
          </h2>

          <p className="text-gray-500 mt-2">
            Login to continue helping cats.
          </p>

          <form className="mt-10 space-y-6">

            {/* Email */}

            <div>

              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>

              <div className="mt-2 relative">

                <Mail
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={20}
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="mt-2 relative">

                <Lock
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={20}
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3 text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

            </div>

            {/* Remember */}

            <div className="flex justify-between items-center text-sm">

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  className="accent-orange-500"
                />

                Remember Me

              </label>

              <Link
                to="/forgotPassword"
                className="text-orange-600 hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            {/* Button */}

            <button
              className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
              onClick={handleLogin}
            >
              Login
            </button>

          </form>

          {/* Divider */}

          <div className="my-8 flex items-center">

            <div className="flex-1 border-t"></div>

            <span className="mx-4 text-gray-500">
              OR
            </span>

            <div className="flex-1 border-t"></div>

          </div>

          {/* Google */}

          <button
            className="w-full border rounded-xl py-3 hover:bg-gray-100 transition"
          >
            Continue with Google
          </button>

          <p className="text-center mt-8 text-gray-600">

            Don't have an account?

            <Link
              to="/signup"
              className="text-orange-600 ml-2 font-semibold hover:underline"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;