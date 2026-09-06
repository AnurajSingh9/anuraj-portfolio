(() => {
  const site = window.SITE;
  if (!site) return;

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const el = (tag, className, html) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  };

  const proofGrid = document.getElementById("proof-grid");
  if (proofGrid) {
    for (const item of site.proof) {
      const card = el("article", "proof-item");
      card.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span>`;
      proofGrid.appendChild(card);
    }
  }

  const skillsGrid = document.getElementById("skills-grid");
  if (skillsGrid) {
    for (const group of site.skills) {
      const card = el("article", "skill-card");
      const title = el("h3", null, group.title);
      const pills = el("div", "pill-wrap");
      for (const item of group.items) {
        pills.appendChild(el("span", "pill", item));
      }
      card.append(title, pills);
      skillsGrid.appendChild(card);
    }
  }

  const projectGrid = document.getElementById("project-grid");
  if (projectGrid) {
    for (const project of site.projects) {
      const card = el("article", "project-card");
      const highlights = project.highlights
        .map((h) => `<span class="highlight">${h}</span>`)
        .join("");
      const tech = project.tech.map((t) => `<span class="pill">${t}</span>`).join("");
      const secondary = project.secondaryUrl
        ? `<a href="${project.secondaryUrl}" target="_blank" rel="noopener noreferrer">${project.secondaryLabel || "View"} ↗</a>`
        : "";
      card.innerHTML = `
        <div class="project-top">
          <div>
            <p class="project-label">${project.label}</p>
            <h3>${project.name}</h3>
          </div>
        </div>
        <p>${project.description}</p>
        <div class="highlight-row">${highlights}</div>
        <div class="pill-wrap">${tech}</div>
        <div class="project-footer">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          ${secondary}
        </div>
      `;
      projectGrid.appendChild(card);
    }
  }

  const experienceList = document.getElementById("experience-list");
  if (experienceList) {
    for (const job of site.experience) {
      const card = el("article", "exp-card");
      const bullets = job.bullets.map((b) => `<li>${b}</li>`).join("");
      card.innerHTML = `
        <div class="exp-meta">
          <h3>${job.company}</h3>
          <p class="dates">${job.dates} · ${job.location}</p>
        </div>
        <div class="exp-body">
          <p class="title">${job.title}</p>
          <ul>${bullets}</ul>
        </div>
      `;
      experienceList.appendChild(card);
    }
  }

  const archFlow = document.getElementById("arch-flow");
  if (archFlow) {
    for (const step of site.architecture) {
      const item = el("li", "flow-step");
      item.innerHTML = `<strong>${step.stage}</strong><span>${step.detail}</span>`;
      archFlow.appendChild(item);
    }
  }

  const specGrid = document.getElementById("spec-grid");
  if (specGrid) {
    for (const item of site.specialization) {
      const card = el("article", "spec-card");
      card.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
      specGrid.appendChild(card);
    }
  }

  const eduList = document.getElementById("edu-list");
  if (eduList) {
    for (const edu of site.education) {
      const li = el("li");
      li.innerHTML = `<strong>${edu.title}</strong><span>${edu.school} · ${edu.dates}</span>`;
      eduList.appendChild(li);
    }
  }

  const certBlock = document.getElementById("cert-block");
  if (certBlock && site.certification) {
    certBlock.innerHTML = `<strong>${site.certification.title}</strong>${site.certification.detail}`;
  }

  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const sectionIds = ["top", "projects", "experience", "skills", "about", "contact"];
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const navLinks = document.querySelectorAll(".site-nav a");

  const setActive = () => {
    const y = window.scrollY + 120;
    let current = "top";
    for (const section of sections) {
      if (section.offsetTop <= y) current = section.id;
    }
    navLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      link.classList.toggle("is-active", href === `#${current}`);
    });
  };
  window.addEventListener("scroll", setActive, { passive: true });
  setActive();

  const revealItems = document.querySelectorAll(
    ".proof-item, .skill-card, .project-card, .exp-card, .flow-step, .spec-card, .os-card, .about-grid, .contact-panel"
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
    revealItems.forEach((item) => {
      item.classList.add("reveal");
      observer.observe(item);
    });
  }
})();
