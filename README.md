# NepalWander

A modern, full-stack Nepal travel guide and blog built with a headless WordPress CMS and Next.js frontend. Designed for tourists and travel agencies looking to explore Nepal's destinations, trekking routes, and travel stories.

## 🌐 Live Demo
[nepalwander.vercel.app](https://nepalwander.vercel.app) *(coming soon)*

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 (App Router) |
| Styling | Vanilla CSS Modules |
| CMS | WordPress (Headless) |
| API | WPGraphQL (GraphQL) |
| Custom Fields | ACF Free + WPGraphQL for ACF |
| Custom Post Types | CPT UI |
| Map | Leaflet + OpenStreetMap |
| Deployment | Vercel (frontend), Shared Hosting (WordPress) |
| Version Control | GitHub |

## ✨ Features

- **Headless CMS** — WordPress manages all content, Next.js handles the frontend
- **Dynamic routing** — destinations, places, trekking routes and articles all use Next.js dynamic routes
- **GraphQL API** — efficient data fetching via WPGraphQL
- **Interactive map** — Leaflet map on place detail pages using coordinates stored in WordPress
- **Search** — site-wide search across destinations, trekking routes and articles
- **Responsive design** — mobile-first with hamburger menu and adaptive layouts
- **Animated hero** — SVG mist wisps, sun shadow pulse and floating particles
- **Booking sidebar** — price, duration, group size and Book Now CTA on place and trekking pages

## 📁 Project Structure
nepal-wander/

├── app/

│   ├── page.js                          # Homepage

│   ├── layout.js                        # Root layout (Navbar + Footer)

│   ├── globals.css                      # Global CSS variables

│   ├── destinations/

│   │   ├── page.js                      # All destinations

│   │   └── [destination]/

│   │       ├── page.js                  # Places within destination

│   │       └── [place]/

│   │           └── page.js              # Place detail + map + booking

│   ├── trekking/

│   │   ├── page.js                      # All trekking routes

│   │   └── [slug]/

│   │       └── page.js                  # Trekking route detail

│   ├── articles/

│   │   ├── page.js                      # All articles

│   │   └── [slug]/

│   │       └── page.js                  # Single article

│   ├── about/page.js                    # About page

│   ├── contact/page.js                  # Contact form

│   └── search/page.js                   # Search results

├── components/

│   ├── Navbar.js                        # Fixed navbar with search + hamburger

│   ├── Hero.js                          # Animated hero section

│   ├── StatsBar.js                      # Stats bridge between hero and destinations

│   ├── Destinations.js                  # Featured destinations grid

│   ├── Trekking.js                      # Trekking routes section

│   ├── Articles.js                      # Articles grid

│   ├── Newsletter.js                    # Newsletter signup

│   ├── Footer.js                        # Site footer

│   └── Map.js                           # Leaflet map component

└── lib/

└── api.js                           # GraphQL client + all query functions

## 🗄️ WordPress Setup

**Plugins required:**
- WPGraphQL
- Custom Post Type UI (CPT UI)
- Advanced Custom Fields (ACF Free)
- WPGraphQL for ACF

**Custom Post Types:**
- `destinations` — travel destinations with hero image, description, season and elevation
- `places` — places within destinations with gallery, price, itinerary and map coordinates
- `trekking_routes` — trek routes with difficulty, elevation, itinerary and pricing
- `travel_articles` — blog articles with category, excerpt and read time

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- XAMPP (local WordPress)
- WordPress with WPGraphQL, CPT UI, ACF Free and WPGraphQL for ACF installed

### Installation

```bash
# Clone the repo
git clone https://github.com/ItsUgesh/nepal-wander.git
cd nepal-wander

# Install dependencies
npm install

# Start the development server
npm run dev
```

Make sure XAMPP is running with WordPress at `http://localhost/nepalwander` before starting the dev server.

### Environment
The GraphQL endpoint is set in `lib/api.js`:
```js
const client = new GraphQLClient("http://localhost/nepalwander/graphql");
```
Update this to your live WordPress URL before deploying.

## 🎨 Design

- **Color palette:** Himalayan Sky Blue (`#2178b4`), Glacial Ice (`#6cb8e8`), Gold (`#d4a843`)
- **Fonts:** Playfair Display (headings), Inter (body)
- **Theme:** Dark navy (`#07111f`) with frosted glass effects

## 👨‍💻 Author

**Ugesh Simkhada**
- Portfolio: [ugeshsimkhada.com.np](https://ugeshsimkhada.com.np)
- GitHub: [@ItsUgesh](https://github.com/ItsUgesh)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).