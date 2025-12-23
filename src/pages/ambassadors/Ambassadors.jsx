import Banner from "@/components/common/Banner";
import React from "react";
import { ScrollRestoration } from "react-router-dom";
import AllAmbassadors from "./AllAmbassadors";
import CommonBanner from "@/components/homeComponents/CommonBanner";
import { useApiQuery } from "@/hooks/getCmsUpdate";

const Ambassadors = () => {
      const {
      data: ambassadorsData,
      isLoading,
      error,
    } = useApiQuery({
      queryKey: ["ambassadorscms"],
      url: "cms/ambassador_page/banner_section",
      secure: true,
    });
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
  }  return (
    <>
      <ScrollRestoration />
      <Banner
        title={ambassadorsData?.data?.banner_section?.title}
        subtitle={ambassadorsData?.data?.banner_section?.sub_description}
        image={ambassadorsData?.data?.banner_section?.image}
       
        description={
          ambassadorsData?.data?.banner_section?.description}
      />
      <AllAmbassadors />
      <CommonBanner />
    </>
  );
};

export default Ambassadors;
