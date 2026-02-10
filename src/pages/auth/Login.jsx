import React, { useState } from "react";
import image from "../../assets/images/login.png";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { MainIcon } from "@/assets/icon";
import { Link, useNavigate } from "react-router-dom";
import CommonBtn from "@/components/common/CommonButton";
import { ImageProvider } from "@/components/common/ImageProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useEmail } from "@/hooks/useEmail";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setToken } = useEmail();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Logging in...");
    try {
      const res = await axiosPublic.post("/login", data);
      if (res) {
        toast.success("Login successful!", { id: toastId });
        console.log(res?.data?.token);
        localStorage.setItem("token", res?.data?.token);
        setToken(res?.data?.token);
        navigate("/");
      }
    } catch (error) {
      console.log("Login error:", error);
      toast.error(error.response.data.message, { id: toastId });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center px-6 md:px-12 py-10">
        <div className="w-full max-w-lg flex flex-col h-full">
          {/* Top (form content) */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Logo + Back */}
            <Link
              to="/"
              className="flex items-center justify-center mb-6 gap-2"
            >
              <ArrowLeft className="text-slate-700" size={24} />
              <img src={ImageProvider.civia} alt="image" />
            </Link>

            <h2 className="text-2xl md:text-4xl font-bold">
              Welcome to Logo Ipsum
            </h2>
            <p className="text-sm md:text-lg text-gray-500 mt-2 mb-6">
              Login to your account
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full px-4 py-2 md:py-3 border rounded-md outline-none"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <div className="text-red-500 text-sm mt-1">
                    Email is required
                  </div>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block mb-1 font-medium">Password</label>
                <div className="relative">
                  <input
                    {...register("password", { required: true })}
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-2 md:py-3 border rounded-md pr-10"
                    placeholder="Enter password"
                  />
                  <div
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </div>
                </div>
                {errors.password && (
                  <div className="text-red-500 text-sm mt-1">
                    Password is required
                  </div>
                )}
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <Link to={"/forgot-password"}>
                  <p className="text-sm font-medium hover:underline text-gray-700">
                    Forgot Password?
                  </p>
                </Link>
              </div>

              {/* Submit Button */}
              <CommonBtn type="submit" className="w-full !rounded-lg">
                Login
              </CommonBtn>
            </form>

            {/* Already have account */}
            <p className="text-sm text-center mt-6">
              Don&apos;t have an account?{" "}
              <Link
                to="/sign-up"
                className="underline font-medium text-custom-primary hover:text-gray-600"
              >
                Register
              </Link>
            </p>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-gray-400 mt-6">
            ©2025 Logoipsum. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 w-full h-[250px] md:h-screen">
        <img src={image} alt="Login" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Login;
