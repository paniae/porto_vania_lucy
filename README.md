# Aruna Dev — Dark Crimson Portfolio (Next.js & Full-stack API)

A modern, high-performance portfolio application built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and native **Next.js Route Handlers (API)**.

---

## 🚀 Features

- **Modular Section Architecture**: Each section is separated into dedicated, reusable components under `components/`.
- **Backend API Routes**: Built-in API endpoints for handling contact inquiries (`/api/contact`) and retrieving portfolio data (`/api/portfolio`).
- **Interactive Contact Modal**: Full client-side validation, loading spinner states, success screens, and seamless integration with the backend API.
- **Rich Dark Crimson Aesthetics**: Glowing aura portrait effects (`aura-glow`), crimson underline accents, modern typography (`Syne`, `Plus Jakarta Sans`, `JetBrains Mono`), and smooth micro-interactions.
- **Responsive Navigation**: Desktop navigation bar plus mobile slide-out drawer menu with social links.
- **Fast & Optimized**: Prerendered static pages with dynamic server-side API handlers.

---

## 📁 Project Structure

```text
├── app/
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts        # POST (submit message) & GET (recent inquiries)
│   │   └── portfolio/
│   │       └── route.ts        # GET (portfolio metadata, skills, services)
│   ├── globals.css             # Design tokens, aura glow, crimson accents, typography
│   ├── layout.tsx              # Root layout with fonts & metadata
│   └── page.tsx                # Main page assembling all modular sections
├── components/
│   ├── Navbar.tsx              # Sticky navbar with logo, nav links, and mobile drawer
│   ├── Hero.tsx                # Hero section with animated portrait & CTAs
│   ├── About.tsx               # About section with portrait, bio, & Download CV
│   ├── Skills.tsx              # Categorized CV skills showcase (no percentage bars)
│   ├── Services.tsx            # 6 interactive service cards with hover glow effects
│   ├── Contact.tsx             # Contact section with "Let's Chat" button
│   ├── ContactModal.tsx        # Modal dialog connected to /api/contact API
│   └── Footer.tsx              # Footer with copyright and back-to-top action
├── data/
│   └── portfolioData.ts        # Structured data for skills, services, bio, and socials
├── types/
│   └── portfolio.ts            # TypeScript interfaces and data models
└── public/
    └── avatar.jpg              # High-resolution avatar silhouette
```

---

## 🔌 Backend API Documentation

### 1. Contact Submission (`POST /api/contact`)
Submit project inquiries from the frontend or third-party clients.

- **Request Body:**
  ```json
  {
    "name": "Bruce Wayne",
    "email": "bruce@wayne.corp",
    "projectScope": "Need a secure cyber terminal dashboard redesign."
  }
  ```
- **Response (`201 Created`):**
  ```json
  {
    "success": true,
    "message": "Thank you, Bruce Wayne! Your message has been sent successfully. I'll get back to you within 24 hours.",
    "data": {
      "id": "sub-1790582592861",
      "createdAt": "2026-09-28T08:03:12.861Z"
    }
  }
  ```

### 2. View Recent Inquiries (`GET /api/contact`)
Retrieve recent messages stored on the backend.

### 3. Portfolio Data (`GET /api/portfolio`)
Returns all profile data, CV skill categories, and service offerings.

---

## 💻 Running Locally

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint check
npm run lint
```
