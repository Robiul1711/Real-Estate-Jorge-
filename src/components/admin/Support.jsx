import { Chat, Complete, Email, Process, Question } from "@/assets/icon";
import { useApiQuery } from "@/hooks/getCmsUpdate";
import { Book, Phone } from "lucide-react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ScrollRestoration } from "react-router-dom";
const Support = () => {
  const [isPlusAccording, setIsPlusAccording] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
    const { data: faqData } = useApiQuery({
      queryKey: "faqs",
      url: "/faqs",
      secure: true,
    });
 const handleBorderClick = (index) =>
    setIsPlusAccording((prevIndex) => (prevIndex === index ? null : index));
  return (
    <div>
      <ScrollRestoration />
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold my-2 text-[#000000]">Support Center</h2>
      <p className="text-sm text-[#4B5563]">
        Get help and support for your investment journey
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 mt-8">
 
        <div className="bg-[#ffffff] p-5 rounded-2xl flex flex-col justify-center items-center shadow-md">
          <Phone />
          <h2 className="text-[17px] font-bold my-1 text-[#000000]">
            Phone Support
          </h2>
          <p className="text-sm text-[#4B5563] my-1">
            Mon-Fri, 9 AM - 6 PM EST
          </p>
          <p className="text-sm text-[#4B5563] mb-1">+1 (555) 123-4567</p>
          <button className="px-3 py-2 text-[15px] bg-custom-primary border duration-300 text-white hover:bg-black rounded-lg mt-2 cursor-pointer w-full text-center">
            Call Now
          </button>
        </div>
        <div className="bg-[#ffffff] p-5 rounded-2xl flex flex-col justify-center items-center shadow-md">
          <Email />
          <h2 className="text-[17px] font-bold my-1 text-[#000000]">
            Email Support
          </h2>
          <p className="text-sm text-[#4B5563] my-1">
            We'll respond within 24 hours
          </p>
          <p className="text-sm text-[#4B5563] my-1">
            support@realtyinvest.com
          </p>
          <button className="px-3 py-2 text-[15px] bg-custom-primary border duration-300 text-white hover:bg-black rounded-lg mt-2 cursor-pointer w-full text-center">
            Send Email
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-10 mt-6">
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-between my-4">
            <h2 className="md:text-[22px] font-bold">My Support Tickets</h2>
            <button className="px-3 py-2 text-[15px] bg-custom-primary border duration-300 text-white hover:bg-black rounded-lg mt-2 cursor-pointer">
              New Ticket
            </button>
          </div>
          <div className="space-y-4">
            <div className="bg-[#ffffff] p-5 rounded-2xl  shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h2 className="sm:text-lg font-bold">
                    Question about dividend payments
                  </h2>
                  <div className="flex flex-col sm:flex-row items-center gap-2">

                  <button className="bg-[#DBEAFE] text-[#1E40AF] text-sm font-medium px-3 py-1 rounded-2xl flex items-center gap-2">
                    <Question /> Open
                  </button>
                <button className="bg-[#FEF9C3] text-[#854D0E] text-sm font-medium px-3 py-1 rounded-2xl">
                  Medium
                </button>
                </div>
                  </div>
              </div>
              <p className="text-sm text-[#4B5563] my-1">Ticket #12345</p>
              <div className="flex items-center justify-between text-[15px] my-1 text-[#4B5563]">
                <p>Created: 6/17/2024</p>
                <p>Updated: 1 day ago</p>
              </div>
              <button className="px-3 py-2 text-[15px] bg-[#FFF] border hover:text-white hover:bg-black rounded-lg mt-2 cursor-pointer">
                View Details
              </button>
            </div>
            <div className="bg-[#ffffff] p-5 rounded-2xl  shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-bold">Document upload issue</h2>
                  <button className="bg-[#FEF9C3] text-[#854D0E] text-sm font-medium px-3 py-1 rounded-2xl flex items-center gap-2">
                    <Process /> In Progress
                  </button>
                </div>
                <button className="bg-[#FEE2E2] text-[#991B1B] text-sm font-medium px-3 py-1 rounded-2xl">
                  High
                </button>
              </div>
              <p className="text-sm text-[#4B5563] my-1">Ticket #12344</p>
              <div className="flex items-center justify-between text-[15px] my-1 text-[#4B5563]">
                <p>Created: 6/17/2024</p>
                <p>Updated: 1 day ago</p>
              </div>
              <button className="px-3 py-2 text-[15px] bg-[#FFF] border hover:text-white hover:bg-black rounded-lg mt-2 cursor-pointer">
                View Details
              </button>
            </div>
            <div className="bg-[#ffffff] p-5 rounded-2xl  shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-bold">
                    Investment performance query
                  </h2>
                  <button className="bg-[#DCFCE7] text-[#166534] text-sm font-medium px-3 py-1 rounded-2xl flex items-center gap-2">
                    <Complete /> Resolved
                  </button>
                </div>
                <button className="bg-[#DCFCE7] text-[#166534] text-sm font-medium px-3 py-1 rounded-2xl">
                  Low
                </button>
              </div>
              <p className="text-sm text-[#4B5563] my-1">Ticket #12345</p>
              <div className="flex items-center justify-between text-[15px] my-1 text-[#4B5563]">
                <p>Created: 6/17/2024</p>
                <p>Updated: 1 day ago</p>
              </div>
              <button className="px-3 py-2 text-[15px] bg-[#FFF] border hover:text-white hover:bg-black rounded-lg mt-2 cursor-pointer">
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-between my-4">
            <h2 className="text-lg md:text-[22px] font-bold">
              Frequently Asked Questions
            </h2>
            <button className="px-3 py-2 text-[15px] bg-custom-primary duration-300 text-white border  hover:bg-black rounded-lg mt-2 cursor-pointer flex items-center gap-2">
              <Book size={18} /> View All
            </button>
          </div>
              {/* accordian */}
                <div
                  
                  className=""
                >
                  {faqData?.data?.map((according, index) => (
                    <article key={index} className="border-b dark:border-b-slate-800 p-3">
                      <div
                        className="flex gap-2 cursor-pointer items-center justify-between w-full"
                        onClick={() => handleBorderClick(index)}
                      >
                        <h2 className="text-black font-[500] text-[1rem]">
                          {according?.question}
                        </h2>
                        <p>
                          <FaPlus
                            className={`text-[1rem] lg:text-[1.2rem] text-slate-600 text-text transition-all duration-300 ${
                              isPlusAccording === index &&
                              "rotate-[45deg] !text-custom-secondary"
                            }`}
                          />
                        </p>
                      </div>
                      <div
                        className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                          isPlusAccording === index
                            ? "grid-rows-[1fr] opacity-100 mt-4"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <p className="text-[#424242] dark:text-[#abc2d3] text-[0.9rem] overflow-hidden" dangerouslySetInnerHTML={{__html:according?.answer}}>
                         
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
