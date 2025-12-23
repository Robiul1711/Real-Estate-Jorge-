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
      // --- Skeleton Loader ---
if (isLoading) {
    return (
      <div className="relative section-padding-y animate-pulse">
        {/* Banner Image Placeholder */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-300/80" />

        {/* Overlay Content Skeleton */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="flex flex-col items-center w-full max-w-4xl px-4">
            
            {/* Title Skeleton (Large & Centered) */}
            <div className="h-8 sm:h-10 md:h-14 lg:h-16 w-3/4 md:w-2/3 bg-gray-400 rounded-lg mb-6"></div>

            {/* Subtitle Skeleton */}
            <div className="h-5 sm:h-6 w-1/2 md:w-1/3 bg-gray-400/80 rounded-lg mb-4"></div>

            {/* Description Skeleton (Two lines to mimic text block) */}
            <div className="h-4 w-2/3 md:w-1/2 bg-gray-400/60 rounded-lg mb-2"></div>
            <div className="h-4 w-1/2 md:w-1/3 bg-gray-400/60 rounded-lg"></div>
            
          </div>
        </div>
      </div>
    );
  }
  // --- Error State ---
  if (error) {
    return (
      <section className="section-padding-x section-padding-y flex items-center justify-center h-[400px]">
        <div className="text-red-500 text-lg font-medium">
          Failed to load banner. Please try again later.
        </div>
      </section>
    );
  }
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
