import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="font-geist">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
