/**
 * Contenido editable del board. Edita SOLO estos arrays para actualizar
 * el portfolio: no toques index.html ni main.js para cambiar texto.
 * Cada campo tiene `es` (español, idioma base) y `en` (inglés).
 */

const DAW_SKILL_GROUPS = [
  {
    module_es: "Sistemas Informáticos",
    module_en: "Computer Systems",
    skills: [
      { name: "Linux / línea de comandos", name_en: "Linux / command line", level: "done" },
      { name: "Redes básicas", name_en: "Basic networking", level: "done" },
    ],
  },
  {
    module_es: "Bases de Datos",
    module_en: "Databases",
    skills: [
      { name: "SQL", name_en: "SQL", level: "done" },
      { name: "Modelado ER", name_en: "ER modelling", level: "doing" },
    ],
  },
  {
    module_es: "Lenguajes de Marcas",
    module_en: "Markup Languages",
    skills: [
      { name: "HTML5", name_en: "HTML5", level: "done" },
      { name: "CSS3", name_en: "CSS3", level: "done" },
    ],
  },
  {
    module_es: "Programación",
    module_en: "Programming",
    skills: [
      { name: "JavaScript", name_en: "JavaScript", level: "done" },
      { name: "Lógica de programación", name_en: "Programming logic", level: "done" },
      { name: "POO — fundamentos", name_en: "OOP — fundamentals", level: "doing" },
    ],
  },
  {
    module_es: "Entornos de Desarrollo",
    module_en: "Development Environments",
    skills: [
      { name: "Git / GitHub", name_en: "Git / GitHub", level: "doing" },
      { name: "Netlify (despliegue)", name_en: "Netlify (deploys)", level: "done" },
    ],
  },
];

// ASIX (Administració de Sistemes Informàtics en Xarxa) — ciclo ya cursado y
// aprobado, no en curso como el DAW. Todo a nivel "done" porque el ciclo
// completo está superado, no una asignatura suelta a medias.
const ASIX_SKILL_GROUPS = [
  {
    module_es: "ASIX · Sistemas Operativos",
    module_en: "ASIX · Operating Systems",
    skills: [
      { name: "Windows Server", name_en: "Windows Server", level: "done" },
      { name: "Administración Linux", name_en: "Linux administration", level: "done" },
    ],
  },
  {
    module_es: "ASIX · Redes",
    module_en: "ASIX · Networking",
    skills: [
      { name: "Routing y switching", name_en: "Routing & switching", level: "done" },
      { name: "DNS / DHCP", name_en: "DNS / DHCP", level: "done" },
      { name: "Firewalls", name_en: "Firewalls", level: "done" },
    ],
  },
  {
    module_es: "ASIX · Virtualización",
    module_en: "ASIX · Virtualization",
    skills: [
      { name: "VMware / Proxmox", name_en: "VMware / Proxmox", level: "done" },
    ],
  },
  {
    module_es: "ASIX · Seguridad y Alta Disponibilidad",
    module_en: "ASIX · Security & High Availability",
    skills: [
      { name: "Backups y clustering", name_en: "Backups & clustering", level: "done" },
      { name: "VPN y hardening", name_en: "VPN & hardening", level: "done" },
    ],
  },
];

const LEVEL_LABEL = {
  done: { es: "Intermedio", en: "Intermediate" },
  doing: { es: "Básico", en: "Basic" },
  backlog: { es: "Aprendiendo", en: "Learning" },
};

const PROJECT_TICKETS = {
  done: [
    {
      id: "AITOR-10",
      title_es: "aizlo",
      title_en: "aizlo",
      desc_es: "Mi propio escaparate: un marketplace de sitios de ejemplo por sector, con demos propias y los proyectos reales de clientes embebidos como \"puestos\". Construido íntegramente con IA (vibe coding).",
      desc_en: "My own showcase: a marketplace-style display of example sites by sector, bundling real client projects in as \"stalls\". Built entirely with AI (vibe coding).",
      tags: ["HTML", "CSS", "JavaScript", "Netlify", "IA · Vibe coding"],
      demoUrl: "https://aizlo.netlify.app/",
      codeUrl: null,
      featured: true,
    },
    {
      id: "AITOR-11",
      title_es: "Chunkiflunki",
      title_en: "Chunkiflunki",
      desc_es: "Hub de minijuegos de fiesta pensado para jugar en grupo desde el móvil. Construido íntegramente con IA (vibe coding).",
      desc_en: "A hub of party mini-games, built to play in a group straight from the phone. Built entirely with AI (vibe coding).",
      tags: ["HTML", "CSS", "JavaScript", "IA · Vibe coding"],
      demoUrl: "https://chunkiflunki.netlify.app/",
      codeUrl: null,
      featured: false,
    },
  ],
  doing: [
    {
      id: "AITOR-20",
      title_es: "Módulo de Bases de Datos y Entornos de Desarrollo",
      title_en: "Databases & Development Environments module",
      desc_es: "Cursando estas asignaturas de DAW ahora mismo — SQL avanzado, modelado ER y flujo de trabajo con Git.",
      desc_en: "Currently taking these DAW subjects — advanced SQL, ER modelling, and a proper Git workflow.",
      tags: ["SQL", "Git"],
      demoUrl: null,
      codeUrl: null,
      featured: false,
    },
  ],
  backlog: [
    {
      id: "AITOR-30",
      title_es: "Backend propio para aizlo",
      title_en: "A real backend for aizlo",
      desc_es: "Sustituir el contenido estático por una API propia — próximo objetivo cuando llegue a los módulos de servidor.",
      desc_en: "Replacing the static content with my own API — next goal once I reach the server-side modules.",
      tags: ["Node", "API"],
      demoUrl: null,
      codeUrl: null,
      featured: false,
    },
    {
      id: "AITOR-31",
      title_es: "Primeras prácticas de DAW",
      title_en: "First DAW internship",
      desc_es: "El siguiente ticket real: encontrar dónde aplicar todo esto en un equipo.",
      desc_en: "The actual next ticket: finding a team to apply all of this in.",
      tags: [],
      demoUrl: null,
      codeUrl: null,
      featured: false,
    },
  ],
};
