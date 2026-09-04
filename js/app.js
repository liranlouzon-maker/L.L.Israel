/* =====================================================
   L.L Israel Security — app.js
   ===================================================== */

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lenis;

/* === TRANSLATIONS === */
const TRANSLATIONS = {
  en: {
    nav_services: 'Services',
    nav_about: 'About',
    nav_experience: 'Experience',
    nav_contact: 'Contact',
    nav_cta: 'WhatsApp',

    footer_tagline: 'SECURITY · TRAVEL · DISCRETION',

    hero_tag: 'Licensed Security Professionals',
    hero_h1_line1: 'Professional Security.',
    hero_h1_line2: 'Personal Service.',
    hero_sub: 'L.L Israel is a consulting company specializing in security consulting, event and trip production, travel services, VIP services, personal and business concierge, personal assistance, transportation, due diligence, and provider assessment. We provide tailored solutions for private, corporate, and institutional clients in Israel and worldwide.',
    hero_cta1: 'Get in Touch',
    hero_cta2: 'Contact Us',
    hero_badge1: 'Security & Travel Experts',
    hero_badge2: 'End-to-End Service',
    hero_badge3: 'Experienced Professionals',
    hero_badge4: 'Israel & International',

    stats_years_label: 'Years of Experience',
    stats_clients_label: 'VIP Clients Served',
    stats_ops_label: 'Operations Completed',
    stats_avail_num: '24/7',
    stats_avail_label: 'Always Available',

    services_tag: 'What We Offer',
    services_title: 'Tailored Security, Travel & Logistics Solutions',
    services_sub: 'Seamless planning, coordination, and execution for every mission.',
    service1_name: 'Security Services, Consulting & Staffing',
    service1_desc: 'Our security and consulting services include protection for individuals, delegations and facilities, as well as mobile security; risk assessments; security surveys; loss prevention; investigations and surveillance; CCTV systems; anti-drone technologies; and advanced detection, locating and alert systems. Every service is tailored to the client\'s needs, operating environment, routine and budget.',
    service2_name: 'Trip and Events Planning',
    service2_tag1: 'Travel Advisory, Planning & Recommendations',
    service2_tag2: 'Guided Tours & Experiences',
    service2_tag3: 'Family & Corporate Events',
    service2_tag4: 'Bar Mitzvahs & Special Celebrations',
    service2_tag5: 'Activities & Attractions',
    service2_tag6: 'Restaurant, Hotel, Venue & Event-Space Reservations',
    service3_name: 'Transportation & Logistics Services',
    service3_desc: 'Vehicle coordination and rental, private chauffeur services, luxury transportation, airport transfers, transportation for businesspeople, delegations and overseas guests, security drivers, armored vehicles upon request, and complete planning, coordination and management of transportation, travel and logistics arrangements.',
    service4_name: 'VIP Concierge & Guest Services',
    service4_desc: 'Personalized concierge and personal assistant (PA) services, tailored support for VIPs and distinguished guests, airport meet & assist and lounge arrangements, secure arrivals and departures, hotel and restaurant bookings, and expert advisory for delivering unique, high-end experiences and exceptional service standards throughout Israel and internationally.',

    about_tag: 'About L.L Israel',
    about_title: 'About Us',
    about_p1: 'L.L Israel is a consulting company specializing in security consulting, event and trip production, travel services, VIP services, personal and business concierge, personal assistance, transportation, due diligence, and the assessment of suppliers and service providers. We provide tailored solutions for private, corporate, and institutional clients in Israel and worldwide, in cooperation with leading professionals and providers across a wide range of fields.',
    about_p2: 'Our services include the planning, coordination, and management of services and projects; identifying and connecting clients with the providers best suited to their needs; conducting reliability and due diligence checks; and providing professional guidance from planning through execution. Our experience, professional network, and commitment to personal service enable us to deliver professional, discreet, and efficient solutions while saving clients time, resources, and costs.',
    about_badge2: 'Israel-Based, International Support',
    about_badge4: 'End to End Operations',
    about_badge3: 'Multilingual Team',


    audience_tag: 'Who We Serve',
    audience_title: 'Protection for Every Client',
    audience1_title: 'Government, Corporations & Private Clients',
    audience1_desc: 'Heads of state, senior officials, corporate executives, and private clients requiring professional and representative security services, ranging from official, state-level protection and executive transportation to discreet, low-profile security support and secure logistics.',
    audience2_title: 'Corporate & Business',
    audience2_desc: 'Business delegations, C-suite executives, and corporate groups needing secure, seamless travel support.',
    audience3_title: 'High Profile & VIP',
    audience3_desc: 'Celebrities, public figures, and high-net-worth individuals requiring discreet, professional protection and concierge services.',
    audience4_title: 'Families & Delegations',
    audience4_desc: 'International families, group delegations, and travelers seeking safe, fully-supported experiences throughout Israel and beyond.',
    audience1_tag1: 'Executive Protection', audience1_tag2: 'Secure Transportation', audience1_tag3: 'Risk Advisory',
    audience2_tag1: 'Corporate Security', audience2_tag2: 'Delegation Support', audience2_tag3: 'Airport VIP',
    audience3_tag1: 'Close Protection', audience3_tag2: 'Concierge Support', audience3_tag3: 'Risk Advisory',
    audience4_tag1: 'Guided Tours', audience4_tag2: 'Airport Transfers', audience4_tag3: 'Concierge Support',

    experience_tag: 'The Team',
    experience_title: 'Our Experience',
    exp_p1: 'Our team brings decades of combined experience across government, law enforcement, military, and private security. Over the years we have protected heads of state, corporate executives, high-profile individuals, international delegations, and families — delivering the same standard of care and discretion in every engagement.',
    exp_p2: 'We don\'t rely on scripts. Every client receives a solution built around their specific needs, risk profile, and schedule. The relationships we build are based on trust — and trust is earned through results.',
    exp_badge1: 'Government Cleared',
    exp_badge2: '20+ Years of Experience — Combined with a New Generation',
    exp_badge3: 'International Operations',

    faq_tag: 'Frequently Asked Questions',
    faq_title: 'Questions & Answers',
    faq1_q: 'Do you work internationally?',
    faq1_a: 'Yes. We are based in Israel, and all our services are available internationally through our professional network, subject to local requirements and availability.',
    faq2_q: 'Who are your service providers and partners?',
    faq2_a: 'Our security personnel are trained, experienced professionals with backgrounds in law enforcement. All our partners across every field operate at the highest level.',
    faq4_q: 'Do you offer multilingual services?',
    faq4_a: 'Our team covers the majority of languages, subject to availability. Contact us with your language requirements and we will confirm coverage for your engagement.',
    faq5_q: 'How do I choose the service that is right for me?',
    faq5_a: 'We are available to advise you for free about your needs — whether it is a security package, investigation, trip production, transportation, recommendations, or anything else.',

    cta_tag: 'Get in Touch',
    cta_title: 'Free Initial Consultation',
    cta_sub: 'Tell us what you need and we will find the right solution for you.',
    cta_whatsapp: 'Message on WhatsApp',
    cta_or: 'or send a message',
    form_name_label: 'Your Name',
    form_name: 'Your Name',
    form_email_label: 'Email Address',
    form_email: 'Email Address',
    form_phone_label: 'Phone Number',
    form_phone: 'Phone Number',
    form_message_label: 'Message',
    form_message: 'How can we help you?',
    form_submit: 'Send Message',
    form_success: 'Thank you! We will be in touch shortly.',

    cw_trigger:   'Contact Us',
    cw_title:     'How can we help?',
    cw_phone:     'Call Us',
    cw_whatsapp:  'WhatsApp',
    cw_telegram: 'Telegram',
    cw_sms:       'SMS',
    cw_email:     'Email',

    footer_nav_title: 'NAVIGATION',
    footer_contact_title: 'CONTACT',
    footer_legal: '© 2026 L.L Israel Security. All rights reserved.',
    footer_privacy: 'Privacy Policy',
    footer_tos: 'Terms of Service',
    footer_a11y_statement: 'Accessibility Statement',
    footer_cookie_settings: 'Cookie Settings',

    a11y_panel_title: 'Accessibility',
    a11y_panel_close_label: 'Close accessibility menu',
    a11y_font_size_title: 'Text Size',
    a11y_appearance_title: 'Appearance',
    a11y_links_title: 'Links & Headings',
    a11y_spacing_title: 'Spacing & Cursor',
    a11y_btn_high_contrast: 'High Contrast',
    a11y_btn_inverted: 'Invert Colors',
    a11y_btn_greyscale: 'Greyscale',
    a11y_btn_readable_font: 'Readable Font',
    a11y_btn_highlight_links: 'Highlight Links',
    a11y_btn_highlight_headings: 'Highlight Headings',
    a11y_btn_line_spacing: 'Line Spacing',
    a11y_btn_letter_spacing: 'Letter Spacing',
    a11y_btn_large_cursor: 'Large Cursor',
    a11y_btn_no_anim: 'Stop Animations',
    a11y_reset: 'Reset All',
    a11y_toggle_label: 'Open accessibility menu',

    cookie_banner_text: 'This site uses essential cookies to function properly. You can manage your preferences at any time.',
    cookie_accept_all: 'Accept All',
    cookie_reject: 'Essential Only',
    cookie_settings_btn: 'Settings',
    cookie_prefs_title: 'Cookie Settings',
    cookie_essential_label: 'Essential Cookies',
    cookie_essential_desc: 'Required for the site to function. Cannot be disabled.',
    cookie_analytics_label: 'Analytics Cookies',
    cookie_analytics_desc: 'Help us understand how visitors use the site.',
    cookie_marketing_label: 'Marketing Cookies',
    cookie_marketing_desc: 'Used to track marketing campaigns.',
    cookie_save: 'Save Settings',
  },

  he: {
    nav_services: 'שירותים',
    nav_about: 'אודות',
    nav_experience: 'ניסיון',
    nav_contact: 'צור קשר',
    nav_cta: 'WhatsApp',

    footer_tagline: 'ביטחון · נסיעות · שיקול דעת',

    hero_tag: 'אנשי ביטחון מקצועיים ומורשים',
    hero_h1_line1: 'ביטחון מקצועי.',
    hero_h1_line2: 'שירות אישי.',
    hero_sub: 'L.L Israel היא חברת ייעוץ המתמחה בייעוץ ביטחוני, הפקת אירועים וטיולים, שירותי נסיעות, שירותי VIP, קונסיירז\' אישי ועסקי, ליווי אישי, תחבורה, בדיקות נאותות והערכת ספקים ונותני שירות. אנו מספקים פתרונות מותאמים אישית ללקוחות פרטיים, עסקיים ומוסדיים בישראל וברחבי העולם.',
    hero_cta1: 'צור קשר',
    hero_cta2: 'צור קשר',
    hero_badge1: 'מומחי ביטחון ותיירות',
    hero_badge2: 'שירות מקצה לקצה',
    hero_badge3: 'אנשי מקצוע מנוסים',
    hero_badge4: 'ישראל ובינלאומי',

    stats_years_label: 'שנות ניסיון',
    stats_clients_label: 'לקוחות VIP',
    stats_ops_label: 'מבצעים הושלמו',
    stats_avail_num: '24/7',
    stats_avail_label: 'תמיד זמינים',

    services_tag: 'מה אנו מציעים',
    services_title: 'פתרונות ביטחון, נסיעות ולוגיסטיקה מותאמים אישית',
    services_sub: 'תכנון, תיאום וביצוע חלק לכל משימה.',
    service1_name: 'שירותי אבטחה, יעוץ והשמה',
    service1_desc: 'שירותי האבטחה והייעוץ שלנו כוללים אבטחת אישים ומשלחות, מתקנים ואבטחה ניידת. הערכת סיכונים, סקרי אבטחה, מניעת אובדן, חקירות ומעקב, מערכות טלוויזיה במעגל סגור (CCTV), טכנולוגיות נגד רחפנים, ואמצעי גילוי, איתור והתראה מובילים. כל שירות מותאם לצרכים הייחודיים של הלקוח, לסביבה התפעולית שלו, לשגרה ולתקציב.',
    service2_name: 'תכנון טיולים ואירועים',
    service2_tag1: 'ייעוץ, תכנון והמלצות לטיולים',
    service2_tag2: 'סיורים וחוויות מודרכות',
    service2_tag3: 'אירועים משפחתיים וארגוניים',
    service2_tag4: 'בר ובת מצווה וחגיגות מיוחדות',
    service2_tag5: 'הפעלות ואטרקציות',
    service2_tag6: 'תיאום והזמנת מסעדות, מלונות, אולמות וגני אירועים',
    service3_name: 'שירותי תחבורה ולוגיסטיקה',
    service3_desc: 'תיאום והשכרת רכבים, שירותי נהג פרטי, הסעות ברכבי יוקרה, העברות משדה התעופה ואליו, תחבורה לאנשי עסקים, משלחות ואורחים מחו״ל, נהגי אבטחה, רכבים ממוגנים לפי דרישה, וכן תכנון, תיאום וניהול מלא של כלל סידורי התחבורה, הנסיעות והלוגיסטיקה.',
    service4_name: 'שירותי קונסיירז\' וליווי אורחים',
    service4_desc: 'שירותי קונסיירז\' ועוזר אישי (PA) בהתאמה אישית, ליווי ותמיכה המותאמים לאנשי VIP ולאורחים מכובדים, שירותי קבלת פנים וליווי בשדה התעופה ותיאום טרקלינים, תכנון וניהול הגעות ועזיבות, הזמנת מלונות ומסעדות, וכן ייעוץ מקצועי למתן חוויית אירוח ושירות ייחודית ברמה הגבוהה ביותר, בישראל וברחבי העולם.',

    about_tag: 'אודות L.L Israel',
    about_title: 'אודותינו',
    about_p1: 'L.L Israel היא חברת ייעוץ המתמחה בייעוץ ביטחוני, הפקת אירועים וטיולים, שירותי נסיעות, שירותי VIP, קונסיירז\' אישי ועסקי, ליווי אישי, תחבורה, בדיקות נאותות והערכת ספקים ונותני שירות. אנו מספקים פתרונות מותאמים אישית ללקוחות פרטיים, עסקיים ומוסדיים בישראל וברחבי העולם, תוך שיתוף פעולה עם אנשי מקצוע וספקים מובילים במגוון תחומים.',
    about_p2: 'שירותינו כוללים תכנון, תיאום וניהול שירותים ופרויקטים, איתור וחיבור לספקים המתאימים ביותר לצורכי הלקוח, ביצוע בדיקות אמינות ונאותות, וליווי מקצועי משלב התכנון ועד לביצוע. הניסיון, הקשרים המקצועיים והמחויבות לשירות אישי מאפשרים לנו לספק לכל לקוח פתרון מקצועי, דיסקרטי ויעיל, תוך חיסכון בזמן, במשאבים ובעלויות.',
    about_badge2: 'בסיס בישראל, תמיכה בינלאומית',
    about_badge4: 'פעילות מקצה לקצה',
    about_badge3: 'צוות רב-לשוני',


    audience_tag: 'למי אנו משרתים',
    audience_title: 'הגנה לכל לקוח',
    audience1_title: 'ממשל, תאגידים ולקוחות פרטיים',
    audience1_desc: 'ראשי מדינות, בכירים ממשלתיים, מנהלי חברות ולקוחות פרטיים הזקוקים לשירותי ביטחון מקצועיים ומייצגים — ממגן ממשלתי ותחבורה בכירה ועד תמיכה ביטחונית שיקולית ולוגיסטיקה מאובטחת.',
    audience2_title: 'עסקים ותאגידים',
    audience2_desc: 'משלחות עסקיות, מנהלי C-suite וקבוצות תאגידיות הזקוקות לתמיכה בטוחה וחלקה.',
    audience3_title: 'פרסונות ו-VIP',
    audience3_desc: 'ידוענים, אישים ציבוריים ובעלי הון הדורשים הגנה שיקולית ושירות קונסיירז׳ מקצועי.',
    audience4_title: 'משפחות ומשלחות',
    audience4_desc: 'משפחות בינלאומיות, משלחות קבוצתיות ומטיילים המחפשים חוויות בטוחות ומלוות לאורך כל ישראל ומחוצה לה.',
    audience1_tag1: 'הגנה אישית', audience1_tag2: 'תחבורה מאובטחת', audience1_tag3: 'ייעוץ סיכונים',
    audience2_tag1: 'ביטחון עסקי', audience2_tag2: 'תמיכת משלחות', audience2_tag3: 'VIP שדה תעופה',
    audience3_tag1: 'הגנה צמודה', audience3_tag2: 'שירות קונסיירז׳', audience3_tag3: 'ייעוץ סיכונים',
    audience4_tag1: 'סיורים מודרכים', audience4_tag2: 'העברות שדה תעופה', audience4_tag3: 'שירות קונסיירז׳',

    experience_tag: 'הצוות',
    experience_title: 'הניסיון שלנו',
    exp_p1: 'הצוות שלנו מביא עמו עשרות שנים של ניסיון משולב בממשל, אכיפת חוק, צבא וביטחון פרטי. לאורך השנים הגנו על ראשי מדינות, מנהלים בכירים, אישים בולטים, משלחות בינלאומיות ומשפחות — תוך שמירה על אותה רמה של מקצועיות ושיקול דעת בכל התקשרות.',
    exp_p2: 'אנחנו לא עובדים לפי תסריטים. כל לקוח מקבל פתרון המותאם לצרכיו הספציפיים, פרופיל הסיכון ולוח הזמנים שלו. הקשרים שאנו בונים מבוססים על אמון — ואמון נרכש דרך תוצאות.',
    exp_badge1: 'בעלי אישור ביטחוני',
    exp_badge2: 'מעל 20 שנות ניסיון — בשילוב דור צעיר',
    exp_badge3: 'פעילות בינלאומית',

    faq_tag: 'שאלות נפוצות',
    faq_title: 'שאלות ותשובות',
    faq1_q: 'האם אתם עובדים בינלאומית?',
    faq1_a: 'כן. אנו פועלים מישראל, וכל שירותינו זמינים גם בחו״ל באמצעות הרשת המקצועית שלנו, בהתאם לדרישות המקומיות ולזמינות.',
    faq2_q: 'מי הם נותני השירות והספקים שלכם?',
    faq2_a: 'צוותי האבטחה וספקי השירות שלנו מורכבים ממקצוענים ובעלי ניסיון יוצאי מערכות החוק ובעלי ניסיון בתחומם. השותפים שלנו כולם ברמה הגבוהה ביותר.',
    faq4_q: 'האם אתם מציעים שירות רב-לשוני?',
    faq4_a: 'הצוות שלנו מכסה את רוב השפות, בהתאם לזמינות. פנה אלינו עם דרישות השפה שלך ואנאשר את הכיסוי עבור ההתקשרות שלך.',
    faq5_q: 'איך אני בוחר את השירות שמתאים לי?',
    faq5_a: 'אנחנו זמינים לייעץ בחינם לגבי הצרכים שלך, אם זה חבילת אבטחה, חקירה, הפקת טיול, תחבורה, המלצות או כל דבר אחר.',

    cta_tag: 'צור קשר',
    cta_title: 'ייעוץ ראשוני חינם',
    cta_sub: 'ספר לנו מה אתה צריך ונמצא עבורך את הפתרון המתאים.',
    cta_whatsapp: 'שלח WhatsApp',
    cta_or: 'או שלח הודעה',
    form_name_label: 'שמך',
    form_name: 'שמך',
    form_email_label: 'כתובת אימייל',
    form_email: 'כתובת אימייל',
    form_phone_label: 'מספר טלפון',
    form_phone: 'מספר טלפון',
    form_message_label: 'הודעה',
    form_message: 'כיצד נוכל לעזור לך?',
    form_submit: 'שלח הודעה',
    form_success: 'תודה! ניצור קשר בקרוב.',

    cw_trigger:   'צור קשר',
    cw_title:     'איך נוכל לעזור?',
    cw_phone:     'התקשר',
    cw_whatsapp:  'WhatsApp',
    cw_telegram: 'טלגרם',
    cw_sms:       'SMS',
    cw_email:     'אימייל',

    footer_nav_title: 'ניווט',
    footer_contact_title: 'צור קשר',
    footer_legal: '© 2026 L.L Israel Security. כל הזכויות שמורות.',
    footer_privacy: 'מדיניות פרטיות',
    footer_tos: 'תנאי שימוש',
    footer_a11y_statement: 'הצהרת נגישות',
    footer_cookie_settings: 'הגדרות עוגיות',

    a11y_panel_title: 'נגישות',
    a11y_panel_close_label: 'סגור תפריט נגישות',
    a11y_font_size_title: 'גודל טקסט',
    a11y_appearance_title: 'תצוגה',
    a11y_links_title: 'קישורים וכותרות',
    a11y_spacing_title: 'מרווח וסמן',
    a11y_btn_high_contrast: 'ניגודיות גבוהה',
    a11y_btn_inverted: 'צבעים הפוכים',
    a11y_btn_greyscale: 'גווני אפור',
    a11y_btn_readable_font: 'פונט קריא',
    a11y_btn_highlight_links: 'הדגש קישורים',
    a11y_btn_highlight_headings: 'הדגש כותרות',
    a11y_btn_line_spacing: 'ריווח שורות',
    a11y_btn_letter_spacing: 'ריווח אותיות',
    a11y_btn_large_cursor: 'סמן גדול',
    a11y_btn_no_anim: 'עצור אנימציות',
    a11y_reset: 'אפס הכל',
    a11y_toggle_label: 'פתח תפריט נגישות',

    cookie_banner_text: 'האתר משתמש בעוגיות חיוניות לתפעולו התקין. ניתן לנהל את ההעדפות שלך בכל עת.',
    cookie_accept_all: 'קבל הכל',
    cookie_reject: 'חיוניות בלבד',
    cookie_settings_btn: 'הגדרות',
    cookie_prefs_title: 'הגדרות עוגיות',
    cookie_essential_label: 'עוגיות חיוניות',
    cookie_essential_desc: 'נדרשות לתפעול תקין של האתר. לא ניתן לבטלן.',
    cookie_analytics_label: 'עוגיות אנליטיקה',
    cookie_analytics_desc: 'מסייעות לנו להבין כיצד משתמשים באתר.',
    cookie_marketing_label: 'עוגיות שיווקיות',
    cookie_marketing_desc: 'משמשות למעקב אחר קמפיינים שיווקיים.',
    cookie_save: 'שמור הגדרות',
  }
};

/* === i18n === */
function setLang(code) {
  const t = TRANSLATIONS[code];
  if (!t) return;

  const isRTL = code === 'he';
  document.documentElement.dir  = isRTL ? 'rtl' : 'ltr';
  document.documentElement.lang = code;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.dataset.i18nAriaLabel;
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  // Toggle lang-specific content blocks (used in a11y statement modal, privacy.html, tos.html)
  document.querySelectorAll('.lang-en').forEach(el => { el.hidden = isRTL; });
  document.querySelectorAll('.lang-he').forEach(el => { el.hidden = !isRTL; });

  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    const active = btn.dataset.langBtn === code;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  localStorage.setItem('ll-lang', code);
}

function initLangSwitcher() {
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.langBtn));
  });
  const saved = localStorage.getItem('ll-lang');
  if (saved && TRANSLATIONS[saved]) setLang(saved);
}


/* === NAV === */
function initNav() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('mobile-drawer');
  const overlay   = document.getElementById('drawer-overlay');
  const closeBtn  = document.getElementById('drawer-close');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('visible');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('visible');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    drawer.classList.contains('open') ? closeDrawer() : openDrawer();
  });
  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
}

/* === SCROLL SPY === */
function initNavActiveLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('nav a[href^="#"]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`nav a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* === SCROLL ANIMATIONS === */
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up, .fade-left, .fade-right, .fade-scale').forEach(el => observer.observe(el));
}

/* === GSAP COUNTERS === */
function initCounters() {
  if (prefersReduced || typeof gsap === 'undefined') return;

  document.querySelectorAll('[data-counter]').forEach(el => {
    const target   = parseFloat(el.dataset.counter);
    const suffix   = el.dataset.suffix || '';
    const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
    const proxy    = { val: 0 };

    gsap.to(proxy, {
      val: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 80%', once: true },
      onUpdate() {
        el.textContent = proxy.val.toFixed(decimals) + suffix;
      }
    });
  });
}

/* === WORKFLOW LINE === */
function initWorkflowAnimation() {
  if (prefersReduced || typeof gsap === 'undefined') return;

  const line  = document.querySelector('.workflow-line');
  const steps = document.querySelectorAll('.workflow-step');
  if (!line) return;

  gsap.fromTo(line, { scaleX: 0 }, {
    scaleX: 1,
    duration: 1.2,
    ease: 'power2.inOut',
    scrollTrigger: { trigger: line, start: 'top 75%' }
  });

  gsap.from(steps, {
    opacity: 0,
    y: 30,
    scale: 0.95,
    duration: 0.5,
    ease: 'back.out(1.4)',
    stagger: 0.14,
    scrollTrigger: { trigger: line, start: 'top 75%' },
    delay: 0.35
  });
}

/* === SPOTLIGHT CARDS === */
function initSpotlightCards() {
  document.querySelectorAll('[data-spotlight]').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--x', (e.clientX - r.left) + 'px');
      card.style.setProperty('--y', (e.clientY - r.top) + 'px');
    });
  });
}

/* === FAQ === */
function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    const ans = item.querySelector('.faq-answer');

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      document.querySelectorAll('.faq-question').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.closest('.faq-item').classList.remove('open');
        b.nextElementSibling.hidden = true;
      });

      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        item.classList.add('open');
        ans.hidden = false;
      }
    });
  });
}

/* === FLOATING CONTACT WIDGET === */
function initContactWidget() {
  const trigger = document.getElementById('cw-trigger');
  const panel   = document.getElementById('cw-panel');
  if (!trigger || !panel) return;

  function open() {
    trigger.setAttribute('aria-expanded', 'true');
    panel.setAttribute('aria-hidden', 'false');
    panel.classList.add('cw-open');
  }
  function close() {
    trigger.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
    panel.classList.remove('cw-open');
  }

  trigger.addEventListener('click', () => {
    trigger.getAttribute('aria-expanded') === 'true' ? close() : open();
  });

  const heroBtn = document.getElementById('hero-open-contact');
  if (heroBtn) heroBtn.addEventListener('click', open);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('#contact-widget') && e.target !== heroBtn && !heroBtn?.contains(e.target)) close();
  });
}

/* === CONTACT FORM === */
function initForm() {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (!form) return;
  const loadedAt = Date.now();
  const endpoint = 'https://script.google.com/macros/s/AKfycby_Cnt7Y1mxcPiZrs0yIa2KIYF20xD1hJNxOwBR15D5nJIC4JKyIFmtMOEJLqpxR7-yzQ/exec';

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const name    = form.querySelector('#f-name').value.trim();
    const email   = form.querySelector('#f-email').value.trim();
    const message = form.querySelector('#f-message').value.trim();

    if (!name || !email || !message) return;

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    const data = new FormData(form);
    data.set('language', document.documentElement.lang || 'en');
    data.set('pageUrl', window.location.href);
    data.set('loadedAt', String(loadedAt));

    try {
      await fetch(endpoint, { method: 'POST', mode: 'no-cors', body: data });
      form.style.display = 'none';
      success.style.display = 'block';
    } catch (error) {
      submitButton.disabled = false;
      window.location.href = `mailto:liranlouzon@llisrconsulting.com?subject=${encodeURIComponent('L.L Israel Security — Website Inquiry')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${form.querySelector('#f-phone').value.trim()}\n\nMessage:\n${message}`)}`;
    }
  });
}

/* === LOADER DISMISS === */
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.pointerEvents = 'none';
      loader.style.transition = 'opacity 0.5s ease';
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 550);
    }, 300);
  });

  // Failsafe: if load event is slow, kill pointer-events immediately
  setTimeout(() => { loader.style.pointerEvents = 'none'; }, 2000);
}

/* === LENIS SMOOTH SCROLL === */
function initLenis() {
  lenis = new Lenis({ duration: 1.1, smoothWheel: true, wheelMultiplier: 0.9 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* === SCROLL-TO FOR ANCHOR LINKS === */
function initSmoothScroll() {
  const HEADER_HEIGHT = 80;
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target, { offset: -HEADER_HEIGHT });
      } else {
        const top = target.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
        window.scrollTo({ top, behavior: prefersReduced ? 'instant' : 'smooth' });
      }
    });
  });
}

/* === ACCESSIBILITY PANEL === */
function initAccessibilityPanel() {
  const toggle  = document.getElementById('a11y-toggle');
  const panel   = document.getElementById('a11y-panel');
  const closeBtn = document.getElementById('a11y-close');
  if (!toggle || !panel) return;

  const A11Y_KEY   = 'll-a11y';
  const FONT_SIZES = ['normal', 'lg', 'xl'];
  let state = { fontSize: 'normal', features: {} };

  try {
    const saved = localStorage.getItem(A11Y_KEY);
    if (saved) state = JSON.parse(saved);
  } catch (e) {}

  function saveState() {
    try { localStorage.setItem(A11Y_KEY, JSON.stringify(state)); } catch (e) {}
  }

  function applyState() {
    const html = document.documentElement;
    html.classList.remove('a11y-fs-lg', 'a11y-fs-xl');
    if (state.fontSize === 'lg') html.classList.add('a11y-fs-lg');
    if (state.fontSize === 'xl') html.classList.add('a11y-fs-xl');
    const display = document.getElementById('a11y-font-display');
    if (display) display.textContent = state.fontSize === 'xl' ? 'XL' : state.fontSize === 'lg' ? 'L' : 'M';

    const featureMap = {
      highContrast:     'a11y-high-contrast',
      inverted:         'a11y-inverted',
      greyscale:        'a11y-greyscale',
      highlightLinks:   'a11y-highlight-links',
      highlightHeadings:'a11y-highlight-headings',
      largeCursor:      'a11y-large-cursor',
      noAnim:           'a11y-no-anim',
      lineSpacing:      'a11y-line-spacing',
      letterSpacing:    'a11y-letter-spacing',
      readableFont:     'a11y-readable-font',
    };
    Object.entries(featureMap).forEach(([key, cls]) => {
      html.classList.toggle(cls, !!state.features[key]);
    });
    document.querySelectorAll('[data-a11y-feature]').forEach(btn => {
      const on = !!state.features[btn.dataset.a11yFeature];
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', String(on));
    });
  }

  applyState();

  function openPanel() {
    panel.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    closeBtn && closeBtn.focus();
  }
  function closePanel() {
    panel.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }

  toggle.addEventListener('click', () => {
    panel.classList.contains('open') ? closePanel() : openPanel();
  });
  closeBtn && closeBtn.addEventListener('click', closePanel);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && panel.classList.contains('open')) closePanel();
  });
  document.addEventListener('click', e => {
    if (!panel.contains(e.target) && e.target !== toggle && panel.classList.contains('open')) closePanel();
  });

  document.getElementById('a11y-font-dec') && document.getElementById('a11y-font-dec').addEventListener('click', () => {
    const idx = FONT_SIZES.indexOf(state.fontSize);
    if (idx > 0) { state.fontSize = FONT_SIZES[idx - 1]; applyState(); saveState(); }
  });
  document.getElementById('a11y-font-inc') && document.getElementById('a11y-font-inc').addEventListener('click', () => {
    const idx = FONT_SIZES.indexOf(state.fontSize);
    if (idx < FONT_SIZES.length - 1) { state.fontSize = FONT_SIZES[idx + 1]; applyState(); saveState(); }
  });

  document.querySelectorAll('[data-a11y-feature]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.a11yFeature;
      state.features[key] = !state.features[key];
      applyState();
      saveState();
    });
  });

  document.getElementById('a11y-reset') && document.getElementById('a11y-reset').addEventListener('click', () => {
    state = { fontSize: 'normal', features: {} };
    applyState();
    saveState();
  });
}

/* === ACCESSIBILITY STATEMENT MODAL === */
function initA11yStatementModal() {
  const openBtn  = document.getElementById('open-a11y-statement');
  const overlay  = document.getElementById('a11y-statement-overlay');
  const closeBtn = document.getElementById('a11y-statement-close');
  if (!openBtn || !overlay) return;

  function openModal() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn && closeBtn.focus();
  }
  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    openBtn.focus();
  }

  openBtn.addEventListener('click', e => { e.preventDefault(); openModal(); });
  closeBtn && closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });
}

/* === COOKIE CONSENT === */
function initCookieConsent() {
  const COOKIE_KEY   = 'll-cookie-consent';
  const banner       = document.getElementById('cookie-banner');
  const prefsOverlay = document.getElementById('cookie-prefs-overlay');
  if (!banner) return;

  const saved = localStorage.getItem(COOKIE_KEY);
  if (!saved) {
    setTimeout(() => banner.classList.add('visible'), 900);
  }

  function saveConsent(prefs) {
    try { localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs)); } catch (e) {}
    banner.classList.remove('visible');
    if (prefsOverlay) { prefsOverlay.classList.remove('open'); document.body.style.overflow = ''; }
  }

  document.getElementById('cookie-accept-all') && document.getElementById('cookie-accept-all').addEventListener('click', () => {
    saveConsent({ essential: true, analytics: true, marketing: true });
  });
  document.getElementById('cookie-reject') && document.getElementById('cookie-reject').addEventListener('click', () => {
    saveConsent({ essential: true, analytics: false, marketing: false });
  });
  document.getElementById('cookie-settings') && document.getElementById('cookie-settings').addEventListener('click', openCookiePrefs);
  document.getElementById('open-cookie-settings') && document.getElementById('open-cookie-settings').addEventListener('click', e => {
    e.preventDefault(); openCookiePrefs();
  });

  function openCookiePrefs() {
    if (!prefsOverlay) return;
    let prefs = { essential: true, analytics: false, marketing: false };
    try { const s = localStorage.getItem(COOKIE_KEY); if (s) prefs = JSON.parse(s); } catch (e) {}
    const ta = document.getElementById('cookie-toggle-analytics');
    const tm = document.getElementById('cookie-toggle-marketing');
    if (ta) { ta.classList.toggle('on', !!prefs.analytics); ta.setAttribute('aria-pressed', String(!!prefs.analytics)); }
    if (tm) { tm.classList.toggle('on', !!prefs.marketing); tm.setAttribute('aria-pressed', String(!!prefs.marketing)); }
    prefsOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  ['cookie-toggle-analytics', 'cookie-toggle-marketing'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', function() {
      const on = this.classList.toggle('on');
      this.setAttribute('aria-pressed', String(on));
    });
  });

  document.getElementById('cookie-save-prefs') && document.getElementById('cookie-save-prefs').addEventListener('click', () => {
    const analytics = document.getElementById('cookie-toggle-analytics')?.classList.contains('on') ?? false;
    const marketing = document.getElementById('cookie-toggle-marketing')?.classList.contains('on') ?? false;
    saveConsent({ essential: true, analytics, marketing });
  });

  if (prefsOverlay) {
    const closeBtn = document.getElementById('cookie-prefs-close');
    closeBtn && closeBtn.addEventListener('click', () => { prefsOverlay.classList.remove('open'); document.body.style.overflow = ''; });
    prefsOverlay.addEventListener('click', e => { if (e.target === prefsOverlay) { prefsOverlay.classList.remove('open'); document.body.style.overflow = ''; } });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && prefsOverlay.classList.contains('open')) { prefsOverlay.classList.remove('open'); document.body.style.overflow = ''; }
    });
  }
}

/* === INIT ALL === */
function initAudiencePanels() {
  const panels = document.querySelectorAll('.audience-panel');
  if (!panels.length) return;
  panels.forEach(panel => {
    panel.addEventListener('click', () => {
      if (panel.classList.contains('active')) return;
      panels.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-expanded', 'false');
      });
      panel.classList.add('active');
      panel.setAttribute('aria-expanded', 'true');
    });
    panel.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        panel.click();
      }
    });
  });
}

function initAll() {
  initLoader();
  if (!prefersReduced) initLenis();
  initNav();
  initNavActiveLinks();
  initLangSwitcher();
  initScrollAnimations();
  if (!prefersReduced) initWorkflowAnimation();
  initSpotlightCards();
  initFaq();
  initForm();
  initSmoothScroll();
  initAudiencePanels();
  initAccessibilityPanel();
  initA11yStatementModal();
  initCookieConsent();
  initContactWidget();
}

document.addEventListener('DOMContentLoaded', initAll);
