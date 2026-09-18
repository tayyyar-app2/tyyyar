// ===== FIREBASE CONFIG =====
const firebaseConfig = {
  apiKey: "AIzaSyCK2h_v0wakqVhQJ0c-wUG1zAvR7creNU8",
  authDomain: "tayyyar1.firebaseapp.com",
  databaseURL: "https://tayyyar1-default-rtdb.firebaseio.com",
  projectId: "tayyyar1",
  storageBucket: "tayyyar1.firebasestorage.app",
  messagingSenderId: "70856677601",
  appId: "1:70856677601:web:ce680d59bc37339b2dbfa0"
};

// ===== WAIT FOR FIREBASE =====
let db = null;
let firebaseReady = false;

function waitForFirebase() {
  return new Promise((resolve) => {
    const checkInterval = setInterval(() => {
      if (typeof firebase !== 'undefined' && firebase.apps && firebase.apps.length > 0) {
        if (!db) {
          try {
            db = firebase.firestore();
            firebaseReady = true;
            console.log('✅ Firebase is ready!');
            clearInterval(checkInterval);
            resolve(true);
          } catch (e) {
            console.log('⏳ Waiting for Firebase...');
          }
        }
      }
    }, 100);
    
    setTimeout(() => {
      clearInterval(checkInterval);
      resolve(false);
    }, 5000);
  });
}

// Initialize Firebase if not already done
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  waitForFirebase();
}

// ===== VALIDATION =====
function validatePhone(phone) {
  return /^01[0125]\d{8}$/.test(phone);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateName(name) {
  return name.trim().length >= 3;
}

// ===== SHOW/HIDE MESSAGES =====
function showError(inputId, message) {
  const errorEl = document.getElementById(inputId + 'Error');
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.style.display = 'block';
  }
}

function clearErrors() {
  const phoneError = document.getElementById('phoneError');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  
  if (phoneError) phoneError.style.display = 'none';
  if (nameError) nameError.style.display = 'none';
  if (emailError) emailError.style.display = 'none';
}

// ===== VALIDATE FORM =====
function validateLoginForm() {
  clearErrors();
  let isValid = true;
  
  const phone = document.getElementById('phoneInput').value;
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;

  if (!phone.trim()) {
    showError('phone', 'الرجاء إدخال رقم التليفون');
    isValid = false;
  } else if (!validatePhone(phone)) {
    showError('phone', 'رقم التليفون غير صحيح (01X12345678)');
    isValid = false;
  }

  if (!name.trim()) {
    showError('name', 'الرجاء إدخال الاسم');
    isValid = false;
  } else if (!validateName(name)) {
    showError('name', 'الاسم يجب أن يكون 3 أحرف على الأقل');
    isValid = false;
  }

  if (!email.trim()) {
    showError('email', 'الرجاء إدخال البريد الإلكتروني');
    isValid = false;
  } else if (!validateEmail(email)) {
    showError('email', 'البريد الإلكتروني غير صحيح');
    isValid = false;
  }

  return isValid;
}

// ===== SAVE USER =====
async function registerUser() {
  if (!validateLoginForm()) return;

  // Try to get db again
  if (!db && typeof firebase !== 'undefined' && firebase.apps && firebase.apps.length > 0) {
    try {
      db = firebase.firestore();
    } catch (e) {
      console.error('Cannot initialize db:', e);
    }
  }

  if (!db) {
    showError('phone', 'جاري تحميل النظام، حاول مرة أخرى...');
    return;
  }

  const registerBtn = document.getElementById('registerBtn');
  const loadingMsg = document.getElementById('loadingMsg');
  const successMsg = document.getElementById('successMsg');

  registerBtn.disabled = true;
  loadingMsg.style.display = 'block';
  successMsg.style.display = 'none';

  const phone = document.getElementById('phoneInput').value;
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;

  try {
    const userData = {
      phone: phone,
      name: name,
      email: email,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Save to Firestore
    await db.collection('users').doc(phone).set(userData);

    // Save to localStorage
    localStorage.setItem('tayyarUser', JSON.stringify(userData));
    localStorage.setItem('tayyarUserPhone', phone);

    successMsg.style.display = 'block';

    setTimeout(() => {
      loadingMsg.style.display = 'none';
      goToApp();
    }, 1000);

  } catch (error) {
    console.error('Error:', error);
    showError('phone', 'حدث خطأ: ' + error.message);
    registerBtn.disabled = false;
    loadingMsg.style.display = 'none';
  }
}

// ===== CHECK USER ON PAGE LOAD =====
function checkUserLogin() {
  const savedUser = localStorage.getItem('tayyarUser');
  const loginPage = document.getElementById('loginPage');
  const mainApp = document.getElementById('mainApp');

  if (savedUser) {
    if (loginPage) loginPage.style.display = 'none';
    if (mainApp) mainApp.style.display = 'block';
  } else {
    if (loginPage) loginPage.style.display = 'block';
    if (mainApp) mainApp.style.display = 'none';
  }
}

// ===== GO TO APP =====
function goToApp() {
  const loginPage = document.getElementById('loginPage');
  const mainApp = document.getElementById('mainApp');

  if (loginPage) loginPage.style.display = 'none';
  if (mainApp) mainApp.style.display = 'block';

  // Clear form
  document.getElementById('phoneInput').value = '';
  document.getElementById('nameInput').value = '';
  document.getElementById('emailInput').value = '';
}

// ===== LOGOUT =====
function logoutUser() {
  localStorage.removeItem('tayyarUser');
  localStorage.removeItem('tayyarUserPhone');

  const loginPage = document.getElementById('loginPage');
  const mainApp = document.getElementById('mainApp');

  if (loginPage) loginPage.style.display = 'block';
  if (mainApp) mainApp.style.display = 'none';

  // Clear form
  document.getElementById('phoneInput').value = '';
  document.getElementById('nameInput').value = '';
  document.getElementById('emailInput').value = '';
  clearErrors();
}

// ===== RUN ON PAGE LOAD =====
window.addEventListener('DOMContentLoaded', checkUserLogin);