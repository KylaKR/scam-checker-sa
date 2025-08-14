'use client'

import { useState } from 'react'
import { Upload, FileText, AlertCircle, CheckCircle } from 'lucide-react'

export default function ImportPage() {
  const [data, setData] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleImport = async () => {
    if (!data.trim() || !apiKey.trim()) {
      alert('Please provide both data and API key')
      return
    }

    setLoading(true)
    try {
      let scammers
      try {
        scammers = JSON.parse(data)
      } catch (e) {
        alert('Invalid JSON format')
        setLoading(false)
        return
      }

      const response = await fetch('/api/admin/bulk-import', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          scammers,
          apiKey
        })
      })

      const result = await response.json()
      setResult(result)
    } catch (error) {
      setResult({ error: 'Import failed: ' + error.message })
    } finally {
      setLoading(false)
    }
  }

  const exampleData = [
    {
      identifiers: {
        phones: ["+27821234567"],
        emails: ["scammer@fake.com"],
        aliases: ["John Smith"],
        websites: ["fakeinvestment.com"]
      },
      categories: ["investment_scam"],
      description: "Fake Bitcoin investment scheme promising 300% returns. Victim lost R50,000 in Johannesburg.",
      contact_info: {
        phones: ["+27821234567"],
        emails: ["scammer@fake.com"]
      },
      amount_lost: 50000,
      incident_date: "2024-01-15",
      location: "Johannesburg, Gauteng"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Import Scammer Data</h1>
          
          <div className="space-y-6">
            {/* API Key */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admin API Key
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your admin API key"
              />
            </div>

            {/* Data Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Scammer Data (JSON format)
              </label>
              <textarea
                value={data}
                onChange={(e) => setData(e.target.value)}
                rows={15}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                placeholder="Paste your JSON data here..."
              />
            </div>

            {/* Example Data */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">Example Format:</h3>
              <pre className="text-xs text-blue-800 overflow-x-auto">
                {JSON.stringify(exampleData, null, 2)}
              </pre>
            </div>

            {/* Import Button */}
            <button
              onClick={handleImport}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Importing...
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5 mr-2" />
                  Import Data
                </>
              )}
            </button>

            {/* Results */}
            {result && (
              <div className={`p-4 rounded-lg ${
                result.error ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'
              }`}>
                <div className="flex items-center mb-2">
                  {result.error ? (
                    <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  )}
                  <h3 className="font-semibold">
                    {result.error ? 'Import Failed' : 'Import Successful'}
                  </h3>
                </div>
                <pre className="text-sm overflow-x-auto">
                  {JSON.stringify(result, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 