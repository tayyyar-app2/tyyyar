const RESTAURANT_SCHEDULE = {
  'Bazooka':            { open: '11:00', close: '2:00' },
  'Karam El Sham':      { open: '11:00', close: '2:00' },
  'B Laban':            { open: '11:00', close: '2:00' },
  'Wahmy Burger':       { open: '11:00', close: '2:00' },
  'Koshary Al Khedewy': { open: '11:00', close: '2:00' },
  'Hawawshi Al Refaie': { open: '11:00', close: '2:00' },
  'Saadaawy Burger':    { open: '11:00', close: '2:00' },
  'Krebs':              { open: '11:00', close: '2:00' },
  'Sliceno':            { open: '11:00', close: '2:00' },
  'Fan w Tarab':        { open: '11:00', close: '2:00' },
  'Chicken Factor':     { open: '11:00', close: '2:00' },
  'El-Thawra':          { open: '11:00', close: '2:00' },

};

function isOpen(brandKey) {
  try {
    const fc = JSON.parse(localStorage.getItem('tyr_force')||'{}');
    if (fc[brandKey]) return false;
    const sc = JSON.parse(localStorage.getItem('tyr_schedule')||'{}');
    if (sc[brandKey]) {
      RESTAURANT_SCHEDULE[brandKey] = sc[brandKey];
    }
  } catch(e) {}
  const schedule = RESTAURANT_SCHEDULE[brandKey];
  if (!schedule) return false;

  function toMins(timeStr) {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
  }

  const now     = new Date();
  const current = now.getHours() * 60 + now.getMinutes();

  const openTime  = toMins(schedule.open);
  let   closeTime = toMins(schedule.close);

  // 3 الصبح أصغر من 10 الصبح = بيتعدى منتصف الليل
  if (closeTime < openTime) closeTime += 24 * 60;

  let adjustedCurrent = current;
  if (current < openTime) adjustedCurrent += 24 * 60;

  return adjustedCurrent >= openTime && adjustedCurrent < closeTime;
}
const WA='201277092892', PAY_NUM='01024130987';
const BL={'Bazooka':'بازوكا','Karam El Sham':'كرام الشام','B Laban':'B لبن','Wahmy Burger':'وهمي برجر','Koshary Al Khedewy':'كشري الخديوي','Hawawshi Al Refaie':'حواوشي الرفاعي','Saadaawy Burger':'سعداوي برجر','Krebs':'كريبز','Sliceno':'سلايزينو','Fan w Tarab':'فن وطرب','Chicken Factor':'تشيكن فاكتور','El-Thawra':'الثورة',};
const BRANDS=['Bazooka','Karam El Sham','B Laban','Wahmy Burger','Koshary Al Khedewy','Hawawshi Al Refaie','Saadaawy Burger','Krebs','Sliceno','Fan w Tarab','Chicken Factor','El-Thawra',];

const MENU=[
  { id: 1, brand: 'Bazooka', n: 'بازوكا جولدن سنايبر بوكس', d: '3قطع فرايد تشيكن بدون اجنحه . باكيت فرايز . كلوسلو وسط . 1مشروب . خبز', p: 265, img: './img/جولد سنيبر.jpeg' },
  { id: 2, brand: 'Bazooka', n: 'بازوكا جولدن فاريتى لارج', d: '3قطع فرايد تشيكن بدون اجنحه . 2 قطعه كرسبي ستربس . فرايز . كلوسلو وسط .مشروب . عيش', p: 315, img: './img/جولد سنيبر.jpeg' },
  { id: 3, brand: 'Bazooka', n: 'بازوكا جولدن لارج', d: '2قطعه فرايد تشيكن بدون اجنحه . 2 قطعه كرسبي ستربس . فرايز . كلوسلو وسط .مشروب. عيش', p: 265, img: './img/جولد لارج.jpeg' },
  { id: 4, brand: 'Bazooka', n: 'بازوكا جولدن سناك بوكس', d: '2 قطع فرايد تشيكن بدون اجنحه . باكيت فرايز . كلوسلو وسط . 1 مشروب . عيش', p: 185, img: './img/سناك بوكس.jpeg' },
  { id: 5, brand: 'Bazooka', n: 'بازوكا جولدن بوكس', d: '4 قطع فرايد تشيكن بدون اجنحه . باكيت فرايز . كلوسلو وسط . 1 مشروب. عيش.', p: 315, img: './img/بزوكا سنيبر.jpeg' },
  { id: 6, brand: 'Bazooka', n: 'بازوكا كينج بوكس', d: 'ساندوتش سنجل,واحد قطعه دجاج يقدم مع بطاطس مقليه وكول سلو ومشروب', p: 265, img: './img/جولد سنيبر.jpeg' },
  { id: 7, brand: 'Bazooka', n: 'بازوكا راب بوكس', d: 'ساندوتش راب سبايسي او اوريجنال+قطعه دجاج+كلو سلو وسط+فرايز وسط+1مشروب', p: 240, img: './img/‏‏راب بوكس - نسخة.jpeg' },
  { id: 8, brand: 'Bazooka', n: 'بازوكا اكستريم بوكس', d: '3 قطع فرايد تشيكن بدون اجنحه + 1ريزو + سلطة كول سلو مديم + مشروب', p: 305, img: './img/اكسترم بوكس.jpeg' },
  { id: 9, brand: 'Bazooka', n: 'وجبة مسحب 7قطع', d: '7قطع تشيكن مسحب . 2صوص . 1عيش . فرايز', p: 195, img: './img/‏‏مسحب 7 قطع - نسخة.jpeg' },
  { id: 10, brand: 'Bazooka', n: 'وجبة مسحب 10قطع', d: '10قطع تشيكن مسحب . 2صوص . 2عيش . فرايز', p: 230, img: './img/‏‏مسحب 7 قطع - نسخة.jpeg' },
  { id: 11, brand: 'Bazooka', n: 'وجبة مسحب 14قطع', d: '14قطع تشيكن مسحب . 2صوص . 2عيش . فرايز', p: 305, img: './img/‏‏مسحب 7 قطع - نسخة.jpeg' },
  { id: 12, brand: 'Bazooka', n: 'بازوكا سناك بوكس', d: '2 قطع فرايد تشيكن بدون اجنحه + فرايز + عيش', p: 145, img: './img/سناك بوكس.jpeg' },
  { id: 13, brand: 'Bazooka', n: 'بازوكا سنايبر', d: '3قطع فرايد تشيكن بدون اجنحه . فرايز . كلو سلو وسط . عيش', p: 230, img: './img/‏‏جولد سنيبر - نسخة.jpeg' },
  { id: 14, brand: 'Bazooka', n: 'بازوكا كرسبي استربس', d: '3قطعه كرسبي ستربس . فرايز . كلو سلو. عيش', p: 165, img: './img/‏‏جولد سنيبر - نسخة.jpeg' },
  { id: 15, brand: 'Bazooka', n: 'بازوكا سوبركرسبي استربس', d: '5قطعه كرسبي ستربس . فرايز . كلو سلو وسط . عيش', p: 255, img: './img/سوبر استربس.jpeg' },
  { id: 16, brand: 'Bazooka', n: 'وجبة اطفال', d: 'قطعة دجاج 2قطع استربس او 4قطع مسحب مع فرايز ومشروب ولعبة', p: 155, img: './img/اطفال.jpeg' },
  { id: 17, brand: 'Bazooka', n: 'وجبة اطفال بدون لعبة', d: 'او ساندوتش تشيكن او قطعه مسحب او قطعه دجاج ساندوتش برجر مع فرايز ومشروب.', p: 125, img: './img/اطفال.jpeg' },
  { id: 18, brand: 'Bazooka', n: 'وجبة بازوكا 6قطع', d: '6 قطع فرايد تشيكن بدون اجنحه + بطاطس عائلية + 2 كولسلو وسط + لتر مشروب + 3 خبز', p: 490, img: './img/اول 5.jpeg' },
  { id: 19, brand: 'Bazooka', n: 'وجبة بازوكا 9قطع', d: '9قطع فرايد تشيكن بدون اجنحه + بطاطس عائلية + 4 كولسلو وسط + لتر مشروب + 4 خبز', p: 705, img: './img/اول 5.jpeg' },
  { id: 20, brand: 'Bazooka', n: 'وجبة بازوكا 12قطع', d: '12قطع فرايد تشيكن بدون اجنحه + بطاطس عائلية + 4 كولسلو وسط + لتر مشروب + 6 خبز', p: 825, img: './img/اول 5.jpeg' },
  { id: 21, brand: 'Bazooka', n: 'وجبة بازوكا 15قطع', d: '15قطع فرايد تشيكن بدون اجنحه+ بطاطس عائلية + 4 كولسلو وسط + لتر مشروب + 7 خبز', p: 925, img: './img/اول 5.jpeg' },
  { id: 22, brand: 'Bazooka', n: 'وجبة بازوكا 18قطع', d: '18 قطع فرايد تشيكن بدون اجنحه + بطاطس عائلية + 4 سلطة كول سلو متوسطة + لتر مشروب + 9 خبز', p: 1025, img: './img/اول 5.jpeg' },
  { id: 23, brand: 'Bazooka', n: 'وجبة بازوكا 10قطع استربس', d: '10 قطع ستريبس + بطاطس عائلية + 4 سلطة كولسلو وسط + لتر مشروب + 4 خبز', p: 505, img: './img/10قطع استربس.jpeg' },
  { id: 24, brand: 'Bazooka', n: 'وجبة بازوكا 12قطع مكس', d: '6قطع فرايد تشيكن بدون اجنحه + 6قطع استربس+فاميلي فرايز+4كول سلو وسط+مشروب لتر+6خبز', p: 705, img: './img/12 قعه مكس بزو.jpeg' },
  { id: 25, brand: 'Bazooka', n: 'وجبة التوفير 9قطع', d: '9 قطع فرايد تشيكن بدون اجنحه + 3عيش', p: 555, img: './img/10قطع استربس.jpeg' },
  { id: 26, brand: 'Bazooka', n: 'وجبة التوفير 12قطع', d: '12 قطع فرايد تشيكن بدون اجنحه + 3عيش', p: 675, img: './img/12 قعه مكس بزو.jpeg' },
  { id: 27, brand: 'Bazooka', n: 'وجبة التوفير 15قطع', d: '15قطع فرايد تشيكن بدون اجنحه + 3عيش', p: 775, img: './img/توفير 9.jpeg' },
  { id: 28, brand: 'Bazooka', n: 'وجبة التوفير 18قطع', d: '18 قطع فرايد تشيكن بدون اجنحه + 3عيش', p: 885, img: './img/توفير 18.jpeg' },
  { id: 29, brand: 'Bazooka', n: 'سنايبر برجر سينجل', d: 'برجر مشوي+صوص باربكيو+شريحه جبنه+خس+خيار+محلل+طماطم+2حلقات بصل مقلي', p: 170, img: './img/اول 2.jpeg' },
  { id: 30, brand: 'Bazooka', n: 'سنايبر برجر دبل', d: 'برجر مشوي+صوص باربكيو+شريحه جبنه+خس+خيار+محلل+طماطم+2حلقات بصل مقلي', p: 235, img: './img/اول 2.jpeg' },
  { id: 31, brand: 'Bazooka', n: 'اباتشى برجر سيجل', d: 'برجر لحم + اصابع الموتزاريلا + شريحة جبن + صوص مايونيز + خس + مخلل + طماطم + بصل طازج', p: 170, img: './img/اول 2.jpeg' },
  { id: 32, brand: 'Bazooka', n: 'اباتشى برجر دبل', d: 'برجر لحم + اصابع الموتزاريلا + شريحة جبن + صوص مايونيز + خس + مخلل + طماطم + بصل طازج', p: 235, img: './img/اول 2.jpeg' },
  { id: 33, brand: 'Bazooka', n: 'بازوكا هالبينو سيجل', d: 'البرجر المشوي+هالبينو+تشيلي حار+شريحه جبنه+خس+طماطم+بصل فريش', p: 170, img: './img/تاني 2.jpeg' },
  { id: 34, brand: 'Bazooka', n: 'بازوكا هالبينو دبل', d: 'البرجر المشوي+هالبينو+تشيلي حار+شريحه جبنه+خس+طماطم+بصل فريش', p: 235, img: './img/تاني 2.jpeg' },
  { id: 35, brand: 'Bazooka', n: 'بيج بازوكا برجر سيجل', d: 'برجر لحم + بصل فريش + شريحة جبن + خس + طماطم +خيار مخلل + صوص بازوكا المميز', p: 170, img: './img/تاني 2.jpeg' },
  { id: 36, brand: 'Bazooka', n: 'بيج بازوكا برجر دبل', d: 'برجر لحم + بصل فريش + شريحة جبن + خس + طماطم +خيار مخلل + صوص بازوكا المميز', p: 235, img: './img/تاني 2.jpeg' },
  { id: 37, brand: 'Bazooka', n: 'كلاسيك برجر', d: 'قطعه برجر +خس+طماطم+خيار+مايونيز+جبنه شرائح+ بصل فريش', p: 130, img: './img/كلاسك برجر.jpeg' },
  { id: 38, brand: 'Bazooka', n: 'بيف برجر سيجل', d: 'برجر بيف+جبنه +كاتشب +خيار', p: 85, img: './img/بيف برجر.jpeg' },
  { id: 39, brand: 'Bazooka', n: 'بيف برجر دبل', d: 'برجر بيف+جبنه +كاتشب +خيار', p: 115, img: './img/بيف برجر.jpeg' },
  { id: 40, brand: 'Bazooka', n: 'راب برجر', d: 'برجر مشوي+صوص بازوكا المميز+شريحه جبنه+خس+طماطم+بصل فريش', p: 110, img: './img/راب برجر.jpeg' },
  { id: 41, brand: 'Bazooka', n: 'دبل راب برجر', d: '2قطعه من البرجر المشوي+صوص بازوكا المميز+خس+طماطم+شريحه جبنه+حلقات بصل مقلي+تورتيلا', p: 195, img: './img/دبل راب برجر.jpeg' },
  { id: 42, brand: 'Bazooka', n: 'تشيكن باربيكيو سينجل', d: 'صدور الدجاج الكرسبي بصوص البربيكيو ، صوص الجبنه السايحه خس ، طماطم ، خيار مخلل ،حلقات بصل مقليه', p: 160, img: './img/تشكن بار بيكيو.jpeg' },
  { id: 43, brand: 'Bazooka', n: 'تشيكن باربيكيو دبل', d: 'صدور الدجاج الكرسبي بصوص البربيكيو ، صوص الجبنه السايحه خس ، طماطم ، خيار مخلل ،حلقات بصل مقليه', p: 220, img: './img/تشكن بار بيكيو.jpeg' },
  { id: 44, brand: 'Bazooka', n: 'تشيكن باربيكيو تربل', d: 'صدور الدجاج الكرسبي بصوص البربيكيو ، صوص الجبنه السايحه خس ، طماطم ، خيار مخلل ،حلقات بصل مقليه', p: 245, img: './img/تشكن بار بيكيو.jpeg' },
  { id: 45, brand: 'Bazooka', n: 'تشيكن رانش سينجل', d: 'صدور الدجاج الكرسبي، صوص رانش، موتزاريلا استكس ، خس ، خيار مخلل', p: 160, img: './img/تشكن رانش.jpeg' },
  { id: 46, brand: 'Bazooka', n: 'تشيكن رانش دبل', d: 'صدور الدجاج الكرسبي، صوص رانش، موتزاريلا استكس ، خس ، خيار مخلل', p: 220, img: './img/تشكن رانش.jpeg' },
  { id: 47, brand: 'Bazooka', n: 'تشيكن رانش تربل', d: 'صدور الدجاج الكرسبي، صوص رانش، موتزاريلا استكس ، خس ، خيار مخلل', p: 245, img: './img/تشكن رانش.jpeg' },
  { id: 48, brand: 'Bazooka', n: 'تشيكن تركي سينجل', d: 'صدور الدجاج الكرسبي تركي مدخن صوص الجبنه السايحه حلقات بصل خس ، طماطم ، خيار مخلل ، مايونيز', p: 160, img: './img/تشكن تركي.jpeg' },
  { id: 49, brand: 'Bazooka', n: 'تشيكن تركي دبل', d: 'صدور الدجاج الكرسبي تركي مدخن صوص الجبنه السايحه حلقات بصل خس ، طماطم ، خيار مخلل ، مايونيز', p: 220, img: './img/تشكن تركي.jpeg' },
  { id: 50, brand: 'Bazooka', n: 'تشيكن تركي تربل', d: 'صدور الدجاج الكرسبي تركي مدخن صوص الجبنه السايحه حلقات بصل خس ، طماطم ، خيار مخلل ، مايونيز', p: 245, img: './img/تشكن تركي.jpeg' },
  { id: 51, brand: 'Bazooka', n: 'هالبينو تشيكن كرسبى سينجل', d: 'صدور الدجاج الكرسبي الحاره+هالوبينو+صوص الجبنه الشيدر+صوص تشيلي+خس+طماطم', p: 160, img: './img/هالبينوا تشكن.jpeg' },
  { id: 52, brand: 'Bazooka', n: 'هالبينو تشيكن كرسبى دبل', d: 'صدور الدجاج الكرسبي الحاره+هالوبينو+صوص الجبنه الشيدر+صوص تشيلي+خس+طماطم', p: 220, img: './img/هالبينوا تشكن.jpeg' },
  { id: 53, brand: 'Bazooka', n: 'هالبينو تشيكن كرسبى تربل', d: 'صدور الدجاج الكرسبي الحاره+هالوبينو+صوص الجبنه الشيدر+صوص تشيلي+خس+طماطم', p: 245, img: './img/هالبينوا تشكن.jpeg' },
  { id: 54, brand: 'Bazooka', n: 'بازوكا تشكين فاير', d: 'دجاج زنجر حار + صوص فلفل حار + خس + طماطم + صوص جبنة شيدر', p: 210, img: './img/تشكن فاير.jpeg' },
  { id: 55, brand: 'Bazooka', n: 'تشيكن برجر سينجل', d: 'تشكن برجر+صوص بازوكا+خس', p: 80, img: './img/تشكن برجر.jpeg' },
  { id: 56, brand: 'Bazooka', n: 'تشيكن برجر دبل', d: 'تشكن برجر+صوص بازوكا+خس', p: 110, img: './img/تشكن برجر.jpeg' },
  { id: 57, brand: 'Bazooka', n: 'كرانشي تشكن راب', d: 'قطعتين من شرائح الدجاج (عادي + حار) مايونيز بالفلفل + خس + طماطم', p: 110, img: './img/كرانشي تشكن راب.jpeg' },
  { id: 58, brand: 'Bazooka', n: 'بيج فاير بازوكا', d: '3قطع استريبس سبايسي .شريحة جبنه.تركي مدخن.فلفل هالبينو.صوص تشيلي .خس .طماطم', p: 210, img: './img/بيج فير بزوكا.jpeg' },
  { id: 59, brand: 'Bazooka', n: 'بازوكا سوبر كرانشى', d: '3 قطع دجاج ستريبس عادي +شريحه جبنه+تركي مدخن+مايونيز عادي+خس+طماطم+خيار مخلل', p: 210, img: './img/بيج فير بزوكا.jpeg' },
  { id: 60, brand: 'Bazooka', n: 'فاير سوبر بازوكا', d: 'قطعة دجاج حار + تركي مدخن + شريحة جبن امريكي + صوص تشيلي حار + خس + طماطم', p: 150, img: './img/كلاسك سوبر بزوكا .jpeg' },
  { id: 61, brand: 'Bazooka', n: 'دبل راب تشيكن', d: 'خبز تورتيلا + قطعتين فيليه + لحم رومي مدخن + صوص سيزر + خس + طماطم + شريحة جبن', p: 195, img: './img/دبل راب تشكن .jpeg' },
  { id: 62, brand: 'Bazooka', n: 'راب مسحب', d: '3 قطع مسحب(حار او عادي)+شريحه جبنه+خس+(صوص سيزر عادي او صوص تشيلي حار)', p: 110, img: './img/راب مسحب.jpeg' },
  { id: 63, brand: 'Bazooka', n: 'كلاسيك سوبر بازوكا', d: 'قطعة دجاج عادي + تركي مدخن + شريحة جبن امريكي + صوص مايونيز عادي + خس + طماطم', p: 150, img: './img/كلاسك سوبر بزوكا .jpeg' },
  { id: 64, brand: 'Bazooka', n: 'فاهيتا راب', d: 'قطع دجاج صدور مشوي+بصل+فلفل الوان+صوص سويت شيلي+صوص باربكيو+صوص سان جورج+خبر التورتيلا', p: 110, img: './img/فاهيتا راب.jpeg' },
  { id: 65, brand: 'Bazooka', n: 'ارز صغير', d: 'ارز صغير', p: 55, img: './img/رز ضغير.jpeg' },
  { id: 66, brand: 'Bazooka', n: 'اضافة خبز', d: 'اضافة خبز', p: 13, img: './img/عيش.jpeg' },
  { id: 67, brand: 'Bazooka', n: 'اضافة تركى مدخن', d: 'اضافة تركى مدخن', p: 35, img: './img/تركي مدخن.jpeg' },
  { id: 68, brand: 'Bazooka', n: 'اكسترا هالبينو', d: 'اكسترا هالبينو', p: 35, img: './img/هالبينوا.jpeg' },
  { id: 69, brand: 'Bazooka', n: 'بيبر مايونيز', d: 'بيبر مايونيز', p: 35, img: './img/ميونيز.jpeg' },
  { id: 70, brand: 'Bazooka', n: 'اكسترا شيلى', d: 'اكسترا شيلى', p: 35, img: './img/باربكيوا.jpeg' },
  { id:71 , brand: 'Bazooka', n: 'اكسترا باربيكيو', d: 'اكسترا باربيكيو', p: 35, img: './img/باربكيوا.jpeg' },
  { id:72 , brand: 'Bazooka', n: 'باكت شيدر', d: 'باكت شيدر', p: 25, img: './img/باكيت شيدر.jpeg' },
  { id:73 , brand: 'Bazooka', n: 'اكسترا رانش', d: 'اكسترا رانش', p: 40, img: './img/رانش.jpeg' },
  { id:74 , brand: 'Bazooka', n: 'اكسترا تايجر صوص اسبايسى', d: 'اكسترا تايجر صوص اسبايسى', p: 35, img: './img/اكستر تايجر صوص اسبايسي.jpeg' },
  { id:75 , brand: 'Bazooka', n: 'صوص مسحب باربيكيو', d: 'صوص مسحب باربيكيو', p: 25, img: './img/باربكيوا.jpeg' },
  { id:76 , brand: 'Bazooka', n: 'صوص كوكتيل مسحب', d: 'صوص كوكتيل مسحب', p: 20, img: './img/بيج تست.jpeg' },
  { id:77 , brand: 'Bazooka', n: 'اكسترا كاتشب', d: 'اكسترا كاتشب', p: 10, img: './img/كاتشب.jpeg' },
  { id:78 , brand: 'Bazooka', n: 'اكسترا مايونيز', d: 'اكسترا مايونيز', p: 35, img: './img/ميونيز.jpeg' },
  { id:79 , brand: 'Bazooka', n: 'ارز بسمتى وسط', d: 'ارز بسمتى وسط', p: 55, img: './img/رز ضغير.jpeg' },
  { id:80, brand: 'Bazooka', n: 'ارز بسمتى كبير', d: 'ارز بسمتى كبير', p: 75, img: './img/رز ضغير.jpeg' },
  { id: 81, brand: 'Bazooka', n: '5 قرمشة', d: '5 قطع فرايد + خبز', p: 245, img: './img/بزوكا.jpeg' },
  { id: 82, brand: 'Bazooka', n: 'هرمون السعادة', d: '2قطعتين دجاج + ارز + كول سلو وسط + قطعة خبز', p: 150, img: './img/هرمون السعاده.jpeg' },
  { id: 83, brand: 'Bazooka', n: 'فاير سوبريم كومبو', d: 'ساندوتش زنجر سوبر سوبريم +كومبو (فرايز +مشروب', p: 155, img: './img/فاير سوبريم كومبو.jpeg' },
  { id: 84, brand: 'Bazooka', n: 'كومبو سنجل', d: 'ساندوتش بيف او تشيكن سنجل+كومبو(فرايز+مشروب)', p: 160, img: './img/كومبو سينجل عرض .jpeg' },
  { id: 85, brand: 'Bazooka', n: 'بوم بوكس سنجل', d: 'قطعه دجاج + ساندوتش برجر تشكن او بيف +كول سلو وسط +مشروب+ ارز', p: 165, img: './img/كومبو سينجل عرض .jpeg' },
  { id: 86, brand: 'Bazooka', n: 'فلاش القرمشة', d: '3 قطع +خبز+ كول سلو', p: 175, img: './img/فلاش القرمشه.jpeg' },
  { id: 87, brand: 'Bazooka', n: 'فلاش السيطرة', d: '3قطع دجاج +ارز +كول سلو وسط +قطعة خبز', p: 190, img: '/img/فلاش السيطره.jpeg' },
  { id: 88, brand: 'Bazooka', n: 'كومبو سوبر كرانشي', d: 'ساندوتش + فرايز + مشروب', p: 205, img: './img/كومبو سوبر كرلنشي.jpeg' },
  { id: 89, brand: 'Bazooka', n: 'شير كومبو سنجل', d: 'ساندوتش تشكن او بيف + ساندوتش برجر تشكن او بيف + فرايز وسط + مشروب', p: 205, img: './img/شير كومبو سنجل.jpeg' },
  { id: 90, brand: 'Bazooka', n: 'فلاش سكريت', d: '4قطع + 1خبز', p: 215, img: './img/فلاش سكريت.jpeg' },
  { id: 91, brand: 'Bazooka', n: 'كومبو دبل', d: 'ساندوتش دبل تشكن او بيف + فرايز وسط + مشروب', p: 225, img: './img/كومبوا دبل.jpeg' },
  { id: 92, brand: 'Bazooka', n: 'بوكس فلاش السعادة', d: '2ساندوتش سنجل تشيكن اوبرجر+2فرايز', p: 265, img: './img/بوكس فلاش السعاده.jpeg' },
  { id: 93, brand: 'Bazooka', n: 'ملوك السعادة 1 (4قطع)', d: '4قطع دجاج +ارز +كول سلو وسط +قطعة خبز+ مشروب', p: 275, img: './img/ملوك السعاده.jpeg' },
  { id: 94, brand: 'Bazooka', n: 'فلاش ميكس', d: '3قطع فرايد تشكين + ساندوتش سنجل او ساندوتش راب + كول سلو + فرايز', p: 285, img: './img/فلاش ميكس.jpeg' },
  { id: 95, brand: 'Bazooka', n: 'دويتو 1(6 قطع)', d: '6 قطع فرايد تشيكن بدون أجنحه + 2 خبز', p: 304, img: './img/‏‏ديوتو - نسخة.jpeg' },
  { id: 96, brand: 'Bazooka', n: 'دويتو 2(6 قطع)', d: '6قطع دجاج + 2خبز+2كلوسلو', p: 325, img: './img/‏‏ديوتو - نسخة.jpeg' },
  { id: 97, brand: 'Bazooka', n: 'دبل القرمشة', d: '6قطع بروست+2كول سلو+2خبز+2ارز وسط بسمتي', p: 365, img: './img/دبل قرمشه.jpeg' },
  { id: 98, brand: 'Bazooka', n: 'لمة الصحاب (9 قطع)', d: '9قطع دجاج +3كول سلو وسط +3خبز', p: 505, img: './img/بزوكا.jpeg' },
  { id: 99, brand: 'Bazooka', n: 'عرض وزير السعادة', d: '4ساندوتش سنجل (2تشيكن2بيف)', p: 385, img: './img/وزير السعادعرض.jpeg' },
  { id: 100, brand: 'Bazooka', n: 'بوكس السعادة 3', d: '4قطع دجاج بدون اجنحه+2 راب متقطع +150 جرام فرايز + 2 خبز+2 سلو +1صوص', p: 515, img: './img/بوكس السعاده 3.jpeg' },
  { id: 101, brand: 'Bazooka', n: 'بوكس السعادة 2', d: '4قطع دجاج بدون اجنحه+ بطاطس 150 جرام +2 ساندوتش سنجل بيف او تشكن +2سلو + 1صوص', p: 545, img: './img/بوكس السعاده 2.jpeg' },
  { id: 102, brand: 'Bazooka', n: 'بوكس السعادة 1', d: '4قطع دجاج بدون اجنحه+4استربس+4 مسحب + 150 جرام فرايز +2 عيش+ 1 سلو+2صوص', p: 545, img: './img/بوكس السعاده 1.jpeg' },
  { id:103 , brand: 'Bazooka', n: 'ميكسيكان بسمتي', d: 'ميكسيكان بسمتي', p: 115, img: './img/بزوكا.jpeg' },
  { id:104, brand: 'Bazooka', n: 'قنبلة تشيزي فرايز وسط', d: 'فرايز + صوص ( 3باكت جبنة او رانش او تشيلي )', p: 95, img: './img/قنبله تشيزي فريز.jpeg' },
  { id:105, brand: 'Bazooka', n: 'قنبلة هوت تشيكن فرايز وسط', d: '150جرام فرايز + 2قطعه ستربس سبايسي + قطع هالبينو + 3باكت جبنه + صوص من اختيارك (باربكيو ,رانش ,بازوكا ,تايجر )', p: 120, img: './img/قنبله تشيزي فريز هالبينوا.jpeg' },
  { id:106, brand: 'Bazooka', n: 'قنبلة تشيزي فرايز هالبينو وسط', d: 'بطاطس + صوص(3باكت جبنة، رانش، أو تشيلي ) + قطع فلفل هالبينو', p: 100, img: './img/‏‏قنبله تشيزي فريز - نسخة.jpeg' },
  { id:107, brand: 'Bazooka', n: 'موتزاريلا استيكس', d: '3اصابع جبنه مقليه + صوص من اختيارك (باربيكيو صوص , كوكتيل صوص )', p: 60, img: './img/منزوريلا استيكس.jpeg' },
  { id:108, brand: 'Bazooka', n: 'جار جبنة', d: 'جار جبنة', p: 105, img: './img/بزوكا.jpeg' },
  { id:109, brand: 'Bazooka', n: 'جار جبنة وسط', d: 'جار جبنة وسط', p: 75, img: './img/بزوكا.jpeg' },
  { id:110, brand: 'Bazooka', n: 'ريزو', d: 'ارز مع قطع استربس +صوص(باربكيواوتايجر)', p: 115, img: './img/ريزوا.jpeg' },
  { id:111, brand: 'Bazooka', n: 'اضافة قطعة استربس', d: 'اضافة قطعة استربس', p: 70, img: './img/بزوكا.jpeg' },
  { id:112, brand: 'Bazooka', n: 'اضاقة قطعة دجاج', d: 'اضاقة قطعة دجاج', p: 90, img: './img/بزوكا.jpeg' },
  { id:113, brand: 'Bazooka', n: 'اضافة قطعة فيلية', d: 'اضافة قطعة فيلية', p: 90, img: './img/بزوكا.jpeg' },
  { id:114, brand: 'Bazooka', n: 'حلقات بصل', d: 'حلقات بصل', p: 45, img: './img/بزوكا.jpeg' },
  { id:115, brand: 'Bazooka', n: 'كومبو', d: 'فرايز + مشروب', p: 70, img: './img/كومبو.jpeg' },
  { id:116, brand: 'Bazooka', n: 'فرايز', d: 'فرايز', p: 60, img: './img/بزوكا.jpeg' },
  { id:117, brand: 'Bazooka', n: 'فاميلى فرايز', d: 'فاميلى فرايز', p: 95, img: './img/بزوكا.jpeg' },
  { id:118, brand: 'Bazooka', n: 'سلطة كولسلو', d: 'سلطة كولسلو', p: 55, img: './img/كلو استلو.jpeg' },
  { id:119, brand: 'Bazooka', n: 'ريزو مسحب', d: 'ارز + قطع مسحب +صوص باربيكيو (اورجينال ) او صوص تايجر (سبايسي )', p: 115, img: './img/ريزوا مسحب.jpeg' },
  { id:120, brand: 'Bazooka', n: 'قنبلة تشيزى فرايز', d: 'فرايز+ 4باكت شيدر', p: 110, img: './img/قنبله تشيزي فريز هالبينوا.jpeg' },
  { id:121, brand: 'Bazooka', n: 'قنبلة تشيزى فرايزهالبينو', d: 'فرايز+ 4باكت شيدر+هالبينو', p: 120, img: './img/قنبله تشيزي فريز هالبينوا.jpeg' },
  { id:122, brand: 'Bazooka', n: 'قنبلة هوت تشيكن فرايز', d: '250جرام فرايز + 2قطعه ستربس سبايسي + قطع هالبينو + 3باكت جبنه + صوص من اختيارك (باربكيو ,رانش ,بازوكا ,تايجر )', p: 155, img: './img/قنبله هوت تشكن.jpeg' },
  { id:123, brand: 'Bazooka', n: 'كشري', d: 'أرز بسمتي+خبز+صوص جبنه شيدر+صوص(بازوكا او رانش او باربيكو او تايجر)+2قطعه استربس', p: 165, img: './img/كشري.jpeg' },
  { id:124, brand: 'Bazooka', n: 'فتة', d: 'ارز بسمتي+(2قطعه تشيكن او5قطع مسحب او 3ستريبس)+ عيش توست+جبنه+ صوص من اختيارك', p: 180, img: './img/فته بك.jpeg' },
  { id:125, brand: 'Bazooka', n: 'كشرى وسط', d: 'ارز بسمتي + 2قطع ستربس+عيش توست +صوص شيدر + صوص من اختيارك (باربيكيو ,رانش ,بازوكا ,تايجر )', p: 125, img: './img/كشري.jpeg' },
  { id:126, brand: 'Bazooka', n: 'ميكسيكان ريزو', d: 'ميكسيكان ريزو', p: 115, img: './img/بزوكا.jpeg' },
  { id:127, brand: 'Bazooka', n: 'موتزريلا بوبرز', d: 'موتزريلا بوبرز', p: 65, img: './img/بزوكا.jpeg' },
  { id:128, brand: 'Bazooka', n: 'اضافة قطعة مسحب', d: 'اضافة قطعة مسحب', p: 30, img: './img/بزوكا.jpeg' },
  { id: 129, brand: 'Karam El Sham', n: 'دجاجة مشوية سوري', d: 'دجاج مشوي', p: 430, img: './img/دجاجه مشويه سوري.jpeg' },
  { id: 130, brand: 'Karam El Sham', n: 'نص دجاجة مشوية سوري', d: 'دجاج مشوي', p: 230, img: './img/دجاجه مشويه سوري.jpeg' },
  { id: 131, brand: 'Karam El Sham', n: 'شاورما عربي دجاج', d: 'وجبات الشاورما - تقدم مع البطاطس + ثومية + صوصات + مخللات', p: 160, img: './img/كرم الشام شاورما دجاج.jpeg' },
  { id: 132, brand: 'Karam El Sham', n: 'شاورما عربي لحم', d: 'وجبات الشاورما - تقدم مع البطاطس + ثومية + صوصات + مخللات', p: 200, img: './img/كرم الشام شاورما لحم.jpeg' },
  { id: 133, brand: 'Karam El Sham', n: 'شاورما عربي دبل دجاج', d: 'وجبات الشاورما - تقدم مع البطاطس + ثومية + صوصات + مخللات', p: 250, img: './img/كرم الشام شاورما دجاج.jpeg' },
  { id: 134, brand: 'Karam El Sham', n: 'شاورما عربي دبل لحم', d: 'وجبات الشاورما - تقدم مع البطاطس + ثومية + صوصات + مخللات', p: 310, img: './img/كرم الشام شاورما لحم.jpeg' },
  { id: 135, brand: 'Karam El Sham', n: 'شاورما عربي ميكس', d: 'وجبات الشاورما - تقدم مع البطاطس + ثومية + صوصات + مخللات', p: 290, img: './img/كرم الشام شاورما دجاج.jpeg' },
  { id: 136, brand: 'Karam El Sham', n: 'بطاطس فرنسي', d: 'سندوتشات البطاطس', p: 60, img: './img/كرم بطاطس سوري.jpeg' },
  { id: 137, brand: 'Karam El Sham', n: 'بطاطس سوري', d: 'سندوتشات البطاطس', p: 55, img: './img/كرم بطاطس سوري.jpeg' },
  { id: 138, brand: 'Karam El Sham', n: 'باكيت بطاطس', d: 'سندوتشات البطاطس', p: 40, img: './img/باكيت بطاطس .jpeg' },
  { id: 139, brand: 'Karam El Sham', n: 'شيدر فرايز', d: 'سندوتشات البطاطس', p: 60, img: './img/logo karm alshm 2.jpeg' },
  { id: 140, brand: 'Karam El Sham', n: 'إضافة موزاريلا بطاطس', d: 'سندوتشات البطاطس', p: 25, img: './img/كرم الشام شاورما دجاج.jpeg' },
  { id: 141, brand: 'Karam El Sham', n: 'كريب شاورما فراخ', d: 'الكريب', p: 120, img: './img/كريب شاورما فراخ.jpeg' },
  { id: 142, brand: 'Karam El Sham', n: 'كريب شاورما لحمة', d: 'الكريب', p: 140, img: './img/كريب شاورما لحم.jpeg' },
  { id: 143, brand: 'Karam El Sham', n: 'كريب سوسيس', d: 'الكريب', p: 95, img: './img/كريب شاورما لحم.jpeg' },
  { id: 144, brand: 'Karam El Sham', n: 'كريب بسطرمة', d: 'الكريب', p: 110, img: './img/كريب بسطرمه.jpeg' },
  { id: 145, brand: 'Karam El Sham', n: 'كريب بيف بيكون', d: 'الكريب', p: 100, img: './img/كريب شاورما لحم.jpeg' },
  { id: 146, brand: 'Karam El Sham', n: 'كريب مشكل لحوم', d: 'الكريب', p: 140, img: './img/كريب شاورما لحم.jpeg'  },
  { id: 147, brand: 'Karam El Sham', n: 'كريب مشكل جبن', d: 'الكريب', p: 95, img: './img/logo karm alshm 2.jpeg' },
  { id: 148, brand: 'Karam El Sham', n: 'كريب بانيه كرسبي', d: 'الكريب', p: 130, img: '/img/كريب شاورما فراخ.jpeg' },
  { id: 149, brand: 'Karam El Sham', n: 'كريب زنجر', d: 'الكريب', p: 130, img: '/img/كريب شاورما فراخ.jpeg' },
  { id: 150, brand: 'Karam El Sham', n: 'كريب ماجنم', d: 'الكريب', p: 135, img: './img/logo karm alshm 2.jpeg' },
  { id: 151, brand: 'Karam El Sham', n: 'كريب بطاطس', d: 'الكريب', p: 75, img: './img/كريب بطاطس جبنه.jpeg' },
  { id: 152, brand: 'Karam El Sham', n: 'كريب سوسج', d: 'الكريب', p: 60, img: './img/logo karm alshm 2.jpeg' },
  { id: 153, brand: 'Karam El Sham', n: 'كريب مشكل دجاج', d: 'الكريب', p: 130, img: './img/كريب شاورما فراخ.jpeg' },
  { id: 154, brand: 'Karam El Sham', n: 'فتة شاورما دجاج S', d: 'الفتات والقنابل', p: 120, img: './img/فته فراخ.jpeg' },
  { id: 155, brand: 'Karam El Sham', n: 'فتة شاورما دجاج M', d: 'الفتات والقنابل', p: 135, img: './img/فته فراخ.jpeg' },
  { id: 156, brand: 'Karam El Sham', n: 'فتة شاورما دجاج L', d: 'الفتات والقنابل', p: 175, img: './img/فته فراخ.jpeg' },
  { id: 157, brand: 'Karam El Sham', n: 'فتة شاورما لحم S', d: 'الفتات والقنابل', p: 130, img: './img/فته لحم.jpeg' },
  { id: 158, brand: 'Karam El Sham', n: 'فتة شاورما لحم M', d: 'الفتات والقنابل', p: 155, img: './img/فته لحم.jpeg' },
  { id: 159, brand: 'Karam El Sham', n: 'فتة شاورما لحم L', d: 'الفتات والقنابل', p: 200, img: './img/فته لحم.jpeg' },
  { id: 160, brand: 'Karam El Sham', n: 'فتة شاورما ميكس M', d: 'الفتات والقنابل', p: 145, img: './img/logo karm alshm 2.jpeg' },
  { id: 161, brand: 'Karam El Sham', n: 'فتة شاورما ميكس L', d: 'الفتات والقنابل', p: 190, img: './img/logo karm alshm 2.jpeg' },
  { id: 162, brand: 'Karam El Sham', n: 'فتة نابلسي وسط', d: 'إضافات الفتات', p: 150, img: './img/logo karm alshm 2.jpeg' },
  { id: 163, brand: 'Karam El Sham', n: 'فتة نابلسي كبير', d: 'إضافات الفتات', p: 185, img: './img/logo karm alshm 2.jpeg' },
  { id: 164, brand: 'Karam El Sham', n: 'ريزو بالكريمة وسط', d: 'إضافات الفتات', p: 125, img: './img/logo karm alshm 2.jpeg' },
  { id: 165, brand: 'Karam El Sham', n: 'ريزو بالكريمة كبير', d: 'إضافات الفتات', p: 180, img: './img/logo karm alshm 2.jpeg' },
  { id: 166, brand: 'Karam El Sham', n: 'نص كيلو شاورما دجاج', d: 'أرز الشاورما - تقدم مع بطاطس + سلطات + عيش', p: 430, img: './img/logo karm alshm 2.jpeg' },
  { id: 167, brand: 'Karam El Sham', n: 'نص كيلو شاورما لحم', d: 'أرز الشاورما - تقدم مع بطاطس + سلطات + عيش', p: 510, img: './img/logo karm alshm 2.jpeg' },
  { id: 168, brand: 'Karam El Sham', n: 'ربع كيلو شاورما دجاج', d: 'أرز الشاورما - تقدم مع بطاطس + سلطات + عيش', p: 245, img: './img/logo karm alshm 2.jpeg' },
  { id: 169, brand: 'Karam El Sham', n: 'ربع كيلو شاورما لحم', d: 'أرز الشاورما - تقدم مع بطاطس + سلطات + عيش', p: 400, img: './img/logo karm alshm 2.jpeg' },
  { id: 170, brand: 'Karam El Sham', n: 'س كرسبي فرنسي', d: 'سندوتشات الغربي', p: 120, img: './img/logo karm alshm 2.jpeg' },
  { id: 171, brand: 'Karam El Sham', n: 'س كرسبي سوري', d: 'سندوتشات الغربي', p: 120, img: './img/logo karm alshm 2.jpeg' },
  { id: 172, brand: 'Karam El Sham', n: 'س زنجر فرنسي', d: 'سندوتشات الغربي', p: 120, img: './img/logo karm alshm 2.jpeg' },
  { id: 173, brand: 'Karam El Sham', n: 'س زنجر سوري', d: 'سندوتشات الغربي', p: 120, img: './img/logo karm alshm 2.jpeg' },
  { id: 174, brand: 'Karam El Sham', n: 'س سوبر كرسبي', d: 'سندوتشات الغربي', p: 140, img: './img/logo karm alshm 2.jpeg' },
  { id: 175, brand: 'Karam El Sham', n: 'س سوبر زنجر', d: 'سندوتشات الغربي', p: 140, img: './img/logo karm alshm 2.jpeg' },
  { id: 176, brand: 'Karam El Sham', n: 'س برجر لحم سنجل', d: 'سندوتشات الغربي', p: 135, img: './img/logo karm alshm 2.jpeg' },
  { id: 177, brand: 'Karam El Sham', n: 'س برجر لحم جامبو', d: 'سندوتشات الغربي', p: 190, img: './img/logo karm alshm 2.jpeg' },
  { id: 178, brand: 'Karam El Sham', n: 'وجبة كرسبي بالأرز', d: 'وجبات الغربي - تقدم مع بطاطس + ثومية + صوصات + مخللات', p: 235, img: './img/logo karm alshm 2.jpeg' },
  { id: 179, brand: 'Karam El Sham', n: 'وجبة زنجر بالأرز', d: 'وجبات الغربي - تقدم مع بطاطس + ثومية + صوصات + مخللات', p: 235, img: './img/logo karm alshm 2.jpeg' },
  { id: 180, brand: 'Karam El Sham', n: 'بوكس الجوكر فراخ', d: 'وجبات الغربي - تقدم مع بطاطس + ثومية + صوصات + مخللات', p: 400, img: './img/logo karm alshm 2.jpeg' },
  { id: 181, brand: 'Karam El Sham', n: 'بوكس الجوكر ميكس', d: 'وجبات الغربي - تقدم مع بطاطس + ثومية + صوصات + مخللات', p: 420, img: './img/logo karm alshm 2.jpeg' },
  { id: 182, brand: 'Karam El Sham', n: 'ديناصور دبل', d: 'الديناصور', p: 210, img: './img/ديناصور  دبل.jpeg' },
  { id: 183, brand: 'Karam El Sham', n: 'ديناصور تربل', d: 'الديناصور', p: 290, img: './img/ديناصور  دبل.jpeg' },
  { id: 184, brand: 'Karam El Sham', n: 'ديناصور سنجل', d: 'الديناصور', p: 120, img: './img/ديناصور سنجل .jpeg' },
  { id: 185, brand: 'Karam El Sham', n: 'وجبة ماريا س دجاج', d: 'الماريا - تقدم مع بطاطس + ثومية', p: 160, img: './img/logo karm alshm 2.jpeg' },
  { id: 186, brand: 'Karam El Sham', n: 'وجبة ماريا س لحم', d: 'الماريا - تقدم مع بطاطس + ثومية', p: 180, img: './img/logo karm alshm 2.jpeg' },
  { id: 187, brand: 'Karam El Sham', n: 'ماريا ميكس', d: 'الماريا - تقدم مع بطاطس + ثومية', p: 170, img: './img/logo karm alshm 2.jpeg' },
  { id: 188, brand: 'Karam El Sham', n: 'تشيزي ماريا', d: 'الماريا - تقدم مع بطاطس + ثومية', p: 180, img: './img/logo karm alshm 2.jpeg' },
  { id: 189, brand: 'Karam El Sham', n: 'إضافة موزاريلا ماريا', d: 'الماريا', p: 40, img: './img/logo karm alshm 2.jpeg' },
  { id: 190, brand: 'Karam El Sham', n: 'س شاورما فرنسي دجاج', d: 'سندوتشات الشاورما', p: 120, img: './img/كرم شاورما سوري س فراخ.jpeg' },
  { id: 191, brand: 'Karam El Sham', n: 'س شاورما فرنسي لحم', d: 'سندوتشات الشاورما', p: 150, img: './img/كرم شاور س لحم سوري.jpeg' },
  { id: 192, brand: 'Karam El Sham', n: 'س شاورما فراخ L', d: 'سندوتشات الشاورما', p: 105, img: './img/كرم شاورما سوري س فراخ.jpeg' },
  { id: 193, brand: 'Karam El Sham', n: 'س شاورما فراخ XL', d: 'سندوتشات الشاورما', p: 120, img: './img/كرم شاورما سوري س فراخ.jpeg' },
  { id: 194, brand: 'Karam El Sham', n: 'س شاورما لحم L', d: 'سندوتشات الشاورما', p: 135, img: './img/كرم شاور س لحم سوري.jpeg' },
  { id: 195, brand: 'Karam El Sham', n: 'س شاورما لحم XL', d: 'سندوتشات الشاورما', p: 145, img: './img/كرم شاور س لحم سوري.jpeg' },
  { id: 196, brand: 'Karam El Sham', n: 'س شاورما ميكس L', d: 'سندوتشات الشاورما', p: 120, img: './img/كرم شاور س لحم سوري.jpeg' },
  { id: 197, brand: 'Karam El Sham', n: 'س شاورما ميكس XL', d: 'سندوتشات الشاورما', p: 135, img: './img/كرم شاور س لحم سوري.jpeg' },
  { id: 198, brand: 'Karam El Sham', n: 'س شاورما كايزر دجاج', d: 'سندوتشات الشاورما', p: 80, img: './img/كرم شاور س لحم سوري.jpeg' },
  { id: 199, brand: 'Karam El Sham', n: 'س شاورما كايزر لحم', d: 'سندوتشات الشاورما', p: 100, img: './img/كرم شاور س لحم سوري.jpeg' },
  { id: 200, brand: 'Karam El Sham', n: 'إضافة موزاريلا سندوتش', d: 'سندوتشات الشاورما', p: 25, img: './img/كرم شاور س لحم سوري.jpeg' },
  { id: 201, brand: 'Karam El Sham', n: 'عرض تكية الاسود', d: 'الصواني', p: 930, img: './img/logo karm alshm 2.jpeg' },
  { id: 202, brand: 'Karam El Sham', n: 'عرض تكية الاطفال', d: 'الصواني', p: 810, img: './img/logo karm alshm 2.jpeg' },
  { id: 203, brand: 'Karam El Sham', n: 'عرض تكية الوحوش', d: 'الصواني', p: 780, img: './img/logo karm alshm 2.jpeg' },
  { id: 204, brand: 'Karam El Sham', n: 'عرض صينية برشيفه', d: 'الصواني', p: 830, img: './img/logo karm alshm 2.jpeg' },
  { id: 205, brand: 'Karam El Sham', n: 'عرض صينية المشاوي', d: 'الصواني', p: 510, img: './img/logo karm alshm 2.jpeg' },
  { id: 206, brand: 'Karam El Sham', n: 'عرض صينية مكس الشلو', d: 'الصواني', p: 560, img: './img/logo karm alshm 2.jpeg' },
  { id: 207, brand: 'Karam El Sham', n: 'عرض صينية الكرسبي', d: 'الصواني', p: 510, img: './img/logo karm alshm 2.jpeg' },
  { id: 208, brand: 'Karam El Sham', n: 'عرض صينية البروستد', d: 'الصواني', p: 580, img: './img/logo karm alshm 2.jpeg' },
  { id: 209, brand: 'Karam El Sham', n: 'عرض صينية مكس القرش', d: 'الصواني', p: 530, img: './img/logo karm alshm 2.jpeg' },
  { id: 210, brand: 'Karam El Sham', n: 'عرض صينية مكس ماريا', d: 'الصواني', p: 510, img: './img/logo karm alshm 2.jpeg' },
  { id: 211, brand: 'Karam El Sham', n: 'عرض صينية مكس شاورما', d: 'الصواني', p: 480, img: './img/logo karm alshm 2.jpeg' },
  { id: 212, brand: 'Karam El Sham', n: 'كنزز', d: 'المشروبات', p: 35, img: './img/logo karm alshm 2.jpeg' },
  { id: 213, brand: 'Karam El Sham', n: 'مياة صغيرة', d: 'المشروبات', p: 20, img: './img/logo karm alshm 2.jpeg' },
  { id: 214, brand: 'Karam El Sham', n: 'دجاجه بروستد', d: 'دجاج بروستد', p: 490, img: './img/logo karm alshm 2.jpeg' },
  { id: 215, brand: 'Karam El Sham', n: 'وجبه نص دجاج بروستد', d: 'دجاج بروستد', p: 250, img: './img/logo karm alshm 2.jpeg' },
  { id: 216, brand: 'Karam El Sham', n: 'دجاج بروستد سبايسي', d: 'دجاج بروستد', p: 490, img: './img/logo karm alshm 2.jpeg' },
  { id: 217, brand: 'Karam El Sham', n: 'وجبه نص دجاج بروستد سبايسي', d: 'دجاج بروستد', p: 250, img: './img/logo karm alshm 2.jpeg' },
  { id: 218, brand: 'Karam El Sham', n: 'وجبه قطعتين اوريچنال', d: 'دجاج بروستد', p: 160, img: './img/logo karm alshm 2.jpeg' },
  { id: 219, brand: 'Karam El Sham', n: 'وجبه قطعتين سبايسي', d: 'دجاج بروستد', p: 160, img: './img/logo karm alshm 2.jpeg' },
  { id: 220, brand: 'Karam El Sham', n: 'وجبه قرمشة ١', d: '٢ فخذ + ٢ دبوس + باكت بطاطس ميني + تومية صغير + كولسلو صغير + ٢ كيزر ميني', p: 210, img: './img/logo karm alshm 2.jpeg' },
  { id: 221, brand: 'Karam El Sham', n: 'وجبه قرمشة ٢', d: '٤ فخذ + باكت بطاطس ميني + تومية صغير + كولسلو صغير + ٢ كيزر ميني', p: 215, img: './img/logo karm alshm 2.jpeg' },
  { id: 222, brand: 'Karam El Sham', n: 'وجبه قرمشة ٣', d: '٤ دبوس + باكت بطاطس ميني + تومية صغير + كولسلو صغير + ٢ كيزر ميني', p: 200, img: './img/logo karm alshm 2.jpeg' },
  { id: 223, brand: 'Karam El Sham', n: 'وجبه قرمشة ٤', d: 'صدر + فخذ + ٢ دبوس + باكت بطاطس ميني + تومية صغير + كولسلو صغير + ٢ كيزر ميني', p: 255, img: './img/logo karm alshm 2.jpeg' },
  { id: 224, brand: 'Karam El Sham', n: 'وجبه قرمشة ٥', d: '٢ صدر + ٢ دبوس + باكت بطاطس ميني + تومية صغير + كولسلو صغير + ٢ كيزر ميني', p: 275, img: './img/logo karm alshm 2.jpeg' },
  { id: 225, brand: 'Karam El Sham', n: 'وجبه قرمشة ٦', d: '٢ صدر + ٢ فخذ + باكت بطاطس ميني + تومية صغير + كولسلو صغير + ٢ كيزر ميني', p: 275, img: './img/logo karm alshm 2.jpeg' },
  { id: 226, brand: 'Karam El Sham', n: 'وجبه قرمشة ٧', d: 'صدر + ٢ دبوس + ٢ كرسبي + باكت بطاطس ميني + تومية صغير + كولسلو صغير + ٢ كيزر ميني', p: 245, img: './img/logo karm alshm 2.jpeg' },
  { id: 227, brand: 'Karam El Sham', n: 'تنين سوري فراخ', d: 'سندوتشات التنين', p: 180, img: './img/logo karm alshm 2.jpeg' },
  { id: 228, brand: 'Karam El Sham', n: 'تنين شاورما فرنساوى فراخ', d: 'سندوتشات التنين', p: 190, img: './img/logo karm alshm 2.jpeg' },
  { id: 229, brand: 'Karam El Sham', n: 'تنين سوري لحم', d: 'سندوتشات التنين', p: 220, img: './img/logo karm alshm 2.jpeg' },
  { id: 230, brand: 'Karam El Sham', n: 'تنين شاورما فرنساوى لحم', d: 'سندوتشات التنين', p: 225, img: './img/logo karm alshm 2.jpeg' },
  { id: 231, brand: 'Karam El Sham', n: 'تنين مكس سوري', d: 'سندوتشات التنين', p: 210, img: './img/logo karm alshm 2.jpeg' },
  { id: 232, brand: 'Karam El Sham', n: 'تنين مكس فرنساوي', d: 'سندوتشات التنين', p: 210, img: './img/logo karm alshm 2.jpeg' },
  { id: 233, brand: 'Karam El Sham', n: 'تنين كرسبي', d: 'سندوتشات التنين', p: 210, img: './img/logo karm alshm 2.jpeg' },
  { id: 234, brand: 'Karam El Sham', n: 'تنين زنجر', d: 'سندوتشات التنين', p: 210, img: './img/logo karm alshm 2.jpeg' },
  { id: 235, brand: 'Karam El Sham', n: 'سوبريم التنين كرسبي', d: 'سندوتشات التنين', p: 230, img: './img/logo karm alshm 2.jpeg' },
  { id: 236, brand: 'Karam El Sham', n: 'سوبريم التنين زنجر', d: 'سندوتشات التنين', p: 230, img: './img/logo karm alshm 2.jpeg' },
  { id: 237, brand: 'Karam El Sham', n: 'بوكس الكرم فراخ', d: 'بوكسات الشاورما', p: 520, img: './img/logo karm alshm 2.jpeg' },
  { id: 238, brand: 'Karam El Sham', n: 'بوكس الكرم لحمه', d: 'بوكسات الشاورما', p: 650, img: './img/logo karm alshm 2.jpeg' },
  { id: 239, brand: 'Karam El Sham', n: 'بوكس الكرم ميكس', d: 'بوكسات الشاورما', p: 590, img: './img/logo karm alshm 2.jpeg' },
  { id: 240, brand: 'Karam El Sham', n: '٥ سندوتشات عربي X.L', d: 'بوكسات الشاورما', p: 310, img: './img/logo karm alshm 2.jpeg' },
  { id: 241, brand: 'Karam El Sham', n: 'بوكس العصاب فراخ', d: 'بوكسات الشاورما', p: 380, img: './img/logo karm alshm 2.jpeg' },
  { id: 242, brand: 'Karam El Sham', n: 'بوكس العصاب لحم', d: 'بوكسات الشاورما', p: 350, img: './img/logo karm alshm 2.jpeg' },
  { id: 243, brand: 'Karam El Sham', n: '٤ كابرز X.L', d: 'بوكسات الشاورما', p: 310, img: './img/logo karm alshm 2.jpeg' },
  { id: 244, brand: 'Karam El Sham', n: 'بوكس المعلم فراخ سوري', d: 'بوكسات الشاورما', p: 410, img: './img/logo karm alshm 2.jpeg' },
  { id: 245, brand: 'Karam El Sham', n: 'بوكس المعلم مكس سوري', d: 'بوكسات الشاورما', p: 435, img: './img/logo karm alshm 2.jpeg' },
  { id: 246, brand: 'Karam El Sham', n: 'بوكس المعلم فراخ وكرسبي سوري', d: 'بوكسات الشاورما', p: 410, img: './img/logo karm alshm 2.jpeg' },
  { id: 247, brand: 'Karam El Sham', n: 'كباب بتلو نص', d: 'مشويات', p: 560, img: './img/logo karm alshm 2.jpeg' },
  { id: 248, brand: 'Karam El Sham', n: 'كباب بتلو وجبه', d: 'مشويات', p: 300, img: './img/logo karm alshm 2.jpeg' },
  { id: 249, brand: 'Karam El Sham', n: 'كفته بتلو نص', d: 'مشويات', p: 370, img: './img/logo karm alshm 2.jpeg' },
  { id: 250, brand: 'Karam El Sham', n: 'كفته بتلو وجبه', d: 'مشويات', p: 200, img: './img/logo karm alshm 2.jpeg' },
  { id: 251, brand: 'Karam El Sham', n: 'مشكل كباب وكفته نص', d: 'مشويات', p: 480, img: './img/logo karm alshm 2.jpeg' },
  { id: 252, brand: 'Karam El Sham', n: 'مشكل كباب وكفته وجبه', d: 'مشويات', p: 235, img: './img/logo karm alshm 2.jpeg' },
  { id: 253, brand: 'Karam El Sham', n: 'ميكس جريل لحم نص', d: 'مشويات', p: 400, img: './img/logo karm alshm 2.jpeg' },
  { id: 254, brand: 'Karam El Sham', n: 'شيش طاووك نص', d: 'مشويات', p: 295, img: './img/logo karm alshm 2.jpeg' },
  { id: 255, brand: 'Karam El Sham', n: 'شيش طاووك وجبه', d: 'مشويات', p: 360, img: './img/logo karm alshm 2.jpeg' },
  { id: 256, brand: 'Karam El Sham', n: 'دجاج تكا نص', d: 'مشويات', p: 200, img: './img/logo karm alshm 2.jpeg' },
  { id: 257, brand: 'Karam El Sham', n: 'دجاج تكا كامله', d: 'مشويات', p: 410, img: './img/logo karm alshm 2.jpeg' },
  { id: 258, brand: 'Karam El Sham', n: 'دجاج تكا نص', d: 'مشويات', p: 220, img: './img/logo karm alshm 2.jpeg' },
  { id: 259, brand: 'Karam El Sham', n: 'دجاج تكا ربع وجبه', d: 'مشويات', p: 135, img: './img/logo karm alshm 2.jpeg' },
  { id: 260, brand: 'Karam El Sham', n: 'دجاج تكا وجبه ربع صدر', d: 'مشويات', p: 145, img: './img/logo karm alshm 2.jpeg' },
  { id: 261, brand: 'Karam El Sham', n: 'دجاج مخلي كامله', d: 'مشويات', p: 420, img: './img/logo karm alshm 2.jpeg' },
  { id: 262, brand: 'Karam El Sham', n: 'دجاج مخلي نص', d: 'مشويات', p: 230, img: './img/logo karm alshm 2.jpeg' },
  { id: 263, brand: 'Karam El Sham', n: 'وجبه شيش وكفته', d: 'مشويات', p: 200, img: './img/logo karm alshm 2.jpeg' },
  { id: 945, brand: 'B Laban', n: '  بظابيظو مانجوا', e:'بلبن', d: 'حلوى', p: 135, img: './img/بظابيظوا مانجو.jpg' ,sizes: [
  { id: "medium", label: "وسط", price: "135" },
  { id: "large", label: "كبير", price: "260" },
  ]},
  { id: 764, brand: 'B Laban', n: 'المؤدبه سوبر سبيشيال', e:'بلبن', d: 'أرز بلبن بالكريمة اللباني و عليها مانجة عويس اسمعلاوي و بسبوسة سخنةوسايحة بالسمن البلدي و مليانة مكسرات بندق ولوز وکاجو و بالقشطة البلدي نمرة واحد', p: 135, img: './img/بلبن سوبر اسبيشال.jpg' },
  { id: 765, brand: 'B Laban', n: 'المؤدبه سبيشيال', e:'بلبن', d: 'أرز بلبن بالكريمة اللباني و عليها مانجة عويس اسمعلاوي و بسبوسة سخنةوسايحة بالسمن البلدي و مليانة مكسرات بندق ولوز وکاجو و بالقشطة البلدي نمرة واحد', p:120 , img: './img/بلبن سوبر اسبيشال.jpg' },
  { id: 766, brand: 'B Laban', n: 'المؤدبه نفر حلو', e:'بلبن', d: 'أرز بلبن بالكريمة اللباني و عليها مانجا عويس إسمعلاوي و مليانة مكسرات بندق و لوز و کاجو و بالقشطة البلدي نمرة واحد', p: 105, img: './img/بلبن نفر حلو.jpg' },
  { id: 758, brand: 'B Laban', n: 'سنكوريتا', e:'بلبن', d: 'حلوى', p:130 , img: './img/sankorit بلبن1.jpeg' },
  { id: 757, brand: 'B Laban', n: 'سنكوريتا (Jumbo)', e:'بلبن', d: 'حلوى', p:210 , img: './img/sankorit بلبن1.jpeg' },
  { id: 755, brand: 'B Laban', n: '  المتكندره', e:'بلبن', d: 'حلوى', p: 160, img: './img//المتكندره.webp' },
  { id: 756, brand: 'B Laban', n: '  المتكندره حجم اكبر', e:'بلبن', d: 'حلوى', p: 375, img: './img//المتكندره.webp' },
  { id: 759, brand: 'B Laban', n: 'دو باغي شيكولاته', e:'بلبن', d: 'حلوى', p: 155, img: './img/دوباغي شيكولاته.png' },
  { id: 760, brand: 'B Laban', n: 'خالتي ماتيلدا', e:'بلبن', d: 'حلوى', p: 145, img: './img/خالتي متيالدا.jpeg' },
  { id: 761, brand: 'B Laban', n: 'بومباستيك', e:'بلبن', d: 'حلوى', p: 145, img: './img/البومبستك.jpeg' },
  { id: 762, brand: 'B Laban', n: 'السبيكه', e:'بلبن', d: 'حلوى', p: 160, img: './img/السبيكه.jpeg' },
  { id: 763, brand: 'B Laban', n: 'De PARIS', e:'بلبن', d: 'حلوى', p: 180, img: './img/دي باريس.jpeg' },
  { id: 266, brand: 'B Laban', n: 'هبة دبي كيندر',  e:'بلبن',   d: 'حلوى', p: 140, img: './img/هبة دبي.jpeg' },
  { id: 267, brand: 'B Laban', n: 'هبة دبي شيكولاتة', e:'بلبن', d: 'حلوى', p: 160, img: './img/هبة دبي.jpeg' },
  { id: 268, brand: 'B Laban', n: 'هبة دبي بندق',  e:'بلبن',    d:  'حلوى', p: 170, img: './img/هبة دبي.jpeg' },
  { id: 269, brand: 'B Laban', n: 'قشطوطة كراميل', e:'بلبن',   d: 'دنيا القشطوطه', p: 80, img: './img/هبة دبي.jpeg' },
  { id: 270, brand: 'B Laban', n: 'قشطوطة مانجا',  e:'بلبن',  d: 'دنيا القشطوطه', p: 100, img: './img/قشطوطه.jpeg' },
  { id: 271, brand: 'B Laban', n: 'قشطوطة مكسرات', e:'بلبن',  d: 'دنيا القشطوطه', p: 110, img: './img/قشطوطه.jpeg' },
  { id: 272, brand: 'B Laban', n: 'قشطوطة لوتس',   e:'بلبن',    d: 'دنيا القشطوطه', p: 110, img: './img/قشطوطه.jpeg' },
  { id: 273, brand: 'B Laban', n: 'قشطوطة قشطه',   e:'بلبن', d: 'دنيا القشطوطه', p: 80, img: './img/قشطوطه.jpeg' },
  { id: 274, brand: 'B Laban', n: 'قشطوطة رز ب لين مكسرات',  e:'بلبن',  d: 'دنيا القشطوطه', p: 105, img: './img/قشطوطه.jpeg' },
  { id: 275, brand: 'B Laban', n: 'قشطوطة رز ب لين لوتس',    e:'بلبن',   d: 'دنيا القشطوطه', p: 105, img: './img/قشطوطه.jpeg' },
  { id: 276, brand: 'B Laban', n: 'قشطوطة رز ب لين مانجا',   e:'بلبن',  d: 'دنيا القشطوطه', p: 95, img: './img/قشطوطه.jpeg' },
  { id: 277, brand: 'B Laban', n: 'قشطوطة رز ب لين كريمة',   e:'بلبن',   d: 'دنيا القشطوطه', p: 75, img: './img/قشطوطه.jpeg' },
  { id: 278, brand: 'B Laban', n: 'قشطوطة سوبر لوكس',   e:'بلبن',    d: 'دنيا القشطوطه', p: 130, img: './img/قشطوطه.jpeg' },
  { id: 279, brand: 'B Laban', n: 'بمبوظة سادة صغير',   e:'بلبن', d: 'البمبوظة', p: 65, img: './img/بمبوظه مانجا.jpeg' },
  { id: 280, brand: 'B Laban', n: 'بمبوظة سادة كبير',   e:'بلبن',  d: 'البمبوظة', p: 110, img: './img/بمبوظه مانجا.jpeg' },
  { id: 281, brand: 'B Laban', n: 'بمبوظة مكسرات صغير',   e:'بلبن', d: 'البمبوظة', p: 90, img: './img/بمبوظه مانجا.jpeg' },
  { id: 282, brand: 'B Laban', n: 'بمبوظة مكسرات كبير',   e:'بلبن', d: 'البمبوظة', p: 125, img: './img/بمبوظه مانجا.jpeg' },
  { id: 283, brand: 'B Laban', n: 'بمبوظة قشطة صغير', e:'بلبن',   d:  'البمبوظة', p: 90, img: './img/بمبوظه مانجا.jpeg' },
  { id: 284, brand: 'B Laban', n: 'بمبوظة قشطة كبير', e:'بلبن',d:  'البمبوظة', p: 130, img: './img/بمبوظه مانجا.jpeg' },
  { id: 285, brand: 'B Laban', n: 'بمبوظة لوتس صغير', e:'بلبن',d:  'البمبوظة', p: 90, img: './img/بمبوظه لوتس.jpeg' },
  { id: 286, brand: 'B Laban', n: 'بمبوظة لوتس كبير', e:'بلبن',d:   'البمبوظة', p: 130, img: './img//بمبوظه لوتس كبيره.webp' },
  { id: 287, brand: 'B Laban', n: 'بمبوظة بندق صغير', e:'بلبن',d:   'البمبوظة', p: 90, img: './img/بمبوظه ايس كريم.jpeg' },
  { id: 288, brand: 'B Laban', n: 'بمبوظة بندق كبير', e:'بلبن',d:   'البمبوظة', p: 130, img: './img/بمبوظه ايس كريم.jpeg' },
  { id: 289, brand: 'B Laban', n: 'بمبوظة مانجا صغير',  e:'',d:   'البمبوظة', p: 90, img: './img/بمبوظه مانجا.jpeg' },
  { id: 290, brand: 'B Laban', n: 'بمبوظة مانجا كبير',  e:'بلبن',d:   'البمبوظة', p: 130, img: './img/بمبوظه مانجا.jpeg' },
  { id: 291, brand: 'B Laban', n: 'طاجن ام علي بالسمنة البلدي', e:'بلبن',  d: 'دنيا أم عليّ', p: 50, img: './img/ام علي  طاجن.jpeg' },
  { id: 292, brand: 'B Laban', n: 'طاجن ام علي بالسمنة البلدي + قشطة', e:'بلبن', d: 'دنيا أم عليّ', p: 65, img: './img/ام علي  طاجن.jpeg' },
  { id: 293, brand: 'B Laban', n: 'طاجن ام علي بالسمنة البلدي و مكسرات',  e:'بلبن', d: 'دنيا أم عليّ', p: 75, img: './img/ام علي  طاجن.jpeg' },
  { id: 294, brand: 'B Laban', n: 'طاجن ام علي قشطة و مكسرات',  e:'بلبن',   d: 'دنيا أم عليّ', p: 90, img: './img/ام علي  طاجن.jpeg' },
  { id: 295, brand: 'B Laban', n: 'كريب دبي',     e:'بلبن',d: 'كريب دبي',  p: 150, img: './img/كريب مجنم دبي.jpeg' },
  { id: 296, brand: 'B Laban', n: 'كشري نوتيلا',  e:'بلبن',   d: 'كشري بـ لبن', p: 90, img: './img/كشري بلبن.jpeg' },
  { id: 297, brand: 'B Laban', n: 'كشري أوريو نوتيلا',   e:'بلبن',d: 'كشري بـ لبن', p: 90, img: './img/كشري بلبن.jpeg' },
  { id: 298, brand: 'B Laban', n: 'كشري كندر',   e:'بلبن',d: 'كشري بـ لبن', p: 100, img: './img/كشري بلبن.jpeg' },
  { id: 299, brand: 'B Laban', n: 'كشري لوتس', e:'بلبن', d: 'كشري بـ لبن', p: 100, img: './img/كشري بلبن.jpeg' },
  { id: 300, brand: 'B Laban', n: 'كشري مانجا', e:'بلبن', d: 'كشري بـ لبن', p: 100, img: './img/كشري بلبن.jpeg' },
  { id: 301, brand: 'B Laban', n: 'كشري بستاشيو', e:'بلبن', d: 'كشري بـ لبن', p: 105, img: './img/كشري بلبن.jpeg' },
  { id: 302, brand: 'B Laban', n: 'كشري بستاشيو لوتس', e:'بلبن', d: 'كشري بـ لبن', p: 105, img: './img/كشري بلبن.jpeg' },
  { id: 303, brand: 'B Laban', n: 'أرز بـ لبن سادة', e:'بلبن', d: 'دُنيا الرُز', p: 35, img: './img/رز بلبن.jpeg' },
  { id: 304, brand: 'B Laban', n: 'أرز بـ لبن + مكسرات', e:'بلبن', d: 'دُنيا الرُز', p: 65, img: './img/رز بلبن.jpeg' },
  { id: 305, brand: 'B Laban', n: 'أرز بـ لبن + ايس حليب', e:'بلبن', d: 'دُنيا الرُز', p: 50, img: './img/رز بلبن.jpeg' },
  { id: 306, brand: 'B Laban', n: 'أرز بـ لبن لوتس بلجيكي', e:'بلبن', d: 'دُنيا الرُز', p: 70, img: './img/رز بلبن.jpeg' },
  { id: 307, brand: 'B Laban', n: 'أرز بـ لبن + قشطة + مكسرات', e:'بلبن', d: 'دُنيا الرُز', p: 80, img: './img/رز بلبن.jpeg' },
  { id: 308, brand: 'B Laban', n: 'دوبايمين', e:'بلبن', d: 'دُنيا الرُز - أرز بـ لبن + ايس + مكسرات', p: 80, img: './img/رز بلبن.jpeg' },
  { id: 309, brand: 'B Laban', n: 'سيرتونين', e:'بلبن', d: 'دُنيا الرُز - أرز بـ لبن + بسبوسة + ايس + مكسرات', p: 80, img: './img/رز بلبن.jpeg' },
  { id: 310, brand: 'B Laban', n: 'أرز بـ لبن بستاشيو باليس', e:'بلبن', d: 'دُنيا الرُز', p: 80, img: './img/رز بلبن.jpeg' },
  { id: 311, brand: 'B Laban', n: 'ادريينالين', e:'بلبن', d: 'دُنيا الرُز', p: 70, img: './img/رز بلبن.jpeg' },
  { id: 312, brand: 'B Laban', n: 'كمين الشربينى',  e:'بلبن',d: 'دُنيا الرُز', p: 90, img: './img/رز بلبن.jpeg' },
  { id: 313, brand: 'B Laban', n: 'أرز بـ لبن + مانجا',  e:'بلبن',d: 'دُنيا الرُز', p: 65, img: './img/رز بلبن.jpeg' },
  { id: 314, brand: 'B Laban', n: 'ايس كريم ٢ طعم', e:'بلبن', d: 'دُنيا الأيس كريم', p: 35, img: './img/رز بلبن.jpeg' },
  { id: 315, brand: 'B Laban', n: 'ايس كريم ٤ طعم',  e:'بلبن',d: 'دُنيا الأيس كريم', p: 50, img: './img/رز بلبن.jpeg' },
  { id: 316, brand: 'B Laban', n: 'عسل', e:'بلبن', d: 'الإضافات', p: 20, img: './img/logo blabn.jpeg' },
  { id: 317, brand: 'B Laban', n: 'ايس', e:'بلبن', d: 'الإضافات', p: 40, img: './img/logo blabn.jpeg' },
  { id: 318, brand: 'B Laban', n: 'مكسرات', e:'بلبن', d: 'الإضافات', p: 40, img: './img/logo blabn.jpeg' },
  { id: 319, brand: 'B Laban', n: 'بسبوسة',  e:'بلبن',d: 'الإضافات', p: 25, img: './img/logo blabn.jpeg' },
  { id: 320, brand: 'B Laban', n: 'نوتيلا', e:'بلبن', d: 'الإضافات', p: 25, img: './img/logo blabn.jpeg' },
  { id: 321, brand: 'B Laban', n: 'قشطة', e:'بلبن', d: 'الإضافات', p: 30, img: './img/logo blabn.jpeg' },
  { id: 322, brand: 'B Laban', n: 'بودرة لوتس',  e:'بلبن',d: 'الإضافات', p: 35, img: './img/logo blabn.jpeg' },
  { id: 323, brand: 'B Laban', n: 'صوص لوتس',  e:'بلبن',d: 'الإضافات', p: 35, img: './img/logo blabn.jpeg' },
  { id: 324, brand: 'B Laban', n: 'كونو', e:'بلبن', d: 'الإضافات', p: 20, img: './img/logo blabn.jpeg' },
  { id: 325, brand: 'B Laban', n: 'كشري نوتيلا صغير',  e:'بلبن',d: 'كشري بـ لبن صغير', p: 65, img: './img/كشري بلبن.jpeg' },
  { id: 326, brand: 'B Laban', n: 'كشري أوريو نوتيلا صغير', e:'بلبن', d: 'كشري بـ لبن صغير', p: 65, img: './img/كشري بلبن.jpeg' },
  { id: 327, brand: 'B Laban', n: 'كشري كندر صغير',  e:'بلبن',d: 'كشري بـ لبن صغير', p: 70, img: './img/كشري بلبن.jpeg' },
  { id: 328, brand: 'B Laban', n: 'كشري لوتس صغير', e:'بلبن', d: 'كشري بـ لبن صغير', p: 70, img: './img/كشري بلبن.jpeg' },
  { id: 329, brand: 'B Laban', n: 'كشري مانجا صغير', e:'بلبن', d: 'كشري بـ لبن صغير', p: 65, img: './img/كشري بلبن.jpeg' },
  { id: 330, brand: 'B Laban', n: 'كشري بستاشيو صغير', e:'بلبن', d: 'كشري بـ لبن صغير', p: 75, img: './img/كشري بلبن.jpeg' },
  { id: 331, brand: 'B Laban', n: 'كشري بستاشيو لوتس صغير',  e:'بلبن',d: 'كشري بـ لبن صغير', p: 80, img: './img/كشري بلبن.jpeg' },
  { id: 332, brand: 'B Laban', n: 'دبي تشيز بومب', e:'بلبن', d: 'حلوى', p: 120, img: './img/دبي تشيز بومب.jpeg' },
  { id: 333, brand: 'B Laban', n: 'كبسة بـ لبن',  e:'بلبن',d: 'حلوى', p: 95, img: './img/كبسه بلبن.jpeg' },
  { id: 334, brand: 'B Laban', n: 'ماتيلدا كيك', d: 'حلوى', p: 75, img: './img/ماتيلدا كيك.jpeg' },
  { id: 335, brand: 'B Laban', n: 'السح الدح امبو - بيستاشيو',  e:'بلبن',d: 'حلوى', p: 105, img: './img/السح الدح امبو.jpeg' },
  { id: 336, brand: 'B Laban', n: 'السح الدح امبو - فراولة',  e:'بلبن',d: 'حلوى', p: 95, img: './img/السح الدح امبو.jpeg' },
  { id: 337, brand: 'B Laban', n: 'السح الدح امبو - بندق',  e:'بلبن',d: 'حلوى', p: 95, img: './img/السح الدح امبو.jpeg' },
  { id: 338, brand: 'B Laban', n: 'السح الدح امبو - شيكولاتة', e:'بلبن', d: 'حلوى', p: 95, img: './img/السح الدح امبو.jpeg' },
  { id: 339, brand: 'B Laban', n: 'السح الدح امبو - حليب ميكس بيري', e:'بلبن', d: 'حلوى', p: 95, img: './img/السح الدح امبو.jpeg' },
  { id: 340, brand: 'B Laban', n: 'السح الدح امبو - حليب كراميل', e:'بلبن', d: 'حلوى', p: 95, img: './img/السح الدح امبو.jpeg' },
  { id: 341, brand: 'B Laban', n: 'السح الدح امبو - لوتس', e:'بلبن', d: 'حلوى', p: 95, img: './img/السح الدح امبو.jpeg' },
  { id: 342, brand: 'B Laban', n: 'السح الدح امبو - مانجو', e:'بلبن', d: 'حلوى', p: 95, img: './img/السح الدح امبو.jpeg' },
  { id: 343, brand: 'B Laban', n: 'ريمونتادا', e:'بلبن', d: 'حلوى', p: 125, img: './img/ريمونتادا كريم دي لاكريم اللؤه.jpeg' },
  { id: 344, brand: 'B Laban', n: 'كريم دي لا كريم', e:'بلبن', d: 'حلوى', p: 160, img: './img/ريمونتادا كريم دي لاكريم اللؤه.jpeg'},
  { id: 345, brand: 'B Laban', n: 'اللؤة', d: 'حلوى',  e:'بلبن',p: 130, img: './img/ريمونتادا كريم دي لاكريم اللؤه.jpeg' },
  { id: 346, brand: 'B Laban', n: 'شيكولاتة دبي',  e:'بلبن',d: 'شوكولاتة', p: 225, img: './img/شوكولاته دبي.jpeg' },
  { id: 347, brand: 'B Laban', n: 'سيد قشطه', e:'بلبن', d: 'حلوى', p: 100, img: './img/السيد قشطه.jpeg' },
  { id: 348, brand: 'B Laban', n: 'الكشخه',  e:'بلبن',d: 'حلوى', p: 135, img: './img/الكشخه.jpeg' },
  { id: 349, brand: 'B Laban', n: 'الكشخه بوكس', e:'بلبن', d: 'حلوى', p: 185, img: './img/الكشخه.jpeg' },
  { id: 350, brand: 'B Laban', n: 'دباديبو لندن (واحد)', e:'بلبن', d: 'حلوى', p: 90, img: './img/دباديبوا.jpeg' },
  { id: 351, brand: 'B Laban', n: 'دباديبو لندن (بوكس 3)', e:'بلبن', d: 'حلوى', p: 220, img: './img/دباديبوا.jpeg' },
  { id: 264, brand: 'B Laban', n: 'شوكيز جرة', e:'بلبن', d: 'حلوى', p: 45, img: './img/شوكيز.jpeg' },
  { id: 265, brand: 'B Laban', n: 'شوكيز ٢ قطع',    e:'بلبن',  d: 'حلوى', p: 20, img: './img/شوكيز.jpeg' },
  { id: 352, brand: 'Wahmy Burger', n: 'برجر الرانش سنجل', e:'Wahmy Burger', d: 'لحم انقس محشو بالجبن ومغطى بصوص الراشرو صوص الجبن مع أصابع الموزاريلا والخس والطماطم', p: 100, img: './img/برجر الرنش وهمي.jpeg' },
  { id: 353, brand: 'Wahmy Burger', n: 'برجر لرانش دبل', e:'Wahmy Burger', d: 'لحم انقس محشو بالجبن ومغطى بصوص الراشر وصوص الجبن مع أصابع الموزاريلا والخس والطماطم', p: 235, img: './img/برجر الرنش وهمي.jpeg' },
  { id: 354, brand: 'Wahmy Burger', n: 'برجر لرانش كومبو',  e:'Wahmy Burger',d: 'لحم انقس محشو بالجبن ومغطى بصوص الراشر وصوص الجبن مع أصابع الموزاريلا والخس والطماطم', p: 255, img: './img/برجر الرنش وهمي.jpeg' },
  { id: 355, brand: 'Wahmy Burger', n: 'برجر البيكون والمشروم سنجل',  e:'Wahmy Burger',d: 'لحم الانقس محشو بالجبن ومغطى بصوص وهمي وصوص الجبن مع شرائح لحم البيكون والفطر والخس والطماطم', p: 230, img: './img/بيكون رانش.jpeg' },
  { id: 356, brand: 'Wahmy Burger', n: 'برجر البيكون والمشروم دبل', e:'Wahmy Burger', d: 'لحم الانقس محشو بالجبن ومغطى بصوص وهمي وصوص الجبن مع شرائح لحم البيكون والفطر والخس والطماطم', p: 210, img: './img/بيكون رانش.jpeg' },
  { id: 357, brand: 'Wahmy Burger', n: 'برجر البيكون والمشروم كومبو', e:'Wahmy Burger', d: 'لحم الانقس محشو بالجبن ومغطى بصوص وهمي وصوص الجبن مع شرائح لحم البيكون والفطر والخس والطماطم', p: 250, img: './img/بيكون رانش.jpeg' },
  { id: 358, brand: 'Wahmy Burger', n: 'برجر الفضاء سنجل', e:'Wahmy Burger', d: 'لحم الانقس محشو بالجبن ومغطى بصوص وهمي وصوص الموزا مع المايونيز والخس والطماطم', p: 195, img: './img/برجر الفضاء وهمي.jpeg' },
  { id: 359, brand: 'Wahmy Burger', n: 'برجر الفضاء دبل', e:'Wahmy Burger', d: 'لحم الانقس محشو بالجبن ومغطى بصوص وهمي وموص الموزا مع المايونيز والخس والطماطم', p: 190, img: './img/برجر الفضاء وهمي.jpeg' },
  { id: 360, brand: 'Wahmy Burger', n: 'برجر الفضاء كومبو', e:'Wahmy Burger', d: 'لحم الانقس محشو بالجبن ومغطى بصوص وهمي وصوص الموزا مع المايونيز والخس والطماطم', p: 210, img: './img/برجر الفضاء وهمي.jpeg' },
  { id: 361, brand: 'Wahmy Burger', n: 'برجر سبيشال وهمي سنجل', e:'Wahmy Burger', d: 'لحم الانقس محشو بالجبن ومغطى بصوص الراشر مع أصابع الموزاريلا المشوية وحلقات البصل وشرائح لحم البيكون', p: 225, img: './img/برجر سبيشيال وهمي.jpeg' },
  { id: 362, brand: 'Wahmy Burger', n: 'برجر سبيشال وهمي دبل', e:'Wahmy Burger', d: 'لحم الانقس محشو بالجبن ومغطى بصوص الراشر مع أصابع الموزاريلا المشوية وحلقات البصل وشرائح لحم البيكون', p: 225, img: './img/برجر سبيشيال وهمي.jpeg' },
  { id: 363, brand: 'Wahmy Burger', n: 'برجر سبيشال وهمي كومبو',  e:'Wahmy Burger',d: 'لحم الانقس محشو بالجبن ومغطى بصوص الراشر مع أصابع الموزاريلا المشوية وحلقات البصل وشرائح لحم البيكون', p: 275, img: './img/برجر سبيشيال وهمي.jpeg' },
  { id: 364, brand: 'Wahmy Burger', n: 'برجر البيكون الكلاسيكي سنجل',  e:'Wahmy Burger',d: 'لحم الانقس محشو بالجبن وشرائح لحم البيكون وصوص المايونيز مع الطماطم والخس والبصل الأحمر', p: 205, img: './img/برجر البيكوني كلاسك وهمي.jpeg' },
  { id: 365, brand: 'Wahmy Burger', n: 'برجر البيكون الكلاسيكي دبل', e:'Wahmy Burger', d: 'لحم الانقس محشو بالجبن وشرائح لحم البيكون وصوص المايونيز مع الطماطم والخس والبصل الأحمر', p: 200, img: './img/برجر البيكوني كلاسك وهمي.jpeg' },
  { id: 366, brand: 'Wahmy Burger', n: 'برجر البيكون الكلاسيكي كومبو',  e:'Wahmy Burger',d: 'لحم الانقس محشو بالجبن وشرائح لحم البيكون وصوص المايونيز مع الطماطم والخس والبصل الأحمر', p: 240, img: './img/برجر البيكوني كلاسك وهمي.jpeg' },
  { id: 367, brand: 'Wahmy Burger', n: 'روستر بوستر',  e:'Wahmy Burger',d: 'روستر بوستر', p: 165, img: './img/روستربوستر وهمي.jpeg' },
  { id: 368, brand: 'Wahmy Burger', n: 'روستر بوستر كومبو', e:'Wahmy Burger', d: 'روستر بوستر كومبو', p: 225, img: './img/روستربوستر وهمي.jpeg' },
  { id: 369, brand: 'Wahmy Burger', n: 'سموكي بيرد', e:'Wahmy Burger', d: 'سموكي بيرد', p: 155, img: './img/سموكي بيرد +وهمي.jpeg' },
  { id: 370, brand: 'Wahmy Burger', n: 'سموكي بيرد كومبو', e:'Wahmy Burger', d: 'سموكي بيرد كومبو', p: 210, img: './img/سموكي بيرد +وهمي.jpeg' },
  { id: 371, brand: 'Wahmy Burger', n: 'ساندوتش تشكن كلاسك', e:'Wahmy Burger', d: 'صدر دجاج طبيعي ومقرمش، متبل بعناية بخلية بتتبيلة وهمي الخاصة، يُقدم داخل خبز بريوش مُعد خصيصًا لمطاعم وهمي، مع مايونيز كريمي، جبنة شيدر، خس، وطماطم، وبصل طازج، وخيار مخلل', p: 140, img: './img/تشكن كلاسك وهمي.jpeg' },
  { id: 372, brand: 'Wahmy Burger', n: 'تشكن وود ساندوتش', e:'Wahmy Burger', d: 'صدر دجاج طبيعي حار ومقرمش، متبل بعناية بتتبيلة وهمي الخاصة، يُقدم داخل خبز بريوش مُعد خصيصًا لمطاعم وهمي، مع صوص فاير وود الحار، جبنة شيدر، وبيف بيكون مدخن، وخس، وطماطم، وبصل طازج، وخيار مخلل', p: 155, img: './img/تشكن وود ساندوتش وهمي.jpeg' },
  { id: 373, brand: 'Wahmy Burger', n: 'ساندوتش تشكن تيستي', e:'Wahmy Burger', d: 'صدر دجاج طبيعي ومقرمش، متبل بعناية بتتبيلة وهمي الخاصة، يُقدم داخل خبز بريوش مُعد خصيصًا لمطاعم وهمي، مع صوص مدخن لذيذ، شرائح جبنة شيدر، حلقات بصل، أصابع موزاريلا، وبيف بيكون مدخن، ومغطى بجبنة شيدر مذابة، إلى جانب شرائح خس وطماطم، وبصل طازج، وخيار مخلل', p: 200, img: './img/تشكن تيستي وهمي.jpeg' },
  { id: 374, brand: 'Wahmy Burger', n: 'بيج وهمي ميكس', e:'Wahmy Burger', d: '1 ساندوتش فضاء مع 1 ساندوتش تشكن وهمي مع 2 مشروب و 2 بطاطس', p: 315, img: './img/بيج وهمي ميكس.jpeg' },
  { id: 375, brand: 'Wahmy Burger', n: 'بيج وهمي جانجم', e:'Wahmy Burger', d: '2 ساندوتش تشكن وهمي مع 2 مشروب و 2 بطاطس', p: 305, img: './img/بيج وهمي جانجم.jpeg' },
  { id: 376, brand: 'Wahmy Burger', n: 'بيج وهمي الفضاء', e:'Wahmy Burger', d: '2 ساندوتش فضاء مع 2 مشروب و 2 بطاطس', p: 310, img: './img/بيج وهمي الفضاء.jpeg' },
  { id: 377, brand: 'Wahmy Burger', n: 'بوكس مكوك/لحم',  e:'Wahmy Burger',d: 'ساندوتش 2 لحم مع بطاطس و2 كولا ', p: 335, img: './img/عرض فوري باي فور وهمي.jpeg' },
  { id: 378, brand: 'Wahmy Burger', n: 'بوكس مكوك/ميكس', e:'Wahmy Burger', d: '2 ساندوتش لحم وفراخ مع بطاطس 2 كولا', p: 560, img: './img/عرض فوري باي فور وهمي.jpeg' },
  { id: 379, brand: 'Wahmy Burger', n: 'برجر الرانش', e:'Wahmy Burger', d: 'لحم انقس ومغطى بصوص الراشر، وموص الجبن مع إضافة أصابع الموزاريلا، الخس، الطماطم، الخيار المخلل، والبصل الأحمر', p: 175, img: './img/برجر الرنش وهمي.jpeg' },
  { id: 380, brand: 'Wahmy Burger', n: 'برجر البيكون والمشروم',  e:'Wahmy Burger',d: 'لحم الانقس والمغطى بصوص وهمي وموص الجبن، مع إضافة شرائح لحم البيكون، الفطر الطماطم، الخس، الخيار المخلل، وبصل أحمر', p: 180, img: './img/بيكون رانش.jpeg' },
  { id: 381, brand: 'Wahmy Burger', n: 'برجر الفضاء',  e:'Wahmy Burger',d: 'لحم الانقس ومغطى بصوص وهمي وموص الموزا مع المايونيز مع إضافة الخس، الطماطم، الخيار المخلل، والبصل الأحمر', p: 155, img: './img/برجر الفضاء وهمي.jpeg' },
  { id: 382, brand: 'Wahmy Burger', n: 'برجر سبيشال وهمي', e:'Wahmy Burger', d: 'لحم الانقس والمغطى بصلصة الراشر، مع إضافة أصابع الموزاريلا المقلية، حلقات البصل، شرائح لحم البيكون، الخس، الطماطم، الخيار المخلل، والبصل الأحمر و حلقات البصل المقلية', p: 195, img: './img/برجر سبيشيال وهمي.jpeg' },
  { id: 383, brand: 'Wahmy Burger', n: 'برجر البيكون الكلاسيكي', e:'Wahmy Burger', d: 'لحم الانقس وشرائح لحم البيكون وموص المايونيز مع إضافة الطماطم، الخس، الخيار المخلل، والبصل الأحمر', p: 210, img: './img/برجر البيكوني كلاسك وهمي.jpeg' },
  { id: 384, brand: 'Wahmy Burger', n: 'وجبة ساندوتش تشكن كلاسك', e:'Wahmy Burger', d: 'ساندوتش تشكن كلاسك + فرايز + مشروب', p: 200, img: './img/تشكن كلاسك وهمي.jpeg' },
  { id: 385, brand: 'Wahmy Burger', n: 'وجبة ساندوتش وود', e:'Wahmy Burger', d: 'لشكن وود ساندوتش + فرايز + مشروب', p: 205, img: './img/تشكن وود ساندوتش وهمي.jpeg' },
  { id: 386, brand: 'Wahmy Burger', n: 'وجبة ساندوتش تشكن ليهسي', e:'Wahmy Burger', d: 'ساندوتش تشكن تيستي + فرايز + مشروب', p: 245, img: './img/تشكن تيستي وهمي.jpeg' },
  { id: 387, brand: 'Wahmy Burger', n: 'Crunchy Dip Beef', e:'Wahmy Burger', d: 'كومبو: 2 ساندوتش بيف + تشيز كب + كرانشز كب + 2 مشروب', p: 365, img: './img/curn DIPوهمي.jpeg' },
  { id: 388, brand: 'Wahmy Burger', n: 'كورن ريبس', e:'Wahmy Burger', d: 'سناكس', p: 55, img: './img/كورن ريبس.jpeg' },
  { id: 389, brand: 'Wahmy Burger', n: 'بطاطس بالجبنة', e:'Wahmy Burger', d: 'سناكس', p: 75, img: './img/بطاطس جبنه.jpeg' },
  { id: 390, brand: 'Wahmy Burger', n: 'وهمي سناكس',  e:'Wahmy Burger',d: 'سناكس', p: 95, img: './img/وهمي سناكس.jpeg' },
  { id: 391, brand: 'Wahmy Burger', n: 'بطاطس',  e:'Wahmy Burger',d: 'سناكس', p: 55, img: './img/باكيت بطاطس .jpeg' },
  { id: 392, brand: 'Wahmy Burger', n: 'لودد فرايز',  e:'Wahmy Burger',d: 'سناكس', p: 100, img: './img/logo wahmyyy2.jpeg' },
  { id: 393, brand: 'Wahmy Burger', n: 'صوص رانش',  e:'Wahmy Burger',d: 'إضافات', p: 35, img: './img/رانش.jpeg' },
  { id: 394, brand: 'Wahmy Burger', n: 'صوص باربكيو', e:'Wahmy Burger', d: 'إضافات', p: 40, img: './img/باربكيوا.jpeg' },
  { id: 395, brand: 'Wahmy Burger', n: 'صوص جبنة', e:'Wahmy Burger', d: 'إضافات', p: 35, img: './img/logo wahmyyy2.jpeg' },
  { id: 396, brand: 'Wahmy Burger', n: 'صوص وهمي',  e:'Wahmy Burger',d: 'إضافات', p: 35, img: './img/logo wahmyyy2.jpeg' },
  { id: 397, brand: 'Wahmy Burger', n: 'بيف بيكون', e:'Wahmy Burger', d: 'إضافات', p: 45, img: './img/logo wahmyyy2.jpeg' },
  { id: 398, brand: 'Wahmy Burger', n: 'قطعة برجر لحمة',  e:'Wahmy Burger',d: 'إضافات', p: 115, img: './img/logo wahmyyy2.jpeg' },
  { id: 399, brand: 'Wahmy Burger', n: 'اضافة صوص من غير جبنة', e:'Wahmy Burger', d: 'إضافات', p: 80, img: './img/logo wahmyyy2.jpeg' },
  { id: 400, brand: 'Wahmy Burger', n: 'اضافة بصل مكرمل',  e:'Wahmy Burger',d: 'إضافات', p: 35, img: './img/logo wahmyyy2.jpeg' },
  { id: 401, brand: 'Wahmy Burger', n: 'مشروم', e:'Wahmy Burger', d: 'إضافات', p: 35, img: './img/logo wahmyyy2.jpeg' },
  { id: 402, brand: 'Wahmy Burger', n: 'حلقات بصل', e:'Wahmy Burger', d: 'إضافات', p: 35, img: './img/logo wahmyyy2.jpeg' },
  { id: 403, brand: 'Wahmy Burger', n: 'اصابع موزاريلا',  e:'Wahmy Burger',d: 'إضافات', p: 35, img: './img/logo wahmyyy2.jpeg' },
  { id: 404, brand: 'Wahmy Burger', n: 'صوص فاير وود', e:'Wahmy Burger', d: 'إضافات', p: 35, img: './img/logo wahmyyy2.jpeg' },
  { id: 405, brand: 'Wahmy Burger', n: 'صوص باربكيو حار',  e:'Wahmy Burger',d: 'إضافات', p: 40, img: './img/logo wahmyyy2.jpeg' },
  { id: 406, brand: 'Wahmy Burger', n: 'صوص مايونيز', e:'Wahmy Burger', d: 'إضافات', p: 35, img: './img/logo wahmyyy2.jpeg' },
  { id: 407, brand: 'Wahmy Burger', n: 'صوص مايونيز شيدر', e:'Wahmy Burger', d: 'إضافات', p: 35, img: './img/logo wahmyyy2.jpeg' },
  { id: 408, brand: 'Wahmy Burger', n: 'مياة', e:'Wahmy Burger', d: 'إضافات', p: 20, img: './img/logo wahmyyy2.jpeg' },
  { id: 409, brand: 'Wahmy Burger', n: 'سوفت درنك',  e:'Wahmy Burger',d: 'إضافات', p: 25, img: './img/logo wahmyyy2.jpeg' },
  { id: 410, brand: 'Wahmy Burger', n: 'كورن بيس مشوي', e:'Wahmy Burger', d: 'إضافات', p: 30, img: './img/logo wahmyyy2.jpeg' },
  { id: 411, brand: 'Wahmy Burger', n: 'اضافة بصل احمر', e:'Wahmy Burger', d: 'إضافات', p: 20, img: './img/logo wahmyyy2.jpeg' },
  { id: 412, brand: 'Wahmy Burger', n: 'اضافة طماطم', e:'Wahmy Burger', d: 'إضافات', p: 20, img: './img/logo wahmyyy2.jpeg' },
  { id: 413, brand: 'Wahmy Burger', n: 'اضافة خس', e:'Wahmy Burger', d: 'إضافات', p: 20, img: './img/logo wahmyyy2.jpeg' },
  { id: 414, brand: 'Wahmy Burger', n: 'اضافة جبنة سايحة', e:'Wahmy Burger', d: 'إضافات', p: 30, img: './img/logo wahmyyy2.jpeg' },
  { id: 415, brand: 'Wahmy Burger', n: 'اضافة خيار مخلل', e:'Wahmy Burger', d: 'إضافات', p: 35, img: './img/logo wahmyyy2.jpeg' },
  { id: 416, brand: 'Wahmy Burger', n: 'اضافة صويا صوص', e:'Wahmy Burger', d: 'إضافات', p: 35, img: './img/logo wahmyyy2.jpeg' },
  { id: 417, brand: 'Wahmy Burger', n: 'اضافة صوص فلفل حار',  e:'Wahmy Burger',d: 'إضافات', p: 35, img: './img/logo wahmyyy2.jpeg' },
  { id: 418, brand: 'Wahmy Burger', n: 'اضافة حلقات بصل', e:'Wahmy Burger', d: 'إضافات', p: 35, img: './img/logo wahmyyy2.jpeg' },
  { id: 419, brand: 'Wahmy Burger', n: 'اضافة مايونيز شيدر',  e:'Wahmy Burger',d: 'إضافات', p: 45, img: './img/logo wahmyyy2.jpeg' },
  { id: 420, brand: 'Wahmy Burger', n: 'اضافة صوص مايونبز شيدر', e:'Wahmy Burger', d: 'إضافات', p: 30, img: './img/logo wahmyyy2.jpeg' },
  { id: 421, brand: 'Wahmy Burger', n: 'اضافة خيار مخلل',  e:'Wahmy Burger',d: 'إضافات', p: 20, img: './img/logo wahmyyy2.jpeg' },
  {id:422,brand:'Koshary Al Khedewy',e:'🥘​',n:'بشواتي',d: 'علبة كشري صغيره',p:30,img:"./img/صغيره.jpeg"},
  {id:423,brand:'Koshary Al Khedewy',e:'🥘​',n:'سلطاني',d: 'علبة كشري صغيره *1',p:35,img:"./img/خديوي2.jpeg"},
  {id:424,brand:'Koshary Al Khedewy',e:'🥘​',n:'عثماني',d: 'علبة كشري مطوسطه',p:44,img:"./img/خديوي2.jpeg"},
  {id:425,brand:'Koshary Al Khedewy',e:'🥘​',n:'ملوكي',d: 'علبة كشري كبيره*1',p:55,img:"./img/خديوي2.jpeg"},
  {id:426,brand:'Koshary Al Khedewy',e:'🥘​',n:'خديوي',d: 'علبة كشري كبيره*2',p:65,img:"./img/خديوي2.jpeg"},
  {id:427,brand:'Koshary Al Khedewy',e:'🥘​',n:'طاجن ساده',d: 'طاجن ساده' ,p:45,img:"./img/خضار.jpeg"},
  {id:428,brand:'Koshary Al Khedewy',e:'🥘​',n:'طاجن خضار',d: 'طاجن خضار',p:55,img:"./img/خضار.jpeg"},
  {id:429,brand:'Koshary Al Khedewy',e:'🥘​',n:'طاجن لحمه',d: 'طاجن لحمه ',p:65,img:"./img/فراخ.jpeg"},
  {id:500,brand:'Koshary Al Khedewy',e:'🥘​',n:'طاجن فراخ/سجق',d: 'طاجن فراخ او سجق',p:70,img:"./img/فراخ.jpeg"},
  {id:501,brand:'Koshary Al Khedewy',e:'🥘​',n:'صاروخ سادة',d: '',p:70,img:"./img/فراخ.jpeg"},
  {id:502,brand:'Koshary Al Khedewy',e:'🥘​',n:'ديناميت خضار',d: '',p:80,img:"./img/فراخ.jpeg"},
  {id:503,brand:'Koshary Al Khedewy',e:'🥘​',n:'ديناميت لحمة',d: '',p:90,img:"./img/فراخ.jpeg"},
  {id:504,brand:'Koshary Al Khedewy',e:'🥘​',n:' ديناميت فراخ/سجق',d: '',p:95,img:"./img/فراخ.jpeg"},
  {id:505,brand:'Koshary Al Khedewy',e:'🥘​',n:'وليمة كشري ',d: '',p:115,img:"./img/فراخ.jpeg"},
  {id:506,brand:'Koshary Al Khedewy',e:'🥘​',n:'وليمه لحمة',d: '',p:130,img:"./img/فراخ.jpeg"},
  {id:507,brand:'Koshary Al Khedewy',e:'🥘​',n:'وليمة فراخ/سجق',d: '',p:135,img:"./img/فراخ.jpeg"},
  {id:508,brand:'Koshary Al Khedewy',e:'🥘​',n:'فته مولانا',d: '',p:55,img:"./img/فراخ.jpeg"},
  {id:509, brand: 'Hawawshi Al Refaie', e: '🥙', n: 'سادة', d: 'لحمة متبله', p: 97, img: './img/حواوشي ساده.jpeg'},
  {id:510, brand: 'Hawawshi Al Refaie', e: '🥙', n: 'سادة OVER SIZE 5XL', d: 'لحمة  (جديد)', p: 117, img: './img/حواوشي اوفر سيز.jpeg'},
  {id:512, brand: 'Hawawshi Al Refaie', e: '🥙', n: 'خضروات', d: 'لحمة متبلة + خضروات', p: 95, img: './img/حواوشي خضار.jpeg'},
  {id:513, brand: 'Hawawshi Al Refaie', e: '🥙', n: 'حواوشي بالخلطة الاسكندراني', d: 'لحمة متبلة + خضروات + مخلل سبيسي', p: 107, img: './img/حواوشي خلطه اسكندراني.jpeg'},
  {id:514, brand: 'Hawawshi Al Refaie', e: '🥙', n: 'دبل جبنة', d: 'لحمة متبلة + 2 شريحة شيدر + خضروات', p: 112, img: './img/حواشي دبل جبنه.jpeg'},
  {id:515, brand: 'Hawawshi Al Refaie', e: '', n: 'اكسترا جبنة', d: 'لحمة متبلة + 4 شريحة شيدر + خضروات', p: 127, img: './img/حواشي دبل جبنه.jpeg'},
  {id:516, brand: 'Hawawshi Al Refaie', e: '🥙', n: 'سجق', d: 'لحمة بتتبيلة السجق + خضروات', p: 110, img: './img/حواوشي سجق.jpeg'},
  {id:517, brand: 'Hawawshi Al Refaie', e: '🥙', n: 'سوبر سجق', d: 'لحمة بتتبيلة السجق + قطع سجق + خضروات', p: 132, img: './img/الرفاعي.jpeg'},
  {id:518, brand: 'Hawawshi Al Refaie', e: '🥙', n: 'سجق كيري', d: 'لحمة بتتبيلة السجق + كيري + خضروات', p: 137, img: './img/الرفاعي.jpeg'},
  {id:5119, brand: 'Hawawshi Al Refaie', e: '🥙', n: 'لحمة كيري', d: 'لحمة متبلة + كيري + خضروات', p: 127, img: './img/حواوشي سوبر كيري.jpeg'},
  {id:520, brand: 'Hawawshi Al Refaie', e: '🥙', n: 'ضاني', d: 'لحمة شاني متبلة + خضروات', p: 117, img: './img/حواوشي لحمه ضاني.jpeg'},
  {id:521, brand: 'Hawawshi Al Refaie', e: '🥙', n: 'هالبيينو', d: 'لحمة متبلة + هالبيينو', p: 102, img: './img/حواوشي سجق.jpeg'},
  {id:522, brand: 'Hawawshi Al Refaie', e: '🥙', n: 'حواوشي بالسجق الاسكندراني', d: 'لحمة متبلة + قطع سجد بالخلطة الاسكندراني + خضار (جديد)', p: 142, img: './img/حواوشي سجق.jpeg'},
  {id: 523, brand: 'Hawawshi Al Refaie', e: '🥙', n: 'ميكس تركي', d: 'لحمة متبلة + تركي مدخن + خضروات + شيدر', p: 127, img: './img/حواوشي ميكس تركي.jpeg'},
  {id: 524, brand: 'Hawawshi Al Refaie', e: '🥙', n: 'ميكس بسطرمة', d: 'لحمة متبلة + بسطرمة + خضروات + شيدر', p: 127, img: './img/حواوشي ميكس بسطرمه.jpeg'},
  {id: 525, brand: 'Hawawshi Al Refaie', e: '', n: 'ميكس سجق', d: 'لحمة بتتبيلة السجق + بسطرمة + شيدر', p: 137, img: './img/الرفاعي.jpeg'},
  {id: 526, brand: 'Hawawshi Al Refaie', e: '', n: 'ميكس بيف بيكون', d: 'لحمة متبلة + بيف بيكون + مشروم + خضروات + شيدر + صوص بيج تيستي', p: 142, img: './img/ميكس بيف بيكون.jpeg'},
  {id: 524, brand: 'Hawawshi Al Refaie', e: '🥙', n: 'ميكس انتركوت', d: 'لحمة متبلة + انتركوت + خضروات', p: 157, img: './img/حواوشي ساده.jpeg'},
  {id: 528, brand: 'Hawawshi Al Refaie', e: '🥙', n: 'ميكس 4 سيزون', d: 'فراخ + سجق + لحمة _ + بسطرمة + تركي مدخن + خضروات + شيدر', p: 142, img: './img/حواوشي ميكس 4سيزون.jpeg'},
  {id: 529, brand: 'Hawawshi Al Refaie', e: '🥙', n: 'ميكس لحمة كيري', d: 'لحمة متبلة + بسطرمة + كيري', p: 142, img: './img/حواوشي ميكس لحمه كيري.jpeg'},
  {id: 530, brand: 'Hawawshi Al Refaie', e: '🥙', n: 'ميكس سجق كيري', d: 'لحمة بتتبيلة السجق + بسطرمة + كيري', p: 152, img: './img/حواوشي سجق.jpeg'},
  {id: 531, brand: 'Hawawshi Al Refaie', e: '', n: 'صاحبة السعادة', d: 'لحمة متبلة + تركي مدخن + انتركوت + خضروات + شيدر', p: 162, img: './img/حواوشي صاحب السعاده.jpeg'},
  {id: 532, brand: 'Hawawshi Al Refaie', e: '🥙', n: 'بيج رامي', d: 'لحمة متبلة + انتركوت + تركي + بسطرمة + بيج تيستي + مشروم + بيف بيكون + خضروات + شيدر', p: 227, img: './img/حواوشي بيج رامي.jpeg'},
  {id: 533, brand: 'Hawawshi Al Refaie', e: '🥙', n: 'اورما لحمة', d: 'لحمة متبلة + خضروات', p: 127, img: './img/حواوشي ساده.jpeg'},
  {id: 534, brand: 'Hawawshi Al Refaie', e: '', n: 'رغيف ورقه مشكل', d: 'كبد+ قلوب+ شرائح لحم متبلة + علبة طحينة', p: 167, img: './img/حواوشي رغيف ورقه مشكل.jpeg'},
  {id: 535, brand: 'Hawawshi Al Refaie', e: '🥗', n: 'الكبير أوي', d: 'انتركوت + بيف بيكون + شيدر', p: 217, img: './img/حواوشي الكبير اووي.jpeg'},
  {id: 536, brand: 'Hawawshi Al Refaie', e: '', n: 'جريمة اكل', d: 'تركي مدخن _ شرائح بسطرمة _ خضروات _ شيدر', p: 137, img: './img/حواوشي جريمه اكل .jpeg'},
  {id: 537, brand: 'Hawawshi Al Refaie', e: '🥗', n: 'بسطرمه', d: 'بسطرمة_ خضروات _ شيدر', p: 137, img: './img/حواوشي بسطرمه.jpeg'},
  {id: 538, brand: 'Hawawshi Al Refaie', e: '🥗', n: 'حواوشي كافا تونة', d: 'تونه كافا + مشروم+ خضروات +مايونز+صوص رانش', p: 167, img: './img/حواوشي كافا تونه.jpeg'},
  {id:539, brand: 'Hawawshi Al Refaie', e: '🍗', n: 'سادة', d: 'فراخ', p: 97, img: './img/حواوشي فراخ.jpeg'},
  {id:540, brand: 'Hawawshi Al Refaie', e: '', n: 'فاهيتا فراخ', d: 'فراخ', p: 122, img: './img/حواوشي فاهيتا فراخ.jpeg'},
  {id:541 , brand: 'Saadaawy Burger',e:'🍔', n: 'هالبينو تشيكن', d: 'قطعة فرايد تشيكن،هالبينو- خس، موص مايونيز - موص شيدر، كاتشب', p: 155, img: './img/saadawy 5.jpeg'},
  {id:542 , brand: 'Saadaawy Burger',e:'🍔', n: 'كلاسيك تشيكن', d: 'قطعة فرايد تشيكن، خس - خيار مخلل، موص مايونيز - موص شيدر، كاتشب', p: 130, img: './img/سموكي تشكن.jpeg'},
  {id:543 , brand: 'Saadaawy Burger',e:'🍔', n: 'تشيكن رانش', d: 'قطعة فرايد تشيكن، مشروم - خس - خيار مخلل، موص مايونيز - موص شيدر، موص رانش - كاتشب', p: 175, img: './img/saadawy 5.jpeg'},
  {id:544 , brand: 'Saadaawy Burger',e:'🍔', n: 'تشيزي تشيكن', d: 'قطعة فرايد تشيكن، موزاريلا سليك - خس، خيار مخلل - موص مايونيز، موص شيدر - كاتشب', p: 175, img: './img/saadawy 6.jpeg'},
  {id:545 , brand: 'Saadaawy Burger',e:'🍔', n: 'باربكيو رينج', d: 'قطعة فرايد تشيكن، حلقات بصل - خس - خيار مخلل، موص باربكيو - موص مايونيز، موص شيدر - كاتشب', p: 170, img: './img/باربيكيوا رينح بيف.jpeg'},
  {id:546 , brand: 'Saadaawy Burger',e:'🍔', n: 'سموكي تشيكن', d: 'قطعة فرايد تشيكن، تركي مدخن - خس، خيار مخلل - موص مايونيز، موص شيدر - كاتشب', p: 170, img: './img/سموكي تشكن.jpeg'},
  {id:547 , brand: 'Saadaawy Burger',e:'🍔', n: 'سعداوي تشيكن', d: 'قطعة فرايد تشيكن، موزاريلا سليك - تركي مدخن، خس - خيار مخلل، موص مايونيز - موص شيدر، كاتشب', p: 195, img: './img/سعداوي يرجر.jpeg'},
  {id:548 , brand: 'Saadaawy Burger',e:'🍔', n: 'هالبينو', d: 'قطعة برجر محشي جبنة، هالبينو - خس، موص بيج تيستي - موص شيدر، كاتشب', p: 155, img: './img/saadawy 3.jpeg'},
  {id:549 , brand: 'Saadaawy Burger',e:'🍔', n: 'كلاسيك برجر', d: 'قطعة برجر دسم، خس - بمل - خيار مخلل، موص بيج تيستي - كاتشب', p: 130, img: './img/saadaway 1.jpeg'},
  {id:550 , brand: 'Saadaawy Burger',e:'🍔', n: 'تشيزي برجر', d: 'قطعة برجر محشي جبنة، موزاريلا سليك - خس، خيار مخلل - موص بيج تيستي، موص شيدر - كاتشب', p: 175, img: './img/saadawy 2.jpeg'},
  {id:551 , brand: 'Saadaawy Burger',e:'🍔', n: 'مشروم رانش', d: 'قطعة برجر محشي جبنة، مشروم - خس - خيار مخلل، موص بيج تيستي - موص شيدر، موص رانش - كاتشب', p: 175, img: './img/saadawy 4.jpeg'},
  {id:552 , brand: 'Saadaawy Burger',e:'🍔', n: 'باربكيو رينج', d: 'قطعة برجر محشي جبنة، حلقات بصل - موص باربكيو، خس - خيار مخلل، موص بيج تيستي - كاتشب', p: 170, img: './img/باربيكيوا رينح بيف.jpeg'},
  {id:553 , brand: 'Saadaawy Burger',e:'🍔', n: 'سموكي برجر', d: 'قطعة برجر محشي جبنة، بيف بيكون - خس، خيار مخلل، موص بيج تيستي - موص شيدر، كاتشب', p: 170, img: './img/سموكي برجر.jpeg'},
  {id:554 , brand: 'Saadaawy Burger',e:'🍔', n: 'سعداوي برجر', d: 'قطعة برجر محشي جبنة، موزاريلا سليك - بيف بيكون، خس - خيار مخلل، موص بيج تيستي - موص شيدر، كاتشب', p: 185, img: './img/سعداوي يرجر.jpeg'},
  {id:555 , brand: 'Saadaawy Burger',e:'🍔', n: 'تشيزيز بوم', d: 'قطعة برجر محشي جبنة، شيدر وموزاريلا، دبل، خيار مخلل - بصل، موص باربكيو - موص شيدر، موص رانش - كاتشب', p: 155, img: './img/تشيزي برجر.jpeg'},
  {id:556 , brand: 'Saadaawy Burger',e:'🍔', n: 'بيكون رانش', d: 'قطعة برجر محشي جبنة، مشروم - موزاريلا، خس - خيار مخلل - بصل، موص بيج تيستي - موص شيدر، موص رانش - كاتشب', p: 180, img: './img/تشيزي .jpeg'},
  {id:557 , brand: 'Saadaawy Burger',e:'🍔', n: 'كوكو', d: 'قطعة دجاج محشي جبنة، خس - خيار مخلل، موص بيج تيستي، موص شيدر - كاتشب', p: 120, img: './img/كوكو.jpeg'},
  {id:558, brand: 'Saadaawy Burger',e:'🍔', n: 'بطاطس شيدر', d: 'بطاطس، دمج، خيار، موص مايونيز، موص شيدر', p: 55, img: './img/بطاطس شيدر.jpeg'},
  {id:559, brand: 'Saadaawy Burger',e:'🍔', n: 'بطاطس استريس', d: 'بطاطس، إسبراس، خس، خيار، امثني، موص شيدر', p: 95, img: './img/بطاطس استربس.jpeg'},
  {id:600, brand: 'Saadaawy Burger',e:'🍔', n: 'بطاطس موتزريا', d: 'بطاطس، دمج، خيار، موزاريلا، موص مايونيز، موص شيدر', p: 65, img: './img/بطاطس منزريلا.jpeg'},
  {id:601, brand: 'Saadaawy Burger',e:'🍔', n: 'فاهيتا فراخ', d: 'لشيكو فاهيتا، خس، موص مايونيز، موص شيدر', p: 95, img: './img/WhatsApp Image 2026-04-22 at 6.55.11 PM.jpeg'},
  {id:602, brand: 'Saadaawy Burger',e:'🍔', n: 'سعداوي راب', d: 'برزر مشوي، ماظلي، فت، خيار مخلل، موص تيستي، موص شيدر', p: 105, img: './img/سعداوي راب.jpeg'},
  {id:603, brand: 'Saadaawy Burger',e:'🍔', n: 'برجر ميكسيكيان', d: 'برزر مشوي والأعلافة المكسيكية، خس، موص تيستي، موص شيدر', p: 105, img: './img/برجر مكسيك.jpeg'},
  {id:604, brand: 'Saadaawy Burger',e:'🍔', n: 'سجق شرقي', d: 'سجق والبطاطة المتسبكيه، خس، موص ليستي، موص شيدر', p: 85, img: './img/سيدق شرقي.jpeg'},
  {id:605, brand: 'Saadaawy Burger',e:'🍔', n: 'مايونيز', d: 'صوص', p: 30, img: './img/ميونيز.jpeg'},
  {id:606, brand: 'Saadaawy Burger',e:'🍔', n: 'بيج تيستي', d: 'صوص', p: 30, img: './img/بيج تست.jpeg'},
  {id:607, brand: 'Saadaawy Burger',e:'🍔', n: 'رانش', d: 'صوص', p: 30, img: './img/رانش.jpeg'},
  {id:608, brand: 'Saadaawy Burger',e:'🍔', n: 'شيدر', d: 'صوص', p: 30, img: './img/شيدر.jpeg'},
  {id:609, brand: 'Saadaawy Burger',e:'🍔', n: 'باربكيو', d: 'صوص', p: 30, img: './img/باربكيوا.jpeg'},
  { id: 610, brand: 'Krebs', n: 'كريب بطاطس بالجبنة الموتزريلا', d: 'بطاطس فريش مقرمشة ومتبلة بنكهة كريبز، مع جبنة موتزاريلا سايحة، وخضار فريش من طماطم وفلفل أخضر وفلفل ألوان وزيتون، وصوص كاتشب ومايونيز', p: 80, img: './img/كريب بطاطس جبنه.jpeg' },
  { id: 611, brand: 'Krebs', n: 'كريب تشيكن استربس', d: 'شرائح دجاج استربس مقرمشة، مع جبنة موتزاريلا سايحة، وخضار فريش من فلفل أخضر وفلفل ألوان وزيتون، وصوص كاتشب ومايونيز', p: 145, img: './img/كريب استربس.jpeg' },
  { id: 612, brand: 'Krebs', n: 'كريب تشيكن زنجر حار', d: 'دجاج زنجر حار مقرمش، مع جبنة موتزاريلا سايحة، وخضار فريش من فلفل أخضر وفلفل ألوان وزيتون، وصوص كاتشب ومايونيز وصوص بافلو', p: 145, img: './img/كريب استربس.jpeg' },
  { id: 613, brand: 'Krebs', n: 'كريب صدور مشوية', d: 'صدور دجاج فريش مشوية على الجريل، مع جبنة موتزاريلا سايحة، وطماطم وفلفل أخضر وفلفل ألوان وبصل وزيتون، وصوص باربكيو ومايونيز', p: 170, img: './img/كريب استربس.jpeg' },
  { id: 614, brand: 'Krebs', n: 'كريب شيش طاووق', d: 'مكعبات شيش طاووق فريش متبلة ومشوية على الجريل، مع جبنة موتزاريلا سايحة، وخضار فريش من طماطم وفلفل أخضر وفلفل ألوان وبصل وزيتون، وصوص الثومية وكاتشب', p: 160, img: './img/كريب شيش تاوك.jpeg' },
  { id: 615, brand: 'Krebs', n: 'كريب شاورما دجاج', d: 'شاورما دجاج فريش ( جريل )، مع جبنة موتزاريلا سايحة، وخضار فريش من طماطم وفلفل أخضر وفلفل ألوان وبصل وزيتون، وصوص الثومية وكاتشب', p: 170, img: './img/كريب شاورما فراخ.jpeg' },
  { id: 616, brand: 'Krebs', n: 'كريب فاهيتا دجاج', d: 'فاهيتا دجاج فريش، مع جبنة موتزاريلا سايحة، وخضار فريش من طماطم وفلفل أخضر وفلفل ألوان وبصل وزيتون، وصوص كاتشب ومايونيز وشيدر', p: 170, img: './img/فاهيتا راب.jpeg' },
  { id: 617, brand: 'Krebs', n: 'كريب برجر لحم', d: 'برجر لحم مشوي فريش، مع جبنة موتزاريلا سايحة، وخضار فريش من طماطم وفلفل أخضر وفلفل ألوان وبصل وزيتون، وصوص مايونيز وباربكيو', p: 155, img: './img/كريب شاورما لحم.jpeg' },
  { id: 618, brand: 'Krebs', n: 'كريب سجق بلدي', d: 'سجق متبل ومشوح على الجريل، مع جبنة موتزاريلا سايحة، وخضار فريش من طماطم وفلفل أخضر وفلفل ألوان وبصل وزيتون، وصوص مايونيز وباربكيو', p: 145, img: './img/كريب مكس لحوم.jpeg' },
  { id: 619, brand: 'Krebs', n: 'كريب شاورما لحم', d: 'شاورما لحم فريش ( جريل )، مع جبنة موتزاريلا سايحة، وخضار فريش من طماطم وفلفل أخضر وفلفل ألوان وبصل وزيتون، وصوص الثومية والكاتشب', p: 230, img: './img/كريب شاورما لحم.jpeg' },
  { id: 620, brand: 'Krebs', n: 'كريب فاهيتا لحم', d: 'فاهيتا لحم فريش مشوحة على الجريل، مع جبنة موتزاريلا سايحة، وخضار فريش من طماطم وفلفل أخضر وفلفل ألوان وبصل وزيتون، وصوص كاتشب ومايونيز وشيدر', p: 245, img: './img/كريب مكس لحوم.jpeg' },
  { id: 621, brand: 'Krebs', n: 'كريب كفتة', d: 'كفتة لحم مشوية، مع جبنة موتزاريلا سايحة، وخضار فريش من طماطم وفلفل أخضر وفلفل ألوان وبصل وزيتون، وصوص الثومية والكاتشب', p: 145, img: './img/كريب شاورما لحم.jpeg' },
  { id: 622, brand: 'Krebs', n: 'كريب هوت دوج', d: 'هوت دوج مشوح على الجريل، مع جبنة موتزاريلا سايحة، وخضار فريش من طماطم وفلفل أخضر وفلفل ألوان وبصل وزيتون، وصوص كاتشب ومايونيز ومستردة', p: 135, img: './img/كريب مكس لحوم.jpeg' },
  { id: 623, brand: 'Krebs', n: 'كريب بسطرمة', d: 'بسطرمة بلدي، مع جبنة موتزاريلا سايحة، وخضار فريش من طماطم وفلفل أخضر وفلفل ألوان وبصل وزيتون، وصوص كاتشب ومايونيز', p: 225, img: './img/كريب بسطرمه.jpeg' },
  { id: 624, brand: 'Krebs', n: 'كريب ميكس فراخ', d: 'ميكس دجاج استربس و صدور مشوية و شيش طاووق، مع جبنة موتزاريلا سايحة، وخضار فريش من طماطم وفلفل أخضر وفلفل ألوان وبصل وزيتون، وصوص كاتشب ومايونيز', p: 185, img: './img/كريب شاورما فراخ.jpeg' },
  { id: 625, brand: 'Krebs', n: 'كريب ميكس لحم', d: 'ميكس هوت دوج و كفتة و فاهيتا لحم، مع جبنة موتزاريلا سايحة، وخضار فريش من طماطم وفلفل أخضر وفلفل ألوان وبصل وزيتون، وصوص الثومية المميز من كريبز', p: 195, img: './img/كريب مكس لحوم.jpeg' },
  { id: 626, brand: 'Krebs', n: 'كريب شاورما ميكس', d: 'ميكس شاورما لحم ودجاج، مع جبنة موتزاريلا سايحة، وخضار فريش من طماطم وفلفل أخضر وفلفل ألوان وبصل وزيتون، وصوص الثومية والكاتشب', p: 195, img: './img/كريب شاورما فراخ.jpeg' },
  { id: 627, brand: 'Krebs', n: 'كريب كريبز المميز', d: 'ميكس من البرجر المشوي و الاستربس و رومي مدخن و بيف بيكون، مع جبنة موتزاريلا سايحة، وخضار فريش من طماطم وفلفل أخضر وفلفل ألوان وبصل وزيتون، وصوص شيدر ومايونيز وباربكيو', p: 240, img: './img/logo krybz.jpeg' },
  { id: 628, brand: 'Krebs', n: 'باكيت بطاطس', d: 'اصناف جانبية', p: 42.5, img: './img/باكيت بطاطس .jpeg' },
  { id:629 , brand: 'Krebs', n: 'باكيت بطاطس شيدر', d: 'اصناف جانبية', p: 52.5, img: './img/باكيت بطاطس شيدر.jpeg' },
  { id: 630, brand: 'Krebs', n: 'باكيت بطاطس هالبينو حار', d: 'اصناف جانبية', p: 52.5, img: './img/باكيت بطاطس .jpeg' },
  { id: 631, brand: 'Krebs', n: 'باكيت بطاطس استربس', d: 'اصناف جانبية', p: 67.5, img: './img/باكيت بطاطس .jpeg' },
  { id:632 , brand: 'Krebs', n: 'كب شيدر', d: 'اصناف جانبية', p: 32.5, img: './img/logo krybz.jpeg' },
  { id:633 , brand: 'Krebs', n: 'إضافة حلقات بصل', d: 'إضافات', p: 42.5, img: './img/logo krybz.jpeg' },
  { id: 634, brand: 'Krebs', n: 'إضافة مشروم', d: 'إضافات', p: 22.5, img: './img/logo krybz.jpeg' },
  { id: 635, brand: 'Krebs', n: 'إكسترا جبنة موتزريلا', d: 'إضافات', p: 27.5, img: './img/منزوريلا استيكس.jpeg' },
  { id:636 , brand: 'Krebs', n: 'إضافة صوص شيدر', d: 'إضافات', p: 32.5, img: './img/شيدر.jpeg' },
  { id: 637, brand: 'Krebs', n: 'إضافة صوص رانش', d: 'إضافات', p: 22.5, img: './img/رانش.jpeg' },
  { id:638, brand: 'Krebs', n: 'إضافة صوص باربكيو', d: 'إضافات', p: 22.5, img: './img/باربكيوا.jpeg' },
  { id: 639, brand: 'Krebs', n: 'إضافة أصابع موتزريلا', d: 'إضافات', p: 42.5, img: './img/منزوريلا استيكس.jpeg' },
  { id: 640, brand: 'Krebs', n: 'إضافة بطاطس', d: 'إضافات', p: 27.5, img: './img/باكيت بطاطس .jpeg' },
  { id: 641, brand: 'Krebs', n: 'V Cola', d: 'مشروبات باردة', p: 27.5, img: './img/logo krybz.jpeg' },
  { id: 642, brand: 'Krebs', n: 'مياه معدنية صغيرة', d: 'مشروبات باردة', p: 12.5, img: './img/logo krybz.jpeg' },
  { id: 643, brand: 'Krebs', n: 'تويست', d: 'مشروبات باردة', p: 27.5, img: './img/logo krybz.jpeg' },
  { id: 644, brand: 'Krebs', n: 'V7 فراولة ليمون', d: 'مشروبات باردة', p: 27.5, img: './img/logo krybz.jpeg' },
  { id: 645, brand: 'Krebs', n: 'V7 ليمون', d: 'مشروبات باردة', p: 27.5, img: './img/logo krybz.jpeg' },
  {id: 646, brand: 'Sliceno',  n: 'بيتزا كرانش شيتوس تشيكن', p: 237, d: 'صدور الستربس المقرمشة مغطاه بـ شيتوس بالجبنة وصوص الشيدر والموتزاريلا والشيدر المبشور وصوص البيتزا', e: '🍕', img: './img/يتزا كرانش شيتوس.jpeg', },
  {id: 647, brand: 'Sliceno', n: 'بيتزا مارجريتا', p: 152, d: 'طبقات من الموتزاريلا وصوص البيتزا المميز', e: '🍕', img: './img/بيتزا مارجريتا.jpeg', },
  {id: 648, brand: 'Sliceno', n: 'بيتزا فيجيتريان', p: 167, d: 'طماطم وفلفل وزيتون وبصل وموتزاريلا وصوص البيتزا', e: '🍕', img: './img/بيتزا فيجيتريان.jpeg',},
  {id: 649, brand: 'Sliceno', n: 'بيتزا تشيز لافرز', p: 197, d: 'صوص البيتزا مع جبنة ريكفورد فرنسية وكيري أصلي وفلامنك هولندي وشيدر كندي ورومي مصري أعلى جودة وموتزاريلا طبيعي 100%', e: '🍕', img: './img/بيتزا تشيز لافرز.jpeg', },
  {id: 650, brand: 'Sliceno', n: 'بيتزا ميكس لحوم', p: 282, d: 'لحمة مفرومة وببروني وسجق وموتزاريلا وصوص بيتزا', e: '🍕', img: './img/بيتزا ميكس لحوم.jpeg',},
  {id: 651, brand: 'Sliceno', n: 'بيتزا ببروني', p: 202, d: 'ببرونى بتتبيلة سلايزينو وصوص البيتزا والموتزاريلا', e: '🍕', img: './img/بيتزا ببروني.jpeg',},
  {id: 652, brand: 'Sliceno', n: 'بيتزا سجق', p: 217, d: 'سجق وطماطم وفلفل اخضر وصوص البيتزا وموتزاريلا وصوص سيراتشا', e: '🍕', img: './img/بيتزا سجق.jpeg',},
  {id: 653, brand: 'Sliceno', n: 'بيتزا تشيكن باربيكيو', p: 222, d: 'دجاج مشوى وفلفل رومي وبصل كاراميل وصوص الثوم وموتزاريلا وصوص الباربكيو المدخن', e: '🍕', img: './img/بيتزا تشكن باربيكيو.jpeg',},
  {id:654, brand: 'Sliceno', n: 'بيتزا تشيكن رانش', p: 222, d: 'دجاج مشوى وفلفل اخضر وصوص البيتزا وموتزاريلا وصوص الرانش', e: '🍕', img:'./img/بيتزا تشكن رانش.jpeg' ,},
  {id:655, brand: 'Sliceno', n: 'بيتزا ستربس', p: 222, d: 'صدور الستربس المقرمشة وفلفل اخضر وموتزاريلا وصوص البيتزا', e: '🍕', img: './img/بيتزا استربس.jpeg',},
  {id:656, brand: 'Sliceno', n: 'بيتزا تشيكن سبايسي نار ( خطر جداً )', p: 222, d: 'فراخ مشوية متبلة بخلطه سبايسي نار وفلفل حار وموتزاريلا وصوص بيتزا', e: '🌶️', img: './img/بيتزا تشكن اسبايسي نااار.jpeg',},
  {id:657, brand: 'Sliceno', n: 'بيتزا سي فود لافرز', p: 352, d: 'جمبري وكابوريا وزيتون وفلفل اخضر وبصل وصوص البيتزا والموتزاريلا ومغطاه بصوص سلايزينو', e: '🍕', img: './img/بيتزا سي فود.jpeg',},
  {id:658, brand: 'Sliceno', n: 'بيتزا سيزر تونة', p: 317, d: 'تونة وبصل وطماطم وفلفل اخضر وذرة حلوة وموتزاريلا وصوص ثوم وخس ومغطاه بصوص سيزر', e: '🍕', img: './img/بيتزا سيزر تونه.jpeg',},
  {id:659, brand: 'Sliceno', n: 'بيتزا تانجي جمبري', p: 352, d: 'جمبري كريسبي وفلفل احمر مشوي وفلفل اخضر وصوص ثوم وموتزاريلا ومغطاه بصوص التانجي', e: '🍕', img: './img/بيتزا تانجي جمبري.jpeg',},
  {id:660, brand: 'Sliceno', n: 'بيتزا بوتاتو مدخنة', p: 192, d: 'صوص البيتزا مع الباربكيو المدخن وبطاطس الوميت بتتبيلة سلايزينو الخاصة وموتزاريلا وشيدر مدخن', e: '🍕', img: './img/بيتزا بوتاتو مدخنه.jpeg',},
  {id:661, brand: 'Sliceno', n: 'بيتزا فورمكس', p: 222, d: 'بيتزا 4 أصناف من اختيارك', e: '🍕', img: './img/بيتزا فور مكس.jpeg',},
  {id:662, brand: 'Sliceno', n: 'بيتزا هاواينو', p: 282, d: 'قطع أناناس وتركي مدخن وفراخ مشوية وفلفل رومي مع صوص البيتزا المدخن ومغطى بالموتزريلا وصوص هاواينو المميز', e: '🍕', img: './img/بيتزا هاو اينو.jpeg',},
  {id: 663, brand: 'Sliceno', n: 'بيتزا بيج سوبر سوبريم', p: 342, d: '٢٥٠ جرام بروتين ( فراخ مشوية و تركي مدخن و سجق و بيبروني و لحم مفروم ) وطماطم وفلفل اخضر وصوص البيتزا وموتزاريلا', e: '🍕', img: './img/بيتزا سوبر سوبريم.jpeg',},
  {id: 664, brand: 'Sliceno', n: 'بيتزا ببروني هوت هني', p: 237, d: 'ببرونى بتتبيلة سلايزينو مع الفلفل الحار وصوص البيتزا والموتزاريلا ومغطاه بالعسل الحار', e: '🍕', img: './img/بيتزا ببروني هوت هني.jpeg',},
  {id: 665, brand: 'Sliceno', n: 'صوص رانش', p: 47, d: '', e: '🥫', img: './img/رانش.jpeg',},
  {id: 666, brand: 'Sliceno', n: 'صوص باربيكيو', p: 47, d: '', e: 'بلبن', img: './img/باربكيوا.jpeg',},
  {id: 667, brand: 'Sliceno', n: 'صوص بافلو', p: 47, d: '', e: '🌶️', img: './img/logo pezza.jpeg',},
  {id: 668, brand: 'Sliceno', n: 'صوص سيزر', p: 47, d: '', e: '🥗', img: './img/logo pezza.jpeg',},
  {id: 669, brand: 'Sliceno', n: 'صوص سلايزينو الخاص', p: 57, d: '', e: '👑', img: './img/logo pezza.jpeg',},
  {id: 700, brand: 'Sliceno', n: 'صوص تانجي', p: 47, d: '', e: '🍯', img: './img/logo pezza.jpeg',},
  {id: 701, brand: 'Sliceno', n: 'هوت صوص', p: 27, d: '', e: '🔥', img: './img/logo pezza.jpeg',},
  {id: 702, brand: 'Sliceno', n: 'كاتشب', p: 22, d: '', e: '🍅', img: './img/كاتشب.jpeg',},
  {id: 703, brand: 'Sliceno', n: 'مايونيز', p: 22, d: '', e: '🥚', img: './img/ميونيز.jpeg',},
  {id: 704, brand: 'Sliceno', n: 'صوص سيراتشا', p: 47, d: '', e: '🌶️', img: './img/logo pezza.jpeg',},
  {id: 705, brand: 'Sliceno', n: 'صوص شيدر ( بيور 100% )', p: 67, d: '', e: '🧀', img: './img/شيدر.jpeg',},
  {id: 706, brand: 'Sliceno', n: 'بطاطسينو مقرمشة', p: 62, d: '', e: '🍟', img: './img/باكيت بطاطس .jpeg',},
  {id: 707, brand: 'Sliceno', n: 'كوكيزينو ( 9 قطع )', p: 67, d: '', e: '🍪', img: './img/كوكيزينو.jpeg',},
  {id: 708, brand: 'Sliceno',n: 'Power up combo', p: 307, d: 'بيتزا فورمكس مع مشروب من اختيارك و باكيت بطاطس و سويتزا نوتيلا أو وايت شوكليت', e: '📦', img: './img/logo pezza.jpeg',},
  {id: 709, brand: 'Sliceno', n: 'بيتزا نوتيلا', p: 202, d: 'عجينة سلايزينو المميزة مغطاة بـ 200 جرام نوتيلا و شوكليت شيبس', e: '🍫', img: './img/بيتزا نوتيلا.jpeg',},
  {id: 710, brand: 'Sliceno', n: 'بيتزا وايت شوكليت', p: 202, d: '', e: '🤍', img: './img/بيتزا ويت شوكلات.jpeg',},
  {id: 711, brand: 'Sliceno', n: 'بيتزا بستاشيو', p: 297, d: '', e: '🟢', img: './img/بيتزا بستاشيو.jpeg',},
  {id: 712, brand: 'Sliceno', n: 'إضافة 100 جرام دجاج', p: 82, d: '', e: '🍗', img: './img/اضافات فراخ.jpeg'},
  {id: 713, brand: 'Sliceno', n: 'إضافة 100 جرام لحم', p: 92, d: 'ببروني أو لحم مفروم أو سجق أو ميكس الكل', e: '🥩', img: './img/اضافات سحق.jpeg',},
  {id: 714, brand: 'Fan w Tarab', category: 'سندوتشات', n: 'كفتة', p: 75, d: '', e: '🥙', img: './img/سندوتش كفته.jpeg',},
  {id: 715, brand: 'Fan w Tarab', category: 'سندوتشات', n: 'طرب', p: 85, d: '', e: '🥙', img: './img/سندوتش طرب.jpeg',},
  {id: 716, brand: 'Fan w Tarab', category: 'سندوتشات', n: 'طرب دبل', p: 160, d: '', e: '', img: './img/سندوتش طرب.jpeg',},
  {id: 717, brand: 'Fan w Tarab', category: 'سندوتشات', n: 'شيش', p: 75, d: '', e: '🥙', img: './img/سندوتش شيش.jpeg',},
  {id: 718, brand: 'Fan w Tarab', category: 'سندوتشات', n: 'حواوشي', p: 65, d: '', e: '🥙', img: './img/حواوشي خلطه اسكندراني.jpeg',},
  {id: 719, brand: 'Fan w Tarab', category: 'بوكسات', n: 'بوكس 4 (كفتة و حواوشي و شيش)', p: 257, d: '', e: '📦', img: './img/بوكس 4كفته حوواوشي و شيش.jpeg',},
  {id: 720, brand: 'Fan w Tarab', category: 'بوكسات', n: 'بوكس 4 (طرب)', p: 310, d: '', e: '', img: './img/بوكس 4طرب.jpeg',},
  {id: 721, brand: 'Fan w Tarab', category: 'بوكسات', n: 'بوكس 8 (كفتة و حواوشي و شيش)', p: 500, d: '', e: '📦', img: './img/بوكس8كفته حواوشي شيش.jpeg',},
  {id: 722, brand: 'Fan w Tarab', category: 'بوكسات', n: 'بوكس 8 (طرب)', p: 590, d: '', e: '📦', img: './img/بوكس 8طرب.jpeg',},
  {id: 723, brand: 'Fan w Tarab', category: 'بوكسات', n: 'بوكس 10 (كفتة و حواوشي و شيش)', p: 640, d: '', e: '📦', img: './img/بوكس 8طرب.jpeg',},
  {id: 724, brand: 'Fan w Tarab', category: 'بوكسات', n: 'بوكس 10 (طرب)', p: 740, d: '', e: '📦', img: './img/بوكس 8طرب.jpeg',},
  {id: 725, brand: 'Fan w Tarab', category: 'وجبات', n: 'وجبة ربع فراخ', p: 110, d: 'أرز بسمتي + سلطة + عيش + طحينة', e: '🍗', img: './img/وجبه الربع فراخ.jpeg',},
  {id: 726, brand: 'Fan w Tarab', category: 'وجبات', n: 'وجبة كفتة', p: 170, d: '4 كفتة + أرز بسمتي + سلطة + عيش + طحينة', e: '🥩', img: './img/وجبت كفته.jpeg',},
  {id: 727, brand: 'Fan w Tarab', category: 'وجبات', n: 'وجبة شيش', p: 110, d: '4 شيش + أرز بسمتي + سلطة + عيش + طحينة', e: '', img: './img/وجبه شيش.jpeg',},
  {id: 728, brand: 'Fan w Tarab', category: 'وجبات', n: 'وجبة ميكس', p: 165, d: 'ربع فراخ + 2 كفتة + أرز + سلطة + عيش + طحينة', e: '🍽️', img: './img/وجبت ميكس.jpeg',},
  {id: 729, brand: 'Fan w Tarab', category: 'وجبات', n: 'وجبة ميكس مشاوي', p: 240, d: 'ربع فراخ + 1 طرب + 2 كفتة + أرز + سلطة + عيش + طحينة', e: '️', img: './img/وجه ميكس مشاوي.jpeg',},
  {id: 730, brand: 'Fan w Tarab', category: 'وجبات', n: 'وجبة مشكل مشاوي', p: 275, d: 'ربع فراخ + 2 طرب + 2 شيش + أرز + سلطة + عيش + طحينة', e: '🍽️', img: './img/وجه مشكل مشاوي.jpeg',},
  {id: 731, brand: 'Fan w Tarab', category: 'إضافات', n: 'ويسكي', p: 20, d: '', e: '🥤', img: './img/logo fam w tarb.jpeg',},
  {id: 732, brand: 'Fan w Tarab', category: 'إضافات', n: 'شيبسي', p: 25, d: '', e: '🧀', img: './img/logo fam w tarb.jpeg',},
  {id: 733, brand: 'Fan w Tarab', category: 'إضافات', n: 'مشروب غازي', p: 30, d: '', e: '🥤', img: './img/logo fam w tarb.jpeg',},
  {id: 734, brand: 'Fan w Tarab', category: 'إضافات', n: 'مياة صغيرة', p: 20, d: '', e: '💧', img: './img/logo fam w tarb.jpeg',},
  {id: 735, brand: 'Fan w Tarab', category: 'إضافات', n: 'باكيت بطاطس', p: 30, d: '', e: '🍟', img: './img/باكيت بطاطس .jpeg',},
  {id: 736, brand: 'Fan w Tarab', category: 'إضافات', n: 'سلطة خضراء', p: 15, d: '', e: '', img: './img/‏‏سلطه خضراء - نسخة.jpeg',},
  {id: 737, brand: 'Fan w Tarab', category: 'إضافات', n: 'طحينة', p: 10, d: '', e: '🥣', img: './img/فن وطرب  طحينه.jpeg',},
  {id: 738, brand: 'Chicken Factor', category: 'الوجبات الفردية', n: 'وجبة الأطفال', p: 99, d: '1 قطعة ديوس + 1 قطعة استربس + 1 خبز',e: '🍗', img: '🖼️'},
  {id: 739, brand: 'Chicken Factor', category: 'الوجبات الفردية', n: 'سناك بوكس', p: 135, d: '2 قطعة دجاج + 2 خبز + كولسلو أو ثومية + بطاطس + كاتشب', img: './img'},
  {id: 740, brand: 'Chicken Factor', category: 'الوجبات الفردية', n: 'دينر بوكس', p: 200, d: '3 قطع دجاج + 2 خبز + كولسلو أو ثومية + بطاطس + كاتشب', img: './img'},
  {id: 741, brand: 'Chicken Factor', category: 'الوجبات الفردية', n: 'سوبر دينر بوكس', p: 240, d: '4 قطع دجاج + 3 خبز + كولسلو أو ثومية + بطاطس + كاتشب', img: './img'},
  {id: 742, brand: 'Chicken Factor', category: 'الوجبات الفردية', n: 'سناك استربس', p: 140, d: '3 قطع استربس + 2 خبز + كولسلو أو ثومية + بطاطس + كاتشب', img: './img'},
  {id: 743, brand: 'Chicken Factor', category: 'الوجبات العائلية', n: 'فاميلي ميل', p: 399, d: '6 قطع دجاج + 4 خبز + كول سلو + ثومية + بطاطس + كاتشب', img: './img'},
  {id: 744, brand: 'Chicken Factor', category: 'الوجبات العائلية', n: 'فاميلي بوكس', p: 599, d: '9 قطع دجاج + 6 خبز + كول سلو + ثومية + بطاطس + كاتشب', img: './img'},
  {id: 745, brand: 'Chicken Factor', category: 'الوجبات العائلية', n: 'سوبر فاميلي بوكس', p: 750, d: '12 قطعة دجاج + 8 خبز + كول سلو + ثومية + بطاطس + كاتشب + لتر بيبسي', img: './img'},
  {id: 746, brand: 'Chicken Factor', category: 'الوجبات العائلية', n: 'فاميلي جامبو', p: 860, d: '15 قطعة دجاج + 10 خبز + كول سلو + ثومية + بطاطس + كاتشب + لتر بيبسي', img: './img'},
  {id: 747, brand: 'Chicken Factor', category: 'ساندوتشات تشيكن برجر', n: 'أوريجنال تشيكن برجر', p: 110, d: 'قطعة برجر + شرائح جبنة شيدر + صوص الكلاسيك + طماطم + خيار مخلل', img: './img'},
  {id: 748, brand: 'Chicken Factor', category: 'ساندوتشات تشيكن برجر', n: 'باربيكيو تشيكن برجر', p: 110, d: 'قطعة برجر + شرائح جبنة شيدر + صوص الباربيكيو + طماطم + خيار مخلل', img: './img'},
  {id: 749, brand: 'Chicken Factor', category: 'ساندوتشات تشيكن برجر', n: 'رانش تشيكن برجر', p: 110, d: 'قطعة برجر + شرائح جبنة شيدر + صوص الرانش + طماطم + خيار مخلل', img: './img'},
  {id: 750, brand: 'Chicken Factor', category: 'ساندوتشات تشيكن برجر', n: 'بيج تيستي تشيكن برجر', p: 110, d: 'قطعة برجر + شرائح جبنة شيدر + صوص بيج تيستي + طماطم + خيار مخلل', img: './img'},
  {id: 751, brand: 'Chicken Factor', category: 'السندوتشات', n: 'تويستر رول', p: 100, d: 'خبز تورتيلا + قطع دجاج مخلية + صوص فاكْتوري + مايونيز + طماطم + خس', img: './img'},
  {id: 752, brand: 'Chicken Factor', category: 'السندوتشات', n: 'موزاريلا تويستر رول', p: 125, d: 'قطع دجاج مخلية + جبنة موتزاريلا سايحة + موتزاريلا ستيك + صوص فاكْتوري + مايونيز + طماطم + خس + خيار مخلل', img: './img'},
  {id: 753, brand: 'Chicken Factor', category: 'السندوتشات', n: 'بيج فِلر', p: 135, d: 'قطعة دجاج مخلية + شرائح بيف بيكون مدخن + شرائح جبنة الشيدر + صوص الجبنة الشيدر + صوص بيبر + طماطم + مايونيز', img: './img'},
  {id: 754, brand: 'Chicken Factor', category: 'السندوتشات', n: 'تشيكن كلاسي', p: 125, d: 'قطع دجاج مخلية + شريحة جبنة شيدر + مايونيز + صوص فاكْتوري + طماطم + خس + خيار مخلل', img: './img'},
  {id: 767, brand: 'Chicken Factor', category: 'السندوتشات', n: 'تشيكن تركي', p: 135, d: 'قطعة دجاج مخلية + شرائح تركي مدخن + شريحة جبنة شيدر + مايونيز + صوص فاكْتوري + طماطم + خس + خيار مخلل', img: './img'},
  {id: 768, brand: 'Chicken Factor', category: 'السندوتشات', n: 'بيكون فاكْتوري', p: 135, d: 'قطع دجاج مخلية + بيف بيكون مشوي + شريحة جبنة شيدر + مايونيز + صوص فاكْتوري + صوص باربكيو + خبز + خيار مخلل', img: './img'},
  {id: 769, brand: 'Chicken Factor', category: 'السندوتشات', n: 'موتزاريلا فاكْتوري', p: 135, d: 'قطع دجاج مخلية + موتزاريلا سايحة + موتزاريلا ستيك + شريحة جبنة شيدر + مايونيز + صوص فاكْتوري + طماطم + خس + خيار مخلل', img: './img'},
  {id: 770, brand: 'Chicken Factor', category: 'السندوتشات', n: 'أونيون فاكْتوري', p: 135, d: 'قطع دجاج مخلية + بصل مكرمل + تركي مدخن + شريحة جبنة شيدر + مايونيز + صوص فاكْتوري + طماطم + خبز + خيار مخلل', img: './img'},
  {id: 771, brand: 'Chicken Factor', category: 'السندوتشات', n: 'سوبر فاكْتوري', p: 140, d: 'قطع دجاج مخلية + خيار مخلل + موتزاريلا ستيك + بيف بيكون + تركي مدخن + صوص فاكْتوري + صوص هوت بيبر + شيدر + طماطم + خس', img: './img'},
  {id: 772, brand: 'Chicken Factor', category: 'السندوتشات', n: 'فاكتوري تشيز', p: 135, d: 'قطع دجاج مخلية + شريحة جبنة شيدر + مايونيز + صوص فاكْتوري + طماطم + خبز + خيار مخلل', img: './img'},
  {id: 773, brand: 'Chicken Factor', category: 'وجبات الريزو', n: 'رايز ميل', p: 230, d: '2 قطعة دجاج + 2 استربس + 2 خبز + أرز + كول سلو أو ثومية + بطاطس', img: './img'},
  {id: 774, brand: 'Chicken Factor', category: 'وجبات الريزو', n: 'طبق ريزو', p: 85, d: 'أرز + قطعة ونصف استربس + صوص الريزو', img: './img'},
  {id: 775, brand: 'Chicken Factor', category: 'وجبات الريزو', n: 'شيدر استربس', p: 85, d: 'أرز + قطعة ونصف استربس + صوص الشيدر', img: './img'},
  {id: 776, brand: 'Chicken Factor', category: 'وجبات الريزو', n: 'بافلو استربس', p: 85, d: 'أرز + قطعة ونصف استربس + صوص البافلو الحار', img: './img'},
  {id: 777, brand: 'Chicken Factor', category: 'وجبات الريزو', n: 'تشيز استربس', p: 80, d: 'أرز + قطعة ونصف استربس + صوص الشيدر', img: './img'},
  {id: 778, brand: 'Chicken Factor', category: 'وجبات الأجنحة والدبابيس', n: 'وجبة دبوس 1', p: 160, d: '3 قطع دبابيس + 2 خبز + كول سلو أو ثومية + بطاطس + كاتشب', img: './img'},
  {id: 779, brand: 'Chicken Factor', category: 'وجبات الأجنحة والدبابيس', n: 'وجبة دبوس 2', p: 230, d: '5 قطع دبابيس + 2 خبز + كول سلو أو ثومية + بطاطس + كاتشب', img: './img'},
  {id: 780, brand: 'Chicken Factor', category: 'وجبات الأجنحة والدبابيس', n: 'وجبة أجنحة 3', p: 90, d: '3 قطع أجنحة + 2 خبز + بطاطس + كاتشب', img: './img'},
  {id: 781, brand: 'Chicken Factor', category: 'وجبات الأجنحة والدبابيس', n: 'وجبة أجنحة 5', p: 135, d: '5 قطع أجنحة + 2 خبز + بطاطس + كاتشب', img: './img'},
  {id: 782, brand: 'Chicken Factor', category: 'وجبات الأجنحة والدبابيس', n: 'وجبة أجنحة 10', p: 225, d: '10 قطع أجنحة + 4 خبز + بطاطس + كاتشب', img: './img'},
  {id: 783, brand: 'Chicken Factor', category: 'وجبات الأجنحة والدبابيس', n: 'استربس فاميلي 10', p: 430, d: '10 قطع استربس + 4 خبز + كول سلو + ثومية + بطاطس + كاتشب', img: './img'},
  {id: 784, brand: 'Chicken Factor', category: 'وجبات الأجنحة والدبابيس', n: 'استربس فاميلي 15', p: 599, d: '15 قطعة استربس + 6 خبز + كول سلو + ثومية + بطاطس + كاتشب', img: './img'},
  {id: 785, brand: 'Chicken Factor', category: 'وجبات الأجنحة والدبابيس', n: 'استربس فاميلي 20', p: 850, d: '20 قطعة استربس + 10 خبز + كول سلو + ثومية + بطاطس + كاتشب', img: './img',},

  {id: 791, brand: 'El-Thawra', category: 'كريب فراخ', n: 'كريب شيش', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + شيش', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 792, brand: 'El-Thawra', category: 'كريب فراخ', n: 'كريب شيش فريش', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + شيش فريش', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 793, brand: 'El-Thawra', category: 'كريب فراخ', n: 'كريب شاورما فراخ', p: "", d: 'خليط جبن + صدور الدجاج فريش + كاتشب + مايونيز + فلفل ألوان + زيتون + تومية', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 794, brand: 'El-Thawra', category: 'كريب فراخ', n: 'كريب فاهيتا', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + زيتون شرائح + فلفل رومي + صدور فريش + صوص باربكيو', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 795, brand: 'El-Thawra', category: 'كريب فراخ', n: 'كريب سوبر كرانش', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + فلفل رومي + بانيه + استربس + أصابع موزاريلا', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 796, brand: 'El-Thawra', category: 'كريب فراخ', n: 'كريب كوردن بلو', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + كوردن بلو + صوص شيدر', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 797, brand: 'El-Thawra', category: 'كريب فراخ', n: 'كريب تشيكن رانش', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + صدور دجاج فريش + صوص رانش', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 798, brand: 'El-Thawra', category: 'كريب فراخ', n: 'كريب هالينو', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + استربس فريش حار + شيش فريش + فلفل هالينو', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 799, brand: 'El-Thawra', category: 'كريب فراخ', n: 'كريب اسكالوب بانيه', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + اسكالوب بانيه', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 800, brand: 'El-Thawra', category: 'كريب ميكسات', n: 'كريب سوبر ريم دجاج', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + استربس + شاورما دجاج + تركي مدخن + صوص رانش', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 801, brand: 'El-Thawra', category: 'كريب ميكسات', n: 'كريب ميكس استربس شيش', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + استربس + شيش', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 802, brand: 'El-Thawra', category: 'كريب ميكسات', n: 'كريب سكلانس شطبوط', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + زيتون شرائح + استربس فريش + بيف بيكون + شيش فريش + صوص تكساك + فلفل اخضر حار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 803, brand: 'El-Thawra', category: 'كريب ميكسات', n: 'كريب كوكتيل فراخ حار/بارد', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + بانيه + استربس + شيش + فلفل ألوان', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 804, brand: 'El-Thawra', category: 'كريب ميكسات', n: 'كريب ميكس لحوم', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + سجق + كفتة + سويس + شاورما لحم + صوص تكساك', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 805, brand: 'El-Thawra', category: 'كريب ميكسات', n: 'كريب سوبر لحم', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + كفتة + دوزر كباب + بسترمة + صوص رانش', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 806, brand: 'El-Thawra', category: 'كريب ميكسات', n: 'كريب رانش سموك حار/بارد', p: "", d: 'استربس فريش + سلامي + صوص اسموكي رانش + خليط جبن + كاتشب + مايونيز', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 807, brand: 'El-Thawra', category: 'كريب ميكسات', n: 'كريب ميكس الثورة حار/بارد', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + استربس + بانيه + شيش + كفتة + سجق + بيف بيكون + صوص شيدر', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 808, brand: 'El-Thawra', category: 'كريب لحوم', n: 'كريب سويسيس', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + هوت دوج + بيف بيكون + صوص شيدر', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 809, brand: 'El-Thawra', category: 'كريب لحوم', n: 'كريب سجق', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + سجق + صوص شيدر', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 810, brand: 'El-Thawra', category: 'كريب لحوم', n: 'كريب كفتة', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + كفتة + صوص تكسااس', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 811, brand: 'El-Thawra', category: 'كريب لحوم', n: 'كريب شاورما لحم', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + شاورما لحم + مكعبات طماطم + صوص شيدر', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 812, brand: 'El-Thawra', category: 'كريب لحوم', n: 'كريب دوزر كباب', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + دوزر لحم + صوص شيدر', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 813, brand: 'El-Thawra', category: 'كريب سي فود', n: 'كريب جمبري فرايد', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + جمبري فرايد + بولونيز', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 814, brand: 'El-Thawra', category: 'كريب سي فود', n: 'كريب جمبري جريل', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + جمبري جريل + زيتون شرائح + فلفل ألوان', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 815, brand: 'El-Thawra', category: 'كريب سي فود', n: 'كريب سي فوود فرايد', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + سي فوود + كاليماري + جمبري + بولونيز', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 816, brand: 'El-Thawra', category: 'كريب سي فود', n: 'كريب سي فوود جريل', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + سي فوود + كاليماري + جمبري + صوص شيدر', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 817, brand: 'El-Thawra', category: 'بيتزا تشيكن', n: 'بيتزا مارجرينا', p: "", d: 'كيري + صوص بيتزا + موزاريلا', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 818, brand: 'El-Thawra', category: 'بيتزا تشيكن', n: 'بيتزا تشيز لافرز', p: "", d: 'كيري + صوص بيتزا + صوص شيدر + موزاريلا + ريكفورد + فلفل ألوان + زيتون', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: " كبير رول", price: "" }
  ], img: './img'},
  {id: 819, brand: 'El-Thawra', category: 'بيتزا تشيكن', n: 'بيتزا خضار', p: "", d: 'كيري + صوص بيتزا + موزاريلا + خضار مشكل + مشروم + زيتون', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 820, brand: 'El-Thawra', category: 'بيتزا تشيكن', n: 'بيتزا بانيه رانش', p: "", d: 'كيري + صوص بيتزا + بانيه + موزاريلا + فلفل ألوان + زيتون + صوص رانش', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 821, brand: 'El-Thawra', category: 'بيتزا تشيكن', n: 'بيتزا تشيكن فريش', p: "", d: 'كيري + صوص بيتزا + صدور دجاج فريش + موزاريلا + فلفل ألوان + زيتون', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 822, brand: 'El-Thawra', category: 'بيتزا تشيكن', n: 'بيتزا تشيكن رانش', p: "", d: 'كيري + صوص بيتزا + صدور دجاج فريش + موزاريلا + فلفل ألوان + زيتون + صوص رانش', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 823, brand: 'El-Thawra', category: 'بيتزا تشيكن', n: 'بيتزا ميكس تشيكن حار/بارد', p: "", d: 'كيري + صوص بيتزا + صدور دجاج فريش + استربس فريش + بانيه + موزاريلا + فلفل ألوان + زيتون', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 824, brand: 'El-Thawra', category: 'بيتزا تشيكن', n: 'بيتزا استربس فريش حار/بارد', p: "", d: 'كيري + صوص بيتزا + استربس فريش + موزاريلا + فلفل ألوان + زيتون', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 825, brand: 'El-Thawra', category: 'بيتزا تشيكن', n: 'بيتزا تركي', p: "", d: 'كيري + صوص بيتزا + بيف مدخن + استربس فريش + موزاريلا + فلفل ألوان + زيتون', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 826, brand: 'El-Thawra', category: 'بيتزا تشيكن', n: 'بيتزا باربيكيو دجاج (فاهيتا)', p: "", d: 'كيري + صوص بيتزا + صدور دجاج فريش + موزاريلا + فلفل ألوان + مشروم + زيتون + صوص باربيكيو', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 827, brand: 'El-Thawra', category: 'بيتزا تشيكن', n: 'بيتزا شيش طاووق', p: "", d: 'كيري + صوص بيتزا + شيش فريش + موزاريلا + فلفل ألوان + زيتون', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 828, brand: 'El-Thawra', category: 'بيتزا تشيكن', n: 'بيتزا سوبر سوبرريم', p: "", d: 'كيري + صوص بيتزا + صدور دجاج فريش + بسطرمة + هوت دوج + موزاريلا + فلفل ألوان + زيتون', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 829, brand: 'El-Thawra', category: 'بيتزا تشيكن', n: 'بيتزا شاورما فراخ', p: "", d: 'كيري + صوص بيتزا + صدور دجاج + موزاريلا + فلفل ألوان + زيتون + صوص ثومية', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 830, brand: 'El-Thawra', category: 'بيتزا تشيكن', n: 'بيتزا الثورة حار/بارد', p: "", d: 'كيري + صوص بيتزا + موزاريلا + لحمة ساجي + استربس فريش + دوج كباب + فلفل ألوان + زيتون + صوص تكسااس', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 831, brand: 'El-Thawra', category: 'بيتزا تشيكن', n: 'بيتزا رانش سموكي', p: "", d: 'كيري + صوص بيتزا + سلامي + استربس فريش + موزاريلا + فلفل ألوان + زيتون + صوص رانش سموكي', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 832, brand: 'El-Thawra', category: 'بيتزا بيف', n: 'بيتزا سويس', p: "", d: 'كيري + صوص بيتزا + هوت دوج + موزاريلا + فلفل ألوان + زيتون + صوص شيدر', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 833, brand: 'El-Thawra', category: 'بيتزا بيف', n: 'بيتزا كفتة', p: "", d: 'كيري + صوص بيتزا + كفتة + موزاريلا + فلفل ألوان + زيتون', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 834, brand: 'El-Thawra', category: 'بيتزا بيف', n: 'بيتزا سجق', p: "", d: 'كيري + صوص بيتزا + سجق + موزاريلا + فلفل ألوان + زيتون + صوص شيدر', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 835, brand: 'El-Thawra', category: 'بيتزا بيف', n: 'بيتزا بلونيز', p: "", d: 'كيري + صوص بيتزا + مفروم + موزاريلا + فلفل ألوان + زيتون + صوص تكسااس', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 836, brand: 'El-Thawra', category: 'بيتزا بيف', n: 'بيتزا بيبروني', p: "", d: 'كيري + صوص بيتزا + لحم بيبروني + موزاريلا + فلفل ألوان + زيتون', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 837, brand: 'El-Thawra', category: 'بيتزا بيف', n: 'بيتزا ميكس لحوم', p: "", d: 'كيري + صوص بيتزا + دوج كباب + شاورما لحم + بيبروني + مفروم + موزاريلا + فلفل ألوان + زيتون', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 838, brand: 'El-Thawra', category: 'بيتزا بيف', n: 'بيتزا اسموكد برجر', p: "", d: 'كيري + صوص بيتزا + برجر لحم مكعبات + بيف بيكون + موزاريلا + فلفل ألوان + زيتون + صوص شيدر', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 839, brand: 'El-Thawra', category: 'بيتزا بيف', n: 'بيتزا فور سيزون', p: "", d: 'كيري + صوص بيتزا + موزاريلا + لحم بيبروني + دوج كباب + صدور دجاج فريش + استربس فريش + فلفل ألوان + زيتون', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 840, brand: 'El-Thawra', category: 'بيتزا سي فود', n: 'بيتزا جمبري', p: "", d: 'كيري + صوص بيتزا + موزاريلا + جمبري جريل + فلفل ألوان + زيتون', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 841, brand: 'El-Thawra', category: 'بيتزا سي فود', n: 'بيتزا سي فود', p: "", d: 'كيري + صوص بيتزا + موزاريلا + فليبة + كاليماري + فلفل ألوان + زيتون + جمبري', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 842, brand: 'El-Thawra', category: 'بيتزا سي فود', n: 'بيتزا تونة', p: "", d: 'كيري + صوص بيتزا + موزاريلا + تونة + زيتون', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 843, brand: 'El-Thawra', category: 'بيتزا كريب ميكسات', n: 'بيتزا كريب سوبر ريم دجاج', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + استربس + شاورما دجاج + تركي مدخن + صوص رانش + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 844, brand: 'El-Thawra', category: 'بيتزا كريب ميكسات', n: 'بيتزا كريب ميكس استربس شيش', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + استربس + شيش + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 845, brand: 'El-Thawra', category: 'بيتزا كريب ميكسات', n: 'بيتزا كريب كوكتيل فراخ', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + بانيه + استربس + شيش + فلفل ألوان + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 846, brand: 'El-Thawra', category: 'بيتزا كريب ميكسات', n: 'بيتزا كريب ميكس لحوم', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + سجق + كفتة + سويس + شاورما لحم + صوص تكسااس + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 847, brand: 'El-Thawra', category: 'بيتزا كريب ميكسات', n: 'بيتزا كريب سوبر ريم لحم', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + كفتة + دوزر كباب + بسطرمة + رانش صوص + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 848, brand: 'El-Thawra', category: 'بيتزا كريب ميكسات', n: 'بيتزا كريب رانش سموك حار/بارد', p: "", d: 'استربس فريش + سلامي + صوص اسموكي رانش + خليط جبن + كاتشب + مايونيز + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 849, brand: 'El-Thawra', category: 'بيتزا كريب ميكسات', n: 'بيتزا كريب ميكس الثورة حار/بارد', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + استربس + بانيه + شيش + كفتة + سجق + بيف بيكون + صوص شيدر + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 850, brand: 'El-Thawra', category: 'بيتزا كريب لحوم', n: 'بيتزا كريب سويس', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + هوت دوج + بيف بيكون + صوص تكسااس + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 851, brand: 'El-Thawra', category: 'بيتزا كريب لحوم', n: 'بيتزا كريب سجق', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + سجق + صوص شيدر + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 852, brand: 'El-Thawra', category: 'بيتزا كريب لحوم', n: 'بيتزا كريب كفتة', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + كفتة + صوص تكسااس + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 853, brand: 'El-Thawra', category: 'بيتزا كريب لحوم', n: 'بيتزا كريب شاورما لحم', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + شاورما لحم + فلفل رومي + زيتون شرائح + مكعبات طماطم + صوص شيدر + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 854, brand: 'El-Thawra', category: 'بيتزا كريب لحوم', n: 'بيتزا كريب دوزر كباب', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + دوزر لحم + صوص شيدر + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 855, brand: 'El-Thawra', category: 'بيتزا كريب فراخ', n: 'بيتزا كريب ميكس جبن', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + خضار + فلفل ألوان', img: './img'},
  {id: 856, brand: 'El-Thawra', category: 'بيتزا كريب فراخ', n: 'بيتزا كريب بطاطس', p: "", d: 'خليط جبن كريب + بطاطس + كاتشب + مايونيز + فلفل ألوان + زيتون + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 857, brand: 'El-Thawra', category: 'بيتزا كريب فراخ', n: 'بيتزا كريب استربس', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + استربس + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 858, brand: 'El-Thawra', category: 'بيتزا كريب فراخ', n: 'بيتزا كريب استربس فريش', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + استربس فريش + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 859, brand: 'El-Thawra', category: 'بيتزا كريب فراخ', n: 'بيتزا كريب بانيه', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + بانيه + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 860, brand: 'El-Thawra', category: 'بيتزا كريب فراخ', n: 'بيتزا كريب شيش', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + شيش + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 861, brand: 'El-Thawra', category: 'بيتزا كريب فراخ', n: 'بيتزا كريب شيش فريش', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + شيش فريش + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 862, brand: 'El-Thawra', category: 'بيتزا كريب فراخ', n: 'بيتزا كريب شاورما فراخ', p: "", d: 'خليط جبن + صدور دجاج فريش + كاتشب + مايونيز + فلفل ألوان + زيتون + ثومية + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 863, brand: 'El-Thawra', category: 'بيتزا كريب فراخ', n: 'بيتزا كريب فاهيتا', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + فلفل ألوان + زيتون + صدور فريش + صوص باربكيو + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 864, brand: 'El-Thawra', category: 'بيتزا كريب فراخ', n: 'بيتزا كريب سوبر كرانش', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + فلفل ألوان + رانش + استربس + أصابع موزاريلا + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 865, brand: 'El-Thawra', category: 'بيتزا كريب فراخ', n: 'بيتزا كريب كوردن بلو', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + كوردن بلو + صوص شيدر + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 866, brand: 'El-Thawra', category: 'بيتزا كريب فراخ', n: 'بيتزا كريب تشيكن رانش', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + صدور دجاج فريش + صوص رانش + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 867, brand: 'El-Thawra', category: 'بيتزا كريب فراخ', n: 'بيتزا كريب هالينو', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + استربس فريش حار + شيش فريش + فلفل هالينو + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 868, brand: 'El-Thawra', category: 'بيتزا كريب فراخ', n: 'بيتزا كريب اسكالوب بانيه', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + اسكالوب بانيه + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 869, brand: 'El-Thawra', category: 'بيتزا كريب سي فود', n: 'بيتزا كريب جمبري فرايد', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + جمبري فرايد + بولوينز + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 870, brand: 'El-Thawra', category: 'بيتزا كريب سي فود', n: 'بيتزا كريب جمبري جريل', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + جمبري جريل + فلفل ألوان + بولوينز + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 871, brand: 'El-Thawra', category: 'بيتزا كريب سي فود', n: 'بيتزا كريب سي فود فرايد', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + سي فود + فلفل ألوان + كاليماري + جمبري + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 872, brand: 'El-Thawra', category: 'بيتزا كريب سي فود', n: 'بيتزا كريب سي فود جريل', p: "", d: 'خليط جبن كريب + كاتشب + مايونيز + سي فود + فلفل ألوان + كاليماري + جمبري + خضار', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 873, brand: 'El-Thawra', category: 'بروستد', n: 'لايت بوكس', p: "", d: '3 قطع استربس + 150 جرام بطاطس + 2 خبز + تومية', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 874, brand: 'El-Thawra', category: 'بروستد', n: 'سوبر لايت بوكس', p: "", d: '5 قطع استربس + 250 جرام بطاطس + 2 خبز + كول سلو + تومية', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 875, brand: 'El-Thawra', category: 'بروستد', n: 'سناك بوكس', p: "", d: '2 قطعة بوبس (واحدة كبيرة وواحدة صغيرة) + بطاطس + 2 خبز + تومية', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 876, brand: 'El-Thawra', category: 'بروستد', n: 'تشيكن وينجز', p: "", d: '3 قطع جناح + بطاطس + 2 خبز', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 877, brand: 'El-Thawra', category: 'بروستد', n: 'دبابيس دجاج', p: "", d: '3 قطع دبابيس + كول سلو + تومية + بطاطس + 3 خبز', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 878, brand: 'El-Thawra', category: 'بروستد', n: 'ديز بوكس', p: "", d: 'صدر + 3 دبابيس + جناح + بطاطس + تومية + كول سلو + 3 خبز', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 879, brand: 'El-Thawra', category: 'بروستد', n: 'سوبر ديز بوكس', p: "", d: 'قطعتين فخذين + كول سلو + جناح + بطاطس + كولسلو + 4 خبز', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 880, brand: 'El-Thawra', category: 'بروستد', n: 'ديز صدر', p: "", d: '3 قطع صدر + كول سلو + تومية + بطاطس + 3 خبز', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 881, brand: 'El-Thawra', category: 'بروستد', n: 'بوكس الثورة', p: "", d: '6 قطع (فخذ + 2 صدر + 2 جناح) + كول سلو + 2 تومية + بطاطس + 6 خبز', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 882, brand: 'El-Thawra', category: 'بروستد عائلي', n: 'سوبر بوكس', p: "", d: '9 قطع بروسند (فرخة كاملة) + 2 كولسلو + 3 تومية + بطاطس كبير', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 883, brand: 'El-Thawra', category: 'بروستد عائلي', n: 'فاميلي ميل', p: "", d: '12 قطعة بروستد (فرخة كاملة + صدر + فخذ + جناح) + 12 خبز + 3 كولسلو + 2 تومية + 2 بطاطس كبير', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 884, brand: 'El-Thawra', category: 'بروستد عائلي', n: 'وجبة اقتصادية', p: "", d: '15 قطعة بروستد (فرخة كاملة + صدر + فخذ + جناح) + 2 ديووس + 15 خبز + 4 كولسلو + 4 تومية + 2 بطاطس كبير', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 885, brand: 'El-Thawra', category: 'بروستد عائلي', n: 'سوبر كريسي استربس', p: "", d: '12 قطع استربس (600 جرام) + 6 خبز + 2 كولسلو + 3 تومية + 1 بطاطس كبير', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 886, brand: 'El-Thawra', category: 'بروستد عائلي', n: 'ميكس الثورة', p: "", d: '6 قطع بروستد (فخذ + 2 صدر + 2 جناح) + 6 قطع استربس (300 جرام) + بطاطس كبير + 2 كولسلو + 2 تومية', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 887, brand: 'El-Thawra', category: 'وجبات أطفال', n: 'تشيكن كيدز', p: "", d: 'قطعة فخذ عادي أو دبوس + بطاطس + خبز + هدية', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 888, brand: 'El-Thawra', category: 'وجبات أطفال', n: 'تشيكن استربس', p: "", d: '2 قطع استربس عادي + بطاطس + خبز + هدية', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 889, brand: 'El-Thawra', category: 'ساندوتش راب', n: 'راب فرايز', p: "", d: 'خبز تورتيلا + خس + خيار مخلل شرائح + بطاطس + تومية + صوص شيدر + خليط موزاريلا', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 890, brand: 'El-Thawra', category: 'ساندوتش راب', n: 'راب فرايز هالينو', p: "", d: 'خبز تورتيلا + خس + بطاطس + مايونيز + صوص شيدر + هالينو شرائح + بيف بيكون + خليط موزاريلا', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 891, brand: 'El-Thawra', category: 'ساندوتش راب', n: 'راب كرسبي', p: "", d: 'خبز تورتيلا + خس + خيار مخلل شرائح + بطاطس + تومية + استربس كرسبي + صوص شيدر + صوص 1000 جزيرة + خليط موزاريلا', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 892, brand: 'El-Thawra', category: 'ساندوتش راب', n: 'راب فاهيتا', p: "", d: 'خبز تورتيلا + مايونيز + خس + خيار مخلل شرائح + دجاج فريش + خليط فلفل ألوان + بطاطس + زيتون شرائح + باربكيو صوص + صوص شيدر + خليط موزاريلا', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 893, brand: 'El-Thawra', category: 'ساندوتش راب', n: 'راب شيش طاووق', p: "", d: 'خبز تورتيلا + مايونيز + خس + خيار مخلل شرائح + شيش فريش + بطاطس + صوص شيدر + صوص تكسااس + خليط موزاريلا', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 894, brand: 'El-Thawra', category: 'ساندوتش راب', n: 'راب ميكس تشيكن', p: "", d: 'خبز تورتيلا + تومية + خس + خيار مخلل شرائح + استربس + شيش طاووق + شريحة رومي مدخن + بطاطس + صوص شيدر + رانش صوص + خليط موزاريلا', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 895, brand: 'El-Thawra', category: 'ساندوتش راب', n: 'راب سموكي لحوم', p: "", d: 'خبز تورتيلا + مايونيز + خس + دوج كباب + بيبروني + شريحة شاورما لحم + بطاطس + صوص شيدر + صوص تكسااس + خليط موزاريلا', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 896, brand: 'El-Thawra', category: 'ساندوتش راب', n: 'راب تويستر الثورة', p: "", d: 'خبز تورتيلا + تومية + خس + صدور دجاج فريش + شيش فريش + بطاطس + أصابع موزاريلا + رومي مدخن + رانش + صوص شيدر + خليط موزاريلا', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 897, brand: 'El-Thawra', category: 'ساندوتش راب', n: 'راب رانش سموك', p: "", d: 'خبز تورتيلا + خس + خيار مخلل + بطاطس + تومية + استربس كرسبي + صوص شيدر + صوص سموكي رانش + خليط موزاريلا', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 898, brand: 'El-Thawra', category: 'ساندوتش فيلر', n: 'فيلر شاورما فراخ', p: "", d: 'خبز مخلل + خس + طماطم + صوص شيدر + شاورما دجاج + صوص تومية', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 899, brand: 'El-Thawra', category: 'ساندوتش فيلر', n: 'فيلر شاورما لحم', p: "", d: 'خبز مخلل + خس + شاورما لحم + صوص شيدر + صوص تكسااس', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 900, brand: 'El-Thawra', category: 'ساندوتش فيلر', n: 'فيلر شيش طاووق', p: "", d: 'خبز مخلل + خس + شيش طاووق فريش + صوص شيدر + صوص رانش', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 901, brand: 'El-Thawra', category: 'ساندوتش فيلر', n: 'فيلر سوبر سوبرريم (حار/بارد)', p: "", d: 'مايونيز + خيار مخلل + خس + شريحة تركي مدخن + استربس + صوص شيدر + صوص 1000 جزيرة', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 902, brand: 'El-Thawra', category: 'ساندوتش فيلر', n: 'فيلر ميا مطافي', p: "", d: 'مايونيز + خس + هالينو شرائح + تركي مدخن + استربس حار + صوص شيدر + صوص', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 903, brand: 'El-Thawra', category: 'ساندوتش فيلر', n: 'فيلر رانش اسموك', p: "", d: 'خس + بيف بيكون + استربس + صوص شيدر + صوص اسموكي رانش + مايونيز', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 904, brand: 'El-Thawra', category: 'ساندوتش فيلر', n: 'فيلر جمبري فرايد', p: "", d: 'خس + جمبري مقلي + صوص شيدر + صوص رانش', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 905, brand: 'El-Thawra', category: 'تشيكن ساندوتش حار/بارد', n: 'تشيكن برجر سناڤد', p: "", d: 'مايونيز + خيار مخلل + خس + تشيكن برجر محشو جبنة + صوص شيدر + صوص 1000 جزيرة', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 906, brand: 'El-Thawra', category: 'تشيكن ساندوتش حار/بارد', n: 'تشيكن برجر تكسااس', p: "", d: 'مايونيز + خيار مخلل + خس + تشيكن برجر محشو جبنة + رومي مدخن + صوص شيدر + صوص تكسااس', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 907, brand: 'El-Thawra', category: 'تشيكن ساندوتش حار/بارد', n: 'فرايد تشيكن', p: "", d: 'مايونيز + خيار مخلل + خس + صدور دجاج كرسبي + صوص شيدر + صوص 1000 جزيرة', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 908, brand: 'El-Thawra', category: 'تشيكن ساندوتش حار/بارد', n: 'هالينو تشيكن', p: "", d: 'مايونيز + خيار مخلل + خس + صدور دجاج كرسبي + صوص شيدر + شرائح فلفل هالينو + هوت صوص', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 909, brand: 'El-Thawra', category: 'تشيكن ساندوتش حار/بارد', n: 'تشيكن لافر تشيكن', p: "", d: 'مايونيز + خيار مخلل + خس + صدور دجاج كرسبي + 2 أصابع موزاريلا + صوص شيدر + سويت تشيلي', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 910, brand: 'El-Thawra', category: 'تشيكن ساندوتش حار/بارد', n: 'سموكي تشيكن', p: "", d: 'مايونيز + خيار مخلل + خس + شريحة تركي مدخن + صدور دجاج كرسبي + صوص شيدر + صوص تكسااس', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 911, brand: 'El-Thawra', category: 'تشيكن ساندوتش حار/بارد', n: 'تشيكن باربيكيو', p: "", d: 'مايونيز + خيار مخلل + خس + شريحة تركي مدخن + صدور دجاج كرسبي + صوص شيدر + صوص باربيكيو', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 912, brand: 'El-Thawra', category: 'تشيكن ساندوتش حار/بارد', n: 'تشيكن رانش', p: "", d: 'مايونيز + خيار مخلل + خس + 2 حلقة بصل + صدور دجاج كرسبي + صوص شيدر + صوص رانش', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 913, brand: 'El-Thawra', category: 'بيف برجر', n: 'كلاسيك برجر', p: "", d: 'مايونيز + خيار مخلل + شرائح بصل + شرائح طماطم + بيف لحم + صوص شيدر + صوص 1000 جزيرة + خس', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 914, brand: 'El-Thawra', category: 'بيف برجر', n: 'هالينو برجر', p: "", d: 'مايونيز + خيار مخلل + شرائح بصل + شرائح طماطم + بيف لحم + صوص شيدر + هالينو + صوص + خس', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 915, brand: 'El-Thawra', category: 'بيف برجر', n: 'برجر تشيز لافرز', p: "", d: 'مايونيز + خيار مخلل + شرائح بصل + شرائح طماطم + بيف برجر لحم + صوص شيدر + 2 أصابع موزاريلا + سويت تشيلي + خس', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 916, brand: 'El-Thawra', category: 'بيف برجر', n: 'برجر كباب', p: "", d: 'مايونيز + خيار مخلل + شرائح بصل + شرائح طماطم + بيف لحم + صوص شيدر + دوزر كباب + صوص باربيكيو + خس', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 917, brand: 'El-Thawra', category: 'بيف برجر', n: 'مشروم برجر', p: "", d: 'مايونيز + خيار مخلل + شرائح بصل + بيف لحم + مشروم فريش + خليط جبنة بيتزا + صوص شيدر + خس', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 918, brand: 'El-Thawra', category: 'بيف برجر', n: 'برجر الثورة', p: "", d: 'مايونيز + خيار مخلل + شرائح طماطم + شرائح بصل + بيف بيكون + بيف برجر لحم + أصابع موزاريلا + حلقات بصل + صوص شيدر + صوص رانش + خس', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 919, brand: 'El-Thawra', category: 'بيف برجر', n: 'برجر بيج تيستي', p: "", d: 'مايونيز + خيار مخلل + شرائح بصل + شرائح طماطم + بيف لحم + صوص شيدر + بيف بيكون + صوص تكسااس + خس', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 920, brand: 'El-Thawra', category: 'الطواجن', n: 'نيرسكو فراخ', p: "", d: 'مكرونة + صدور دجاج فريش + مشروم فريش + وايت صوص + خليط موزاريلا', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 921, brand: 'El-Thawra', category: 'الطواجن', n: 'نيرسكو شيش', p: "", d: 'مكرونة + شيش فريش + مشروم فريش + وايت صوص + خليط موزاريلا', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 922, brand: 'El-Thawra', category: 'الطواجن', n: 'نيرسكو استربس', p: "", d: 'مكرونة + وايت صوص + مشروم فريش + استربس فريش + خليط موزاريلا', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 923, brand: 'El-Thawra', category: 'الطواجن', n: 'باستا سيج (طاجن)', p: "", d: 'مكرونة + ريد صوص + ستيك + فلفل ألوان + خليط موزاريلا', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 924, brand: 'El-Thawra', category: 'الطواجن', n: 'باستا الثورة', p: "", d: 'مكرونة + صدور دجاج فريش + سلامي + وايت صوص + خليط موزاريلا + بشاميل', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 925, brand: 'El-Thawra', category: 'الطواجن', n: 'باستا جمبري', p: "", d: 'مكرونة + جمبري + وايت صوص + خليط موزاريلا', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 926, brand: 'El-Thawra', category: 'الطواجن', n: 'باستا فواكه البحر', p: "", d: 'مكرونة + فليّة + كاليماري + وايت صوص + خليط موزاريلا + كابوريا + جمبري', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 927, brand: 'El-Thawra', category: 'الطواجن', n: 'طاجن بشاميل', p: "", d: 'مكرونة + وايت صوص + لحم مفروم + بشاميل + موزاريلا', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 928, brand: 'El-Thawra', category: 'باستا', n: 'باستا الفريدو', p: "", d: 'مكرونة + صدور دجاج فريش + مشروم + فلفل ألوان + وايت صوص + عيش دوريتوس', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 929, brand: 'El-Thawra', category: 'باستا', n: 'شاورما فراخ', p: "", d: 'مكرونة + شاورما فراخ + مشروم + فلفل ألوان + عيش دوريتوس', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 930, brand: 'El-Thawra', category: 'باستا', n: 'لازانيا مفروم', p: "", d: 'شرائح لحم لازانيا + صوص بلونيز + جبنة موزاريلا + عيش دوريتوس', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 931, brand: 'El-Thawra', category: 'باستا', n: 'باستا بلونيز', p: "", d: 'مكرونة + صوص بلونيز + ريد صوص + موزاريلا + فلفل ألوان + عيش دوريتوس', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 932, brand: 'El-Thawra', category: 'باستا', n: 'تشيكن فورماتو', p: "", d: 'صدور دجاج فريش + بطاطس + مكرونة + بشاميل + خليط جبن بيتزا + صوص فورماتو', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 933, brand: 'El-Thawra', category: 'باستا', n: 'مكرونة وايت صوص', p: "", d: 'مكرونة + وايت صوص', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 934, brand: 'El-Thawra', category: 'باستا', n: 'مكرونة ريد صوص', p: "", d: 'مكرونة + ريد صوص', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 935, brand: 'El-Thawra', category: 'الوجبات', n: 'بيكاتا', p: "", d: 'مكرونة + صدور دجاج + صوص جريفي أو صوص وايت صوص + بطاطس + تومية', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 936, brand: 'El-Thawra', category: 'الوجبات', n: 'تشيكن جريل', p: "", d: 'أرز بسمتي + صدور فراخ + بطاطس + طماطم متبلة', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 937, brand: 'El-Thawra', category: 'الوجبات', n: 'وجبة الثورة', p: "", d: 'أرز بسمتي + 2 دبابيس كرسبي + استربس كرسبي + شيش فريش + بطاطس + تومية', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 938, brand: 'El-Thawra', category: 'الوجبات', n: 'بيف استيك', p: "", d: 'أرز مبهر + خضار سوتيه + لحم فيليه + صوص جريفي + بطاطس', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 939, brand: 'El-Thawra', category: 'الوجبات', n: 'وجبة كفتة', p: "", d: 'أرز بسمتي + كفتة + تومية + بطاطس + طماطم متبلة', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 940, brand: 'El-Thawra', category: 'الوجبات', n: 'ميكس جريل', p: "", d: 'أرز بسمتي + شيش + ستيك + كفتة + بطاطس + طماطم متبلة', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 941, brand: 'El-Thawra', category: 'الوجبات', n: 'شيش فريش', p: "", d: 'أرز بسمتي + شيش جريل + بطاطس + طماطم متبلة', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 942, brand: 'El-Thawra', category: 'الوجبات', n: 'اسكالوب بانيه', p: "", d: 'مكرونة ريد صوص + اسكالوب بانيه + بطاطس', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 943, brand: 'El-Thawra', category: 'الوجبات', n: 'وجبة مسحب كفتة', p: "", d: 'كفتة + ربع فراخ + أرز بسمتي + بطاطس + طماطم متبلة + تومية — ورك 190 / صدر 200', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'},
  {id: 944, brand: 'El-Thawra', category: 'الوجبات', n: 'وجبة مسحب ستيك', p: "", d: 'ستيك + ربع فراخ + أرز بسمتي + بطاطس + طماطم متبلة + تومية — ورك 190 / صدر 200', sizes: [
    { id: "small", label: "صغير", price: "" },
    { id: "medium", label: "وسط", price: "" },
    { id: "large", label: "كبير", price: "" }
  ], img: './img'}


];