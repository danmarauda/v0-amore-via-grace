# Amore Via Grace - Handcrafted Jewelry Website

A beautiful, modern e-commerce website for Grace's handcrafted jewelry business, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, minimalist design with sage green and white color palette
- 📱 Fully responsive design
- 🌙 Dark/light mode with multiple color themes
- 🛒 Shopping cart functionality
- 📸 Live Instagram feed integration
- ✨ Smooth animations and transitions
- 🎯 Custom jewelry ordering system
- 💳 Ready for payment integration

## Instagram Integration

The website includes a live Instagram feed that displays Grace's latest posts from [@amore_via_grace](https://www.instagram.com/amore_via_grace/). To set this up:

### 1. Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/apps/)
2. Create a new app and select "Consumer" as the app type
3. Add the Instagram Basic Display product to your app

### 2. Configure Instagram Basic Display

1. In your Facebook app dashboard, go to Instagram Basic Display
2. Create a new Instagram App ID
3. Add the @amore_via_grace Instagram account as a test user
4. Generate an access token for the @amore_via_grace account

### 3. Set Environment Variables

Create a `.env.local` file in your project root:

\`\`\`env
INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token_here
INSTAGRAM_USER_ID=your_instagram_user_id_here
\`\`\`

Note: The Instagram User ID should correspond to the @amore_via_grace account.

## Getting Started

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Set up environment variables (see `.env.example`)
4. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

The site is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Add your environment variables in the Vercel dashboard
3. Deploy!

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Instagram API**: Instagram Basic Display API

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
├── components/            # Reusable UI components
├── lib/                   # Utility functions and API integrations
├── public/               # Static assets
├── hooks/                # Custom React hooks
└── types/                # TypeScript type definitions
\`\`\`

## Contributing

This is a private project for Amore Via Grace. For any questions or support, please contact the development team.

## License

Private - All rights reserved by Amore Via Grace.
