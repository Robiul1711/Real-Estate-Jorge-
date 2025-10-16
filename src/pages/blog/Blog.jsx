import { ImageProvider } from "@/components/common/ImageProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
const blogData = [
  {
    image: ImageProvider.blog2,
    title: "Mastering the Art of Focus in a Distracted World",
    text: "In today’s digital age, focus has become a superpower. This article explores practical techniques to strengthen your attention, improve decision-making, and elevate productivity in both work and personal life.",
  },
  {
    image: ImageProvider.blog1,
    title: "How Small Habits Create Massive Success Over Time",
    text: "True growth doesn’t happen overnight. By understanding the science of compounding and adopting small, consistent habits, you can achieve long-term results that outlast motivation.",
  },
  {
    image: ImageProvider.blog2,
    title: "The Psychology Behind Creative Thinking",
    text: "Creativity isn’t just talent—it’s a mindset. Discover how curiosity, play, and mental flexibility can fuel innovative ideas and push your problem-solving skills to the next level.",
  },
  {
    image: ImageProvider.blog,
    title: "Why Emotional Intelligence Beats IQ in the Real World",
    text: "Emotional intelligence shapes how we manage ourselves and connect with others. Learn how mastering empathy, self-awareness, and communication can transform your relationships and leadership.",
  },
  {
    image: ImageProvider.blog1,
    title: "Building Financial Discipline: A Young Investor’s Guide",
    text: "Money management is more about behavior than knowledge. This guide covers practical ways to build consistency, avoid emotional decisions, and grow wealth with confidence.",
  },
  {
    image: ImageProvider.blog,
    title: "Overcoming Fear of Failure: Lessons from Great Innovators",
    text: "Every successful creator has faced rejection and setbacks. This post dives into real-world lessons on how to turn fear into motivation and failure into a stepping stone for success.",
  },
];

const Blog = () => {
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
      {blogData.map((item, index) => (
        <div key={index} className="h-full border rounded-lg">
          <div className="overflow-hidden rounded-t-lg">
            <img
              className="w-full hover:scale-105 transform transition-all duration-500 ease-in-out"
              src={item.image}
              alt="image"
            />
          </div>

          <div className="p-6">
            <h2 className="text-xl md:text-2xl font-semibold my-4">
              {item.title}
            </h2>
            <p className="text-[#656565]">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
