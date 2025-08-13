# Finance Platform

A modern personal finance web app built with Next.js App Router. Track accounts and transactions, set budgets, process recurring transactions, and receive email notifications.

## Features

- __Authentication__: Clerk-powered auth with protected routes (`/dashboard`, `/account`, `/transaction`).
- __Accounts & Transactions__: Create accounts, add income/expense transactions, upload receipts, categorize spending.
- __Budgets__: Set a monthly budget and receive alerts when thresholds are crossed.
- __Recurring Transactions__: Automatically process recurring items via background jobs (Inngest).
- __Reports & Charts__: Visualizations with Recharts and utilities via date-fns.
- __Email Notifications__: Sent with Resend.
- __Bot/Abuse Protection__: Arcjet middleware for bot detection and shielding.

## Tech Stack

- __Framework__: Next.js 14 (App Router, Server Actions)
- __UI__: React 18, Tailwind CSS, Radix UI, lucide-react, sonner
- __Auth__: Clerk (`@clerk/nextjs`)
- __DB/ORM__: PostgreSQL + Prisma
- __Jobs__: Inngest (served via `app/api/inngest/route.js`)
- __Security__: Arcjet (`middleware.js`)
- __Email__: Resend

## Prerequisites

- Node.js 18.17+ (LTS recommended)
- PostgreSQL
- npm or pnpm

## Quick Start

1) Install dependencies
```bash
npm install
```

2) Create .env
```bash
# Database
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB_NAME?schema=public"
DIRECT_URL="postgresql://USER:PASSWORD@HOST:PORT/DB_NAME?schema=public"

# Clerk (Authentication)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_xxx"
CLERK_SECRET_KEY="sk_test_xxx"

# Arcjet (Bot & Shield)
ARCJET_KEY="aj_live_or_test_key"

# Resend (Emails)
RESEND_API_KEY="re_xxx"
```

3) Prisma generate & migrate
```bash
npx prisma generate
npx prisma migrate dev --name init