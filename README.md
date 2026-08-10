# Foro Federal CTU

Sitio web del **Foro Federal de Ciencia, Tecnología y Universidad** (Foro Federal CTU).
Lema: Ciencia Orientada, Tecnología Nacional, Universidad Crítica.

Próximo encuentro: **9 y 10 de octubre de 2026**, Universidad Nacional del Chaco Austral (UNCAUS), Sede Resistencia, Resistencia, Chaco.

## Secciones

- **Inicio** — presentación del Foro, convocatoria al tercer Encuentro Nacional, el lema y las cifras de las 2das Jornadas.
- **Documento** — carta de presentación, acceso al PDF y los siete ejes de conclusiones y propuestas.
- **Reuniones** — los tres encuentros: Posadas (junio de 2025), Bariloche (mayo de 2026) y Resistencia (octubre de 2026).
- **Noticias** — novedades del Foro.
- **Alianzas y apoyos** — las doce universidades nacionales convocantes.
- **Contacto** — correo electrónico y formulario de consultas y aportes.

## Estructura

```
index.html    el sitio completo (una sola página con navegación por hash)
support.js    runtime necesario para renderizar index.html
assets/       documento en PDF, video del hero, imagen de Resistencia, logo
_ds/          sistema de diseño CTU: tokens, estilos y componentes
```

La navegación usa rutas con hash: `#/`, `#/documento`, `#/reuniones`, `#/noticias`, `#/alianzas`, `#/contacto`.

## Cómo verlo

Es un sitio estático, sin build ni dependencias. Alcanza con servir la carpeta:

```
python3 -m http.server
```

y abrir `http://localhost:8000`. Para publicarlo con GitHub Pages: Settings → Pages → Deploy from a branch, rama `main`, carpeta `/ (root)`.

## Contacto

jornadasCTI@unrn.edu.ar
