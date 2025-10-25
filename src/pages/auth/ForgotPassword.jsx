import React from "react";
import image from "../../assets/images/forgot.png";
import { ArrowLeft } from "lucide-react";
import { MainIcon } from "@/assets/icon";
import { Link, useNavigate } from "react-router-dom";
import CommonBtn from "@/components/common/CommonButton";
import { ImageProvider } from "@/components/common/ImageProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import toast from "react-hot-toast";


const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const axoisPublic = useAxiosPublic();
  const navigate = useNavigate();


  const onSubmit = async (data) => {
    const toastId = toast.loading("Sending password reset email...");
    try {
      const res = await axoisPublic.post('/forgot-password', data);
      if (res) {
        toast.success(res?.data?.message || "Password reset email sent!", { id: toastId });
        localStorage.setItem('reset_email', data.email);
        navigate('/verify-reset-otp');
      }
    } catch (error) {
      console.error("Forgot password error:", error);
      toast.error(error?.response?.data?.message || "Failed to send password reset email.", { id: toastId });
    }
  }
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center px-6 md:px-12 py-10">
        <div className="w-full max-w-lg flex flex-col h-full">
          {/* Top (form content) */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Logo + Back */}
            <Link
              to="/login"
              className="flex items-center justify-center mb-6 gap-2"
            >
              <ArrowLeft className="text-slate-700" size={24} />
              <img src={ImageProvider.civia} alt="image" />
            </Link>

            {/* Headings */}
            <h2 className="text-2xl md:text-4xl font-bold">Forgot Password</h2>
            <p className="text-sm md:text-lg text-gray-500 mt-2 mb-6">
              We’ll send a new password to your registered email.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="w-full px-4 py-2 md:py-3 border rounded-md outline-none"
                  placeholder="Enter your email"
                />
                {errors.email && (<div className="text-red-500 text-sm mt-1">Email is required</div>)}
              </div>


              <CommonBtn
                type="submit"
                path={"/check-email-box"}
                className="w-full !rounded-lg mt-3"
              >
                Send
              </CommonBtn>

            </form>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-gray-400 mt-6">
            ©2025 Logoipsum. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 w-full h-[250px] md:h-screen">
        <img
          src={image}
          alt="Forgot Password"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
