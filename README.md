# Bella’s Catering

Sitio en español para Bella’s Catering, el servicio de catering y cocina de la chef Jenny Pereyra en Santiago de los Caballeros, República Dominicana.

## Estado y vista local

La página incluye portada gastronómica, escena de platos al hacer scroll, biografía, servicios desplegables, galería, sección fotográfica, proceso, preguntas frecuentes, testimonios de clientes y formulario de cotización por WhatsApp. La escena editorial de Jenny aparece entre las preguntas y los testimonios; el footer negro cierra con navegación, contacto y la marca a gran escala. Meal prep figura como servicio en exploración, sin planes ni compra anunciados. El sitio todavía no está publicado.

No se requieren dependencias para verlo. Desde esta carpeta:

```powershell
python -m http.server 8000
```

Abre `http://localhost:8000`. HTML, CSS, JavaScript, fuentes, fotografías optimizadas y GSAP/ScrollTrigger se sirven localmente.

## Estructura pública

- `index.html`: contenido y navegación.
- `css/` y `js/`: diseño e interacciones.
- `ASSETS/brand/`: sello vectorial.
- `ASSETS/fonts/`: fuentes locales y licencias.
- `ASSETS/images/`: imágenes WebP optimizadas.

## Seguridad y privacidad

Este repositorio es público. El PRD, las respuestas privadas, fotos originales, `.env`, credenciales y archivos temporales están excluidos por `.gitignore`. `.env.example` indica que la página no requiere claves. El formulario compone el texto en el navegador y abre WhatsApp solo cuando la persona pulsa el botón; la página no almacena ni envía por sí misma lo escrito. El número comercial publicado sirve para recibir consultas.

`_headers` define una política de contenido y otras cabeceras para Cloudflare Pages. Antes del primer push se debe revisar el conjunto exacto de archivos preparados y buscar secretos o datos personales. Las fotografías generadas son arte editorial y se identifican como imágenes conceptuales; no documentan eventos reales. No se copian recursos de las webs tomadas como referencia visual.

## Publicación pendiente

`robots.txt` y la etiqueta noindex mantienen el sitio fuera de buscadores durante la revisión. Cuando exista dominio definitivo y Bella’s autorice la publicación, se añadirán URL canónica, imagen social absoluta y sitemap; también se comprobarán las cabeceras HTTP, la respuesta 404 y Lighthouse en el despliegue. No se ha hecho push ni despliegue.