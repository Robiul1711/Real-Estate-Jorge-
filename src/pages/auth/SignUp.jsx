import React, { useState } from "react";
import image from "../../assets/images/signup.png";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import CommonBtn from "@/components/common/CommonButton";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { ImageProvider } from "@/components/common/ImageProvider";
import { useForm } from "react-hook-form"
import useAxiosPublic from "@/hooks/useAxiosPublic";
import toast from "react-hot-toast";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  const [isToggle1, setIsToggle1] = useState(false);
  const [phone, setPhone] = useState("");
  const [account_type, setAccount_type] = useState("");
  const [terms_accepted, setTerms_accepted] = useState(0);

  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

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
      setAccount_type("individual");
      setIsToggle(true);
      setIsToggle1(false);
    } else {
      setAccount_type("enterprise");
      setIsToggle(false);
      setIsToggle1(true);
    }
  };

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Registering...");
    const payload = {
      name: data.name,
      sur_name: data.sur_name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      password_confirmation: data.password_confirmation,
      account_type: account_type,
      terms_accepted: data.terms_accepted ? 1 : 0,
    }

    try {
      const res = await axiosPublic.post("/register", payload);
      if (res) {
        localStorage.setItem("registration_email", data.email);
        toast.success("Registration successful!", { id: toastId });
        navigate("/register-otp-verify");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, { id: toastId });
    }
  }

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
              <img src={ImageProvider.civia} alt="image" />
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
                  className={`w-[18px] lg:w-[25px] h-[18px] lg:h-[25px] border border-custom-secondary rounded-full flex items-center justify-center cursor-pointer`}
                  onClick={() => handleToggle("individual")}
                >
                  <div
                    className={`${isToggle
                      ? "bg-custom-primary scale-[0.8]"
                      : "bg-transparent scale-[0.6]"
                      } w-[16px] lg:w-[25px] h-[16px] lg:h-[25px] transition-all duration-200 rounded-full`}
                  ></div>
                </div>
                <p
                  className="text-[1rem] lg:text-[1.2rem] font-medium dark:text-[#abc2d3] text-[#424242] cursor-pointer"
                  onClick={() => handleToggle("individual")}
                >
                  Individual
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <div
                  className={`w-[18px] lg:w-[25px] h-[18px] lg:h-[25px] border border-custom-secondary rounded-full flex items-center justify-center cursor-pointer`}
                  onClick={() => handleToggle("enterprise")}
                >
                  <div
                    className={`${isToggle1
                      ? "bg-custom-primary scale-[0.8]"
                      : "bg-transparent scale-[0.6]"
                      } w-[16px] lg:w-[25px] h-[16px] lg:h-[25px] transition-all duration-200 rounded-full`}
                  ></div>
                </div>
                <p
                  className="text-[1rem] lg:text-[1.2rem] font-medium dark:text-[#abc2d3] text-[#424242] cursor-pointer"
                  onClick={() => handleToggle("enterprise")}
                >
                  Enterprise
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* First Name + Surname */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">First Name</label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className="w-full px-4 py-2 md:py-3 border rounded-md outline-none"
                    placeholder="Enter first name"
                  />

                  {errors.name && <span className="text-red-500">First name is required</span>}
                </div>
                <div>
                  <label className="block mb-1 font-medium">Surname</label>
                  <input
                    type="text"
                    {...register("sur_name", { required: true })}
                    className="w-full px-4 py-2 md:py-3 border rounded-md outline-none"
                    placeholder="Enter surname"
                  />
                  {errors.surname && <span className="text-red-500">Surname is required</span>}
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <PhoneInput
                  international
                  defaultCountry="BD"
                  {...register("phone", { required: true })}
                  value={phone}
                  onChange={setPhone}
                  className="w-full px-4 py-2 md:py-3 border rounded-md outline-none"
                  placeholder="Enter phone number"
                />
                {errors.phone && <span className="text-red-500">Phone number is required</span>}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full px-4 py-2 md:py-3 border rounded-md outline-none"
                  placeholder="Enter your email"
                />
                {errors.email && <span className="text-red-500">Email is required</span>}
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
                    {...register("password", { required: true })}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </div>
                  {errors.password && <span className="text-red-500">Password is required</span>}
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
                        className={`h-2 flex-1 rounded-full ${i < strengthLevel
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
                    {...register("password_confirmation", { required: true })}
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
                  {errors.password_confirmation && <span className="text-red-500">Confirm password is required</span>}
                </div>
              </div>

              {/* Terms */}
              <div className="">
                <div className="flex items-start gap-3 py-2">
                  <input
                    type="checkbox"
                    {...register("terms_accepted", { required: true })}
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
                {errors.terms_accepted && <span className="text-red-500">You must accept the terms</span>}
              </div>
              {/* Submit Button */}
              <CommonBtn type="submit" className="w-full !rounded-lg">Sign Up</CommonBtn>
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
