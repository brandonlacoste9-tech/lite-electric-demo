const I18N = {
en: {
  "nav.services": "Services", "nav.why": "Why us", "nav.visit": "Visit us", "nav.contact": "Contact",
  "nav.call": "(757) 427-9284",
  "hero.kicker": "Virginia Beach, VA · Residential electrical · Local & reliable",
  "hero.title": "Bright ideas,<br>done safely.",
  "hero.sub": "Lite Electric is Virginia Beach's local residential electrician — home additions, panel upgrades, lighting and troubleshooting, done to code.",
  "hero.cta1": "Call (757) 427-9284", "hero.cta2": "See services",
  "trust.t1t": "Residential pro", "trust.t1d": "Homes, additions & remodels",
  "trust.t2t": "Licensed work", "trust.t2d": "Code-compliant, permitted jobs",
  "trust.t3t": "Mon – Fri, 9 AM – 6 PM", "trust.t3d": "Open weekdays",
  "stats.hoursNum": "Mon – Fri", "stats.hours": "9 AM – 6 PM",
  "stats.makesNum": "Residential", "stats.makes": "homes & additions",
  "stats.diagNum": "Code", "stats.diag": "compliant work",
  "stats.quoteNum": "Upfront", "stats.quote": "clear pricing",
  "services.kicker": "What we do", "services.title": "Residential electrical, done right",
  "services.s1t": "Residential wiring & repairs", "services.s1d": "Outlets, switches, circuits and repairs throughout your home.",
  "services.s2t": "Home additions wiring", "services.s2d": "Power and lighting for additions, renovations and remodels.",
  "services.s3t": "Panel & breaker upgrades", "services.s3d": "Safe, code-compliant panel upgrades and breaker replacements.",
  "services.s4t": "Lighting & ceiling fans", "services.s4d": "Interior and exterior lighting, ceiling fans and fixtures installed cleanly.",
  "services.s5t": "Troubleshooting & diagnostics", "services.s5d": "Flickering lights, dead outlets, mystery breakers — found and fixed.",
  "services.s6t": "Emergency electrical service", "services.s6d": "Urgent electrical problems handled fast — call (757) 427-9284.",
  "why.kicker": "Why choose us", "why.title": "Your neighborhood electrician",
  "why.intro": "Lite Electric is a local Virginia Beach electrical contractor focused on residential work — from home additions to panel upgrades to everyday repairs. Straightforward, code-compliant work at fair prices.",
  "why.l1t": "Residential focus", "why.l1d": "Homes, additions and remodels are what we do best.",
  "why.l2t": "Code-compliant", "why.l2d": "Permitted, inspected work you can trust.",
  "why.l3t": "Upfront pricing", "why.l3d": "Clear pricing confirmed before work begins.",
  "why.l4t": "Local & responsive", "why.l4d": "Based in Virginia Beach — we pick up the phone.",
  "gallery.kicker": "On the job", "gallery.title": "Clean work, every visit",
  "gallery.c1": "Outlets & switches done right",
  "gallery.c2": "Panels upgraded safely",
  "gallery.c3": "Outdoor lighting installed",
  "visit.kicker": "Come say hi", "visit.title": "Visit us in Virginia Beach",
  "visit.addr": "2004 Dober Ct", "visit.cta": "Get directions to our shop on Google Maps",
  "faq.kicker": "Good to know", "faq.title": "Frequently asked questions",
  "faq.q1": "Do you wire home additions?",
  "faq.a1": "Yes — wiring for home additions and remodels is a core service. Call (757) 427-9284 to discuss your project.",
  "faq.q2": "Can you upgrade my electrical panel?",
  "faq.a2": "Yes — we do safe, code-compliant panel and breaker upgrades for older homes.",
  "faq.q3": "What are your hours?",
  "faq.a3": "Monday to Friday, 9:00 AM to 6:00 PM. We're closed on weekends.",
  "faq.q4": "How do I book a visit?",
  "faq.a4": "Just call us at (757) 427-9284 — we'll find a time that works for you.",
  "contact.kicker": "Get in touch", "contact.title": "Book your visit",
  "contact.addr": "Address", "contact.phone": "Phone", "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Fri: 9:00 AM – 6:00 PM<br>Sat – Sun: closed",
  "contact.cta": "Call now to book",
  "nav.gallery": "Gallery", "nav.faq": "FAQ",
  "footer.tag": "Residential electrician · Virginia Beach, Virginia"
}};

function applyLang() {
  document.documentElement.lang = "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N.en[key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.title = "Lite Electric — Electrician in Virginia Beach, VA | Residential Electrical";
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang();
