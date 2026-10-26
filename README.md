# SweetGrass Landscaping LLC - Official Website

A neat, modern, and high-performance multi-page responsive React website built for **SweetGrass Landscaping LLC**, based in Cary, North Carolina.

## 🌿 Project Highlights & Features

- **Multi-Page Client-Side Routing**:
  - **Page 1: Home Page (`/`)**
    - High-impact Hero section with exact requested headline and subheadline
    - Primary Call to Actions: *"Get a Free Estimate"* & *"View Our Work"*
    - Welcome / About Intro highlighting outdoor living space philosophy
    - *"Why Choose Us?"* feature cards (4.9-star rating, Comprehensive Services, Reliable & $2M Insured)
    - Featured testimonial from *Sarah M., Cary, NC*
    - Interactive Before & After comparison slider
    - 3-step streamlined service process walkthrough
    - Core services quick preview & final estimate banner
  - **Page 2: Services (`/services`)**
    - **Residential Lawn Maintenance**: Mowing & Edging, Core Aeration & Seeding, Shrub & Hedge Pruning, Seasonal Cleanups
    - **Hardscaping & Landscape Design**: Paver Patios & Walkways, Retaining Walls & Steps, Yard Grading & Resloping, Garden Beds & Plantings
    - Detailed cards with service highlights, Cary red clay suitability, and starting estimates
    - Interactive Instant Quote Calculator
    - Frequently Asked Questions accordion
  - **Page 3: About Us (`/about`)**
    - Our Story (Founded in 2022 on reliability, punctuality, and transparent communication)
    - Core Commitments: *Quality Materials*, *Community First*, *Eco-Friendly Practices*
    - Local Cary roots, equipment standards, and pet/gate safety protocols
  - **Page 4: Projects & Gallery (`/gallery`)**
    - Categorized portfolio filterable by *All, Hardscaping, Lawn Care, Cleanups, Grading*
    - Interactive Lightbox modal to inspect materials, project duration, and scope
    - Interactive Before & After slider
  - **Page 5: Contact & Free Estimate (`/contact`)**
    - "Let's Build Your Dream Yard" header
    - Form including all required fields: *Full Name, Phone Number, Email Address, Property Address (Cary, NC area), Service Needed dropdown, Project Details / Message Box*
    - Real-time client-side validation and celebratory confetti submission confirmation
    - Service Area details (Cary, NC and surrounding Triangle communities)
    - Business Hours: *Monday – Friday: 8:00 AM – 5:00 PM | Saturday: By Appointment Only*
  - **404 Not Found Page** with one-click return to home

- **Latest UI / UX Design**:
  - Tailwind CSS custom palette: Earthy deep greens (`brand-900`, `emerald`), warm earth tones, and clean slate typography
  - Fully mobile responsive layout with slide-out navigation drawer and sticky mobile quick-call / estimate bar
  - Top announcement bar with 4.9-star rating badge, Cary NC location pill, and business hours
  - Interactive Before/After drag comparison slider
  - Interactive multi-step Cost Estimator calculator with direct form transfer

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm

### Running Locally
```bash
# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```text
├── index.html                   # HTML template with Google Fonts (Outfit & Plus Jakarta Sans)
├── package.json                 # React 18, Vite, Tailwind CSS, Lucide React, Canvas Confetti
├── tailwind.config.js           # Custom brand theme configuration
├── vite.config.js               # Vite bundler configuration
└── src/
    ├── App.jsx                  # Main application router and layout
    ├── main.jsx                 # React root mounting
    ├── styles/
    │   └── index.css            # Tailwind directives, custom glassmorphism & scrollbar styles
    ├── components/
    │   ├── AnnouncementBar.jsx  # Top bar with rating, phone number, and Cary NC coverage
    │   ├── Navbar.jsx           # Sticky responsive header with desktop navigation & mobile drawer
    │   ├── Footer.jsx           # Detailed footer with hours, links, and Cary service areas
    │   ├── BeforeAfterSlider.jsx# Interactive drag-to-reveal before/after image slider
    │   ├── InstantQuoteCalculator.jsx # Dynamic yard cost estimator
    │   ├── FAQAccordion.jsx     # Collapsible FAQ section
    │   └── ScrollToTop.jsx      # Auto-scrolls to top on route change
    ├── data/
    │   ├── companyInfo.js       # Centralized business hours, contact info, ratings, and guarantees
    │   ├── servicesData.js      # Lawn maintenance & hardscaping service specs and pricing
    │   ├── testimonialsData.js  # Verified Cary homeowner reviews
    │   ├── projectsData.js      # Gallery projects and Before/After dataset
    │   └── faqData.js           # Frequently asked questions for Cary homeowners
    └── pages/
        ├── HomePage.jsx         # Home page with hero, intro, why choose us, reviews, process
        ├── ServicesPage.jsx     # Comprehensive services list and interactive estimator
        ├── AboutPage.jsx        # Story, core commitments, Cary community focus
        ├── GalleryPage.jsx      # Filterable portfolio with modal lightbox
        ├── ContactPage.jsx      # Free estimate request form and Cary business details
        └── NotFoundPage.jsx     # Clean 404 page
```
