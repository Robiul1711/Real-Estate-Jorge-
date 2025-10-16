import React, { useRef } from "react";
import { ImageProvider } from "../common/ImageProvider";
import CommonBtn from "../common/CommonButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactUs = () => {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRef = useRef(null);
  useGSAP(() => {
    gsap.from([buttonRef.current, cardRef.current, sectionRef.current], {
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
    <div ref={sectionRef} className="section-padding-x py-10">
      <div
        ref={cardRef}
        className="bg-white shadow rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-6"
      >
        {/* Form Section */}
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl lg:text-[32px] font-semibold">
            Do You Have Any Questions?
          </h2>
          <p className="text-gray-600 mt-2   mb-6 text-xl">
            We will be happy to assist you
          </p>

          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 border rounded-md px-3 py-3 bg-gray-50"
              />
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 border rounded-md px-3 py-3 bg-gray-50"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-md px-3 py-3 bg-gray-50"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-md px-3 py-3 bg-gray-50"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border rounded-md px-3 py-3 bg-gray-50"
            />
            <button
              type="submit"
              className="w-full bg-custom-primary text-white py-3 rounded-md hover:bg-green-700 transition cursor-pointer"
            >
              Connect with Us
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative overflow-hidden rounded-xl">
          <img
            src={ImageProvider.signup}
            alt="image"
            className="w-full h-[490px] object-cover rounded-xl hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Bottom Button */}
      <div ref={buttonRef} className="flex  justify-center mt-8">
        <CommonBtn>Start Investing Now</CommonBtn>
      </div>
    </div>
  );
};

export default ContactUs;
