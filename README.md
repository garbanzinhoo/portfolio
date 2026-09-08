# Portfolio personal

Sitio estático (HTML + CSS + JavaScript vanilla). **Sin frameworks, sin build.**
Se despliega en Netlify subiendo la carpeta tal cual.

## Estructura

```
portfolio/
├── index.html          # Estructura de la página (5 secciones + nav + footer)
├── gracias.html         # Página de "mensaje enviado" (fallback del formulario sin JS)
├── css/
│   └── styles.css       # Todos los estilos. Paleta de colores en :root (arriba del archivo)
├── js/
│   ├── projects.js      # DATOS: arrays `projects` y `skills`. Edita SOLO esto para tu contenido
│   └── main.js          # Lógica: menú móvil, scroll-spy, animaciones, render de tarjetas, formulario
├── assets/
│   ├── favicon.svg
│   └── icons/           # (opcional) SVGs de tecnologías
├── netlify.toml         # Config de Netlify: publish = ".", sin comando de build
└── README.md
```

## Cómo editar tu contenido

Casi todo lo que tienes que rellenar está marcado con `TODO` en los comentarios.

| Qué | Dónde |
|-----|-------|
| Nombre, título, frase de presentación | `index.html` → sección `#inicio` |
| Texto de "Sobre mí" y datos rápidos | `index.html` → sección `#sobre-mi` |
| Tecnologías del stack | `js/projects.js` → array `skills` |
| Proyectos (tarjetas) | `js/projects.js` → array `projects` |
| Email / LinkedIn / GitHub | `index.html` → sección `#contacto` (los `href`) |
| Activar el formulario (Access Key) | `index.html` → `name="access_key"` (ver "Formulario de contacto" abajo) |
| Email de reserva si el formulario falla | `js/main.js` → constante `FALLBACK_EMAIL` |
| Colores | `css/styles.css` → bloque `:root` |

### Proyectos (`projects.js`)

Cada proyecto es un objeto:

```js
{
  title: "Nombre",
  description: "1–2 frases.",
  tech: ["HTML", "CSS", "JavaScript"],
  codeUrl: "https://github.com/tu-usuario/repo",
  demoUrl: "https://proyecto.netlify.app", // null si NO es una web navegable
  featured: false                          // true = tarjeta resaltada
}
```

- El botón **"Ver código"** aparece si `codeUrl` tiene valor.
- El botón **"Ver demo en vivo"** aparece **solo** si `demoUrl` es una URL `http(s)` válida.
  Si es `null` o `""`, no se muestra (así lo pediste).

### Paleta de colores (`styles.css`)

```css
:root {
  --bg: #0A0F14;          /* fondo principal */
  --bg-alt: #0F151C;      /* secciones alternas */
  --surface: #131B24;     /* tarjetas */
  --border: #22303C;      /* bordes */
  --text: #E4ECF2;        /* texto principal */
  --text-muted: #8FA1B0;  /* texto secundario */
  --text-dim: #5C6B78;    /* detalles tipo comentario */
  --accent: #22D3EE;      /* cian: títulos, enlaces, CTA, hover */
  --accent-2: #00F5A0;    /* verde menta: acentos puntuales */
}
```

## Probar en local

No necesita servidor, pero para que los `fetch`/rutas relativas se comporten
igual que en producción conviene levantar uno:

```bash
# con Python (ya suele estar instalado)
python -m http.server 5173
```

Luego abre `http://localhost:5173`. O simplemente abre `index.html` en el navegador.

## Formulario de contacto (Web3Forms) — cómo activarlo

El formulario envía de verdad **sin backend propio** usando [Web3Forms](https://web3forms.com).
Funciona **en localhost y en producción**. Solo hay que pegar una clave.

### Paso único (2 minutos, gratis, sin registro)

1. Entra en **https://web3forms.com**.
2. Escribe tu correo (`zoiloburgosaitor@gmail.com`) y pulsa **Create Access Key**.
3. Te llega un **Access Key** (un UUID tipo `a1b2c3d4-....`) a ese correo. Cópialo.
4. Abre `index.html`, busca `PEGA_AQUI_TU_ACCESS_KEY` y sustitúyelo por tu clave:
   ```html
   <input type="hidden" name="access_key" value="a1b2c3d4-tu-clave-real" />
   ```
5. Guarda y prueba: rellena el formulario y envía. El mensaje llega a tu correo.

### Detalles

- El JS (`main.js`) envía por AJAX y muestra "¡Mensaje enviado!" sin recargar.
  Sin JavaScript, el `<form>` hace un POST normal al mismo endpoint y también llega.
- Anti-spam: campo trampa `botcheck` (honeypot) + filtro de Web3Forms.
- Plan gratuito: **250 envíos/mes**. El asunto y el remitente se configuran en los
  `<input hidden>` `subject` y `from_name` dentro del formulario.
- Si tienes JS desactivado y quieres que tras enviar se vea `gracias.html`,
  rellena el `<input hidden name="redirect">` con su URL completa una vez desplegado
  (p. ej. `https://tu-portfolio.netlify.app/gracias.html`).
- Alternativa equivalente si prefieres otro proveedor: [Formspree](https://formspree.io)
  (cambia el `action` del form por tu endpoint de Formspree).

## Desplegar en Netlify

**Opción A — arrastrar y soltar (lo más rápido):**
1. Entra en https://app.netlify.com/drop
2. Arrastra la carpeta `portfolio/` completa.
3. Listo: te da una URL `*.netlify.app`.

**Opción B — desde GitHub (recomendado para ir actualizando):**
1. Sube el proyecto a un repositorio de GitHub.
2. En Netlify: *Add new site → Import an existing project → GitHub*.
3. Configuración de build:
   - **Build command:** *(vacío)*
   - **Publish directory:** `.` (o `portfolio` si el repo tiene esa carpeta en la raíz)
4. *Deploy*. Cada `git push` volverá a desplegar automáticamente.

> El formulario de contacto no depende de Netlify: se activa pegando el Access Key
> de Web3Forms en `index.html` (ver "Formulario de contacto" arriba).

## Accesibilidad y rendimiento

- HTML semántico, enlace "saltar al contenido", foco visible.
- Respeta `prefers-reduced-motion` (desactiva animaciones).
- Cero dependencias externas: no hay CSS/JS de terceros que cargar.

## Alcance de esta versión

- Formulario de contacto funcional vía Web3Forms (sin servidor propio).
- Sin blog ni CMS.
- Textos de "Sobre mí" y stack con datos de ejemplo marcados con `TODO`.
