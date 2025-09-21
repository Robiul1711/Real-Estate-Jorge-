import { ImageProvider } from "@/components/common/ImageProvider";
import React from "react";
import { GoDotFill } from "react-icons/go";

const AllAmbassadors = () => {
  const teamMembers = [
    {
      name: "Dawn Campbell",
      profession: "Family Lawyer",
      description:
        "Dawn Campbell is a licensed solicitor who specializes in family law with extensive experience in divorce, custody disputes, and property settlements. She has been practicing family law for over 15 years and is known for her compassionate approach to sensitive family matters.",
      image: ImageProvider.ambassadors,
      skills: [
        "Family Law Disputes",
        "Divorce and Separation",
        "Child Custody",
        "Property Settlement",
      ],
      categories: [
        "Family Relationship",
        "Child Support",
        "Superannuation Entitlements",
      ],
    },
    {
      name: "James Wright",
      profession: "Financial Expert",
      description:
        "James Wright is a senior partner specializing in corporate law and business acquisitions. With over 20 years of experience, he has successfully handled numerous high-profile mergers and acquisitions for both domestic and international clients.",
      image: ImageProvider.ambassadors1,
      skills: [
        "Corporate Law",
        "Mergers & Acquisitions",
        "Commercial Litigation",
        "Business Strategy",
      ],
      categories: ["Corporate Law", "Business Law", "Commercial Disputes"],
    },
    {
      name: "Thompson Adison",
      profession: "Criminal Defense Attorney",
      description:
        "Thompson is a criminal defense attorney with extensive experience in both state and federal courts. She specializes in white-collar crimes, drug offenses, and has a strong track record of successful defenses in complex criminal cases.solicitor who specializes in family law with extensive experience in divorce, custody disputes, and property settlements. She has been practicing family law for over 15 years and is known for her compassionate approach to sensitive family matters.",
      image: ImageProvider.ambassadors2,
      skills: [
        "Criminal Defense",
        "White Collar Crime",
        "Federal Court Practice",
        "Appeals",
      ],
      categories: ["Criminal Law", "Court Representation", "Legal Defense"],
    },
  ];

  return (
    <div className="section-padding-x">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`bg-white p-6 flex gap-8 lg:gap-12 ${
            index % 2 === 1 ? "flex-row-reverse" : ""
          }`}
        >
          {/* Left - Profile Image */}
          <div className="flex-shrink-0">
            <img
              src={member.image}
              alt={member.name}
              className="object-cover rounded"
            />
          </div>

          {/* Right - Content */}
          <div className="flex-1">
            {/* Name */}
            <h3 className="text-lg lg:text-2xl font-semibold text-gray-900 mb-1">
              {member.name}
            </h3>
            <h4 className="text-custom-primary my-4 text-lg font-medium">
              {member.profession}
            </h4>

            {/* Description */}
            <p className="text-[#141414] leading-relaxed mb-4 font-medium">
              {member.description}
            </p>

            {/* Skills Section */}
            <div className="mb-6">
              <h4 className="font-medium text-[#111827] mb-2">
                Key Competencies
              </h4>
              <ul className="text-[#666666] space-y-2">
                {member.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-1">
                    <span>
                      <GoDotFill className="text-custom-primary" />
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-800 mb-2">Categories</h4>
              <div className="flex flex-wrap gap-4">
                {member.categories.map((category, i) => (
                  <span
                    key={i}
                    className="text-sm text-[#141414] bg-[#30B7671A] cursor-pointer py-1 px-2 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            {/* Button */}
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 text-sm rounded cursor-pointer">
              View Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllAmbassadors;
