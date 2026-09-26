# PROGRESO — Bella’s Catering

Leyenda: `[x]` verificado · `[~]` en curso · `[ ]` pendiente · `[!]` bloqueado.

## Fase 1 — Identidad y portada

- [x] **S1.1** — sello vectorial, fuentes propias y assets iniciales. SVG validado y renderizado; tres fotos WebP comprobadas.
- [x] **S1.2** — portada editorial adaptable. Navegador comprobado a 1440 y 390 px; menú móvil con teclado.
- [x] **S1.3** — escena gastronómica con movimiento. Scroll real, 1440/390 px y movimiento reducido comprobados.

## Fase 2 — Oferta y conversión

- [x] **S2.1** — cinco servicios y biografía de Jenny contrastados con PRD; enlaces, fotos y móvil comprobados.
- [x] **S2.2** — galería conceptual de carta y buffet con seis imágenes; Chrome a 1440/390/320 px.
- [x] **S2.3** — portada, biografía y tamaños de lectura; Chrome a 1440/1100/980/820/768/390/320 px.
- [ ] **S2.4** — intercambio de platos al hacer scroll y efecto de componentes.
- [ ] **S2.5** — acordeón visual de servicios y meal prep en exploración.
- [ ] **S2.6** — formulario que prepara WhatsApp. Verificar mensaje sin enviarlo.

## Fase 3 — Entrega

- [ ] **S3.1** — revisión y Cloudflare con dominio propio. Verificar sitio en vivo.

## Bitácora

26/09/2026 — S1.1: sello SVG validado y renderizado; licencias de dos fuentes comprobadas; tres WebP generados y medidos.
26/09/2026 — S1.2: portada renderizada a 1440 y 390 px, fotos cargadas, sin scroll horizontal; menú abre con Enter.
26/09/2026 — S1.3: tres platos WebP renderizados; animación GSAP cambia y=-580 a y=0; en movimiento reducido el plato queda estático y visible.
26/09/2026 — S2.1: navegador a 1440/390/320 px: 5 servicios, 2 fotos de biografía cargadas, enlaces internos resueltos y sin desbordamiento; menú móvil llega a #chef.
26/09/2026 — S2.2: Chrome a 1440/390/320 px: 6 fotos cargadas, 2 categorías y sin desbordamiento.
26/09/2026 — S2.3: Chrome a 1440/1100/980/820/768/390/320 px: foto del plato 1600 px y retrato 1500 px cargados, descripciones 18/16 px, 1 foto en bio, sin desbordamiento ni errores. Salida real: {"width":820,"overflow":false,"heroLoaded":1600,"bioLoaded":1500,"heroTextPx":"18px","bioTextPx":"18px","serviceTextPx":"17px","bioLead":"El amor por la cocina comenzó en casa y hoy vive en cada celebración que preparo.","mobileMenuVisible":true,"bioImgWidth":672,"bioImages":1,"errors":[]}

## Deuda técnica

No identificada aún. Los datos pendientes del negocio están en `HANDOFF.md`.

## Lecciones ya pagadas

Los HEIC no se abrían con el visor por defecto de la sesión; un conversor local permitió revisar los seis retratos de Jenny.

## Descartado y por qué

Astro/CMS, backend y pagos para v1: añaden complejidad sin necesidad aprobada. Assets de las webs de referencia: solo guían el diseño.
