import React from 'react';
import ProjectTimeline from './ProjectTimeline';

const Description = () => {
  return (
    <div className=" p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Project Summary</h1>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Purpose</h2>
        <p className="text-gray-600">
          To finance the costs for the real estate development and construction of 4 dwellings and 13 parking spaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Location</h2>
          <p className="text-gray-600">Manhattan, NY</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Type of Opportunity</h2>
          <p className="text-gray-600">Development Loan</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Key Highlights</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Prime Manhattan location</li>
          <li>24 luxury residential units</li>
          <li>Expected 12-15% annual returns</li>
          <li>18-month project timeline</li>
          <li>Experienced developer team</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Project Details</h2>
        <p className="text-gray-600">
          Premium residential development with 24 luxury units in prime Manhattan location. This project offers exceptional investment opportunities with guaranteed returns and prime real estate positioning.
        </p>
      </div>

      <div className="mb-8">
      <div className='grid grid-cols-2 gap-4'>
      <div className='flex flex-col items-start'>
        <h1 className='text-lg font-semibold text-gray-700 mb-1'>Scoring</h1>
        <p>100</p>
      </div>
      <div className='flex flex-col items-start'>
        <h1 className='text-lg font-semibold text-gray-700 mb-1'>Type</h1>
        <p>Fixed rate</p>
      </div>
      <div className='flex flex-col items-start'>
        <h1 className='text-lg font-semibold text-gray-700 mb-1'>Nominal annual interest rate</h1>
        <p>15 months</p>
      </div>
      <div className='flex flex-col items-start'>
        <h1 className='text-lg font-semibold text-gray-700 mb-1'>Maturity</h1>
        <p>15 months</p>
      </div>
      </div>
      </div>

      <div>
     <ProjectTimeline />
      </div>
    </div>
  );
};

export default Description;