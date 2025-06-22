import HomeBanner from "@/components/homeComponents/HomeBanner";
import HowItWork from "@/components/homeComponents/HowItWork";
import React from "react";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ScrollRestoration />
      <HomeBanner />
      <HowItWork />
    </>
  );
};

export default Home;
