import Banner from "@/components/common/Banner";
import React from "react";
import { ScrollRestoration } from "react-router-dom";
import InvestmentGuide from "./InvestmentGuide";
import CommonBanner from "@/components/homeComponents/CommonBanner";

const Learn = () => {
  return (
    <>
      <ScrollRestoration />
      <Banner
        title={"Learn to Invest"}
        description={
          "Want to learn about investment? Interested in financial freedom? Our expert team has put together everything you need to know to start in the world of investment, step by step. In a relaxed tone suitable for beginners - although we'll throw in some advanced concepts from time to time to impress."
        }
      />
      <InvestmentGuide />
      <CommonBanner />
    </>
  );
};

export default Learn;
