import Link from 'next/link'
import { Shield, Search, Users, Award, AlertTriangle, CheckCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-green-100 p-4 rounded-full">
                <Shield className="h-12 w-12 text-green-600" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              ScamChecker
              <span className="text-green-600">SA</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              South Africa's trusted platform for scam detection and business verification. 
              Protect yourself and help others stay safe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/search"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
              >
                <Search className="h-5 w-5" />
                Search Scammers
              </Link>
              
              <Link 
                href="/report"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
              >
                <AlertTriangle className="h-5 w-5" />
                Report Scam
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We Protect South Africans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform combines community reporting with advanced verification 
              to keep you safe from scams and fraud.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Smart Search
              </h3>
              <p className="text-gray-600">
                Search our database of known scammers using phone numbers, emails, 
                names, or any other identifiers with fuzzy matching.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Community Reports
              </h3>
              <p className="text-gray-600">
                Crowdsourced scam reporting with evidence upload. Help others by 
                sharing your experiences and evidence.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-6">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Trust Verification
              </h3>
              <p className="text-gray-600">
                Verified businesses and individuals with trust scoring and public 
                badges. Know who you can trust.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mb-6">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                AI Moderation
              </h3>
              <p className="text-gray-600">
                Advanced AI-powered content moderation to ensure accurate and 
                reliable information in our database.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-red-100 p-3 rounded-lg w-fit mb-6">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Real-time Alerts
              </h3>
              <p className="text-gray-600">
                Get instant notifications about new scams in your area and 
                stay updated on emerging threats.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="bg-indigo-100 p-3 rounded-lg w-fit mb-6">
                <AlertTriangle className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Scam Categories
              </h3>
              <p className="text-gray-600">
                Comprehensive categorization of scams including investment, 
                romance, job, and tech support scams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Impact in South Africa
            </h2>
            <p className="text-xl text-green-100">
              Join thousands of South Africans protecting each other
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-green-100">Scammers Identified</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50,000+</div>
              <div className="text-green-100">Reports Filed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">1,000+</div>
              <div className="text-green-100">Verified Entities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">R100M+</div>
              <div className="text-green-100">Fraud Prevented</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Protect Yourself and Others?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community of vigilant South Africans and help make our country safer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/auth/signup"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Started Free
            </Link>
            <Link 
              href="/about"
              className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ScamCheckerSA</h3>
              <p className="text-gray-300">
                Protecting South Africans from scams and fraud through community-driven intelligence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/search" className="hover:text-white">Search Scammers</Link></li>
                <li><Link href="/report" className="hover:text-white">Report Scam</Link></li>
                <li><Link href="/verify" className="hover:text-white">Verify Business</Link></li>
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/scam-types" className="hover:text-white">Scam Types</Link></li>
                <li><Link href="/safety-tips" className="hover:text-white">Safety Tips</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-gray-300 mb-4">
                Stay updated with the latest scam alerts and safety tips.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  {/* Twitter Icon */}
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  {/* Facebook Icon */}
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">WhatsApp</span>
                  {/* WhatsApp Icon */}
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 ScamCheckerSA. Built for South Africa, by South Africans. 🇿🇦</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 