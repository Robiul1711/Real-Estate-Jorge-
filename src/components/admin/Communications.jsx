import React from 'react';
import { Eye } from 'lucide-react';

export default function Communications() {
  // Project progress data
  const projectProgress = [
    { id: 1, title: "Project progress", date: "June 1, 2025", status: "completed" },
    { id: 2, title: "Building License", date: "December 5, 2023", status: "completed" },
    { id: 3, title: "Land Purchase and Sale", date: "September 26, 2023", status: "completed" },
    { id: 4, title: "Capital Increase", date: "September 26, 2023", status: "completed" },
    { id: 5, title: "Funded Project", date: "August 5, 2023", status: "completed" },
    { id: 6, title: "Project Opening", date: "July 31, 2023", status: "completed" },
    { id: 7, title: "Under Study", date: "June 8, 2023", status: "active" }
  ];

  const communicationsData = [
    {
      id: 1,
      author: "XAVIER",
      role: "Project Manager",
      date: "June 1, 2025",
      title: "The execution of the structure continues.",
      content:
        "During the month of May, the roof slab for the ground floor of a commercial space was concreted, and plaster and elevator walls are being constructed for the first floor of residences 2 and 4. In the same time, the first two slabs for entrance A were concreted, and the framework and reinforcement for the subsequent floors are being prepared or concreted in June. Additionally, the remaining perimeter walls were also completed, as well as waterproofing and backfilling of the walls with gravel and earth. There are no new developments at the commercial level, with the 36 apartments still on the market.",
      projectName: "Sunrise Apartments",
   images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 2,
      author: "SOFIA",
      role: "Project Manager",
      date: "May 1, 2025",
      title: "Significant progress in the execution of the structure.",
      content:
        "In April, the ground floor slabs of portals 1, 2, and 3, concrete and assembly of the first floor structure began. The foundation for portal 2 was laid, as anticipated in the March newsletter. The third floor slab for portal 1 was concreted, and the support system for the building's facade, which is to be preserved, was dismantled. Sales are maintained at 36, with an anticipated increase in interest in the coming months with the arrival of good weather.",
      projectName: "Downtown Plaza",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 3,
      author: "SOFIA",
      role: "Project Manager",
      date: "May 1, 2025",
      title: "Significant progress in the execution of the structure.",
      content:
        "In April, the ground floor slabs of portals 1, 2, and 3, concrete and assembly of the first floor structure began. The foundation for portal 2 was laid, as anticipated in the March newsletter. The third floor slab for portal 1 was concreted, and the support system for the building's facade, which is to be preserved, was dismantled. Sales are maintained at 36, with an anticipated increase in interest in the coming months with the arrival of good weather.",
      projectName: "Downtown Plaza",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
      ]
    },
  ];

  const getStatusColor = (status) => {
    return status === "completed" ? "text-green-500" : "text-blue-500";
  };

  return (
    <>
      {/* Page Header */}
      <div className="">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-gray-900">Communications</h1>
          <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow">
            {communicationsData.length} updates
          </span>
        </div>
        <p className="text-sm text-gray-600">
          Project updates and communications
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar */}
        <div className="lg:w-72 bg-white border border-gray-200 rounded-lg p-6 shadow-sm lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
          <h2 className="font-medium text-gray-900 mb-4">Project Progress</h2>
          <div className="space-y-4">
            {projectProgress.map((item) => (
              <div key={item.id} className="flex items-start gap-3">
                <span className={`${getStatusColor(item.status)} text-lg`}>
                  ●
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              If you have any questions, please write to us at
            </p>
            <p className="text-sm text-blue-600 font-medium">
              contact@yourprojectcompany.com
            </p>
            <p className="text-sm text-gray-600 mt-1">
              or call us at +34 585 23 56 86
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {communicationsData.map((update) => (
            <div
              key={update.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {update.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {update.author}
                      </p>
                      <p className="text-xs text-gray-500">{update.role}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{update.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {update.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {update.content}
                </p>

                {/* Images */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {update.images.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image}
                        alt={`Project image ${index + 1}`}
                        className="w-full h-44 object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {update.projectName}
                  </span>
                  <button className="flex items-center gap-2 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                    <Eye className="w-4 h-4" />
                    View Gallery
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
