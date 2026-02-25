import CommonBanner from "@/components/homeComponents/CommonBanner";
import ContactUs from "@/components/homeComponents/ContactUs";
import FAQ from "@/components/homeComponents/FAQ";
import HomeBanner from "@/components/homeComponents/HomeBanner";
import HowItWork from "@/components/homeComponents/HowItWork";
import LatestProject from "@/components/homeComponents/LatestProject";
import OurBlog from "@/components/homeComponents/OurBlog";
import Reviews from "@/components/homeComponents/Reviews";
import WhyChooseUs from "@/components/homeComponents/WhyChooseUs";
import React, { useEffect } from "react";
import { ScrollRestoration, useLocation } from "react-router-dom";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <>
      <ScrollRestoration />
      <HomeBanner />
      <HowItWork />
      <LatestProject />
      <WhyChooseUs />
      <Reviews />
      <OurBlog />
      <FAQ />
      <CommonBanner />
      <ContactUs />
    </>
  );
};

export default Home;
// <div className="flex items-center gap-[150px]">
//   {location.pathname !== "/step-form" && (
//     <nav className="hidden lg:block">
//       <ul className="flex space-x-12  font-medium">
//         {navLinks.map((link, index) => {
//           const isActive = location.pathname === link.href;
//           return (
//             <li key={index} className="group relative">
//               <Link
//                 to={link.href}
//                 onClick={closeMobileMenu}
//                 className={`transition duration-300 ${
//                   isActive
//                     ? "text-custom-primary font-bold"
//                     : "text-Light group-hover:text-custom-primary"
//                 }`}
//               >
//                 {link.name}
//                 <span
//                   className={`absolute left-0 -bottom-1 w-full h-0.5 bg-custom-primary text-custom-primary origin-left transition-transform duration-300 ${
//                     isActive
//                       ? "scale-x-100 text-custom-primary"
//                       : "scale-x-0 group-hover:scale-x-100 "
//                   }`}
//                 />
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   )}
// </div>;
