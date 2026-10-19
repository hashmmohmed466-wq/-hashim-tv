
# Hashim TV
هاشم TV (Hashim TV)

## 📺 نبذة تعريفية عن المنصة
**هاشم TV** هي منصة رقمية ثقافية وإعلامية مستقلة، تُعنى بتوثيق التراث الإنساني والطبيعي، وتسليط الضوء على جماليات الجغرافيا والقصص المحلية (مع التركيز على مدينة زالنجي ودارفور والسودان)، وتقديم محتوى إبداعي يجمع بين أصالة التراث وروح العصر، يشمل برامج، بودكاست، ومقاطع وثائقية وفنية.

## 🌅 غرب زالنجي والطبيعة
> "حين تشهد غروب الشمس في غرب زالنجي، تدرك كيف تلتقي السماء بالأرض في لوحة ربانية ناطقة؛ حيث تتبدل ألوان الوديان والسهول الواسعة إلى سيمفونية من الدفء والسكينة، ونقاء الطبيعة أسرار أرضٍ تعانق المجد والجمال في كل تفصيلة."

## 🔗 الروابط الرسمية للتواصل والمنصة
* **موقع المنصة (** [Hashim TV (https://github.com/hashmmohmed466-wq/-hashim-tv.git)
* **للتواصل وطلبات الإعلان (واتساب):** `+249998040864`

## 🏷️ الهاشتاقات الرسمية (الوسوم)
`#هاشم_TV` `#Hashim_TV` `#زالنجي` `#غرب_زالنجي` `#وسط_دارفور` `#السودان` `#طبيعة_السودان` `#غروب_زالنجي` `#جمال_دارفور` `#صوت_الأصالة` `#حكايات_السودان` `#إبداع_متجدد`
https://github.com/hashmmohmed466-wq/-hashim-tv.git
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
