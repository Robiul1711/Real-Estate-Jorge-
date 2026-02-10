import React, { useState } from "react";
import image from "../../assets/images/newpassword.png";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { MainIcon } from "@/assets/icon";
import { Link, useNavigate } from "react-router-dom";
import CommonBtn from "@/components/common/CommonButton";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useEmail } from "@/hooks/useEmail";

const NewPassword = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { resetToken } = useEmail();

  // 👁️ Password visibility states
  // 👁️ Password visibility states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ✅ Form setup
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const newPassword = watch("new_password");

  // ✅ Strength calculation
  const getPasswordStrength = () => {
    if (!newPassword) return 0;
    let strength = 0;
    if (newPassword.length >= 8) strength++;
    if (/[a-z]/.test(newPassword)) strength++;
    if (/[A-Z]/.test(newPassword)) strength++;
    if (/[0-9]/.test(newPassword)) strength++;
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

  // ✅ Mutation for password reset
  const resetPasswordMutation = useMutation({
    mutationFn: async (formData) => {
      const email = localStorage.getItem("email");
      const payload = {
        email,
        reset_token: resetToken,
        new_password: formData.new_password,
        new_password_confirmation: formData.new_password_confirmation,
      };

      const response = await axiosSecure.post("/reset-password", payload);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || "Password reset successfully!");
      reset();
      localStorage.removeItem("email");
      navigate("/new-password-success");
    },
    onError: (error) => {
      const message =
        error?.response?.data?.message || "Password reset failed!";
      toast.error(message);
    },
  });

  // ✅ Form submit handler
  const onSubmit = (data) => {
    resetPasswordMutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center px-6 md:px-12 py-10">
        <div className="w-full max-w-xl flex flex-col min-h-full">
          {/* Header */}
          <div className="flex-1 flex flex-col justify-center">
            <Link
              to="/login"
              className="flex items-center justify-center mb-4 gap-2"
            >
              <ArrowLeft
                className="text-custom-primary cursor-pointer"
                size={24}
              />
              <MainIcon className="w-44 lg:w-auto" />
            </Link>

            <div className="text-center">
              <h2 className="text-2xl md:text-[36px] font-bold">
                Create New Password
              </h2>
              <p className="text-sm md:text-lg text-[#757575] mt-3 mb-8 max-w-md mx-auto">
                Enter your new password to reset your account
              </p>
            </div>

            {/* ✅ Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Password */}
              <div>
                <label className="block mb-1 font-medium">New Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-2 md:py-3 border rounded-md pr-10"
                    placeholder="Enter new password"
                    {...register("new_password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                  />
                  <div
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </div>
                </div>
                {errors.new_password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.new_password.message}
                  </p>
                )}
                <p className="text-sm text-gray-500 mt-2 text-left">
                  Min 8 characters with a mix of letters and numbers
                </p>

                {/* Strength Bar */}
                <div className="flex items-center justify-between my-6">
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
                    {...register("new_password_confirmation", {
                      required: "Confirm your password",
                      validate: (value) =>
                        value === newPassword || "Passwords do not match",
                    })}
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
                {errors.new_password_confirmation && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.new_password_confirmation.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <CommonBtn
                as="button"
                type="submit"
                disabled={resetPasswordMutation.isPending}
                className="w-full !rounded-lg"
              >
                {resetPasswordMutation.isPending ? "Submitting..." : "Submit"}
              </CommonBtn>
            </form>

            {/* Already have account */}
            <p className="text-sm text-center mt-6">
              Don’t have an account?{" "}
              <Link
                to="/sign-up"
                className="underline cursor-pointer font-medium text-custom-primary hover:text-custom-secondary"
              >
                Register
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
      <div className="md:w-1/2 w-full h-[300px] md:h-screen">
        <img
          src={image}
          alt="Reset Password"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default NewPassword;
