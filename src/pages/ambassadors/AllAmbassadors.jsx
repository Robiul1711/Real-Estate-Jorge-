import { ImageProvider } from "@/components/common/ImageProvider";
import { AmbassadorsQuery } from "@/hooks/useCMS";
import React from "react";
import { GoDotFill } from "react-icons/go";

const AllAmbassadors = () => {
  const { ambassadorsData, isLoading } = AmbassadorsQuery();

  return (
    <div className="section-padding-x max-w-[1440px] mx-auto space-y-12">
      {ambassadorsData?.data?.map((member, index) => (
        <div
          key={index}
          className={`bg-white p-6 flex flex-col lg:flex-row gap-8 lg:gap-12 ${
            index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
        
          <div className="flex-shrink-0">
            <img
              src={member?.image}
              alt={member?.name}
              className="object-cover rounded"
            />
          </div>

      
          <div className="flex-1">
        
            <h3 className="text-lg lg:text-2xl font-semibold text-gray-900 mb-1">
              {member?.name}
            </h3>
            <h4 className="text-custom-primary my-4 text-lg font-medium">
              {member?.position}
            </h4>

       
            <p
              className="text-[#141414] leading-relaxed mb-4 font-medium"
              dangerouslySetInnerHTML={{ __html: member?.description }}
            ></p>

            <div className="mb-6">
              <h4 className="font-medium text-[#111827] mb-2">
                Key Competencies
              </h4>
              <ul className="text-[#666666] space-y-2">
                {member?.skills?.map((skill, i) => (
                  <li key={i} className="flex items-center gap-1">
                    <span>
                      <GoDotFill className="text-custom-primary" />
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

          
            <div className="mb-6">
              <h4 className="font-medium text-gray-800 mb-2">Categories</h4>
              <div className="flex flex-wrap gap-4">
                {member.specialties.map((category, i) => (
                  <span
                    key={i}
                    className="text-sm text-[#141414] bg-[#30B7671A] cursor-pointer py-1 px-2 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

      
            {/* <button className="bg-custom-primary hover:bg-custom-primary/95 text-white px-4 py-2.5 text-sm rounded cursor-pointer">
              View Profile
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllAmbassadors;
