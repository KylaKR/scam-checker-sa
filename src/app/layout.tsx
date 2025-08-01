import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScamCheckerSA | Instantly Verify Scam Sellers & Numbers in South Africa",
  description: "South Africa scam check - Verify seller South Africa. Is this number a scam SA? Search our database to instantly verify sellers, phone numbers, and protect yourself from fraud.",
  keywords: "South Africa scam check, verify seller South Africa, is this number a scam SA, scam verification, fraud protection, South African scams, phone number verification, seller verification",
  openGraph: {
    title: "ScamCheckerSA | Instantly Verify Scam Sellers & Numbers in South Africa",
    description: "South Africa scam check - Verify seller South Africa. Is this number a scam SA? Search our database to instantly verify sellers, phone numbers, and protect yourself from fraud.",
    type: "website",
    locale: "en_ZA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ScamCheckerSA",
              "alternateName": "South Africa Scam Check",
              "description": "South Africa scam check - Verify seller South Africa. Is this number a scam SA? Search our database to instantly verify sellers, phone numbers, and protect yourself from fraud.",
              "url": "https://scamcheckersa.co.za",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://scamcheckersa.co.za/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "sameAs": [
                "https://scamcheckersa.co.za/search",
                "https://scamcheckersa.co.za/report",
                "https://scamcheckersa.co.za/about"
              ]
            })
          }}
        />
      </head>
      <body className="bg-gray-50 min-h-screen font-sans">
        <nav className="bg-white shadow mb-8">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <span className="text-xl font-bold tracking-tight text-blue-700">ScamCheckerSA</span>
            <div className="space-x-4">
              <Link href="/" className="text-gray-700 hover:text-blue-700 font-medium">Home</Link>
              <Link href="/search" className="text-gray-700 hover:text-blue-700 font-medium">Search</Link>
              <Link href="/report" className="text-gray-700 hover:text-blue-700 font-medium">Report</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-700 font-medium">About</Link>
            </div>
          </div>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
