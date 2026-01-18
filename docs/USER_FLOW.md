# User Flow Diagram - Demo Booking Process

## Complete User Journey

```
┌─────────────────────────────────────────────────────────────────┐
│                         HOME PAGE (/)                            │
│                                                                  │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Hero Section                                           │    │
│  │  • YouTube Video Embed                                  │    │
│  │  • "Book Free Demo" Button ──────────────┐            │    │
│  │  • "Watch Video" Button                   │            │    │
│  └────────────────────────────────────────────────────────┘    │
│                                              │                   │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  The Founder's Perspective                              │    │
│  │  • Core philosophy and vision                           │    │
│  └────────────────────────────────────────────────────────┘    │
│                                              │                   │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  AI Inclusive Healthcare                                │    │
│  │  • 40% care effort savings                              │    │
│  └────────────────────────────────────────────────────────┘    │
│                                              │                   │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Our Programs (8 tiles)                                 │    │
│  │  • RPM, Health Data, Monitoring, etc.                   │    │
│  │  • 1 month free trial                                   │    │
│  └────────────────────────────────────────────────────────┘    │
│                                              │                   │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  The Carify Health Solution                             │    │
│  │  • 4 key features                                       │    │
│  └────────────────────────────────────────────────────────┘    │
│                                              │                   │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Key Service Pillars                                    │    │
│  │  • 6 detailed service descriptions                      │    │
│  └────────────────────────────────────────────────────────┘    │
│                                              │                   │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Why Carify Health                                      │    │
│  │  • 4 quantifiable outcomes                              │    │
│  └────────────────────────────────────────────────────────┘    │
│                                              │                   │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  FAQs (8 questions)                                     │    │
│  │  • Operational & Clinical sections                      │    │
│  └────────────────────────────────────────────────────────┘    │
│                                              │                   │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  CTA Section                                            │    │
│  │  • "Book Your Free Demo" Button ─────────┐            │    │
│  └────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────│──────────────────┘
                                               │
                                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                    BOOK DEMO PAGE (/book-demo)                   │
│                                                                  │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Fill & Submit your info                                │    │
│  │                                                          │    │
│  │  Required Fields:                                       │    │
│  │  ├─ First Name                                          │    │
│  │  ├─ Last Name                                           │    │
│  │  ├─ Email                                               │    │
│  │  ├─ Company Name                                        │    │
│  │  └─ Select Your Programs (multi-select)                │    │
│  │     ├─ RPM                                              │    │
│  │     ├─ Health Data Collection                           │    │
│  │     ├─ Health Monitoring Checkin                        │    │
│  │     ├─ Remote Patient Care                              │    │
│  │     ├─ Healthcare Marketing                             │    │
│  │     ├─ Post Discharge Workflows                         │    │
│  │     ├─ Pre-hospitalization Support                      │    │
│  │     └─ Health Device Monitoring                         │    │
│  │                                                          │    │
│  │  Optional Fields:                                       │    │
│  │  ├─ Phone Number                                        │    │
│  │  ├─ How Many Calls per Day/Week? (multi-select)        │    │
│  │  │  ├─ 10-50 calls/day                                  │    │
│  │  │  ├─ 50-100 calls/day                                 │    │
│  │  │  ├─ 100-200 calls/day                                │    │
│  │  │  ├─ 200+ calls/day                                   │    │
│  │  │  ├─ 50-100 calls/week                                │    │
│  │  │  ├─ 100-200 calls/week                               │    │
│  │  │  └─ 200+ calls/week                                  │    │
│  │  └─ Leave a Note (textarea)                             │    │
│  │                                                          │    │
│  │  [Continue to Schedule Demo] ──────────────┐           │    │
│  └────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────│──────────────────┘
                                               │
                                               │ (Data stored in sessionStorage)
                                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                SCHEDULE DEMO PAGE (/schedule-demo)               │
│                                                                  │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Awesome, you just booked a Demo!                       │    │
│  │  Let us schedule it for you :)                          │    │
│  │                                                          │    │
│  │  ┌──────────────────────────────────────────────────┐  │    │
│  │  │  Jenny Carify AI Demo                             │  │    │
│  │  │  Programs: [Selected Programs from previous page]│  │    │
│  │  └──────────────────────────────────────────────────┘  │    │
│  │                                                          │    │
│  │  ┌─────────────────┐  ┌──────────────────────────┐    │    │
│  │  │  Select Date    │  │  Select Time             │    │    │
│  │  │                 │  │                          │    │    │
│  │  │  [Calendar]     │  │  ○ 09:00 AM              │    │    │
│  │  │   Su Mo Tu We   │  │  ○ 09:30 AM              │    │    │
│  │  │   Th Fr Sa      │  │  ○ 10:00 AM              │    │    │
│  │  │                 │  │  ○ 10:30 AM              │    │    │
│  │  │   [Dates...]    │  │  ... (30-min intervals)  │    │    │
│  │  │                 │  │  ○ 05:00 PM              │    │    │
│  │  └─────────────────┘  └──────────────────────────┘    │    │
│  │                                                          │    │
│  │  ┌──────────────────────────────────────────────────┐  │    │
│  │  │  Time Zone                                        │  │    │
│  │  │  [Dropdown: America/New_York (EST)]              │  │    │
│  │  └──────────────────────────────────────────────────┘  │    │
│  │                                                          │    │
│  │  [Schedule Demo] ───────────────────────┐              │    │
│  └────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────│──────────────────┘
                                               │
                                               │ (Opens email client)
                                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                      EMAIL CLIENT                                │
│                                                                  │
│  To: demo@carify.health                                         │
│  Subject: Demo Request - [First Name] [Last Name]              │
│                                                                  │
│  Body:                                                          │
│  Demo Request Details:                                          │
│  Name: [First Name] [Last Name]                                │
│  Email: [Email]                                                 │
│  Phone: [Phone or 'Not provided']                              │
│  Company: [Company Name]                                        │
│  Programs: [Selected Programs]                                  │
│  Call Frequency: [Selected Frequencies or 'Not specified']     │
│  Note: [Note or 'None']                                         │
│                                                                  │
│  Scheduled Date: [Selected Date]                                │
│  Scheduled Time: [Selected Time]                                │
│  Time Zone: [Selected Time Zone]                                │
│                                                                  │
│  [Send] ────────────────────────────┐                          │
└──────────────────────────────────────│───────────────────────────┘
                                       │
                                       │ (User sends email)
                                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                    SUCCESS PAGE (same route)                     │
│                                                                  │
│  ┌────────────────────────────────────────────────────────┐    │
│  │                                                          │    │
│  │              ✓ Demo Scheduled!                          │    │
│  │                                                          │    │
│  │  Thank you for scheduling a demo with Carify Health.    │    │
│  │  We've sent the details to your email.                  │    │
│  │                                                          │    │
│  │  Our team will reach out to you shortly to confirm      │    │
│  │  your appointment.                                       │    │
│  │                                                          │    │
│  │  [Return to Home] ──────────────────────┐              │    │
│  └────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────│──────────────────┘
                                               │
                                               ▼
                                          Back to Home Page
```

## Data Flow

```
┌──────────────┐
│  User Input  │
│  (Form Data) │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│  sessionStorage  │
│  'demoFormData'  │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│  Schedule Page   │
│  (Date/Time)     │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│  Email Template  │
│  (mailto: link)  │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│  Email Client    │
│  (User sends)    │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│  demo@carify     │
│  .health         │
└──────────────────┘
```

## Navigation Map

```
                    ┌─────────────┐
                    │   Header    │
                    │  (Always)   │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
   ┌────────┐        ┌─────────┐       ┌──────────┐
   │  Home  │        │   Why   │       │   Use    │
   │   /    │        │ Carify  │       │  Cases   │
   └────────┘        └─────────┘       └──────────┘
        │
        │ "Book Demo" button
        ▼
   ┌──────────┐
   │   Book   │
   │   Demo   │
   └────┬─────┘
        │
        │ Form submission
        ▼
   ┌──────────┐
   │ Schedule │
   │   Demo   │
   └────┬─────┘
        │
        │ Email sent
        ▼
   ┌──────────┐
   │ Success  │
   │   Page   │
   └────┬─────┘
        │
        │ "Return to Home"
        ▼
   ┌──────────┐
   │   Home   │
   │    /     │
   └──────────┘
```

## Component Hierarchy

```
App
├── Header
│   ├── Logo
│   ├── Navigation Links
│   │   ├── Home
│   │   ├── ROI Calculator
│   │   ├── Why Carify
│   │   └── Use Cases
│   └── Book Demo Button
│
├── Routes
│   ├── HomePage (/)
│   │   ├── HeroSection
│   │   │   ├── YouTube Video
│   │   │   └── CTA Buttons
│   │   ├── FoundersPerspective
│   │   ├── AIInclusiveHealthcare
│   │   ├── OurPrograms
│   │   │   └── ProgramTiles (8)
│   │   ├── CarifyHealthSolution
│   │   ├── KeyServicePillars (6)
│   │   ├── WhyCarifyHealth
│   │   ├── FAQs
│   │   │   ├── Section A (4 questions)
│   │   │   └── Section B (4 questions)
│   │   └── CTASection
│   │
│   ├── BookDemoPage (/book-demo)
│   │   └── DemoForm
│   │       ├── PersonalInfo
│   │       ├── ProgramSelection (Checkboxes)
│   │       ├── CallFrequency (Checkboxes)
│   │       └── Notes (Textarea)
│   │
│   ├── ScheduleDemoPage (/schedule-demo)
│   │   ├── ProgramSummary
│   │   ├── Calendar
│   │   ├── TimeSlots
│   │   ├── TimezoneSelector
│   │   └── SubmitButton
│   │
│   └── [Other Pages...]
│
└── Footer
    ├── Logo & Brand
    ├── Navigation Links
    ├── Social Links
    └── Copyright
```

## State Management

```
┌─────────────────────────────────────────┐
│  BookDemoPage                            │
│  ┌─────────────────────────────────┐   │
│  │  useState (formData)             │   │
│  │  {                               │   │
│  │    firstName: string             │   │
│  │    lastName: string              │   │
│  │    email: string                 │   │
│  │    phone: string                 │   │
│  │    companyName: string           │   │
│  │    selectedPrograms: string[]    │   │
│  │    callFrequency: string[]       │   │
│  │    note: string                  │   │
│  │  }                               │   │
│  └─────────────────────────────────┘   │
│                │                         │
│                ▼                         │
│  sessionStorage.setItem('demoFormData') │
└─────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────┐
│  ScheduleDemoPage                        │
│  ┌─────────────────────────────────┐   │
│  │  useEffect                       │   │
│  │  sessionStorage.getItem()        │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │  useState                        │   │
│  │  {                               │   │
│  │    formData: object              │   │
│  │    date: Date                    │   │
│  │    selectedTime: string          │   │
│  │    selectedTimeZone: string      │   │
│  │    isSubmitted: boolean          │   │
│  │  }                               │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

## Error Handling

```
┌─────────────────────────────────────────┐
│  User Action                             │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│  Validation Check                        │
│  • Required fields filled?               │
│  • Valid email format?                   │
│  • At least one program selected?        │
└────────┬────────────┬───────────────────┘
         │            │
    ✓ Valid      ✗ Invalid
         │            │
         ▼            ▼
    Continue    Show Error
                Message
```

---

**Legend:**
- `┌─┐` = Container/Section
- `│` = Vertical connection
- `─` = Horizontal connection
- `▼` = Flow direction
- `○` = Radio/Option
- `✓` = Success state
- `✗` = Error state

