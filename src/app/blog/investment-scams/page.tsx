import Link from "next/link"
import { ArrowLeft, AlertTriangle, Shield, TrendingUp } from "lucide-react"

export default function InvestmentScamsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-100 p-3 rounded-full mr-4">
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Investment Scams in South Africa</h1>
              <p className="text-gray-600 mt-2">How to spot and avoid fake investment opportunities</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Rise of Investment Scams in South Africa</h2>
              
              <p className="text-gray-700 mb-6">
                Investment scams have become increasingly sophisticated in South Africa, targeting both experienced investors and newcomers to the financial markets. These scams often promise unrealistic returns and use high-pressure tactics to convince victims to part with their money.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <h3 className="text-xl font-bold text-red-800 mb-3">Real Case Study: Johannesburg Bitcoin Scam</h3>
                <p className="text-red-700">
                  In 2023, a Johannesburg businessman lost R250,000 to a fake cryptocurrency investment scheme. The scammers promised 300% returns in just 30 days and used fake testimonials and professional-looking websites to appear legitimate. The victim was pressured to invest quickly before the "opportunity" disappeared.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Common Investment Scam Types</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <div>
                    <strong>Cryptocurrency Scams:</strong> Fake Bitcoin or crypto investment platforms promising guaranteed returns
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <div>
                    <strong>Forex Trading Scams:</strong> Unlicensed forex brokers promising easy profits
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <div>
                    <strong>Ponzi Schemes:</strong> Using new investors' money to pay returns to earlier investors
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <div>
                    <strong>Property Investment Scams:</strong> Fake property developments or rental schemes
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Red Flags to Watch For</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">High Pressure Tactics</h4>
                  <p className="text-yellow-700 text-sm">Urgency to invest immediately, limited-time offers</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Guaranteed Returns</h4>
                  <p className="text-yellow-700 text-sm">Promises of consistent, high returns regardless of market conditions</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Unregistered Companies</h4>
                  <p className="text-yellow-700 text-sm">Investment companies not registered with FSCA</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Complex Investment Structures</h4>
                  <p className="text-yellow-700 text-sm">Overly complicated investment products that are hard to understand</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">How to Protect Yourself</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Verify FSCA Registration</h4>
                    <p className="text-gray-700 text-sm">Always check if the investment company is registered with the Financial Sector Conduct Authority</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Research Thoroughly</h4>
                    <p className="text-gray-700 text-sm">Look up the company online, read reviews, and check for complaints</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Be Skeptical of High Returns</h4>
                    <p className="text-gray-700 text-sm">If it sounds too good to be true, it probably is</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Don't Rush Decisions</h4>
                    <p className="text-gray-700 text-sm">Take time to think and consult with financial advisors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link 
                  href="/search" 
                  className="block w-full text-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Search for Scammers
                </Link>
                <Link 
                  href="/report" 
                  className="block w-full text-center px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Report a Scam
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Contacts</h3>
              <div className="space-y-2 text-sm">
                <p><strong>FSCA:</strong> 0800 110 443</p>
                <p><strong>South African Police:</strong> 10111</p>
                <p><strong>Cybercrime:</strong> 0800 205 054</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">💡 Pro Tip</h3>
              <p className="text-blue-800 text-sm">
                Before investing, always search our database to check if the company or individual has been reported as a scam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 