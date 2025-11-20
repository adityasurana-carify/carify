# Carify Health - System Architecture

## Overview

Carify Health is a full-stack web application built with modern technologies to provide AI-powered healthcare solutions. The application follows a monorepo structure with clear separation of concerns.

## Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Wouter** - Lightweight routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **TypeScript** - Type-safe server development
- **Drizzle ORM** - Type-safe database operations

### Development Tools
- **ESBuild** - Fast JavaScript bundler
- **TSX** - TypeScript execution environment
- **Drizzle Kit** - Database migration tool

## Project Structure

```
carify/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   └── src/
│       ├── components/    # Reusable UI components
│       ├── pages/         # Application pages
│       ├── hooks/         # Custom React hooks
│       ├── utils/         # Utility functions
│       ├── services/      # API service layer
│       ├── types/         # TypeScript type definitions
│       └── constants/     # Application constants
├── server/                # Backend Express server
│   ├── index.ts          # Main server entry point
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Data storage layer
│   └── vite.ts           # Vite development setup
├── shared/               # Shared types and schemas
├── config/               # Configuration files
├── scripts/              # Build and deployment scripts
├── docs/                 # Documentation
├── tests/                # Test files
└── public/               # Static assets
```

## Data Flow

1. **Client Requests** - React components make API calls through service layer
2. **API Routes** - Express routes handle requests and business logic
3. **Data Layer** - Drizzle ORM manages database operations
4. **Response** - JSON responses sent back to client
5. **State Management** - React Query handles client-side caching and state

## Security Considerations

- HIPAA compliance for healthcare data
- Secure session management
- Input validation and sanitization
- CORS configuration
- Environment variable protection

## Deployment Architecture

- **Development** - Vite dev server with hot reload
- **Production** - Static build served by Express
- **Database** - PostgreSQL with connection pooling
- **Assets** - Static file serving with proper caching headers

## Performance Optimizations

- Code splitting with React.lazy
- Image optimization
- Bundle size optimization
- Database query optimization
- Caching strategies