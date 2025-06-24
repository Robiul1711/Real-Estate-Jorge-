import React, { useState } from "react";
import image from "../../assets/images/login.png";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { MainIcon } from "@/assets/icon";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 w-full section-padding-x py-8 md:pt-16 relative flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col w-full md:w-[80%] mx-auto">
          <Link to={"/"}>
            <MainIcon className="w-48 absolute left-22 top-10" />
          </Link>

          <p className="mt-18 mb-3">
            <ArrowLeft className="text-slate-700" size={20} />
          </p>

          <h2 className="text-2xl md:text-[40px] font-bold">
            Welcome to Logo Ipsum
          </h2>
          <p className="text-sm md:text-lg text-[#757575] my-4">
            Login to your account
          </p>

          <form className="space-y-3">
            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 md:py-3 border rounded-md outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-2 md:py-3 border rounded-md pr-10"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
              </div>
            </div>
            <div className="my-4 flex justify-end">
              <Link to={"/forgot-password"}>
                <p className="font-medium hover:underline cursor-pointer">
                  Forgot Password?
                </p>
              </Link>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-black text-white py-3 font-medium rounded-xl cursor-pointer relative overflow-hidden before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#111827] before:translate-x-[-200px] hover:before:translate-x-0 before:translate-y-12 hover:before:translate-y-0 before:duration-300 before:z-[-1] z-0">
              Sign In
            </button>
          </form>

          {/* Already have account */}
          <p className="text-sm text-center mt-6">
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              className="underline cursor-pointer font-medium text-black
            "
            >
              Register
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400">
          ©2025 Logoipsum. All Rights Reserved.
        </p>
      </div>

      <div className="md:w-1/2 w-full h-[300px] md:h-screen">
        <img src={image} alt="Sign Up" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Login;
