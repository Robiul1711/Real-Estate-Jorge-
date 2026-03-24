import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
// --- Helper Function to manage the Google Translate cookie ---
const setGoogleTranslateCookie = (langCode) => {
  const cookieName = "googtrans";
  const cookieValue = `/en/${langCode}`;
  
  // Set for the current path
  document.cookie = `${cookieName}=${cookieValue}; path=/`;
  
  // Clear any potential broad domain matches from previous usage,
  // then explicitly set it on the base domain as Google expects.
  const domain = window.location.hostname;
  document.cookie = `${cookieName}=${cookieValue}; domain=${domain}; path=/`;
  if (domain.includes('.')) {
    // If it's something like example.com, also set .example.com
    document.cookie = `${cookieName}=${cookieValue}; domain=.${domain}; path=/`;
  }
};

const LanguageArea = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    let saved = localStorage.getItem("selectedLanguage");
    if (!saved) {
      saved = "es";
      localStorage.setItem("selectedLanguage", saved);
      setGoogleTranslateCookie(saved);
      document.documentElement.lang = saved;
    }
    return saved;
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.googleTranslateElementInit) return;
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
    document.documentElement.lang = selectedLanguage;
    setGoogleTranslateCookie(selectedLanguage);

    const intervalId = setInterval(() => {
      const selectElement = document.querySelector(".goog-te-combo");
      if (selectElement) {
        selectElement.value = selectedLanguage;
        selectElement.dispatchEvent(new Event("change", { bubbles: true }));
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [selectedLanguage]);

  const changeLanguage = (langCode) => {
    if (selectedLanguage !== langCode) {
      setSelectedLanguage(langCode);
      localStorage.setItem("selectedLanguage", langCode);
      setGoogleTranslateCookie(langCode);
      window.location.reload();
    }
    setIsOpen(false);
  };

  const currentLangLabel = selectedLanguage === "en" ? "English" : "Español";
  const currentLangFlag = selectedLanguage === "en" ? "🇺🇸" : "🇪🇸";

  return (
    <div className="relative inline-block text-left text-sm" onMouseLeave={() => setIsOpen(false)}>
      {/* Hidden Google Translate container */}
      <div id="google_translate_element" style={{ display: "none" }} />

      {/* Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border border-custom-primary rounded-md px-3 py-1.5 sm:py-2 hover:bg-custom-primary hover:text-white transition shadow-sm notranslate"
      >
        {/* <span>{currentLangFlag}</span>   */}
        <span>{currentLangLabel}</span>
        <FaAngleDown />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-0 w-32 bg-white rounded-md shadow-lg overflow-hidden z-50 border border-gray-100">
          <button
            onClick={() => changeLanguage("en")}
            className="w-full text-left px-4 py-2 hover:bg-custom-primary hover:text-white transition flex items-center gap-2 notranslate text-black"
          >
            {/* <span>🇺🇸</span> */}
            <span>English</span>
          </button>
          <button
            onClick={() => changeLanguage("es")}
            className="w-full text-left px-4 py-2 hover:bg-custom-primary hover:text-white transition flex items-center gap-2 notranslate text-black"
          >
            {/* <span>🇪🇸</span> */}
            <span>Español</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageArea;
