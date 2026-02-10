import { Location, Unit } from "@/assets/icon";
import { ImageProvider } from "@/components/common/ImageProvider";
import PaginationComponent from "@/components/common/PaginationComponent";
import { ProjectQuery } from "@/hooks/useCMS"; // Ensure this hook accepts params
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { HiHomeModern } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Projects = () => {
  // 1. State for Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const cardRef = useRef(null);

  // 2. Pass currentPage to your query hook
  // (You need to update ProjectQuery to accept params if it doesn't already)
  const { projectsData, isLoading } = ProjectQuery({ 
    page: currentPage 
  });

  // Extract pagination metadata from API response
  const meta = projectsData?.meta || {}; 
  const totalPages = meta.last_page || 1; 

  // GSAP animation
  useGSAP(() => {
    // Only animate if data exists to avoid animating empty containers
    if (!isLoading && projectsData?.data?.length > 0) {
      gsap.from(".project-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      });
    }
  }, [isLoading, projectsData]); // Re-run animation when data changes

  // Skeleton Loader
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
        <div className="mt-auto h-10 bg-gray-300 rounded-lg w-full"></div>
      </div>
    </div>
  );

  return (
    <div ref={cardRef} className="section-padding-x section-padding-y my-6 lg:my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
        {isLoading
          ? [...Array(6)].map((_, i) => <SkeletonCard key={i} />)
          : projectsData?.data?.map((project) => (
              <Link
                to={`/dashboard/project-view-description/${project.slug}`}
                key={project.id}
                className="project-card bg-[#F3F3F3] p-5 rounded-2xl shadow-md flex flex-col"
              >
                <div className="overflow-hidden rounded-2xl relative">
                  <img
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 hover:scale-105 transform transition-all duration-500 ease-in-out object-cover"
                    src={project.image || ImageProvider.project}
                    alt={project.title}
                  />

                  {/* Top badge + profit */}
                  <div className="absolute top-2 flex justify-between w-full px-2">
                          <div className="flex flex-col gap-2 items-start">
                                       <button className="bg-custom-primary py-1 px-2 text-white rounded-lg text-sm h-fit">
                                         {project.project_status}
                                       
                                       </button>
                                       <p className="bg-custom-primary py-1 px-2 text-white rounded-lg text-sm h-fit flex items-center gap-1"><HiHomeModern />{project.type}</p>
                 
                                       </div>
                    <div className="bg-white p-2 rounded-lg border shadow-sm">
                      <h2 className="text-custom-primary text-xs uppercase font-semibold">EST. Profit</h2>
                      <p className="text-custom-primary text-lg font-bold">
                        {project.estimated_profit}%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4 font-bold text-lg lg:text-[20px]">
                    <h2 className="line-clamp-1">{project.title}</h2>
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <h2 className="text-sm font-medium">
                        ${Number(project.price_range_min).toLocaleString()}
                      </h2>
                      -
                      <h2 className="text-sm font-medium ">
                        ${Number(project.price_range_max).toLocaleString()}
                      </h2>
                    </div>
                  </div>

                  <div
                    className="text-[#4B5563] py-2 text-sm line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />

                  <div className="flex items-center gap-4 flex-wrap mt-2">
                    <div className="flex items-center gap-2">
                      <Location className="w-4 h-4 text-custom-primary" />
                      <p className="text-sm text-[#4B5563]">{project.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Unit className="w-4 h-4 text-custom-primary" />
                      <p className="text-sm text-[#4B5563]">{project.units} Units</p>
                    </div>
                  </div>

                  <div className="flex justify-between py-3 font-medium text-[15px] mt-2">
                    <h3 className="text-[#4B5563]">Funding Progress</h3>
                    <h3>{project.funding_progress}%</h3>
                  </div>

                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-custom-primary h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${project.funding_progress}%` }}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-4 text-center">
                    <div>
                      <h3 className="text-[#4B5563] text-xs">Total Return</h3>
                      <h2 className="font-bold text-sm">{project.total_return}%</h2>
                    </div>
                    <div className="border-x border-gray-300 px-2">
                      <h3 className="text-[#4B5563] text-xs">Min Invest</h3>
                      <h2 className="font-bold text-sm">${Number(project.min_investment).toLocaleString()}</h2>
                    </div>
                    <div>
                      <h3 className="text-[#4B5563] text-xs">Terms</h3>
                      <h2 className="font-bold text-sm">{project.terms_years} Years</h2>
                    </div>
                  </div>

                  <button className="mt-auto py-2.5 lg:py-3 text-[15px] font-medium bg-custom-primary text-white border hover:bg-black rounded-lg cursor-pointer w-full text-center transition-colors duration-300">
                    View Property
                  </button>
                </div>
              </Link>
            ))}
      </div>

{/* // Inside Projects.jsx return statement: */}

{!isLoading && totalPages > 1 && (
  <div className="col-span-full flex justify-center mt-10">
    <PaginationComponent 
      pageCount={totalPages}       // Total pages from API (meta.last_page)
      forcePage={currentPage}      // Current active page state
      setPageCount={setCurrentPage} // Function to update state
    />
  </div>
)}
    </div>
  );
};

export default Projects;