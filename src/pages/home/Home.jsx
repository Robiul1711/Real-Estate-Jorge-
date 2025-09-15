import CommonBanner from "@/components/homeComponents/CommonBanner";
import ContactUs from "@/components/homeComponents/ContactUs";
import FAQ from "@/components/homeComponents/FAQ";
import HomeBanner from "@/components/homeComponents/HomeBanner";
import HowItWork from "@/components/homeComponents/HowItWork";
import LatestProject from "@/components/homeComponents/LatestProject";
import OurBlog from "@/components/homeComponents/OurBlog";
import Reviews from "@/components/homeComponents/Reviews";
import WhyChooseUs from "@/components/homeComponents/WhyChooseUs";
import React from "react";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
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
