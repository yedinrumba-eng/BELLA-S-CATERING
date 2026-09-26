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
- [x] **S2.4** — cinco platos con dos relevos y componentes decorativos; Chrome a 1440×900, 1440×600, 390×667 y 320×568, resize y movimiento reducido comprobados.
- [x] **S2.5** — seis filas de acordeón visual: cinco servicios confirmados y meal prep en exploración; Chrome a 1440/768/390/320 px.
- [x] **S2.6** — formulario que prepara WhatsApp sin guardar ni enviar el mensaje; Chrome a 1440/768/390/320 px, validación y codificación comprobadas.
- [x] **S2.7** — navegación cápsula de Bella, adaptable y accesible; Chrome a 1440/1100/1024/390/320 px y escena corta de 1440×600.
- [x] **S2.8** — siete frases y atribuciones exactas; clasificación como testimonios actualizada en S2.10.
- [x] **S2.9** — cuatro pasos de trabajo y seis preguntas frecuentes; Chrome a 1440/768/390/320 px, teclado y toque.

- [x] **S2.10** — tras la confirmación de Yedin, las siete frases se presentan como testimonios de clientes. Chrome 1440/768/390/320 px: citas intactas y sin desbordamiento.

- [!] **S2.11** — efecto /PRODUCT EXPLOTION 3D real: el flujo Higgsfield requiere Blender 4.2+ y un conector local. No se encontró Blender instalado; se pidió autorización antes de añadir software. La animación GSAP existente continúa operativa.

## Fase 3 — Entrega

- [x] **S3.1** — seguridad y privacidad: CSS local, cabeceras Cloudflare, .env.example y escaneo de archivos publicables; Chrome 1440/390 sin peticiones externas, errores ni desbordamiento.
- [x] **S3.2** — teclado, movimiento reducido, foco, imágenes y carga inicial comprobados en Chrome a 1440/390/320 px.
- [x] **S3.3** — 404.html adaptable, robots con bloqueo temporal, rutas locales y noindex comprobados; dominio y HTTP reales pendientes.
- [ ] **S3.4** — con dominio definitivo y orden de publicación: canónica, metadatos sociales absolutos, sitemap, abrir indexación, Lighthouse, push y comprobación del despliegue.

## Bitácora

26/09/2026 — S1.1: sello SVG validado y renderizado; licencias de dos fuentes comprobadas; tres WebP generados y medidos.
26/09/2026 — S1.2: portada renderizada a 1440 y 390 px, fotos cargadas, sin scroll horizontal; menú abre con Enter.
26/09/2026 — S1.3: tres platos WebP renderizados; animación GSAP cambia y=-580 a y=0; en movimiento reducido el plato queda estático y visible.
26/09/2026 — S2.1: navegador a 1440/390/320 px: 5 servicios, 2 fotos de biografía cargadas, enlaces internos resueltos y sin desbordamiento; menú móvil llega a #chef.
26/09/2026 — S2.2: Chrome a 1440/390/320 px: 6 fotos cargadas, 2 categorías y sin desbordamiento.
26/09/2026 — S2.3: Chrome a 1440/1100/980/820/768/390/320 px: foto del plato 1600 px y retrato 1500 px cargados, descripciones 18/16 px, 1 foto en bio, sin desbordamiento ni errores. Salida real: {"width":820,"overflow":false,"heroLoaded":1600,"bioLoaded":1500,"heroTextPx":"18px","bioTextPx":"18px","serviceTextPx":"17px","bioLead":"El amor por la cocina comenzó en casa y hoy vive en cada celebración que preparo.","mobileMenuVisible":true,"bioImgWidth":672,"bioImages":1,"errors":[]}

26/09/2026 — S2.4: Chrome con scroll en 1440×900, 1440×600, 390×667 y 320×568: dos relevos, platos encuadrados, sin desbordamiento ni errores. Salida real 320×568 progreso .28: {"width":320,"height":568,"progress":0.28,"scene":[0,0,320,568],"plates":[{"id":"0","rect":[-7,339,113,459],"opacity":"1.00"},{"id":"1","rect":[67,282,253,469],"opacity":"1.00"},{"id":"2","rect":[207,339,327,459],"opacity":"1.00"},{"id":"3","rect":[281,365,391,475],"opacity":"0.00"},{"id":"4","rect":[281,365,391,475],"opacity":"0.00"}],"footer":[76,526,297,548],"overflow":false,"errors":[]}. Movimiento reducido: {"motion":false,"triggers":0,"plates":["block","block","block","none","none"],"overflow":false,"errors":[]}

26/09/2026 — S2.5: Chrome confirmó seis filas, una sola abierta, hover/click/teclado/tap, tres fotos de meal prep cargadas, sin desbordamiento ni errores. Salida real 320×720: {"width":320,"height":720,"count":6,"closedInitially":true,"interactions":{"firstTapOpen":true,"secondTapOpen":true,"firstClosed":true,"mealTapOpen":true},"overflow":false,"openCount":1,"mealLabel":"En exploración","badgeRight":166,"viewportRight":320,"bodySize":"17px","titleSize":"32px","images":[{"loaded":true,"width":1536,"height":1024},{"loaded":true,"width":1536,"height":1024},{"loaded":true,"width":1536,"height":1024}],"errors":[]}

26/09/2026 — S2.6: Chrome sin red externa confirmó campos obligatorios, bloqueo de invitados negativos, mensaje con acentos/símbolos/emoji y apertura de solo la URL de WhatsApp tras pulsar el botón. Salida real 320×720: {"width":320,"height":720,"blankBlocked":true,"spacesBlocked":true,"overflow":false,"sectionRight":320,"viewportRight":320,"openCount":1,"hostValid":true,"target":"_blank","features":"noopener,noreferrer","messageIncludesService":true,"messageIncludesDate":true,"messageIncludesGuests":true,"messageIncludesLocation":true,"messageIncludesIdea":true,"errors":[]}. Campos opcionales vacíos: {"openCount":1,"negativeBlocked":true,"service":true,"omitsDate":true,"omitsGuests":true,"omitsLocation":true,"skipTop":-80}

26/09/2026 — S2.7: Chrome confirmó menú móvil con Enter, Espacio, Escape, clic fuera, ancla y resize. Salida real 320×720: {"width":320,"height":720,"initial":{"header":[12,10,308,80],"overflow":false},"enterOpen":true,"escapeClosed":true,"focusReturned":true,"spaceOpen":true,"outsideClosed":true,"linkClosed":true,"hash":"#cotizar","focusAtQuote":true,"resizeClosed":null,"errors":[]}. Escena 1440×600: plato derecho termina y=509; pie empieza y=555.

26/09/2026 — S2.8: Chrome confirmó 7 frases y atribuciones exactas, sin desbordamiento ni errores. Salida real 320×720: {"width":320,"height":720,"count":7,"exact":true,"overflow":false,"cardOverflow":false,"quotePx":"31px","note":"Comentarios compartidos sobre publicaciones de Jenny; no son reseñas verificadas de eventos.","errors":[]}

26/09/2026 — S2.9: Chrome confirmó 4 pasos, 6 preguntas, enlaces FAQ en ambas navegaciones y respuesta de meal prep honesta. Salida real 320×720: {"width":320,"height":720,"count":6,"initialClosed":true,"firstOpened":true,"steps":4,"faqCount":6,"faqLinks":2,"overflow":false,"processRight":320,"faqRight":320,"mealAnswer":true,"quoteKicker":"Hablemos de tu evento · 09","errors":[]}. Se corrigió el título del proceso en escritorio antes de repetir la prueba.

26/09/2026 — S3.1: escaneo de archivos publicables: {"files":46,"textFiles":25,"privatePaths":0,"secretHits":0,"webps":16,"metadataHits":0,"envExample":true,"headers":true}. Chrome sin red externa a 1440 px: {"width":1440,"headerSyntax":true,"headerKeys":["Content-Security-Policy","X-Content-Type-Options","Referrer-Policy","X-Frame-Options","Permissions-Policy"],"remoteScripts":0,"missingLocal":[],"remoteRequests":0,"overflow":false,"heroLoaded":1600,"gsapLoaded":true,"sceneImages":[1100,1100,1100,1440,1440],"formPresent":true,"errors":[]}. Cabeceras HTTP en producción pendientes del despliegue.

26/09/2026 — S3.2: Chrome 390 px con movimiento reducido: {"skip":true,"serviceOpen":true,"faqOpen":true,"missingAlt":0,"missingDimensions":0,"brokenAnchors":0,"unlabeledControls":0,"overflow":false,"sceneMotion":false,"triggers":0,"remoteRequests":0,"errors":[]}. Foco normal de 3 px con contraste 3.78:1/4.1:1; imágenes WebP suman 2,582,560 bytes, 10 de 22 cargan inicialmente.

26/09/2026 — S2.10: Yedin confirmó que las personas citadas contrataron a Jenny. Chrome a 320×720: {"width":320,"height":720,"count":7,"exact":true,"overflow":false,"cardOverflow":false,"quotePx":"31px","note":"Testimonios de clientes que contrataron a Jenny para sus eventos.","errors":[]}.

26/09/2026 — S3.3: Chrome 404 a 1440/390/320 px: imagen cargada y sin desbordamiento ni errores. Salida real 320 px: {"width":320,"title":"Página no encontrada — Bella’s Catering","robots":"noindex, nofollow","heading":"Esta mesate espera en casa.","hero":1600,"style":"Cormorant, Georgia, serif","links":2,"overflow":false,"errors":[]}. Recursos: missing=[]; robots.txt bloquea todo y portada marca noindex. Estado HTTP y Lighthouse pendientes.

## Deuda técnica

🟡 Antes de publicar: crear sitemap con el dominio definitivo, abrir indexación, ejecutar Lighthouse, comprobar estado 404 y cabeceras HTTP tras desplegar. Repetir el escaneo de archivos preparados antes del primer push.

## Lecciones ya pagadas

Los HEIC no se abrían con el visor por defecto de la sesión; un conversor local permitió revisar los seis retratos de Jenny.

## Descartado y por qué

Astro/CMS, backend y pagos para v1: añaden complejidad sin necesidad aprobada. Assets de las webs de referencia: solo guían el diseño.
