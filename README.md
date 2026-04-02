# Learnova AI

A real-time AI-powered teaching platform that enables personalized learning through interactive AI companions.

##  Overview

Learnova AI is an innovative educational platform that leverages artificial intelligence to create personalized learning experiences. Users can interact with AI companions through voice conversations, build custom companions for specific subjects and topics, and track their learning progress through a comprehensive dashboard.

The platform is designed for students, educators, and lifelong learners who want adaptive, conversational learning experiences tailored to their needs.

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework

### UI & Design
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Lottie React** - Animation library
- **shadcn/ui** - Component system

### Backend & Infrastructure
- **Supabase** - Database and real-time features
- **Clerk** - Authentication and user management
- **Sentry** - Error monitoring and performance tracking

### AI & Voice
- **Vapi.ai** - Voice AI and conversation management
- **Daily.co** - Video calling capabilities

### Development Tools
- **ESLint** - Code linting
- **Turbopack** - Fast bundler (Next.js dev mode)

##  Features

### Core Learning Features
- **AI Companions**: Interactive AI tutors for various subjects (Math, Science, Language, History, Coding, etc.)
- **Voice Interactions**: Real-time voice conversations with companions using advanced speech recognition
- **Custom Companion Builder**: Create personalized learning companions with specific topics, voices, and teaching styles
- **Companion Library**: Browse and search through available companions with subject filtering

### User Experience
- **Personalized Dashboard**: Learning profile, session memory, and progress tracking
- **Session History**: View and continue past learning sessions
- **Smart Recommendations**: AI-powered learning path suggestions
- **Practice Mode**: Focused learning sessions with specific goals

### Account Management
- **User Authentication**: Secure login/signup with Clerk
- **Subscription Management**: Plan upgrades and feature access control
- **Profile Management**: User settings and learning journey tracking

### Advanced Features
- **Session Reports**: Detailed analytics of learning sessions
- **AI Notes**: Automated note-taking during conversations
- **Live Voice Sessions**: Real-time voice interactions
- **Bookmark System**: Save favorite companions for quick access

##  Installation & Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-lms/ai_lms_saas_app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with the following variables:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_token
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
SENTRY_DSN=your_sentry_dsn
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

##  Project Structure

```
ai_lms_saas_app/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── companions/        # Companion-related pages
│   ├── sessions/          # Session history page
│   ├── subscription/      # Subscription management
│   └── ...
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── dashboard/        # Dashboard-specific components
│   └── ...
├── lib/                  # Utility functions and integrations
│   ├── actions/          # Server actions
│   ├── supabase.ts       # Database client
│   ├── vapi.sdk.ts       # Voice AI client
│   └── ...
├── types/                # TypeScript type definitions
├── public/               # Static assets
└── ...
```

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Support

For support or questions, please contact the development team.</content>
<parameter name="filePath">C:\Users\hp\Desktop\ai-lms\ai_lms_saas_app\README.md
