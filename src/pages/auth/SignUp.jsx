import React, { useState } from "react";
import image from "../../assets/images/signup.png";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { MainIcon } from "@/assets/icon";
import { Link } from "react-router-dom";
import CommonBtn from "@/components/common/CommonButton";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  const [isToggle1, setIsToggle1] = useState(false);
  const [phone, setPhone] = useState("");

  const getPasswordStrength = () => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    return strength;
  };

  const strengthLevel = getPasswordStrength();
  const strengthText = ["Weak", "Fair", "Good", "Strong"];
  const strengthColors = [
    "bg-red-500",
    "bg-yellow-500",
    "bg-[#59CC3D]",
    "bg-green-600",
  ];

  const handleToggle = (type) => {
    if (type === "individual") {
      setIsToggle(true);
      setIsToggle1(false);
    } else {
      setIsToggle(false);
      setIsToggle1(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="md:w-1/2 w-full section-padding-x py-8 md:pt-16 relative flex flex-col h-screen">
        <div className="pr-10 flex-1 flex flex-col w-full md:w-[90%] mx-auto overflow-y-auto">
          {/* Centered Content */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Logo + Back */}
            <Link
              to="/"
              className="flex items-center justify-center mb-6 gap-2"
            >
              <ArrowLeft className="text-slate-700" size={24} />
              <MainIcon />
            </Link>
            <h2 className="text-2xl md:text-[36px] font-bold">
              Register Account
            </h2>
            <p className="text-sm md:text-lg text-[#757575] mt-2 mb-4">
              Let’s create your account
            </p>
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-[10px]">
                <div
                  className={`w-[25px] h-[25px] border border-custom-secondary rounded-full flex items-center justify-center cursor-pointer`}
                  onClick={() => handleToggle("individual")}
                >
                  <div
                    className={`${
                      isToggle
                        ? "bg-custom-primary scale-[0.8]"
                        : "bg-transparent scale-[0.6]"
                    } w-[25px] h-[25px] transition-all duration-200 rounded-full`}
                  ></div>
                </div>
                <p
                  className="text-[1.2rem] font-medium dark:text-[#abc2d3] text-[#424242] cursor-pointer"
                  onClick={() => handleToggle("individual")}
                >
                  Individual
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <div
                  className={`w-[25px] h-[25px] border border-custom-secondary rounded-full flex items-center justify-center cursor-pointer`}
                  onClick={() => handleToggle("enterprise")}
                >
                  <div
                    className={`${
                      isToggle1
                        ? "bg-custom-primary scale-[0.8]"
                        : "bg-transparent scale-[0.6]"
                    } w-[25px] h-[25px] transition-all duration-200 rounded-full`}
                  ></div>
                </div>
                <p
                  className="text-[1.2rem] font-medium dark:text-[#abc2d3] text-[#424242] cursor-pointer"
                  onClick={() => handleToggle("enterprise")}
                >
                  Enterprise
                </p>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-5">
              {/* First Name + Surname */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 md:py-3 border rounded-md outline-none"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Surname</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 md:py-3 border rounded-md outline-none"
                    placeholder="Enter surname"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <PhoneInput
                  international
                  defaultCountry="BD"
                  value={phone}
                  onChange={setPhone}
                  className="w-full px-4 py-2 md:py-3 border rounded-md outline-none"
                  placeholder="Enter phone number"
                />
              </div>

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
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Min 8 Characters with a combination of letters and numbers
                </p>

                {/* Strength Bar */}
                <div className="flex items-center justify-between my-4">
                  <div className="flex gap-2 flex-1 mr-6">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 flex-1 rounded-full ${
                          i < strengthLevel
                            ? strengthColors[strengthLevel - 1]
                            : "bg-gray-200"
                        }`}
                      ></div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 font-medium whitespace-nowrap">
                    {strengthLevel > 0
                      ? strengthText[strengthLevel - 1]
                      : "Too Short"}
                  </p>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block mb-1 font-medium">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full px-4 py-2 md:py-3 border rounded-md pr-10"
                    placeholder="Confirm password"
                  />
                  <div
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <Eye size={20} />
                    ) : (
                      <EyeOff size={20} />
                    )}
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 py-2">
                <input
                  type="checkbox"
                  className="appearance-none w-4 h-4 rounded border-2 border-gray-400 checked:bg-custom-primary checked:border-custom-primary cursor-pointer"
                />
                <p className="text-[#757575] text-sm">
                  By creating your account, you agree to our{" "}
                  <span className="text-primary underline cursor-pointer">
                    Terms and Conditions
                  </span>{" "}
                  &{" "}
                  <span className="text-primary underline cursor-pointer">
                    Privacy Policy
                  </span>
                  .
                </p>
              </div>

              {/* Submit Button */}
              <CommonBtn className="w-full !rounded-lg">Sign Up</CommonBtn>
            </form>

            {/* Already have account */}
            <p className="text-sm text-center mt-6">
              Already have an account?{" "}
              <Link
                to="/login"
                className="underline cursor-pointer font-medium text-black"
              >
                Login
              </Link>
            </p>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-gray-400 mt-10">
            ©2025 Logoipsum. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 w-full h-[300px] md:h-screen overflow-hidden">
        <img src={image} alt="Sign Up" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default SignUp;
