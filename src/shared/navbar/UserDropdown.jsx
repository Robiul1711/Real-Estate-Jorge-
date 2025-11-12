import React, { useState, useEffect, useRef } from "react";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../assets/images/profile.png";
import { useAuth } from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useEmail } from "@/hooks/useEmail";
const UserDropdown = ({ userData,  }) => {
    const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
    const { setToken } = useEmail();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const LogoutMutation = useMutation({
    mutationFn: async () => {
      const response = await axiosSecure.post("/logout", );
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || "Logout successful!");
      localStorage.removeItem("token");
      setToken("");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    },
  });

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 text-white text-lg"
      >
        {(() => {
          const avatar = userData?.data?.avatar;
          const hasValidAvatar =
            typeof avatar === "string" && avatar.trim().length > 0;

          return hasValidAvatar ? (
            <img
              src={avatar}
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <img
              src={profile}
              alt="Default User"
              className="w-10 h-10 rounded-full object-cover bg-gray-300 p-1"
            />
          );
        })()}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded shadow-lg z-50 text-gray-800">
          <div className="px-4 py-3 border-b">
            <p className="font-semibold">
              {userData?.data?.name || "Username"}
            </p>
            <p className="text-sm text-gray-500 truncate">
              {userData?.data?.email}
            </p>
            <p className="text-sm text-gray-500 truncate">
              {userData?.data?.phone}
            </p>
          </div>
          <div className="py-1">
            <Link
              to={`/dashboard`}
              className="flex w-full items-center px-4 py-2 text-sm hover:bg-gray-100"
            >
              <MdDashboard className="mr-2" /> Dashboard
            </Link>

            <button
              onClick={() => LogoutMutation.mutate({})}
              className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
