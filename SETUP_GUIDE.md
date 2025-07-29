# ScamCheckerSA Setup Guide

## 🚀 Quick Start for Development

### 1. Install Remaining Dependencies

```bash
# Install UI components and utilities
npm install @radix-ui/react-avatar @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-toast @radix-ui/react-tabs @radix-ui/react-label @radix-ui/react-select @radix-ui/react-textarea @radix-ui/react-progress lucide-react class-variance-authority clsx tailwind-merge

# Install form handling and validation
npm install react-hook-form @hookform/resolvers zod

# Install AI moderation
npm install openai
```

### 2. Environment Setup

1. Copy `env.example` to `.env.local`
2. Fill in your environment variables:
   - **Supabase**: Create a new project at https://supabase.com
   - **NextAuth**: Generate a secret with `openssl rand -base64 32`
   - **OpenAI**: Get API key from https://platform.openai.com

### 3. Database Setup

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Run the migration script from `supabase/migrations/001_initial_schema.sql`
4. This creates all tables, indexes, and security policies

### 4. Start Development

```bash
npm run dev
```

## 📁 Project Structure Overview

```
scam-checker-sa/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Authentication routes
│   │   ├── (dashboard)/       # Protected dashboard routes
│   │   ├── api/               # API routes
│   │   ├── search/            # Scammer search page
│   │   ├── report/            # Report submission page
│   │   ├── verify/            # Business verification page
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # ShadCN components
│   │   ├── forms/            # Form components
│   │   ├── search/           # Search components
│   │   └── layout/           # Layout components
│   ├── lib/                  # Utility functions
│   │   ├── supabase/         # Supabase client
│   │   ├── auth/             # Authentication utilities
│   │   ├── search/           # Search utilities
│   │   └── utils/            # General utilities
│   ├── types/                # TypeScript type definitions
│   └── hooks/                # Custom React hooks
├── supabase/
│   └── migrations/           # Database migrations
└── public/                   # Static assets
```

## 🔧 Next Development Steps

### Phase 1: Core Infrastructure ✅
- [x] Next.js 14 setup
- [x] Database schema
- [x] Supabase client
- [x] Landing page
- [ ] Authentication setup
- [ ] UI component library

### Phase 2: Search & Reporting 🚧
- [ ] Search interface with fuzzy matching
- [ ] Report submission form
- [ ] File upload functionality
- [ ] Search results display
- [ ] Report management

### Phase 3: Verification System
- [ ] Business verification portal
- [ ] Trust scoring algorithm
- [ ] Evidence upload system
- [ ] Admin verification dashboard
- [ ] Trust badge display

### Phase 4: Advanced Features
- [ ] AI content moderation
- [ ] Real-time notifications
- [ ] Mobile optimization
- [ ] Multilingual support
- [ ] Analytics dashboard

## 🎨 UI Components to Build

### Core Components
1. **SearchBar** - Fuzzy search with autocomplete
2. **ReportForm** - Multi-step scam reporting
3. **ScammerCard** - Display scammer information
4. **TrustBadge** - Verification status display
5. **FileUpload** - Evidence upload component
6. **AdminPanel** - Moderation dashboard

### Layout Components
1. **Header** - Navigation and user menu
2. **Footer** - Links and information
3. **Sidebar** - Dashboard navigation
4. **Breadcrumbs** - Page navigation

### Form Components
1. **SearchForm** - Advanced search filters
2. **ReportForm** - Scam report submission
3. **VerificationForm** - Business verification
4. **UserProfileForm** - Profile management

## 🔐 Security Implementation

### Authentication Flow
1. **NextAuth + Supabase** integration
2. **Role-based access control** (user/moderator/admin)
3. **Session management** with secure tokens
4. **Password reset** and email verification

### Data Protection
1. **Row Level Security** (RLS) policies
2. **Input validation** with Zod schemas
3. **File upload restrictions** and virus scanning
4. **Rate limiting** on API endpoints

### Content Moderation
1. **OpenAI API** for automatic flagging
2. **Manual review** queue for reports
3. **Evidence verification** system
4. **Appeal process** for rejected content

## 📊 Database Operations

### Search Functions
```sql
-- Fuzzy search for scammers
SELECT * FROM search_scammers('search_term');

-- Search by phone number
SELECT * FROM scammers WHERE identifiers->'phones' ? 'phone_number';

-- Search by email
SELECT * FROM scammers WHERE identifiers->'emails' ? 'email@domain.com';
```

### Report Management
```sql
-- Get recent reports
SELECT * FROM reports ORDER BY created_at DESC LIMIT 10;

-- Get reports by category
SELECT * FROM reports WHERE category = 'investment_scam';

-- Get verified reports
SELECT * FROM reports WHERE is_verified = true;
```

### Trust Scoring
```sql
-- Calculate trust score based on evidence
UPDATE verified_entities 
SET trust_score = (
  SELECT COUNT(*) * 10 
  FROM trust_evidence 
  WHERE entity_id = verified_entities.id AND is_verified = true
) WHERE id = 'entity_id';
```

## 🚀 Deployment Checklist

### Pre-deployment
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] SSL certificates installed
- [ ] Domain configured
- [ ] Analytics tracking setup

### Post-deployment
- [ ] Admin user created
- [ ] Email notifications tested
- [ ] File uploads working
- [ ] Search functionality verified
- [ ] Mobile responsiveness checked

## 🐛 Common Issues & Solutions

### Database Connection
```bash
# Check Supabase connection
npm run db:test

# Reset database (development only)
npm run db:reset
```

### Authentication Issues
```bash
# Clear NextAuth cache
rm -rf .next
npm run dev
```

### Build Errors
```bash
# Type checking
npm run type-check

# Linting
npm run lint
```

## 📞 Support Resources

- **Supabase Docs**: https://supabase.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Radix UI**: https://www.radix-ui.com/docs

## 🎯 South African Context

### Localization Features
- **Currency**: South African Rand (ZAR)
- **Phone Numbers**: +27 format
- **Provinces**: 9 South African provinces
- **Languages**: English, Afrikaans, Zulu support

### Scam Categories (Localized)
- **Investment Scams**: Cryptocurrency, forex trading
- **Rental Scams**: Property rental fraud
- **Job Scams**: Fake job offers
- **Lottery Scams**: SMS lottery scams
- **Tech Support**: Computer virus scams

### Legal Compliance
- **POPIA**: Protection of Personal Information Act
- **PAIA**: Promotion of Access to Information Act
- **Data Protection**: Secure handling of personal data
- **Reporting**: Integration with SAPS reporting system

---

**Ready to continue building? Start with Phase 2 and build the search functionality!** 🚀 