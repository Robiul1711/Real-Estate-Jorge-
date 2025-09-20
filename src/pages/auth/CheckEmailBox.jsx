import React from "react";
import image from "../../assets/images/forgot.png";

const CheckEmailBox = () => {
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
              we have sent a password reset link to your email Please check your
              inbox
            </p>
            <p className="text-sm">
              Didn’t received the email yet?{" "}
              <span className="hover:underline cursor-pointer text-custom-primary">
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

export default CheckEmailBox;
