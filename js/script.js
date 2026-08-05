document.documentElement.classList.remove("no-js");
document.body.classList.remove("no-js");

/* ---------------------------------------------------------------
   Header scroll state
--------------------------------------------------------------- */
const header = document.getElementById("site-header");
const onScroll = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* ---------------------------------------------------------------
   Keep --header-h in sync with the fixed header's real height, so
   the hero's cover image sits flush under it with no gap/overlap.
   Measured at load (always unscrolled, i.e. the taller padding
   state) and on resize.
--------------------------------------------------------------- */
const syncHeaderHeight = () => {
  if (!header) return;
  document.documentElement.style.setProperty("--header-h", `${header.offsetHeight}px`);
};
syncHeaderHeight();
window.addEventListener("resize", syncHeaderHeight);

/* ---------------------------------------------------------------
   Mobile nav toggle
--------------------------------------------------------------- */
const navToggle = document.getElementById("nav-toggle");
const navMobile = document.getElementById("nav-mobile");
if (navToggle && navMobile) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMobile.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });
  navMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMobile.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

/* ---------------------------------------------------------------
   Project filters
--------------------------------------------------------------- */
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const filter = btn.dataset.filter;
    projectCards.forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;
      card.hidden = !match;
    });
  });
});

/* ---------------------------------------------------------------
   Contact form -> mailto fallback (no backend on a static site)
--------------------------------------------------------------- */
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = encodeURIComponent(document.getElementById("name").value);
    const email = document.getElementById("email").value;
    const message = encodeURIComponent(document.getElementById("message").value);
    const subject = encodeURIComponent(`Contact portfolio de ${decodeURIComponent(name)}`);
    const body = encodeURIComponent(`De : ${decodeURIComponent(name)} (${email})\n\n${decodeURIComponent(message)}`);
    window.location.href = `mailto:chloe.schakowskoy@gmail.com?subject=${subject}&body=${body}`;
  });
}

/* ---------------------------------------------------------------
   Scroll reveal via GSAP (graceful no-op if GSAP absent)
--------------------------------------------------------------- */
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-reveal]").forEach((el) => {
    if (reduceMotion) {
      el.classList.add("is-visible");
      return;
    }
    ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      onEnter: () => el.classList.add("is-visible"),
      once: true,
    });
  });
} else {
  document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
}
