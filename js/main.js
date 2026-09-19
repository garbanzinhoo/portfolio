(function () {
  "use strict";

  var STORAGE_KEY = "aitor-portfolio-lang";
  var THEME_KEY = "aitor-portfolio-theme";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function isEnglish() {
    return document.documentElement.lang === "en";
  }

  /* ---------- Render: labels board (stack) ---------- */

  function renderLabelGroups(groups, root) {
    if (!root) return;

    groups.forEach(function (group) {
      var groupEl = document.createElement("div");
      groupEl.className = "label-group";

      var heading = document.createElement("h3");
      heading.className = "label-group__title";
      heading.textContent = group.module_es;
      heading.setAttribute("data-en", group.module_en);
      groupEl.appendChild(heading);

      var list = document.createElement("div");
      list.className = "label-group__pills";

      group.skills.forEach(function (skill) {
        var pill = document.createElement("span");
        pill.className = "pill pill--" + skill.level;

        var dot = document.createElement("span");
        dot.className = "dot dot--" + skill.level;
        dot.setAttribute("aria-hidden", "true");
        pill.appendChild(dot);

        var label = document.createElement("span");
        label.textContent = skill.name;
        label.setAttribute("data-en", skill.name_en);
        pill.appendChild(label);

        var level = document.createElement("span");
        level.className = "pill__level";
        level.textContent = LEVEL_LABEL[skill.level].es;
        level.setAttribute("data-en", LEVEL_LABEL[skill.level].en);
        pill.appendChild(level);

        list.appendChild(pill);
      });

      groupEl.appendChild(list);
      root.appendChild(groupEl);
    });
  }

  function renderLabels() {
    renderLabelGroups(DAW_SKILL_GROUPS, document.getElementById("labelsBoard"));
    renderLabelGroups(ASIX_SKILL_GROUPS, document.getElementById("labelsBoardAsix"));
  }

  function renderProductionTech() {
    var root = document.getElementById("productionTech");
    if (!root) return;
    PRODUCTION_TECH.forEach(function (name) {
      var tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = name;
      root.appendChild(tag);
    });
  }

  /* ---------- Render: project tickets (board) ---------- */

  function buildTicketCard(ticket) {
    var card = document.createElement("article");
    card.className = "card" + (ticket.featured ? " card--featured" : "") + (ticket.image ? " card--case-study" : "");

    if (ticket.image) {
      var preview = document.createElement("img");
      preview.className = "card__preview";
      preview.src = ticket.image;
      preview.loading = "lazy";
      preview.width = 640;
      preview.height = 400;
      preview.alt = ticket.imageAlt_es || "";
      if (ticket.imageAlt_en) preview.setAttribute("data-en-alt", ticket.imageAlt_en);
      card.appendChild(preview);
    }

    var body = document.createElement("div");
    body.className = "card__body";

    var head = document.createElement("div");
    head.className = "card__head";

    var id = document.createElement("span");
    id.className = "card__id";
    id.textContent = ticket.id;
    head.appendChild(id);

    if (ticket.demoUrl) {
      var live = document.createElement("span");
      live.className = "card__live";
      var liveDot = document.createElement("span");
      liveDot.className = "dot dot--done";
      liveDot.setAttribute("aria-hidden", "true");
      live.appendChild(liveDot);
      var liveText = document.createElement("span");
      liveText.textContent = "live";
      live.appendChild(liveText);
      head.appendChild(live);
    }

    body.appendChild(head);

    var title = document.createElement("h4");
    title.className = "card__title";
    title.textContent = ticket.title_es;
    title.setAttribute("data-en", ticket.title_en);
    body.appendChild(title);

    if (ticket.problem_es) {
      [
        ["Objetivo", "Goal", ticket.problem_es, ticket.problem_en],
        ["Qué construí", "What I built", ticket.built_es, ticket.built_en],
        ["Reto técnico", "Technical challenge", ticket.challenge_es, ticket.challenge_en],
      ].forEach(function (row) {
        var field = document.createElement("div");
        field.className = "card__meta-field";

        var label = document.createElement("span");
        label.className = "card__meta-label";
        label.textContent = row[0];
        label.setAttribute("data-en", row[1]);
        field.appendChild(label);

        var value = document.createElement("p");
        value.className = "card__desc";
        value.textContent = row[2];
        value.setAttribute("data-en", row[3]);
        field.appendChild(value);

        body.appendChild(field);
      });
    } else if (ticket.desc_es) {
      var desc = document.createElement("p");
      desc.className = "card__desc";
      desc.textContent = ticket.desc_es;
      desc.setAttribute("data-en", ticket.desc_en);
      body.appendChild(desc);
    }

    if (ticket.tags && ticket.tags.length) {
      var tags = document.createElement("div");
      tags.className = "card__tags";
      ticket.tags.forEach(function (t) {
        var tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = t;
        tags.appendChild(tag);
      });
      body.appendChild(tags);
    }

    if (ticket.demoUrl || ticket.codeUrl) {
      var links = document.createElement("div");
      links.className = "card__links";
      if (ticket.demoUrl) {
        var demo = document.createElement("a");
        demo.href = ticket.demoUrl;
        demo.target = "_blank";
        demo.rel = "noopener";
        demo.className = "card__link";
        demo.textContent = "Ver demo →";
        demo.setAttribute("data-en", "View demo →");
        links.appendChild(demo);
      }
      if (ticket.codeUrl) {
        var code = document.createElement("a");
        code.href = ticket.codeUrl;
        code.target = "_blank";
        code.rel = "noopener";
        code.className = "card__link";
        code.textContent = "Ver código →";
        code.setAttribute("data-en", "View code →");
        links.appendChild(code);
      }
      body.appendChild(links);
    }

    card.appendChild(body);
    return card;
  }

  function renderProjects() {
    var cols = { backlog: "colBacklog", doing: "colDoing", done: "colDone" };
    Object.keys(cols).forEach(function (status) {
      var root = document.getElementById(cols[status]);
      if (!root) return;
      (PROJECT_TICKETS[status] || []).forEach(function (ticket) {
        root.appendChild(buildTicketCard(ticket));
      });
    });
  }

  /* ---------- Language toggle ---------- */

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-en]").forEach(function (el) {
      if (!el.dataset.es) {
        el.dataset.es = el.textContent;
      }
      el.textContent = lang === "en" ? el.getAttribute("data-en") : el.dataset.es;
    });

    document.querySelectorAll("[data-en-alt]").forEach(function (el) {
      if (!el.dataset.esAlt) el.dataset.esAlt = el.alt;
      el.alt = lang === "en" ? el.getAttribute("data-en-alt") : el.dataset.esAlt;
    });

    document.querySelectorAll(".lang-switch__opt").forEach(function (opt) {
      opt.setAttribute("aria-current", opt.getAttribute("data-lang") === lang ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage unavailable — ignore, language just won't persist */
    }
  }

  function initLanguage() {
    var stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* ignore */
    }
    if (stored === "en") setLanguage("en");

    var btn = document.getElementById("langSwitch");
    if (btn) {
      btn.addEventListener("click", function () {
        var current = document.documentElement.lang === "en" ? "en" : "es";
        setLanguage(current === "en" ? "es" : "en");
      });
    }
  }

  /* ---------- Scroll-spy on tab bar ---------- */

  function initScrollSpy() {
    var tabs = Array.prototype.slice.call(document.querySelectorAll(".tabbar__tab"));
    var sections = tabs
      .map(function (tab) {
        var id = tab.getAttribute("href").slice(1);
        return document.getElementById(id);
      })
      .filter(Boolean);

    if (!("IntersectionObserver" in window) || !sections.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          tabs.forEach(function (tab) {
            tab.classList.toggle("is-active", tab.getAttribute("href") === "#" + entry.target.id);
          });
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach(function (s) {
      observer.observe(s);
    });
  }

  /* ---------- Reveal on scroll (one authored moment) ---------- */

  function initReveal() {
    var targets = document.querySelectorAll(".card, .ticket, .label-group");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach(function (t) {
        t.classList.add("is-revealed");
      });
      return;
    }

    targets.forEach(function (t) {
      t.classList.add("reveal");
    });

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach(function (t) {
      observer.observe(t);
    });
  }

  /* ---------- Contact form ---------- */

  function initForm() {
    var form = document.getElementById("contactForm");
    var status = document.getElementById("formStatus");
    if (!form || !status) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (form.access_key.value.indexOf("PEGA_AQUI") === 0) {
        status.textContent = isEnglish()
          ? "Contact form isn't wired up yet — email me directly below."
          : "El formulario todavía no está activado — escríbeme directamente abajo.";
        return;
      }

      var submitBtn = form.querySelector("button[type=submit]");
      submitBtn.disabled = true;
      status.textContent = isEnglish() ? "Sending…" : "Enviando…";

      fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          if (data.success) {
            status.textContent = isEnglish() ? "Ticket created — thank you!" : "¡Ticket creado, gracias!";
            form.reset();
          } else {
            throw new Error(data.message || "error");
          }
        })
        .catch(function () {
          status.textContent = isEnglish()
            ? "Something failed — email me directly instead."
            : "Algo ha fallado — escríbeme directamente por email.";
        })
        .finally(function () {
          submitBtn.disabled = false;
        });
    });
  }

  /* ---------- GitHub activity (live, no backend) ---------- */

  function relativeLabel(dateStr) {
    var days = Math.max(0, Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000));
    if (days === 0) return { es: "hoy", en: "today" };
    if (days === 1) return { es: "hace 1 día", en: "1 day ago" };
    if (days < 30) return { es: "hace " + days + " días", en: days + " days ago" };
    if (days < 365) {
      var months = Math.floor(days / 30);
      return {
        es: "hace " + months + (months === 1 ? " mes" : " meses"),
        en: months + (months === 1 ? " month ago" : " months ago"),
      };
    }
    var years = Math.floor(days / 365);
    return {
      es: "hace " + years + (years === 1 ? " año" : " años"),
      en: years + (years === 1 ? " year ago" : " years ago"),
    };
  }

  function applyCurrentLanguage(root) {
    if (!isEnglish()) return;
    root.querySelectorAll("[data-en]").forEach(function (el) {
      el.dataset.es = el.textContent;
      el.textContent = el.getAttribute("data-en");
    });
  }

  function initGithubActivity() {
    var root = document.getElementById("githubActivity");
    if (!root) return;

    fetch("https://api.github.com/users/garbanzinhoo/repos?sort=pushed&direction=desc&per_page=8")
      .then(function (res) {
        if (!res.ok) throw new Error("github api error");
        return res.json();
      })
      .then(function (repos) {
        repos = repos.filter(function (r) { return !r.fork; }).slice(0, 4);
        if (!repos.length) throw new Error("no public repos");

        var list = document.createElement("ul");
        list.className = "timeline";

        repos.forEach(function (repo) {
          var item = document.createElement("li");
          item.className = "timeline__item";

          var dot = document.createElement("span");
          dot.className = "timeline__dot timeline__dot--done";
          dot.setAttribute("aria-hidden", "true");
          item.appendChild(dot);

          var body = document.createElement("div");
          body.className = "timeline__body";

          var top = document.createElement("div");
          top.className = "timeline__top";

          var role = document.createElement("a");
          role.className = "timeline__role";
          role.href = repo.html_url;
          role.target = "_blank";
          role.rel = "noopener";
          role.textContent = repo.name;
          top.appendChild(role);

          var rel = relativeLabel(repo.pushed_at);
          var date = document.createElement("span");
          date.className = "timeline__date";
          date.textContent = rel.es;
          date.setAttribute("data-en", rel.en);
          top.appendChild(date);

          body.appendChild(top);

          var descEs = repo.description
            ? repo.description
            : repo.language
            ? "Escrito en " + repo.language + "."
            : "Sin descripción todavía.";
          var descEn = repo.description
            ? repo.description
            : repo.language
            ? "Written in " + repo.language + "."
            : "No description yet.";
          var desc = document.createElement("p");
          desc.className = "timeline__desc";
          desc.textContent = descEs;
          if (descEs !== descEn) desc.setAttribute("data-en", descEn);
          body.appendChild(desc);

          item.appendChild(body);
          list.appendChild(item);
        });

        root.innerHTML = "";
        root.appendChild(list);
        applyCurrentLanguage(root);
      })
      .catch(function () {
        root.innerHTML = "";
        var fallback = document.createElement("p");
        fallback.className = "ticket__note";
        fallback.textContent = "No se ha podido cargar la actividad ahora mismo — mira el perfil completo abajo.";
        fallback.setAttribute("data-en", "Couldn't load live activity right now — see the full profile below.");
        root.appendChild(fallback);
        applyCurrentLanguage(root);
      });
  }

  /* ---------- Theme toggle (manual override of prefers-color-scheme) ---------- */

  function systemPrefersDark() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function currentTheme() {
    var attr = document.documentElement.getAttribute("data-theme");
    return attr === "light" || attr === "dark" ? attr : systemPrefersDark() ? "dark" : "light";
  }

  function updateThemeToggleIcon() {
    var btn = document.getElementById("themeToggle");
    if (btn) btn.classList.toggle("is-dark", currentTheme() === "dark");
  }

  function initTheme() {
    updateThemeToggleIcon();

    var btn = document.getElementById("themeToggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var next = currentTheme() === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        try {
          localStorage.setItem(THEME_KEY, next);
        } catch (e) {
          /* ignore — theme just won't persist */
        }
        updateThemeToggleIcon();
      });
    }

    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
        if (!document.documentElement.getAttribute("data-theme")) updateThemeToggleIcon();
      });
    }
  }

  /* ---------- Copy-to-clipboard buttons ---------- */

  function initCopyButtons() {
    document.querySelectorAll(".copy-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var value = btn.getAttribute("data-copy");
        if (!value || !navigator.clipboard) return;

        navigator.clipboard
          .writeText(value)
          .then(function () {
            var original = btn.textContent;
            btn.textContent = isEnglish() ? btn.getAttribute("data-en-copied") || "Copied!" : "¡Copiado!";
            btn.classList.add("is-copied");
            setTimeout(function () {
              btn.textContent = original;
              btn.classList.remove("is-copied");
            }, 1600);
          })
          .catch(function () {
            /* clipboard unavailable — the mailto/tel link right next to it still works */
          });
      });
    });
  }

  /* ---------- Console greeting (easter egg for anyone who opens devtools) ---------- */

  function printConsoleGreeting() {
    var headline = isEnglish()
      ? "Hey — you opened devtools. That means you're exactly the kind of person this board is for."
      : "Eh, has abierto la consola — justo el tipo de persona para la que está pensado este board.";
    var contact = isEnglish()
      ? "Aitor Zoilo Burgos · zoiloburgosaitor@gmail.com · github.com/garbanzinhoo"
      : "Aitor Zoilo Burgos · zoiloburgosaitor@gmail.com · github.com/garbanzinhoo";

    console.log("%c" + headline, "font-family: monospace; font-size: 13px; color: #7C88FF; font-weight: 600;");
    console.log("%c" + contact, "font-family: monospace; font-size: 12px; color: #8B8C97;");
  }

  /* ---------- Boot ---------- */

  document.addEventListener("DOMContentLoaded", function () {
    renderLabels();
    renderProductionTech();
    renderProjects();
    initLanguage();
    initScrollSpy();
    initReveal();
    initForm();
    initGithubActivity();
    initTheme();
    initCopyButtons();
    printConsoleGreeting();
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });
})();
