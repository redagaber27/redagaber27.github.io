/**
 * Reda Gaber - Professional Portfolio Scripts
 * Features: Bilingual support (AR/EN), Theme switcher, Interactive ROAS Calculator,
 * WhatsApp Lead Form, Dynamic Counters, and Mobile Navigation.
 */

// Bilingual Content Dictionary
const i18n = {
  ar: {
    // Nav
    nav_home: "الرئيسية",
    nav_services: "خدماتي",
    nav_case_studies: "أعمالي ومشاريعي",
    nav_experience: "الخبرات العملية",
    nav_skills: "المهارات والتقنيات",
    nav_calculator: "حاسبة الـ ROAS",
    nav_contact: "تواصل معي",
    nav_cta: "ابدأ مشروعك الآن",

    // Hero
    hero_badge: "متاح للمشاريع الجديدة واستشارات النمو 🚀",
    hero_title_1: "أحول ميزانيات الإعلانات إلى",
    hero_title_highlight: "مبيعات وأرباح قابلة للتوسع",
    hero_subtitle: "أخصائي ميديا باينج ونمو متاجر إلكترونية (Performance Marketer). متخصص في إدارة وتوسيع حملات Meta Ads، بناء متاجر Easy Order الاحترافية، وربط أنظمة التتبع الدقيقة (Pixel & CAPI) ومضاعفة العائد على الإنفاق الإعلاني (ROAS).",
    hero_cta_whatsapp: "تواصل واتساب مباشرة",
    hero_cta_portfolio: "استعراض سابقة الأعمال",
    hero_cta_cv: "تحميل السيرة الذاتية (CV)",
    
    // Stats
    stat_videos_num: "+560",
    stat_videos_label: "فيديو تقني وتسويقي منشور",
    stat_tracking_num: "100%",
    stat_tracking_label: "دقة تتبع وربط CAPI & Pixel",
    stat_roas_num: "4.5x+",
    stat_roas_label: "معدل العائد المستهدف (ROAS)",
    stat_stores_num: "Easy Order",
    stat_stores_label: "بناء وتأسيس المتاجر من الصفر",

    // Services
    services_tag: "ماذا أقدم؟",
    services_title: "خدمات تسويقية وحلول نمو شاملة لمشروعك",
    services_desc: "استراتيجيات متكاملة تبدأ من دراسة الجمهور حتى إتمام الشراء ومضاعفة تكرار الطلبات.",
    
    srv_1_title: "إدارة وتوسيع حملات Meta Ads",
    srv_1_desc: "تخطيط وإطلاق حملات إعلانية مربحة على فيسبوك وإنستغرام، اختبار الجماهير والإبداعيات (A/B Testing)، وتوسيع الحملات للوصول لأعلى ROAS وتقليل تكلفة الاقتناء (CPA).",
    
    srv_2_title: "بناء متاجر Easy Order المتكاملة",
    srv_2_desc: "تأسيس المتاجر الإلكترونية من الصفر، إضافة المنتجات وتحسين صفحات الهبوط (Landing Pages) بمعدلات تحويل مرتفعة، وربط النطاق الخاص (Custom Domain).",
    
    srv_3_title: "أنظمة التتبع والربط التقني المتقدم",
    srv_3_desc: "إعداد Meta Pixel والـ Conversion API (CAPI) باحترافية، وتأمين المتجر بـ Cloudflare، وربط Google Search Console وGoogle Merchant Center وMicrosoft Clarity.",
    
    srv_4_title: "صناعة المحتوى والإبداعيات التسويقية",
    srv_4_desc: "تصميم صور وفيديوهات إعلانية عالية التحويل، كتابة نصوص بيعية مقنعة (Copywriting)، وتوظيف أدوات الذكاء الاصطناعي (AI) لتسريع وتطوير الإنتاج الإعلاني.",
    
    srv_5_title: "تحسين محركات البحث وسيو المتاجر (SEO)",
    srv_5_desc: "تهيئة هيكل المتاجر وصفحات المنتجات لمحركات البحث (On-page & Technical SEO) لضمان ظهور المنتجات بشكل مجاني ومستدام على بحث جوجل.",
    
    srv_6_title: "إدارة كتالوج المنتجات وحل المشكلات",
    srv_6_desc: "إعداد وصيانة كتالوج منتجات فيسبوك (Facebook Product Catalog)، حل أخطاء البكسل والتحقق من النطاقات، وضبط حملات الـ Dynamic Advantage+ Catalog Ads.",

    // Portfolio & Works
    works_tag: "سابقة الأعمال والمنصات",
    works_title: "مشاريع حقيقية ونتائج موثقة",
    works_desc: "نماذج من المتاجر والعلامات التجارية وصناعة المحتوى التي قمت بتأسيسها وإدارتها.",
    
    work_1_badge: "متجر إلكتروني متكامل",
    work_1_title: "متجر هوميرا - Homera.me",
    work_1_desc: "تأسيس المتجر بالكامل على منصة Easy Order من الصفر، ربط الدومين، ضبط Meta Pixel وCAPI، وتكوين Google Search Console وMicrosoft Clarity وإطلاق حملات الاستحواذ على العملاء وتحقيق مبيعات متنامية.",
    work_1_btn: "زيارة المتجر المباشر",

    work_2_badge: "صناعة محتوى وعلامة شخصية",
    work_2_title: "قناة Reda Gaber للتقنية (YouTube)",
    work_2_desc: "بناء علامة تجارية تقنية ونشر أكثر من 560 فيديو متخصص في الأجهزة الذكية والحلول الرقمية مع إدارة دورة الإنتاج كاملة (بحث، تصوير، مونتاج، سيو يوتيوب، وإدارة المجتمع).",
    work_2_btn: "مشاهدة القناة على يوتيوب",

    work_3_badge: "ملف مهني موثق",
    work_3_title: "بروفايل Top Media Buyer المعتمد",
    work_3_desc: "عضوية وتواجد رسمي على منصة Top Media Buyer المتخصصة كأحد المتخصصين في إطلاق وإدارة الحملات الإعلانية وتحقيق أعلى نتائج نمو للمتاجر الإلكترونية.",
    work_3_btn: "عرض البروفايل",

    work_4_badge: "استشارات وإدارة حملات",
    work_4_desc: "إدارة الاستراتيجيات التسويقية الرقمية لعدة علامات تجارية من بينها Homera، وB-Link، وBilliardo Corner، مع رفع العائد على الإنفاق ومراقبة مؤشرات الأداء KPIs.",
    work_4_title: "إدارة علامات تجارية متعددة (Multiple Brands)",

    // Calculator Section
    calc_tag: "أداة تفاعلية للعملاء",
    calc_title: "احسب العائد المتوقع على إعلاناتك (ROAS Calculator)",
    calc_desc: "حرّك المؤشرات لتكتشف كم يمكنك تحقيقه من مبيعات عند تحسين كفاءة حملاتك الإعلانية معي.",
    calc_spend_label: "ميزانية الإنفاق الإعلاني الشهرية:",
    calc_currency: "جنيه مصري / دولار",
    calc_roas_label: "معدل العائد على الإعلانات (ROAS المستهدف):",
    calc_roas_val: "ضعف",
    calc_rev_label: "المبيعات الإجمالية المتوقعة:",
    calc_gain_label: "قيمة العائد المباشر الإضافي:",
    calc_note: "* هذه أرقام تقريبية مبنية على تحسين الاستهداف وجودة صفحات الهبوط ونسبة الإتمام (Conversion Rate).",
    calc_cta: "دعنا نحقق هذه الأرقام لمتجرك",

    // Experience Timeline
    exp_tag: "المسيرة المهنية",
    exp_title: "الخبرات والمسؤوليات العملية",
    exp_desc: "تاريخ حافل بالتركيز على تحقيق النمو ورفع المبيعات وتحسين الأداء الرقمي.",

    exp_1_role: "مؤسس وخبير نمو المتاجر (Founder & E-commerce Growth)",
    exp_1_company: "Homera | 2025 – حتى الآن",
    exp_1_item1: "بناء المتجر على منصة Easy Order من البداية وإعداد كافة المتطلبات التقنية.",
    exp_1_item2: "ربط وتأمين النطاق عبر Cloudflare، وتثبيت Meta Pixel وConversion API وMicrosoft Clarity.",
    exp_1_item3: "تخطيط وإطلاق حملات Meta Ads الممولة وتحسين استهداف الجماهير وتحليل الـ Funnel.",
    exp_1_item4: "كتابة المحتوى التسويقي الجذاب وتصميم الإبداعيات لرفع معدل التحويل (CRO).",

    exp_2_role: "مستشار تسويق رقمي (Digital Marketing Consultant)",
    exp_2_company: "Multiple Brands (Homera, B-Link, Billiardo Corner) | 2024 – حتى الآن",
    exp_2_item1: "إدارة استراتيجيات التسويق الرقمي الشاملة لعلامات تجارية متعددة.",
    exp_2_item2: "تحسين أداء إعلانات الميتا ورفع الـ ROAS عبر اختبارات A/B المستمرة.",
    exp_2_item3: "تحليل بيانات الحملات وإعداد تقارير التحسين ومراقبة تكلفة الاستحواذ.",

    exp_3_role: "ميديا باير ومخطط استراتيجي مستقل (Freelance Media Buyer)",
    exp_3_company: "Freelance | 2024 – حتى الآن",
    exp_3_item1: "إدارة ميزانيات الإعلانات على فيسبوك وإنستغرام واختيار جماهير دقيقة (Audiences & Lookalikes).",
    exp_3_item2: "إعادة الاستهداف (Retargeting) وبناء مسارات تسويقية كاملة (Full-Funnel Campaigns).",
    exp_3_item3: "زيادة تفاعل الصفحات وتنمية قواعد المتابعين والعملاء المحتملين.",

    exp_4_role: "صانع محتوى تقني ومؤسس منصة رقمية (Content Creator & Founder)",
    exp_4_company: "Reda Gaber Technology Brand | أكثر من 560 فيديو",
    exp_4_item1: "إنتاج وإخراج أكثر من 560 فيديو متخصص عبر منصات يوتيوب، فيسبوك، تيك توك، وإنستغرام.",
    exp_4_item2: "إدارة دورة المحتوى: سكريبت، تصوير، مونتاج، تصاميم Thumbnails، وتحسين سيو الفيديو.",

    // Skills Matrix
    skills_tag: "الكفاءات والقدرات",
    skills_title: "الأدوات والمهارات الفنية (Tech Stack)",
    skills_desc: "مزيج يجمع بين التحليل الرقمي العميق، التقنيات الهندسية للمتاجر، والإبداع التسويقي.",

    skill_tab_media: "الميديا باينج والإعلانات",
    skill_tab_ecommerce: "المتاجر والتتبع التقني",
    skill_tab_creative: "المحتوى والذكاء الاصطناعي",
    skill_tab_soft: "المهارات القيادية والشخصية",

    // Certifications & Training
    edu_tag: "الشهادات والتدريب",
    edu_title: "الدورات والشهادات التخصصية",
    edu_desc: "تدريب مكثف في أحدث استراتيجيات شراء الإعلانات، وتوسيع المتاجر، وأدوات الذكاء الاصطناعي.",
    edu_course_1: "Advanced Media Buying & Performance Marketing",
    edu_course_2: "Meta Ads & Campaign Scaling",
    edu_course_3: "E-commerce & Easy Order Store Management",
    edu_course_4: "SEO & Conversion Rate Optimization (CRO)",
    edu_course_5: "AI for Marketing & Content Creation",
    edu_course_6: "Graphic Design & Video Editing",

    // Contact
    contact_tag: "هل أنت جاهز لتكبير أرباحك؟",
    contact_title: "لنبدأ العمل على مشروعك القادم معاً",
    contact_desc: "تواصل معي مباشرة لمناقشة متجرك أو خطتك الإعلانية، وتحديد الاستراتيجية الأنسب لتحقيق أهدافك.",
    contact_phone_label: "الهاتف / واتساب:",
    contact_email_label: "البريد الإلكتروني:",
    contact_location_label: "الموقع:",
    contact_location_val: "الإسكندرية، جمهورية مصر العربية",
    
    form_title: "طلب استشارة أو إدارة حملات",
    form_name_label: "الاسم الكريم",
    form_name_ph: "مثال: أحمد محمود",
    form_biz_label: "نوع العمل / المتجر",
    form_biz_ph: "مثال: متجر إلكتروني، ملابس، أدوات منزلية، خدمات...",
    form_spend_label: "الميزانية الشهرية المقترحة",
    form_spend_opt1: "أقل من 15,000 ج.م / $500",
    form_spend_opt2: "15,000 - 45,000 ج.م / $500 - $1,500",
    form_spend_opt3: "أكثر من 45,000 ج.م / +$1,500",
    form_spend_opt4: "بناء متجر Easy Order جديد من الصفر",
    form_msg_label: "تفاصيل المشروع أو التحديات الحالية",
    form_msg_ph: "اكتب نبذة عن متجرك، المشاكل في الحملات الحالية، أو الهدف الذي تريد تحقيقه...",
    form_submit: "إرسال التفاصيل عبر واتساب فوراً 🚀",
    form_submit_email: "أو إرسال عبر البريد الإلكتروني",

    // Footer
    footer_rights: "جميع الحقوق محفوظة © 2025 - رضا جابر. صُمم الموقع ليعكس أعلى معايير التسويق الرقمي."
  },

  en: {
    // Nav
    nav_home: "Home",
    nav_services: "Services",
    nav_case_studies: "Portfolio",
    nav_experience: "Experience",
    nav_skills: "Skills & Stack",
    nav_calculator: "ROAS Calculator",
    nav_contact: "Contact",
    nav_cta: "Start Your Project",

    // Hero
    hero_badge: "Open for New Projects & Growth Consultations 🚀",
    hero_title_1: "Transforming Ad Spend into",
    hero_title_highlight: "Scalable Sales & Profit",
    hero_subtitle: "Performance Marketer, Media Buyer & E-commerce Growth Specialist. Specializing in launching and scaling profitable Meta Ads, building turnkey Easy Order stores, configuring deep tracking (Pixel & CAPI), and multiplying ROAS.",
    hero_cta_whatsapp: "Direct WhatsApp Chat",
    hero_cta_portfolio: "Explore Case Studies",
    hero_cta_cv: "Download Resume (CV)",

    // Stats
    stat_videos_num: "560+",
    stat_videos_label: "Tech & Marketing Videos Published",
    stat_tracking_num: "100%",
    stat_tracking_label: "Tracking Accuracy (CAPI & Pixel)",
    stat_roas_num: "4.5x+",
    stat_roas_label: "Target Campaign ROAS",
    stat_stores_num: "Easy Order",
    stat_stores_label: "Store Architecture from Scratch",

    // Services
    services_tag: "What I Deliver",
    services_title: "End-to-End Growth & Performance Marketing Services",
    services_desc: "Data-driven strategies from customer persona research to checkout optimization and repeat buyers.",

    srv_1_title: "Meta Ads Scaling & Media Buying",
    srv_1_desc: "Planning, launching, and scaling high-ROAS Facebook & Instagram campaigns. Systematic A/B creative testing, audience lookalikes, and CAC reduction.",

    srv_2_title: "Turnkey Easy Order Store Building",
    srv_2_desc: "Architecting high-converting e-commerce stores on Easy Order from scratch, product catalog setup, landing page CRO, and custom domain connection.",

    srv_3_title: "Deep Tracking & Technical Architecture",
    srv_3_desc: "Flawless Meta Pixel and Conversion API (CAPI) setup, Cloudflare security and speed configuration, Google Search Console, Google Merchant Center, and Microsoft Clarity.",

    srv_4_title: "High-Converting Creatives & AI Content",
    srv_4_desc: "Designing impactful ad creatives (images & video reels), persuasive copywriting, and leveraging AI tools (ChatGPT, Midjourney) for agile creative iteration.",

    srv_5_title: "E-Commerce SEO & Organic Visibility",
    srv_5_desc: "On-page and technical SEO implementation for stores and product pages to drive sustainable organic search traffic from Google.",

    srv_6_title: "Facebook Product Catalog & Issue Fixing",
    srv_6_desc: "Configuring dynamic Advantage+ catalog feeds, diagnosing Pixel/CAPI sync discrepancies, and domain verification for seamless retargeting.",

    // Portfolio & Works
    works_tag: "Featured Case Studies",
    works_title: "Real Platforms & Proven Impact",
    works_desc: "A showcase of brands, e-commerce stores, and digital channels I've built and grown.",

    work_1_badge: "Turnkey E-commerce Store",
    work_1_title: "Homera Store - Homera.me",
    work_1_desc: "Built the store on Easy Order from scratch, configured DNS/Cloudflare, integrated Meta Pixel & CAPI, set up Google Merchant Center & Clarity, and scaled acquisition campaigns driving consistent sales.",
    work_1_btn: "Visit Live Store",

    work_2_badge: "Content Brand & Channel",
    work_2_title: "Reda Gaber Tech Channel (YouTube)",
    work_2_desc: "Built a consumer tech media presence publishing over 560 comprehensive videos across YouTube, TikTok, and Meta. Managed full production: scripting, editing, SEO, and community engagement.",
    work_2_btn: "Watch on YouTube",

    work_3_badge: "Verified Industry Profile",
    work_3_title: "Top Media Buyer Verified Profile",
    work_3_desc: "Official verified membership and profile on the Top Media Buyer network, validating expertise in ad scaling, client acquisitions, and e-commerce growth.",
    work_3_btn: "View Top-MB Profile",

    work_4_badge: "Multi-Brand Portfolio",
    work_4_title: "Multi-Brand Digital Growth",
    work_4_desc: "End-to-end digital marketing and media buying strategies for diverse brands including Homera, B-Link, and Billiardo Corner, maximizing campaign ROAS and customer lifetime value.",

    // Calculator Section
    calc_tag: "Client Interactive Tool",
    calc_title: "Calculate Your Projected ROAS & Revenue",
    calc_desc: "Adjust the sliders below to estimate your potential returns when scaling with optimized Meta Ads.",
    calc_spend_label: "Monthly Ad Budget:",
    calc_currency: "EGP / USD",
    calc_roas_label: "Target ROAS (Return On Ad Spend):",
    calc_roas_val: "x",
    calc_rev_label: "Estimated Total Revenue:",
    calc_gain_label: "Estimated Incremental Gross Value:",
    calc_note: "* Projections are estimates based on audience optimization, offer resonance, and landing page conversion rate (CRO).",
    calc_cta: "Scale Your Store With Me",

    // Experience Timeline
    exp_tag: "Career Trajectory",
    exp_title: "Hands-on Experience & Milestones",
    exp_desc: "A consistent track record of growing sales, managing budgets, and building high-performance e-commerce assets.",

    exp_1_role: "Founder & E-commerce Growth Specialist",
    exp_1_company: "Homera | 2025 – Present",
    exp_1_item1: "Built the Homera e-commerce store on Easy Order from scratch with optimal UX.",
    exp_1_item2: "Implemented Meta Pixel, CAPI, Cloudflare, Google Search Console & Microsoft Clarity.",
    exp_1_item3: "Launched and managed scalable Meta Ads campaigns with rigorous A/B creative testing.",
    exp_1_item4: "Wrote persuasive copy and designed high-converting visual assets to improve checkout rates.",

    exp_2_role: "Digital Marketing Consultant",
    exp_2_company: "Multiple Brands (Homera, B-Link, Billiardo Corner) | 2024 – Present",
    exp_2_item1: "Led full-funnel digital marketing strategies across diverse industries.",
    exp_2_item2: "Optimized Meta advertising budgets to maximize ROAS and lower customer acquisition costs.",
    exp_2_item3: "Monitored campaign KPIs, synthesized performance analytics, and implemented growth levers.",

    exp_3_role: "Freelance Media Buyer & Marketing Strategist",
    exp_3_company: "Freelance | 2024 – Present",
    exp_3_item1: "Planned, launched, and managed targeted Facebook & Instagram ad campaigns.",
    exp_3_item2: "Developed custom retargeting architectures and lookalike audience strategies.",
    exp_3_item3: "Boosted organic community engagement while scaling paid acquisition funnels.",

    exp_4_role: "Technology Brand Founder & Content Creator",
    exp_4_company: "Reda Gaber Technology Brand | 560+ Videos",
    exp_4_item1: "Produced and published 560+ videos on consumer tech, smart hardware, and digital solutions.",
    exp_4_item2: "Managed full lifecycle: scripting, shooting, editing, thumbnail design, and YouTube SEO.",

    // Skills Matrix
    skills_tag: "Core Capabilities",
    skills_title: "Technical Stack & Core Competencies",
    skills_desc: "A powerful combination of data-driven media buying, technical store setup, and creative storytelling.",

    skill_tab_media: "Media Buying & Ads",
    skill_tab_ecommerce: "E-Commerce & Tracking",
    skill_tab_creative: "Creative & AI Tools",
    skill_tab_soft: "Leadership & Strategy",

    // Certifications & Training
    edu_tag: "Professional Training",
    edu_title: "Certifications & Specialized Courses",
    edu_desc: "Intensive, practical training in scalable media buying, e-commerce management, and AI marketing.",
    edu_course_1: "Advanced Media Buying & Performance Marketing",
    edu_course_2: "Meta Ads & Campaign Scaling (Safe Scaling & Budget Allocation)",
    edu_course_3: "E-commerce & Easy Order Store Management",
    edu_course_4: "SEO & Conversion Rate Optimization (CRO)",
    edu_course_5: "AI for Marketing & Accelerated Creative Production",
    edu_course_6: "Graphic Design, Video Editing & Creative Strategy",

    // Contact
    contact_tag: "Ready to Scale?",
    contact_title: "Let's Scale Your Business Together",
    contact_desc: "Get in touch directly to discuss your e-commerce store, ad campaigns, or technical setup requirements.",
    contact_phone_label: "Phone / WhatsApp:",
    contact_email_label: "Email Address:",
    contact_location_label: "Location:",
    contact_location_val: "Alexandria, Egypt",

    form_title: "Book a Consultation / Inquire",
    form_name_label: "Your Full Name",
    form_name_ph: "e.g. John Doe",
    form_biz_label: "Your Business / Store Type",
    form_biz_ph: "e.g. Fashion E-commerce, Electronics, Dropshipping, Agency...",
    form_spend_label: "Estimated Monthly Ad Spend",
    form_spend_opt1: "Under 15,000 EGP / $500",
    form_spend_opt2: "15,000 - 45,000 EGP / $500 - $1,500",
    form_spend_opt3: "Over 45,000 EGP / $1,500+",
    form_spend_opt4: "New Easy Order Store Build from Scratch",
    form_msg_label: "Project Goals & Current Bottlenecks",
    form_msg_ph: "Tell me about your product, your target ROAS, or current tracking/campaign issues...",
    form_submit: "Send Directly via WhatsApp 🚀",
    form_submit_email: "Or Send via Email",

    // Footer
    footer_rights: "All rights reserved © 2025 - Reda Gaber. Crafted for peak digital performance."
  }
};

// State
let currentLang = localStorage.getItem('reda_portfolio_lang') || 'ar';
let currentTheme = localStorage.getItem('reda_portfolio_theme') || 'dark';

// Init
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLanguage(currentLang);
  setupNavbar();
  setupRoasCalculator();
  setupLeadForm();
  setupCounters();
});

// Theme Management
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('reda_portfolio_theme', currentTheme);
  applyTheme(currentTheme);
}

function applyTheme(theme) {
  const html = document.documentElement;
  const themeIcon = document.getElementById('theme-icon');
  if (theme === 'light') {
    html.classList.remove('dark');
    html.classList.add('light');
    if (themeIcon) themeIcon.className = 'fas fa-moon text-slate-700';
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
    if (themeIcon) themeIcon.className = 'fas fa-sun text-amber-400';
  }
}

// Language Management
function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('reda_portfolio_lang', currentLang);
  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  const html = document.documentElement;
  const body = document.body;
  const langText = document.getElementById('lang-toggle-text');
  
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  
  if (lang === 'ar') {
    body.classList.remove('font-sans-en');
    body.classList.add('font-cairo');
    if (langText) langText.textContent = 'English';
  } else {
    body.classList.remove('font-cairo');
    body.classList.add('font-sans-en');
    if (langText) langText.textContent = 'العربية';
  }

  // Update all text elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  // Update input placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (i18n[lang] && i18n[lang][key]) {
      el.setAttribute('placeholder', i18n[lang][key]);
    }
  });

  // Recalculate ROAS text formatting
  updateRoasDisplay();
}

// Navbar Scroll Effect & Mobile Drawer
function setupNavbar() {
  const navbar = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }
  });

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// ROAS Calculator Logic
function setupRoasCalculator() {
  const spendSlider = document.getElementById('calc-spend-slider');
  const roasSlider = document.getElementById('calc-roas-slider');

  if (spendSlider && roasSlider) {
    spendSlider.addEventListener('input', updateRoasDisplay);
    roasSlider.addEventListener('input', updateRoasDisplay);
  }
}

function updateRoasDisplay() {
  const spendSlider = document.getElementById('calc-spend-slider');
  const roasSlider = document.getElementById('calc-roas-slider');
  if (!spendSlider || !roasSlider) return;

  const spendVal = parseInt(spendSlider.value, 10);
  const roasVal = parseFloat(roasSlider.value);

  const displaySpend = document.getElementById('display-spend');
  const displayRoas = document.getElementById('display-roas');
  const displayRevenue = document.getElementById('display-revenue');
  const displayGain = document.getElementById('display-gain');

  const projectedRevenue = Math.round(spendVal * roasVal);
  const netReturn = projectedRevenue - spendVal;

  if (displaySpend) displaySpend.textContent = spendVal.toLocaleString();
  if (displayRoas) displayRoas.textContent = roasVal.toFixed(1) + 'x';
  if (displayRevenue) displayRevenue.textContent = projectedRevenue.toLocaleString();
  if (displayGain) displayGain.textContent = '+' + netReturn.toLocaleString();
}

// WhatsApp Lead Generation
function setupLeadForm() {
  const form = document.getElementById('consultation-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('form-name').value.trim();
    const biz = document.getElementById('form-biz').value.trim();
    const budget = document.getElementById('form-budget').value;
    const notes = document.getElementById('form-notes').value.trim();

    const isAr = currentLang === 'ar';
    let text = isAr 
      ? `مرحباً أ/ رضا، أنا ${name}، وأرغب في استشارة/إدارة حملات تسويقية.%0A%0A` +
        `💼 مجال العمل: ${biz}%0A` +
        `💰 الميزانية المقترحة: ${budget}%0A` +
        `📝 تفاصيل إضافية: ${notes || 'أريد معرفة تفاصيل التعاون'}`
      : `Hello Reda, I am ${name}, and I would like to inquire about performance marketing / store growth.%0A%0A` +
        `💼 Business: ${biz}%0A` +
        `💰 Estimated Budget: ${budget}%0A` +
        `📝 Details: ${notes || 'Looking to discuss collaboration opportunities.'}`;

    // WhatsApp phone number for Reda Gaber: +201002070567
    const waUrl = `https://wa.me/201002070567?text=${text}`;
    window.open(waUrl, '_blank');
  });
}

function sendEmailFallback() {
  const name = document.getElementById('form-name').value.trim();
  const biz = document.getElementById('form-biz').value.trim();
  const budget = document.getElementById('form-budget').value;
  const notes = document.getElementById('form-notes').value.trim();

  const subject = encodeURIComponent(`Consultation Inquiry from ${name || 'Portfolio Visitor'}`);
  const body = encodeURIComponent(
    `Name: ${name}\nBusiness: ${biz}\nBudget: ${budget}\nDetails: ${notes}`
  );
  window.location.href = `mailto:redagaber@gmail.com?subject=${subject}&body=${body}`;
}

// Animated Numerical Counters
function setupCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.stat-card').forEach(card => observer.observe(card));
}
