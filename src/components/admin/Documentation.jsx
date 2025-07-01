import React from 'react';
import { FileText, Eye, Download, Calendar, CheckCircle } from 'lucide-react';

const Documentation = () => {
  const documents = [
    {
      id: 1,
      title: "PROPERTY PURCHASE AGREEMENT",
      size: "2.3 MB",
      date: "2024-01-15",
      verified: true
    },
    {
      id: 2,
      title: "LAND TITLE DOCUMENTS",
      size: "1.8 MB",
      date: "2024-01-10",
      verified: true
    },
    {
      id: 3,
      title: "CONSTRUCTION PERMITS",
      size: "945 KB",
      date: "2024-02-20",
      verified: true
    },
    {
      id: 4,
      title: "ENVIRONMENTAL IMPACT ASSESSMENT",
      size: "3.1 MB",
      date: "2024-01-25",
      verified: true
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit' 
    }).replace(/\//g, '-');
  };

  const handleView = (docTitle) => {
    console.log(`Viewing: ${docTitle}`);
    // In a real app, this would open a document viewer
  };

  const handleDownload = (docTitle) => {
    console.log(`Downloading: ${docTitle}`);
    // In a real app, this would trigger a download
  };

  return (
    <div className=" bg-white p-6 rounded-2xl shadow-sm">
      <div className="">
        {/* Header */}
        <div className=" mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FileText className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-semibold text-gray-900">Legal Documents</h1>
          </div>
        </div>

        {/* Documents List */}
        <div className="space-y-4">
          {documents.map((doc) => (
            <div key={doc.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between">
                {/* Left side - Document info */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <FileText className="h-6 w-6 text-[#00474F]" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {doc.title}
                    </h3>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span className="font-medium">{doc.size}</span>
                      
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(doc.date)}</span>
                      </div>
                      
                      {doc.verified && (
                        <div className="flex items-center space-x-1 text-emerald-600">
                          <CheckCircle className="h-4 w-4" />
                          <span className="font-medium">Verified</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right side - Actions */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleView(doc.title)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <Eye className="h-4 w-4" />
                    <span className="font-medium">VIEW</span>
                  </button>
                  
                  <button
                    onClick={() => handleDownload(doc.title)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <Download className="h-4 w-4" />
                    <span className="font-medium">DOWNLOAD</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            All documents are digitally verified and securely stored
          </p>
        </div>
      </div>
    </div>
  );
};

export default Documentation;