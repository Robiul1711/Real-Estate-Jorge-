import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { MainIcon } from "@/assets/icon";
import { ImageProvider } from "@/components/common/ImageProvider";
import { useAuth } from "@/hooks/useAuth";
import UserDropdown from "./UserDropdown";
import { useEmail } from "@/hooks/useEmail";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Who We Are", href: "/about" },
  { name: "Statistics", href: "/statistics" },
  {
    name: "Discovers",
    sublinks: [
      {
        id: 3,
        name: "Ambassadors",
        href: "/ambassadors",
      },
      {
        id: 4,
        name: "Learn",
        href: "/learn",
      },
    ],
  },
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  const { token } = useEmail();
const {user,logout}=useAuth();
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
        scrolled
          ? "bg-white shadow-md py-1"
          : "bg-white xl:bg-transparent py-4 "
      }`}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link to="/" onClick={closeMobileMenu} className="text-center">
          <p>
            <img src={ImageProvider.civia} alt="image" />
          </p>
        </Link>

        <div className="flex items-center gap-[150px]">
          {/* Desktop Navigation */}
          {location.pathname !== "/step-form" && (
            <nav className="hidden lg:block">
              <ul className="flex space-x-10 font-medium">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.href;
                  if (link.sublinks) {
                    return (
                      <li key={index} className="group relative">
                        <button
                          className={`flex items-center gap-1 transition duration-300 ${
                            isActive
                              ? "text-custom-primary font-bold"
                              : "text-Light group-hover:text-custom-primary"
                          }`}
                        >
                          {link.name}
                          <ChevronDown
                            size={18}
                            className="transition-transform duration-300 group-hover:rotate-180"
                          />
                        </button>

                        {/* Dropdown */}
                        <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300">
                          {link.sublinks.map((sub) => (
                            <li key={sub.id}>
                              <Link
                                to={sub.href}
                                onClick={closeMobileMenu}
                                className={`block px-4 py-2 text-sm ${
                                  location.pathname === sub.href
                                    ? "text-custom-primary font-semibold"
                                    : "text-gray-700 hover:bg-green-50 hover:text-custom-primary rounded-lg"
                                }`}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  }
                  return (
                    <li key={index} className="group relative">
                      <Link
                        to={link.href}
                        onClick={closeMobileMenu}
                        className={`transition duration-300 ${
                          isActive
                            ? "text-custom-primary font-bold"
                            : "text-Light group-hover:text-custom-primary"
                        }`}
                      >
                        {link.name}
                        <span
                          className={`absolute left-0 -bottom-1 w-full h-0.5 bg-custom-primary origin-left transition-transform duration-300 ${
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
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
        {token ? (
          <div>
            <UserDropdown userData={user} logout={logout} />
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              <Link to="/login">
                <button className="text-[15px] lg:text-[17px] font-medium px-4 lg:px-6 rounded-md py-[5px] lg:py-[7px] text-custom-primary border border-custom-primary relative before:absolute overflow-hidden before:translate-x-[-200px] hover:before:translate-x-0 before:z-[-1] before:translate-y-12 dark:text-custom-primary dark:border-custom-primary dark:z-0 dark:before:bg-custom-primary before:transition hover:before:translate-y-0 before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-custom-primary before:top-0 before:left-0 cursor-pointer">
                  Login
                </button>
              </Link>

              <Link to="/sign-up">
                <button className="text-[15px] lg:text-[17px] font-medium px-4 lg:px-6 rounded-md py-[5px] lg:py-[7px] text-custom-primary border border-custom-primary relative before:absolute overflow-hidden before:translate-x-[-200px] hover:before:translate-x-0 before:z-[-1] before:translate-y-12 dark:text-custom-primary dark:border-custom-primary dark:z-0 dark:before:bg-custom-primary before:transition hover:before:translate-y-0 before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-custom-primary before:top-0 before:left-0 cursor-pointer">
                  Signup
                </button>
              </Link>
            </div>
            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-custom-primary z-50"
              onClick={toggleMobileMenu}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Slide Menu */}
      <div
        ref={menuRef}
        className={`fixed top-[72px] left-0 h-auto rounded-br-lg w-72 bg-Primary z-50 p-6 transform transition-transform duration-300 ease-in-out bg-white border ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-6 text-base">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.href;

            if (link.sublinks) {
              return (
                <div key={index} className="space-y-2">
                  {/* Parent button */}
                  <button
                    type="button"
                    className="flex items-center justify-between w-full text-left transition duration-300 text-black hover:text-custom-primary"
                    onClick={() =>
                      setMobileOpen((prev) => ({
                        ...prev,
                        [link.name]: !prev[link.name],
                      }))
                    }
                  >
                    {link.name}
                    <ChevronDown size={16} />
                  </button>

                  {/* Sublinks */}
                  {mobileOpen[link.name] && (
                    <div className="ml-4 space-y-2">
                      {link.sublinks.map((sub) => (
                        <Link
                          key={sub.id}
                          to={sub.href}
                          onClick={closeMobileMenu}
                          className={`block text-sm ${
                            location.pathname === sub.href
                              ? "text-custom-primary font-semibold"
                              : "text-gray-700 hover:text-custom-primary"
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={index}
                to={link.href}
                onClick={closeMobileMenu}
                className={`block transition duration-300 ${
                  isActive
                    ? "text-custom-primary font-semibold"
                    : "text-black hover:text-custom-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-4 mt-4">
          <Link to="/login">
            <button className="text-[15px] lg:text-[17px] font-medium px-4 lg:px-6 rounded-md py-[5px] lg:py-[7px] text-custom-primary border border-custom-primary relative before:absolute overflow-hidden before:translate-x-[-200px] hover:before:translate-x-0 before:z-[-1] before:translate-y-12 dark:text-custom-primary dark:border-custom-primary dark:z-0 dark:before:bg-custom-primary before:transition hover:before:translate-y-0 before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-custom-primary before:top-0 before:left-0 cursor-pointer">
              Login
            </button>
          </Link>

          <Link to="/sign-up">
            <button className="text-[15px] lg:text-[17px] font-medium px-4 lg:px-6 rounded-md py-[5px] lg:py-[7px] text-custom-primary border border-custom-primary relative before:absolute overflow-hidden before:translate-x-[-200px] hover:before:translate-x-0 before:z-[-1] before:translate-y-12 dark:text-custom-primary dark:border-custom-primary dark:z-0 dark:before:bg-custom-primary before:transition hover:before:translate-y-0 before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-custom-primary before:top-0 before:left-0 cursor-pointer">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
