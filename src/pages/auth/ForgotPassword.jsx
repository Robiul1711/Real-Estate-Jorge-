import React, { useState } from "react";
import image from "../../assets/images/forgot.png";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { MainIcon } from "@/assets/icon";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 w-full section-padding-x py-8 md:pt-16 relative flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col justify-center w-full md:w-[80%] mx-auto">
          <Link to={"/"}>
            <MainIcon className="w-48 absolute left-22 top-20" />
          </Link>

          <Link to={"/login"}>
            <p className="mt-18 mb-3">
              <ArrowLeft className="text-slate-700" size={20} />
            </p>
          </Link>

          <h2 className="text-2xl md:text-[40px] font-bold">Forgot Password</h2>
          <p className="text-sm md:text-lg text-[#757575] my-4">
            We will send a new password to your account from email
          </p>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 md:py-3 border rounded-md outline-none"
                placeholder="Enter your email"
              />
            </div>
            <Link to={"/new-password"}>
              <button className="w-full bg-black text-white py-3 font-medium rounded-xl cursor-pointer relative overflow-hidden before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#111827] before:translate-x-[-200px] hover:before:translate-x-0 before:translate-y-12 hover:before:translate-y-0 before:duration-300 before:z-[-1] z-0 my-3">
                Send
              </button>
            </Link>
          </form>
        </div>
        <p className="text-center text-xs text-gray-400">
          ©2025 Logoipsum. All Rights Reserved.
        </p>
      </div>

      <div className="md:w-1/2 w-full h-[300px] md:h-screen">
        <img src={image} alt="Sign Up" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ForgotPassword;
