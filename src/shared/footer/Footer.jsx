import { ImageProvider } from "@/components/common/ImageProvider";
import { FooterQuery } from "@/hooks/useCMS";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const {footerData} = FooterQuery();
  const Data=footerData?.data?.footer_section
  console.log(Data);
  return (
    <div className="section-padding-x py-8 md:py-16 bg-custom-secondary text-white space-y-4">
      <div className="inline-block">
        <Link to="/" className="text-center">
          <img className="w-44" src={ImageProvider.footer} alt="logo" />
        </Link>
      </div>

      <p className="text-[#C7C7C7] text-lg">{Data?.phone}</p>
      <p className="text-[#C7C7C7] text-lg">{Data?.email}</p>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#C7C7C7] text-lg">
          {Data?.location}
        </p>
        <p className="text-[#C7C7C7] text-lg">
          © Copyright 2025. All Rights Reserved by Lorem
        </p>
      </div>
    </div>
  );
};

export default Footer;
