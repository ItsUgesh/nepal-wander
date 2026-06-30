# NepalWander 🏔️

A modern, full-stack travel guide and blog for Nepal built with a **headless WordPress CMS** and **Next.js frontend**. 

---

## 🛠️ Tech Stack
*   **Frontend:** Next.js (App Router)
*   **Styling:** Vanilla CSS Modules (Himalayan Light Theme)
*   **Headless CMS:** WordPress (Hosted on Pantheon)
*   **API:** WPGraphQL (GraphQL)
*   **Integrations:** 
    *   **Newsletter:** Mailchimp Marketing API (Double Opt-In)
    *   **Contact Form:** Nodemailer (Gmail SMTP using Google App Passwords)
    *   **Maps:** Leaflet & OpenStreetMap API

---

## 📁 Key Directories
*   `app/` — Next.js pages, layouts, and global styles
*   `components/` — UI modules (Navbar, Footer, Hero, StatsBar, Leaflet Map)
*   `lib/api.js` — GraphQL Client and content queries (dynamically reads `WORDPRESS_API_URL`)
*   `app/api/` — Serverless API endpoints for newsletter (`/api/subscribe`) and contact form (`/api/contact`)

---

## 🔑 Environment Variables
Create a `.env.local` file in the root directory for local development:

```env
# Live WordPress GraphQL API Endpoint
WORDPRESS_API_URL=https://dev-nepalwander.pantheonsite.io/graphql

# Mailchimp Credentials
MAILCHIMP_API_KEY=your_mailchimp_api_key_usXX
MAILCHIMP_AUDIENCE_ID=mailchimo_aud_id

# Gmail SMTP Credentials (Gmail App Password)
EMAIL_USER=your_email@gmail.com
EMAIL_APP_PASSWORD=your_16_character_app_password
```

---

## 🚀 Getting Started

### 1. Local Setup
```bash
# Clone the repository
git clone https://github.com/ItsUgesh/nepal-wander.git
cd nepal-wander

# Install dependencies
npm install

# Run the development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. WordPress Configuration
The site fetches schema structure dynamically from these WordPress core Custom Post Types:
*   **Post Types:** `destinations`, `places`, `trekking_routes`, `travel_articles`.
*   **Required Plugins:** *WPGraphQL, WPGraphQL for ACF, Custom Post Type UI, Advanced Custom Fields (ACF)*.

---

## ☁️ Production Architecture
*   **Frontend Hosting:** Hosted on **Vercel** with automated continuous integration (CI/CD) on GitHub pushes.
*   **Backend Hosting:** WordPress database and panel hosted on **Pantheon** (Developer Tier).
