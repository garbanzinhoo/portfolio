/* Antes de pintar: aplica el tema (claro u oscuro) que el visitante eligió la última vez. */
(function () {
    try {
      var t = localStorage.getItem("aitor-portfolio-theme");
      if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t);
    } catch (e) {}
  })();
