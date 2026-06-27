import { useState } from "react";
import { Eye, EyeOff, Lock, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";

const ResetPassword = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (

    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-emerald-100 flex items-center justify-center px-4">

      <div className="w-full max-w-5xl bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left */}

        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-orange-500 to-orange-600 text-white p-12">

          <div className="bg-white/20 p-6 rounded-full mb-6">
            <PawPrint size={70}/>
          </div>

          <h1 className="text-5xl font-bold">
            Reset Password
          </h1>

          <p className="mt-6 text-center text-lg leading-8 opacity-90">
            Choose a new strong password for your PawTrace account.
          </p>

        </div>

        {/* Right */}

        <div className="p-10">

          <h2 className="text-4xl font-bold text-gray-800">
            Create New Password
          </h2>

          <p className="text-gray-500 mt-2">
            Your new password must be different from the previous one.
          </p>

          <form className="mt-10 space-y-6">

            {/* Password */}

            <div>

              <label className="text-sm font-medium">
                New Password
              </label>

              <div className="relative mt-2">

                <Lock
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={20}
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
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

            <button
              className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
            >
              Reset Password
            </button>

          </form>

          <p className="text-center mt-8 text-gray-600">

            <Link
              to="/login"
              className="text-orange-600 font-semibold hover:underline"
            >
              Back to Login
            </Link>

          </p>

        </div>

      </div>

    </div>

  );
};

export default ResetPassword;