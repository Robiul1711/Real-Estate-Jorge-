import HomeBanner from "@/components/homeComponents/HomeBanner";
import React from "react";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ScrollRestoration />
      <HomeBanner />
    </>
  );
};

export default Home;
