// ===== Translation dictionary =====
// One object per language. Each key matches a data-i18n attribute in index.html.
const translations = {
  en: {
    title: "Duaa Almomani | Portfolio",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navHobbies: "Hobbies",
    navContact: "Contact",
    langButton: "العربية",
    darkMode: "Dark mode",
    lightMode: "Light mode",
    aboutName: "Duaa Almomani",
    aboutRole: "Cybersecurity Analyst",
    aboutText: "Cybersecurity graduate (BSc, Hashemite University) with hands-on training in penetration testing, Windows Server hardening, and Active Directory administration. I completed a 200-hour Offensive Security track at SMT Group and I study CCNA and Security+ domains on my own. I'm looking for an entry-level cybersecurity role, and I'm also learning web development at 42 Amman.",
    aboutButton: "Get in touch",
    contactLocation: "Amman, Jordan",
    skillsTitle: "Skills",
    skillPentest: "Penetration Testing",
    skillVuln: "Vulnerability Assessment",
    skillRdp: "RDP Hardening",
    skillAudit: "Audit Policies",
    projectsTitle: "Project Showcase",
    viewGithub: "View on GitHub →",
    p0Tag: "Project 00",
    p0Title: "Linux & Git Workspace",
    p0Text: "Set up my working environment, practiced the terminal, and pushed my first exercises to GitHub.",
    p1Tag: "Project 01",
    p1Title: "HTML Structure",
    p1Text: "Built pages with semantic HTML: headings, lists, links, images, and forms.",
    p2Tag: "Project 02",
    p2Title: "CSS Styling",
    p2Text: "Styled layouts with the box model, Flexbox, colors, and typography.",
    p3Tag: "Project 03",
    p3Title: "JavaScript Interactivity",
    p3Text: "Added behavior with variables, functions, events, and DOM manipulation.",
    hobbiesTitle: "Hobbies",
    hobby1: "Badminton",
    hobby2: "Capture The Flag challenges",
    hobby3: "Handmade crafts",
    hobby4: "Learning new tech",
    hobby5: "Coffee & good music",
    contactTitle: "Contact",
    labelName: "Name",
    labelEmail: "Email",
    labelMessage: "Message",
    sendButton: "Send message",
    thanksStart: "Thank you, ",
    thanksEnd: ". Your message was received.",
    footerText: "© 2026 Duaa Almomani. All rights reserved."
  },

  ar: {
    title: "دعاء المومني | معرض الأعمال",
    navAbout: "نبذة عني",
    navSkills: "المهارات",
    navProjects: "المشاريع",
    navHobbies: "الهوايات",
    navContact: "التواصل",
    langButton: "English",
    darkMode: "الوضع الداكن",
    lightMode: "الوضع الفاتح",
    aboutName: "دعاء المومني",
    aboutRole: "محللة أمن سيبراني",
    aboutText: "خريجة أمن سيبراني (بكالوريوس من الجامعة الهاشمية) ولدي تدريب عملي في اختبار الاختراق وتأمين Windows Server وإدارة Active Directory. أنهيت مسار Offensive Security بمدة 200 ساعة في SMT Group، وأدرس مجالات CCNA وSecurity+ بشكل ذاتي. أبحث عن وظيفة مبتدئة في الأمن السيبراني، كما أتعلّم تطوير الويب في 42 عمّان.",
    aboutButton: "تواصل معي",
    contactLocation: "عمّان، الأردن",
    skillsTitle: "المهارات",
    skillPentest: "اختبار الاختراق",
    skillVuln: "تقييم الثغرات",
    skillRdp: "تأمين RDP",
    skillAudit: "سياسات التدقيق",
    projectsTitle: "معرض المشاريع",
    viewGithub: "عرض على GitHub ←",
    p0Tag: "المشروع 00",
    p0Title: "بيئة عمل Linux وGit",
    p0Text: "جهّزت بيئة عملي، وتدرّبت على الـ terminal، ورفعت أول تمارين لي على GitHub.",
    p1Tag: "المشروع 01",
    p1Title: "بنية HTML",
    p1Text: "بنيت صفحات بـ HTML دلالي: عناوين وقوائم وروابط وصور ونماذج.",
    p2Tag: "المشروع 02",
    p2Title: "تنسيق CSS",
    p2Text: "نسّقت التخطيطات باستخدام الـ box model وFlexbox والألوان والخطوط.",
    p3Tag: "المشروع 03",
    p3Title: "التفاعل بـ JavaScript",
    p3Text: "أضفت سلوكاً للصفحات باستخدام المتغيرات والدوال والأحداث والتعامل مع الـ DOM.",
    hobbiesTitle: "الهوايات",
    hobby1: "تنس الريشة",
    hobby2: "تحديات Capture The Flag",
    hobby3: "الأعمال اليدوية",
    hobby4: "تعلّم تقنيات جديدة",
    hobby5: "القهوة والموسيقى الجميلة",
    contactTitle: "التواصل",
    labelName: "الاسم",
    labelEmail: "البريد الإلكتروني",
    labelMessage: "الرسالة",
    sendButton: "إرسال الرسالة",
    thanksStart: "شكراً ",
    thanksEnd: "، تم استلام رسالتك.",
    footerText: "© 2026 دعاء المومني. جميع الحقوق محفوظة."
  }
};

// ===== Elements and state =====
const root = document.documentElement; // the <html> element
const themeButton = document.getElementById("theme-toggle");
const langButton = document.getElementById("lang-toggle");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

let currentLang = "en";
let submittedName = ""; // remembered so the thank-you message can be re-translated

// ===== Theme switcher =====
// The theme button text depends on two things: the theme and the language
function updateThemeButton() {
  const theme = root.getAttribute("data-theme");
  const text = translations[currentLang];
  themeButton.textContent = theme === "dark" ? text.lightMode : text.darkMode;
}

function toggleTheme() {
  const currentTheme = root.getAttribute("data-theme");
  root.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
  updateThemeButton();
}

themeButton.addEventListener("click", toggleTheme);

// ===== Contact form =====
function renderStatus() {
  if (submittedName !== "") {
    const text = translations[currentLang];
    formStatus.textContent = text.thanksStart + submittedName + text.thanksEnd;
  }
}

function handleSubmit(event) {
  event.preventDefault(); // stop the page from reloading
  submittedName = document.getElementById("name").value;
  renderStatus();
  contactForm.reset();
}

contactForm.addEventListener("submit", handleSubmit);

// ===== Language switcher =====
// Writes the chosen language into the page
function applyLanguage(lang) {
  // 1) Direction and language of the whole document
  root.setAttribute("lang", lang);
  root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  // 2) Replace the text of every element that has a data-i18n attribute
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(function (element) {
    const text = translations[lang][element.dataset.i18n];
    if (text !== undefined) {
      element.textContent = text;
    }
  });

  // 3) Texts that are written by JavaScript itself
  updateThemeButton();
  renderStatus();
}

// Callback: runs every time the language button is clicked
function toggleLanguage() {
  currentLang = currentLang === "en" ? "ar" : "en";
  applyLanguage(currentLang);
}

// User click -> event fires -> toggleLanguage runs
langButton.addEventListener("click", toggleLanguage);

// Start in English
applyLanguage(currentLang);
