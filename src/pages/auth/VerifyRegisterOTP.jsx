import React, { useState } from "react";
import image from "../../assets/images/forgot.png";
import toast from "react-hot-toast";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import OTPInput from "otp-input-react";

import { useForm, Controller } from "react-hook-form";

const VerifyRegisterOTP = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { otp: "" },
  });

  const handleVerify = async (data) => {
    const email = localStorage.getItem("registration_email");
    if (!email) {
      toast.error("Email not found. Please register again.");
      return;
    }

    if (data.otp.length < 4) {
      toast.error("Please enter a 4-digit OTP.");
      return;
    }

    const toastId = toast.loading("Verifying OTP...");
    const payload = {
      email,
      otp: data.otp,
    };
    try {
      const res = await axiosPublic.post("/verify/registration", payload);
      if (res) {
        toast.success(res?.data?.message || "OTP verified successfully!", {
          id: toastId,
        });
        navigate("/login");
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      toast.error(
        error?.response?.data?.message ||
          "OTP verification failed. Please try again.",
        {
          id: toastId,
        },
      );
    }
  };

  const resendOTP = async () => {
    const email = localStorage.getItem("registration_email");
    if (!email) {
      toast.error("Email not found.");
      return;
    }
    const toastId = toast.loading("Resending OTP...");
    try {
      const res = await axiosPublic.post("/resend/registration/otp", { email });
      if (res) {
        toast.success(res?.data?.message || "OTP resent successfully!", {
          id: toastId,
        });
      }
    } catch (error) {
      console.error("OTP resend error:", error);
      toast.error(
        error?.response?.data?.message ||
          "OTP resend failed. Please try again.",
        { id: toastId },
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Content */}
      <div className="md:w-1/2 w-full flex items-center justify-center px-6 md:px-12 py-10">
        <div className="w-full max-w-lg flex flex-col h-full">
          {/* Centered Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl md:text-4xl font-bold">
              Check Your Email Inbox
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-2 mb-6 max-w-sm">
              we have sent OTP to your email Please check your inbox
            </p>

            <form
              onSubmit={handleSubmit(handleVerify)}
              className="w-full flex flex-col items-center"
            >
              <div className="flex justify-center">
                <Controller
                  name="otp"
                  control={control}
                  rules={{ required: true, minLength: 4 }}
                  render={({ field }) => (
                    <OTPInput
                      value={field.value}
                      onChange={field.onChange}
                      autoFocus
                      OTPLength={4}
                      otpType="number"
                      disabled={false}
                      secure
                      inputStyles={{
                        width: "4rem",
                        height: "4rem",
                        margin: "0 0.5rem",
                        fontSize: "1.5rem",
                        borderRadius: "0.5rem",
                        border: "2px solid #d1d5db",
                        textAlign: "center",
                        outline: "none",
                      }}
                      focusStyles={{
                        border: "2px solid #3b82f6",
                        boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.5)",
                      }}
                      className="otp-input-container text-center"
                    />
                  )}
                />
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-3 bg-custom-primary cursor-pointer  hover:bg-opacity-90 text-white font-semibold rounded-lg transition-all"
              >
                Verify
              </button>
            </form>

            <p className="text-sm mt-6">
              Didn’t received the email yet?{" "}
              <span
                onClick={resendOTP}
                className="hover:underline cursor-pointer text-custom-primary"
              >
                Resend
              </span>
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
        <img
          src={image}
          alt="Forgot Password"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default VerifyRegisterOTP;
