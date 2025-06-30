import {
  Calender,
  Dashboard,
  Document,
  Message,
  Payment,
  Setting,
  Support,
} from "@/assets/icon";
import CommonNavbar from "@/pages/admin/CommonNavbar";
import SideBar from "@/pages/admin/SideBar";
import React, { useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
const AdminLayout = () => {
  const [Open, setOpen] = useState(false);

  const sideBar = [
    {
      id: 1,
      icon: <Dashboard />,
      text: "Dashboard",
      path: "/dashboard",
    },
    {
      id: 2,
      icon: <Calender />,
      text: "Opportunities",
      path: "/dashboard/browse-opportunities",
    },
    {
      id: 3,
      icon: <Message />,
      text: "My Investments",
      path: "/dashboard/my-investments",
    },
    {
      id: 4,
      icon: <Payment />,
      text: "Payment",
      path: "/dashboard/payment",
    },
    {
      id: 5,
      icon: <Document />,
      text: "Documents",
      path: "/dashboard/documents",
    },
    {
      id: 6,
      icon: <Support />,
      text: "Support",
      path: "/dashboard/support",
    },
    {
      id: 7,
      icon: <Setting />,
      text: "Setting",
      path: "/dashboard/setting",
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
      <div className="flex h-screen min-h-screen w-full">
        <SideBar open={Open} setOpen={setOpen} sidebar={sideBar} />
        <div className="flex-1 bg-dark text-white flex flex-col overflow-auto custom-scrollbar">
          <div className=" flex flex-col gap-6 lg:py-6 py-3 lg:px-[30px] px-2.5 sm:px-5 bg-[#F8FAFC] text-black">
            <CommonNavbar open={Open} setOpen={setOpen} />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
