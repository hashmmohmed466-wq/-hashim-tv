// frontend logic for simple cart and checkout (uses /api/products and /api/orders)
(async function(){
  const productsEl = document.getElementById('products');
  const cartItemsEl = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  const checkoutWhatsapp = document.getElementById('checkoutWhatsapp');
  const checkoutBank = document.getElementById('checkoutBank');
  const bankSelect = document.getElementById('bankSelect');

  let products = [];
  let cart = JSON.parse(localStorage.getItem('hma_cart') || '[]');

  function saveCart(){
    localStorage.setItem('hma_cart', JSON.stringify(cart));
    renderCart();
  }

  function addToCart(p){
    const found = cart.find(i=>i.id===p.id);
    if(found) found.quantity += 1; else cart.push({...p, quantity:1});
    saveCart();
  }

  function removeFromCart(id){
    cart = cart.filter(i=>i.id!==id);
    saveCart();
  }

  function renderProducts(){
    productsEl.innerHTML = '';
    products.forEach(p=>{
      const card = document.createElement('div');
      card.className = 'bg-white p-4 rounded-lg shadow text-right';
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" class="w-full h-40 object-cover rounded mb-3">
        <h3 class="font-bold">${p.name}</h3>
        <p class="text-sm text-slate-600">${p.price} ${p.currency}</p>
        <button class="mt-3 w-full bg-blue-600 text-white py-2 rounded">أضف للسلة</button>
      `;
      const btn = card.querySelector('button');
      btn.addEventListener('click', ()=> addToCart(p));
      productsEl.appendChild(card);
    });
  }

  function renderCart(){
    cartItemsEl.innerHTML = '';
    let total = 0;
    if(cart.length===0){
      cartItemsEl.innerHTML = '<div class="text-slate-500">السلة فارغة</div>';
    }
    cart.forEach(it=>{
      total += it.price * it.quantity;
      const row = document.createElement('div');
      row.className = 'flex justify-between items-center';
      row.innerHTML = `
        <div>
          <div class="font-semibold">${it.name}</div>
          <div class="text-xs text-slate-500">${it.quantity} × ${it.price} ${it.currency}</div>
        </div>
        <div>
          <button class="text-red-500 text-sm">حذف</button>
        </div>
      `;
      row.querySelector('button').addEventListener('click', ()=> removeFromCart(it.id));
      cartItemsEl.appendChild(row);
    });
    cartTotalEl.textContent = total;
  }

  // fetch products
  try{
    const res = await fetch('/api/products');
    products = await res.json();
    renderProducts();
    renderCart();
  }catch(e){
    productsEl.innerHTML = '<div class="text-red-500">حدث خطأ في تحميل المنتجات.</div>';
  }

  // create order helper
  async function createOrder(payment_method, bank){
    if(cart.length===0) return alert('السلة فارغة');
    const name = prompt('الاسم (اختياري)');
    const phone = prompt('رقم الهاتف (مثلاً 2499...)');
    const payload = {
      items: cart.map(i=>({ id: i.id, name: i.name, price: i.price, quantity: i.quantity })),
      customer_name: name,
      phone: phone,
      payment_method,
      bank_name: bank || null
    };
    try{
      const r = await fetch('/api/orders', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      });
      const j = await r.json();
      if(r.ok){
        // redirect to whatsapp confirmation link
        window.open(j.whatsappLink, '_blank');
        cart = [];
        saveCart();
        alert('تم إنشاء الطلب. سيتم تحويلك للواتساب للتأكيد. رقم الطلب: ' + j.orderId);
      } else {
        alert('خطأ في إنشاء الطلب: ' + (j.error || ''));
      }
    }catch(err){
      alert('فشل الاتصال، حاول لاحقاً');
    }
  }

  checkoutWhatsapp.addEventListener('click', ()=> createOrder('whatsapp'));
  checkoutBank.addEventListener('click', ()=> createOrder('bank_transfer', bankSelect.value));

})();
