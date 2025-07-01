import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { MainIcon } from "@/assets/icon";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Properties", href: "/properties" },
  { name: "About", href: "/about" },
  { name: "Agents", href: "/agents" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);
  const closeMobileMenu = () => setMobileOpen(false);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 section-padding-x right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-4 "
      }`}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link to="/" onClick={closeMobileMenu} className="text-center">
          <p>
            <MainIcon className="w-44 h-10" />
          </p>
        </Link>

        <div className="flex items-center gap-[150px]">
          {/* Desktop Navigation */}
          {location.pathname !== "/step-form" && (
            <nav className="hidden lg:block">
              <ul className="flex space-x-12  font-medium">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <li key={index} className="group relative">
                      <Link
                        to={link.href}
                        onClick={closeMobileMenu}
                        className={`transition duration-300 ${
                          isActive
                            ? "text-[#002E33] font-bold"
                            : "text-Light group-hover:text-[#002E33]"
                        }`}
                      >
                        {link.name}
                        <span
                          className={`absolute left-0 -bottom-1 w-full h-0.5 bg-[#002E33] text-[#002E33] origin-left transition-transform duration-300 ${
                            isActive
                              ? "scale-x-100 text-[#002E33]"
                              : "scale-x-0 group-hover:scale-x-100 "
                          }`}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login">
            <button className="text-[17px] font-medium px-6 rounded-md py-[7px] border border-primary relative before:absolute overflow-hidden before:translate-x-[-200px] hover:before:translate-x-0 before:z-[-1] before:translate-y-12 dark:text-black dark:border-black dark:z-0 dark:before:bg-black before:transition hover:before:translate-y-0 before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-[#111] before:top-0 before:left-0 cursor-pointer">
              Login
            </button>
          </Link>

          <Link to="/sign-up">
            <button className="text-[17px] font-medium px-6 rounded-md py-[7px] border border-primary relative before:absolute overflow-hidden before:translate-x-[-200px] hover:before:translate-x-0 before:z-[-1] before:translate-y-12 dark:text-black dark:border-black dark:z-0 dark:before:bg-black before:transition hover:before:translate-y-0 before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-[#111] before:top-0 before:left-0 cursor-pointer">
              Signup
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}

        <button
          className="lg:hidden text-[#002E33] z-50"
          onClick={toggleMobileMenu}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div
        ref={menuRef}
        className={`fixed top-[72px] left-0 h-auto rounded-br-lg w-72 bg-Primary z-50 p-6 transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-6 text-base pt-12">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={index}
                to={link.href}
                onClick={closeMobileMenu}
                className={`block transition duration-300 ${
                  isActive
                    ? "text-[#FFD8B1] font-semibold"
                    : "text-white hover:text-[#FFB066]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="block w-full mt-4 bg-[#002E33] text-white font-medium py-2 px-4 rounded-full text-center hover:opacity-90 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
