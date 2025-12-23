import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Check, Copy, Home, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function SuccessPage() {
  const containerRef = useRef(null);
  const checkRef = useRef(null);
  const [copied, setCopied] = useState(false);


  // Animations
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Card Pop-in
    tl.from(containerRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
    });

    // 2. Icon Scale & Rotate
    tl.from(checkRef.current, {
      scale: 0,
      rotate: -180,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
    }, "-=0.4");

    // 3. Stagger Text Elements
    tl.from(".animate-text", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
    }, "-=0.2");
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(transactionId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50/50 px-4 relative overflow-hidden">
      
      {/* Background Decor (Optional) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      </div>

      <div
        ref={containerRef}
        className="bg-white max-w-md w-full rounded-3xl shadow-xl border border-gray-100 p-8 text-center relative"
      >
        {/* Success Icon */}
        <div className="flex justify-center mb-6 relative">
          <div className="absolute inset-0 bg-green-100 rounded-full scale-150 opacity-20 animate-pulse" />
          <div 
            ref={checkRef}
            className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-green-400 to-green-600 shadow-lg shadow-green-200"
          >
            <Check className="w-10 h-10 text-white stroke-[3]" />
          </div>
        </div>

        {/* Title & Message */}
        <h1 className="animate-text text-3xl font-bold text-gray-900 mb-2 tracking-tight">
          Payment Successful!
        </h1>
        <p className="animate-text text-gray-500 mb-8 leading-relaxed text-sm sm:text-base">
          Thank you for your investment. Your transaction has been completed successfully.
        </p>

   

        {/* Actions */}
        <div className="animate-text space-y-3">
          <Link
            to="/dashboard"
            className="flex items-center justify-center w-full px-6 py-3.5 rounded-xl bg-custom-primary text-white font-semibold hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md shadow-green-900/10 group"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Dashboard
          </Link>
          
          <Link
            to="/dashboard/my-investments"
            className="flex items-center justify-center w-full px-6 py-3.5 rounded-xl bg-white text-gray-600 font-semibold border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
          >
            View Receipt <ArrowRight className="w-4 h-4 ml-2 opacity-50" />
          </Link>
        </div>
      </div>
    </div>
  );
}