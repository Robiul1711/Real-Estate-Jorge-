import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { FooterIcon } from "@/assets/icon";

const SideBar = ({ sidebar, open, setOpen }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } xl:hidden z-50`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`h-full py-8 bg-[#FFF] backdrop-blur-md lg:px-8 px-4 flex flex-col justify-between shadow-md fixed xl:static transition-all duration-300 z-[999] ${
          open ? "left-0 top-0 w-[320px]" : "-left-full xl:w-[320px] w-[320px]"
        }`}
      >
        {/* Logo */}
        <Link to={"/"} className="flex justify-center mb-6">
          <FooterIcon className="text-black w-36" color="black" />
        </Link>

        {/* Links */}
        <div className="flex flex-col gap-3 flex-grow">
          {sidebar.map((item, index) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200 ${
                isActive(item.path)
                  ? "bg-[#2F2F2F] text-white"
                  : "text-black hover:bg-[#2F2F2F] hover:text-white"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.text}
            </Link>
          ))}
        </div>

        {/* Logout */}
        <div className="flex items-center gap-3 px-4 py-2 cursor-pointer text-black">
          <IoLogOutOutline />
          <p className="font-medium">Log Out</p>
        </div>
      </div>
    </>
  );
};

export default SideBar;
