import React from "react";
import image from "../../assets/images/newpassword.png";
import { ImageProvider } from "@/components/common/ImageProvider";
import CommonBtn from "@/components/common/CommonButton";

const NewPasswordSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Content */}
      <div className="md:w-1/2 w-full flex items-center justify-center px-6 md:px-12 py-10">
        <div className="w-full max-w-lg flex flex-col h-full">
          {/* Centered Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <img src={ImageProvider.thanks} alt="logo" />
            <h2 className="text-2xl md:text-3xl font-bold my-2">Thanks you!</h2>
            <p className="text-sm md:text-base text-gray-500 mt-2 mb-6 max-w-sm mx-auto">
              Your password has been successfully changed! You're all set to
              enjoy your account with enhanced security.
            </p>
            <CommonBtn path={"/login"} className="w-full mt-2 !rounded-lg">
              Back to Login
            </CommonBtn>
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

export default NewPasswordSuccess;
