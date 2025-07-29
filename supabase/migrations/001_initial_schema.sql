-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Create custom types
CREATE TYPE scam_category AS ENUM (
  'investment_scam',
  'romance_scam', 
  'job_scam',
  'lottery_scam',
  'tech_support_scam',
  'phishing',
  'identity_theft',
  'fake_products',
  'rental_scam',
  'other'
);

CREATE TYPE entity_type AS ENUM (
  'individual',
  'business'
);

CREATE TYPE verification_status AS ENUM (
  'pending',
  'verified',
  'rejected'
);

CREATE TYPE evidence_type AS ENUM (
  'receipt',
  'contract',
  'id_document',
  'business_registration',
  'bank_statement',
  'utility_bill',
  'other'
);

-- SCAMMER REGISTRY
CREATE TABLE scammers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  identifiers JSONB NOT NULL DEFAULT '{"phones": [], "emails": [], "aliases": [], "websites": []}',
  categories scam_category[] DEFAULT '{}',
  description TEXT,
  first_report TIMESTAMPTZ DEFAULT NOW(),
  last_activity TIMESTAMPTZ DEFAULT NOW(),
  report_count INTEGER DEFAULT 1,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- VERIFIED ENTITIES (TRUSTED BUSINESSES/INDIVIDUALS)
CREATE TABLE verified_entities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type entity_type NOT NULL,
  official_name TEXT NOT NULL,
  contact_info JSONB DEFAULT '{"phones": [], "emails": [], "websites": []}',
  address JSONB DEFAULT '{"street": "", "city": "", "province": "", "postal_code": ""}',
  verification_docs TEXT[] DEFAULT '{}',
  trust_score INTEGER DEFAULT 50 CHECK (trust_score BETWEEN 0 AND 100),
  verification_status verification_status DEFAULT 'pending',
  verified_by UUID,
  verified_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- TRUST EVIDENCE (SUPPORTING DOCUMENTS)
CREATE TABLE trust_evidence (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  entity_id UUID REFERENCES verified_entities(id) ON DELETE CASCADE,
  evidence_type evidence_type NOT NULL,
  file_url TEXT,
  description TEXT,
  submitted_by UUID,
  is_verified BOOLEAN DEFAULT false,
  verified_by UUID,
  verified_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- SCAM REPORTS (CROWDSOURCED)
CREATE TABLE reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reporter_id UUID,
  scammer_id UUID REFERENCES scammers(id) ON DELETE CASCADE,
  category scam_category NOT NULL,
  description TEXT NOT NULL,
  evidence_files TEXT[] DEFAULT '{}',
  contact_info JSONB DEFAULT '{"phones": [], "emails": []}',
  amount_lost DECIMAL(10,2),
  incident_date DATE,
  location TEXT,
  is_verified BOOLEAN DEFAULT false,
  verified_by UUID,
  verified_at TIMESTAMPTZ,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'verified', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- USER PROFILES
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  phone TEXT,
  email TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'moderator', 'admin')),
  is_verified BOOLEAN DEFAULT false,
  trust_score INTEGER DEFAULT 50 CHECK (trust_score BETWEEN 0 AND 100),
  report_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- SEARCH INDEXES
CREATE INDEX idx_scammers_identifiers ON scammers USING GIN (identifiers);
CREATE INDEX idx_scammers_categories ON scammers USING GIN (categories);
CREATE INDEX idx_scammers_phones ON scammers USING GIN ((identifiers->'phones'));
CREATE INDEX idx_scammers_emails ON scammers USING GIN ((identifiers->'emails'));
CREATE INDEX idx_scammers_aliases ON scammers USING GIN ((identifiers->'aliases'));

CREATE INDEX idx_verified_entities_name ON verified_entities USING GIN (to_tsvector('english', official_name));
CREATE INDEX idx_verified_entities_contact ON verified_entities USING GIN (contact_info);
CREATE INDEX idx_verified_entities_status ON verified_entities (verification_status);

CREATE INDEX idx_reports_category ON reports (category);
CREATE INDEX idx_reports_status ON reports (status);
CREATE INDEX idx_reports_date ON reports (incident_date);

-- FULL TEXT SEARCH
CREATE INDEX idx_scammers_search ON scammers USING GIN (
  to_tsvector('english', 
    COALESCE(description, '') || ' ' || 
    COALESCE(identifiers->>'aliases', '') || ' ' ||
    COALESCE(identifiers->>'phones', '') || ' ' ||
    COALESCE(identifiers->>'emails', '')
  )
);

-- TRIGGERS FOR UPDATED_AT
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_scammers_updated_at BEFORE UPDATE ON scammers FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_verified_entities_updated_at BEFORE UPDATE ON verified_entities FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_reports_updated_at BEFORE UPDATE ON reports FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON user_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ROW LEVEL SECURITY (RLS)
ALTER TABLE scammers ENABLE ROW LEVEL SECURITY;
ALTER TABLE verified_entities ENABLE ROW LEVEL SECURITY;
ALTER TABLE trust_evidence ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- RLS POLICIES
-- Scammers: Read access for all, write for authenticated users
CREATE POLICY "Scammers are viewable by everyone" ON scammers FOR SELECT USING (true);
CREATE POLICY "Users can insert scammers" ON scammers FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Moderators can update scammers" ON scammers FOR UPDATE USING (auth.jwt() ->> 'role' IN ('moderator', 'admin'));

-- Verified entities: Read access for all, write for authenticated users
CREATE POLICY "Verified entities are viewable by everyone" ON verified_entities FOR SELECT USING (true);
CREATE POLICY "Users can insert verified entities" ON verified_entities FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Moderators can update verified entities" ON verified_entities FOR UPDATE USING (auth.jwt() ->> 'role' IN ('moderator', 'admin'));

-- Reports: Read access for all, write for authenticated users
CREATE POLICY "Reports are viewable by everyone" ON reports FOR SELECT USING (true);
CREATE POLICY "Users can insert reports" ON reports FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Moderators can update reports" ON reports FOR UPDATE USING (auth.jwt() ->> 'role' IN ('moderator', 'admin'));

-- User profiles: Users can read/update their own profile
CREATE POLICY "Users can view own profile" ON user_profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON user_profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON user_profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Trust evidence: Read access for all, write for authenticated users
CREATE POLICY "Trust evidence is viewable by everyone" ON trust_evidence FOR SELECT USING (true);
CREATE POLICY "Users can insert trust evidence" ON trust_evidence FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Moderators can update trust evidence" ON trust_evidence FOR UPDATE USING (auth.jwt() ->> 'role' IN ('moderator', 'admin'));

-- FUNCTIONS FOR SEARCH
CREATE OR REPLACE FUNCTION search_scammers(search_term TEXT)
RETURNS TABLE (
  id UUID,
  identifiers JSONB,
  categories scam_category[],
  description TEXT,
  report_count INTEGER,
  similarity REAL
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    s.id,
    s.identifiers,
    s.categories,
    s.description,
    s.report_count,
    GREATEST(
      similarity(search_term, s.description),
      similarity(search_term, s.identifiers->>'aliases'),
      similarity(search_term, s.identifiers->>'phones'),
      similarity(search_term, s.identifiers->>'emails')
    ) as similarity
  FROM scammers s
  WHERE 
    s.is_active = true AND (
      search_term % s.description OR
      search_term % (s.identifiers->>'aliases') OR
      search_term % (s.identifiers->>'phones') OR
      search_term % (s.identifiers->>'emails') OR
      to_tsvector('english', COALESCE(s.description, '') || ' ' || COALESCE(s.identifiers->>'aliases', '') || ' ' || COALESCE(s.identifiers->>'phones', '') || ' ' || COALESCE(s.identifiers->>'emails', '')) @@ plainto_tsquery('english', search_term)
    )
  ORDER BY similarity DESC, s.report_count DESC;
END;
$$ LANGUAGE plpgsql; 