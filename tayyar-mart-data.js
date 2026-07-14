// ===== TAYYAR MART DATA =====
// 🛒 طيار مارت - أقسام ومنتجات سوبر ماركت
// تم إضافتها: لإنشاء ميزة طيار مارت بدون التأثير على الـ restaurants الموجودة

// const MART_SECTIONS = [
  { id: 'bakery', name: '🥖 مخبوزات', icon: '🥖', color: '#d4a574' },
  { id: 'dairy', name: '🥛 ألبان', icon: '🥛', color: '#c9e4ed' },
  { id: 'beverages', name: '🥤 مشروبات', icon: '🥤', color: '#ff6b35' },
  { id: 'snacks', name: '🍪 سناكس', icon: '🍪', color: '#f4b183' },
  { id: 'groceries', name: '🥫 بقالة', icon: '🥫', color: '#8b7355' },
  { id: 'rice_pasta', name: '🍚 أرز ومكرونة', icon: '🍚', color: '#e8c4a0' },
  { id: 'spices', name: '🧂 توابل', icon: '🧂', color: '#cd5c5c' },
  { id: 'juices', name: '🧃 عصائر', icon: '🧃', color: '#ff8c42' },
  { id: 'eggs', name: '🥚 بيض', icon: '🥚', color: '#fff5a9' },
  { id: 'cheese', name: '🧈 أجبان', icon: '🧈', color: '#f9d5a8' },
  { id: 'cleaning', name: '🧼 منظفات', icon: '🧼', color: '#87ceeb' },
  { id: 'tissues', name: '🧻 ورقيات', icon: '🧻', color: '#dcdcdc' }
];

// const MART_PRODUCTS = [
  // 🥖 مخبوزات
  // { id: 'mart-1', section: 'bakery', brand: 'tayyar-mart', n: 'عيش بلدي', d: 'خبز بلدي طازج يومي', p: 1.5, e: '🥖' },
  // { id: 'mart-2', section: 'bakery', brand: 'tayyar-mart', n: 'توست أبيض', d: 'توست أبيض طري معروف', p: 8, e: '🍞' },
  // { id: 'mart-3', section: 'bakery', brand: 'tayyar-mart', n: 'فينو', d: 'خبز فينو فرنسي', p: 3.5, e: '🥖' },
  // { id: 'mart-4', section: 'bakery', brand: 'tayyar-mart', n: 'كيزر', d: 'خبز كيزر شهي', p: 2.5, e: '🥖' },
  // { id: 'mart-5', section: 'bakery', brand: 'tayyar-mart', n: 'كرواسون', d: 'كرواسون زبدة اصلي', p: 5, e: '🥐' },
  // { id: 'mart-6', section: 'bakery', brand: 'tayyar-mart', n: 'دونات', d: 'دونات مقرمشة بالشيكولاتة', p: 6, e: '🍩' },

  // // 🥛 ألبان
  // { id: 'mart-7', section: 'dairy', brand: 'tayyar-mart', n: 'لبن زبادي', d: 'زبادي طازج 500مل', p: 4.5, e: '🥛' },
  // { id: 'mart-8', section: 'dairy', brand: 'tayyar-mart', n: 'جبن أبيض', d: 'جبن أبيض دمياطي 500ج', p: 12, e: '🧀' },
  // { id: 'mart-9', section: 'dairy', brand: 'tayyar-mart', n: 'زبدة', d: 'زبدة طازجة 200ج', p: 8.5, e: '🧈' },
  // { id: 'mart-10', section: 'dairy', brand: 'tayyar-mart', n: 'كريمة طازجة', d: 'كريمة طازجة 200مل', p: 6, e: '🥛' },
  // { id: 'mart-11', section: 'dairy', brand: 'tayyar-mart', n: 'لبن بودرة', d: 'لبن بودرة كامل الدسم 900ج', p: 18, e: '🥛' },
  // { id: 'mart-12', section: 'dairy', brand: 'tayyar-mart', n: 'جبن رومي', d: 'جبن رومي أصلي 500ج', p: 15, e: '🧀' },

  // // 🥤 مشروبات
  // { id: 'mart-13', section: 'beverages', brand: 'tayyar-mart', n: 'مياه معدنية', d: 'مياه معدنية برطل 1.5 لتر', p: 2, e: '💧' },
  // { id: 'mart-14', section: 'beverages', brand: 'tayyar-mart', n: 'قهوة تركي', d: 'قهوة تركي أصلية 200ج', p: 12, e: '☕' },
  // { id: 'mart-15', section: 'beverages', brand: 'tayyar-mart', n: 'شاي أسود', d: 'شاي أسود درجة أولى 500ج', p: 10, e: '🍵' },
  // { id: 'mart-16', section: 'beverages', brand: 'tayyar-mart', n: 'عصير برتقال', d: 'عصير برتقال طازج 1 لتر', p: 5, e: '🧃' },
  // { id: 'mart-17', section: 'beverages', brand: 'tayyar-mart', n: 'كاكاو', d: 'كاكاو بودرة 250ج', p: 8, e: '🍫' },
  // { id: 'mart-18', section: 'beverages', brand: 'tayyar-mart', n: 'حليب طازج', d: 'حليب طازج 1 لتر', p: 4.5, e: '🥛' },

  // // 🍪 سناكس
  // { id: 'mart-19', section: 'snacks', brand: 'tayyar-mart', n: 'شيبس', d: 'شيبس مشكل 150ج', p: 4, e: '🍟' },
  // { id: 'mart-20', section: 'snacks', brand: 'tayyar-mart', n: 'بسكويت', d: 'بسكويت حلو مشكل 400ج', p: 6, e: '🍪' },
  // { id: 'mart-21', section: 'snacks', brand: 'tayyar-mart', n: 'فشار', d: 'فشار بالزبدة والملح 100ج', p: 3.5, e: '🍿' },
  // { id: 'mart-22', section: 'snacks', brand: 'tayyar-mart', n: 'شوكولاتة', d: 'شوكولاتة أصلية 50ج', p: 5, e: '🍫' },
  // { id: 'mart-23', section: 'snacks', brand: 'tayyar-mart', n: 'حلويات', d: 'حلويات مصرية مشكلة', p: 8, e: '🍬' },
  // { id: 'mart-24', section: 'snacks', brand: 'tayyar-mart', n: 'فول سوداني', d: 'فول سوداني محمص 200ج', p: 6, e: '🥜' },

  // // 🥫 بقالة
  // { id: 'mart-25', section: 'groceries', brand: 'tayyar-mart', n: 'زيت زيتون', d: 'زيت زيتون درجة أولى لتر', p: 25, e: '🫒' },
  // { id: 'mart-26', section: 'groceries', brand: 'tayyar-mart', n: 'ملح', d: 'ملح ناعم كيس 1 كج', p: 1.5, e: '🧂' },
  // { id: 'mart-27', section: 'groceries', brand: 'tayyar-mart', n: 'سكر', d: 'سكر أبيض كيس 1 كج', p: 5, e: '🍯' },
  // { id: 'mart-28', section: 'groceries', brand: 'tayyar-mart', n: 'دقيق', d: 'دقيق أبيض درجة أولى كيس 1 كج', p: 4, e: '🌾' },
  // { id: 'mart-29', section: 'groceries', brand: 'tayyar-mart', n: 'عسل', d: 'عسل نحل صافي طبيعي برطل 500ج', p: 30, e: '🍯' },
  // { id: 'mart-30', section: 'groceries', brand: 'tayyar-mart', n: 'مايونيز', d: 'مايونيز 400ج', p: 6, e: '🧅' },

  // // 🍚 أرز ومكرونة
  // { id: 'mart-31', section: 'rice_pasta', brand: 'tayyar-mart', n: 'أرز أبيض', d: 'أرز أبيض مصري كج', p: 8, e: '🍚' },
  // { id: 'mart-32', section: 'rice_pasta', brand: 'tayyar-mart', n: 'أرز بسمتي', d: 'أرز بسمتي هندي كج', p: 15, e: '🍚' },
  // { id: 'mart-33', section: 'rice_pasta', brand: 'tayyar-mart', n: 'مكرونة', d: 'مكرونة رفيعة 500ج', p: 3.5, e: '🍝' },
  // { id: 'mart-34', section: 'rice_pasta', brand: 'tayyar-mart', n: 'كسكسي', d: 'كسكسي مصري 500ج', p: 4, e: '🍚' },
  // { id: 'mart-35', section: 'rice_pasta', brand: 'tayyar-mart', n: 'عدس', d: 'عدس أحمر 500ج', p: 5, e: '🍲' },
  // { id: 'mart-36', section: 'rice_pasta', brand: 'tayyar-mart', n: 'فاصوليا', d: 'فاصوليا بيضاء معلبة 400ج', p: 3, e: '🍲' },

  // // 🧂 توابل
  // { id: 'mart-37', section: 'spices', brand: 'tayyar-mart', n: 'فلفل أسود', d: 'فلفل أسود مطحون 50ج', p: 6, e: '🧂' },
  // { id: 'mart-38', section: 'spices', brand: 'tayyar-mart', n: 'قرفة', d: 'قرفة مطحونة 50ج', p: 5, e: '🧂' },
  // { id: 'mart-39', section: 'spices', brand: 'tayyar-mart', n: 'كمون', d: 'كمون مطحون 50ج', p: 4, e: '🧂' },
  // { id: 'mart-40', section: 'spices', brand: 'tayyar-mart', n: 'كركم', d: 'كركم مطحون 50ج', p: 4.5, e: '🧂' },
  // { id: 'mart-41', section: 'spices', brand: 'tayyar-mart', n: 'ثوم بودرة', d: 'ثوم بودرة 50ج', p: 3.5, e: '🧂' },
  // { id: 'mart-42', section: 'spices', brand: 'tayyar-mart', n: 'بهارات مشكلة', d: 'بهارات مصرية مشكلة 100ج', p: 6, e: '🧂' },

  // // 🧃 عصائر
  // { id: 'mart-43', section: 'juices', brand: 'tayyar-mart', n: 'عصير فراولة', d: 'عصير فراولة 1 لتر', p: 6, e: '🍓' },
  // { id: 'mart-44', section: 'juices', brand: 'tayyar-mart', n: 'عصير رمان', d: 'عصير رمان طازج 1 لتر', p: 7, e: '🍉' },
  // { id: 'mart-45', section: 'juices', brand: 'tayyar-mart', n: 'عصير ليمون', d: 'عصير ليمون طازج 1 لتر', p: 5.5, e: '🍋' },
  // { id: 'mart-46', section: 'juices', brand: 'tayyar-mart', n: 'عصير جزر', d: 'عصير جزر طازج 500مل', p: 4, e: '🥕' },
  // { id: 'mart-47', section: 'juices', brand: 'tayyar-mart', n: 'عصير توت', d: 'عصير توت مشكل 1 لتر', p: 6.5, e: '🫐' },
  // { id: 'mart-48', section: 'juices', brand: 'tayyar-mart', n: 'عصير مانجو', d: 'عصير مانجو طازج 1 لتر', p: 7, e: '🥭' },

  // // 🥚 بيض
  // { id: 'mart-49', section: 'eggs', brand: 'tayyar-mart', n: 'بيض دجاج', d: 'بيض دجاج بلدي طازج 12 حبة', p: 9, e: '🥚' },
  // { id: 'mart-50', section: 'eggs', brand: 'tayyar-mart', n: 'بيض براون', d: 'بيض براون عالي الجودة 12 حبة', p: 10, e: '🥚' },
  // { id: 'mart-51', section: 'eggs', brand: 'tayyar-mart', n: 'بيض الكوارع', d: 'بيض الكوارع طازج جداً 12 حبة', p: 12, e: '🥚' },
  // { id: 'mart-52', section: 'eggs', brand: 'tayyar-mart', n: 'بيض سمان', d: 'بيض سمان صغير طازج 30 حبة', p: 15, e: '🥚' },
  // { id: 'mart-53', section: 'eggs', brand: 'tayyar-mart', n: 'مح البيض', d: 'مح البيض المجفف 200ج', p: 20, e: '🥚' },
  // { id: 'mart-54', section: 'eggs', brand: 'tayyar-mart', n: 'بياض البيض', d: 'بياض البيض المجفف 100ج', p: 18, e: '🥚' },

  // // 🧈 أجبان
  // { id: 'mart-55', section: 'cheese', brand: 'tayyar-mart', n: 'جبن فيتا', d: 'جبن فيتا بيضاء 400ج', p: 16, e: '🧀' },
  // { id: 'mart-56', section: 'cheese', brand: 'tayyar-mart', n: 'جبن موتزاريلا', d: 'جبن موتزاريلا مبشور 500ج', p: 14, e: '🧀' },
  // { id: 'mart-57', section: 'cheese', brand: 'tayyar-mart', n: 'جبن سمسم', d: 'جبن سمسم مصري 400ج', p: 12, e: '🧀' },
  // { id: 'mart-58', section: 'cheese', brand: 'tayyar-mart', n: 'جبن كريم', d: 'جبن كريم لين 200ج', p: 10, e: '🧀' },
  // { id: 'mart-59', section: 'cheese', brand: 'tayyar-mart', n: 'جبن بارميزان', d: 'جبن بارميزان مبشور 200ج', p: 18, e: '🧀' },
  // { id: 'mart-60', section: 'cheese', brand: 'tayyar-mart', n: 'جبن اسطنبولي', d: 'جبن اسطنبولي مقطع 400ج', p: 13, e: '🧀' },

  // // 🧼 منظفات
  // { id: 'mart-61', section: 'cleaning', brand: 'tayyar-mart', n: 'مسحوق غسيل', d: 'مسحوق غسيل أصلي 1 كج', p: 12, e: '🧼' },
  // { id: 'mart-62', section: 'cleaning', brand: 'tayyar-mart', n: 'سائل غسيل', d: 'سائل غسيل الأطباق 500مل', p: 5, e: '🧼' },
  // { id: 'mart-63', section: 'cleaning', brand: 'tayyar-mart', n: 'معطر الجو', d: 'معطر جو طبيعي 300مل', p: 8, e: '🧼' },
  // { id: 'mart-64', section: 'cleaning', brand: 'tayyar-mart', n: 'مطهر', d: 'مطهر معقم 500مل', p: 6, e: '🧼' },
  // { id: 'mart-65', section: 'cleaning', brand: 'tayyar-mart', n: 'مسح الأرضيات', d: 'سائل تنظيف الأرضيات 1 لتر', p: 7, e: '🧼' },
  // { id: 'mart-66', section: 'cleaning', brand: 'tayyar-mart', n: 'صابون سائل', d: 'صابون سائل اليدين 400مل', p: 4, e: '🧼' },

  // // 🧻 ورقيات
  // { id: 'mart-67', section: 'tissues', brand: 'tayyar-mart', n: 'ورق تواليت', d: 'ورق تواليت 12 رولة', p: 8, e: '🧻' },
  // { id: 'mart-68', section: 'tissues', brand: 'tayyar-mart', n: 'مناديل ورقية', d: 'مناديل ورقية 100 عدد', p: 5, e: '🧻' },
  // { id: 'mart-69', section: 'tissues', brand: 'tayyar-mart', n: 'فوط ورقية', d: 'فوط ورقية سميكة 500 عدد', p: 6, e: '🧻' },
  // { id: 'mart-70', section: 'tissues', brand: 'tayyar-mart', n: 'كيس قمامة', d: 'أكياس قمامة قوية 30 عدد', p: 4, e: '🧻' },
  // { id: 'mart-71', section: 'tissues', brand: 'tayyar-mart', n: 'علب ورقية', d: 'علب ورقية جودة عالية 20 عدد', p: 7, e: '🧻' },
  // { id: 'mart-72', section: 'tissues', brand: 'tayyar-mart', n: 'فلاتر قهوة', d: 'فلاتر قهوة ورقي 100 عدد', p: 3, e: '🧻' }
];