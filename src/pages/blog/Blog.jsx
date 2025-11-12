import { ImageProvider } from "@/components/common/ImageProvider";
import { BlogQuery } from "@/hooks/useCMS";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Blog = () => {
    const { blogData } = BlogQuery();
  const cardRef = useRef(null);
  useGSAP(() => {
    gsap.from([cardRef.current], {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
      stagger: 0.1,
    });
  }, []);
  return (
    <div
      ref={cardRef}
      className="section-padding-x section-padding-y my-6 lg:my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12"
    >
      {blogData?.data?.map((item, index) => (
        <div key={index} className="h-full border rounded-lg">
          <div className="overflow-hidden rounded-t-lg">
            <img
              className="w-full hover:scale-105 transform transition-all duration-500 ease-in-out"
              src={item.image || ImageProvider.blog}
              alt="image"
            />
          </div>

          <div className="p-6">
            <h2 className="text-xl md:text-2xl font-semibold my-4">
              {item.title}
            </h2>
            <p className="text-[#656565]" dangerouslySetInnerHTML={{__html:item.description}}></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
