document.getElementById("year").textContent = String(new Date().getFullYear());

const navLinks = document.querySelectorAll("nav a");
const sections = ["top", "work", "experience", "about", "contact"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

const setActive = () => {
  const y = window.scrollY + 120;
  let current = "top";
  for (const section of sections) {
    if (section.offsetTop <= y) current = section.id;
  }
  for (const link of navLinks) {
    const href = link.getAttribute("href") || "";
    link.classList.toggle("active", href === `#${current}`);
  }
};

window.addEventListener("scroll", setActive, { passive: true });
setActive();

const revealItems = document.querySelectorAll(
  ".stack-item, .project-card, .exp-card, .stat-card, .about-grid, .contact-panel"
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
