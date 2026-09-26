# Bella’s Catering — reglas del proyecto

Lee `HANDOFF.md` antes de tocar código. Las respuestas de Jenny están en `PRD.MD`; las respuestas originales están en `docs/PRD-RESPUESTAS.md`.

## Alcance actual

Construir S1.1, S1.2, S1.3 y S2.1 en orden. **Parar antes de S2.2, la galería**, para elegir platos a la carta y buffet con Yedin. No publicar ni hacer push sin pedido expreso.

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
- **D5** — Fotos generadas de Jenny sirven como arte editorial, no como evidencia de un evento real; evita prometer escenas documentales que no ocurrieron.`n- **D6** — GSAP y ScrollTrigger locales, porque la animación acordada debe funcionar sin depender de un CDN en producción.

## Verificación

Ejecutar cada slice y pegar la salida real de su comprobación en `HANDOFF.md` y `PROGRESO.md` antes de marcarlo cerrado. Comprobar escritorio y móvil con navegador real. `git status` antes de cada commit; nunca push automático.

## Descartado y por qué

Astro/CMS y backend, porque esta primera página no los necesita. Pagos, porque la venta se cierra mediante cotización. Imágenes de Aveline y Sofra, porque son referencias, no assets autorizados.
