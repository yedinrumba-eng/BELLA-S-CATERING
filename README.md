# Bella’s Catering

Sitio en español de Bella’s Catering, servicio de catering, chef privado y asesoría gastronómica dirigido por Jenny Pereyra en Santiago de los Caballeros, República Dominicana.

## Estado

Proyecto en construcción. La portada, los servicios y la biografía se trabajan por etapas; la galería de platos y buffet requiere selección y aprobación de imágenes antes de incorporarla. Todavía no hay sitio publicado.

## Vista local

No se requiere instalar dependencias para abrir el sitio:

```powershell
python -m http.server 8000
```

Visita `http://localhost:8000`. El sitio consta de HTML, CSS, JavaScript y assets locales. La animación usa una copia local de GSAP y ScrollTrigger. Tailwind Play CDN se carga para la vista de desarrollo; el contenido y el diseño básico siguen siendo legibles sin conexión.

## Estructura pública

- `index.html`: contenido visible y navegación.
- `css/` y `js/`: diseño y movimiento.
- `ASSETS/brand/`: sello vectorial original.
- `ASSETS/fonts/`: fuentes alojadas localmente y licencias.
- `ASSETS/images/`: imágenes optimizadas elegidas para la web.

## Seguridad y privacidad

Este repositorio es público. No contiene claves, contraseñas, archivos `.env`, respuestas del cuestionario de negocio ni fotos originales de referencia. El archivo `.gitignore` excluye esos materiales. Antes de cada commit y del primer push se revisan los archivos preparados con `git diff --cached --name-only` y una búsqueda de secretos. El número de contacto comercial que se muestre en la web será público por definición para permitir consultas; ningún dato enviado por el visitante se almacena en este sitio.

Las imágenes generadas de Jenny y de platos son material editorial. Su selección para una galería o para describir preparaciones concretas requiere aprobación de Bella’s Catering. No se copian imágenes, textos ni código de las webs usadas como referencias visuales.

## Próximo paso

Completar S2.1 y pausar antes de montar la galería. Después, seleccionar con Yedin los platos a la carta y los buffets que representan la oferta real.
