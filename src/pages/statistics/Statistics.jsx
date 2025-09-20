import Banner from "@/components/common/Banner";
import React from "react";
import { ScrollRestoration } from "react-router-dom";
import MarketLeader from "./MarketLeader";

const Statistics = () => {
  return (
    <>
      <ScrollRestoration />
      <Banner
        title={"Our Performance"}
        subtitle={""}
        description={
          "We are the leading real estate crowdfunding platform with the highest success rate and returns in the industry."
        }
      />
      <MarketLeader />
    </>
  );
};

export default Statistics;
