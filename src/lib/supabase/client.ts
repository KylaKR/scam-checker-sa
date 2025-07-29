import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Database types
export type Scammer = {
  id: string
  identifiers: {
    phones: string[]
    emails: string[]
    aliases: string[]
    websites: string[]
  }
  categories: ScamCategory[]
  description: string | null
  first_report: string
  last_activity: string
  report_count: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export type VerifiedEntity = {
  id: string
  type: 'individual' | 'business'
  official_name: string
  contact_info: {
    phones: string[]
    emails: string[]
    websites: string[]
  }
  address: {
    street: string
    city: string
    province: string
    postal_code: string
  }
  verification_docs: string[]
  trust_score: number
  verification_status: 'pending' | 'verified' | 'rejected'
  verified_by: string | null
  verified_at: string | null
  created_at: string
  updated_at: string
}

export type Report = {
  id: string
  reporter_id: string | null
  scammer_id: string | null
  category: ScamCategory
  description: string
  evidence_files: string[]
  contact_info: {
    phones: string[]
    emails: string[]
  }
  amount_lost: number | null
  incident_date: string | null
  location: string | null
  is_verified: boolean
  verified_by: string | null
  verified_at: string | null
  status: 'pending' | 'verified' | 'rejected'
  created_at: string
  updated_at: string
}

export type UserProfile = {
  id: string
  full_name: string | null
  phone: string | null
  email: string | null
  role: 'user' | 'moderator' | 'admin'
  is_verified: boolean
  trust_score: number
  report_count: number
  created_at: string
  updated_at: string
}

export type ScamCategory = 
  | 'investment_scam'
  | 'romance_scam'
  | 'job_scam'
  | 'lottery_scam'
  | 'tech_support_scam'
  | 'phishing'
  | 'identity_theft'
  | 'fake_products'
  | 'rental_scam'
  | 'other'

export type EvidenceType = 
  | 'receipt'
  | 'contract'
  | 'id_document'
  | 'business_registration'
  | 'bank_statement'
  | 'utility_bill'
  | 'other' 