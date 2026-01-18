# Carify Health - AI-Powered Healthcare Solutions

🏥 Transform your healthcare operations with Carify.Health's AI agents. Handle 75% of calls, save 2+ hours daily per staff, and reduce no-shows to less than 5%.

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm (comes with Node.js)

### Launch the Application

#### Option 1: Using Launch Scripts (Recommended)

**For Development (macOS/Linux):**
```bash
./scripts/launch.sh
```

**For Development (Windows):**
```cmd
./scripts/launch.bat
```

**For Production (macOS/Linux):**
```bash
./scripts/launch-production.sh
```

#### Option 2: Manual Launch

**Development Mode:**
```bash
npm install
npm run dev
```

**Production Mode:**
```bash
npm install
npm run build
npm start
```

The application will be available at `http://localhost:5000`

## 🛠️ Fixed Issues

The following critical issues have been resolved:

### 1. Server Stability
- ✅ Fixed error handler that was crashing the server
- ✅ Replaced missing `nanoid` dependency with built-in `crypto.randomUUID`
- ✅ Added proper error logging without process termination

### 2. Component Error Handling
- ✅ Added error boundaries to lazy-loaded components
- ✅ Enhanced ParallaxSection with try-catch error handling
- ✅ Improved Vite error handling in development mode

### 3. Build Process
- ✅ Fixed TypeScript compilation issues
- ✅ Improved dependency management
- ✅ Added comprehensive launch scripts with error checking

## 📁 Project Structure

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
│       ├── types/         # TypeScript definitions
│       └── constants/     # Application constants
├── server/                # Backend Express server
│   ├── index.ts          # Main server file
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage layer
│   └── vite.ts           # Vite development setup
├── shared/               # Shared types and schemas
├── config/               # Configuration files
│   ├── drizzle.config.ts # Database configuration
│   ├── tailwind.config.ts # Styling configuration
│   └── components.json   # UI component configuration
├── scripts/              # Build and deployment scripts
│   ├── launch.sh         # Development launch (Unix)
│   ├── launch.bat        # Development launch (Windows)
│   └── launch-production.sh # Production launch
├── docs/                 # Documentation
│   ├── ARCHITECTURE.md   # System architecture
│   ├── API.md           # API documentation
│   └── CHANGELOG.md     # Version history
├── tests/                # Test files
├── public/               # Static assets
└── package.json
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema changes
- `npm run launch:dev` - Launch development environment
- `npm run launch:prod` - Launch production environment

## 🌟 Features

- **AI Insurance Coordinator (Jenny)** - Automated benefits verification
- **AI Care Manager (Ryan)** - Perioperative & preventive care management
- **Comprehensive Demo Booking** - Multi-step form with calendar scheduling
- **8 Healthcare Programs** - RPM, Health Monitoring, Remote Care, and more
- **24/7 Availability** - Works around the clock
- **HIPAA Compliant** - Built for healthcare security
- **Modern UI** - Responsive design with smooth animations
- **Error Boundaries** - Robust error handling
- **TypeScript** - Type-safe development
- **Video Integration** - Embedded demo videos
- **Interactive FAQs** - Comprehensive Q&A sections

## 🚨 Troubleshooting

### Common Issues

**1. Port Already in Use**
```bash
# Kill process using port 5000
lsof -ti:5000 | xargs kill -9
```

**2. Node Modules Issues**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**3. Build Errors**
```bash
# Check TypeScript errors
npm run check
```

### Error Recovery

The application now includes comprehensive error handling:
- Server errors are logged but don't crash the application
- Component errors are caught by error boundaries
- Failed lazy loads show fallback content
- Build errors are clearly reported

## 📞 Support

If you encounter any issues:

1. Check the console for error messages
2. Ensure all dependencies are installed: `npm install`
3. Verify Node.js version: `node --version` (should be 18+)
4. Try cleaning and reinstalling: `rm -rf node_modules && npm install`

## 🎯 Next Steps

1. Launch the application using `./launch.sh`
2. Open `http://localhost:5000` in your browser
3. Explore the AI-powered healthcare features
4. Book a demo to see Jenny in action

---

**Carify Health** - Transforming healthcare with AI-powered solutions.