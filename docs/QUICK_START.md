# Quick Start Guide - New Website Features

## 🚀 What's New

### 1. Enhanced Home Page
The home page now includes 7 major new sections with comprehensive content about Carify Health's services, philosophy, and capabilities.

### 2. Multi-Step Demo Booking
Instead of a simple modal, users now go through a comprehensive booking flow:
- **Step 1:** Fill detailed form at `/book-demo`
- **Step 2:** Schedule date/time at `/schedule-demo`
- **Step 3:** Confirmation and email notification

### 3. YouTube Video Integration
The hero section now features an embedded demo video instead of a static image.

## 📋 How to Use

### Booking a Demo (User Flow)

1. **Click "Book a Demo"** anywhere on the site
2. **Fill the form** with:
   - Personal information (name, email, phone, company)
   - Select programs of interest (multiple selections allowed)
   - Specify call volume (optional)
   - Add notes (optional)
3. **Click "Continue to Schedule Demo"**
4. **Select date and time** from the calendar
5. **Choose timezone**
6. **Click "Schedule Demo"** - This opens your email client with all details pre-filled
7. **Send the email** to complete the booking

### Navigation

- **Home:** `/` - Main landing page with all new sections
- **Book Demo:** `/book-demo` - Demo booking form
- **Schedule Demo:** `/schedule-demo` - Calendar scheduling (auto-redirects if accessed directly)
- **Why Carify:** `/why-carify` - Existing page
- **Use Cases:** `/use-cases` - Existing page
- **ROI Calculator:** `/roi-calculator` - Existing page

## 🎨 New Sections on Home Page

1. **The Founder's Perspective** - Philosophy and vision
2. **AI Inclusive Healthcare** - Value proposition for nursing staff
3. **Our Programs** - 8 program tiles with 1-month free trial offer
4. **The Carify Health Solution** - 4 key features
5. **Key Service Pillars** - 6 detailed service descriptions
6. **Why Carify Health** - 4 quantifiable outcomes
7. **FAQs** - 8 questions in 2 categories (expandable accordions)

## 🛠️ Development

### Running the Application

```bash
# Development mode
npm run dev

# Production build
npm run build
npm start

# Type checking
npm run check
```

### Key Files

```
client/src/
├── pages/
│   ├── home.tsx              # Updated with all new sections
│   ├── book-demo.tsx         # New: Demo booking form
│   └── schedule-demo.tsx     # New: Calendar scheduling
├── components/
│   ├── Header.tsx            # Updated: Navigation to book-demo
│   └── ui/
│       └── hero-section.tsx  # Updated: Video embed
└── App.tsx                   # Updated: New routes
```

## 📧 Email Integration

The demo booking uses a `mailto:` link that:
- Pre-fills the email to `demo@carify.health`
- Includes all form data in the body
- Contains selected date, time, and timezone
- Opens the user's default email client

**Note:** For production, consider implementing:
- Backend API for form submission
- Email service (SendGrid, AWS SES)
- Calendar API integration (Google Calendar, Calendly)
- CRM integration

## 🎯 Programs Offered

1. **RPM** - Remote Patient Monitoring
2. **Health Data Collection** - Comprehensive data gathering
3. **Health Monitoring Checkin** - Regular health check-ins
4. **Remote Patient Care** - Virtual care delivery
5. **Healthcare Marketing** - Patient engagement campaigns
6. **Post Discharge Workflows** - Post-discharge follow-up
7. **Pre-hospitalization Support** - Pre-admission preparation
8. **Health Device Monitoring** - Device integration & support

## 🔧 Customization

### Adding New Programs

Edit `/client/src/pages/book-demo.tsx`:

```typescript
const programs = [
  'RPM',
  'Health Data Collection',
  // Add your new program here
  'Your New Program'
];
```

### Modifying Time Slots

Edit `/client/src/pages/schedule-demo.tsx`:

```typescript
const timeSlots = [
  '09:00 AM', '09:30 AM',
  // Add or modify time slots
];
```

### Changing Email Recipient

Edit `/client/src/pages/schedule-demo.tsx`:

```typescript
const mailtoLink = `mailto:your-email@domain.com?subject=...`;
```

## 📱 Responsive Design

All new pages and sections are fully responsive:
- **Mobile:** Single column layout, stacked cards
- **Tablet:** 2-column grid for most sections
- **Desktop:** 3-4 column grid, full-width layouts

## ✨ Animations

All sections include:
- Fade-in on scroll
- Hover effects on cards and buttons
- Smooth transitions
- Parallax scrolling effects

## 🐛 Troubleshooting

### Form Data Not Persisting
- Check browser's sessionStorage
- Ensure JavaScript is enabled
- Try clearing cache and cookies

### Email Not Opening
- Ensure default email client is configured
- Check browser permissions
- Try a different browser

### Video Not Loading
- Check internet connection
- Verify YouTube URL is correct
- Check if YouTube is accessible in your region

## 📞 Support

For issues or questions:
- Email: demo@carify.health
- Check documentation in `/docs/WEBSITE_UPDATES.md`
- Review code comments in source files

---

**Happy Building! 🎉**
