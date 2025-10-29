# CraftyFunnel One-Page Business Card - Design Guidelines

## Design Approach

**Reference-Based Approach:** Drawing from bold, creative digital agencies and modern SaaS:
- **Vercel**: Dramatic typography, strong visual hierarchy
- **Linear**: Refined spacing, purposeful minimalism  
- **Stripe**: Professional restraint with impact
- **Creative agency aesthetic**: Confident, memorable, distinctive

**Core Principle:** Create a striking one-page business card that commands attention through bold typography, dramatic imagery, and confident layout choices. Every element must earn its place.

---

## Typography System

**Primary Font:** Inter (Google Fonts) - loaded via CDN
**Accent Font:** JetBrains Mono for service identifiers and technical elements

**Type Scale:**
- Hero headline: 72-96px desktop, 42-56px mobile, font-weight 800, line-height 0.95
- Section headings: 48-64px desktop, 32-40px mobile, font-weight 700
- Service titles: 28-32px, font-weight 600
- Body text: 18-20px, font-weight 400, line-height 1.7
- Labels/metadata: 14px, font-weight 500, letter-spacing 0.05em (uppercase)

**Hierarchy Rules:**
- Hero dominates with massive scale and weight - this is a business card, make an impression
- Service titles use consistent sizing for scannable rhythm
- Body text generous for readability, never below 18px

---

## Layout & Spacing System

**Container Structure:**
- Maximum width: `max-w-6xl` for content, full-width for hero
- Section vertical padding: `py-24 md:py-40` 
- Internal component spacing: `space-y-16 md:space-y-24`

**Tailwind Spacing Primitives:**
Core units: **4, 6, 8, 12, 16, 20, 24, 32, 40**
- Micro spacing: 4, 6, 8
- Component spacing: 12, 16, 20
- Section spacing: 24, 32, 40

**Vertical Rhythm:**
- Generous breathing room between all sections (120-160px)
- Each section feels complete and substantial
- No cramming - quality over quantity

---

## Page Structure (One-Page, Three Sections)

### 1. Hero Section (Full viewport, 100vh)

**Layout:** Full-bleed dramatic image with overlay content
- Large hero image: High-impact, professional marketing imagery (team collaborating, digital workspace, or abstract marketing visualization)
- Image treatment: Subtle gradient overlay (dark to transparent) to ensure text readability
- Content positioning: Lower-left or centered, z-index above image

**Content Elements:**
- Agency name/logo (top-left, fixed or absolute positioning)
- Hero headline: Split into two lines, massive scale - "Performance Marketing" / "That Converts"
- Subheadline: One powerful sentence about results (24-28px)
- Two CTAs: Primary "Start Your Campaign" + Secondary "View Services" (both with backdrop-blur backgrounds)
- Scroll indicator at bottom (animated arrow or "Scroll to explore")

**CTA Button Styling:**
- Backdrop blur: `backdrop-blur-md`
- Semi-transparent background treatment
- Large touch targets: `px-8 py-4`
- Rounded: `rounded-full` or `rounded-xl`

### 2. Services Section

**Layout:** 2-column asymmetric grid (desktop), single column (mobile)
- Grid: `grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16`
- Section header: Large, centered, with supporting subheadline

**Service Grid (6 services):**
Each service card contains:
- Icon from Heroicons (32x32)
- Service title (28-32px, font-weight 600)
- 2-sentence description (18px)
- Service identifier in monospace font (JetBrains Mono, 12px, uppercase)

**Services:**
1. Paid Social Media - `ChatBubbleLeftRightIcon`
2. Paid Search - `MagnifyingGlassIcon`
3. Creative Production - `SparklesIcon`
4. Analytics & Attribution - `ChartBarIcon`
5. Strategy & Consulting - `LightBulbIcon`
6. Affiliate Marketing - `UserGroupIcon`

**Card Styling:**
- Minimal borders or no borders
- Padding: `p-8 lg:p-10`
- Hover state: Subtle scale transform (1.02) with shadow
- Icon positioned at top-left, creating L-shaped composition with title

### 3. Contact Section

**Layout:** 2-column split on desktop (50/50), stacked on mobile
- Left column: Contact form
- Right column: Supporting information and visual elements

**Contact Form Fields:**
- Name (single input)
- Email (single input)
- Company (single input)
- Service interest (dropdown with all 6 services)
- Message (textarea, 4 rows minimum)
- Submit button (full-width on mobile, auto-width desktop)

**Form Styling:**
- Input height: `h-14`
- Rounded: `rounded-lg`
- Generous padding: `px-6`
- Labels: Above inputs, 14px, font-weight 500
- Focus states: Ring treatment
- Submit button: Primary style, `px-10 py-4`

**Right Column Content:**
- Headline: "Let's Build Something Great"
- Supporting text: 2-3 sentences about rapid response time
- Contact details: Email address, response time estimate
- Social proof: "Working with 50+ brands globally"
- Trust indicators: "Google Partner" and "Meta Business Partner" badges
- Social media links with icons (24x24)

---

## Component Library

### Buttons

**Primary CTA:**
- Large scale: `px-8 py-4` minimum
- Rounded: `rounded-full`
- Font: 16-18px, font-weight 600
- When on images: `backdrop-blur-md` background

**Secondary CTA:**
- Outlined variant
- Same sizing as primary
- Font-weight 500

### Cards (Services)

**Structure:**
- Padding: `p-8 lg:p-10`
- Rounded: `rounded-2xl`
- Border treatment: Subtle, single-pixel
- Hover: `transform hover:scale-[1.02] transition-transform duration-300`

### Form Elements

**Inputs:**
- Height: `h-14`
- Padding: `px-6`
- Rounded: `rounded-lg`
- Font-size: 16px
- Border with focus ring

**Textarea:**
- Min-height: equivalent to 4 text rows
- Same padding/rounding as inputs

---

## Images & Visual Assets

### Hero Image
**Large, full-viewport hero image:** Required and essential
- Placement: Background of hero section, full-bleed
- Subject: Professional marketing team collaborating, modern office space with screens showing data, or abstract digital marketing visualization
- Treatment: Gradient overlay (dark to transparent, bottom to top or left to right) to ensure text contrast
- Resolution: High-quality, optimized for web (at least 1920x1080)

### Service Icons
**Icon Library:** Heroicons (outline style for consistency)
- Size: 32x32px for service cards
- Positioning: Top-left of each card
- Treatment: Match overall visual weight

### Trust Badges
Placeholder areas for partner badges in contact section:
- Google Partner badge
- Meta Business Partner badge
- Display at 100-120px width, greyscale treatment

---

## Interaction & Motion

**Strategic Animation:**
- Hero scroll indicator: Gentle bounce animation (animate-bounce)
- Service cards: Scale on hover (1.02) with smooth transition
- Form focus states: Ring appearance with transition
- Scroll reveal: Fade-in for services section as it enters viewport

**Avoid:**
- Parallax effects
- Auto-playing carousels
- Excessive animations

---

## Mobile Optimization

**Responsive Strategy:**
- Mobile-first approach: Default styles for mobile, scale up
- Breakpoints: `md:768px`, `lg:1024px`

**Mobile Adaptations:**
- Hero: Reduce headline to 42-56px, maintain impact
- Services: Single column grid, maintain card padding
- Contact: Stack form and info vertically
- Touch targets: Minimum 44x44px for all interactive elements
- Reduce section padding: `py-16` on mobile vs `py-40` desktop

---

## Navigation

**Fixed Header/Logo:**
- Position: Fixed top-left or absolute within hero
- Logo/wordmark: 32-40px height
- Optional: Minimal navigation (About, Services, Contact as anchor links)
- Mobile: Same treatment, no hamburger needed for one-page

---

## Trust & Credibility

**Elements to Include:**
- Partner badges in contact section
- Social proof statement ("50+ brands")
- Professional hero imagery
- Clear, confident copy throughout
- Response time commitment in contact section

---

## Brand Personality Through Design

**CraftyFunnel Business Card should feel:**
- **Bold:** Massive typography, dramatic imagery, confident spacing
- **Professional:** Clean execution, polished details, credible
- **Modern:** Current design trends, refined interactions
- **Memorable:** Distinctive choices that stand out from generic agency sites
- **Focused:** Every element purposeful, nothing extraneous