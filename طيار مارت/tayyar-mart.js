// ===== TAYYAR MART - CATEGORY SYSTEM =====
// This integrates with your existing Tayyar infrastructure

const SERVICE_FEE = 5;

// Category configuration
const CATEGORIES = {
  baked: {
    name: '🍞 مخبوزات',
    keywords: ['خبز', 'كيك', 'معجنات', 'فطيرة', 'بسكويت', 'كعك'],
  },
  dairy: {
    name: '🥛 ألبان',
    keywords: ['لبن', 'جبنة', 'زبادي', 'حليب', 'قشطة', 'ألبان'],
  },
  groceries: {
    name: '🛍️ بقالة',
    keywords: ['زيت', 'سكر', 'دقيق', 'أرز', 'ملح', 'معكرونة', 'أملاح', 'بهارات'],
  },
  vegetables: {
    name: '🥬 خضروات',
    keywords: ['خضار', 'طماطم', 'خيار', 'بصل', 'ثوم', 'فلفل', 'كرنب', 'كوسة'],
  },
  fruits: {
    name: '🍎 فواكه',
    keywords: ['فاكهة', 'تفاح', 'برتقال', 'موز', 'عنب', 'ليمون', 'مانجو'],
  },
  drinks: {
    name: '🧃 مشروبات',
    keywords: ['عصير', 'شراب', 'ماء', 'قهوة', 'شاي', 'حليب', 'مشروب'],
  },
};

// State management
let currentCategory = null;
let currentSearchQuery = '';
let martyrtCart = {}; // Cart for Tayyar Mart
let currentSource = 'regular'; // 'tayyar-mart' or 'regular'

// ===== SESSION STORAGE =====
function saveMartSession() {
  sessionStorage.setItem('tayyar_mart_source', currentSource);
  sessionStorage.setItem('tayyar_mart_category', currentCategory);
  sessionStorage.setItem('tayyar_mart_cart', JSON.stringify(martyrtCart));
}

function loadMartSession() {
  currentSource = sessionStorage.getItem('tayyar_mart_source') || 'regular';
  currentCategory = sessionStorage.getItem('tayyar_mart_category');
  const saved = sessionStorage.getItem('tayyar_mart_cart');
  if (saved) {
    martyrtCart = JSON.parse(saved);
  }
}

// ===== NAVIGATION =====
function selectCategory(catId, catName) {
  goToCategory(catId, catName);
}

function goToCategory(catId, catName) {
  currentCategory = catId;
  currentSource = 'tayyar-mart';
  currentSearchQuery = '';
  
  // Hide home, show category
  document.getElementById('martHome').style.display = 'none';
  document.getElementById('martCategory').classList.add('active');
  
  // Update header
  document.getElementById('categoryTitle').textContent = catName;
  document.getElementById('categorySearch').value = '';
  
  // Render products for this category
  renderCategoryProducts(catId);
  
  saveMartSession();
}

function backToHome() {
  currentCategory = null;
  currentSource = 'regular';
  currentSearchQuery = '';
  
  document.getElementById('martHome').style.display = 'flex';
  document.getElementById('martCategory').classList.remove('active');
  
  saveMartSession();
}

// ===== PRODUCT FILTERING =====
function filterProductsByCategory(categoryId) {
  // Assuming MENU exists from data.js
  if (!window.MENU) return [];
  
  const categoryKeywords = CATEGORIES[categoryId].keywords;
  
  return MENU.filter(product => {
    const productName = (product.n || '').toLowerCase();
    const productDesc = (product.d || '').toLowerCase();
    
    return categoryKeywords.some(keyword => 
      productName.includes(keyword) || productDesc.includes(keyword)
    );
  });
}

function renderCategoryProducts(categoryId) {
  let products = filterProductsByCategory(categoryId);
  const container = document.getElementById('categoryProducts');
  const noResults = document.getElementById('noResults');
  
  // Apply search filter
  if (currentSearchQuery) {
    const q = currentSearchQuery.toLowerCase();
    products = products.filter(p => 
      (p.n || '').toLowerCase().includes(q) || 
      (p.d || '').toLowerCase().includes(q)
    );
  }
  
  if (products.length === 0) {
    container.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  
  noResults.style.display = 'none';
  container.innerHTML = products.map(p => {
    const qty = martyrtCart[p.id] || 0;
    const emoji = p.e || '🍔';
    
    return `
      <div class="product-card" id="martProd${p.id}">
        <div class="product-image">
          ${p.img ? `<img src="${p.img}" style="width:100%; height:100%; object-fit:cover;">` : emoji}
        </div>
        <div class="product-info">
          <div class="product-name">${p.n}</div>
          <div class="product-price">${p.p} ج.م</div>
          <div class="quantity-control">
            <button class="qty-btn" onclick="changeMartQty(${p.id}, -1)">−</button>
            <span class="qty-display" id="martQty${p.id}">${qty}</span>
            <button class="qty-btn" onclick="changeMartQty(${p.id}, 1)">+</button>
          </div>
          ${p.extras && p.extras.length > 0 && qty > 0 ? 
            `<div style="color:#e8742a; font-size:11px; margin-top:8px; text-align:center; cursor:pointer;" onclick="openMartExtrasModal(${p.id})">✏️ تعديل</div>` 
            : ''}
        </div>
      </div>
    `;
  }).join('');
  
  updateCheckoutBar();
}

// ===== QUANTITY MANAGEMENT =====
function changeMartQty(productId, change) {
  const product = MENU.find(p => p.id === productId);
  if (!product) return;
  
  const currentQty = martyrtCart[productId] || 0;
  const newQty = Math.max(0, currentQty + change);
  
  if (newQty === 0) {
    delete martyrtCart[productId];
  } else {
    martyrtCart[productId] = newQty;
  }
  
  document.getElementById(`martQty${productId}`).textContent = newQty;
  renderCategoryProducts(currentCategory);
  saveMartSession();
}

// ===== CHECKOUT BAR =====
function updateCheckoutBar() {
  const total = Object.entries(martyrtCart).reduce((sum, [id, qty]) => {
    const product = MENU.find(p => p.id === parseInt(id));
    return sum + (product ? product.p * qty : 0);
  }, 0);
  
  const count = Object.values(martyrtCart).reduce((sum, qty) => sum + qty, 0);
  const bar = document.getElementById('checkoutBar');
  
  if (count === 0) {
    bar.classList.remove('active');
  } else {
    bar.classList.add('active');
    document.getElementById('cartCount').textContent = `${count} منتج`;
    document.getElementById('cartPrice').textContent = `${total} ج.م`;
  }
}

// ===== SEARCH =====
function searchCategory(query) {
  currentSearchQuery = query.trim();
  renderCategoryProducts(currentCategory);
}

// ===== CHECKOUT PROCESS =====
function proceedToCheckout() {
  // Prepare order data with Tayyar Mart metadata
  const orderData = {
    cart: martyrtCart,
    source: 'tayyar-mart',
    category: currentCategory,
    timestamp: Date.now(),
  };
  
  // Save to sessionStorage for the checkout page
  sessionStorage.setItem('tayyar_mart_order', JSON.stringify(orderData));
  
  // Redirect to your existing checkout page (same as main app)
  window.location.href = './checkout.html?source=tayyar-mart&category=' + currentCategory;
  
  // Alternative: If using the same page, trigger your existing checkout logic:
  // triggerCheckout(orderData);
}

// ===== EXTRAS MODAL (Optional) =====
function openMartExtrasModal(productId) {
  const product = MENU.find(p => p.id === productId);
  if (!product || !product.extras || !product.extras.length) return;
  
  const modal = document.getElementById('extrasModal');
  const title = document.getElementById('extrasTitle');
  const list = document.getElementById('extrasList');
  
  title.textContent = `إضافات - ${product.n}`;
  list.innerHTML = product.extras.map((extra, idx) => `
    <div style="padding:10px; border-bottom:1px solid #eee; display:flex; justify-content:space-between; align-items:center;">
      <label>
        <input type="checkbox" id="extra${idx}" ${martyrtCart[`${productId}_extra_${idx}`] ? 'checked' : ''} 
               onchange="toggleExtra(${productId}, ${idx}, this.checked)">
        ${extra.name}
      </label>
      <span style="color:#e8742a; font-weight:700;">+${extra.price} ج.م</span>
    </div>
  `).join('');
  
  modal.style.display = 'block';
}

function toggleExtra(productId, extraIdx, checked) {
  const key = `${productId}_extra_${extraIdx}`;
  if (checked) {
    martyrtCart[key] = true;
  } else {
    delete martyrtCart[key];
  }
  saveMartSession();
}

function closeExtrasModal() {
  document.getElementById('extrasModal').style.display = 'none';
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  loadMartSession();
  
  // If coming from checkout confirmation, show success message
  const params = new URLSearchParams(window.location.search);
  if (params.get('status') === 'success') {
    alert('✅ تم استقبال طلبك بنجاح!');
    sessionStorage.removeItem('tayyar_mart_cart');
    sessionStorage.removeItem('tayyar_mart_category');
    martyrtCart = {};
    backToHome();
  }
});

// ===== INTEGRATION WITH EXISTING PAYMENT SYSTEM =====
// Use this function to integrate with your existing payment/checkout logic
function integrateWithExistingCheckout() {
  // Merge Tayyar Mart cart with main app cart (if needed)
  if (window.cart) {
    Object.assign(window.cart, martyrtCart);
  }
  
  // Set metadata for order tracking
  window.martyrtOrderSource = 'tayyar-mart';
  window.martyrtOrderCategory = currentCategory;
  
  // Trigger existing checkout
  if (window.proceedToCheckout) {
    window.proceedToCheckout();
  }
}

// Prevent closing modal by clicking outside
document.getElementById('extrasModal')?.addEventListener('click', function(e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
});

// ===== PERSISTENCE HELPERS =====
// Save cart before page unload
window.addEventListener('beforeunload', saveMartSession);

// ===== OPTIONAL: Add keyboard shortcuts =====
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && currentCategory) {
    backToHome();
  }
  if (e.key === 'Escape') {
    document.getElementById('extrasModal').style.display = 'none';
  }
});