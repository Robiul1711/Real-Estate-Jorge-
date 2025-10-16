import { ImageProvider } from "@/components/common/ImageProvider";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="section-padding-x py-8 md:py-16 bg-custom-secondary text-white space-y-4">
      <div className="inline-block">
        <Link to="/" className="text-center">
          <img className="w-44" src={ImageProvider.footer} alt="logo" />
        </Link>
      </div>

      <p className="text-[#C7C7C7] text-lg">+1-800-555-1234</p>
      <p className="text-[#C7C7C7] text-lg">infolorem.com</p>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#C7C7C7] text-lg">
          123 Serenity Boulevard, Greenwood Heights, NY 11222, United States
        </p>
        <p className="text-[#C7C7C7] text-lg">
          © Copyright 2025. All Rights Reserved by Lorem
        </p>
      </div>
    </div>
  );
};

export default Footer;
