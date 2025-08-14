import Link from "next/link"
import { ArrowLeft, Heart, Shield, AlertTriangle } from "lucide-react"

export default function RomanceScamsPage() {
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
            <div className="bg-pink-100 p-3 rounded-full mr-4">
              <Heart className="w-8 h-8 text-pink-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Romance Scams in South Africa</h1>
              <p className="text-gray-600 mt-2">How fraudsters use dating apps to steal money and hearts</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Emotional Cost of Romance Scams</h2>
              
              <p className="text-gray-700 mb-6">
                Romance scams are among the most emotionally devastating frauds in South Africa. Scammers create fake profiles on dating apps and social media, building relationships over weeks or months before asking for money. The emotional manipulation makes these scams particularly effective and damaging.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <h3 className="text-xl font-bold text-red-800 mb-3">Real Case Study: Cape Town Dating App Scam</h3>
                <p className="text-red-700">
                  A Cape Town woman lost R180,000 to a fake US soldier she met on a dating app. The scammer claimed to be deployed overseas and needed money for medical expenses and to return home. Over 6 months, he built an emotional connection before asking for increasingly large sums of money.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">How Romance Scams Work</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1 text-xl">1.</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fake Profile Creation</h4>
                    <p className="text-gray-700 text-sm">Scammers create attractive profiles using stolen photos and fake information</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1 text-xl">2.</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Relationship Building</h4>
                    <p className="text-gray-700 text-sm">They spend weeks building emotional connections and trust</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1 text-xl">3.</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Emergency Requests</h4>
                    <p className="text-gray-700 text-sm">They create fake emergencies requiring immediate financial help</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1 text-xl">4.</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Disappearance</h4>
                    <p className="text-gray-700 text-sm">Once they get enough money, they disappear completely</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Common Romance Scam Tactics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Military Personnel</h4>
                  <p className="text-yellow-700 text-sm">Fake soldiers deployed overseas needing money for expenses</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Business Travelers</h4>
                  <p className="text-yellow-700 text-sm">Executives stuck in foreign countries needing emergency funds</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Medical Emergencies</h4>
                  <p className="text-yellow-700 text-sm">Sudden health issues requiring immediate financial assistance</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Family Crises</h4>
                  <p className="text-yellow-700 text-sm">Sick relatives or children needing urgent financial help</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Red Flags to Watch For</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Refusing Video Calls:</strong> They always have excuses for not showing their face
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Asking for Money Early:</strong> Financial requests within the first few weeks
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Sob Stories:</strong> Constant emergencies requiring financial assistance
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Rush to Meet:</strong> Pushing to meet in person but always canceling
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Perfect Profiles:</strong> Too-good-to-be-true photos and life stories
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">How to Protect Yourself</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Never Send Money</h4>
                    <p className="text-gray-700 text-sm">No matter how convincing the story, never send money to someone you haven't met</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Insist on Video Calls</h4>
                    <p className="text-gray-700 text-sm">Real people will want to see and talk to you face-to-face</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Research Their Story</h4>
                    <p className="text-gray-700 text-sm">Look up details they share online to verify their claims</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Meet in Person</h4>
                    <p className="text-gray-700 text-sm">Arrange to meet in a public place before getting too involved</p>
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
                <p><strong>South African Police:</strong> 10111</p>
                <p><strong>Cybercrime:</strong> 0800 205 054</p>
                <p><strong>Dating App Support:</strong> Report fake profiles</p>
              </div>
            </div>

            <div className="bg-pink-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-pink-900 mb-3">💡 Pro Tip</h3>
              <p className="text-pink-800 text-sm">
                If someone you're dating online asks for money, it's almost always a scam. Trust your instincts and walk away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 