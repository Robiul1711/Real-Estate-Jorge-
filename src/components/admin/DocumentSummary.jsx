import React from 'react';
import { FileText } from 'lucide-react';

export default function DocumentSummary({data}) {
  console.log(data?.data?.tabs?.documentation?.document_summary)
  const documentCategories=data?.data?.tabs?.documentation?.document_summary || [];
  // const documentCategories = [
  //   { label: 'Legal Documents', count: 4 },
  //   { label: 'Financial Documents', count: 4 },
  //   { label: 'Technical Documents', count: 4 },
  //   { label: 'Compliance Documents', count: 4 }
  // ];

  const totalDocuments = documentCategories.reduce((sum, category) => sum + category.count, 0);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 ">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Document Summary</h2>
      
      <div className="space-y-4">
        {documentCategories.map((category, index) => (
          <div key={index} className="flex items-center justify-between py-1">
            <span className="text-sm text-gray-600 font-medium">
              {category.type_name}
            </span>
            <span className="bg-gray-100 text-gray-700 text-sm font-medium px-2 py-1 rounded-full min-w-[24px] text-center">
              {category.count}
            </span>
          </div>
        ))}
        
        <div className="border-t border-gray-200 pt-4 mt-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              TOTAL DOCUMENTS
            </span>
            <span className="bg-gray-900 text-white text-sm font-bold px-3 py-1.5 rounded-full min-w-[32px] text-center">
              {totalDocuments}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}