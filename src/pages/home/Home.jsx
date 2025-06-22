import HomeBanner from "@/components/homeComponents/HomeBanner";
import HowItWork from "@/components/homeComponents/HowItWork";
import LatestProject from "@/components/homeComponents/LatestProject";
import OurBlog from "@/components/homeComponents/OurBlog";
import WhyChooseUs from "@/components/homeComponents/WhyChooseUs";
import React from "react";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ScrollRestoration />
      <HomeBanner />
      <HowItWork />
      <WhyChooseUs />
      |<LatestProject />
      <OurBlog />
    </>
  );
};

export default Home;
