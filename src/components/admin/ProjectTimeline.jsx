import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';

const ProjectTimeline = () => {
  const timelineItems = [
    {
      id: 1,
      title: "LAND ACQUISITION",
      date: "JAN 2024",
      status: "completed"
    },
    {
      id: 2,
      title: "PLANNING & PERMITS",
      date: "MAR 2024",
      status: "completed"
    },
    {
      id: 3,
      title: "CONSTRUCTION START",
      date: "MAY 2024",
      status: "in-progress"
    },
    {
      id: 4,
      title: "PHASE 1 COMPLETION",
      date: "DEC 2024",
      status: "upcoming"
    },
    {
      id: 5,
      title: "FINAL COMPLETION",
      date: "JUN 2025",
      status: "upcoming"
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
            Completed
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            In Progress
          </span>
        );
      case 'upcoming':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
            Upcoming
          </span>
        );
      default:
        return null;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-emerald-500" fill="currentColor" />;
      case 'in-progress':
        return <Circle className="h-4 w-4 text-blue-500" fill="currentColor" />;
      case 'upcoming':
        return <Circle className="h-4 w-4 text-gray-300" />;
      default:
        return null;
    }
  };

  const getConnectorColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-500';
      case 'in-progress':
        return 'bg-blue-500';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div className=" ">
      <div className="">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-xl font-semibold text-gray-900 mb-8">Project Timeline</h1>
          
          {/* Timeline */}
          <div className="relative">
            {timelineItems.map((item, index) => (
              <div key={item.id} className="relative flex items-center pb-8 last:pb-0">
                {/* Connector Line */}
                {index < timelineItems.length - 1 && (
                  <div 
                    className={`absolute left-2 top-6 w-0.5 h-16 ${getConnectorColor(item.status)}`}
                  />
                )}
                
                {/* Timeline Icon */}
                <div className="relative z-10 flex-shrink-0 mr-4">
                  {getStatusIcon(item.status)}
                </div>
                
                {/* Content */}
                <div className="flex-1 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      {item.date}
                    </p>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="ml-4">
                    {getStatusBadge(item.status)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Summary Stats */}
        {/* <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600 mb-1">2</div>
              <div className="text-xs text-gray-600">Completed</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">1</div>
              <div className="text-xs text-gray-600">In Progress</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400 mb-1">2</div>
              <div className="text-xs text-gray-600">Upcoming</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectTimeline;
