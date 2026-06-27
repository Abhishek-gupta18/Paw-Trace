import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  PawPrint,
} from "lucide-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-emerald-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-6xl bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Side */}

        <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-orange-500 to-orange-600 text-white p-12">

          <div className="bg-white/20 rounded-full p-6 mb-6">
            <PawPrint size={70} />
          </div>

          <h1 className="text-5xl font-bold">
            Join PawTrace
          </h1>

          <p className="mt-6 text-center leading-8 text-lg opacity-90">
            Become a part of our growing community helping lost cats
            reunite with their families through AI and local volunteers.
          </p>

        </div>

        {/* Right Side */}

        <div className="p-8 md:p-12">

          <h2 className="text-4xl font-bold text-gray-800">
            Create Account 🐱
          </h2>

          <p className="text-gray-500 mt-2">
            Let's get you started.
          </p>

          <form className="mt-8 space-y-5">

            {/* Name */}

            <div className="grid md:grid-cols-2 gap-4">

              <div>
                <label className="text-sm font-medium">
                  First Name
                </label>

                <div className="relative mt-2">

                  <User
                    className="absolute left-4 top-3.5 text-gray-400"
                    size={20}
                  />

                  <input
                    type="text"
                    placeholder="Himanshi"
                    className="w-full pl-12 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
                  />

                </div>

              </div>

              <div>

                <label className="text-sm font-medium">
                  Last Name
                </label>

                <div className="relative mt-2">

                  <User
                    className="absolute left-4 top-3.5 text-gray-400"
                    size={20}
                  />

                  <input
                    type="text"
                    placeholder="Gupta"
                    className="w-full pl-12 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
                  />

                </div>

              </div>

            </div>

            {/* Email */}

            <div>

              <label className="text-sm font-medium">
                Email
              </label>

              <div className="relative mt-2">

                <Mail
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={20}
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-12 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
                />

              </div>

            </div>

            {/* Phone */}

            <div>

              <label className="text-sm font-medium">
                Phone Number
              </label>

              <div className="relative mt-2">

                <Phone
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={20}
                />

                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  className="w-full pl-12 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
                />

              </div>

            </div>

            {/* Role */}

            <div>

              <label className="text-sm font-medium">
                Register As
              </label>

              <select className="mt-2 w-full py-3 px-4 border rounded-xl focus:ring-2 focus:ring-orange-500 outline-none">

                <option>Cat Owner</option>

                <option>Volunteer</option>

              </select>

            </div>

            {/* Password */}

            <div>

              <label className="text-sm font-medium">
                Password
              </label>

              <div className="relative mt-2">

                <Lock
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={20}
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  className="w-full pl-12 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5"
                >
                  {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                </button>

              </div>

            </div>

            {/* Confirm */}

            <div>

              <label className="text-sm font-medium">
                Confirm Password
              </label>

              <div className="relative mt-2">

                <Lock
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={20}
                />

                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm password"
                  className="w-full pl-12 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-3.5"
                >
                  {showConfirm ? <EyeOff size={20}/> : <Eye size={20}/>}
                </button>

              </div>

            </div>

            {/* Terms */}

            <div className="flex items-start gap-2">

              <input
                type="checkbox"
                className="accent-orange-500 mt-1"
              />

              <p className="text-sm text-gray-600">
                I agree to the Terms & Conditions and Privacy Policy.
              </p>

            </div>

            {/* Button */}

            <button
              className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
            >
              Create Account
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

          <button className="w-full py-3 border rounded-xl hover:bg-gray-100 transition">
            Continue with Google
          </button>

          <p className="text-center mt-8 text-gray-600">

            Already have an account?

            <Link
              to="/login"
              className="text-orange-600 font-semibold ml-2 hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default SignUp;