/* =====================================================
   LLISR — app.js
   ===================================================== */

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lenis;

/* === TRANSLATIONS === */
const TRANSLATIONS = {
  "en": {
    "page_title": "Physical Security Consulting & Services | LLISR",
    "page_description": "LLISR is a consulting and security company providing physical security advice and tailored support in Israel, Europe and internationally.",
    "quote_link": "Request a Quote",
    "nav_services": "Services",
    "nav_about": "About",
    "nav_experience": "Experience",
    "nav_contact": "Contact",
    "nav_cta": "WhatsApp",
    "footer_tagline": "SECURITY · TRAVEL · DISCRETION",
    "hero_tag": "Licensed Security Professionals",
    "international_title": "Physical Security Consulting in Europe & Beyond",
    "international_desc": "Physical security consulting for private clients, businesses and institutions outside Israel. We assess risks to people and properties, review site security, plan protection and event security, and coordinate suitable local providers for projects in Europe, the United States and other destinations.",
    "international_cta": "Explore International Security Solutions",
    "hero_h1_line1": "Physical Security.",
    "hero_h1_line2": "Personal Service.",
    "hero_sub": "LLISR is an Israel-based consulting and security company serving private clients, businesses and institutions in Israel, Europe and internationally.\n\nOur focus is physical security: protecting people, reviewing sites and properties, assessing risks and planning security for events. One point of contact coordinates professional advice and tailored support around your needs.\n\nOur services include physical security and executive protection in Israel, international physical security consulting, trip and event planning and production, transportation and logistics, VIP concierge services, background checks and due diligence.",
    "hero_cta1": "Request a Quote",
    "hero_cta2": "Contact Us",
    "hero_badge1": "Security & Travel Experts",
    "hero_badge2": "End-to-End Service",
    "hero_badge3": "Experienced Professionals",
    "hero_badge4": "Israel & International",
    "stats_years_label": "Years of Experience",
    "stats_clients_label": "VIP Clients Served",
    "stats_ops_label": "Operations Completed",
    "stats_avail_num": "24/7",
    "stats_avail_label": "Always Available",
    "services_tag": "What We Offer",
    "services_title": "Tailored Security, Travel & Logistics Solutions",
    "services_sub": "Choose a service to learn more.",
    "service_cta": "View service",
    "service1_name": "Physical Security Services & Consulting",
    "service1_desc": "Our Israeli security services include executive protection and close protection for individuals, corporate leaders, delegations and facilities in Israel and abroad. We also provide mobile security, risk assessments, security surveys, loss prevention, investigations and surveillance, CCTV systems, anti-drone technologies, and advanced detection, locating and alert systems. Every service is tailored to the client's needs, operating environment, routine and budget.",
    "service1_link": "Explore our Israeli security services →",
    "service2_name": "Trip and Events Planning",
    "service2_tag1": "Travel Advisory, Planning & Recommendations",
    "service2_tag2": "Guided Tours & Experiences",
    "service2_tag3": "Family & Corporate Events",
    "service2_tag4": "Bar Mitzvahs & Special Celebrations",
    "service2_tag5": "Activities & Attractions",
    "service2_tag6": "Restaurant, Hotel, Venue & Event-Space Reservations",
    "service3_name": "Transportation & Logistics Services",
    "service3_desc": "Vehicle coordination and rental, private chauffeur services, luxury transportation, airport transfers, transportation for businesspeople, delegations and overseas guests, security drivers, armored vehicles upon request, and complete planning, coordination and management of transportation, travel and logistics arrangements.",
    "service4_name": "VIP Concierge & Guest Services",
    "service4_desc": "Personalized concierge and personal assistant (PA) services, tailored support for VIPs and distinguished guests, airport meet & assist and lounge arrangements, secure arrivals and departures, hotel and restaurant bookings, and expert advisory for delivering unique, high-end experiences and exceptional service standards throughout Israel and internationally.",
    "about_tag": "About LLISR",
    "about_title": "About Us",
    "about_p1": "LLISR is an Israel-based consulting and security company focused on physical security and professional, personal service in Israel, Europe and internationally.\n\nOur team is drawn from the highest levels of Israel’s security, military and law-enforcement systems and combines operational experience with discreet, personal service.\n\nWe support businesses, executives, delegations, families and private clients from the United States, Europe and other international markets.",
    "about_p2": "Our services include the planning, coordination, and management of services and projects; identifying and connecting clients with the providers best suited to their needs; conducting reliability and due diligence checks; and providing professional guidance from planning through execution. Our experience, professional network, and commitment to personal service enable us to deliver professional, discreet, and efficient solutions while saving clients time, resources, and costs.",
    "about_badge2": "Israel-Based, International Support",
    "about_badge4": "End to End Operations",
    "about_badge3": "Multilingual Team",
    "audience_tag": "Who We Serve",
    "audience_title": "Protection for Every Client",
    "audience1_title": "Government, Corporations & Private Clients",
    "audience1_desc": "Heads of state, senior officials, corporate executives, and private clients requiring professional and representative security services, ranging from official, state-level protection and executive transportation to discreet, low-profile security support and secure logistics.",
    "audience2_title": "Corporate & Business",
    "audience2_desc": "Business delegations, C-suite executives, and corporate groups needing secure, seamless travel support.",
    "audience3_title": "High Profile & VIP",
    "audience3_desc": "Celebrities, public figures, and high-net-worth individuals requiring discreet, professional protection and concierge services.",
    "audience4_title": "Families & Delegations",
    "audience4_desc": "International families, group delegations, and travelers seeking safe, fully-supported experiences throughout Israel and beyond.",
    "audience1_tag1": "Executive Protection",
    "audience1_tag2": "Secure Transportation",
    "audience1_tag3": "Risk Advisory",
    "audience2_tag1": "Corporate Security",
    "audience2_tag2": "Delegation Support",
    "audience2_tag3": "Airport VIP",
    "audience3_tag1": "Close Protection",
    "audience3_tag2": "Concierge Support",
    "audience3_tag3": "Risk Advisory",
    "audience4_tag1": "Guided Tours",
    "audience4_tag2": "Airport Transfers",
    "audience4_tag3": "Concierge Support",
    "experience_tag": "The Team",
    "experience_title": "Our Experience",
    "exp_p1": "Our team brings decades of combined experience across government, law enforcement, military, and private security. Over the years we have protected heads of state, corporate executives, high-profile individuals, international delegations, and families — delivering the same standard of care and discretion in every engagement.",
    "exp_p2": "We don't rely on scripts. Every client receives a solution built around their specific needs, risk profile, and schedule. The relationships we build are based on trust — and trust is earned through results.",
    "exp_badge1": "Government Cleared",
    "exp_badge2": "20+ Years of Experience — Combined with a New Generation",
    "exp_badge3": "International Operations",
    "faq_tag": "Frequently Asked Questions",
    "faq_title": "Questions & Answers",
    "faq1_q": "In which countries do you operate?",
    "faq1_a": "We are based in Israel and operate in many countries through our professional colleagues and network. Contact us to check whether we can provide the required service in the relevant country.",
    "faq2_q": "Who are your service providers and partners?",
    "faq2_a": "Our security personnel are trained, experienced professionals with backgrounds in law enforcement. All our partners across every field operate at the highest level.",
    "faq4_q": "How do you tailor your service to each client?",
    "faq4_a": "We begin by understanding the client's needs, schedule, preferences, and risk profile. We then build a personalized plan that combines only the services required and remains flexible as circumstances change.",
    "faq5_q": "What is the advantage of coordinating everything through one point of contact?",
    "faq5_a": "One dedicated point of contact coordinates all the required services — security, transportation, logistics, travel, and concierge support. This saves time, prevents gaps between providers, and ensures consistent service from planning through execution.",
    "cta_tag": "Get in Touch",
    "cta_title": "Free Initial Consultation",
    "cta_sub": "Tell us what you need and we will find the right solution for you.",
    "cta_whatsapp": "Message on WhatsApp",
    "cta_or": "or send a message",
    "form_name_label": "Your Name",
    "form_name": "Your Name",
    "form_email_label": "Email Address",
    "form_email": "Email Address",
    "form_phone_label": "Phone Number",
    "form_phone": "Phone Number",
    "form_message_label": "Message",
    "form_message": "How can we help you?",
    "form_submit": "Send Message",
    "form_success": "Thank you. Your inquiry was submitted. If you do not hear from us, please email liran@llisr.com.",
    "form_privacy_prefix": "I have read the",
    "form_privacy_suffix": "and agree that my details may be processed to respond to my inquiry.",
    "cw_trigger": "Contact Us",
    "cw_title": "How can we help?",
    "cw_phone": "Call Us",
    "cw_whatsapp": "WhatsApp",
    "cw_telegram": "Telegram",
    "cw_sms": "SMS",
    "cw_email": "Email",
    "footer_nav_title": "NAVIGATION",
    "footer_contact_title": "CONTACT",
    "footer_legal": "© 2026 LLISR. All rights reserved.",
    "footer_privacy": "Privacy Policy",
    "footer_tos": "Terms of Service",
    "footer_a11y_statement": "Accessibility Statement",
    "a11y_panel_title": "Accessibility",
    "a11y_panel_close_label": "Close accessibility menu",
    "a11y_font_size_title": "Text Size",
    "a11y_appearance_title": "Appearance",
    "a11y_links_title": "Links & Headings",
    "a11y_spacing_title": "Spacing & Cursor",
    "a11y_btn_high_contrast": "High Contrast",
    "a11y_btn_inverted": "Invert Colors",
    "a11y_btn_greyscale": "Greyscale",
    "a11y_btn_readable_font": "Readable Font",
    "a11y_btn_highlight_links": "Highlight Links",
    "a11y_btn_highlight_headings": "Highlight Headings",
    "a11y_btn_line_spacing": "Line Spacing",
    "a11y_btn_letter_spacing": "Letter Spacing",
    "a11y_btn_large_cursor": "Large Cursor",
    "a11y_btn_no_anim": "Stop Animations",
    "a11y_reset": "Reset All",
    "a11y_toggle_label": "Open accessibility menu",
    "hero_intro": "LLISR is an Israel-based consulting and security company serving private clients, businesses and institutions in Israel, Europe and internationally.",
    "hero_focus": "Our focus is physical security: protecting people, reviewing sites and properties, assessing risks and planning security for events. One point of contact coordinates professional advice and tailored support around your needs.",
    "hero_services_prefix": "Our services include",
    "hero_service_security": "physical security and executive protection in Israel",
    "hero_service_international": "international physical security consulting",
    "hero_service_trips": "trip and event planning and production",
    "hero_service_transport": "transportation and logistics",
    "hero_service_concierge": "VIP concierge services",
    "hero_services_suffix": "background checks and due diligence.",
    "scripture_text": "“For he will order his angels to protect you wherever you go.”",
    "scripture_source": "Psalm 91:11 · NLT",
    "skip_link": "Skip to main content",
    "footer_faq": "FAQ",
    "footer_email": "Email Us",
    "international_region": "Europe · United States · International",
    "statement_0": "LLISR is committed to making its website accessible in accordance with WCAG 2.1 Level AA guidelines and applicable accessibility standards.",
    "statement_1": "Accessibility Features",
    "statement_2": "Fully keyboard-navigable",
    "statement_3": "Compatible with screen readers (NVDA, JAWS and similar)",
    "statement_4": "Text size adjustment (increase/decrease)",
    "statement_5": "High contrast, inverted colors, and greyscale modes",
    "statement_6": "Link and heading highlighting",
    "statement_7": "Large cursor mode",
    "statement_8": "Animation pause",
    "statement_9": "Line spacing and letter spacing adjustment",
    "statement_10": "Readable font option",
    "statement_11": "Known Limitations",
    "statement_12": "Some content areas may not yet be fully accessible. We are continuously working to improve accessibility across the site.",
    "statement_13": "Accessibility Widget Disclaimer",
    "statement_14": "The accessibility widget available on this site is a supplementary tool only and does not substitute for accessible development. It does not provide legal protection or constitute a certification of full accessibility.",
    "statement_15": "Contact Us About Accessibility",
    "statement_16": "If you encounter an accessibility issue, please contact us:",
    "statement_18": "Last Updated",
    "statement_19": "This accessibility statement was last updated: September 2026",
    "aria_0": "Main navigation",
    "aria_1": "Language selector",
    "aria_2": "Open menu",
    "aria_3": "Mobile navigation",
    "aria_4": "Close menu",
    "aria_5": "Contact options",
    "aria_6": "Call Us",
    "aria_7": "Email",
    "aria_8": "Decrease text size",
    "aria_9": "Increase text size",
    "aria_10": "Close"
  },
  "he": {
    "page_title": "שירותי אבטחה ישראליים ואבטחת אישים | LLISR",
    "page_description": "חברת אבטחה ישראלית המספקת אבטחת אישים, ייעוץ ביטחוני, תחבורה מאובטחת וליווי VIP בישראל ובעולם.",
    "quote_link": "בקשת הצעת מחיר",
    "nav_services": "שירותים",
    "nav_about": "אודות",
    "nav_experience": "ניסיון",
    "nav_contact": "צור קשר",
    "nav_cta": "WhatsApp",
    "footer_tagline": "ביטחון · נסיעות · שיקול דעת",
    "hero_tag": "אנשי ביטחון מקצועיים ומורשים",
    "international_title": "ייעוץ ופתרונות אבטחה מחוץ לישראל",
    "international_desc": "ייעוץ ופתרונות אבטחה מותאמים ללקוחות פרטיים, משפחות, עסקים ומוסדות מחוץ לישראל. תכנון אבטחה אישית, אבטחת אתרים ואירועים, הערכות סיכונים ותיאום ספקים מקומיים לפרויקטים באירופה, בארצות הברית וביעדים נוספים.",
    "international_cta": "פתרונות אבטחה בינלאומיים",
    "hero_h1_line1": "אבטחה מקצועית.",
    "hero_h1_line2": "יחס אישי.",
    "hero_sub": "LLISR היא חברת ייעוץ ואבטחה.\n\nאנו מספקים פתרונות מותאמים לעסקים וללקוחות פרטיים.\n\nשירותינו כוללים אבטחה, תכנון והפקת טיולים, לוגיסטיקה, תחבורה, שירותי קונסיירז', בדיקות רקע ובדיקות נאותות.",
    "hero_cta1": "בקשת הצעת מחיר",
    "hero_cta2": "צור קשר",
    "hero_badge1": "מומחי ביטחון ותיירות",
    "hero_badge2": "שירות מקצה לקצה",
    "hero_badge3": "אנשי מקצוע מנוסים",
    "hero_badge4": "ישראל ובינלאומי",
    "stats_years_label": "שנות ניסיון",
    "stats_clients_label": "לקוחות VIP",
    "stats_ops_label": "מבצעים הושלמו",
    "stats_avail_num": "24/7",
    "stats_avail_label": "תמיד זמינים",
    "services_tag": "מה אנו מציעים",
    "services_title": "פתרונות ביטחון, נסיעות ולוגיסטיקה מותאמים אישית",
    "services_sub": "בחרו שירות לקבלת מידע נוסף.",
    "service_cta": "לעמוד השירות",
    "service1_name": "שירותי אבטחה, יעוץ והשמה",
    "service1_desc": "שירותי האבטחה והייעוץ שלנו כוללים אבטחת אישים ומשלחות, מתקנים ואבטחה ניידת. הערכת סיכונים, סקרי אבטחה, מניעת אובדן, חקירות ומעקב, מערכות טלוויזיה במעגל סגור (CCTV), טכנולוגיות נגד רחפנים, ואמצעי גילוי, איתור והתראה מובילים. כל שירות מותאם לצרכים הייחודיים של הלקוח, לסביבה התפעולית שלו, לשגרה ולתקציב.",
    "service1_link": "מידע נוסף על שירותי האבטחה הישראליים שלנו ←",
    "service2_name": "תכנון טיולים ואירועים",
    "service2_tag1": "ייעוץ, תכנון והמלצות לטיולים",
    "service2_tag2": "סיורים וחוויות מודרכות",
    "service2_tag3": "אירועים משפחתיים וארגוניים",
    "service2_tag4": "בר ובת מצווה וחגיגות מיוחדות",
    "service2_tag5": "הפעלות ואטרקציות",
    "service2_tag6": "תיאום והזמנת מסעדות, מלונות, אולמות וגני אירועים",
    "service3_name": "שירותי תחבורה ולוגיסטיקה",
    "service3_desc": "תיאום והשכרת רכבים, שירותי נהג פרטי, הסעות ברכבי יוקרה, העברות משדה התעופה ואליו, תחבורה לאנשי עסקים, משלחות ואורחים מחו״ל, נהגי אבטחה, רכבים ממוגנים לפי דרישה, וכן תכנון, תיאום וניהול מלא של כלל סידורי התחבורה, הנסיעות והלוגיסטיקה.",
    "service4_name": "שירותי קונסיירז' וליווי אורחים",
    "service4_desc": "שירותי קונסיירז' ועוזר אישי (PA) בהתאמה אישית, ליווי ותמיכה המותאמים לאנשי VIP ולאורחים מכובדים, שירותי קבלת פנים וליווי בשדה התעופה ותיאום טרקלינים, תכנון וניהול הגעות ועזיבות, הזמנת מלונות ומסעדות, וכן ייעוץ מקצועי למתן חוויית אירוח ושירות ייחודית ברמה הגבוהה ביותר, בישראל וברחבי העולם.",
    "about_tag": "אודות LLISR",
    "about_title": "אודותינו",
    "about_p1": "LLISR היא חברת ייעוץ ואבטחה.\n\nאנו מספקים פתרונות מותאמים לעסקים וללקוחות פרטיים.\n\nשירותינו כוללים אבטחה, תכנון והפקת טיולים, לוגיסטיקה, תחבורה, שירותי קונסיירז', בדיקות רקע ובדיקות נאותות.",
    "about_p2": "שירותינו כוללים תכנון, תיאום וניהול שירותים ופרויקטים, איתור וחיבור לספקים המתאימים ביותר לצורכי הלקוח, ביצוע בדיקות אמינות ונאותות, וליווי מקצועי משלב התכנון ועד לביצוע. הניסיון, הקשרים המקצועיים והמחויבות לשירות אישי מאפשרים לנו לספק לכל לקוח פתרון מקצועי, דיסקרטי ויעיל, תוך חיסכון בזמן, במשאבים ובעלויות.",
    "about_badge2": "בסיס בישראל, תמיכה בינלאומית",
    "about_badge4": "פעילות מקצה לקצה",
    "about_badge3": "צוות רב-לשוני",
    "audience_tag": "למי אנחנו מספקים שירות",
    "audience_title": "מענה מותאם לכל לקוח",
    "audience1_title": "ממשל, תאגידים ולקוחות פרטיים",
    "audience1_desc": "ראשי מדינות, בכירים בממשל, מנהלים בכירים ולקוחות פרטיים הזקוקים לשירותי אבטחה מקצועיים ודיסקרטיים — מאבטחה צמודה ותחבורה מאובטחת ועד ייעוץ ביטחוני ומעטפת לוגיסטית מלאה.",
    "audience2_title": "עסקים ותאגידים",
    "audience2_desc": "מנהלים בכירים, משלחות עסקיות וקבוצות מטעם חברות הזקוקים למעטפת אבטחה ולוגיסטיקה מקצועית ורציפה.",
    "audience3_title": "אישים ולקוחות VIP",
    "audience3_desc": "ידוענים, אישי ציבור ובעלי הון הזקוקים לאבטחה דיסקרטית ולשירותי קונסיירז׳ מקצועיים.",
    "audience4_title": "משפחות וקבוצות",
    "audience4_desc": "משפחות מחו״ל, קבוצות ומטיילים המבקשים ליווי בטוח, מקצועי ורציף בישראל ובחו״ל.",
    "audience1_tag1": "הגנה אישית",
    "audience1_tag2": "תחבורה מאובטחת",
    "audience1_tag3": "ייעוץ סיכונים",
    "audience2_tag1": "ביטחון עסקי",
    "audience2_tag2": "ליווי משלחות",
    "audience2_tag3": "שירותי VIP בנמל התעופה",
    "audience3_tag1": "אבטחה צמודה",
    "audience3_tag2": "שירותי קונסיירז׳",
    "audience3_tag3": "ייעוץ וניהול סיכונים",
    "audience4_tag1": "סיורים מודרכים",
    "audience4_tag2": "הסעות מ/אל נמל התעופה",
    "audience4_tag3": "שירותי קונסיירז׳",
    "experience_tag": "הצוות",
    "experience_title": "הניסיון שלנו",
    "exp_p1": "הצוות שלנו מביא עמו עשרות שנות ניסיון מצטבר במערכות ממשלתיות, באכיפת החוק, בצבא ובאבטחה הפרטית. לאורך השנים הגנו על ראשי מדינות, מנהלים בכירים, אישי ציבור, משלחות בינלאומיות ומשפחות — תוך הקפדה על מקצועיות, דיסקרטיות ושיקול דעת בכל משימה.",
    "exp_p2": "איננו פועלים לפי תבנית קבועה. לכל לקוח אנו בונים מענה המותאם לצרכיו, לרמת הסיכון וללוח הזמנים שלו. מערכות היחסים שאנו יוצרים מבוססות על אמון, דיסקרטיות ותוצאות מוכחות.",
    "exp_badge1": "בעלי אישור ביטחוני",
    "exp_badge2": "מעל 20 שנות ניסיון — בשילוב דור צעיר",
    "exp_badge3": "פעילות בינלאומית",
    "faq_tag": "שאלות נפוצות",
    "faq_title": "שאלות ותשובות",
    "faq1_q": "באילו מדינות אתם פועלים?",
    "faq1_a": "אנו מבוססים בישראל ופועלים במדינות רבות באמצעות עמיתים וקשרים מקצועיים. ניתן ליצור איתנו קשר כדי לבדוק אם נוכל לספק את השירות הנדרש במדינה הרלוונטית.",
    "faq2_q": "מי הם נותני השירות והספקים שלכם?",
    "faq2_a": "צוותי האבטחה וספקי השירות שלנו מורכבים ממקצוענים ובעלי ניסיון יוצאי מערכות החוק ובעלי ניסיון בתחומם. השותפים שלנו כולם ברמה הגבוהה ביותר.",
    "faq4_q": "כיצד אתם מתאימים את השירות לכל לקוח?",
    "faq4_a": "אנו מתחילים בהבנת הצרכים, לוח הזמנים, ההעדפות ופרופיל הסיכון של הלקוח. בהתאם לכך אנו בונים תכנית אישית המשלבת רק את השירותים הנדרשים ונשארת גמישה לשינויים.",
    "faq5_q": "מה היתרון בריכוז כל השירותים מול איש קשר אחד?",
    "faq5_a": "איש קשר אחד מרכז ומתאם את כלל השירותים הנדרשים — אבטחה, תחבורה, לוגיסטיקה, נסיעות ושירותי קונסיירז׳. כך נחסך זמן, נמנעים פערים בין ספקים ונשמרת רמת שירות אחידה משלב התכנון ועד הביצוע.",
    "cta_tag": "צור קשר",
    "cta_title": "ייעוץ ראשוני חינם",
    "cta_sub": "ספר לנו מה אתה צריך ונמצא עבורך את הפתרון המתאים.",
    "cta_whatsapp": "שלח WhatsApp",
    "cta_or": "או שלח הודעה",
    "form_name_label": "שמך",
    "form_name": "שמך",
    "form_email_label": "כתובת אימייל",
    "form_email": "כתובת אימייל",
    "form_phone_label": "מספר טלפון",
    "form_phone": "מספר טלפון",
    "form_message_label": "הודעה",
    "form_message": "כיצד נוכל לעזור לך?",
    "form_submit": "שלח הודעה",
    "form_success": "תודה. הפנייה נשלחה. אם לא קיבלתם מענה, ניתן לפנות גם ל־liran@llisr.com.",
    "form_privacy_prefix": "קראתי את",
    "form_privacy_suffix": "ואני מסכים לעיבוד פרטיי לצורך מענה לפנייה.",
    "cw_trigger": "צור קשר",
    "cw_title": "איך נוכל לעזור?",
    "cw_phone": "התקשר",
    "cw_whatsapp": "WhatsApp",
    "cw_telegram": "טלגרם",
    "cw_sms": "SMS",
    "cw_email": "אימייל",
    "footer_nav_title": "ניווט",
    "footer_contact_title": "צור קשר",
    "footer_legal": "© 2026 LLISR. כל הזכויות שמורות.",
    "footer_privacy": "מדיניות פרטיות",
    "footer_tos": "תנאי שימוש",
    "footer_a11y_statement": "הצהרת נגישות",
    "a11y_panel_title": "נגישות",
    "a11y_panel_close_label": "סגור תפריט נגישות",
    "a11y_font_size_title": "גודל טקסט",
    "a11y_appearance_title": "תצוגה",
    "a11y_links_title": "קישורים וכותרות",
    "a11y_spacing_title": "מרווח וסמן",
    "a11y_btn_high_contrast": "ניגודיות גבוהה",
    "a11y_btn_inverted": "צבעים הפוכים",
    "a11y_btn_greyscale": "גווני אפור",
    "a11y_btn_readable_font": "פונט קריא",
    "a11y_btn_highlight_links": "הדגש קישורים",
    "a11y_btn_highlight_headings": "הדגש כותרות",
    "a11y_btn_line_spacing": "ריווח שורות",
    "a11y_btn_letter_spacing": "ריווח אותיות",
    "a11y_btn_large_cursor": "סמן גדול",
    "a11y_btn_no_anim": "עצור אנימציות",
    "a11y_reset": "אפס הכל",
    "a11y_toggle_label": "פתח תפריט נגישות"
  },
  "fr": {
    "page_title": "Sécurité physique et conseil en sûreté | LLISR",
    "page_description": "LLISR, société de conseil et de sécurité : protection rapprochée, audits de sûreté et accompagnement sur mesure en Israël, en Europe et à l’international.",
    "quote_link": "Demander un devis",
    "nav_services": "Services",
    "nav_about": "À propos",
    "nav_experience": "Expérience",
    "nav_contact": "Contact",
    "nav_cta": "WhatsApp",
    "footer_tagline": "SÉCURITÉ · VOYAGES · DISCRÉTION",
    "hero_tag": "Professionnels de la sécurité",
    "international_title": "Conseil en sûreté et sécurité physique en Europe",
    "international_desc": "Conseil en sûreté pour les particuliers, entreprises et institutions hors d’Israël. Nous analysons les risques pour les personnes et les biens, réalisons des audits de sûreté des sites et préparons les dispositifs de protection rapprochée et de sécurité événementielle. Les modalités d’intervention et les prestataires locaux sont définis pour chaque projet en Europe, aux États-Unis et à l’international.",
    "international_cta": "Découvrir nos solutions internationales",
    "hero_h1_line1": "Sécurité physique.",
    "hero_h1_line2": "Service personnalisé.",
    "hero_cta1": "Demander un devis",
    "hero_cta2": "Contactez-nous",
    "hero_badge1": "Sécurité et organisation de voyages",
    "hero_badge2": "Coordination de A à Z",
    "hero_badge3": "Professionnels expérimentés",
    "hero_badge4": "Israël et international",
    "stats_years_label": "Années d’expérience",
    "stats_clients_label": "Clients VIP accompagnés",
    "stats_ops_label": "Missions réalisées",
    "stats_avail_num": "24/7",
    "stats_avail_label": "Disponibilité",
    "services_tag": "Nos services",
    "services_title": "Sécurité, voyages et logistique sur mesure",
    "services_sub": "Choisissez un service pour en savoir plus.",
    "service_cta": "Découvrir le service",
    "service1_name": "Sécurité physique et conseil en sûreté",
    "service1_link": "Découvrir nos services de sécurité en Israël →",
    "service1_desc": "Protection rapprochée des particuliers, dirigeants et délégations, sûreté des sites, analyse des risques et audits de sûreté. Chaque prestation est adaptée aux besoins, à l’environnement, aux habitudes et au budget du client.",
    "service2_name": "Organisation de voyages et d’événements",
    "service2_tag1": "Conseil et préparation de voyages",
    "service2_tag2": "Visites guidées et expériences",
    "service2_tag3": "Événements familiaux et professionnels",
    "service2_tag4": "Bar-mitsva et célébrations",
    "service2_tag5": "Activités et découvertes",
    "service2_tag6": "Réservations de restaurants, hôtels et lieux d’événements",
    "service3_name": "Transport et logistique",
    "service3_desc": "Coordination de véhicules, chauffeurs privés, transferts aéroport et logistique pour les particuliers, entreprises et délégations, avec prise en compte des besoins de sécurité lorsque nécessaire.",
    "service4_name": "Conciergerie et services VIP",
    "service4_desc": "Conciergerie personnelle, assistance, accueil à l’aéroport et coordination de réservations et de prestations adaptées aux préférences du client.",
    "about_tag": "À propos de LLISR",
    "about_title": "Qui sommes-nous ?",
    "about_p1": "LLISR est une société de conseil et de sécurité basée en Israël, spécialisée dans la sécurité physique et l’accompagnement sur mesure des clients en Israël, en Europe et à l’international.\n\nNotre équipe associe une expérience dans la sécurité, les forces armées et les forces de l’ordre à une approche discrète et attentive.\n\nNous accompagnons les entreprises, dirigeants, délégations, familles et particuliers des États-Unis, d’Europe et d’autres marchés internationaux.",
    "about_p2": "Nos services comprennent la planification, la coordination et la gestion de prestations et de projets, la sélection de prestataires adaptés, les vérifications d’antécédents et la due diligence, ainsi qu’un accompagnement de la préparation à la réalisation. Un interlocuteur unique coordonne les prestations convenues selon vos besoins.",
    "about_badge2": "Basés en Israël, accompagnement international",
    "about_badge3": "Équipe multilingue",
    "about_badge4": "Coordination de A à Z",
    "audience_tag": "Nos clients",
    "audience_title": "Une protection adaptée à chaque client",
    "audience1_title": "Institutions, entreprises et particuliers",
    "audience1_desc": "Dirigeants, responsables, entreprises et particuliers recherchant un service professionnel de protection, de transport et de logistique, adapté à leur niveau d’exposition et à leurs activités.",
    "audience2_title": "Entreprises et professionnels",
    "audience2_desc": "Délégations professionnelles, équipes dirigeantes et groupes d’entreprises ayant besoin d’une coordination attentive de leurs déplacements et de leur sécurité.",
    "audience3_title": "Personnalités et VIP",
    "audience3_desc": "Personnalités publiques et clients privés recherchant protection et conciergerie avec discrétion et professionnalisme.",
    "audience4_title": "Familles et délégations",
    "audience4_desc": "Familles, délégations et groupes internationaux souhaitant un accompagnement coordonné en Israël et dans d’autres destinations.",
    "audience1_tag1": "Protection des dirigeants",
    "audience1_tag2": "Transport sécurisé selon les besoins",
    "audience1_tag3": "Conseil en gestion des risques",
    "audience2_tag1": "Sécurité des entreprises",
    "audience2_tag2": "Accompagnement des délégations",
    "audience2_tag3": "Accueil VIP à l’aéroport",
    "audience3_tag1": "Protection rapprochée",
    "audience3_tag2": "Conciergerie",
    "audience3_tag3": "Conseil en gestion des risques",
    "audience4_tag1": "Visites guidées",
    "audience4_tag2": "Transferts aéroport",
    "audience4_tag3": "Conciergerie",
    "experience_tag": "L’équipe",
    "experience_title": "Notre expérience",
    "exp_p1": "Notre équipe réunit une expérience acquise dans le secteur public, les forces armées, les forces de l’ordre et la sécurité privée. Elle la met au service de la protection des dirigeants, des délégations, des familles et des particuliers, avec la même exigence de discrétion et de qualité de service.",
    "exp_p2": "Chaque solution tient compte des besoins particuliers, du niveau de risque et du programme du client. Nos relations reposent sur une communication claire, la confiance et la qualité du travail réalisé.",
    "exp_badge1": "Expérience du secteur public",
    "exp_badge2": "Plus de 20 ans d’expérience aux côtés d’une nouvelle génération",
    "exp_badge3": "Missions internationales",
    "faq_tag": "Questions fréquentes",
    "faq_title": "Questions et réponses",
    "faq1_q": "Dans quels pays intervenez-vous ?",
    "faq1_a": "Nous sommes basés en Israël et accompagnons des projets dans plusieurs pays grâce à notre réseau professionnel. Contactez-nous pour vérifier la disponibilité du service souhaité dans la destination concernée.",
    "faq2_q": "Qui sont vos prestataires ?",
    "faq2_a": "Nos professionnels de la sécurité disposent d’une formation et d’une expérience opérationnelle, notamment dans les forces de l’ordre. Les prestataires sont sélectionnés selon les besoins du projet et les exigences locales.",
    "faq4_q": "Comment adaptez-vous le service à chaque client ?",
    "faq4_a": "Nous commençons par comprendre les besoins, le programme, les préférences et le profil de risque du client. Nous préparons ensuite un plan personnalisé qui réunit les services nécessaires et s’adapte à l’évolution du projet.",
    "faq5_q": "Quel est l’avantage d’un interlocuteur unique ?",
    "faq5_a": "Un interlocuteur coordonne les services convenus : sécurité, transport, logistique, voyages et conciergerie. Cette organisation facilite les échanges, limite les écarts entre prestataires et assure la continuité de la préparation à la réalisation.",
    "cta_tag": "Contactez-nous",
    "cta_title": "Premier échange gratuit",
    "cta_sub": "Présentez-nous vos besoins afin de définir une solution adaptée.",
    "cta_whatsapp": "Écrire sur WhatsApp",
    "cta_or": "ou envoyez un message",
    "form_name_label": "Votre nom",
    "form_name": "Votre nom",
    "form_email_label": "Adresse e-mail",
    "form_email": "Adresse e-mail",
    "form_phone_label": "Téléphone",
    "form_phone": "Téléphone",
    "form_message_label": "Message",
    "form_message": "Comment pouvons-nous vous aider ?",
    "form_submit": "Envoyer le message",
    "form_success": "Merci. Votre demande a été envoyée. Sans réponse de notre part, écrivez à liran@llisr.com.",
    "form_privacy_prefix": "J’ai lu la",
    "form_privacy_suffix": "et j’accepte le traitement de mes coordonnées afin de répondre à ma demande.",
    "cw_trigger": "Contactez-nous",
    "cw_title": "Comment pouvons-nous vous aider ?",
    "cw_phone": "Appeler",
    "cw_whatsapp": "WhatsApp",
    "cw_telegram": "Telegram",
    "cw_sms": "SMS",
    "cw_email": "E-mail",
    "footer_nav_title": "NAVIGATION",
    "footer_contact_title": "CONTACT",
    "footer_legal": "© 2026 LLISR. Tous droits réservés.",
    "footer_privacy": "Politique de confidentialité",
    "footer_tos": "Conditions générales de service",
    "footer_a11y_statement": "Déclaration d’accessibilité",
    "a11y_panel_title": "Accessibilité",
    "a11y_panel_close_label": "Fermer le menu d’accessibilité",
    "a11y_font_size_title": "Taille du texte",
    "a11y_appearance_title": "Apparence",
    "a11y_links_title": "Liens et titres",
    "a11y_spacing_title": "Espacement et curseur",
    "a11y_btn_high_contrast": "Contraste élevé",
    "a11y_btn_inverted": "Inverser les couleurs",
    "a11y_btn_greyscale": "Niveaux de gris",
    "a11y_btn_readable_font": "Police lisible",
    "a11y_btn_highlight_links": "Surligner les liens",
    "a11y_btn_highlight_headings": "Surligner les titres",
    "a11y_btn_line_spacing": "Interligne",
    "a11y_btn_letter_spacing": "Espacement des lettres",
    "a11y_btn_large_cursor": "Grand curseur",
    "a11y_btn_no_anim": "Arrêter les animations",
    "a11y_reset": "Tout réinitialiser",
    "a11y_toggle_label": "Ouvrir le menu d’accessibilité",
    "hero_intro": "LLISR est une société de conseil et de sécurité basée en Israël, au service des particuliers, des entreprises et des institutions en Israël, en Europe et à l’international.",
    "hero_focus": "Notre priorité est la sécurité physique : protection des personnes, audits de sûreté des sites et des résidences, analyse des risques et sécurité événementielle. Un interlocuteur unique coordonne les conseils et l’accompagnement sur mesure adaptés à vos besoins.",
    "hero_services_prefix": "Nos services comprennent",
    "hero_service_security": "la sécurité physique et la protection rapprochée en Israël",
    "hero_service_international": "le conseil en sûreté à l’international",
    "hero_service_trips": "l’organisation de voyages et d’événements",
    "hero_service_transport": "le transport et la logistique",
    "hero_service_concierge": "la conciergerie VIP",
    "hero_services_suffix": "les vérifications d’antécédents et la due diligence.",
    "scripture_text": "« Car il ordonnera à ses anges de te protéger partout où tu iras. »",
    "scripture_source": "Psaume 91:11",
    "skip_link": "Aller au contenu principal",
    "footer_faq": "Questions fréquentes",
    "footer_email": "Écrivez-nous",
    "hero_sub": "LLISR est une société de conseil et de sécurité basée en Israël, au service des particuliers, des entreprises et des institutions en Israël, en Europe et à l’international.\n\nNotre priorité est la sécurité physique : protection des personnes, audits de sûreté des sites et des résidences, analyse des risques et sécurité événementielle. Un interlocuteur unique coordonne les conseils et l’accompagnement sur mesure adaptés à vos besoins.\n\nNos services comprennent la sécurité physique et la protection rapprochée en Israël, le conseil en sûreté à l’international, l’organisation de voyages et d’événements, le transport et la logistique, la conciergerie VIP, les vérifications d’antécédents et la due diligence.",
    "international_region": "Europe · États-Unis · International",
    "statement_0": "LLISR s’engage à rendre son site accessible conformément aux recommandations WCAG 2.1 niveau AA et aux normes applicables.",
    "statement_1": "Fonctionnalités d’accessibilité",
    "statement_2": "Navigation complète au clavier",
    "statement_3": "Compatibilité avec les lecteurs d’écran (NVDA, JAWS et similaires)",
    "statement_4": "Réglage de la taille du texte",
    "statement_5": "Contraste élevé, inversion des couleurs et niveaux de gris",
    "statement_6": "Surlignage des liens et des titres",
    "statement_7": "Grand curseur",
    "statement_8": "Arrêt des animations",
    "statement_9": "Réglage de l’interligne et de l’espacement des lettres",
    "statement_10": "Option de police lisible",
    "statement_11": "Limitations connues",
    "statement_12": "Certaines parties du contenu peuvent ne pas être entièrement accessibles. Nous poursuivons l’amélioration de l’accessibilité du site.",
    "statement_13": "À propos de l’outil d’accessibilité",
    "statement_14": "L’outil d’accessibilité est un complément et ne remplace pas un développement accessible. Il ne constitue ni une protection juridique ni une certification d’accessibilité.",
    "statement_15": "Nous contacter au sujet de l’accessibilité",
    "statement_16": "Si vous rencontrez un problème d’accessibilité, contactez-nous :",
    "statement_18": "Dernière mise à jour",
    "statement_19": "Dernière mise à jour de cette déclaration : septembre 2026",
    "aria_0": "Navigation principale",
    "aria_1": "Choix de langue",
    "aria_2": "Ouvrir le menu",
    "aria_3": "Navigation mobile",
    "aria_4": "Fermer le menu",
    "aria_5": "Moyens de contact",
    "aria_6": "Appeler",
    "aria_7": "E-mail",
    "aria_8": "Réduire le texte",
    "aria_9": "Agrandir le texte",
    "aria_10": "Fermer"
  },
  "es": {
    "page_title": "Seguridad física y consultoría de seguridad | LLISR",
    "page_description": "LLISR ofrece consultoría de seguridad física, protección personal y análisis de riesgos, con atención personalizada en Israel, Europa y a nivel internacional.",
    "quote_link": "Solicitar presupuesto",
    "nav_services": "Servicios",
    "nav_about": "Nosotros",
    "nav_experience": "Experiencia",
    "nav_contact": "Contacto",
    "nav_cta": "WhatsApp",
    "footer_tagline": "SEGURIDAD · VIAJES · DISCRECIÓN",
    "hero_tag": "Profesionales de seguridad",
    "international_title": "Consultoría de seguridad física en Europa",
    "international_desc": "Consultoría de seguridad para particulares, empresas e instituciones fuera de Israel. Analizamos riesgos para personas y bienes, realizamos auditorías de seguridad de instalaciones y planificamos la protección personal y la seguridad de eventos. Las modalidades y los proveedores locales se acuerdan para cada proyecto en Europa, Estados Unidos y otros destinos.",
    "international_cta": "Ver soluciones internacionales",
    "hero_h1_line1": "Seguridad física.",
    "hero_h1_line2": "Atención personalizada.",
    "hero_cta1": "Solicitar presupuesto",
    "hero_cta2": "Contáctenos",
    "hero_badge1": "Seguridad y organización de viajes",
    "hero_badge2": "Coordinación de principio a fin",
    "hero_badge3": "Profesionales con experiencia",
    "hero_badge4": "Israel y otros destinos",
    "stats_years_label": "Años de experiencia",
    "stats_clients_label": "Clientes VIP atendidos",
    "stats_ops_label": "Proyectos realizados",
    "stats_avail_num": "24/7",
    "stats_avail_label": "Disponibilidad",
    "services_tag": "Nuestros servicios",
    "services_title": "Seguridad, viajes y logística a medida",
    "services_sub": "Seleccione un servicio para conocer más.",
    "service_cta": "Ver servicio",
    "service1_name": "Seguridad física y consultoría",
    "service1_link": "Ver servicios de seguridad en Israel →",
    "service1_desc": "Protección personal y de directivos, seguridad de instalaciones, análisis de riesgos y auditorías de seguridad para particulares, empresas y delegaciones. Cada servicio se adapta a las necesidades, el entorno, las actividades y el presupuesto del cliente.",
    "service2_name": "Planificación de viajes y eventos",
    "service2_tag1": "Asesoramiento y planificación de viajes",
    "service2_tag2": "Visitas guiadas y experiencias",
    "service2_tag3": "Eventos familiares y empresariales",
    "service2_tag4": "Bar mitzvá y celebraciones",
    "service2_tag5": "Actividades y lugares de interés",
    "service2_tag6": "Reservas de restaurantes, hoteles y espacios para eventos",
    "service3_name": "Transporte y logística",
    "service3_desc": "Coordinación de vehículos, chóferes privados, traslados al aeropuerto y logística para particulares, empresas y delegaciones, integrando los requisitos de seguridad cuando sea necesario.",
    "service4_name": "Servicios de concierge y asistencia VIP",
    "service4_desc": "Servicios de concierge, asistencia personal, recepción en el aeropuerto y coordinación de reservas y servicios adaptados a las preferencias del cliente.",
    "about_tag": "Acerca de LLISR",
    "about_title": "Quiénes somos",
    "about_p1": "LLISR es una empresa de consultoría y seguridad con sede en Israel, especializada en seguridad física y atención profesional y personalizada en Israel, Europa y otros destinos.\n\nNuestro equipo combina experiencia en seguridad, fuerzas armadas y fuerzas del orden con un servicio discreto y atento.\n\nAtendemos a empresas, directivos, delegaciones, familias y particulares de Estados Unidos, Europa y otros mercados internacionales.",
    "about_p2": "Nuestros servicios incluyen la planificación, coordinación y gestión de servicios y proyectos, la selección de proveedores adecuados, la comprobación de antecedentes y la diligencia debida, así como el acompañamiento desde la preparación hasta la ejecución. Un único interlocutor coordina los servicios acordados según sus necesidades.",
    "about_badge2": "Con sede en Israel y apoyo internacional",
    "about_badge3": "Equipo multilingüe",
    "about_badge4": "Coordinación integral",
    "audience_tag": "A quién atendemos",
    "audience_title": "Protección para cada cliente",
    "audience1_title": "Instituciones, empresas y particulares",
    "audience1_desc": "Ejecutivos, responsables, empresas y particulares que necesitan servicios profesionales de protección, transporte y logística adaptados a su exposición y sus actividades.",
    "audience2_title": "Empresas y profesionales",
    "audience2_desc": "Delegaciones empresariales, equipos directivos y grupos corporativos que necesitan una coordinación atenta de sus desplazamientos y seguridad.",
    "audience3_title": "Personalidades y VIP",
    "audience3_desc": "Personalidades públicas y clientes privados que requieren protección, asistencia personal y servicios de concierge con discreción y profesionalidad.",
    "audience4_title": "Familias y delegaciones",
    "audience4_desc": "Familias, delegaciones y grupos internacionales que buscan apoyo coordinado en Israel y otros destinos.",
    "audience1_tag1": "Protección de directivos",
    "audience1_tag2": "Transporte seguro según las necesidades",
    "audience1_tag3": "Asesoramiento sobre riesgos",
    "audience2_tag1": "Seguridad corporativa",
    "audience2_tag2": "Apoyo a delegaciones",
    "audience2_tag3": "Recepción VIP en el aeropuerto",
    "audience3_tag1": "Protección personal",
    "audience3_tag2": "Servicios de concierge",
    "audience3_tag3": "Asesoramiento sobre riesgos",
    "audience4_tag1": "Visitas guiadas",
    "audience4_tag2": "Traslados al aeropuerto",
    "audience4_tag3": "Servicios de concierge",
    "experience_tag": "El equipo",
    "experience_title": "Nuestra experiencia",
    "exp_p1": "Nuestro equipo reúne años de experiencia en el sector público, las fuerzas del orden, las fuerzas armadas y la seguridad privada. Aplicamos esa experiencia a la protección de ejecutivos, delegaciones, familias y clientes privados, con la misma atención a la discreción y al servicio.",
    "exp_p2": "Cada solución tiene en cuenta las necesidades, el perfil de riesgo y el programa del cliente. Nuestras relaciones se basan en la comunicación clara, la confianza y la calidad del trabajo realizado.",
    "exp_badge1": "Experiencia en el sector público",
    "exp_badge2": "Más de 20 años de experiencia junto a una nueva generación",
    "exp_badge3": "Proyectos internacionales",
    "faq_tag": "Preguntas frecuentes",
    "faq_title": "Preguntas y respuestas",
    "faq1_q": "¿En qué países trabajan?",
    "faq1_a": "Tenemos nuestra sede en Israel y apoyamos proyectos en distintos países a través de nuestra red profesional. Contáctenos para comprobar la disponibilidad del servicio que necesita en el destino correspondiente.",
    "faq2_q": "¿Quiénes son sus proveedores?",
    "faq2_a": "Nuestros profesionales de seguridad cuentan con formación y experiencia operativa, incluida experiencia en las fuerzas del orden. Los proveedores se seleccionan según las necesidades del proyecto y los requisitos locales.",
    "faq4_q": "¿Cómo adaptan el servicio a cada cliente?",
    "faq4_a": "Empezamos por comprender las necesidades, el programa, las preferencias y el perfil de riesgo del cliente. Después elaboramos un plan personalizado que reúne los servicios necesarios y se adapta a los cambios del proyecto.",
    "faq5_q": "¿Qué ventaja tiene un único punto de contacto?",
    "faq5_a": "Un único interlocutor coordina los servicios acordados: seguridad, transporte, logística, viajes y servicios de concierge. Esto facilita la comunicación, reduce los desajustes entre proveedores y mantiene la continuidad desde la planificación hasta la ejecución.",
    "cta_tag": "Contáctenos",
    "cta_title": "Consulta inicial gratuita",
    "cta_sub": "Cuéntenos qué necesita para definir una solución adecuada.",
    "cta_whatsapp": "Escribir por WhatsApp",
    "cta_or": "o envíe un mensaje",
    "form_name_label": "Su nombre",
    "form_name": "Su nombre",
    "form_email_label": "Correo electrónico",
    "form_email": "Correo electrónico",
    "form_phone_label": "Teléfono",
    "form_phone": "Teléfono",
    "form_message_label": "Mensaje",
    "form_message": "¿Cómo podemos ayudarle?",
    "form_submit": "Enviar mensaje",
    "form_success": "Gracias. Su consulta ha sido enviada. Si no recibe respuesta, escriba a liran@llisr.com.",
    "form_privacy_prefix": "He leído la",
    "form_privacy_suffix": "y acepto el tratamiento de mis datos para responder a mi consulta.",
    "cw_trigger": "Contáctenos",
    "cw_title": "¿Cómo podemos ayudarle?",
    "cw_phone": "Llamar",
    "cw_whatsapp": "WhatsApp",
    "cw_telegram": "Telegram",
    "cw_sms": "SMS",
    "cw_email": "Correo",
    "footer_nav_title": "NAVEGACIÓN",
    "footer_contact_title": "CONTACTO",
    "footer_legal": "© 2026 LLISR. Todos los derechos reservados.",
    "footer_privacy": "Política de privacidad",
    "footer_tos": "Condiciones de servicio",
    "footer_a11y_statement": "Declaración de accesibilidad",
    "a11y_panel_title": "Accesibilidad",
    "a11y_panel_close_label": "Cerrar el menú de accesibilidad",
    "a11y_font_size_title": "Tamaño del texto",
    "a11y_appearance_title": "Apariencia",
    "a11y_links_title": "Enlaces y títulos",
    "a11y_spacing_title": "Espaciado y cursor",
    "a11y_btn_high_contrast": "Alto contraste",
    "a11y_btn_inverted": "Invertir colores",
    "a11y_btn_greyscale": "Escala de grises",
    "a11y_btn_readable_font": "Fuente legible",
    "a11y_btn_highlight_links": "Resaltar enlaces",
    "a11y_btn_highlight_headings": "Resaltar títulos",
    "a11y_btn_line_spacing": "Interlineado",
    "a11y_btn_letter_spacing": "Espaciado entre letras",
    "a11y_btn_large_cursor": "Cursor grande",
    "a11y_btn_no_anim": "Detener animaciones",
    "a11y_reset": "Restablecer todo",
    "a11y_toggle_label": "Abrir el menú de accesibilidad",
    "hero_intro": "LLISR es una empresa de consultoría y seguridad con sede en Israel, al servicio de particulares, empresas e instituciones en Israel, Europa y otros destinos.",
    "hero_focus": "Nuestra prioridad es la seguridad física: protección de personas, auditorías de seguridad de instalaciones y residencias, análisis de riesgos y planificación de seguridad para eventos. Un único interlocutor coordina el asesoramiento profesional y la atención personalizada según sus necesidades.",
    "hero_services_prefix": "Nuestros servicios incluyen",
    "hero_service_security": "seguridad física y protección personal en Israel",
    "hero_service_international": "consultoría internacional de seguridad física",
    "hero_service_trips": "planificación y producción de viajes y eventos",
    "hero_service_transport": "transporte y logística",
    "hero_service_concierge": "servicios de concierge y asistencia VIP",
    "hero_services_suffix": "comprobación de antecedentes y diligencia debida.",
    "scripture_text": "«Porque él ordenará a sus ángeles que te protejan dondequiera que vayas».",
    "scripture_source": "Salmo 91:11",
    "skip_link": "Ir al contenido principal",
    "footer_faq": "Preguntas frecuentes",
    "footer_email": "Escríbanos",
    "hero_sub": "LLISR es una empresa de consultoría y seguridad con sede en Israel, al servicio de particulares, empresas e instituciones en Israel, Europa y otros destinos.\n\nNuestra prioridad es la seguridad física: protección de personas, auditorías de seguridad de instalaciones y residencias, análisis de riesgos y planificación de seguridad para eventos. Un único interlocutor coordina el asesoramiento profesional y la atención personalizada según sus necesidades.\n\nNuestros servicios incluyen seguridad física y protección personal en Israel, consultoría internacional de seguridad física, planificación y producción de viajes y eventos, transporte y logística, servicios de concierge y asistencia VIP, comprobación de antecedentes y diligencia debida.",
    "international_region": "Europa · Estados Unidos · Internacional",
    "statement_0": "LLISR se compromete a facilitar la accesibilidad de su sitio de acuerdo con las pautas WCAG 2.1 nivel AA y las normas aplicables.",
    "statement_1": "Funciones de accesibilidad",
    "statement_2": "Navegación completa con teclado",
    "statement_3": "Compatibilidad con lectores de pantalla (NVDA, JAWS y similares)",
    "statement_4": "Ajuste del tamaño del texto",
    "statement_5": "Alto contraste, colores invertidos y escala de grises",
    "statement_6": "Resaltado de enlaces y títulos",
    "statement_7": "Cursor grande",
    "statement_8": "Pausa de animaciones",
    "statement_9": "Ajuste del interlineado y del espaciado entre letras",
    "statement_10": "Opción de fuente legible",
    "statement_11": "Limitaciones conocidas",
    "statement_12": "Algunas áreas pueden no ser completamente accesibles. Seguimos trabajando para mejorar la accesibilidad del sitio.",
    "statement_13": "Aviso sobre la herramienta de accesibilidad",
    "statement_14": "La herramienta de accesibilidad es complementaria y no sustituye el desarrollo accesible. No ofrece protección jurídica ni certifica una accesibilidad completa.",
    "statement_15": "Contacto sobre accesibilidad",
    "statement_16": "Si encuentra un problema de accesibilidad, contáctenos:",
    "statement_18": "Última actualización",
    "statement_19": "Última actualización de esta declaración: septiembre de 2026",
    "aria_0": "Navegación principal",
    "aria_1": "Selector de idioma",
    "aria_2": "Abrir menú",
    "aria_3": "Navegación móvil",
    "aria_4": "Cerrar menú",
    "aria_5": "Opciones de contacto",
    "aria_6": "Llamar",
    "aria_7": "Correo",
    "aria_8": "Reducir texto",
    "aria_9": "Ampliar texto",
    "aria_10": "Cerrar"
  }
};

/* === i18n === */
function setLang(code) {
  const t = TRANSLATIONS[code];
  if (!t) return;

  const isRTL = code === 'he';
  document.documentElement.dir  = isRTL ? 'rtl' : 'ltr';
  document.documentElement.lang = code;
  if (document.documentElement.dataset.defaultLang) {
    document.title = t.page_title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', t.page_description);
  }

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
  document.querySelectorAll('.lang-en').forEach(el => { el.hidden = isRTL; el.lang = code; });
  document.querySelectorAll('.lang-he').forEach(el => { el.hidden = !isRTL; });

  document.querySelectorAll('[data-lang-target]').forEach(link => {
    const active = link.dataset.langTarget === code;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  if (document.documentElement.dataset.defaultLang) {
    const values = { 'og:title': t.page_title, 'og:description': t.page_description,
      'twitter:title': t.page_title, 'twitter:description': t.page_description };
    Object.entries(values).forEach(([name, value]) => {
      const el = document.querySelector(`meta[property="${name}"], meta[name="${name}"]`);
      if (el) el.content = value;
    });
  }

  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    const active = btn.dataset.langBtn === code;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  try { localStorage.setItem('ll-lang', code); } catch (error) {}
}

function initLangSwitcher() {
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.langBtn));
  });
  document.querySelectorAll('[data-lang-target]').forEach(link => {
    link.addEventListener('click', () => {
      try { localStorage.setItem('ll-lang', link.dataset.langTarget); } catch (error) {}
    });
  });
  let saved;
  try { saved = localStorage.getItem('ll-lang'); } catch (error) {}
  const pageLanguage = document.documentElement.dataset.defaultLang;
  const initial = pageLanguage === 'fr' || pageLanguage === 'es'
    ? pageLanguage : (saved === 'he' ? 'he' : 'en');
  setLang(initial);
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
    drawer.inert = false;
    drawer.setAttribute('aria-hidden', 'false');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus({ preventScroll: true });
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('visible');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    if (drawer.contains(document.activeElement)) hamburger.focus({ preventScroll: true });
    drawer.inert = true;
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
  if (typeof IntersectionObserver === 'undefined') return;
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
  if (prefersReduced || typeof IntersectionObserver === 'undefined') return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up, .fade-left, .fade-right, .fade-scale').forEach(el => {
    // Never hide content already in view, including direct links to a section.
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    observer.observe(el);
    el.classList.add('reveal-pending');
  });
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
    panel.inert = false;
    panel.setAttribute('aria-hidden', 'false');
    panel.classList.add('cw-open');
  }
  function close() {
    trigger.setAttribute('aria-expanded', 'false');
    if (panel.contains(document.activeElement)) trigger.focus({ preventScroll: true });
    panel.inert = true;
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
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const name    = form.querySelector('#f-name').value.trim();
    const email   = form.querySelector('#f-email').value.trim();
    const message = form.querySelector('#f-message').value.trim();

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    const data = new FormData(form);
    data.set('language', document.documentElement.lang || 'en');
    data.set('pageUrl', window.location.href);
    data.set('loadedAt', String(loadedAt));

    try {
      const response = await fetch(endpoint, { method: 'POST', body: data });
      if (!response.ok) throw new Error(`Contact endpoint returned ${response.status}`);
      const result = await response.json();
      if (!result.ok) throw new Error(result.error || 'Contact endpoint rejected the inquiry');
      form.style.display = 'none';
      success.style.display = 'block';
    } catch (error) {
      submitButton.disabled = false;
      window.location.href = `mailto:liran@llisr.com?subject=${encodeURIComponent('LLISR — Website Inquiry')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${form.querySelector('#f-phone').value.trim()}\n\nMessage:\n${message}`)}`;
    }
  });
}

/* === LOADER DISMISS === */
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  // Content is ready at DOMContentLoaded; do not wait for third-party assets.
  loader.remove();
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

/* === INIT ALL === */
function initAudiencePanels() {
  const panels = document.querySelectorAll('.audience-panel');
  if (!panels.length) return;
  panels.forEach(panel => {
    const trigger = panel.querySelector('.panel-collapsed');
    if (!trigger) return;
    trigger.addEventListener('click', () => {
      if (panel.classList.contains('active')) return;
      panels.forEach(p => {
        p.classList.remove('active');
        p.querySelector('.panel-collapsed')?.setAttribute('aria-expanded', 'false');
      });
      panel.classList.add('active');
      trigger.setAttribute('aria-expanded', 'true');
    });
  });
}

function initAll() {
  initLangSwitcher();
  initLoader();
  if (!prefersReduced && typeof Lenis !== 'undefined' && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') initLenis();
  initNav();
  initNavActiveLinks();
  initScrollAnimations();
  if (!prefersReduced) initWorkflowAnimation();
  initSpotlightCards();
  initFaq();
  initForm();
  initSmoothScroll();
  initAudiencePanels();
  initAccessibilityPanel();
  initA11yStatementModal();
  initContactWidget();
}

document.addEventListener('DOMContentLoaded', initAll);
