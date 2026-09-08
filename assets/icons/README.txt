Carpeta para iconos de tecnologías (SVG) si decides usar imágenes
en lugar de emojis en el stack.

Por defecto, el stack usa emojis definidos en js/projects.js (campo `icon`).

Si prefieres SVGs:
1. Descarga los que necesites (p. ej. de https://devicon.dev — SVG, libre).
2. Guárdalos aquí, por ejemplo: html5.svg, css3.svg, javascript.svg...
3. En js/projects.js pon la ruta en `icon`, p. ej.:
     { name: "HTML5", icon: "assets/icons/html5.svg", level: "Intermedio" }
4. En js/main.js, dentro de renderSkills(), cambia el bloque del icono para
   detectar rutas que acaben en ".svg" y crear un <img> en vez de texto.

No es necesario para la primera versión.
