import React, { useState } from "react";
import { Eye } from "lucide-react";
import { useApiQuery } from "@/hooks/getCmsUpdate";


import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Communications() {
  const {
    data: communicationData,
    isLoading,
    error,
  } = useApiQuery({
    queryKey: ["communication"],
    url: "project/the-westwood-residences/communications",
    secure: true,
  });

  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState([]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      {/* Page Header */}
      <div className="">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Communications
          </h1>
          <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow">
            {communicationData?.data?.length} updates
          </span>
        </div>
        <p className="text-sm text-gray-600">
          Project updates and communications
        </p>
      </div>

      {/* Updates */}
      <div className="space-y-6">
        {communicationData?.data?.map((update, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6 "
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={update.person_image}
                    alt={update.person_name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900">
                      {update.person_name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {update.person_designation}
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {update.title}
              </h3>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Description */}
              {update.description && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Description
                  </h4>
                  <div
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: update.description,
                    }}
                  />
                </div>
              )}

              {/* Project Progress */}
              {update.project_progress && (
                <div className="mb-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Project Progress
                  </h4>
                  <div
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: update.project_progress,
                    }}
                  />
                </div>
              )}

              {/* Gallery Preview */}
              {update.gallery?.length > 0 && (
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {update.gallery.map((image, i) => (
                   
                      <img index={i}
                        src={image}
                        alt={`Gallery ${i + 1}`}
                        className="w-full h-44 object-cover rounded-lg cursor-zoom-in"
                      />
                  
                  ))}
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Updated by {update.person_name}
                </span>

                {update.gallery?.length > 0 && (
                  <button
                    onClick={() => {
                      setSlides(
                        update.gallery.map((img) => ({ src: img }))
                      );
                      setOpen(true);
                    }}
                    className="flex items-center gap-2 text-blue-600 text-sm font-medium hover:text-blue-700"
                  >
                    <Eye className="w-4 h-4" />
                    View Gallery
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Gallery Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
      />
    </>
  );
}
