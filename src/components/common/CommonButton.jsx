import { Link } from "react-router-dom";

const CommonBtn = ({ children, className, path, type = "button", onClick }) => {
  return (
    <>
      {type === "button" ? (
        <Link
          onClick={onClick}
          to={path}
          className={`${className} cursor-pointer px-4 py-2 rounded-full border border-custom-primary text-white bg-custom-primary duration-300 hover:text-custom-primary hover:bg-white flex justify-center items-center text-center text-sm font-medium leading-[28px] font-urban`}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          type="submit"
          to={path}
          className={`${className} cursor-pointer px-4 py-2 rounded-full border border-custom-primary text-white bg-custom-primary duration-300 hover:text-custom-primary hover:bg-white flex justify-center items-center text-center text-sm font-medium leading-[28px] font-urban`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default CommonBtn;
