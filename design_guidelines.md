# Carify.Health Design Guidelines

## Design Approach
**Reference-Based Approach**: Healthcare SaaS platforms like Headway, Zocdoc, and modern healthcare dashboards. Professional, trustworthy aesthetic with interactive elements.

## Typography System
- **Headings**: Modern sans-serif (Inter, Outfit, or Manrope)
  - H1: 4xl-6xl (bold), primary headlines
  - H2: 3xl-4xl (semibold), section titles
  - H3: 2xl-3xl (semibold), subsections
- **Body**: base-lg, regular weight for readability
- **Stats/Numbers**: Display font (6xl-8xl, bold) for impact metrics
- **Disclaimer text**: sm-xs, lighter weight

## Layout & Spacing System
- **Spacing Units**: Tailwind 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- **Section Padding**: py-16 (mobile), py-24 (desktop)
- **Container**: max-w-7xl for main content, max-w-4xl for focused sections
- **Grid Layouts**: 
  - Stats cards: 2 columns (mobile), 4 columns (desktop)
  - Two-page navigation: full-width header with centered content

## Component Library

### Navigation Header
- Fixed top header with brand logo left, navigation center, CTA right
- Clean, minimal design with subtle shadow on scroll
- Mobile: Hamburger menu collapse

### Hero Sections
**Page 1 - ROI Calculator Hero**
- Gradient background (blue-to-purple or blue-to-teal)
- Large centered headline and subheadline with max-w-3xl
- No hero image - focus on copy clarity

**Page 2 - Why Carify Hero**
- Professional healthcare environment image (team collaboration, modern clinic, or abstract medical tech)
- Text overlay with semi-transparent background
- Image placement: Full-width background with content overlay

### ROI Calculator (Interactive Card)
- Large elevated card (shadow-xl, rounded-2xl) on gradient background
- Three input sections with labels above
- Slider component with visible track and thumb
- Number inputs with increment/decrement buttons
- Output display: Large bold numbers in colored boxes (green for savings)
- Currency formatting with $ and commas
- Disclaimer text at bottom in muted color

### Stats Cards (4 Metrics)
- Grid of 4 cards (responsive to 2-col on tablet, 1-col mobile)
- Each card: Large number/percentage, description below
- Icon or graphic accent above number
- Subtle background gradient or border
- Hover: Gentle lift effect (translate-y-1)

### Integrations Section
- Two-column layout: Text left, visual right
- Logo grid or diagram showing EHR/IVR connections
- Clean, professional presentation

### Safe & Reliable AI Section
- Full-width colored background (light blue/gray)
- Single column centered text (max-w-4xl)
- Icon accents (shield, checkmark) for trust signals

### FAQ Accordion
- Stacked list with dividers
- Question text: semibold, clickable
- Expand/collapse icon (chevron) on right
- Answer: revealed with smooth height transition
- Subtle background change on hover

### CTA Sections
- Centered layout with headline + button
- Primary button: Large, rounded, with gradient or solid color
- Hover: Slight scale and shadow increase

### Footer
- Multi-column layout (links, contact, social)
- Light background separator from main content

## Animations
- **Minimal approach**: Subtle hover states only
- Card hover: transform translateY(-4px)
- Button hover: Built-in button component states
- Accordion: Smooth height transition (300ms ease)
- No scroll-triggered animations

## Images
**Required Images:**
1. **Page 2 Hero**: Modern healthcare setting - bright, professional clinic environment or collaborative team in medical setting (full-width background, 60vh height)

**Image Treatment**: 
- Hero images: Overlay with rgba gradient for text legibility
- Maintain professional, diverse, modern aesthetic
- Avoid cliché stock photos

## Accessibility
- Sufficient contrast ratios (4.5:1 minimum for text)
- Focus states on all interactive elements
- Semantic HTML structure
- ARIA labels for calculator and accordion

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)

## Key Principles
- **Trust & Professionalism**: Healthcare context demands clean, reliable design
- **Clarity Over Creativity**: Information hierarchy is paramount
- **Interactive Delight**: Calculator should feel responsive and satisfying
- **Breathing Room**: Generous whitespace for readability