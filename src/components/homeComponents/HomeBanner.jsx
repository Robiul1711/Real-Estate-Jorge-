import React, { useRef } from "react";
import image from "../../assets/images/banner.png";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HomeBannerQuery } from "@/hooks/useCMS";
import { useEmail } from "@/hooks/useEmail";

const HomeBanner = () => {
  const { token } = useEmail();
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const inputRef = useRef(null);

  const { homeBanner, isLoading, error } = HomeBannerQuery();
  const bannerData = homeBanner?.data?.banner_section;

  // Animate only after data is ready
  useGSAP(() => {
    if (!bannerData) return;
    const elements = [titleRef.current, subtitleRef.current, inputRef.current];
    if (elements.every((el) => el)) {
      gsap.from(elements, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        stagger: 0.1,
      });
    }
  }, [bannerData]);

  // --- Skeleton Loader ---
  if (isLoading) {
    return (
      <section className="section-padding-x section-padding-y relative">
        <div className="relative rounded-2xl overflow-hidden bg-gray-200 animate-pulse">
          <div className="w-full h-[350px] sm:h-[400px] md:h-[550px] lg:h-[650px] xl:h-[780px] bg-gray-300" />

          <div className="absolute inset-0 z-20 flex items-center px-4 sm:px-8 md:px-12 lg:px-20 max-w-6xl">
            <div className="space-y-6 w-full">
              <div className="h-10 sm:h-12 md:h-16 bg-gray-400/70 rounded-lg w-3/4"></div>
              <div className="h-4 sm:h-5 md:h-6 bg-gray-400/60 rounded-lg w-2/3"></div>
              <div className="h-4 sm:h-5 md:h-6 bg-gray-400/60 rounded-lg w-1/2"></div>

              <div className="flex gap-4 mt-8">
                <div className="h-10 w-40 bg-gray-400/70 rounded-lg"></div>
                <div className="h-10 w-32 bg-gray-400/70 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

  // --- No data fallback ---
  if (!bannerData) return null;

  // --- Actual Banner ---
  return (
    <section className="section-padding-x section-padding-y relative">
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src={bannerData?.image || image}
          alt="Banner"
          className="w-full h-[350px] sm:h-[400px] md:h-[550px] lg:h-[650px] xl:h-[780px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] via-[rgba(0,0,0,0.3)] to-transparent z-10" />

        <div className="absolute inset-0 z-20 flex items-center">
          <div className="px-4 sm:px-8 md:px-12 lg:px-20 max-w-6xl text-white">
            <h2
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              {bannerData?.title}
            </h2>

            <p
              ref={subtitleRef}
              className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 max-w-4xl"
              dangerouslySetInnerHTML={{ __html: bannerData?.description }}
            />

            <div
              ref={inputRef}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6 sm:mt-8"
            >
              <Link
                to="/projects"
                className="group text-sm lg:text-base py-2 lg:py-2.5 px-4 flex items-center border border-custom-primary gap-4 font-medium bg-white text-black rounded-lg hover:bg-custom-primary hover:text-white transition duration-300 ease-in-out cursor-pointer"
              >
                <span>Explore Project</span>
                <span className="bg-custom-primary p-1 rounded-lg text-white transform transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                  <ArrowUpRight size={18} />
                </span>
              </Link>

              {token ? (
                <Link
                  to="/dashboard"
                  className="text-sm lg:text-base py-2 lg:py-2.5 px-4 hover:bg-white border border-custom-primary rounded-lg bg-custom-primary text-white hover:text-black transition duration-300 ease-in-out"
                >
                  Go to Dashboard
                </Link>
              ) : (
                <Link
                  to="/sign-up"
                  className="text-sm lg:text-base py-2 lg:py-2.5 px-4 hover:bg-white border border-custom-primary rounded-lg bg-custom-primary text-white hover:text-black transition duration-300 ease-in-out"
                >
                  Sign up for free
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
