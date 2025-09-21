import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import profile from "../../assets/images/profile.png";
import { Notificartion } from "@/assets/icon";

const CommonNavbar = ({ open, setOpen }) => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="flex items-center gap-5 justify-between w-full py-3 md:py-5 px-3  rounded-2xl bg-white">
      <div className="flex items-center gap-4">
        <span
          onClick={() => setOpen(!open)}
          className="xlg:hidden block cursor-pointer"
        >
          <GiHamburgerMenu color="black" size={26} />
        </span>
        <div className=" text-black">
          <h1 className="md:text-3xl font-semibold">
            Welcome Back, Jorge Franco!
          </h1>
          <p className="mt-1 text-sm sm:text-base text-[#666666]">
            Elevate your financial future with smart property investments.
          </p>
        </div>
      </div>

      <div className="flex items-center md:gap-6 gap-3 w-20">
        {/* <span>
          <Notificartion color="black" size={24} />
        </span> */}
        <span>
          <img className="w-12 h-12 rounded-full" src={profile} alt="image" />
        </span>
      </div>
    </div>
  );
};

export default CommonNavbar;
