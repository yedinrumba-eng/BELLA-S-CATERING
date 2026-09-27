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

## Fase 3 — Entrega

- [x] **S3.1** — seguridad y privacidad: CSS local, cabeceras Cloudflare, .env.example y escaneo de archivos publicables; Chrome 1440/390 sin peticiones externas, errores ni desbordamiento.
- [x] **S3.2** — teclado, movimiento reducido, foco, imágenes y carga inicial comprobados en Chrome a 1440/390/320 px.
- [x] **S3.3** — 404.html adaptable, robots con bloqueo temporal, rutas locales y noindex comprobados; dominio y HTTP reales pendientes.
- [ ] **S3.4** — con dominio definitivo y orden de publicación: canónica, metadatos sociales absolutos, sitemap, abrir indexación, Lighthouse, push y comprobación del despliegue.

## Fase 4 — Pulido visual solicitado

- [x] **S4.1** — cifras de Jenny más grandes y en negrita; Chrome 1440/390/320 px sin desbordamiento.
- [x] **S4.2** — siete platos, seis llegan al centro; salida del pin sincronizada con scroll rápido, Chrome 1440/390/320 y movimiento reducido.
- [x] **S4.3** — servicio abierto en verde profundo con texto claro y acento dorado; Chrome 1440/390/320 px.
- [x] **S4.4** — proceso con cuatro fotos existentes, degradado y títulos semibold; Chrome 1440/390/320 px, mouse y teclado.
- [x] **S4.5** — FAQ editorial con foto, numeración y estado abierto; Chrome 1440/390/320 px y teclado.
- [x] **S4.6** — cierre fotográfico con marca Bella y Catering a gran escala; Chrome 1440/760/390/320 px.
- [x] **S4.7** — sección fotográfica editorial con tres imágenes seleccionables; Chrome 1440/390/320 px, teclado, carga y desbordamiento comprobados.
- [x] **S4.8** — entradas sutiles con scroll, revisión visual de secciones y accesibilidad; Chrome 1440/390/320 px y movimiento reducido.
- [x] **S4.9** — titular del hero en mayúsculas y Santiago más visible; Chrome 1440/1024/390/320 px.
- [x] **S4.10** — Jenny entre FAQ y testimonios; footer negro editorial con marca gigante; Chrome 1440/760/390/320 px, foto y enlaces verificados.
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

26/09/2026 — S4.1: Chrome a 1440/390/320 px confirmó Manrope 600 en cifras, tamaños 36/31.2/30 px, sin desbordamiento ni errores. Salida móvil: {"width":320,"count":2,"font":"Manrope, Arial, sans-serif","fontSize":"30px","weight":"600","columns":"274px","overflow":false,"itemOverflow":false,"errors":[]}.

26/09/2026 — S4.2: Chrome con scroll rápido desde la escena al servicio: {"width":390,"plates":7,"scroll":1,"animation":1,"finalOpacity":1,"finalLoaded":1100,"gap":0,"overflow":false,"errors":[]}; 390×844 y 320×568 sin desbordamiento ni errores. Movimiento reducido: {"reduced":true,"triggers":0,"visible":3,"overflow":false}. Dos fotos nuevas 1100×1100, sin EXIF/XMP/ICC.

26/09/2026 — S4.7: Chrome a 1440/390/320 px confirmó tres controles, cambio por clic y foco, siete imágenes cargadas, aria-pressed sincronizado, sin desbordamiento ni errores. Salida real 320 px: {"width":320,"third":{"focused":"2","pressed":["false","false","true"]},"bounds":{"right":320,"width":320},"overflow":false,"errors":[]}.

26/09/2026 — S4.8: Chrome confirmó 16 disparadores de revelado, imagen y palabra del footer visibles al llegar, modo reducido con 0 disparadores, nueve anclas válidas, secciones presentes y sin errores. Salida real: {"width":1440,"documentWidth":1440,"overflow":false,"sections":true,"photoCount":3}; {"width":390,"documentWidth":390,"overflow":false,"sections":true,"photoCount":3}; {"width":320,"documentWidth":320,"overflow":false,"sections":true,"photoCount":3}; {"anchors":[],"revealCount":16,"signature":{"opacity":"1","top":84},"footer":{"opacity":"1","text":"Catering"},"reduced":{"media":true,"triggers":0,"signatureOpacity":"1"},"errors":[]}.

26/09/2026 — S4.9: Chrome confirmó text-transform uppercase en el H1, ubicación de 14 px en escritorio y 11 px en móvil, sin desbordamiento ni errores. Salida real 320 px: {"width":320,"caps":"uppercase","headingOverflow":false,"locationPx":"11px","documentWidth":320,"errors":[]}; pageErrors=[].

## Deuda técnica

🟡 Antes de publicar: crear sitemap con el dominio definitivo, abrir indexación, ejecutar Lighthouse, comprobar estado 404 y cabeceras HTTP tras desplegar. Repetir el escaneo de archivos preparados antes del primer push.

## Lecciones ya pagadas

Una prueba de resize marcó 390 px de ancho al pasar a 320 px mientras scrollTo seguía una transición suave. No era desbordamiento persistente: al asentarse daba 320 px. La prueba final usa scroll instantáneo antes de refrescar ScrollTrigger.

Los HEIC no se abrían con el visor por defecto de la sesión; un conversor local permitió revisar los seis retratos de Jenny.

## Descartado y por qué

Astro/CMS, backend y pagos para v1: añaden complejidad sin necesidad aprobada. Assets de las webs de referencia: solo guían el diseño.

/PRODUCT EXPLOTION y Blender: Yedin prefirió conservar la fotografía del plato sin render 3D. El relevo de imágenes al hacer scroll en la segunda sección continúa aprobado.

26/09/2026 — S4.3: Chrome hover abrió una sola fila y la segunda cerró la primera. En 1440/390/320 px: fondo rgb(38, 54, 45), título rgb(255, 250, 240), descripción rgb(229, 225, 215), overflow=false, errors=[].

26/09/2026 — S4.4: Chrome a 1440 px confirmó 4 tarjetas y 4 assets locales; al hover la foto tuvo opacity≈1, título crema y Manrope 600. Tab enfocó la segunda con foto visible; a 390/320 px las cuatro imágenes y textos claros quedaron visibles, overflow=false, errors=[].
26/09/2026 — S4.5: Chrome a 1440/390/320 px confirmó 6 preguntas, fondo abierto rgb(232, 223, 208), borde 3px, foto 1440px cargada, Enter y Espacio, respuesta honesta de meal prep, overflow=false, errors=[].
26/09/2026 — S4.6: Chrome con carga nueva en 1440/760/390/320 px confirmó foto 1280 px, grandes rótulos Bella y Catering dentro del ancho, ocho enlaces válidos y seguros, sin errores ni scroll horizontal. Salida 320 px: {"width":320,"innerWidth":320,"doc":320,"image":1280,"word1":[13,314],"word2":[23,297],"errors":[]}. El redimensionado inmediato de la misma pestaña mostró ancho de pin temporalmente viejo; cargas nuevas en cada viewport no reprodujeron desbordamiento.
27/09/2026 — S4.10: Chrome confirmó orden FAQ→manera→testimonios, foto 1280 px tras scroll, footer rgb(16, 17, 16), wordmark dentro del ancho, anclas=[] y errores=[]. Salida 320 px: {"width":320,"documentWidth":320,"order":4,"wayImage":1280,"footerColor":"rgb(16, 17, 16)","word":[{"left":23,"right":181,"text":"BELLA’S"},{"left":65,"right":297,"text":"CATERING"}],"footerRight":320,"anchors":[]}.
