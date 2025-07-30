import Link from "next/link";
import { Search, AlertTriangle, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              <span className="text-blue-600">ScamChecker</span>
              <span className="text-green-600">SA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              South Africa&apos;s trusted platform for scam intelligence and business verification. 
              Search, report, and stay safe online.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/search" 
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Search Scams
              </Link>
              <Link 
                href="/report" 
                className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold shadow-lg hover:bg-blue-50 transition flex items-center justify-center gap-2"
              >
                <AlertTriangle className="w-5 h-5" />
                Report a Scam
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How ScamCheckerSA Protects You</h2>
            <p className="text-lg text-gray-600">Comprehensive tools to keep South Africans safe online</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Search</h3>
              <p className="text-gray-600">
                Search our database of known scammers and verified businesses by phone, email, or name
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Report Scams</h3>
              <p className="text-gray-600">
                Report suspicious activity and help protect others from falling victim to scams
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Verify Businesses</h3>
              <p className="text-gray-600">
                Verify legitimate businesses and individuals to ensure safe transactions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1,000+</div>
              <div className="text-gray-600">Scammers Reported</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Businesses Verified</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">R2M+</div>
              <div className="text-gray-600">Losses Prevented</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">Users Protected</div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Scams Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Scams in South Africa</h2>
            <p className="text-lg text-gray-600">Stay informed about the latest scam tactics</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Investment Scams",
                description: "Fake cryptocurrency and investment opportunities targeting South Africans",
                color: "bg-yellow-100 text-yellow-800"
              },
              {
                title: "Romance Scams",
                description: "Online dating scams where fraudsters build fake relationships",
                color: "bg-pink-100 text-pink-800"
              },
              {
                title: "Job Scams",
                description: "Fake job offers requiring upfront payments or personal information",
                color: "bg-blue-100 text-blue-800"
              },
              {
                title: "Tech Support Scams",
                description: "Fake technical support calls claiming computer problems",
                color: "bg-purple-100 text-purple-800"
              },
              {
                title: "Lottery Scams",
                description: "Fake lottery wins requiring payment of fees to claim prizes",
                color: "bg-green-100 text-green-800"
              },
              {
                title: "Rental Scams",
                description: "Fake rental properties with deposits paid to scammers",
                color: "bg-red-100 text-red-800"
              }
            ].map((scam, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${scam.color}`}>
                  {scam.title}
                </div>
                <p className="text-gray-700">{scam.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Help Keep South Africa Safe
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of South Africans who are already protecting their communities
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              href="/search" 
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition"
            >
              Start Searching
            </Link>
            <Link 
              href="/report" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Report a Scam
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ScamCheckerSA</h3>
              <p className="text-gray-400">
                Protecting South Africans from online scams and fraud through community-driven intelligence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/search" className="hover:text-white transition">Search Scams</Link></li>
                <li><Link href="/report" className="hover:text-white transition">Report a Scam</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Scam Prevention Tips</a></li>
                <li><a href="#" className="hover:text-white transition">Safety Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition">Emergency Contacts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@scamcheckersa.co.za</li>
                <li>Emergency: 10111</li>
                <li>Cybercrime: 0800 205 054</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ScamCheckerSA. All rights reserved. Made for South Africans, by South Africans.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
