import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'

interface ScammerData {
  identifiers: {
    phones: string[]
    emails: string[]
    aliases: string[]
    websites: string[]
  }
  categories: string[]
  description: string
  contact_info?: {
    phones: string[]
    emails: string[]
  }
  amount_lost?: number
  incident_date?: string
  location?: string
}

export async function POST(request: NextRequest) {
  try {
    // Check for admin authorization (you can add your own auth logic)
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { scammers, apiKey } = body

    // Simple API key validation (replace with your own key)
    if (apiKey !== process.env.ADMIN_API_KEY) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 401 })
    }

    if (!Array.isArray(scammers)) {
      return NextResponse.json({ error: 'Invalid data format' }, { status: 400 })
    }

    const results = []
    const errors = []

    for (const scammerData of scammers) {
      try {
        // Validate required fields
        if (!scammerData.identifiers || !scammerData.description) {
          errors.push({ data: scammerData, error: 'Missing required fields' })
          continue
        }

        // Check if scammer already exists
        const existingScammer = await supabase
          .from('scammers')
          .select('id')
          .eq('identifiers->phones', scammerData.identifiers.phones)
          .single()

        if (existingScammer.data) {
          // Update existing scammer
          const { data, error } = await supabase
            .from('scammers')
            .update({
              report_count: existingScammer.data.report_count + 1,
              last_activity: new Date().toISOString(),
              description: existingScammer.data.description + '\n\n' + scammerData.description
            })
            .eq('id', existingScammer.data.id)

          if (error) {
            errors.push({ data: scammerData, error: error.message })
          } else {
            results.push({ id: existingScammer.data.id, action: 'updated' })
          }
        } else {
          // Create new scammer
          const { data, error } = await supabase
            .from('scammers')
            .insert({
              identifiers: scammerData.identifiers,
              categories: scammerData.categories || [],
              description: scammerData.description,
              report_count: 1
            })
            .select()

          if (error) {
            errors.push({ data: scammerData, error: error.message })
          } else {
            results.push({ id: data[0].id, action: 'created' })
          }
        }

        // Create report entry if additional data provided
        if (scammerData.contact_info || scammerData.amount_lost) {
          await supabase
            .from('reports')
            .insert({
              scammer_id: existingScammer.data?.id || results[results.length - 1].id,
              category: scammerData.categories?.[0] || 'other',
              description: scammerData.description,
              contact_info: scammerData.contact_info || {},
              amount_lost: scammerData.amount_lost,
              incident_date: scammerData.incident_date,
              location: scammerData.location,
              status: 'verified'
            })
        }

      } catch (error) {
        errors.push({ data: scammerData, error: error.message })
      }
    }

    return NextResponse.json({
      success: true,
      imported: results.length,
      errors: errors.length,
      results,
      errors: errors.slice(0, 10) // Limit error details
    })

  } catch (error) {
    console.error('Bulk import error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 