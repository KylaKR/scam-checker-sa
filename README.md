# ScamCheckerSA - South African Scam Intelligence Platform

A comprehensive platform for scam detection, trust verification, and community-driven security in South Africa.

## 🎯 Core Features

- **Scammer Registry**: Centralized database of known scammers with phone numbers, emails, and aliases
- **Trust Verification**: Business and individual verification with trust scoring (0-100)
- **Crowdsourced Reporting**: Community-driven scam reporting with evidence upload
- **Fuzzy Search**: Advanced multi-field search with intelligent matching
- **Admin Dashboard**: Moderation tools and verification management
- **Trust Badges**: Public verification badges for verified entities

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Backend**: Supabase (PostgreSQL + Storage)
- **Authentication**: NextAuth + Supabase Auth
- **Styling**: Tailwind CSS + ShadCN UI Components
- **AI Moderation**: OpenAI API for automatic content flagging
- **Database**: PostgreSQL with advanced JSONB queries

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- OpenAI API key (for moderation)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Create `.env.local` file:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# NextAuth
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# OpenAI (for moderation)
OPENAI_API_KEY=your_openai_api_key
```

### 3. Database Setup
Run the SQL scripts in `supabase/migrations/` to set up your database schema.

### 4. Start Development Server
```bash
npm run dev
```

## 🗄 Database Schema

### Core Tables
- `scammers`: Scammer registry with identifiers and categories
- `verified_entities`: Trusted businesses and individuals
- `trust_evidence`: Supporting documentation for verification
- `reports`: Crowdsourced scam reports
- `users`: User profiles and permissions

### Key Features
- JSONB fields for flexible data storage
- Array types for categories and identifiers
- Foreign key relationships with proper constraints
- Full-text search capabilities

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Protected dashboard routes
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── ui/               # ShadCN components
│   ├── forms/            # Form components
│   └── layout/           # Layout components
├── lib/                  # Utility functions
│   ├── supabase/         # Supabase client
│   ├── auth/             # Authentication utilities
│   └── utils/            # General utilities
├── types/                # TypeScript type definitions
└── hooks/                # Custom React hooks
```

## 🔧 Development Tasks

### Completed ✅
- [x] Next.js 14 project setup
- [x] Basic dependencies installed
- [x] Project structure created

### Next Steps 🚧
- [ ] Install remaining UI dependencies (Radix UI, ShadCN)
- [ ] Set up Supabase client and authentication
- [ ] Create database schema and migrations
- [ ] Build core components and pages
- [ ] Implement search functionality
- [ ] Add file upload and moderation features

## 🎨 UI Components Needed

- Search interface with fuzzy matching
- Report submission forms
- Verification portal
- Admin dashboard
- Trust badge display
- File upload components
- Toast notifications
- Modal dialogs

## 🔐 Security Features

- OpenAI content moderation
- File upload validation
- Rate limiting on reports
- Admin-only verification approval
- Secure file storage in Supabase

## 📊 Trust Scoring System

- **0-20**: High risk
- **21-40**: Medium risk  
- **41-60**: Low risk
- **61-80**: Trusted
- **81-100**: Verified

## 🤝 Contributing

This platform is designed for the South African community. All contributions should prioritize:
- Local relevance and context
- Accessibility for diverse users
- Mobile-first design
- Multilingual support (English/Afrikaans/Zulu)

## 📞 Support

For technical support or feature requests, please open an issue in the repository.

---

**Built for South Africa, by South Africans** 🇿🇦 