# GH360 Hunting - HR Services Platform

A modern, scalable, and bilingual (Spanish/English) web platform for human resources services.

## Features

- 🌐 Bilingual support (Spanish/English)
- 📱 Fully responsive design with Tailwind CSS
- 🎨 Modern UI with smooth animations
- 📧 Contact form with email integration
- 💬 WhatsApp integration for instant communication
- ⚡ Fast and optimized with Astro
- 🏗️ Modular and scalable architecture
- 🔒 Type-safe with TypeScript

## Services Offered

- **Recruitment and Personnel Selection**: Complete hiring process
- **Confidence Tests**:
  - Socioeconomic Studies
  - Psychometric Tests
  - Polygraph Tests
- **Organizational Development Consulting**: Process optimization and workplace improvement

## Project Structure

```
/
├── public/               # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ServiceCard.astro
│   │   └── ContactForm.astro
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   ├── pages/           # Route pages
│   │   ├── index.astro  # Redirects to default language
│   │   ├── [lang]/      # Language-specific pages
│   │   └── api/         # API endpoints
│   ├── i18n/            # Internationalization
│   │   ├── index.ts     # Translations
│   │   └── utils.ts     # i18n utilities
│   ├── lib/             # Business logic
│   │   ├── services.ts
│   │   └── constants.ts
│   ├── types/           # TypeScript types
│   │   └── index.ts
│   └── styles/          # Global styles
│       └── global.css
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gh360-hunting-project
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

Edit `.env` and configure your email service and contact information.

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Building for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Email Configuration

To enable email functionality, you need to configure an email service in `src/pages/api/contact.ts`. Options include:

### Option 1: Resend (Recommended)

```bash
npm install resend
```

Add to `.env`:
```
RESEND_API_KEY=your_api_key
```

### Option 2: SendGrid

```bash
npm install @sendgrid/mail
```

Add to `.env`:
```
SENDGRID_API_KEY=your_api_key
```

### Option 3: Nodemailer (SMTP)

```bash
npm install nodemailer
```

Add to `.env`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

## Configuration

### Update Contact Information

Edit `src/lib/constants.ts`:

```typescript
export const CONTACT_EMAIL = 'your-email@example.com';
export const WHATSAPP_NUMBER = '1234567890'; // Include country code
export const COMPANY_NAME = 'Your Company Name';
```

### Customize Services

Edit `src/lib/services.ts` to add, remove, or modify services.

### Add Translations

Edit `src/i18n/index.ts` to add new translations or modify existing ones.

## Deployment

This project can be deployed to various platforms:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect your repository
- **Cloudflare Pages**: Connect your repository
- **AWS Amplify**: Connect your repository

## Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Language**: TypeScript
- **Runtime**: Node.js

## Best Practices Implemented

- ✅ Clean and modular architecture
- ✅ Type safety with TypeScript
- ✅ Responsive design
- ✅ SEO-friendly
- ✅ Performance optimized
- ✅ Accessibility considerations
- ✅ Internationalization (i18n)
- ✅ API routes for backend logic
- ✅ Environment variables for sensitive data

## License

Copyright © 2025 GH360 Hunting. All rights reserved.
