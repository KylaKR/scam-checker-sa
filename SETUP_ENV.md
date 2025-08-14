# Environment Setup Guide

## Quick Fix for Dynamic Counters

The dynamic counters are now working with demo data! To use real data from your Supabase database:

### 1. Create `.env.local` file
Create a file called `.env.local` in the `scam-checker-sa` directory with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 2. Get your Supabase credentials
1. Go to [supabase.com](https://supabase.com)
2. Create a new project or use existing one
3. Go to Settings → API
4. Copy the "Project URL" and "anon public" key
5. Paste them in your `.env.local` file

### 3. Set up your database
Run the migration in `supabase/migrations/001_initial_schema.sql` in your Supabase SQL editor.

### 4. Restart the server
```bash
npm run dev
```

## Current Status
✅ Dynamic counters are working with demo data  
✅ API endpoint is functional  
✅ Error handling is in place  
✅ Real-time updates will work once Supabase is configured

The counters will show realistic demo data until you configure your actual Supabase project. 