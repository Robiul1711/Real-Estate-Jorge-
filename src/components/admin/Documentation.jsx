import React from 'react';
import { FileText, Eye, Download, Calendar, CheckCircle } from 'lucide-react';

const Documentation = ({ data }) => {

  const documentGroups = data?.data?.tabs?.documentation?.document_groups;

  const handleView = (url) => window.open(url, "_blank");
  const handleDownload = (url) => window.open(url, "_blank");

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="mb-6 flex items-center space-x-3">
        <div className="p-2 bg-blue-50 rounded-lg">
          <FileText className="h-6 w-6" />
        </div>
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Legal Documents</h1>
      </div>

      {/* Loop category groups */}
      <div className="space-y-8">

        {documentGroups &&
          Object.entries(documentGroups).map(([category, docs]) => (
            <div key={category}>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">{category}</h2>

              <div className="space-y-4">

                {docs.map((doc, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0"
                  >
                    {/* Info */}
                    <div className="flex items-center space-x-4 w-full sm:w-auto">
                      <div className="p-3 bg-blue-50 rounded-xl flex-shrink-0">
                        <FileText className="h-6 w-6 text-[#00474F]" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-md sm:text-lg font-medium text-gray-900 truncate">
                          {doc.title}
                        </h3>

                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <span className="font-medium uppercase">{doc.file_type}</span>

                          {doc.is_verified && (
                            <div className="flex items-center space-x-1 text-emerald-600">
                              <CheckCircle className="h-4 w-4" />
                              <span className="font-medium">Verified</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0 mt-2 sm:mt-0">
                      <button
                        onClick={() => handleView(doc.file_url)}
                        className="flex items-center justify-center space-x-2 px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200 w-full sm:w-auto"
                      >
                        <Eye className="h-4 w-4" />
                        <span className="font-medium">VIEW</span>
                      </button>

                      <button
                        onClick={() => handleDownload(doc.file_url)}
                        className="flex items-center justify-center space-x-2 px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200 w-full sm:w-auto"
                      >
                        <Download className="h-4 w-4" />
                        <span className="font-medium">DOWNLOAD</span>
                      </button>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          ))}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          All documents are digitally verified and securely stored
        </p>
      </div>
    </div>
  );
};

export default Documentation;
