import { Location, Unit } from "@/assets/icon";
import { ImageProvider } from "@/components/common/ImageProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "The Westwood Residences",
    price: "$50K - $250K",
    desc: "Premium apartment complex in downtown Seattle with 120 units and high rental demand.",
    location: "Seattle, WA",
    units: "120 Units",
    profit: "12.5%",
    funding: 68,
    return: "12% IRR",
    min: "$5000",
    terms: "5 Years",
    status: "In Studio",
    image: ImageProvider.project,
  },
  {
    id: 2,
    title: "Greenwood Villas",
    price: "$70K - $300K",
    desc: "Luxury villas in a suburban eco-friendly community surrounded by greenery.",
    location: "Portland, OR",
    units: "80 Units",
    profit: "15%",
    funding: 55,
    return: "14% IRR",
    min: "$7000",
    terms: "6 Years",
    status: "Open",
    image: ImageProvider.project,
  },
  {
    id: 3,
    title: "Harborview Condos",
    price: "$40K - $200K",
    desc: "Modern condos with waterfront views, located near major tech hubs.",
    location: "San Francisco, CA",
    units: "200 Units",
    profit: "10%",
    funding: 72,
    return: "11% IRR",
    min: "$4000",
    terms: "4 Years",
    status: "In Studio",
    image: ImageProvider.project,
  },
  {
    id: 4,
    title: "Sunset Apartments",
    price: "$60K - $220K",
    desc: "Affordable housing project with strong rental demand in urban areas.",
    location: "Austin, TX",
    units: "150 Units",
    profit: "13%",
    funding: 64,
    return: "13% IRR",
    min: "$6000",
    terms: "5 Years",
    status: "Coming Soon",
    image: ImageProvider.project,
  },
  {
    id: 5,
    title: "Skyline Towers",
    price: "$100K - $400K",
    desc: "High-rise luxury apartments with city skyline views and top-tier amenities.",
    location: "New York, NY",
    units: "300 Units",
    profit: "18%",
    funding: 80,
    return: "16% IRR",
    min: "$10,000",
    terms: "7 Years",
    status: "Open",
    image: ImageProvider.project,
  },
  {
    id: 6,
    title: "Palm Grove Resort",
    price: "$80K - $350K",
    desc: "Premium vacation rental resort near the beach with high tourist demand.",
    location: "Miami, FL",
    units: "90 Units",
    profit: "20%",
    funding: 60,
    return: "18% IRR",
    min: "$8000",
    terms: "6 Years",
    status: "In Studio",
    image: ImageProvider.project,
  },
  {
    id: 7,
    title: "Canyon Ridge Estates",
    price: "$65K - $280K",
    desc: "Elegant hillside homes offering panoramic views and a private community clubhouse.",
    location: "Denver, CO",
    units: "100 Units",
    profit: "14%",
    funding: 50,
    return: "13% IRR",
    min: "$6500",
    terms: "5 Years",
    status: "Open",
    image: ImageProvider.project,
  },
  {
    id: 8,
    title: "Maplewood Lofts",
    price: "$45K - $180K",
    desc: "Trendy loft-style apartments located in a rapidly growing downtown district.",
    location: "Chicago, IL",
    units: "140 Units",
    profit: "11%",
    funding: 74,
    return: "10.5% IRR",
    min: "$4500",
    terms: "4 Years",
    status: "In Studio",
    image: ImageProvider.project,
  },
  {
    id: 9,
    title: "Coral Bay Residences",
    price: "$90K - $320K",
    desc: "Coastal residential development designed for sustainable living and ocean views.",
    location: "San Diego, CA",
    units: "110 Units",
    profit: "17%",
    funding: 66,
    return: "15% IRR",
    min: "$9000",
    terms: "6 Years",
    status: "Coming Soon",
    image: ImageProvider.project,
  },
];

const Projects = () => {
  const cardRef = useRef(null);
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
  return (
    <div
      ref={cardRef}
      className="section-padding-x section-padding-y my-6 lg:my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12"
    >
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-[#F3F3F3] p-5 rounded-2xl min-h-[760px] flex flex-col"
        >
          <div className="overflow-hidden rounded-2xl relative">
            <img
              className="w-full hover:scale-105 transform transition-all duration-500 ease-in-out"
              src={project.image}
              alt={project.title}
            />

            {/* Top badge + profit */}
            <div className="absolute top-2 flex justify-between w-full px-2">
              <button className="bg-custom-primary py-1 px-2 text-white rounded-lg text-sm h-fit">
                {project.status}
              </button>
              <div className="bg-white p-2 rounded-lg border">
                <h2 className="text-custom-primary text-sm">EST. Profit</h2>
                <p className="text-custom-primary text-lg font-bold">
                  {project.profit}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex flex-col sm:flex-row justify-between mt-4 font-bold text-lg lg:text-[20px]">
              <h2>{project.title}</h2>
              <h2>{project.price}</h2>
            </div>
            <p className="text-[#4B5563] py-2">{project.desc}</p>

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
              <h3>{project.funding}% Complete</h3>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-custom-primary h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${project.funding}%` }}
              />
            </div>

            <div className="flex justify-between flex-wrap py-2 gap-y-3">
              <div className="py-3 font-medium">
                <h3 className="text-[#4B5563]">Total Return</h3>
                <h2>{project.return}</h2>
              </div>
              <div className="py-3 font-medium">
                <h3 className="text-[#4B5563]">Min Investment</h3>
                <h2>{project.min}</h2>
              </div>
              <div className="py-3 font-medium">
                <h3 className="text-[#4B5563]">Terms</h3>
                <h2>{project.terms}</h2>
              </div>
            </div>

            <button className="mt-auto py-2.5 lg:py-3 text-[15px] font-medium bg-custom-primary text-white border hover:bg-custom-primary/80 rounded-lg cursor-pointer w-full text-center transform transition-all duration-200 ease-in-out">
              View Property
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
