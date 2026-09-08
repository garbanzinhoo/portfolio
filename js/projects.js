/* =============================================================
   DATOS EDITABLES — este es el único archivo que necesitas tocar
   para actualizar tus proyectos y tu stack.
   No hay build: se carga con <script src> y expone `projects` y
   `skills` como variables globales que usa js/main.js.
   ============================================================= */

/* -------------------------------------------------------------
   PROYECTOS
   Cada objeto es una tarjeta. Campos:
     - title       (string)  Nombre del proyecto.
     - description (string)  1–2 frases.
     - tech        (string[]) Se pintan como badges.
     - codeUrl     (string)  Enlace al repositorio. Usa "" o null si no hay repo público.
     - demoUrl     (string|null)  URL de la web desplegada.
                    Si es null / "" NO se muestra el botón de demo.
     - featured    (boolean) true = tarjeta resaltada.
   ------------------------------------------------------------- */
const projects = [
  {
    title: "Chunkiflunki",
    description:
      "Web app de minijuegos para partidas con amigos: ruleta de retos, Touchdown, Impostor, Perudo y Hombre Lobo. Interfaz oscura y pensada para móvil.",
    // TODO: ajusta las tecnologías reales que usaste
    tech: ["HTML", "CSS", "JavaScript"],
    codeUrl: "", // TODO: añade la URL del repo si es público (https://github.com/garbanzinhoo/...)
    demoUrl: "https://chunkiflunki.netlify.app/",
    featured: true,
  },
  {
    title: "Gestoría Grima Aulet",
    description:
      "Web corporativa para una gestoría fiscal y laboral de Tordera (Barcelona): servicios, equipo, opiniones de clientes, horario y contacto.",
    // TODO: ajusta las tecnologías reales que usaste
    tech: ["HTML", "CSS", "JavaScript", "Responsive"],
    codeUrl: "", // TODO
    demoUrl: "https://gestoriagrima.netlify.app/",
    featured: false,
  },
  {
    title: "Audicon Security",
    description:
      "Landing corporativa para una consultora de protección de datos (RGPD / LOPD). Explica servicios, sectores y garantías para empresas y autónomos.",
    // TODO: ajusta las tecnologías reales que usaste
    tech: ["HTML", "CSS", "JavaScript", "Responsive"],
    codeUrl: "", // TODO
    demoUrl: "https://audicon.netlify.app/",
    featured: false,
  },
  {
    title: "Bugaderia Eslamatex",
    description:
      "Web de una lavandería industrial para hostelería (en catalán): servicio, proceso de trabajo paso a paso, sectores atendidos y reseñas.",
    // TODO: ajusta las tecnologías reales que usaste
    tech: ["HTML", "CSS", "JavaScript", "Responsive"],
    codeUrl: "", // TODO
    demoUrl: "https://bugaderiaeslamatex.netlify.app/",
    featured: false,
  },
];

/* -------------------------------------------------------------
   STACK / SKILLS
   Campos:
     - name  (string)  Nombre de la tecnología.
     - icon  (string)  Emoji o carácter. Placeholder visual — cámbialo
                        por un <img> a un SVG en assets/icons/ si prefieres
                        (ver README). Déjalo como "" para no mostrar icono.
     - level (string)  Texto libre: "Aprendiendo", "Básico", "Intermedio"...
   ------------------------------------------------------------- */
const skills = [
  // TODO: deja solo las que realmente conozcas y ajusta el nivel
  { name: "HTML5", icon: "🌐", level: "Intermedio" },
  { name: "CSS3", icon: "🎨", level: "Intermedio" },
  { name: "JavaScript", icon: "⚡", level: "Intermedio" },
  { name: "Git", icon: "🔧", level: "Básico" },
  { name: "PHP", icon: "🐘", level: "Aprendiendo" },
  { name: "MySQL", icon: "🗄️", level: "Aprendiendo" },
  { name: "Python", icon: "🐍", level: "Básico" },
  { name: "Node.js", icon: "🟢", level: "Aprendiendo" },
  { name: "Figma", icon: "✏️", level: "Básico" },
  { name: "Netlify", icon: "🚀", level: "Básico" },
];

