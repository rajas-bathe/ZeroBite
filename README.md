# Zerobite – Food Surplus Redistribution Web App

A lightweight web application designed to connect food donors with recipients in real-time. Users can list surplus food from events, restaurants, and households, while others can browse available listings and claim food before it goes to waste.

## 🌐 Live Demo

Deployed automatically via GitHub Actions → GitHub Pages.
👉 **https://YOUR_USERNAME.github.io/zerobite/**
*(replace `YOUR_USERNAME` with your GitHub username after deploying — see setup instructions below)*

## 🎯 Project Overview

**Zerobite** is a college microproject built as part of the curriculum to address food waste and community support. The app demonstrates core web development concepts including state management, local storage, routing, and responsive UI design.

This is a **frontend-focused microproject** completed within a tight deadline as a learning exercise in full-stack web development practices.

## ✨ Key Features

- **List Food** – Donors submit details (name, quantity, pickup location, expiry time, category)
- **Browse Listings** – View available surplus food with category filters (Wedding Leftover, Restaurant Surplus, Event Food, Household Extra)
- **Get Directions** – One-click Google Maps integration to find pickup locations
- **Claim Food** – Mark items as claimed to coordinate community resource sharing
- **Local Storage** – User submissions persist without a backend
- **Responsive Design** – Mobile-friendly interface built with CSS modules

## 🛠️ Tech Stack

- **Frontend:** React 18 + React Router (HashRouter)
- **State Management:** React Hooks (useState, useEffect, useMemo)
- **Styling:** CSS Modules + CSS Variables
- **Build Tool:** Vite
- **Data:** localStorage (browser) + mock data
- **APIs:** Google Maps (directions only, no API key required)
- **Deployment:** GitHub Actions → GitHub Pages

## 📂 Project Structure

```
zerobite/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto build & deploy to GitHub Pages
├── src/
│   ├── components/
│   │   ├── FoodCard/            # Reusable card component with Claim & Get Directions
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── SDGCard/
│   │   └── FeatureCard/
│   ├── pages/
│   │   ├── Home/                # Landing page
│   │   ├── FoodListing/         # Browse & filter listings
│   │   ├── ListFood/            # Form to submit new listings
│   │   ├── SDG/                 # Sustainable Development Goals info
│   │   └── AboutUs/
│   ├── data/
│   │   └── mockData.js          # Sample listings (food data)
│   ├── config/
│   │   └── mapsConfig.js        # Google Maps configuration
│   ├── utils/
│   │   └── storage.js           # localStorage utility functions
│   ├── App.jsx                  # Main router setup
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles & design tokens
├── public/
│   └── favicon.svg
├── .gitignore
├── index.html
├── package.json
├── vite.config.js               # Includes GitHub Pages base path config
└── README.md
```

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation & Running

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

The app will run at `http://localhost:5173/` (Vite default).

## 📝 How It Works

### Listing Food
1. Navigate to **"List Your Food"** page
2. Fill in the form (food name, quantity, pickup address, expiry time, category)
3. Submit → Alert confirms + auto-redirects to the listings page
4. Your listing is saved to browser localStorage and appears in the Food Listing feed

### Browsing & Claiming
1. Go to **"Surplus Food Near You"** page
2. Filter by category or view all
3. Click **"Claim Food"** to mark as claimed (local state)
4. Click **"📍 Get Directions"** to open the pickup location in Google Maps

### Data Persistence
- **User submissions** are stored in localStorage (`zerobite_food_listings`)
- **Sample listings** are loaded from `mockData.js`
- Data survives page reloads but clears on browser cache clear

## 🌍 Google Maps Integration

The "Get Directions" button uses Google's public Maps URL scheme:
```
https://www.google.com/maps/dir/?api=1&destination={address}
```

**No API key required** for basic directions. If you want to add features like embedded maps or geocoding, see `src/config/mapsConfig.js` for setup instructions.

## 📦 Deploying to GitHub Pages

This repo is pre-configured to deploy automatically:

1. Push this repo to GitHub (see step-by-step guide provided separately).
2. In your GitHub repo, go to **Settings → Pages → Build and deployment → Source**, and select **"GitHub Actions"**.
3. Push to `main` — the included workflow (`.github/workflows/deploy.yml`) builds the app and publishes it to Pages automatically.
4. Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME/`.

Two things are already handled in this codebase for Pages compatibility:
- `vite.config.js` sets `base: '/zerobite/'` so built asset paths resolve correctly under the Pages subpath (update this if you rename the repo).
- `main.jsx` uses `HashRouter` instead of `BrowserRouter`, since GitHub Pages has no server-side rewrites — this avoids 404s when refreshing or directly opening a route like `/food-listing`.

## 📱 Responsive Design

Built mobile-first with CSS Grid & Flexbox. Breakpoints optimized for:
- Mobile (< 640px)
- Tablet (640px – 1024px)
- Desktop (> 1024px)

## 🎓 Learning Outcomes

This microproject covers:
- Component-based architecture & prop drilling
- React Hooks (state, lifecycle, memoization)
- Client-side routing with React Router
- Browser APIs (localStorage, window.open)
- CSS Modules & responsive design
- Form handling & validation
- Data filtering & search UX
- CI/CD basics with GitHub Actions

## ⚠️ Scope & Limitations

This is a **frontend demonstration** with no backend infrastructure:
- No user authentication
- No payment integration
- No real-time notifications
- No database (localStorage only)
- Mock data for demo purposes
- No image upload (placeholder images used)

For production, integrate:
- Backend API (Node.js/Express, Django, etc.)
- Database (PostgreSQL, MongoDB)
- Authentication (JWT, OAuth)
- Image storage (AWS S3, Cloudinary)
- Real-time updates (WebSockets/Firebase)

## 🤝 Future Enhancements

- [ ] User authentication & profiles
- [ ] Real-time availability updates
- [ ] Email/SMS notifications
- [ ] Image upload for food photos
- [ ] Map clustering for nearby listings
- [ ] Review & rating system
- [ ] Admin dashboard
- [ ] Integration with food banks & NGOs

## 📄 License

This project is provided as-is for educational purposes.

## 👤 Author

Built as a college microproject to demonstrate web development fundamentals.

---

**Note:** This is a learning project completed within a semester timeframe. It prioritizes core functionality and user experience over production-readiness. The codebase is intentionally kept modular and well-commented to serve as a reference for similar projects.
