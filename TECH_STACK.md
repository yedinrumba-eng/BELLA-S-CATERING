# Stack — Bella’s Catering

Carril A: una landing en español, mantenida por Yedin, sin datos guardados.

| Capa | Decisión | Por qué |
|---|---|---|
| Estructura | HTML semántico y JavaScript simple | Una página y contenido controlado por Yedin. |
| Estilos | CSS propio local | Las clases visibles ya tienen reglas propias; se retiró Tailwind Play CDN porque añadía un script externo sin uso. |
| Tipografía | Cormorant Garamond y Manrope locales | Titular editorial y lectura clara sin fuente remota. |
| Movimiento | GSAP + ScrollTrigger locales | Control de la escena gastronómica sin dependencia de red. |
| Imágenes | WebP local en ASSETS/images/ desde archivos dados por Yedin | Propiedad de los assets y menos peso. |
| Contacto | Enlace `wa.me` preparado por formulario | Jenny responde personalmente; no hace falta backend. |
| Hosting | Cloudflare Pages | Elegido por Yedin para el dominio propio. |
| Datos y secretos | Ninguno | No se almacenan datos ni se usan claves. |

## Descartado y por qué

| Opción | Motivo |
|---|---|
| Astro o CMS | Una página en español mantenida por Yedin. |
| Base de datos o backend | El contacto sale hacia WhatsApp. |
| Pago en línea | Jenny no lo pidió para esta versión. |
| Assets de Aveline o Sofra | Son referencias visuales; la web usará material de Bella’s. |
| Tailwind Play CDN | Ninguna clase del HTML depende de utilidades Tailwind; cargar ese script externo solo ampliaba la superficie de riesgo. |

## Puesta en marcha

Abrir `index.html` mediante servidor local. Más adelante conectar el repositorio Git a Cloudflare Pages y configurar el dominio de Yedin. Antes de publicar: comprobar móvil, teclado, enlaces, mensaje de WhatsApp, carga y permisos de imágenes. No hay credenciales necesarias en este slice.
