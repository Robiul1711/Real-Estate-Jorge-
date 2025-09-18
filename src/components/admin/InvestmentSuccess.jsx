import { Check, Calendar, Eye, Download, BarChart3, Shield, MessageCircle } from 'lucide-react';

export default function InvestmentSuccess() {
  const handleViewDashboard = () => {
    alert('Redirecting to dashboard...');
  };

  const handleViewProject = () => {
    alert('Opening project details...');
  };

  const handleDownloadReceipt = () => {
    alert('Downloading receipt...');
  };

  const handleContactSupport = () => {
    alert('Opening support chat...');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-custom-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Investment Successful!</h1>
          <p className="text-gray-600 mb-4">Your investment has been confirmed and processed successfully.</p>
          <div className="inline-flex items-center px-4 py-2 border bg-gray-100 rounded-full text-sm text-gray-700">
            <span>Confirmation: INV-058847</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Investment Details & What's Next */}
          <div className="lg:col-span-2 space-y-6">
            {/* Investment Details */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl">$</span>
                <h2 className="text-xl font-semibold text-gray-900">Investment Details</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">$50,000</div>
                  <div className="text-sm text-gray-500">Amount Invested</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">12-15%</div>
                  <div className="text-sm text-gray-500">Expected Annual Return</div>
                </div>
              </div>

              {/* Property Info */}
              <div className="border-t border-gray-100 pt-6">
                <div className="mb-4">
                  <div className="font-medium text-gray-900 mb-1">Luxury Residential Complex</div>
                  <div className="text-sm text-gray-500">Manhattan, NY</div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Investment Duration:</span>
                    <div className="font-medium text-gray-900">18 Months</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Confirmation Number:</span>
                    <div className="font-medium text-gray-900">INV-058847</div>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="text-gray-900" size={20} />
                <h2 className="text-xl font-semibold text-gray-900">What Happens Next?</h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-custom-primary text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                    1
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Investment Processing</div>
                    <div className="text-sm text-gray-600">Your investment will be processed within 24 hours. You'll receive an email confirmation.</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-custom-primary text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                    2
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Project Updates</div>
                    <div className="text-sm text-gray-600">You'll receive regular updates about the project progress and milestones.</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-custom-primary text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                    3
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Return Distributions</div>
                    <div className="text-sm text-gray-600">Returns will be distributed quarterly directly to your wallet.</div>
                  </div>
                </div>
              </div>
            </div>

 
          </div>

          {/* Right Column - Important Information & Contact */}
          <div className="space-y-6">
            {/* Important Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Information</h3>
              
              <div className="space-y-4">
                <div className="bg-custom-primary text-white p-4 rounded-lg">
                  <div className="font-medium mb-2">Cooling-Off Period</div>
                  <div className="text-sm text-gray-300">You have 14 days to cancel this investment if you change your mind.</div>
                </div>

                <div className="bg-custom-primary text-white p-4 rounded-lg">
                  <div className="font-medium mb-2">Investment Protection</div>
                  <div className="text-sm text-gray-300">Your investment is protected under EU investor protection regulations.</div>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Support</h3>
              
              <p className="text-gray-600 text-sm mb-4">
                Have questions about your investment? Our support team is here to help.
              </p>

              <button
                onClick={handleContactSupport}
                className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <MessageCircle size={16} />
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}