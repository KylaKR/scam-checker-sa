import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScamCheckerSA - South African Scam Intelligence Platform",
  description: "South Africa's trusted platform for scam intelligence and business verification. Search, report, and stay safe online.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
