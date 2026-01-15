import { useApiQuery } from "@/hooks/getCmsUpdate";
import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BlogDetails = () => {
  const { id } = useParams();

  const {
    data: blogDetails,
    isLoading,
    error,
  } = useApiQuery({
    queryKey: ["blog-details", id],
    url: `/blog/details/${id}`,
    secure: true,
  });

  const blog = blogDetails?.data;

  if (isLoading) {
    return   <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-14 h-14 border-4 border-gray-200 border-t-custom-primary rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-gray-600 text-sm tracking-wide">
          Loading blog details...
        </p>
      </div>
    </div>
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">Something went wrong</div>;
  }

  return (
    <div className="w-full section-padding-y">
      {/* ===== Banner Image ===== */}
      <div className="w-full h-[280px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src={blog?.image}
          alt={blog?.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* ===== Content Section ===== */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Title & Date */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          {blog?.title}
        </h1>
        <p className="text-gray-500 mb-6">
          Published on {new Date(blog?.published_at).toDateString()}
        </p>

        {/* Short Description */}
        <div
          className="text-gray-700 text-lg leading-relaxed mb-10"
          dangerouslySetInnerHTML={{ __html: blog?.description }}
        />

        {/* ===== Gallery Swiper ===== */}
        {blog?.gallery?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {blog.gallery.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* ===== Long Description ===== */}
        <div
          className="prose max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: blog?.long_description }}
        />
      </div>
    </div>
  );
};

export default BlogDetails;
