import { Location, Unit } from "@/assets/icon";
import { ImageProvider } from "@/components/common/ImageProvider";
import { ProjectQuery } from "@/hooks/useCMS";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
const { projectsData, isLoading, error } = ProjectQuery();
  const cardRef = useRef(null);

  // ✅ GSAP animation
  useGSAP(() => {
    gsap.from([cardRef.current], {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
      stagger: 0.1,
    });
  }, []);

  // ✅ Skeleton Loader Component
  const SkeletonCard = () => (
    <div className="bg-[#F3F3F3] p-5 rounded-2xl shadow-md animate-pulse flex flex-col">
      <div className="overflow-hidden rounded-2xl relative bg-gray-200 h-48"></div>

      <div className="mt-4 space-y-3 flex-1">
        <div className="h-5 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-4/5"></div>

        <div className="flex justify-between mt-3">
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>

        <div className="w-full bg-gray-200 h-2 rounded-full"></div>

        <div className="flex justify-between flex-wrap mt-4 gap-y-3">
          <div className="h-4 bg-gray-300 rounded w-24"></div>
          <div className="h-4 bg-gray-300 rounded w-24"></div>
          <div className="h-4 bg-gray-300 rounded w-24"></div>
        </div>

        <div className="mt-auto h-10 bg-gray-300 rounded-lg w-full"></div>
      </div>
    </div>
  );

  return (
    <div
      ref={cardRef}
      className="section-padding-x section-padding-y my-6 lg:my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12"
    >
      {/* ✅ Show Skeleton while loading */}
      {isLoading
        ? [...Array(6)].map((_, i) => <SkeletonCard key={i} />)
        : projectsData?.data?.map((project) => (
            <Link to={`/dashboard/project-view-description/${project.slug}`}
              key={project.id}
              className="bg-[#F3F3F3] p-5 rounded-2xl shadow-md flex flex-col"
            >
              <div className="overflow-hidden rounded-2xl relative">
                <img
                  className="w-full hover:scale-105 transform transition-all duration-500 ease-in-out"
                  src={project.image || ImageProvider.project}
                  alt={project.title}
                />

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
                <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4 font-bold text-lg lg:text-[20px]">
                  <h2>{project.title}</h2>
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-medium">
                      {project.price_range_min}
                    </h2>
                    -
                    <h2 className="text-sm font-medium ">
                      {project.price_range_max}
                    </h2>
                  </div>
                </div>

                <p
                  className="text-[#4B5563] py-2"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>

                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Location />
                    <p className="text-sm text-[#4B5563]">
                      {project.location}
                    </p>
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
            </Link>
          ))}
    </div>
  );
};

export default Projects;
