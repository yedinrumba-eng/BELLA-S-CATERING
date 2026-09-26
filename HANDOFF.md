# HANDOFF — Bella’s Catering

Actualizado: 26/09/2026 · Rol: editor · Slice cerrado: S2.1; próximo: S2.2 (en pausa hasta recibir imágenes y selección de galería)

## Estado

La carpeta era nueva y no tenía código. Yedin autorizó construir desde S1.1 hasta S2.1 y parar antes de la galería S2.2. `PRD.MD` contiene las respuestas originales de Jenny. Diseño aprobado: composición editorial de Aveline con detalles de Sofra, identidad Bella’s y Cloudflare Pages más adelante.

## Orden inmediato

1. S1.1 cerrado — sello SVG renderizado, fuentes con licencia local y tres fotos WebP; salida: SVG valid: 0 0 360 360 bytes 1694; Jenny 1500x1500 118086 bytes, plating 1280x1440 140208 bytes, team 1280x1440 157640 bytes.
2. S1.2 cerrado — portada en navegador a 1440 y 390 px: foto cargada, sin desbordamiento; menú móvil abre con Enter y enlaces correctos.
3. S1.3 cerrado — tres WebP optimizados; GSAP local. Scroll probado: plato central pasa de y=-580 a y=0. A 1440 y 390 px cargan las tres fotos sin desbordar; con movimiento reducido quedan visibles y quietas.
4. S2.1 cerrado — cinco servicios y biografía contrastados con las respuestas de Jenny. Navegador a 1440, 390 y 320 px: cinco tarjetas, sin desbordamiento, fotos cargadas; el menú móvil navega a #chef.
5. Parar ahora: galería S2.2 espera nuevas imágenes y selección de platos a la carta y buffets. No hay push ni deploy.

## Decisiones vinculantes

D1 sitio estático; D2 composición Aveline y recortes Sofra con assets propios; D3 Cloudflare Pages; D4 fuentes locales; D5 fotos generadas tratadas como arte editorial. Ver `AGENTS.md` para los porqués.

## Datos pendientes

Dominio, registro final del negocio y aprobación de galería por Yedin y Jenny. No bloquear S1.1–S2.1 por esto.

## Lecciones ya pagadas

No hay bugs de implementación aún. En preparación, algunas imágenes HEIC no abrían en el visor habitual; se pudieron convertir localmente para revisar todas las referencias de Jenny.
