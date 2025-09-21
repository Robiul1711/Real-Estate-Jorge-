import Banner from "@/components/common/Banner";
import React from "react";
import { ScrollRestoration } from "react-router-dom";
import AllAmbassadors from "./AllAmbassadors";

const Ambassadors = () => {
  return (
    <>
      <ScrollRestoration />
      <Banner
        title={"Ambassadors"}
        subtitle={"Our Brand Ambassadors"}
        description={
          "Just as we seek the best projects for our investors, at our platform we have sought allies among some of our best representatives from the world of business and innovation. Our brand ambassadors combine talent, discipline and perseverance, values that we share on our path to success."
        }
      />
      <AllAmbassadors />
    </>
  );
};

export default Ambassadors;
