# Bella’s Catering — reglas del proyecto

Lee `HANDOFF.md` antes de tocar código. Las respuestas de Jenny están en `PRD.MD`; las respuestas originales están en `docs/PRD-RESPUESTAS.md`.

## Alcance actual

S1.1–S2.10 y S3.1–S3.3 cerrados. S3.4 publicación pendiente del dominio y del pedido expreso de push. No publicar ni hacer push sin pedido expreso.

## Convenciones

- Sitio estático, una página en español; código y nombres internos en inglés.
- Archivos de código de alrededor de 300 líneas como máximo; CSS separado por responsabilidad.
- Fotos usadas por el sitio viven en `ASSETS/images/` y fueron dadas por Yedin o generadas para el proyecto. No reutilizar imágenes, textos o código de las referencias Framer.
- Datos del negocio salen del PRD. No inventar reseñas, permisos, RNC, paquetes ni precios.
- La acción principal es pedir cotización. Enlaces de navegación apuntan solo a secciones existentes.
- Interacción por teclado y modo de movimiento reducido siempre.

## Decisiones

- **D1** — Una landing estática, porque el alcance es una página sin CMS ni cuentas.
- **D2** — Aveline guía composición y Sofra los recortes; assets y textos son de Bella’s para tener identidad propia.
- **D3** — Cloudflare Pages, porque Yedin eligió esa plataforma y dominio propio.
- **D4** — Cormorant Garamond y Manrope locales, porque equilibran carácter editorial y lectura móvil sin depender de una fuente remota.
- **D5** — Fotos generadas de Jenny sirven como arte editorial, no como evidencia de un evento real; evita prometer escenas documentales que no ocurrieron.
- **D6** — GSAP y ScrollTrigger locales, porque la animación acordada debe funcionar sin depender de un CDN en producción.
- **D7** — Servicios agrupados en cinco bloques, porque presentan toda la oferta confirmada por Jenny sin convertir la página en un catálogo inventado.
- **D8** — Galería con seis imágenes conceptuales etiquetadas, porque Yedin las aportó como dirección visual y los platos finales se personalizan por evento.
- **D9** — El plato ocupa la portada y el retrato de Jenny la biografía, porque la primera pantalla vende gastronomía y la segunda presenta a quien la crea; descripciones de 16–18 px mejoran la lectura.
- **D10** — Cinco platos locales se relevan durante el scroll dentro de una escena de una pantalla, con componentes decorativos en las transiciones. GSAP recalcula las posiciones al cambiar el ancho y ofrece tres platos quietos con movimiento reducido; así la escena se mantiene encuadrada sin imponer animación a quien la desactiva.
- **D11** — Los cinco servicios confirmados se abren en un acordeón con foto conceptual; meal prep aparece separado como «En exploración», sin precio, fecha ni compra, porque Jenny todavía lo considera.
- **D12** — El formulario construye un mensaje de WhatsApp en el navegador tras la acción del visitante y no almacena datos; meal prep queda fuera de la lista de contratación mientras no esté confirmado.

- **D13** — La navegación adopta una cápsula clara con enlaces propios y botón al formulario; permanece en el flujo para no cubrir la escena de platos.

- **D14** — Criterio inicial superado por D18: faltaba confirmar si las personas habían contratado a Jenny.

- **D15** — El proceso se describe en cuatro pasos sin plazos ni condiciones inventadas; las preguntas frecuentes aclaran el alcance confirmado y que meal prep sigue en exploración.

- **D16** — CSS local sin Tailwind Play CDN: el HTML no usa utilidades de Tailwind, por lo que quitar el script externo reduce peticiones y superficie de riesgo. _headers protege la publicación estática y .gitignore separa PRD, credenciales y fotos originales del repositorio público.

- **D17** — El foco de teclado usa un dorado más oscuro, con contraste mayor a 3:1 tanto sobre papel claro como sobre fondo oscuro. La auditoría recorre teclado, enlaces, imágenes y movimiento reducido en Chrome.

- **D18** — Las siete frases se muestran como testimonios de clientes, porque Yedin confirmó que esas personas contrataron a Jenny para sus eventos. Se mantienen las citas y atribuciones originales, sin añadir resultados ni detalles de servicio.

- **D19** — robots.txt y noindex mantienen el sitio fuera de buscadores durante la revisión; la URL canónica, el sitemap y los metadatos sociales absolutos esperan el dominio definitivo para no publicar direcciones inventadas. 404.html permite una respuesta propia en Cloudflare Pages.

## Verificación

Ejecutar cada slice y pegar la salida real de su comprobación en `HANDOFF.md` y `PROGRESO.md` antes de marcarlo cerrado. Comprobar escritorio y móvil con navegador real. `git status` antes de cada commit; nunca push automático.

## Descartado y por qué

Astro/CMS y backend, porque esta primera página no los necesita. Pagos, porque la venta se cierra mediante cotización. Imágenes de Aveline y Sofra, porque son referencias, no assets autorizados.
