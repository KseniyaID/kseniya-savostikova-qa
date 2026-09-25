const translations = {
  ru: {
    brand: "Ксения Савостикова",
    status: "Открыта к предложениям · СПб · гибрид",
    themeDark: "Тёмная",
    themeLight: "Светлая",
    heroTitle: "Middle QA, который держит релизы на нескольких продуктах сразу",
    heroLead:
      "Ручное тестирование сложных веб-продуктов — LMS, конструкторы, API. Санкт-Петербург · гибрид / удалёнка / офис",
    btnTelegram: "Telegram",
    btnEmail: "E-mail",
    btnResume: "Резюме PDF",
    aboutTitle: "Кто я",
    aboutText:
      "QA Engineer с опытом продуктовой и заказной разработки. Умею быть единственной точкой контроля качества, вести до 3–5 проектов параллельно и не ронять двухнедельный релизный ритм.",
    aboutAside:
      "Вне работы — музыка: играю на двух инструментах и пою. Иногда — рыбалка. В резюме это деталь характера; в работе важнее внимательность и спокойный темп под дедлайн.",
    focusTitle: "Фокус",
    focus1: "Полный цикл manual QA: требования → тест-дизайн → релиз",
    focus2: "Функционал, регресс, интеграция, API (Postman)",
    focus3: "Тест-кейсы, чек-листы, дефекты до закрытия",
    focus4: "Сложные веб-сценарии и межмодульные риски",
    openTitle: "Сейчас открыта к",
    open1: "Роли Middle QA / QA Engineer (manual)",
    open2: "Продукт, LMS, EdTech, веб-платформы",
    open3: "Формат: гибрид в приоритете",
    open4: "Рост в сторону автоматизации — учусь быстро",
    expTitle: "Опыт в двух штрихах",
    exp1:
      "2023–2026. Единственный QA на ключевых продуктах. Основной — платформа электронных курсов (LMS) и конструктор. Релизы раз в 2 недели + поддержка на нескольких направлениях.",
    exp2Title: "Алее Софтвер · Junior QA",
    exp2:
      "2022–2023. Enterprise-тестирование для крупных заказчиков: Норникель, Вертолёты России, РФС, Красцветмет, ТМК.",
    stackTitle: "Стек",
    stackText:
      "Postman · API · SQL · PostgreSQL · MS SQL · JSON · XML · Git · GitHub · Chrome DevTools · HTML · CSS · Figma · YouTrack · TestIT · Kiwi TCMS · Portainer · Windows / VM-стенды",
    stackProducts:
      "В работе сталкивалась со стеком продуктов: Vue 2.7 / Vuex / Vue Router, UI Kit, PHP, Laravel; участвовала в проверках в контуре CI/CD.",
    stackLang:
      "Языки: русский — родной; английский — B1 (документация, UI, баг-репорты).",
    contactTitle: "Связаться",
    contactNote: "Санкт-Петербург · ответы обычно в тот же день",
  },
  en: {
    brand: "Kseniya Savostikova",
    status: "Open to work · St. Petersburg · hybrid",
    themeDark: "Dark",
    themeLight: "Light",
    heroTitle: "Middle QA who keeps releases steady across multiple products",
    heroLead:
      "Manual testing for complex web products — LMS, builders, API. St. Petersburg · hybrid / remote / office",
    btnTelegram: "Telegram",
    btnEmail: "E-mail",
    btnResume: "Resume PDF",
    aboutTitle: "About",
    aboutText:
      "QA Engineer with product and enterprise experience. Comfortable as the single quality checkpoint, owning 3–5 projects in parallel without missing a bi-weekly release cadence.",
    aboutAside:
      "Outside work — music: I play two instruments and sing. Sometimes fishing. Nice character detail; at work what matters is attention and a calm pace under deadline.",
    focusTitle: "Focus",
    focus1: "Full manual QA cycle: requirements → test design → release",
    focus2: "Functional, regression, integration, API (Postman)",
    focus3: "Test cases, checklists, defects through closure",
    focus4: "Complex web flows and cross-module risks",
    openTitle: "Looking for",
    open1: "Middle QA / QA Engineer (manual) roles",
    open2: "Product, LMS, EdTech, web platforms",
    open3: "Preferred format: hybrid",
    open4: "Eager to grow into automation — I learn fast",
    expTitle: "Experience in brief",
    exp1:
      "2023–2026. Sole QA on key products. Main one — e-learning platform (LMS) and course builder. Bi-weekly releases plus support across several streams.",
    exp2Title: "Alee Software · Junior QA",
    exp2:
      "2022–2023. Enterprise testing for major clients: Nornickel, Russian Helicopters, RFU, Krastsvetmet, TMK.",
    stackTitle: "Stack",
    stackText:
      "Postman · API · SQL · PostgreSQL · MS SQL · JSON · XML · Git · GitHub · Chrome DevTools · HTML · CSS · Figma · YouTrack · TestIT · Kiwi TCMS · Portainer · Windows / VM environments",
    stackProducts:
      "Worked with product stacks including Vue 2.7 / Vuex / Vue Router, UI Kit, PHP, Laravel; took part in checks within the CI/CD flow.",
    stackLang:
      "Languages: Russian — native; English — B1 (docs, UI, bug reports).",
    contactTitle: "Contact",
    contactNote: "St. Petersburg · usually reply the same day",
  },
};

const root = document.documentElement;
const langToggle = document.getElementById("langToggle");
const themeToggle = document.getElementById("themeToggle");

function applyLang(lang) {
  const dict = translations[lang] || translations.ru;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  // theme button label depends on current theme + language
  updateThemeLabel(lang);

  root.lang = lang;
  langToggle.textContent = lang === "ru" ? "EN" : "RU";
  safeStorageSet("vizitka-lang", lang);

  document.title =
    lang === "ru"
      ? "Ксения Савостикова — QA Engineer"
      : "Kseniya Savostikova — QA Engineer";

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute(
      "content",
      lang === "ru"
        ? "Ксения Савостикова — Middle QA Engineer"
        : "Kseniya Savostikova — Middle QA Engineer"
    );
  }
}

function updateThemeLabel(lang) {
  const theme = root.getAttribute("data-theme") || "light";
  const dict = translations[lang] || translations.ru;
  const label = themeToggle.querySelector("[data-i18n]");
  if (!label) return;
  label.textContent = theme === "light" ? dict.themeDark : dict.themeLight;
}

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  safeStorageSet("vizitka-theme", theme);
  const lang = safeStorageGet("vizitka-lang") || "ru";
  updateThemeLabel(lang);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "dark" ? "#121820" : "#0f766e");
}

function safeStorageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* Safari private mode — игнорируем */
  }
}

// Init preferences
const savedLang = safeStorageGet("vizitka-lang") || "ru";
const savedTheme =
  safeStorageGet("vizitka-theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

applyTheme(savedTheme);
applyLang(savedLang);

const resumeLink = document.getElementById("resumeLink");
if (resumeLink) {
  resumeLink.addEventListener("click", (event) => {
    const url = new URL(resumeLink.getAttribute("href"), window.location.href).href;
    const mobile =
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      window.matchMedia("(pointer: coarse)").matches;
    if (!mobile) return;
    // На телефонах download и новая вкладка часто глушат клик.
    // Переход в этой же вкладке открывает системный просмотр PDF.
    event.preventDefault();
    window.location.assign(url);
  });
}

const emailLink = document.getElementById("emailLink");
if (emailLink) {
  emailLink.addEventListener("click", (event) => {
    const mobile =
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      window.matchMedia("(pointer: coarse)").matches;
    if (!mobile) return;
    // На телефоне почтовое приложение есть всегда, веб-Gmail только мешает.
    event.preventDefault();
    window.location.assign("mailto:kseniyahart@gmail.com");
  });
}

langToggle.addEventListener("click", () => {
  const next = (safeStorageGet("vizitka-lang") || "ru") === "ru" ? "en" : "ru";
  applyLang(next);
});

themeToggle.addEventListener("click", () => {
  const next =
    (root.getAttribute("data-theme") || "light") === "light" ? "dark" : "light";
  applyTheme(next);
});

// Scroll reveal — hero всегда виден сразу (iOS Safari)
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealItems.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px 0px 0px" }
  );
  revealItems.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 0.05, 0.25)}s`;
    io.observe(el);
  });
} else {
  revealItems.forEach((el) => el.classList.add("is-visible"));
}
