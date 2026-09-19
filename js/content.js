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

// Tecnologías ya probadas en proyectos reales en producción — se muestran
// primero y destacadas en el stack, separadas de lo que aún estoy aprendiendo.
const PRODUCTION_TECH = ["HTML5", "CSS3", "JavaScript", "Git", "Netlify"];

const PROJECT_TICKETS = {
  done: [
    {
      id: "AITOR-10",
      title_es: "aizlo",
      title_en: "aizlo",
      image: "assets/preview-aizlo.png",
      imageAlt_es: "Captura de la portada de aizlo, con el directorio de sectores",
      imageAlt_en: "Screenshot of aizlo's homepage, with the sector directory",
      problem_es: "Mis primeros proyectos de cliente (gimnasio, gestoría, clínica...) vivían dispersos en URLs sueltas, sin nada que los conectara ni demostrara que eran obra de la misma persona.",
      problem_en: "My first client projects (a gym, an accounting firm, a clinic...) lived scattered across separate URLs, with nothing connecting them or showing they were built by the same person.",
      built_es: "Ideé, dirigí, desplegué y refiné yo mismo todo el marketplace, con IA como herramienta de desarrollo, no como autopiloto: la estructura por sectores, el sistema de \"puestos\" y la lógica que embebe cada sitio de cliente son decisiones mías.",
      built_en: "I conceived, directed, deployed and refined the whole marketplace myself, with AI as a development tool, not an autopilot: the sector structure, the \"stall\" system, and the logic that embeds each client site are my own decisions.",
      challenge_es: "El reto fue embeber 11 webs de cliente completas, cada una con su propio CSS y JS, como iframes dentro de un mismo marketplace, sin que ninguna rompiera el layout ni interfiriera con las demás.",
      challenge_en: "The challenge was embedding 11 complete client sites, each with its own CSS and JS, as iframes inside one marketplace, without any of them breaking the layout or interfering with each other.",
      tags: ["HTML5", "CSS3", "JavaScript", "Netlify", "IA · herramienta de desarrollo"],
      demoUrl: "https://aizlo.netlify.app/",
      codeUrl: null,
      featured: true,
    },
    {
      id: "AITOR-11",
      title_es: "Chunkiflunki",
      title_en: "Chunkiflunki",
      image: "assets/preview-chunkiflunki.png",
      imageAlt_es: "Captura del hub de minijuegos de Chunkiflunki",
      imageAlt_en: "Screenshot of the Chunkiflunki mini-games hub",
      problem_es: "En una fiesta, decidir a qué jugar y explicar las reglas quita tiempo de jugar. Quería algo que un grupo abriera desde el móvil y empezara a jugar en segundos.",
      problem_en: "At a party, deciding what to play and explaining the rules eats into actual playing time. I wanted something a group could open on a phone and start playing within seconds.",
      built_es: "Ideé, dirigí, desplegué y refiné yo mismo el hub, con IA como herramienta de desarrollo: cada minijuego es su propia página, pero comparten un script común (shared.js) para mantener una experiencia consistente entre todos.",
      built_en: "I conceived, directed, deployed and refined the hub myself, with AI as a development tool: each mini-game is its own page, but they share one common script (shared.js) to keep a consistent experience across all of them.",
      challenge_es: "Mantener el estado y la interfaz coherentes entre varios minijuegos independientes que comparten lógica común, sin usar ningún framework.",
      challenge_en: "Keeping state and UI consistent across several independent mini-games that share common logic, without using any framework.",
      tags: ["HTML5", "CSS3", "JavaScript", "IA · herramienta de desarrollo"],
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
