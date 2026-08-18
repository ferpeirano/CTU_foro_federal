# CTU — Isotipo e isologo

Sistema de marca para el sitio web y para el Design System CTU. El isotipo combina
el Sol de Mayo con la representacion de un microchip: nucleo cuadrado encapsulado,
radios que salen en todas direcciones y cierran en pad circular, alternando uno
recto largo y uno quebrado en 45 grados mas corto.

**Un solo isotipo, el sol de 16 radios, en todos los tamanos.**

## Archivos

| Archivo | Contenido |
| --- | --- |
| `ctu-sol-16.svg` | Isotipo con `currentColor`: hereda la tinta al incrustarse en linea. |
| `ctu-sol-16-ink.svg` | Isotipo en slate #344552, para `<img>` sobre fondo claro. |
| `ctu-sol-16-mist.svg` | Isotipo en mist #e9eef2, para `<img>` sobre fondo oscuro. |
| `ctu-sol-16-ink-2x.png` | Raster transparente para correo y ofimatica. |
| `favicon.svg` | Favicon vectorial. |
| `favicon-32.png` `favicon-180.png` `favicon-512.png` | Pestana, iOS e instalacion en escritorio. |
| `ctu-logo.css` | Los cuatro bloqueos como componente CSS. |
| `ctu-logo.html` | Markup listo para copiar, incluidos los `<link>` de iconos. |

## Tipografias

Sigla en **Orbitron 900**, expandida 7 % y con prosa abierta 7 %. Textos en
**Work Sans** 500 para FORO FEDERAL y 400 para la linea descriptiva. Las dos son
de licencia abierta y se cargan desde Google Fonts.

## Bloqueos y tamanos minimos

| Bloqueo | Minimo | Uso |
| --- | --- | --- |
| Vertical extendida | 104 px de alto | Portada, pie de pagina, documentos. |
| Vertical | 72 px de alto | Tarjetas, placas, redes. |
| Horizontal | 40 px de alto | Barras de navegacion. |
| Isotipo / placa | 24 px | Avatar, app icon, favicon, sello. |

## Reglas

- Una sola tinta por aplicacion: slate #344552 sobre fondo claro, mist #e9eef2 sobre
  fondo oscuro. El isologo no lleva contorno ni sombra.
- Area de resguardo: el lado del encapsulado en los cuatro costados.
- El encapsulado siempre queda a escuadra. El sol no se rota.
- El isotipo no baja de 24 px. Por debajo de ese tamano se usa el favicon, que es el
  mismo dibujo rasterizado a medida.
- La linea descriptiva nunca baja de 10 px. Si no entra, se usa el bloqueo vertical.

## Integracion en el Design System CTU

El componente `Logo` del sistema expone hoy tres recortes del lockup anterior
(`full`, `compact`, `mark`) apuntando a un PNG. La equivalencia es directa:
`full` -> vertical extendida, `compact` -> vertical, `mark` -> isotipo, y la
variante `horizontal` se agrega para barras de navegacion. Al reemplazar los
archivos, el componente pasa a servir SVG y deja de depender del raster.

## Pendiente de arte final

La geometria es exacta y esta generada por calculo. Antes de cerrar el manual
conviene ajustar a mano los quiebres de 45 grados, que hoy son geometricos y no
opticos, y convertir la sigla a curvas reemplazando la expansion del 7 % por
astiles redibujados.
