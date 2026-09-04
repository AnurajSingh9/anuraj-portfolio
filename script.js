document.getElementById("year").textContent = String(new Date().getFullYear());

const topbar = document.querySelector(".topbar");
if (topbar) {
  const onScroll = () => {
    topbar.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

const revealItems = document.querySelectorAll(
  ".about-grid, .skill-block, .project, .detailed-timeline > li, .edu-grid article, .contact-panel"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 }
  );

  for (const item of revealItems) {
    item.classList.add("reveal");
    observer.observe(item);
  }
}
