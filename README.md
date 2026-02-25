# Dorbesh Personal Portfolio (Next.js + TypeScript)

A clean, modern one-page portfolio built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **MongoDB**. It replicates the structure and feel of the Dorbesh Personal Portfolio template with smooth scrolling, responsive layout, and server-rendered data.

## Features

- **Sections**: Home/Hero, About, Services/Skills, Portfolio, Testimonials, Blog, Contact form
- **Smooth scroll** and **active nav state** on scroll
- **MongoDB (Mongoose)** for: Portfolio items, Blog posts, Testimonials, Contact form submissions
- **API routes**: `/api/contact`, `/api/portfolio`, `/api/blog`, `/api/testimonials`
- **Server-side data**: Portfolio, blog, and testimonials are fetched on the server for SEO and fast load
- **Tailwind CSS** only (no Bootstrap); responsive breakpoints and Dorbesh-style spacing/typography
- **Profile image**: Place your photo in `public/` as **moiz.jpg** or **moiz.png** (used in Hero and About). If missing, a placeholder avatar is shown.

## Project structure

```
portfolio-dorbesh/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/route.ts   # POST contact → MongoDB
│   │   │   ├── portfolio/route.ts
│   │   │   ├── blog/route.ts
│   │   │   └── testimonials/route.ts
│   │   ├── layout.tsx             # Global layout, Header, Footer, SEO
│   │   ├── page.tsx               # Home page (SSR data)
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HeroImage.tsx          # Hero profile image (fallback)
│   │   ├── ProfileImage.tsx       # Reusable profile image (fallback)
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── PortfolioGrid.tsx
│   │   ├── Testimonials.tsx
│   │   ├── BlogSection.tsx
│   │   └── ContactForm.tsx
│   ├── lib/
│   │   └── mongodb.ts             # MongoDB connection singleton
│   ├── models/
│   │   ├── Portfolio.ts
│   │   ├── Blog.ts
│   │   ├── Testimonial.ts
│   │   └── Contact.ts
│   └── services/
│       ├── portfolio.ts           # Server-side portfolio data
│       ├── blog.ts
│       └── testimonials.ts
├── public/
│   └── moiz.jpg or moiz.png      # Your profile image (add this)
├── .env.local                     # MONGODB_URI (create from .env.example)
├── .env.example
└── README.md
```

## Setup

1. **Clone / open the project**
   ```bash
   cd portfolio-dorbesh
   ```

2. **Install dependencies** (if not already)
   ```bash
   npm install
   ```

3. **Environment variables**
   - Copy `.env.example` to `.env.local`
   - Set `MONGODB_URI` to your MongoDB connection string (e.g. Atlas).
   - Example already in `.env.local` for local dev (replace with your own in production).

4. **Profile image**
   - Add your photo to `public/` as **moiz.jpg** or **moiz.png**. The app uses `moiz.jpg` first; if the file is missing, a placeholder avatar is shown.

5. **Run**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## MongoDB schemas (Mongoose)

- **Portfolio**: `title`, `slug`, `category`, `description`, `image`, `link`, `order`
- **Blog**: `title`, `slug`, `excerpt`, `content`, `image`, `author`, `publishedAt`
- **Testimonial**: `name`, `role`, `company`, `content`, `avatar`, `rating`, `order`
- **Contact**: `name`, `email`, `subject`, `message` (from form submissions)

Add documents via MongoDB Atlas/Compass or seed scripts. If collections are empty, the UI shows inline placeholder content for Portfolio, Blog, and Testimonials.

## API

| Route              | Method | Description                    |
|--------------------|--------|--------------------------------|
| `/api/contact`     | POST   | Save contact form to MongoDB   |
| `/api/portfolio`   | GET    | List portfolio items            |
| `/api/blog`        | GET    | List blog posts                |
| `/api/testimonials`| GET    | List testimonials              |

All APIs return JSON. Contact POST expects: `{ name, email, subject, message }`.

## Build and deploy

```bash
npm run build
npm start
```

Ensure `MONGODB_URI` is set in your deployment environment.

## Screenshots

After adding your `moiz` image and optional MongoDB data, the UI matches the Dorbesh-style layout: hero with profile image, about, services grid, portfolio grid, testimonials, blog cards, and contact form. Take a screenshot of your running site to confirm it matches the original template.
