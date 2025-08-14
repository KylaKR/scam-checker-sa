'use client'

import { useState } from 'react'
import { FileText, Download, Upload } from 'lucide-react'

export default function CSVConverterPage() {
  const [csvData, setCsvData] = useState('')
  const [jsonOutput, setJsonOutput] = useState('')

  const convertCSVToJSON = () => {
    if (!csvData.trim()) {
      alert('Please paste CSV data first')
      return
    }

    try {
      const lines = csvData.trim().split('\n')
      const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''))
      
      const jsonData = lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim().replace(/"/g, ''))
        const row: any = {}
        
        headers.forEach((header, index) => {
          const value = values[index] || ''
          
          switch (header.toLowerCase()) {
            case 'phone':
            case 'phones':
              row.phones = value ? [value] : []
              break
            case 'email':
            case 'emails':
              row.emails = value ? [value] : []
              break
            case 'name':
            case 'alias':
            case 'aliases':
              row.aliases = value ? [value] : []
              break
            case 'website':
            case 'websites':
              row.websites = value ? [value] : []
              break
            case 'category':
            case 'categories':
              row.categories = value ? [value.split('|')] : []
              break
            case 'description':
            case 'details':
              row.description = value
              break
            case 'amount':
            case 'amount_lost':
              row.amount_lost = parseFloat(value) || 0
              break
            case 'date':
            case 'incident_date':
              row.incident_date = value
              break
            case 'location':
            case 'city':
              row.location = value
              break
            default:
              row[header] = value
          }
        })

        // Format for database
        return {
          identifiers: {
            phones: row.phones || [],
            emails: row.emails || [],
            aliases: row.aliases || [],
            websites: row.websites || []
          },
          categories: row.categories || ['other'],
          description: row.description || 'No description provided',
          contact_info: {
            phones: row.phones || [],
            emails: row.emails || []
          },
          amount_lost: row.amount_lost,
          incident_date: row.incident_date,
          location: row.location
        }
      })

      setJsonOutput(JSON.stringify(jsonData, null, 2))
    } catch (error) {
      alert('Error converting CSV: ' + error.message)
    }
  }

  const exampleCSV = `phone,email,name,category,description,amount,date,location
+27821234567,scammer@fake.com,John Smith,investment_scam,Fake Bitcoin investment scheme,50000,2024-01-15,Johannesburg
+27829876543,fraud@scam.com,Jane Doe,romance_scam,Dating app scam,25000,2024-02-20,Cape Town`

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">CSV to JSON Converter</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CSV Input */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Paste CSV Data</h2>
              <textarea
                value={csvData}
                onChange={(e) => setCsvData(e.target.value)}
                rows={15}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                placeholder="Paste your CSV data here..."
              />
              
              <div className="mt-4 space-y-2">
                <button
                  onClick={convertCSVToJSON}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Convert to JSON
                </button>
                
                <button
                  onClick={() => setCsvData(exampleCSV)}
                  className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-700"
                >
                  Load Example CSV
                </button>
              </div>
            </div>

            {/* JSON Output */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">JSON Output</h2>
              <textarea
                value={jsonOutput}
                onChange={(e) => setJsonOutput(e.target.value)}
                rows={15}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                placeholder="Converted JSON will appear here..."
                readOnly
              />
              
              <div className="mt-4">
                <button
                  onClick={() => navigator.clipboard.writeText(jsonOutput)}
                  disabled={!jsonOutput}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Copy JSON
                </button>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">How to Use:</h3>
            <ol className="text-blue-800 space-y-2 text-sm">
              <li>1. <strong>Format your CSV</strong> with headers: phone, email, name, category, description, amount, date, location</li>
              <li>2. <strong>Paste CSV data</strong> in the left textarea</li>
              <li>3. <strong>Click "Convert to JSON"</strong> to format for database import</li>
              <li>4. <strong>Copy the JSON</strong> and use it in the import tool</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
} 