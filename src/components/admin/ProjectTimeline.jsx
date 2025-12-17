import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const ProjectTimeline = ({ data }) => {
  console.log(data?.timeline?.milestones);

  // Status Badge
  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
            Completed
          </span>
        );
      case 'in_progress':
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

  // Status Icon
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-emerald-500" fill="currentColor" />;
      case 'in_progress':
        return <Circle className="h-4 w-4 text-blue-500" fill="currentColor" />;
      case 'upcoming':
        return <Circle className="h-4 w-4 text-gray-300" />;
      default:
        return null;
    }
  };

  // Vertical Line Color
  const getConnectorColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-500';
      case 'in_progress':
        return 'bg-blue-500';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div>
      <div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
          <h1 className="text-xl font-semibold text-gray-900 mb-8">Project Timeline</h1>

          <div className="relative">
            {data?.timeline?.milestones?.map((item, index) => (
              <div key={index} className="relative flex items-center pb-8 last:pb-0">

                {/* Vertical Line */}
                {index < data?.timeline?.milestones?.length - 1 && (
                  <div
                    className={`absolute left-2 top-6 w-0.5 h-16 ${getConnectorColor(item.status)}`}
                  />
                )}

                {/* Icon */}
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
                      {item.actual_date ? item.actual_date : "Pending"}
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
      </div>
    </div>
  );
};

export default ProjectTimeline;
