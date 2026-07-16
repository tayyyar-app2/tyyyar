// ===== CHECKOUT PAGE - TAYYAR MART INTEGRATION =====
// Add this code to your existing checkout.html or checkout.js

const API_KEY = 'AIzaSyCK2h_v0wakqVhQJ0c-wUG1zAvR7creNU8';
const PROJECT_ID = 'tayyyar1';
const FIRESTORE_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;

// ===== DETECT TAYYAR MART ORDER =====
function detectMartOrder() {
  const params = new URLSearchParams(window.location.search);
  const martSource = params.get('source');
  const martCategory = params.get('category');
  const martOrderData = sessionStorage.getItem('tayyar_mart_order');
  
  return {
    isMart: martSource === 'tayyar-mart',
    category: martCategory,
    data: martOrderData ? JSON.parse(martOrderData) : null
  };
}

// ===== PREPARE ORDER FOR FIRESTORE =====
function prepareMartOrderData(orderDetails) {
  const martInfo = detectMartOrder();
  
  // Basic order structure (same as regular orders)
  const orderData = {
    // User info (from checkout form)
    customerName: orderDetails.name,
    customerPhone: orderDetails.phone,
    customerAddress: orderDetails.address,
    
    // Cart info
    items: orderDetails.items,
    subtotal: orderDetails.subtotal,
    deliveryFee: orderDetails.deliveryFee,
    total: orderDetails.total,
    
    // Store location/branch
    branchId: orderDetails.branchId || 'main',
    
    // Payment method
    paymentMethod: orderDetails.paymentMethod, // 'cash', 'card', etc.
    
    // Timestamps
    createdAt: new Date().toISOString(),
    orderTime: Timestamp.now(),
    
    // Status
    status: 'pending',
    
    // ===== TAYYAR MART SPECIFIC FIELDS =====
    ...(martInfo.isMart && {
      source: 'tayyar-mart',           // Mark as from Tayyar Mart
      isMart: true,                    // Boolean flag
      martCategory: martInfo.category, // Which category (dairy, baked, etc.)
      martTimestamp: martInfo.data?.timestamp,
      
      // This helps filtering orders:
      // Query: where('source', '==', 'tayyar-mart')
      // Query: where('martCategory', '==', 'dairy')
    }),
  };
  
  return orderData;
}

// ===== SAVE ORDER TO FIRESTORE (WITH MART TRACKING) =====
async function saveMartOrderToFirestore(orderData) {
  try {
    const docPath = `orders/${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const response = await fetch(`${FIRESTORE_URL}/${docPath}?key=${API_KEY}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: convertToFirestoreFormat(orderData)
      })
    });
    
    if (!response.ok) {
      throw new Error(`Firebase error: ${response.status}`);
    }
    
    const result = await response.json();
    return result;
    
  } catch (error) {
    console.error('Error saving order:', error);
    throw error;
  }
}

// ===== FIRESTORE FORMAT CONVERTER =====
function convertToFirestoreFormat(data) {
  const fields = {};
  
  for (const [key, value] of Object.entries(data)) {
    fields[key] = convertValue(value);
  }
  
  return fields;
}

function convertValue(value) {
  if (value === null) return { nullValue: null };
  if (typeof value === 'boolean') return { booleanValue: value };
  if (typeof value === 'number') return { doubleValue: value };
  if (typeof value === 'string') return { stringValue: value };
  if (Array.isArray(value)) {
    return {
      arrayValue: {
        values: value.map(v => convertValue(v))
      }
    };
  }
  if (typeof value === 'object') {
    return {
      mapValue: {
        fields: convertToFirestoreFormat(value)
      }
    };
  }
  return { stringValue: String(value) };
}

// ===== PROCESS MART ORDER =====
async function processMartCheckout() {
  const martInfo = detectMartOrder();
  
  if (!martInfo.isMart) {
    // Regular order processing - use your existing logic
    return processRegularCheckout();
  }
  
  // Tayyar Mart order processing
  console.log('Processing Tayyar Mart Order:', martInfo);
  
  try {
    // Get order details from form
    const orderDetails = getOrderDetailsFromForm();
    
    // Prepare order data with Mart metadata
    const orderData = prepareMartOrderData(orderDetails);
    
    // Show loading indicator
    showLoadingIndicator(true);
    
    // Save to Firestore
    const savedOrder = await saveMartOrderToFirestore(orderData);
    
    // Handle payment (same as regular orders)
    if (orderData.paymentMethod === 'card') {
      await handleCardPayment(orderData);
    }
    
    // Clear session data
    sessionStorage.removeItem('tayyar_mart_order');
    sessionStorage.removeItem('tayyar_mart_cart');
    
    // Show success message
    showOrderConfirmation(savedOrder, martInfo.category);
    
    // Redirect after 3 seconds
    setTimeout(() => {
      window.location.href = 'tayyar-mart.html?status=success';
    }, 3000);
    
  } catch (error) {
    showError('حدث خطأ: ' + error.message);
    console.error('Checkout error:', error);
  }
}

// ===== GET ORDER DETAILS FROM CHECKOUT FORM =====
function getOrderDetailsFromForm() {
  // Modify based on your actual form fields
  const martOrder = JSON.parse(sessionStorage.getItem('tayyar_mart_order') || '{}');
  
  const items = Object.entries(martOrder.cart || {}).map(([productId, quantity]) => {
    // Find product from MENU
    const product = MENU?.find(p => p.id === parseInt(productId));
    
    return {
      productId: parseInt(productId),
      productName: product?.n || 'Unknown',
      price: product?.p || 0,
      quantity: quantity,
      subtotal: (product?.p || 0) * quantity,
    };
  });
  
  const subtotal = items.reduce((sum, item) => sum + item.subtotal, 0);
  const deliveryFee = 15; // Replace with actual delivery fee calculation
  
  return {
    name: document.getElementById('customer-name')?.value || '',
    phone: document.getElementById('customer-phone')?.value || '',
    address: document.getElementById('customer-address')?.value || '',
    items: items,
    subtotal: subtotal,
    deliveryFee: deliveryFee,
    total: subtotal + deliveryFee + SERVICE_FEE,
    paymentMethod: document.querySelector('input[name="payment"]:checked')?.value || 'cash',
    branchId: getCurrentBranch?.() || 'main',
  };
}

// ===== SHOW ORDER CONFIRMATION (MART SPECIFIC) =====
function showOrderConfirmation(savedOrder, category) {
  const confirmation = document.getElementById('confirmation-modal') || createConfirmationModal();
  
  confirmation.innerHTML = `
    <div style="text-align: center; padding: 30px;">
      <h2 style="color: #e8742a; margin-bottom: 10px;">✅ تم استقبال طلبك</h2>
      <p>شكراً لتسوقك من طيار مارت</p>
      <div style="background: #f5f5f5; padding: 15px; border-radius: 10px; margin: 20px 0;">
        <p><strong>الفئة:</strong> ${getCategoryName(category)}</p>
        <p><strong>رقم الطلب:</strong> ${savedOrder.name?.split('/').pop() || 'N/A'}</p>
        <p><strong>الحالة:</strong> قيد المعالجة</p>
      </div>
      <p style="color: #999; font-size: 14px;">جاري إعادة التوجيه...</p>
    </div>
  `;
  
  confirmation.style.display = 'block';
}

// ===== HELPER FUNCTIONS =====
function getCategoryName(catId) {
  const names = {
    baked: '🍞 مخبوزات',
    dairy: '🥛 ألبان',
    groceries: '🛍️ بقالة',
    vegetables: '🥬 خضروات',
    fruits: '🍎 فواكه',
    drinks: '🧃 مشروبات'
  };
  return names[catId] || catId;
}

function showLoadingIndicator(show) {
  const loader = document.getElementById('checkout-loader');
  if (loader) {
    loader.style.display = show ? 'flex' : 'none';
  }
}

function showError(message) {
  const errorDiv = document.getElementById('error-message');
  if (errorDiv) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
  } else {
    alert(message);
  }
}

function createConfirmationModal() {
  const modal = document.createElement('div');
  modal.id = 'confirmation-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: none;
    z-index: 1000;
    align-items: center;
    justify-content: center;
  `;
  
  const content = document.createElement('div');
  content.style.cssText = `
    background: white;
    border-radius: 15px;
    max-width: 400px;
    width: 90%;
  `;
  
  modal.appendChild(content);
  document.body.appendChild(modal);
  
  return content;
}

// ===== ADMIN PANEL QUERY HELPERS =====
// Use these to query Tayyar Mart orders in your admin panel

/**
 * Query all Tayyar Mart orders
 * Firebase Query: where('source', '==', 'tayyar-mart')
 */
function getAllMartOrders() {
  return queryFirestore('orders', [
    { field: 'source', operator: '==', value: 'tayyar-mart' }
  ]);
}

/**
 * Query Tayyar Mart orders by category
 * Firebase Query: where('martCategory', '==', 'dairy')
 */
function getMartOrdersByCategory(category) {
  return queryFirestore('orders', [
    { field: 'source', operator: '==', value: 'tayyar-mart' },
    { field: 'martCategory', operator: '==', value: category }
  ]);
}

/**
 * Query Tayyar Mart orders by time range
 * Firebase Query: where('source', '==', 'tayyar-mart') 
 *                AND where('createdAt', '>=', startDate)
 */
function getMartOrdersByDate(startDate, endDate) {
  return queryFirestore('orders', [
    { field: 'source', operator: '==', value: 'tayyar-mart' },
    { field: 'createdAt', operator: '>=', value: startDate },
    { field: 'createdAt', operator: '<=', value: endDate }
  ]);
}

/**
 * Get statistics for Tayyar Mart orders
 */
async function getMartOrderStats() {
  try {
    const orders = await getAllMartOrders();
    
    const stats = {
      totalOrders: orders.length,
      totalRevenue: 0,
      byCategory: {},
      todayOrders: 0,
      weekOrders: 0
    };
    
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    orders.forEach(order => {
      // Revenue calculation
      stats.totalRevenue += order.total || 0;
      
      // By category
      const cat = order.martCategory || 'unknown';
      stats.byCategory[cat] = (stats.byCategory[cat] || 0) + 1;
      
      // Today's orders
      const orderDate = new Date(order.createdAt);
      if (orderDate >= today) {
        stats.todayOrders++;
      }
      
      // This week
      if (orderDate >= weekAgo) {
        stats.weekOrders++;
      }
    });
    
    return stats;
    
  } catch (error) {
    console.error('Stats error:', error);
    return null;
  }
}

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', function() {
  const martInfo = detectMartOrder();
  
  if (martInfo.isMart) {
    console.log('🛒 Tayyar Mart Order Detected');
    console.log('Category:', martInfo.category);
    
    // Update UI to show it's a Mart order
    const badge = document.createElement('div');
    badge.style.cssText = `
      position: fixed;
      top: 10px;
      left: 10px;
      background: #e8742a;
      color: white;
      padding: 8px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 700;
      z-index: 999;
    `;
    badge.textContent = '🛒 طيار مارت';
    document.body.appendChild(badge);
  }
});

// ===== EXPORT FOR USE =====
window.MartCheckout = {
  process: processMartCheckout,
  detect: detectMartOrder,
  prepareData: prepareMartOrderData,
  save: saveMartOrderToFirestore,
  getStats: getMartOrderStats,
  getByCategory: getMartOrdersByCategory,
};