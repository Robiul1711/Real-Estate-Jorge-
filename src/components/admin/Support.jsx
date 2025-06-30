import { Chat, Complete, Email, Process, Question } from "@/assets/icon";
import { Book, Phone } from "lucide-react";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const faqs = [
  {
    question: "How do I make my first investment?",
    short:
      "Browse our opportunities section, select a property, and follow the investment process...",
    full: "Browse our opportunities section, select a property, and follow the investment process through your dashboard. You’ll be guided with easy steps and can track your progress anytime.",
  },
  {
    question: "When will I receive dividend payments?",
    short: "Dividend payments are typically distributed quarterly...",
    full: "Dividend payments are typically distributed quarterly, depending on the specific investment agreement. You’ll be notified and can view all payout details in your account.",
  },
  {
    question: "Can I withdraw my investment early?",
    short: "Early withdrawal terms depend on the specific investment...",
    full: "Early withdrawal terms depend on the specific investment. Some allow early exits with notice or fees, while others require holding till maturity. Please review the terms before investing.",
  },
  {
    question: "When will I receive dividend payments?",
    short: "Dividend payments are typically distributed quarterly...",
    full: "Dividend payments are typically distributed quarterly, depending on the specific investment agreement. You’ll be notified and can view all payout details in your account.",
  },    
];

const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  return (
    <div>
      <h2 className="text-3xl font-bold my-2 text-[#000000]">Support Center</h2>
      <p className="text-sm text-[#4B5563]">
        Get help and support for your investment journey
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        <div className="bg-[#ffffff] p-5 rounded-2xl flex flex-col justify-center items-center shadow-md">
          <Chat />
          <h2 className="text-[17px] font-bold my-1 text-[#000000]">
            Live Chat
          </h2>
          <p className="text-sm text-[#4B5563] mb-1">
            Get instant help from our support team
          </p>
          <button className="px-3 py-2 text-[15px] bg-[#FFF] hover:text-white border hover:bg-black rounded-lg mt-2 cursor-pointer w-full text-center">
            Start Chat
          </button>
        </div>
        <div className="bg-[#ffffff] p-5 rounded-2xl flex flex-col justify-center items-center shadow-md">
          <Phone />
          <h2 className="text-[17px] font-bold my-1 text-[#000000]">
            Phone Support
          </h2>
          <p className="text-sm text-[#4B5563] my-1">
            Mon-Fri, 9 AM - 6 PM EST
          </p>
          <p className="text-sm text-[#4B5563] mb-1">+1 (555) 123-4567</p>
          <button className="px-3 py-2 text-[15px] bg-[#FFF] border hover:text-white hover:bg-black rounded-lg mt-2 cursor-pointer w-full text-center">
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
          <button className="px-3 py-2 text-[15px] bg-[#FFF] border hover:text-white hover:bg-black rounded-lg mt-2 cursor-pointer w-full text-center">
            Send Email
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-10 mt-6">
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-between my-4">
            <h2 className="md:text-[22px] font-bold">My Support Tickets</h2>
            <button className="px-3 py-2 text-[15px] bg-[#FFF] border hover:text-white hover:bg-black rounded-lg mt-2 cursor-pointer">
              New Ticket
            </button>
          </div>
          <div className="space-y-4">
            <div className="bg-[#ffffff] p-5 rounded-2xl  shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-bold">
                    Question about dividend payments
                  </h2>
                  <button className="bg-[#DBEAFE] text-[#1E40AF] text-sm font-medium px-3 py-1 rounded-2xl flex items-center gap-2">
                    <Question /> Open
                  </button>
                </div>
                <button className="bg-[#FEF9C3] text-[#854D0E] text-sm font-medium px-3 py-1 rounded-2xl">
                  Medium
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
            <button className="px-3 py-2 text-[15px] bg-[#FFF] border hover:text-white hover:bg-black rounded-lg mt-2 cursor-pointer flex items-center gap-2">
              <Book size={18} /> View All
            </button>
          </div>
          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="bg-white p-5 rounded-2xl shadow-md">
                  <h2 className="text-lg font-bold mb-2">{item.question}</h2>
                  <p className="text-sm text-[#4B5563]">
                    {isOpen ? item.full : item.short}
                  </p>
                  <button
                    onClick={() => toggleAnswer(index)}
                    className="flex items-center gap-1 text-[15px] text-black font-medium cursor-pointer mt-2"
                  >
                    {isOpen ? "Show Less" : "Read More"}
                    <IoIosArrowRoundForward
                      size={20}
                      className={`transform transition-all ease-in-out duration-300 ${
                        isOpen ? "rotate-90" : "rotate-0"
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
