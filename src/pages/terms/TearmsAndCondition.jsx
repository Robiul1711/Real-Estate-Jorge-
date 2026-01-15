import { useApiQuery } from '@/hooks/getCmsUpdate';
import React from 'react';

const TearmsAndCondition = () => {
  const {
    data: tearmsAndCondition,
    isLoading,
    error,
  } = useApiQuery({
    queryKey: ["tearms-and-condition"],
    url: `/dynamic-page`,
    secure: false,
  });

  // Extract the specific object from the array
  const pageData = tearmsAndCondition?.data?.find((item) => item.page_slug === "terms-conditions");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-custom-primary"></div>
      </div>
    );
  }

  if (error || !pageData) {
    return (
      <div className="text-center py-20 text-red-500">
        <p>Failed to load Terms & Conditions. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className=" min-h-screen section-padding-x section-padding-y mt-10 sm:mt-0">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-2xl overflow-hidden border border-gray-100">
        
        {/* --- Header Section --- */}
        <div className="bg-custom-primary/5 px-8 py-10 border-b border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {pageData.page_title}
          </h1>
          <p className="text-gray-500 mt-2">
            Please read these terms carefully before using our services.
          </p>
        </div>

        {/* --- Content Section --- */}
        <div className="px-8 py-10">
          {/* 'prose' allows the raw HTML (ul, li, strong) from your 
              API to look professional and spaced correctly.
          */}
          <article 
            className="prose prose-lg prose-slate max-w-none 
                       prose-headings:text-gray-900 
                       prose-strong:text-custom-primary 
                       prose-li:marker:text-custom-primary"
            dangerouslySetInnerHTML={{ __html: pageData.page_content }}
          />
        </div>

        {/* --- Footer Section --- */}
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-400 italic">
            Status: <span className="capitalize">{pageData.status}</span> | Last updated: 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default TearmsAndCondition;