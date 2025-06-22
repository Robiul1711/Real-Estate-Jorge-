import HomeBanner from "@/components/homeComponents/HomeBanner";
import HowItWork from "@/components/homeComponents/HowItWork";
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
    </>
  );
};

export default Home;
