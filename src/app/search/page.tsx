"use client";

import React, { useState } from "react";
import { Search, Phone, Mail, User, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

interface SearchResult {
  id: string;
  type: 'scam' | 'verified';
  name: string;
  identifiers: {
    phones: string[];
    emails: string[];
    aliases: string[];
  };
  description: string;
  reportCount?: number;
  trustScore?: number;
  status: string;
}

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState<"all" | "scams" | "verified">("all");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Mock search function - replace with actual Supabase call
  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    
    setIsSearching(true);
    setHasSearched(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock results
    const mockResults: SearchResult[] = [
      {
        id: "1",
        type: "scam",
        name: "John Smith",
        identifiers: {
          phones: ["+27 82 123 4567"],
          emails: ["john.smith@fake.com"],
          aliases: ["Johnny", "JS Trading"]
        },
        description: "Investment scam targeting elderly South Africans with fake cryptocurrency promises",
        reportCount: 15,
        status: "Active"
      },
      {
        id: "2",
        type: "verified",
        name: "Takealot",
        identifiers: {
          phones: ["+27 11 123 4567"],
          emails: ["support@takealot.com"],
          aliases: ["Takealot Online"]
        },
        description: "Legitimate South African e-commerce platform",
        trustScore: 95,
        status: "Verified"
      }
    ];
    
    setResults(mockResults);
    setIsSearching(false);
  };

  const getStatusIcon = (type: string, status: string) => {
    if (type === "scam") {
      return <AlertTriangle className="w-5 h-5 text-red-500" />;
    } else if (status === "Verified") {
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    } else {
      return <XCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (type: string, status: string) => {
    if (type === "scam") return "text-red-600 bg-red-50";
    if (status === "Verified") return "text-green-600 bg-green-50";
    return "text-gray-600 bg-gray-50";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Search ScamCheckerSA</h1>
          <p className="text-gray-600">Search for scammers or verify legitimate businesses</p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by phone number, email, name, or business..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <button
              onClick={handleSearch}
              disabled={isSearching || !searchTerm.trim()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {isSearching ? "Searching..." : "Search"}
            </button>
          </div>
          
          {/* Search Type Filter */}
          <div className="flex gap-2">
            <button
              onClick={() => setSearchType("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                searchType === "all" 
                  ? "bg-blue-100 text-blue-700" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All Results
            </button>
            <button
              onClick={() => setSearchType("scams")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                searchType === "scams" 
                  ? "bg-red-100 text-red-700" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Scams Only
            </button>
            <button
              onClick={() => setSearchType("verified")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                searchType === "verified" 
                  ? "bg-green-100 text-green-700" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Verified Only
            </button>
          </div>
        </div>

        {/* Results */}
        {hasSearched && (
          <div className="space-y-4">
            {isSearching ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Searching...</p>
              </div>
            ) : results.length > 0 ? (
              results.map((result) => (
                <div key={result.id} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(result.type, result.status)}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{result.name}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(result.type, result.status)}`}>
                          {result.type === "scam" ? "Scam Alert" : result.status}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      {result.type === "scam" && result.reportCount && (
                        <p className="text-sm text-red-600 font-medium">{result.reportCount} reports</p>
                      )}
                      {result.type === "verified" && result.trustScore && (
                        <p className="text-sm text-green-600 font-medium">Trust Score: {result.trustScore}%</p>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{result.description}</p>
                  
                  <div className="space-y-2">
                    {result.identifiers.phones.length > 0 && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>{result.identifiers.phones.join(", ")}</span>
                      </div>
                    )}
                    {result.identifiers.emails.length > 0 && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span>{result.identifiers.emails.join(", ")}</span>
                      </div>
                    )}
                    {result.identifiers.aliases.length > 0 && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User className="w-4 h-4" />
                        <span>Also known as: {result.identifiers.aliases.join(", ")}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <div className="text-gray-400 mb-4">
                  <Search className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600">Try searching with different terms or check the spelling</p>
              </div>
            )}
          </div>
        )}

        {/* Quick Search Tips */}
        {!hasSearched && (
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Search Tips</h3>
            <ul className="space-y-2 text-blue-800">
              <li>• Search by phone number (e.g., +27 82 123 4567)</li>
              <li>• Search by email address</li>
              <li>• Search by business name or individual name</li>
              <li>• Use partial matches for better results</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
} 