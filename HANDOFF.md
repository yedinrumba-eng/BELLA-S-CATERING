# HANDOFF — Bella’s Catering

Actualizado: 28/09/2026 · Rol: editor · Slice cerrado: S4.16; próximo: S4.17 (relevo de platos y entradas horizontales)

## Estado

S4.16: dos videos entregados por Yedin sustituyen las fotografías como fondo visual de La mesa; las fotos siguen como respaldo. FFmpeg local redujo los archivos de 21.809.571/29.619.859 bytes a 909.153/2.070.834 bytes (H.264, 1280×720, 24 fps, sin audio ni metadatos personales). Chrome local con archivos a 1440/390/320 px: documentWidth=viewport, ambos videos readyState=4, videoVisible=1, videoPaused=false, errors=[]. Scroll real a 320 px: primer panel media y=-58.8713→55.9643 y contenido y=37.3404→-35.4965; segundo panel igual. Movimiento reducido: {"videoDisplay":"none","videoPaused":true,"photoLoaded":1440,"mediaTransform":"none","contentTransform":"none"}. Capturas `.playwright/s4-16-panel-*.png`. No hubo push.

S4.15: la escena de Jenny vuelve a mostrar Bella’s y CATERING en dos líneas grandes. Chrome local con archivos a 1440/390/320 px: documentWidth=viewport y errores=[]. Salida 390 px: {"section":{"height":800,"bottom":849.5},"messageBottom":623,"words":[{"text":"Bella’s","top":691,"bottom":755},{"text":"CATERING","top":755,"bottom":795}]}. Salida 320 px: {"section":{"height":800,"bottom":849.9375},"messageBottom":583,"words":[{"text":"Bella’s","top":699,"bottom":758},{"text":"CATERING","top":758,"bottom":795}]}. Ambas palabras quedan completas dentro de la escena y debajo del mensaje. Capturas locales en `.playwright/s4-15-way-*.png`. No hubo push.

S4.14: la vista local no abría porque el servidor de desarrollo ya no escuchaba en 127.0.0.1:8765; se volvió a iniciar como proceso local independiente. Salida HTTP real: {"status":200,"title":"Bella’s Catering — Chef Jenny Pereyra","bytes":32823,"listening":true}. Cinco segundos después: {"processAlive":true,"listener":true}. Este servidor es temporal de vista previa, no un despliegue público.


S4.13: revisión integral local a 1440/760/390/320 px. Salida 320 px: {"width":320,"documentWidth":320,"heroCaps":"uppercase","locationPx":"11px","sectionOrder":true,"parallaxCount":2,"testimonials":7,"dark":[1,4,7],"footerWords":[[23,181],[65,297]],"badAnchors":[],"missingAlt":0}. Formulario: {"formOpened":true,"safeHost":true,"hasIdea":true}. Movimiento reducido/red: {"reduced":true,"triggers":0,"errors":[],"external":[]}. Auditoría offline: {"resourceCount":67,"missingResources":[],"trackedCount":61,"privateTracked":[],"secretPatternFiles":[]}; 21 WebP sin EXIF/XMP/IPTC/ICC. La captura móvil mostró el enlace de salto por la forma de capturar un footer más alto que el viewport; en la página real seguía arriba a -80 px, sin foco. No hubo push.


S4.12: dos interludios fotográficos de buffet y plato entre Servicios/Biografía y Proceso/FAQ, con fondos en parallax por GSAP local y texto estático. Chrome 1440 px: documentWidth=1440, ambas fotos naturalWidth=1440, transformChanged=true, errores=[]. Carga móvil limpia 390 px: primer fondo de y=-44.0747 a y=47.2906 al avanzar el scroll; segundo igual. A 320 px, ambos de y=-51.24 a y=46.6167. Modo reducido: {"reduced":true,"triggers":0,"visible":[{"loaded":1440,"opacity":"1"},{"loaded":1440,"opacity":"1"}],"errors":[]}.


S4.11: siete testimonios intactos, tarjetas 1/4/7 oscuras y las otras cuatro claras. Chrome 1440/760/390/320 px: tarjetas dentro del viewport, documentWidth=viewport, errores=[]. Salida real 320 px: {"width":320,"documentWidth":320,"count":7,"dark":[1,4,7],"colors":["rgb(20, 26, 24)","rgb(249, 245, 237)","rgb(249, 245, 237)","rgb(35, 48, 40)","rgb(249, 245, 237)","rgb(249, 245, 237)","rgb(35, 48, 40)"],"cardsWithinViewport":true}.


S4.10: la escena fotográfica de Jenny vive entre FAQ y testimonios; footer negro con tres columnas informativas, enlaces reales y BELLA’S CATERING a gran escala. Chrome 1440/760/390/320 px: documentWidth=viewport, orden FAQ→manera→testimonios, footer rgb(16, 17, 16), anclas=[] y errores=[]. Al desplazar a la escena, la foto carga con naturalWidth=1280 tanto a 1440 como a 390 px. Salida 320 px: {"width":320,"documentWidth":320,"order":4,"wayImage":1280,"footerColor":"rgb(16, 17, 16)","word":[{"left":23,"right":181,"text":"BELLA’S"},{"left":65,"right":297,"text":"CATERING"}],"footerRight":320,"anchors":[]}.


S4.9: hero en mayúsculas y ubicación más grande. Chrome 1440/1024/390/320 px: H1 sin corte, documentWidth=viewport, sin errores. Salida 320 px: {"caps":"uppercase","headingOverflow":false,"locationPx":"11px","documentWidth":320}. Nuevas peticiones aprobadas: mover la sección de la manera de Bella entre FAQ/testimonios, footer negro de referencia, tres testimonios oscuros y escenas parallax.

S4.8 cerró el pulido local: revelados suaves en secciones y footer, con modo reducido estático; role=group en el selector fotográfico y README actualizado. Chrome a 1440/390/320 px: documentWidth=viewport, secciones presentes, tres fotos seleccionables, anclas=[] y errores=[]. Revelados=16; modo reducido: triggers=0 y foto visible. El primer push, URL canónica, sitemap, Lighthouse y verificación de cabeceras esperan dominio y orden de publicación.

S4.7 cerró la sección fotográfica La esencia: buffet de fondo y tres imágenes seleccionables con clic o teclado. Chrome a 1440/390/320 px cargó siete imágenes, sincronizó aria-pressed, sin desbordamiento ni errores. Salida real 320 px: {"width":320,"third":{"focused":"2","pressed":["false","false","true"]},"bounds":{"right":320,"width":320},"overflow":false,"errors":[]}.

La carpeta era nueva y no tenía código. Yedin autorizó continuar con galería, refinamiento visual, movimiento y servicios tras recibir nuevas imágenes. `PRD.MD` contiene las respuestas originales de Jenny. Diseño aprobado: composición editorial de Aveline con detalles de Sofra, identidad Bella’s y Cloudflare Pages más adelante.

## Orden inmediato

1. S1.1 cerrado — sello SVG renderizado, fuentes con licencia local y tres fotos WebP; salida: SVG valid: 0 0 360 360 bytes 1694; Jenny 1500x1500 118086 bytes, plating 1280x1440 140208 bytes, team 1280x1440 157640 bytes.
2. S1.2 cerrado — portada en navegador a 1440 y 390 px: foto cargada, sin desbordamiento; menú móvil abre con Enter y enlaces correctos.
3. S1.3 cerrado — tres WebP optimizados; GSAP local. Scroll probado: plato central pasa de y=-580 a y=0. A 1440 y 390 px cargan las tres fotos sin desbordar; con movimiento reducido quedan visibles y quietas.
4. S2.1 cerrado — cinco servicios y biografía contrastados con las respuestas de Jenny. Navegador a 1440, 390 y 320 px: cinco tarjetas, sin desbordamiento, fotos cargadas; el menú móvil navega a #chef.
5. S2.2 cerrado — seis imágenes WebP nuevas para carta y buffet. Chrome a 1440/390/320 px: seis tarjetas e imágenes cargadas, categorías y ancla presentes, sin desbordamiento.
6. S2.3 cerrado — plato editorial en portada, retrato de Jenny en arco de biografía y descripciones más grandes. Chrome a 1440/1100/980/820/768/390/320 px: ambas imágenes cargadas, textos 18/16 px, sin desbordamiento ni errores de página. El menú pasa a modo compacto hasta 1100 px y la bio a una columna hasta 980 px.
7. S2.4 cerrado — cinco platos locales con dos relevos de scroll y dos ráfagas decorativas. Chrome a 1440×900, 1440×600, 390×667 y 320×568: sección completa en pantalla, sin desbordamiento ni errores; resize recalcula escala y posición; movimiento reducido muestra tres platos quietos.
8. S2.5 cerrado — seis filas de acordeón: cinco servicios confirmados con imágenes conceptuales y meal prep marcado «En exploración». Chrome a 1440/768/390/320 px: hover, click, teclado y tap, fotos cargadas y sin desbordamiento ni errores.
9. S2.6 cerrado — formulario sin nombre, correo ni teléfono que prepara un mensaje de WhatsApp tras validación local; no lo envía ni almacena. Chrome a 1440/768/390/320 px comprobó codificación y ausencia de desbordamiento.
10. S2.7 cerrado — cápsula clara con sello, enlaces y CTA al formulario; menú móvil accesible con Escape, clic fuera, ancla y resize. Chrome a 1440/1100/1024/390/320 px, sin desbordamiento ni errores.
11. S2.8 cerrado — siete frases atribuidas con precisión. La clasificación inicial como reacciones quedó superada por la confirmación de clientes en S2.10.
12. S2.9 cerrado — cuatro pasos y seis preguntas frecuentes, con enlace en ambos menús. Chrome a 1440/768/390/320 px: FAQ con teclado y toque, sin desbordamiento ni errores.
13. S3.1 cerrado — sin script externo de Tailwind, _headers para Cloudflare, .env.example, ignorados privados y escaneo de material publicable. Chrome sin red externa a 1440/390 px, imágenes/GSAP cargados, sin errores ni desbordamiento. Las cabeceras aún requieren verificación tras desplegar.
14. S3.2 cerrado — foco de teclado con contraste mejorado; Chrome a 1440/390/320 px y modo de movimiento reducido: salto al contenido, acordeones, etiquetas, anclas e imágenes comprobados, sin red externa ni errores.
15. S3.3 cerrado — 404.html y CSS propio, robots.txt con bloqueo temporal y comprobación de recursos; Chrome 1440/390/320 px, sin desbordamiento. Falta validar HTTP en Cloudflare, dominio, sitemap y Lighthouse.
16. S2.10 cerrado — testimonios reclasificados como de clientes tras la aclaración de Yedin; Chrome 1440/768/390/320 px, citas exactas y sin desbordamiento.

## Decisiones vinculantes

D1 sitio estático; D2 composición Aveline/Sofra con assets propios; D3 Cloudflare Pages; D4 fuentes locales; D5 fotos generadas como arte editorial; D6 GSAP local; D7 cinco servicios; D8 galería conceptual; D9 portada gastronómica y bio con retrato; D10 escena de cinco platos encuadrada y adaptable; D11 acordeón visual con meal prep diferenciado; D12 formulario local sin almacenamiento; D13 cápsula no fija para respetar la escena; D14 criterio inicial superado por D18; D15 proceso sin condiciones inventadas; D16 CSS local y protección de repo público; D17 foco de teclado con contraste suficiente; D18 testimonios de clientes confirmados por Yedin; D19 indexación cerrada hasta tener dominio y publicación aprobada. Ver `AGENTS.md` para los porqués.

## Evidencia de S2.3

`.playwright/s2-3-check.cjs` en Chrome (líneas seleccionadas de la salida real):

```text
{"width":1440,"overflow":false,"heroLoaded":1600,"bioLoaded":1500,"heroTextPx":"18px","bioTextPx":"18px","serviceTextPx":"17px","bioLead":"El amor por la cocina comenzó en casa y hoy vive en cada celebración que preparo.","mobileMenuVisible":false,"bioImgWidth":604,"bioImages":1,"errors":[]}
{"width":820,"overflow":false,"heroLoaded":1600,"bioLoaded":1500,"heroTextPx":"18px","bioTextPx":"18px","serviceTextPx":"17px","bioLead":"El amor por la cocina comenzó en casa y hoy vive en cada celebración que preparo.","mobileMenuVisible":true,"bioImgWidth":672,"bioImages":1,"errors":[]}
{"width":390,"overflow":false,"heroLoaded":1600,"bioLoaded":1500,"heroTextPx":"16px","bioTextPx":"16px","serviceTextPx":"16px","bioLead":"El amor por la cocina comenzó en casa y hoy vive en cada celebración que preparo.","mobileMenuVisible":true,"bioImgWidth":344,"bioImages":1,"errors":[]}
{"width":320,"overflow":false,"heroLoaded":1600,"bioLoaded":1500,"heroTextPx":"16px","bioTextPx":"16px","serviceTextPx":"16px","bioLead":"El amor por la cocina comenzó en casa y hoy vive en cada celebración que preparo.","mobileMenuVisible":true,"bioImgWidth":274,"bioImages":1,"errors":[]}
```
## Evidencia de S2.4

`.playwright/s2-4-phases.cjs` y `.playwright/s2-4-short-desktop.cjs` en Chrome, con scroll real. Líneas de salida:

```text
{"width":1440,"height":900,"progress":0.54,"scene":[0,0,1440,900],"plates":[{"id":"0","rect":[-68,498,218,784],"opacity":"0.00"},{"id":"1","rect":[152,433,506,787],"opacity":"1.00"},{"id":"2","rect":[478,244,962,728],"opacity":"1.00"},{"id":"3","rect":[934,421,1288,775],"opacity":"1.00"},{"id":"4","rect":[1222,498,1508,784],"opacity":"0.00"}],"footer":[1074,830,1332,855],"overflow":false,"errors":[]}
{"width":320,"height":568,"progress":0.28,"scene":[0,0,320,568],"plates":[{"id":"0","rect":[-7,339,113,459],"opacity":"1.00"},{"id":"1","rect":[67,282,253,469],"opacity":"1.00"},{"id":"2","rect":[207,339,327,459],"opacity":"1.00"},{"id":"3","rect":[281,365,391,475],"opacity":"0.00"},{"id":"4","rect":[281,365,391,475],"opacity":"0.00"}],"footer":[76,526,297,548],"overflow":false,"errors":[]}
{"heading":[108,82,1008,258],"note":[108,272,1332,300],"footer":[1074,555,1332,580],"plates":[{"id":"0","rect":[-38,286,188,512],"opacity":"0"},{"id":"1","rect":[189,309,469,588],"opacity":"1"},{"id":"2","rect":[529,133,911,516],"opacity":"1"},{"id":"3","rect":[971,230,1251,509],"opacity":"1"},{"id":"4","rect":[1252,286,1478,512],"opacity":"0"}]}
{"motion":false,"triggers":0,"plates":["block","block","block","none","none"],"overflow":false,"errors":[]}
```

En 320×568 la nota termina en y≈258 y el plato central empieza en y≈282. En 1440×600 el plato derecho acaba en y=509 y el pie empieza en y=555. Capturas ignoradas: `.playwright/s2-4-scene-320x568-fixed.png` y `.playwright/s2-4-scene-1440x600-fixed.png`.
## Evidencia de S2.5

Chrome/Playwright con la red externa bloqueada. Salida real:

~~~text
{"width":1440,"height":900,"count":6,"closedInitially":true,"interactions":{"firstHoverOpen":true,"clickAfterHoverKeepsOpen":true,"secondHoverOpen":true,"firstClosed":true,"enterOpens":true,"spaceOpens":true,"mealHoverOpen":true},"overflow":false,"openCount":1,"mealLabel":"En exploración","badgeRight":515,"viewportRight":1440,"bodySize":"19px","titleSize":"48.96px","images":[{"loaded":true,"width":1536,"height":1024},{"loaded":true,"width":1536,"height":1024},{"loaded":true,"width":1536,"height":1024}],"errors":[]}
{"width":320,"height":720,"count":6,"closedInitially":true,"interactions":{"firstTapOpen":true,"secondTapOpen":true,"firstClosed":true,"mealTapOpen":true},"overflow":false,"openCount":1,"mealLabel":"En exploración","badgeRight":166,"viewportRight":320,"bodySize":"17px","titleSize":"32px","images":[{"loaded":true,"width":1536,"height":1024},{"loaded":true,"width":1536,"height":1024},{"loaded":true,"width":1536,"height":1024}],"errors":[]}
~~~

## Evidencia de S2.6

Chrome/Playwright con toda petición externa bloqueada; apertura interceptada sin contactar WhatsApp. Salida real:

~~~text
{"width":1440,"height":900,"blankBlocked":true,"spacesBlocked":true,"overflow":false,"sectionRight":1440,"viewportRight":1440,"openCount":1,"hostValid":true,"target":"_blank","features":"noopener,noreferrer","messageIncludesService":true,"messageIncludesDate":true,"messageIncludesGuests":true,"messageIncludesLocation":true,"messageIncludesIdea":true,"errors":[]}
{"width":320,"height":720,"blankBlocked":true,"spacesBlocked":true,"overflow":false,"sectionRight":320,"viewportRight":320,"openCount":1,"hostValid":true,"target":"_blank","features":"noopener,noreferrer","messageIncludesService":true,"messageIncludesDate":true,"messageIncludesGuests":true,"messageIncludesLocation":true,"messageIncludesIdea":true,"errors":[]}
{"openCount":1,"negativeBlocked":true,"service":true,"omitsDate":true,"omitsGuests":true,"omitsLocation":true,"skipTop":-80}
~~~

## Evidencia de S2.7

Chrome/Playwright, sin peticiones externas. Salida real:

~~~text
{"width":1440,"height":900,"mobile":false,"interactions":{},"overflow":false,"header":[29,14,1411,98],"headerRadius":"100px","navLinks":["#servicios","#chef","#galeria"],"ctaHash":"#cotizar","quoteExists":true,"errors":[]}
{"width":390,"height":844,"initial":{"header":[12,10,378,80],"overflow":false},"enterOpen":true,"escapeClosed":true,"focusReturned":true,"spaceOpen":true,"outsideClosed":true,"linkClosed":true,"hash":"#cotizar","focusAtQuote":true,"resizeClosed":true,"errors":[]}
{"width":320,"height":720,"initial":{"header":[12,10,308,80],"overflow":false},"enterOpen":true,"escapeClosed":true,"focusReturned":true,"spaceOpen":true,"outsideClosed":true,"linkClosed":true,"hash":"#cotizar","focusAtQuote":true,"resizeClosed":null,"errors":[]}
~~~

Repetición S2.4 a 1440×600: plato derecho termina en y=509; pie empieza en y=555.

## Evidencia de S2.8

Chrome/Playwright con red externa bloqueada. Salida real:

~~~text
{"width":1440,"height":900,"count":7,"exact":true,"overflow":false,"cardOverflow":false,"quotePx":"46.08px","note":"Comentarios compartidos sobre publicaciones de Jenny; no son reseñas verificadas de eventos.","errors":[]}
{"width":320,"height":720,"count":7,"exact":true,"overflow":false,"cardOverflow":false,"quotePx":"31px","note":"Comentarios compartidos sobre publicaciones de Jenny; no son reseñas verificadas de eventos.","errors":[]}
~~~

## Evidencia de S2.9

Chrome/Playwright con red externa bloqueada. Salida real:

~~~text
{"width":1440,"height":900,"count":6,"initialClosed":true,"firstOpened":true,"steps":4,"faqCount":6,"faqLinks":2,"overflow":false,"processRight":1440,"faqRight":1440,"mealAnswer":true,"quoteKicker":"Hablemos de tu evento · 09","errors":[]}
{"width":320,"height":720,"count":6,"initialClosed":true,"firstOpened":true,"steps":4,"faqCount":6,"faqLinks":2,"overflow":false,"processRight":320,"faqRight":320,"mealAnswer":true,"quoteKicker":"Hablemos de tu evento · 09","errors":[]}
~~~

La primera captura de escritorio mostró el título en la columna incorrecta; se corrigió y se repitió la prueba.

## Evidencia de S3.1

Chrome/Playwright sin red externa. Salida real:

~~~text
{"width":1440,"headerSyntax":true,"headerKeys":["Content-Security-Policy","X-Content-Type-Options","Referrer-Policy","X-Frame-Options","Permissions-Policy"],"remoteScripts":0,"missingLocal":[],"remoteRequests":0,"overflow":false,"heroLoaded":1600,"gsapLoaded":true,"sceneImages":[1100,1100,1100,1440,1440],"formPresent":true,"errors":[]}
{"width":390,"headerSyntax":true,"headerKeys":["Content-Security-Policy","X-Content-Type-Options","Referrer-Policy","X-Frame-Options","Permissions-Policy"],"remoteScripts":0,"missingLocal":[],"remoteRequests":0,"overflow":false,"heroLoaded":1600,"gsapLoaded":true,"sceneImages":[1100,1100,1100,1440,1440],"formPresent":true,"errors":[]}
~~~

Escaneo de archivos publicables: `{"files":46,"textFiles":25,"privatePaths":0,"secretHits":0,"webps":16,"metadataHits":0,"envExample":true,"headers":true}`. `git check-ignore -v` confirmó PRD, respuestas, HEIC y `.env` excluidos, y `.env.example` permitido. Sintaxis de `_headers` contrastada con la documentación oficial de Cloudflare Pages; falta comprobar la respuesta HTTP real tras desplegar.

## Evidencia de S3.2

Chrome/Playwright, 390 px con movimiento reducido. Salida real:

~~~text
{"width":390,"height":844,"reduced":true,"first":{"text":"Ir al contenido","visible":true},"skip":true,"serviceOpen":true,"serviceFocus":{"style":"solid","color":"rgb(37, 40, 32)","width":"3px"},"faqOpen":true,"assetBytes":2582560,"missingAlt":0,"missingDimensions":0,"brokenAnchors":0,"unlabeledControls":0,"overflow":false,"reducedAnimation":true,"sceneMotion":false,"triggers":0,"loadedImages":7,"totalImages":22,"focusOutline":"","remoteRequests":0,"errors":[]}
~~~

En modo normal el foco de un acordeón se dibuja como borde sólido de 3 px rgb(146, 118, 63). Contraste calculado: 3.78:1 sobre papel y 4.1:1 sobre fondo oscuro. Imágenes WebP totales: 2,582,560 bytes; carga inicial en Chrome 390 px: 10 de 22 imágenes, portada cargada y fuentes locales listas. No se ejecutó Lighthouse todavía.

## Evidencia de S2.10

Las frases de S2.8 no cambiaron. Tras la confirmación de Yedin, el texto visible las identifica como testimonios de clientes. Chrome/Playwright, salida real:

~~~text
{"width":1440,"height":900,"count":7,"exact":true,"overflow":false,"cardOverflow":false,"quotePx":"46.08px","note":"Testimonios de clientes que contrataron a Jenny para sus eventos.","errors":[]}
{"width":320,"height":720,"count":7,"exact":true,"overflow":false,"cardOverflow":false,"quotePx":"31px","note":"Testimonios de clientes que contrataron a Jenny para sus eventos.","errors":[]}
~~~

La salida antigua de S2.8 documenta el texto previo a esta aclaración.

## Evidencia de S3.3

Chrome/Playwright cargó la 404 con recursos locales en 1440, 390 y 320 px. Salida real móvil:

~~~text
{"width":320,"title":"Página no encontrada — Bella’s Catering","robots":"noindex, nofollow","heading":"Esta mesate espera en casa.","hero":1600,"style":"Cormorant, Georgia, serif","links":2,"overflow":false,"errors":[]}
~~~

Inspección visual confirmó el recorte circular tras corregir la altura de la imagen. Comprobación de rutas e indexación: {"absoluteAssets":["/ASSETS/brand/bellas-seal.svg","/css/base.css","/css/not-found.css","/ASSETS/brand/bellas-seal.svg","/ASSETS/images/hero-dish.webp"],"missing":[],"robots":"User-agent: *\nDisallow: /","homeNoindex":true}. Cloudflare documenta que un 404.html en la raíz se usa para errores 404, pero falta comprobar el estado HTTP real tras desplegar. Lighthouse no está instalado en el entorno y no se ejecutó.

## Evidencia de S4.1

Las cifras de la biografía usan Manrope semibold y se apilan en móvil. Chrome/Playwright, salida real:

~~~text
{"width":1440,"count":2,"font":"Manrope, Arial, sans-serif","fontSize":"36px","weight":"600","columns":"250.078px 250.078px","overflow":false,"itemOverflow":false,"errors":[]}
{"width":320,"count":2,"font":"Manrope, Arial, sans-serif","fontSize":"30px","weight":"600","columns":"274px","overflow":false,"itemOverflow":false,"errors":[]}
~~~
## Evidencia de S4.2

Se amplió la escena a siete fotos; seis pasan por el centro y la última cierra sola en el centro. El gesto rápido ya no deja la imagen a medio aparecer: Chrome/Playwright, salida real de escritorio y móvil al salir del pin:

~~~text
{"width":1440,"plates":7,"scroll":1,"animation":1,"finalOpacity":1,"finalLoaded":1100,"gap":0,"overflow":false,"errors":[]}
{"width":390,"plates":7,"scroll":1,"animation":1,"finalOpacity":1,"finalLoaded":1100,"gap":0,"overflow":false,"errors":[]}
{"reduced":true,"triggers":0,"visible":3,"overflow":false}
~~~

Los dos WebP nuevos son 1100×1100, 127854 y 85158 bytes; sin EXIF, XMP ni ICC. El cambio de oscuro a papel queda para el pulido visual final, pero no hay salto geométrico entre secciones.
## Product Explosion descartado

Yedin decidió dejar la fotografía del plato sola en la portada. /PRODUCT EXPLOTION, Blender y el render 3D quedan descartados; no son trabajo pendiente. El relevo de cinco platos con GSAP en la segunda sección sigue aprobado.

## Datos pendientes

Dominio, registro final del negocio y validación con Jenny de platos y preparaciones definitivos. Las fotos actuales se señalan como conceptuales.

## Lecciones ya pagadas

No hay bugs de implementación aún. En preparación, algunas imágenes HEIC no abrían en el visor habitual; se pudieron convertir localmente para revisar todas las referencias de Jenny.

## Evidencia de S4.3

Chrome/Playwright (.playwright/s4-3-check.cjs) con hover en las dos primeras filas. Salida real:

~~~text
{"width":1440,"first":{"open":true,"background":"rgb(38, 54, 45)","title":"rgb(255, 250, 240)","panel":"rgb(229, 225, 215)"},"second":{"open":true,"background":"rgb(38, 54, 45)"},"firstClosed":true,"overflow":false,"errors":[]}
{"width":390,"first":{"open":true,"background":"rgb(38, 54, 45)","title":"rgb(255, 250, 240)","panel":"rgb(229, 225, 215)"},"second":{"open":true,"background":"rgb(38, 54, 45)"},"firstClosed":true,"overflow":false,"errors":[]}
{"width":320,"first":{"open":true,"background":"rgb(38, 54, 45)","title":"rgb(255, 250, 240)","panel":"rgb(229, 225, 215)"},"second":{"open":true,"background":"rgb(38, 54, 45)"},"firstClosed":true,"overflow":false,"errors":[]}
~~~

## Evidencia de S4.4

Chrome/Playwright (.playwright/s4-4-check.cjs) con mouse, Tab y cambio de ancho en la misma página:

~~~text
{"width":1440,"count":4,"assets":[{"name":"gallery-buffet-wedding.webp","exists":true},{"name":"gallery-dumplings.webp","exists":true},{"name":"gallery-seafood-steak.webp","exists":true},{"name":"gallery-buffet-warm.webp","exists":true}],"hovered":{"opacity":"0.999265","title":"rgb(255, 250, 240)","weight":"600","image":true},"keyboard":{"focused":true,"opacity":"1","title":"rgb(255, 250, 240)"},"overflow":false,"errors":[]}
{"width":390,"cards":[{"opacity":"1","title":"rgb(255, 250, 240)","weight":"600","height":300},{"opacity":"1","title":"rgb(255, 250, 240)","weight":"600","height":300},{"opacity":"1","title":"rgb(255, 250, 240)","weight":"600","height":300},{"opacity":"1","title":"rgb(255, 250, 240)","weight":"600","height":300}],"overflow":false,"errors":[]}
{"width":320,"cards":[{"opacity":"1","title":"rgb(255, 250, 240)","weight":"600","height":300},{"opacity":"1","title":"rgb(255, 250, 240)","weight":"600","height":300},{"opacity":"1","title":"rgb(255, 250, 240)","weight":"600","height":300},{"opacity":"1","title":"rgb(255, 250, 240)","weight":"600","height":300}],"overflow":false,"errors":[]}
~~~
## Evidencia de S4.5

Chrome/Playwright (.playwright/s4-5-check.cjs) comprobó clic, Enter, Espacio, foto y respuesta de meal prep:

~~~text
{"width":1440,"count":6,"first":{"open":true,"background":"rgb(232, 223, 208)","border":"3px","number":"01","answer":115},"closed":true,"meal":{"open":true,"answer":true},"image":{"loaded":true,"width":1440},"overflow":false,"errors":[]}
{"width":390,"count":6,"first":{"open":true,"background":"rgb(232, 223, 208)","border":"3px","number":"01","answer":115},"closed":true,"meal":{"open":true,"answer":true},"image":{"loaded":true,"width":1440},"overflow":false,"errors":[]}
{"width":320,"count":6,"first":{"open":true,"background":"rgb(232, 223, 208)","border":"3px","number":"01","answer":115},"closed":true,"meal":{"open":true,"answer":true},"image":{"loaded":true,"width":1440},"overflow":false,"errors":[]}
~~~
## Evidencia de S4.6

Chrome/Playwright (.playwright/s4-6-fresh.cjs) con una carga nueva por viewport:

~~~text
{"width":1440,"innerWidth":1440,"doc":1440,"image":1280,"word1":[58,1368],"word2":[75,1365],"errors":[]}
{"width":760,"innerWidth":760,"doc":760,"image":1280,"word1":[30,745],"word2":[23,737],"errors":[]}
{"width":390,"innerWidth":390,"doc":390,"image":1280,"word1":[16,382],"word2":[23,367],"errors":[]}
{"width":320,"innerWidth":320,"doc":320,"image":1280,"word1":[13,314],"word2":[23,297],"errors":[]}
~~~

Se comprobaron ocho enlaces del footer: todos los internos tienen destino y el externo conserva noopener/noreferrer. La miniatura visual se revisó en escritorio y móvil.
