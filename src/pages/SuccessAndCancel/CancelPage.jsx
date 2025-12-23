import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { X, AlertCircle, RotateCcw, ArrowLeft, HelpCircle } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function CancelPage() {
  const containerRef = useRef(null);
  const iconRef = useRef(null);

  // Animations
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Card Pop-in
    tl.from(containerRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
    });

    // 2. Icon Scale & Rotate (Different feel from success)
    tl.from(iconRef.current, {
      scale: 0,
      rotate: 90,
      opacity: 0,
      duration: 0.5,
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50/50 px-4 relative overflow-hidden">
      
      {/* Background Decor (Red/Orange Theme) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-red-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />
      </div>

      <div
        ref={containerRef}
        className="bg-white max-w-md w-full rounded-3xl shadow-xl border border-gray-100 p-8 text-center relative"
      >
        {/* Cancel/Error Icon */}
        <div className="flex justify-center mb-6 relative">
          <div className="absolute inset-0 bg-red-100 rounded-full scale-150 opacity-20" />
          <div 
            ref={iconRef}
            className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-200"
          >
            <X className="w-10 h-10 text-white stroke-[3]" />
          </div>
        </div>

        {/* Title & Message */}
        <h1 className="animate-text text-3xl font-bold text-gray-900 mb-2 tracking-tight">
          Payment Cancelled
        </h1>
        <p className="animate-text text-gray-500 mb-8 leading-relaxed text-sm sm:text-base">
          You have cancelled the payment process. No charges were made to your account.
        </p>

        {/* Info / Troubleshooting Box */}
        <div className="animate-text bg-gray-50 rounded-2xl p-5 mb-8 border border-gray-100 text-left">
          <div className="flex items-center gap-3 mb-3">
            <AlertCircle className="text-orange-500 w-5 h-5 shrink-0" />
            <h3 className="font-semibold text-gray-900 text-sm">Was this a mistake?</h3>
          </div>
          
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">
             If you encountered an issue or changed your mind, you can try the payment again at any time.
          </p>

          {/* Dashed Divider */}
          <div className="border-t border-dashed border-gray-300 my-3" />
          
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">Status</span>
            <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Cancelled
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="animate-text space-y-3">
          {/* Primary Action: Retry */}
          <Link
            to="/dashboard/browse-opportunities" // Or wherever your checkout starts
            className="flex items-center justify-center w-full px-6 py-3.5 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md group"
          >
            <RotateCcw className="w-4 h-4 mr-2 group-hover:-rotate-180 transition-transform duration-500" />
            Try Again
          </Link>
          
          {/* Secondary Action: Home or Support */}
          <div className="">
            <Link
              to="/"
              className="flex items-center justify-center px-4 py-3.5 rounded-xl bg-white text-gray-600 font-semibold border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Home
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}