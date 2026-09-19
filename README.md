# Portfolio — Aitor Zoilo Burgos

Sitio estático (HTML + CSS + JavaScript vanilla). **Sin frameworks, sin build.**
Dirección visual: un "board de sprint" — tu perfil, tu stack y tus proyectos
viven como tickets moviéndose por columnas reales (Backlog / En curso /
Hecho·Desplegado). Ver `.impeccable/surfaces/index-html.md` para el porqué.

## Estructura

```
nuevo portfolio/
├── index.html          # Estructura completa (topbar + tabs + 4 secciones)
├── gracias.html         # Página de fallback si el formulario se envía sin JS
├── 404.html              # Página de error con la misma identidad (Netlify la sirve sola)
├── css/
│   ├── styles.css       # Todo el sistema visual. Tokens en :root (arriba del archivo)
│   └── print.css         # Solo se carga al imprimir (media="print")
├── js/
│   ├── content.js       # DATOS: skills y proyectos. Edita SOLO esto para tu contenido
│   └── main.js           # Lógica: idioma ES/EN, scroll-spy, reveal, render, formulario
├── assets/
│   ├── favicon.svg
│   ├── cv-aitor-zoilo-burgos.pdf
│   └── og-image.png
├── robots.txt
├── sitemap.xml
├── netlify.toml
└── PRODUCT.md            # Contexto de producto (quién, para quién, por qué)
```

## Cómo editar tu contenido

| Qué | Dónde |
|-----|-------|
| Nombre, rol, pitch del hero | `index.html` → sección `#inicio` |
| Texto de "Sobre mí" | `index.html` → sección `#sobre-mi` (campo `Descripción`) |
| Stack DAW y niveles honestos | `js/content.js` → array `DAW_SKILL_GROUPS` |
| Stack ASIX y niveles honestos | `js/content.js` → array `ASIX_SKILL_GROUPS` |
| Proyectos y tickets de backlog/en curso | `js/content.js` → objeto `PROJECT_TICKETS` |
| Email / LinkedIn / GitHub | `index.html` → sección `#contacto` (bloque `watchers`) |
| Activar el formulario (Access Key) | `index.html` → `name="access_key"` |
| Colores, tipografías, tokens | `css/styles.css` → bloque `:root` (y su variante oscura debajo) |
| CV descargable | `assets/cv-aitor-zoilo-burgos.pdf` — sustitúyelo cuando actualices el CV, el enlace del topbar ya apunta ahí |
| Dominio para Open Graph y datos estructurados | `index.html` → busca `PEGA_AQUI_TU_DOMINIO` (5 apariciones: 4 de Open Graph + 1 del JSON-LD) y sustitúyelo por tu URL real una vez desplegado |

### Proyectos (`content.js` → `PROJECT_TICKETS`)

Cada ticket va en la columna `backlog`, `doing` o `done`:

```js
{
  id: "AITOR-12",
  title_es: "Nombre", title_en: "Name",
  desc_es: "1–2 frases.", desc_en: "1-2 sentences.",
  tags: ["HTML", "CSS"],
  demoUrl: "https://proyecto.netlify.app", // null si no hay demo navegable
  codeUrl: null,                            // URL del repo si es público
  featured: false                            // true = tarjeta destacada
}
```

El botón "Ver demo" solo aparece si `demoUrl` tiene una URL real; igual para
"Ver código" con `codeUrl`. La columna `done` es la única con permiso para
llevar el badge "live".

### Stack (`content.js` → `DAW_SKILL_GROUPS` / `ASIX_SKILL_GROUPS`)

Cada skill tiene un `level`: `"done"` (Intermedio), `"doing"` (Básico) o
`"backlog"` (Aprendiendo). Son los mismos tres estados que las columnas de
proyectos — la paleta de color es la misma en todo el sitio a propósito.

DAW y ASIX se muestran en dos bloques separados en la sección `#stack`
(`labelsBoard` / `labelsBoardAsix` en `index.html`) porque uno está en curso
y el otro es un ciclo ya cursado y aprobado — mezclarlos sin distinción
sería menos honesto sobre el estado real de cada uno.

### Idioma (ES/EN)

El español es el idioma base: escrito directamente como contenido de cada
elemento. El inglés vive en el atributo `data-en` de ese mismo elemento.
`main.js` alterna entre ambos y recuerda la elección en `localStorage`.

```html
<p data-en="English version here">Versión en español aquí</p>
```

## Probar en local

```bash
python -m http.server 5173
```

Abre `http://localhost:5173`. También puedes abrir `index.html` directamente
en el navegador — no depende de un servidor para funcionar.

## Formulario de contacto (Web3Forms) — cómo activarlo

1. Entra en **https://web3forms.com**, escribe tu correo
   (`zoiloburgosaitor@gmail.com`) y pulsa **Create Access Key**.
2. Te llega un Access Key (un UUID) a ese correo. Cópialo.
3. Abre `index.html`, busca `PEGA_AQUI_TU_ACCESS_KEY` y sustitúyelo por tu
   clave real.
4. (Opcional) Rellena el `<input hidden name="redirect">` con la URL completa
   de `gracias.html` una vez desplegado, para el fallback sin JavaScript.

Plan gratuito: 250 envíos/mes. Anti-spam: honeypot `botcheck` + filtro propio
de Web3Forms.

## Detalles añadidos

- **Selector de tema** (topbar, icono sol/luna junto a ES/EN): fuerza claro u
  oscuro sin depender del sistema, y lo recuerda en `localStorage`. Un script
  inline en el `<head>` lo aplica antes de pintar para que no haya parpadeo.
- **Botón "Copiar"** junto al email en Contacto: usa
  `navigator.clipboard`, con el `mailto:` de al lado como respaldo si el
  navegador lo bloquea.
- **Saludo en la consola** (`js/main.js` → `printConsoleGreeting`): cualquiera
  que abra devtools ve tu nombre y contacto — pensado para el público técnico
  que sí mira ahí.
- **"Actualizado el ..."** en la barra de estado inferior: es texto fijo, no
  automático — actualízalo a mano en `index.html` cada vez que cambies
  contenido real, si no pierde sentido.

## SEO básico (robots.txt / sitemap.xml)

`robots.txt` permite todo e indica `sitemap.xml`, que solo lista la home
(las páginas `gracias.html` y `404.html` llevan `noindex` y no deben estar
en el sitemap). Sustituye `PEGA_AQUI_TU_DOMINIO` en ambos ficheros por tu URL
real una vez desplegado — igual que en `index.html`.

## Impresión

`css/print.css` fuerza la paleta clara al imprimir (da igual el tema que
tengas activo en pantalla), oculta lo que no sirve en papel (topbar, tabs,
formulario, footer) y añade la URL real detrás de cada enlace externo. Se
carga solo con `media="print"`, así que no afecta a nada en pantalla.

## Página 404

`404.html` reutiliza el mismo componente de ticket, con el estado "No
encontrado". Netlify la sirve automáticamente para cualquier ruta que no
exista — no necesita configuración en `netlify.toml`. Lleva `noindex` para
que Google no la indexe.

## Desplegar en Netlify

1. https://app.netlify.com/drop → arrastra esta carpeta completa. Listo.
2. O conéctala a un repo de GitHub desde Netlify (`Add new site → Import an
   existing project`), sin build command, publish directory `.`.

## Accesibilidad

HTML semántico, enlace "saltar al contenido", foco visible con
`:focus-visible`, `prefers-reduced-motion` respetado (desactiva el
reveal-on-scroll), y navegación por teclado en tabs, board y formulario.

## Actividad de GitHub (en vivo)

La sección "Board de proyectos" carga tus últimos repos públicos en directo
desde la API de GitHub (`js/main.js` → `initGithubActivity`), sin backend ni
clave. Límites a tener en cuenta:

- La API pública sin autenticación permite 60 peticiones/hora por IP. Para
  el tráfico normal de un portfolio personal es de sobra; si algún día vieras
  el mensaje de "no se ha podido cargar", probablemente sea eso.
- Si cambias de usuario de GitHub, actualiza la URL en
  `initGithubActivity()` (`js/main.js`) y el enlace "Ver perfil completo".

## Datos estructurados y SEO

`index.html` incluye un bloque `<script type="application/ld+json">` con tu
identidad (schema.org `Person`): nombre, contacto, LinkedIn/GitHub y las
tecnologías que dominas. Ayuda a que Google entienda quién eres y muestre
mejor tu resultado — no cambia nada visualmente. Actualízalo si cambias de
email, teléfono o perfiles.

## Alcance de esta versión

- Contenido de "Sobre mí" y niveles de skills son un primer borrador honesto:
  revísalos y ajusta lo que no encaje contigo exactamente.
- Sin backend propio: el formulario depende de Web3Forms hasta que actives tu
  Access Key.
- La carpeta `portfolio/` (la versión anterior) no se ha tocado y sigue
  desplegada de forma independiente.
