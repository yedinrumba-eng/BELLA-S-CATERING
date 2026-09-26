# Bella’s Catering

Sitio en español de Bella’s Catering, servicio de catering, chef privado y asesoría gastronómica dirigido por Jenny Pereyra en Santiago de los Caballeros, República Dominicana.

## Estado

Proyecto en construcción. Portada gastronómica, animación, servicios y biografía con retrato de Jenny están implementados. La galería conceptual de platos y buffet ya está incorporada; los nombres y preparaciones finales quedan sujetos a revisión con Jenny. El formulario prepara un mensaje de WhatsApp localmente, sin guardar ni enviar datos por su cuenta. Todavía no hay sitio publicado.

## Vista local

No se requiere instalar dependencias para abrir el sitio:

```powershell
python -m http.server 8000
```

Visita `http://localhost:8000`. El sitio consta de HTML, CSS, JavaScript y assets locales. La animación usa una copia local de GSAP y ScrollTrigger. Los estilos y scripts visuales son locales; el sitio se puede revisar sin cargar bibliotecas externas.

## Estructura pública

- `index.html`: contenido visible y navegación.
- `css/` y `js/`: diseño y movimiento.
- `ASSETS/brand/`: sello vectorial original.
- `ASSETS/fonts/`: fuentes alojadas localmente y licencias.
- `ASSETS/images/`: imágenes optimizadas elegidas para la web.

## Seguridad y privacidad

Este repositorio es público. No contiene claves, contraseñas, archivos `.env`, respuestas del cuestionario de negocio ni fotos originales de referencia. El archivo `.gitignore` excluye esos materiales; `.env.example` muestra que no se necesitan credenciales. `_headers` define una política de contenido y cabeceras de privacidad para Cloudflare Pages. Antes de cada commit y del primer push se revisan los archivos preparados con `git diff --cached --name-only` y una búsqueda de secretos. El número de contacto comercial que se muestre en la web será público por definición para permitir consultas; ningún dato enviado por el visitante se almacena en este sitio.

Las imágenes generadas de Jenny y de platos son material editorial. Su selección para una galería o para describir preparaciones concretas requiere aprobación de Bella’s Catering. No se copian imágenes, textos ni código de las webs usadas como referencias visuales.

## Próximo paso

Sigue la revisión de accesibilidad, rendimiento y SEO antes de publicar. Las cabeceras deben comprobarse en Cloudflare Pages después del despliegue.
