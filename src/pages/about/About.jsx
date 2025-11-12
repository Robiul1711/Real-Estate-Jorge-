import MeetOurTeam from "@/components/aboutComponents/MeetOurTeam";
import OurValues from "@/components/aboutComponents/OurValues";
import TotalRevenue from "@/components/aboutComponents/TotalRevenue";
import Banner from "@/components/common/Banner";
import { WhoWeAreQuery } from "@/hooks/useCMS";
import React from "react";
import { ScrollRestoration } from "react-router-dom";

const About = () => {
  const {whoWeAreData,isLoading,error}=WhoWeAreQuery();
  const Data=whoWeAreData?.data?.banner_section
  // console.log(Data)
  return (
    <div>
      <ScrollRestoration />
      <Banner
        image={Data?.image}
        title={Data?.title}
        subtitle={""}
        description={
          Data?.description}
      />
      <TotalRevenue />
      <OurValues />
      <MeetOurTeam />
    </div>
  );
};

export default About;
