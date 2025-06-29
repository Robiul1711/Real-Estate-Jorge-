import CommonNavbar from "@/pages/admin/CommonNavbar";
import SideBar from "@/pages/admin/SideBar";

import React, { useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
const AdminLayout = () => {
  const [Open, setOpen] = useState(false);

  const sideBar = [
    {
      id: 1,
      icon: <MdDashboard />,
      text: "Dashboard",
      path: "/dashboard",
      activePaths: [
        "/dashboard",
        "/dashboard/settings",
        "/dashboard/analytics",
      ],
      sublink: false,
    },
    {
      id: 2,
      icon: <MdDashboard />,
      text: "Browse Opportunities",
      path: "/dashboard/admin-list",
      sublink: false,
    },
    {
      id: 3,
      icon: <MdDashboard />,
      text: "My Investments",
      path: "/dashboard/admin-list",
      sublink: false,
    },
    {
      id: 4,
      icon: <MdDashboard />,
      text: "Payment",
      path: "/dashboard/admin-list",
      sublink: false,
    },
    {
      id: 5,
      icon: <MdDashboard />,
      text: "Documents",
      path: "/dashboard/admin-list",
      sublink: false,
    },
   
     {
      id: 6,
      icon: <MdDashboard />,
      text: "Support",
      path: "/dashboard/admin-list",
      sublink: false,
    },
     {
      id: 7,
      icon: <MdDashboard />,
      text: "Setting",
      path: "/dashboard/admin-list",
      sublink: false,
    },
  ];
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  return (
    <>
      <ScrollRestoration />
      <div className="flex  h-screen min-h-screen w-full">
        <SideBar open={Open} setOpen={setOpen} sidebar={sideBar} />
        <div className="flex-1 bg-dark text-white flex flex-col overflow-auto custom-scrollbar">
          <div className=" flex flex-col lg:gap-10 gap-5 lg:py-6 py-3 lg:px-[30px] px-2.5 sm:px-5">
            <CommonNavbar open={Open} setOpen={setOpen} />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
