# Client Source Code Organization

This directory contains the frontend React application source code.

## Directory Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # Base UI components (buttons, cards, etc.)
│   ├── *.tsx          # Feature-specific components
├── pages/             # Application pages/routes
├── hooks/             # Custom React hooks
├── utils/             # Utility functions and helpers
├── services/          # API service layer
├── types/             # TypeScript type definitions
├── constants/         # Application constants
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## Component Organization

### UI Components (`components/ui/`)
Base components built on Radix UI primitives:
- Form controls (Button, Input, Select, etc.)
- Layout components (Card, Dialog, Sheet, etc.)
- Navigation components (Menu, Tabs, etc.)
- Feedback components (Toast, Alert, etc.)

### Feature Components (`components/`)
Business logic components:
- `AIWorkflow.tsx` - AI workflow demonstration
- `CarifyFeatures.tsx` - Feature showcase
- `HeroSection.tsx` - Landing page hero
- `Testimonials.tsx` - Customer testimonials
- And more...

## Styling

- **Tailwind CSS** for utility-first styling
- **CSS Variables** for theme customization
- **Framer Motion** for animations
- **Responsive Design** with mobile-first approach

## State Management

- **React Query** for server state management
- **React Hooks** for local component state
- **Context API** for global application state

## Type Safety

All components are written in TypeScript with:
- Proper prop type definitions
- Generic type support where applicable
- Strict type checking enabled