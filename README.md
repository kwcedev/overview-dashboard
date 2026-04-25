# overview-dashboard

Personal admin dashboard (Life+) — invoices, quotes, and business tracking in a single-page web app backed by Firebase.

## Stack
- Vanilla HTML/CSS/JS (single-file app — `index.html`)
- Firebase Realtime Database (cloud sync)
- Node.js local server (`server.js`) with automatic local backups
- Deployed on Netlify
- React/Vite prototype in `Gemini test/` (experimental, not deployed)

## What it does
A self-hosted personal dashboard covering business tracking (invoices, quotes), planning, habit tracking, nutrition, and journaling. Data syncs to Firebase Realtime Database so it works across devices. A local Node.js server (`server.js`) serves the app on `localhost:3000` and writes timestamped backups to `Life+_Data/` on every save.

## How to run

### Cloud (Netlify)
```bash
# Clone
git clone https://github.com/upscaleaidev/overview-dashboard
cd overview-dashboard

# Configure Firebase
# Edit index.html — find FIREBASE_CONFIG and replace the placeholder values
# with your own project config from console.firebase.google.com

# Deploy
netlify deploy --prod --dir="."
```

### Local
```bash
node server.js
# Open http://localhost:3000
```

## Firebase setup
1. Create a project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Realtime Database
3. Copy your web app config into the `FIREBASE_CONFIG` object in `index.html`
4. Set your database security rules (restrict to authenticated users or specific UIDs)

## Status
Working prototype

## Author
https://upscaleai.fr
