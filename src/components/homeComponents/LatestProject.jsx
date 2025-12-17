import React, { useRef } from "react";
import image from "../../assets/images/project.png";
import { Location, Unit } from "@/assets/icon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CommonBtn from "../common/CommonButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useApiQuery } from "@/hooks/getCmsUpdate";
gsap.registerPlugin(ScrollTrigger);


const LatestProject = () => {
  const {
    data: project,
    isLoading,
    error,
    refetch,
  } = useApiQuery({
    queryKey: "project",
    url: "/project",
    secure: true,
  });
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRef = useRef(null);
  useGSAP(() => {
    gsap.from([titleRef.current, subtitleRef.current, cardRef.current], {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
  return (
    <div
      ref={sectionRef}
      id="projects"
      className="section-padding-x py-8 lg:py-12"
    >
      <h2
        ref={titleRef}
        className="text-[32px] md:text-4xl lg:text-[40px] font-bold mb-4 text-center"
      >
        Our Latest Projects
      </h2>
      <p
        ref={subtitleRef}
        className="lg:text-lg text-center md:text-[22px] w-full lg:w-1/2 mx-auto"
      >
        Our comprehensive services encompass luxury property sales, sustainable
        green building investments, and premium vacation rentals.
      </p>
      <Swiper
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2 }, // mobile
          768: { slidesPerView: 2 }, // tablet
          1024: { slidesPerView: 3 }, // desktop
        }}
        grabCursor={true}
        ref={cardRef}
      >
        {project?.data?.map((project) => (
          <SwiperSlide key={project.id} className="py-6 lg:py-12">
            <div className="bg-[#F3F3F3] p-5 rounded-2xl min-h-[700px] flex flex-col">
              <div className="overflow-hidden rounded-2xl relative">
                <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-xl">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
                    src={project.image}
                    alt={project.title}
                  />
                </div>

                {/* Top badge + profit */}
                <div className="absolute top-2 flex justify-between w-full px-2">
                  <button className="bg-custom-primary py-1 px-2 text-white rounded-lg text-sm h-fit">
                    {project.project_status}
                  </button>
                  <div className="bg-white p-2 rounded-lg border">
                    <h2 className="text-custom-primary text-sm">EST. Profit</h2>
                    <p className="text-custom-primary text-lg font-bold">
                      {project.estimated_profit}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row justify-between mt-4 font-bold text-lg lg:text-[20px]">
                  <h2>{project.title}</h2>
                  <h2>{project.price}</h2>
                </div>
                <p
                  className="text-[#4B5563] py-2"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>

                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Location />
                    <p className="text-sm text-[#4B5563]">{project.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Unit />
                    <p className="text-sm text-[#4B5563]">{project.units}</p>
                  </div>
                </div>

                <div className="flex justify-between py-3 font-medium text-[17px]">
                  <h3 className="text-[#4B5563]">Funding Progress</h3>
                  <h3>{project.funding_progress}% Complete</h3>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-custom-primary h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${project.funding_progress}%` }}
                  />
                </div>

                <div className="flex justify-between flex-wrap py-2 gap-y-3">
                  <div className="py-3 font-medium">
                    <h3 className="text-[#4B5563]">Total Return</h3>
                    <h2>{project.total_return}</h2>
                  </div>
                  <div className="py-3 font-medium">
                    <h3 className="text-[#4B5563]">Min Investment</h3>
                    <h2>{project.min_investment}</h2>
                  </div>
                  <div className="py-3 font-medium">
                    <h3 className="text-[#4B5563]">Terms</h3>
                    <h2>{project.terms_years}</h2>
                  </div>
                </div>

                <button className="mt-auto py-2.5 lg:py-3 text-[15px] font-medium bg-custom-primary text-white border hover:bg-custom-primary/80 rounded-lg cursor-pointer w-full text-center transform transition-all duration-200 ease-in-out">
                  View Property
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        <CommonBtn>Start Investing Now</CommonBtn>
      </div>
    </div>
  );
};

export default LatestProject;
