/* =============================================================
   main.js — lógica de la página (vanilla JS, sin dependencias)
   Responsabilidades:
     1. Menú de navegación en móvil
     2. Resaltado del enlace de la sección activa
     3. Animaciones de aparición al hacer scroll (IntersectionObserver)
     4. Render del stack (array `skills`)
     5. Render de las tarjetas de proyectos (array `projects`)
     6. Formulario de contacto por mailto (sin backend)
     7. Año dinámico en el footer
   Nota: el smooth scroll se hace con CSS (scroll-behavior: smooth).
   ============================================================= */

(function () {
  "use strict";

  /* Endpoint de Web3Forms y contacto de reserva si algo falla.
     El access_key va en el <input hidden name="access_key"> del formulario. */
  const FORM_ENDPOINT = "https://api.web3forms.com/submit";
  const FALLBACK_EMAIL = "zoiloburgosaitor@gmail.com";

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    setupNavToggle();
    setupActiveLinkOnScroll();
    setupRevealOnScroll();
    renderSkills();
    renderProjects();
    setupContactForm();
    setFooterYear();
  }

  /* ---------- 1. Menú móvil ---------- */
  function setupNavToggle() {
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute(
        "aria-label",
        open ? "Cerrar menú de navegación" : "Abrir menú de navegación"
      );
    });

    // Cerrar al pulsar un enlace (útil en móvil)
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- 2. Enlace activo según sección visible ---------- */
  function setupActiveLinkOnScroll() {
    const links = Array.from(document.querySelectorAll(".nav-menu a"));
    const sections = links
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const byId = {};
    links.forEach((a) => (byId[a.getAttribute("href").slice(1)] = a));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((a) => a.classList.remove("is-active"));
            const active = byId[entry.target.id];
            if (active) active.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
  }

  /* ---------- 3. Reveal al hacer scroll ---------- */
  function setupRevealOnScroll() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    // Sin soporte o con "reduce motion": mostrar todo directamente
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((el) => observer.observe(el));
  }

  /* ---------- 4. Render del stack ---------- */
  function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    if (!grid || typeof skills === "undefined" || !Array.isArray(skills)) return;

    const frag = document.createDocumentFragment();

    skills.forEach((skill) => {
      const li = document.createElement("li");
      li.className = "skill-card reveal";

      if (skill.icon) {
        const icon = document.createElement("div");
        icon.className = "skill-icon";
        icon.setAttribute("aria-hidden", "true");
        icon.textContent = skill.icon;
        li.appendChild(icon);
      }

      const name = document.createElement("span");
      name.className = "skill-name";
      name.textContent = skill.name;
      li.appendChild(name);

      if (skill.level) {
        const level = document.createElement("span");
        level.className = "skill-level";
        level.textContent = skill.level;
        li.appendChild(level);
      }

      frag.appendChild(li);
    });

    grid.appendChild(frag);
    // Los .reveal recién creados no estaban cuando se montó el observer:
    // como el stack suele estar sobre el fold en escritorio, los mostramos.
    revealNewItems(grid);
  }

  /* ---------- 5. Render de proyectos ---------- */
  function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;

    if (typeof projects === "undefined" || !Array.isArray(projects) || !projects.length) {
      grid.innerHTML =
        '<p class="section-lead">Aún no hay proyectos que mostrar. Edita <code>js/projects.js</code>.</p>';
      return;
    }

    const frag = document.createDocumentFragment();

    projects.forEach((project) => {
      frag.appendChild(buildProjectCard(project));
    });

    grid.appendChild(frag);
    revealNewItems(grid);
  }

  function buildProjectCard(project) {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    if (project.featured) card.classList.add("is-featured");

    /* Cabecera: título + etiqueta "destacado" */
    const head = document.createElement("div");
    head.className = "project-head";

    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = project.title || "Proyecto sin título";
    head.appendChild(title);

    if (project.featured) {
      const tag = document.createElement("span");
      tag.className = "project-featured-tag";
      tag.textContent = "Destacado";
      head.appendChild(tag);
    }
    card.appendChild(head);

    /* Descripción */
    const desc = document.createElement("p");
    desc.className = "project-desc";
    desc.textContent = project.description || "";
    card.appendChild(desc);

    /* Tags de tecnología */
    if (Array.isArray(project.tech) && project.tech.length) {
      const tags = document.createElement("ul");
      tags.className = "project-tags";
      project.tech.forEach((t) => {
        const li = document.createElement("li");
        li.className = "project-tag";
        li.textContent = t;
        tags.appendChild(li);
      });
      card.appendChild(tags);
    }

    /* Acciones: "Ver código" siempre que haya URL; "Ver demo" solo si hay demoUrl */
    const actions = document.createElement("div");
    actions.className = "project-actions";

    if (project.codeUrl) {
      actions.appendChild(
        buildLinkButton(project.codeUrl, "Ver código", "btn-ghost btn-sm")
      );
    }

    if (isValidUrl(project.demoUrl)) {
      actions.appendChild(
        buildLinkButton(project.demoUrl, "Ver demo en vivo ↗", "btn-primary btn-sm")
      );
    }

    if (actions.children.length) card.appendChild(actions);

    return card;
  }

  function buildLinkButton(href, label, extraClasses) {
    const a = document.createElement("a");
    a.className = "btn " + extraClasses;
    a.href = href;
    a.textContent = label;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    return a;
  }

  function isValidUrl(value) {
    if (typeof value !== "string" || !value.trim()) return false;
    try {
      const u = new URL(value);
      return u.protocol === "http:" || u.protocol === "https:";
    } catch (_) {
      return false;
    }
  }

  /* Muestra los .reveal de un contenedor si ya están en viewport o si no
     hay IntersectionObserver / se prefiere menos movimiento. */
  function revealNewItems(container) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = container.querySelectorAll(".reveal:not(.is-visible)");

    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => observer.observe(el));
  }

  /* ---------- 6. Formulario de contacto (Web3Forms, sin backend propio) ----------
     Valida en cliente y envía por AJAX a la API de Web3Forms, que reenvía el
     mensaje al correo asociado al access_key. Funciona en localhost y en
     producción. Sin JS, el <form> hace un POST normal al mismo endpoint. */
  function setupContactForm() {
    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");
    if (!form) return;

    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.elements["name"].value.trim();
      const email = form.elements["email"].value.trim();
      const message = form.elements["message"].value.trim();
      const botcheck = form.elements["botcheck"] ? form.elements["botcheck"].checked : false;

      if (botcheck) return; // bot: ignorar en silencio

      if (!name || !email || !message) {
        showFeedback(feedback, "Rellena todos los campos.", true);
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showFeedback(feedback, "El email no parece válido.", true);
        return;
      }

      const accessKey = form.elements["access_key"]
        ? form.elements["access_key"].value.trim()
        : "";
      if (!accessKey || accessKey === "PEGA_AQUI_TU_ACCESS_KEY") {
        showFeedback(
          feedback,
          "Formulario sin configurar. Escríbeme a " + FALLBACK_EMAIL + ".",
          true
        );
        return;
      }

      if (submitBtn) submitBtn.disabled = true;
      showFeedback(feedback, "Enviando…", false);

      // Web3Forms acepta JSON. Object.fromEntries recoge todos los name= del form.
      const payload = Object.fromEntries(new FormData(form).entries());

      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then(function (res) {
          return res.json().catch(function () {
            return { success: res.ok };
          });
        })
        .then(function (data) {
          if (data && data.success) {
            form.reset();
            showFeedback(
              feedback,
              "¡Mensaje enviado! Te responderé lo antes posible.",
              false
            );
          } else {
            showFeedback(
              feedback,
              "No se pudo enviar. Escríbeme a " + FALLBACK_EMAIL + ".",
              true
            );
          }
        })
        .catch(function () {
          showFeedback(
            feedback,
            "No se pudo enviar. Escríbeme a " + FALLBACK_EMAIL + ".",
            true
          );
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

  function showFeedback(el, text, isError) {
    if (!el) return;
    el.textContent = text;
    el.classList.toggle("is-error", Boolean(isError));
  }

  /* ---------- 7. Año del footer ---------- */
  function setFooterYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }
})();

