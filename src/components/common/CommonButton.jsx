import React, { useEffect, useState } from "react";

// react icons
import { MdKeyboardArrowDown } from "react-icons/md";
const CommonButton = ({ defaultText = "Select", options = [] }) => {
  const [actionButtonActive, setActionButtonActive] = useState(false);
  const [actionButtonText, setActionButtonText] = useState(defaultText);

  const handleActionButtonClick = (item) => {
    setActionButtonText(item);
    setActionButtonActive(false);
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (
        !event.target.closest(".publishButtonOptions") &&
        !event.target.closest(".publishButton")
      ) {
        setActionButtonActive(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="flex items-center rounded bg-transparent border border-[#fff] outline-none text-[#fff] justify-between relative my-3 w-[238px]">
      <button className=" text-[1rem] px-6 py-1.5 transition-all duration-500 cursor-auto">
        {actionButtonText}
      </button>

      <div
        onClick={() => setActionButtonActive(!actionButtonActive)}
        className="bg-transparent w-[50px] py-1.5 flex items-center justify-center cursor-pointer rounded-r publishButton"
      >
        <MdKeyboardArrowDown className="text-[2rem]" />
      </div>

      <ul
        className={`${
          actionButtonActive
            ? "opacity-100 z-20 translate-y-0"
            : "opacity-0 z-[-1] translate-y-[-5px]"
        } dark:bg-slate-800 dark:text-[#abc2d3] publishButtonOptions transition-all duration-500 flex flex-col bg-black py-1 w-full absolute top-[46px] rounded right-0 text-text text-[0.9rem]`}
      >
        {options?.map((item, index) => (
          <li
            key={index}
            onClick={() => handleActionButtonClick(item)}
            className="py-2 px-3 hover:bg-gray-900 dark:hover:bg-slate-900/40 cursor-pointer rounded"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommonButton;
