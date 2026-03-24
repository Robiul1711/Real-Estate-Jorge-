import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="section-padding-x section-padding-y min-h-[70vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-custom-primary mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Oops! The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-custom-primary text-white rounded-md font-medium border border-custom-primary hover:bg-transparent hover:text-custom-primary transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
