import { ImageProvider } from "@/components/common/ImageProvider";
import { BlogQuery } from "@/hooks/useCMS";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const { blogData, isLoading } = BlogQuery();

  const cardRef = useRef(null);

  useGSAP(() => {
    if (!isLoading) {
      gsap.from(cardRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 border-4 border-gray-200 border-t-custom-primary rounded-full animate-spin"></div>
          <p className="text-gray-600 text-sm tracking-wide">
            Loading blog ...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      className="section-padding-x section-padding-y my-6 lg:my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12"
    >
      {blogData?.data?.map((item, index) => (
        <Link
          to={`/blog-details/${item.id}`}
          key={index}
          className="h-full border rounded-lg"
        >
          <div className="overflow-hidden rounded-t-lg">
            <img
              className="w-full hover:scale-105 transition-all duration-500 ease-in-out"
              src={item.image || ImageProvider.blog}
              alt={item.title}
            />
          </div>

          <div className="p-6">
            <h2 className="text-xl md:text-2xl font-semibold my-4 line-clamp-1">
              {item.title}
            </h2>
            <p
              className="text-[#656565] line-clamp-2"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
