# Landing FCR · Fábrica Cosas Raras

Sitio estático para GitHub Pages, con dominio propio cosasraras.cl (archivo `CNAME`).

## Estructura
```
index.html              Página única (secciones 0–9 según "Arquitectura landing FCR v1")
CNAME                   cosasraras.cl
assets/css/styles.css   Sistema de marca FCR (colores, tipografía, filetes)
assets/js/main.js       Botón de reproducción de los videos
assets/fonts/           Archivo (variable, anchos 62–125 %) e IBM Plex Mono, autoalojadas (licencia OFL)
assets/logos/           SVG oficiales de la skill fcr-marca
assets/img/             Fotos optimizadas (1600 px, ~150–350 KB)
assets/video/           ← aquí van los dos videos
assets/docs/            ← aquí va la ficha técnica en PDF
```

## Para completar
1. **Videos**: listos en `assets/video/` (`Proceso-Surmujer.mp4` y `Testimonio-Bernardita-Birkner.mp4`, ~27–30 MB, optimizados para web).
   Ojo: GitHub Pages distingue mayúsculas y minúsculas; si se renombran, hay que cambiar el nombre también en index.html.
2. **Ficha técnica** con el teléfono corregido (+56 9 5145 3864): `assets/docs/FCR_Ficha_FlorPP5_2026-10_v1.pdf`
3. **Logos de alianzas** (la sección está oculta con el atributo `hidden`; borrarlo para mostrarla) (RioVerde, Ecocitex y otros) en `assets/logos/alianzas/`, SVG o PNG con fondo transparente.
   En la sección Alianzas de index.html, reemplazar cada `<span class="mono">[LOGO] …</span>` por `<img src="assets/logos/alianzas/nombre.svg" alt="Nombre">`.
   Se muestran automáticamente en una sola tinta (negro taller).

## Publicar en GitHub Pages
1. Subir el contenido de esta carpeta a la raíz de un repositorio.
2. Settings › Pages › Source: rama `main`, carpeta `/ (root)`.
3. Custom domain: `cosasraras.cl` (el archivo CNAME ya lo trae).
4. En el proveedor del dominio, registros A del dominio raíz hacia
   185.199.108.153 · 185.199.109.153 · 185.199.110.153 · 185.199.111.153
   y un CNAME `www` hacia `[usuario].github.io`.
5. Cuando el dominio verifique, activar "Enforce HTTPS".
