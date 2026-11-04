# Pavitrani Jewellers Official Website

A premium, modern, fully responsive web application built for **Pavitrani Jewellers** (A unit of Mayank Metal Works), a luxury jewellery showroom located on B.L.W Road in Varanasi, Uttar Pradesh, India.

> **Slogan:** *"Jewels as Pure as You"*  
> **GSTIN:** `09AUQPS8232E2Z3`  
> **Showroom Location:** 81/1 Shivdaspur B.L.W Road Near Kabir Ashram, Varanasi, U.P.  
> **Official Contact / WhatsApp:** +91 9335093572 / +91 8299045172  
> **Email:** pavitranijewellers@gmail.com  
> **Instagram:** [@pavitranijewellers_varanasi](https://www.instagram.com/pavitranijewellers_varanasi?psln=MW43ZTc4N3VjNDNjaQ==)

---

## 💎 Features & Architecture

1. **Brand Identity & Luxury Aesthetic**
   - Palette inspired by the showroom: Royal Aubergine/Plum (`#2D0A27`), Champagne Gold (`#C5A059`), Warm Ivory (`#FAF8F5`), and Alabaster White.
   - Official company lotus emblem and brand watermark incorporated throughout.
   - High-fidelity typography pairing: Cormorant Garamond & Cinzel serif headers with Plus Jakarta Sans body.

2. **100% Authentic Showroom Assets**
   - Incorporates all supplied real photographs:
     - Multi-story illuminated building elevation at night.
     - Illuminated storefront glass facade on BLW Road.
     - Luxurious VIP customer salon with royal purple velvet high-back chairs.
     - Pure silver dinnerware & religious puja alcove showcases.
     - Handcrafted Pure Silver Mayur (Peacock) sculpture with intricate feather relief.
     - Solitaire Teardrop Halo 925 Tennis Bracelet with Pavitrani watermark.
     - Signature velvet tray of 7 distinct dual-tone, snake chain, meander, and lion crest bracelets.

3. **Dedicated Pages**
   - **Home Page:** Hero banner, Trust Badges, Core Collections preview, Showroom Bestsellers, Heritage Story preview, Customer Testimonials, Interactive Map & Showroom Hours, WhatsApp action banner.
   - **About Us Page:** Detailed brand story, Mayank Metal Works foundation, Kashi metallurgical heritage, philosophy behind *"Jewels as Pure as You"*, craftsmanship pillars, and showroom gallery.
   - **Collections & Gallery Page:** Interactive category filter tabs (925 Silver, Bracelets & Chains, Silverware & Artefacts, Fine Gold, Lab-Grown Diamonds), search bar, and Quick View detail modal with macro zoom.
   - **Virtual Showroom Tour:** 4 dedicated showroom photo sections with descriptions, amenities guide (parking, precision scales, hospitality), and Google Maps navigation.
   - **Contact Us Page:** Comprehensive showroom address, direct telephone and WhatsApp links, business hours (Mon-Sun 10:30 AM - 8:30 PM), interactive Google Map embed, and interactive enquiry form with client-side validation and anti-spam honeypot protection.
   - **Product Disclaimer Page:** Legal notice regarding bullion price volatility, handcrafted artisanal variations, and showroom weight/price confirmations.
   - **Privacy Policy Page:** Professional privacy policy covering customer enquiry data collection, storage, security, zero third-party disclosure, and contact info for grievances.

4. **Interactive Features**
   - Pre-filled WhatsApp enquiry buttons on every product card, modal, and form.
   - Quick View Lightbox modal with macro detail zoom.
   - Floating WhatsApp button with pulsing notification beacon.
   - Working contact form with instant validation and optional direct WhatsApp forwarding.
   - Zero dead links, non-functional buttons, or placeholder text.

5. **SEO & Technical Standards**
   - Rich OpenGraph & Twitter Card metadata with custom high-res banner (`/og-image.jpg`).
   - Valid Schema.org `JewelryStore` and `LocalBusiness` JSON-LD structured data for Google Search & Maps indexing.
   - `sitemap.xml` and `robots.txt` ready for search engine crawlers.
   - Highly optimized WebP images (reduced from 10MB raw files down to fast-loading ~150KB-250KB WebP files).
   - Fast production bundle built with Vite and Tailwind CSS v4.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation & Development
```bash
# Navigate to the project directory
cd pavitrani_website

# Install dependencies (already installed)
npm install

# Start the development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Preview
```bash
# Build the optimized production bundle
npm run build

# Preview the production build locally
npm run preview
```
Open [http://localhost:4173](http://localhost:4173) in your browser.

---

## 🌐 Deploying with Free SSL (HTTPS)

### Option 1: Deploy to Vercel (Recommended)
1. Push this repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the `pavitrani_website` repository.
4. Vercel automatically detects the Vite framework and uses `vercel.json` for security headers and caching.
5. Click **"Deploy"**. Your website is immediately live with a free, automatic SSL certificate (HTTPS) and global CDN.
6. Under **Project Settings > Domains**, connect your custom domain (e.g. `pavitranijewellers.com`).

### Option 2: Deploy to Netlify
1. Sign in to [Netlify](https://netlify.com) and click **"Add new site" > "Import an existing project"**.
2. Select your repository.
3. Build command: `npm run build`, Publish directory: `dist`.
4. Click **"Deploy site"**. Netlify automatically provisions a Let's Encrypt SSL certificate.

### Option 3: Deploy to Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Set public directory to 'dist'
# Configure as a single-page app: Yes
npm run build
firebase deploy --only hosting
```

---

## ✏️ Updating Website Content

- **Business details, phone, hours, GST:**  
  Edit [`src/data/business.js`](src/data/business.js)
- **Jewellery products and descriptions:**  
  Edit [`src/data/products.js`](src/data/products.js)
- **Adding new photos:**  
  Place new high-resolution photographs into `public/images/products/` or `public/images/showroom/` and update references in `products.js`.

---

© 2026 Pavitrani Jewellers (A unit of Mayank Metal Works). All rights reserved.
