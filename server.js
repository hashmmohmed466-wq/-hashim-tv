const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_PASS = process.env.ADMIN_PASS || 'admin123';

app.use(cors());
app.use(bodyParser.json());

// Serve static storefront
app.use('/store', express.static(path.join(__dirname, 'store')));

// API: products (read-only)
app.get('/api/products', async (req, res) => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'store', 'products.json'), 'utf8');
    const products = JSON.parse(data);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'failed to load products' });
  }
});

// API: create order (save to orders.json)
app.post('/api/orders', async (req, res) => {
  try {
    const { items, customer_name, phone, payment_method, bank_name, bank } = req.body;
    if (!items || items.length === 0) return res.status(400).json({ error: 'no items' });

    // compute total
    let total = 0;
    items.forEach(i => { total += (i.price || 0) * (i.quantity || 1); });

    const order = {
      id: uuidv4(),
      items,
      total,
      currency: 'ج.س',
      customer_name: customer_name || null,
      phone: phone || null,
      payment_method: payment_method || 'unknown',
      bank_name: bank_name || bank || null,
      status: 'pending',
      created_at: new Date().toISOString()
    };

    // read existing orders
    let orders = [];
    try {
      const ordersRaw = await fs.readFile(path.join(__dirname, 'orders.json'), 'utf8');
      orders = JSON.parse(ordersRaw);
    } catch (e) {
      orders = [];
    }

    orders.push(order);
    await fs.writeFile(path.join(__dirname, 'orders.json'), JSON.stringify(orders, null, 2));

    // prepare whatsapp confirmation link (to your business number)
    const businessNumber = '249998040864';

    const summaryLines = [];
    summaryLines.push(`طلب جديد: ${order.id}`);
    if (order.customer_name) summaryLines.push(`الاسم: ${order.customer_name}`);
    if (order.phone) summaryLines.push(`الهاتف: ${order.phone}`);
    summaryLines.push('المنتجات:');
    order.items.forEach(it => {
      summaryLines.push(`${it.quantity}x ${it.name} - ${it.price} ${order.currency}`);
    });
    summaryLines.push(`الإجمالي: ${order.total} ${order.currency}`);
    summaryLines.push(`طريقة الدفع: ${order.payment_method}` + (order.bank_name ? ` (${order.bank_name})` : ''));

    const message = encodeURIComponent(summaryLines.join('\n'));
    const whatsappLink = `https://wa.me/${businessNumber}?text=${message}`;

    res.json({ orderId: order.id, whatsappLink });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'failed to create order' });
  }
});

// Admin: list orders (simple pass check)
app.get('/admin/orders', async (req, res) => {
  const pass = req.query.pass || '';
  if (pass !== ADMIN_PASS) return res.status(401).json({ error: 'unauthorized' });
  try {
    const ordersRaw = await fs.readFile(path.join(__dirname, 'orders.json'), 'utf8');
    const orders = JSON.parse(ordersRaw);
    res.json(orders);
  } catch (e) {
    res.json([]);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} (serving /store)`);
});
