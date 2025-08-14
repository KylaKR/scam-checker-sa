import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Check if Supabase is properly configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your_supabase_project_url')) {
      // Return mock data if Supabase is not configured
      return NextResponse.json({
        scammerCount: 1247,
        verifiedSellerCount: 583,
        totalReports: 2847,
        totalUsers: 12456,
        timestamp: new Date().toISOString(),
        note: 'Using demo data - configure Supabase for real data'
      })
    }

    // Import Supabase client only if properly configured
    const { supabase } = await import('@/lib/supabase/client')
    
    // Fetch all counters in parallel for better performance
    const [
      { count: scammerCount },
      { count: verifiedSellerCount },
      { count: totalReports },
      { count: totalUsers }
    ] = await Promise.all([
      supabase.from('scammers').select('*', { count: 'exact', head: true }),
      supabase.from('verified_entities').select('*', { count: 'exact', head: true }).eq('verification_status', 'verified'),
      supabase.from('reports').select('*', { count: 'exact', head: true }),
      supabase.from('user_profiles').select('*', { count: 'exact', head: true })
    ])

    return NextResponse.json({
      scammerCount: scammerCount || 0,
      verifiedSellerCount: verifiedSellerCount || 0,
      totalReports: totalReports || 0,
      totalUsers: totalUsers || 0,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error fetching counters:', error)
    return NextResponse.json(
      { 
        error: 'Failed to fetch counters',
        scammerCount: 1247,
        verifiedSellerCount: 583,
        totalReports: 2847,
        totalUsers: 12456,
        timestamp: new Date().toISOString(),
        note: 'Using fallback data due to error'
      },
      { status: 500 }
    )
  }
} 