import {
  Lock,
  Man,
  Mobile,
  Notificartion,
  Paymentt,
  Protect,
  World,
} from "@/assets/icon";
import React, { useState } from "react";
import { ScrollRestoration } from "react-router-dom";

const Settings = () => {
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
      <h2 className="text-3xl font-bold my-2 text-[#000000]">Settings</h2>
      <p className="text-sm text-[#4B5563]">
        Manage your account preferences and security settings
      </p>
      <p className="flex items-center gap-2 my-4 text-lg font-bold cursor-pointer">
        <Man /> Account Information
      </p>
      <div className="flex items-center justify-between">
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
            <div className="flex justify-start">
              <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-black  transition-all duration-200">
                Save Changes
              </button>
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

          <div className="bg-white p-5 rounded-lg mt-6">
            <h2 className="flex items-center gap-4 text-lg font-bold cursor-pointer ">
              <Protect /> Security Settings
            </h2>
            <div className="space-y-3 mt-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Two-Factor Authentication</h3>
                  <p className="text-sm">Add an extra layer of security</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <button className="px-2 py-[2px] text-[13px] bg-[#DCFCE7] text-[#166534] font-semibold rounded-2xl cursor-pointer">
                    Verified
                  </button>
                  <button className="px-3 py-2 text-[14px] bg-white text-black hover:bg-black hover:text-white border rounded-lg my-1 cursor-pointer">
                    Manage
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Password</h3>
                  <p className="text-sm text-[#4B5563]">
                    Last changed 30 days ago
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-2 text-[14px] bg-white text-black hover:bg-black hover:text-white border rounded-lg my-1 cursor-pointer">
                    Change Password
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Login Sessions</h3>
                  <p className="text-sm text-[#4B5563]">
                    Manage active sessions
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-2 text-[14px] bg-white text-black hover:bg-black hover:text-white border rounded-lg my-1 cursor-pointer">
                    View Sessions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[30%]">
          <div className="space-y-2 bg-white p-5 rounded-lg">
            <h2 className="text-lg font-bold">Account Summary</h2>
            <div className="flex justify-between items-center">
              <p className="text-[#4B5563]">Account Type</p>
              <button className="px-3 py-1 text-[14px] bg-black text-white border rounded-2xl my-1 cursor-pointer">
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
          <div className="space-y-3 bg-[#FEF2F2] p-5 rounded-lg mt-4">
            <h2 className="font-bold text-[#991B1B]">Danger Zone</h2>
            <p className="text-sm text-[#DC2626]">
              These actions cannot be undone
            </p>
            <button className="px-3 py-2 text-[15px] text-[#DC2626] bg-white border hover:text-white hover:bg-[#DC2626] border-[#DC2626] rounded-lg mt-2 cursor-pointer w-full text-center">
              Deactivate Account
            </button>
            <button className="px-3 py-2 text-[15px] text-[#DC2626] bg-white hover:text-white hover:bg-[#DC2626] border border-[#DC2626] rounded-lg my-1 cursor-pointer w-full text-center">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
