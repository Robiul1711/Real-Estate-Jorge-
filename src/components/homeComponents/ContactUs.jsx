import React, { useRef } from "react";
import { ImageProvider } from "../common/ImageProvider";
import CommonBtn from "../common/CommonButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useApiMutation } from "@/hooks/useApiMutation";
import { useForm, Controller } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const ContactUs = () => {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRef = useRef(null);

  // 1. Initialize React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  // 2. Setup Mutation
  const { mutate, isPending } = useApiMutation({
    url: "/contact",
    method: "post",
    secure: true,
    successMessage: "Message sent successfully!",
    onSuccess: () => {
      reset(); // Clear form after successful submission
    },
  });

  const onSubmit = (data) => {
    // console.log(data);
    mutate(data);
  };

  // 3. GSAP Animations
  useGSAP(() => {
    gsap.from([cardRef.current, buttonRef.current], {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  });

  return (
    <div id="contact" ref={sectionRef} className="section-padding-x py-10">
      <div
        ref={cardRef}
        className="bg-white shadow-xl border border-gray-100 rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-6"
      >
        {/* Form Section */}
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl lg:text-[32px] font-semibold">
            Do You Have Any Questions?
          </h2>
          <p className="text-gray-600 mt-2 mb-6 text-lg">
            We will be happy to assist you
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <input
                  {...register("last_name", {
                    required: "Last name is required",
                  })}
                  type="text"
                  placeholder="Last Name"
                  className={`w-full border rounded-md px-3 py-3 bg-gray-50 focus:outline-none focus:ring-1 ${errors.last_name ? "border-red-500" : "border-gray-200"}`}
                />
                {errors.last_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
              <div className="w-1/2">
                <input
                  {...register("first_name", {
                    required: "First name is required",
                  })}
                  type="text"
                  placeholder="First Name"
                  className={`w-full border rounded-md px-3 py-3 bg-gray-50 focus:outline-none focus:ring-1 ${errors.first_name ? "border-red-500" : "border-gray-200"}`}
                />
                {errors.first_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.first_name.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="Email"
                className={`w-full border rounded-md px-3 py-3 bg-gray-50 focus:outline-none focus:ring-1 ${errors.email ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <div
                    className={`flex items-center w-full border rounded-md px-3 bg-gray-50 focus-within:ring-1 focus-within:ring-custom-primary ${errors.phone ? "border-red-500" : "border-gray-200"}`}
                  >
                    <PhoneInput
                      {...field}
                      international
                      defaultCountry="ES"
                      placeholder="Phone Number"
                      className="w-full flex items-center [&_input]:border-none [&_input]:bg-transparent [&_input]:py-3 [&_input]:px-2 [&_input]:outline-none [&_input]:flex-1 [&_.PhoneInputCountry]:flex [&_.PhoneInputCountry]:items-center [&_.PhoneInputCountry]:gap-1"
                    />
                  </div>
                )}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                {...register("message", {
                  required: "Please enter your message",
                  minLength: { value: 10, message: "Message is too short" },
                })}
                rows="4"
                placeholder="Message"
                className={`w-full border rounded-md px-3 py-3 bg-gray-50 focus:outline-none focus:ring-1 ${errors.message ? "border-red-500" : "border-gray-200"}`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              disabled={isPending}
              type="submit"
              className="w-full bg-custom-primary text-white py-3 rounded-md hover:bg-green-700 transition cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {isPending ? "Sending..." : "Connect with Us"}
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative overflow-hidden rounded-xl">
          <img
            src={ImageProvider.signup}
            alt="Contact support"
            className="w-full h-full min-h-[400px] object-cover rounded-xl hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>
      </div>

      {/* Bottom Button */}
      <div ref={buttonRef} className="flex justify-center mt-8">
        <CommonBtn>Start Investing Now</CommonBtn>
      </div>
    </div>
  );
};

export default ContactUs;
