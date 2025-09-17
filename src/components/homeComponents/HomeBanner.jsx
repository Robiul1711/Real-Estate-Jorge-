import React, { useRef } from "react";
import image from "../../assets/images/banner.png";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HomeBanner = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const inputRef = useRef(null);
  useGSAP(() => {
    gsap.from([titleRef.current, subtitleRef.current, inputRef.current], {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
      stagger: 0.1,
    });
  }, []);
  return (
    <section className="section-padding-x section-padding-y relative">
      {/* Banner Image + Overlay */}
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src={image}
          alt="Banner"
          className="w-full h-[350px] sm:h-[400px] md:h-[550px] lg:h-[650px] xl:h-[780px] object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] via-[rgba(0,0,0,0.3)] to-transparent z-10" />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="px-4 sm:px-8 md:px-12 lg:px-20 max-w-6xl text-white">
            <h2
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              Invest in Real Estate Like the Big Players
            </h2>

            {/* Paragraph */}
            <p
              ref={subtitleRef}
              className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 max-w-4xl"
            >
              We provide tailored real estate solutions, guiding you through
              every step with personalized experiences that meet your unique
              needs and aspirations.
            </p>

            {/* CTA Buttons */}
            <div
              ref={inputRef}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6 sm:mt-8"
            >
              <Link to={"/"}>
                <button className="py-2.5 px-4 flex items-center border border-custom-primary gap-4 font-medium bg-white text-black rounded-lg hover:bg-custom-primary hover:text-white transition duration-300 ease-in-out cursor-pointer">
                  <span>Explore Project</span>
                  <span className="bg-custom-primary p-1 rounded-lg text-white">
                    <ArrowUpRight size={18} />
                  </span>
                </button>
              </Link>

              <Link
                to={"/sign-up"}
                className="py-2.5 px-4 hover:bg-white border border-custom-primary rounded-lg bg-custom-primary text-white hover:text-black transition duration-300 ease-in-out"
              >
                Sign up for free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
