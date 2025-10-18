import {
  Lock,
  Man,
  Mobile,
  Notificartion,
  Paymentt,
  Protect,
  World,
} from "@/assets/icon";
import { MdOutlineVerifiedUser } from "react-icons/md";
import React, { useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import { Shield } from "lucide-react";

const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [toggles, setToggles] = useState({
    email: false,
    investment: false,
    opportunities: false,
    marketing: false,
  });

  const handleToggle = (key) => {
    setToggles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  return (
    <div>
      <ScrollRestoration />
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold my-2 text-[#000000]">
        Settings
      </h2>
      <p className="text-sm text-[#4B5563]">
        Manage your account preferences and security settings
      </p>
      <p className="flex items-center gap-2 my-4 text-lg font-bold cursor-pointer">
        <Man /> Account Information
      </p>
      <div className="flex flex-col md:flex-row  justify-between">
        <div className="w-full md:w-[68%]">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg mt-6">
            <h2 className="flex items-center gap-4 text-lg font-bold cursor-pointer ">
              <Notificartion /> Notification Preferences
            </h2>
            <div className="space-y-3 mt-4">
              {[
                {
                  key: "email",
                  title: "Email Notifications",
                  desc: "Receive updates via email",
                },
                {
                  key: "investment",
                  title: "Investment Updates",
                  desc: "Get notified about investment performance",
                },
                {
                  key: "opportunities",
                  title: "New Opportunities",
                  desc: "Alerts for new investment opportunities",
                },
                {
                  key: "marketing",
                  title: "Marketing Communications",
                  desc: "Receive promotional emails",
                },
              ].map(({ key, title, desc }) => (
                <div key={key} className="flex justify-between items-center">
                  <div>
                    <h2 className="font-semibold text-[#0F172A]">{title}</h2>
                    <p className="text-sm text-[#4B5563]">{desc}</p>
                  </div>

                  <div
                    onClick={() => handleToggle(key)}
                    className={`w-[50px] h-[25px] px-[0.150rem] py-[0.160rem] border rounded-full relative cursor-pointer transition-colors duration-500 ${
                      toggles[key]
                        ? "bg-black border-black"
                        : "bg-[#e5e7eb] border-[#e5e7eb]"
                    }`}
                  >
                    <div
                      className={`w-[20px] h-[20px] rounded-full transition-all duration-500 ${
                        toggles[key]
                          ? "translate-x-[27px] bg-white"
                          : "translate-x-[1px] bg-white"
                      }`}
                      style={{ boxShadow: "1px 2px 5px 2px rgba(0,0,0,0.1)" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white mt-5 rounded-2xl p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-6 h-6 text-gray-700" />
              <h1 className="text-xl font-semibold text-gray-900">
                Security Settings
              </h1>
            </div>

            {/* Two-Factor Authentication Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h2 className="text-base font-medium text-gray-900 mb-1">
                    Two-Factor Authentication
                  </h2>
                  <p className="text-sm text-gray-600">
                    Add an extra layer of security
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-green-100 text-custom-primary px-3 py-1 rounded-full text-sm font-medium">
                    Enabled
                  </span>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
                    Manage
                  </button>
                </div>
              </div>
            </div>

            {/* Change Password Section */}
            <div>
              <h2 className="text-base font-medium text-gray-900 mb-4">
                Change Password
              </h2>

              <div className="space-y-4">
                <div>
                  <input
                    type="password"
                    placeholder="Current password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="New password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <button className="bg-custom-primary hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[30%]">
          <div className="space-y-2 bg-white p-5 rounded-lg">
            <h2 className="text-lg font-bold">Account Summary</h2>
            <div className="flex justify-between items-center">
              <p className="text-[#4B5563]">Account Type</p>
              <button className="px-3 py-1 text-[14px] bg-custom-primary text-white border rounded-2xl my-1 cursor-pointer">
                Premium
              </button>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#4B5563]">Member Since</p>
              <p className="text-[#000000] font-medium">January 2024</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#4B5563]">Verification Status</p>
              <button className="px-3 py-1 text-[14px] bg-[#DCFCE7] text-[#166534] font-semibold border rounded-2xl my-1 cursor-pointer">
                Verified
              </button>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#4B5563]">Total Investments</p>
              <p className="text-[#000000] font-medium">8</p>
            </div>
          </div>
          <div className="space-y-3 bg-white p-5 rounded-lg mt-4">
            <h2 className="text-lg font-bold">Quick Actions</h2>
            <p className="flex items-center gap-4 text-[15px]">
              <Paymentt /> Payment Methods
            </p>
            <p className="flex items-center gap-4 text-[15px]">
              <Lock />
              Privacy Settings
            </p>

            <p className="flex items-center gap-4 text-[15px]">
              <Mobile /> Mobile App
            </p>
            <p className="flex items-center gap-4 text-[15px]">
              <World /> Language & Region
            </p>
          </div>
          <div className="space-y-3 bg-white p-5 rounded-lg mt-4">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <MdOutlineVerifiedUser className="text-custom-primary text-2xl" />
                </div>
                <h1 className="text-xl font-semibold text-gray-900">
                  Identity Verification
                </h1>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Verify your identity to unlock full platform features and
                increase your investment limits.
              </p>
            </div>

            {/* Verification Card */}
            <div className="bg-green-50 border border-green-100 rounded-lg p4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <MdOutlineVerifiedUser className="text-custom-primary text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-1">
                      Verify Your Identity
                    </h2>
                    <p className="text-gray-600">
                      Complete verification process
                    </p>
                  </div>
                </div>

                <button className="bg-custom-primary hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
