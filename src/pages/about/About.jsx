import MeetOurTeam from "@/components/aboutComponents/MeetOurTeam";
import OurValues from "@/components/aboutComponents/OurValues";
import TotalRevenue from "@/components/aboutComponents/TotalRevenue";
import Banner from "@/components/common/Banner";
import React from "react";
import { ScrollRestoration } from "react-router-dom";

const About = () => {
  return (
    <div>
      <ScrollRestoration />
      <Banner
        title={"Who We Are"}
        subtitle={""}
        description={
          "We're revolutionizing real estate investment by connecting smart investors with vetted developers, creating opportunities for everyone to build their future."
        }
      />
      <TotalRevenue />
      <OurValues />
      <MeetOurTeam />
    </div>
  );
};

export default About;
