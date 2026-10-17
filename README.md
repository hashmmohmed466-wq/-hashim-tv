# Hashim TV

A modern bilingual platform dashboard and landing page built with React + Vite for the frontend, and Express for the backend/store API.

## Project structure

- `/index.html` - landing page / main site entry
- `/dashboard` - React dashboard app
- `/store` - storefront assets
- `/server.js` - Express API and admin functions

## Local development

### Backend

```bash
npm install
node server.js
```

Then open:
- http://localhost:3000

### Frontend dashboard

```bash
cd dashboard
npm install
npm run dev
```

Then open the local Vite URL (typically http://localhost:5173).

## Deployment

### 1) Vercel (Frontend)

Create a new project on Vercel and set:

- Root Directory: `dashboard`
- Build Command: `npm install && npm run build`
- Output Directory: `dist`

Optional environment variable:

```bash
VITE_API_URL=https://your-render-service.onrender.com
```

### 2) Render (Backend)

Create a new Web Service and connect the repository root.

Settings:

- Build Command: `npm install`
- Start Command: `node server.js`
- Environment Variables:
  - `NODE_ENV=production`
  - `ADMIN_PASS=admin123`

## API notes

- `/api/products` - read products
- `/api/orders` - create order
- `/admin/orders?pass=...` - list orders
- `/admin/orders/:id/status?pass=...` - update order status
- `/admin/export?pass=...` - export CSV

## Notes

The frontend dashboard is bilingual (Arabic/English) and includes RTL/LTR switching and dark/light mode toggling.
