import Banner from "@/components/aboutComponents/Banner";
import MeetOurTeam from "@/components/aboutComponents/MeetOurTeam";
import OurValues from "@/components/aboutComponents/OurValues";
import TotalRevenue from "@/components/aboutComponents/TotalRevenue";
import React from "react";
import { ScrollRestoration } from "react-router-dom";

const About = () => {
  return (
    <div>
      <ScrollRestoration />
      <Banner />
      <TotalRevenue />
      <OurValues />
      <MeetOurTeam />
    </div>
  );
};

export default About;
