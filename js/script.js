let menuOpen = false;
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const bodyEl = document.querySelector("body");
const htmlEl = document.querySelector("html");
btnNavEl.addEventListener("click", function () {
  menuOpen = true;
  headerEl.classList.toggle("nav-open");
  htmlEl.classList.toggle("no-scroll");
});

window.addEventListener("keydown", function (e) {
  if (menuOpen && e.key === "Escape") {
    menuOpen = false;
    headerEl.classList.remove("nav-open");
  }
});
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (
      (href !== "#" && href.startsWith("#")) ||
      link.classList.contains("main-nav-link-logo")
    ) {
      if (menuOpen) {
        menuOpen = false;
        headerEl.classList.remove("nav-open");
        htmlEl.classList.remove("no-scroll");
      }
      const sectionEl = document.querySelector(href);
      const top =
        sectionEl.getBoundingClientRect().top +
        window.pageYOffset -
        (href === "#cta" ? 100 : 0);

      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});

document.addEventListener("scroll", function () {
  if (window.scrollY > 80) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
  }
});
