import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { AuthContext } from "@/context";

const UpdateProfile = () => {
  const axiosSecure = useAxiosSecure();
  const { refetchUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const updateProfileMutation = useMutation({
    mutationFn: async (formData) => {
      const response = await axiosSecure.post("/profile/update", formData);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || "Profile updated successfully!");
      refetchUser(); // 🔥 Refresh user data immediately
      reset();
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    },
  });

  const onSubmit = (formData) => {
    updateProfileMutation.mutate(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              {...register("name", { required: "Name is required" })}
              className={`w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-black"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              placeholder="123 Main Street"
              {...register("address", { required: "Address is required" })}
              className={`w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 ${
                errors.address
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-black"
              }`}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              placeholder="+1 (123) 456-7890"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?\d{7,15}$/,
                  message: "Enter a valid phone number",
                },
              })}
              className={`w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 ${
                errors.phone
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-black"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={updateProfileMutation.isPending}
          className="bg-custom-primary hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors disabled:opacity-70"
        >
          {updateProfileMutation.isPending
            ? "Updating..."
            : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
