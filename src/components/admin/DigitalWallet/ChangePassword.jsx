import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { Eye, EyeOff } from "lucide-react"; // 👁️ Import icons

const ChangePassword = () => {
  const axiosSecure = useAxiosSecure();

  // 👁️ Password visibility state
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // ✅ React Hook Form setup
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const newPassword = watch("new_password");

  // ✅ TanStack Query Mutation
  const changePasswordMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosSecure.post("/update-password", data);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || "Password updated successfully!");
      reset();
    },
    onError: (error) => {
      const message =
        error?.response?.data?.message || "Failed to update password!";
      toast.error(message);
    },
  });

  // ✅ Handle submit
  const onSubmit = (data) => {
    changePasswordMutation.mutate(data);
  };

  return (
    <div>
      <h2 className="text-base font-medium text-gray-900 mb-6">
        Change Password
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100"
      >
        {/* Old Password */}
        <div className="col-span-1 md:col-span-2 relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Password
          </label>
          <div className="relative">
            <input
              type={showOld ? "text" : "password"}
              placeholder="Enter current password"
              {...register("old_password", {
                required: "Current password is required",
              })}
              className={`w-full px-4 py-3 pr-10 border rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 ${
                errors.old_password
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-green-500"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowOld((prev) => !prev)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showOld ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.old_password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.old_password.message}
            </p>
          )}
        </div>

        {/* New Password */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <div className="relative">
            <input
              type={showNew ? "text" : "password"}
              placeholder="Enter new password"
              {...register("new_password", {
                required: "New password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className={`w-full px-4 py-3 pr-10 border rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 ${
                errors.new_password
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-green-500"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowNew((prev) => !prev)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.new_password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.new_password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm New Password
          </label>
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm new password"
              {...register("new_password_confirmation", {
                required: "Please confirm your new password",
                validate: (value) =>
                  value === newPassword || "Passwords do not match",
              })}
              className={`w-full px-4 py-3 pr-10 border rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 ${
                errors.new_password_confirmation
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-green-500"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirm((prev) => !prev)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.new_password_confirmation && (
            <p className="text-red-500 text-sm mt-1">
              {errors.new_password_confirmation.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 flex justify-end">
          <button
            type="submit"
            disabled={changePasswordMutation.isPending}
            className="bg-custom-primary hover:bg-green-600 text-white px-8 py-3 rounded-md font-medium transition-colors disabled:opacity-70"
          >
            {changePasswordMutation.isPending
              ? "Updating..."
              : "Update Password"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
