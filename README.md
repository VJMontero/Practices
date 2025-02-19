Parte 1: Cuestionario Teórico

Responde las siguientes preguntas con tus propias palabras:

1. Posicionamiento en CSS

1. Explica la diferencia entre position: relative, absolute, fixed y sticky.

relative: El elemento se posiciona en relación con su ubicación normal. Si se mueve, su espacio original sigue ocupándose.
absolute: Se posiciona en relación con el primer ancestro que tenga relative o, si no lo hay, con la ventana del navegador. No ocupa espacio en el flujo normal del documento.
fixed: Permanece en la misma posición en la pantalla sin importar el desplazamiento (scroll).
sticky: Funciona como relative hasta que el usuario hace scroll y alcanza un punto específico, donde se comporta como fixed.

2. ¿En qué situaciones usarías absolute en lugar de relative?

Cuando es necesario colocar un elemento en una ubicación específica dentro de su contenedor sin afectar el resto del diseño.
Ejemplo:
- Posicionar un ícono dentro de un botón.
- Colocar texto sobre una imagen en un banner.
Si se usa relative, el espacio del elemento sigue afectando el diseño, mientras que con absolute, el elemento queda completamente independiente.

3. ¿Qué ocurre cuando un elemento con position: absolute está dentro de un relative?

Cuando un elemento absolute está dentro de un relative, su posición se ajusta en relación con ese contenedor en lugar de la ventana del navegador.

4. ¿Cómo funciona sticky y por qué es útil en el diseño web?

El valor sticky permite que un elemento se mantenga fijo en la pantalla después de que el usuario haga scroll hasta cierto punto.
Es útil porque se usa en:
Menús de navegación.
Encabezados de secciones en tablas o listas.

2. Diseño con CSS Grid

5. ¿Qué es CSS Grid y en qué se diferencia de Flexbox?

CSS Grid es un sistema de diseño bidimensional, lo que significa que permite organizar elementos en filas y columnas.
En cambio Flexbox es un sistema unidimensional, ya que solo permite distribuir elementos en una fila o en una columna.

6. ¿Cuándo es más recomendable usar Grid en lugar de Flexbox en un diseño web?

Se recomienda usar Grid cuando se necesita un diseño estructurado en filas y columnas, como en:
- Tablas de precios con diferentes opciones.
- Dashboards con varias secciones.
- Diseños de página complejos con sidebar y contenido principal.

7. Explica qué hacen las siguientes propiedades de Grid:

grid-template-columns Define cuántas columnas tendrá la cuadrícula y cuál será el ancho de cada una.
grid-template-rows Define cuántas filas tendrá la cuadrícula y la altura de cada una.
grid-gap Especifica el espacio entre las filas y columnas dentro de la cuadrícula.
grid-area Permite asignar un nombre a una celda o conjunto de celdas dentro de la cuadrícula, facilitando la organización del diseño.

8. ¿Qué es grid-template-areas y cómo se usa?

Es una forma de organizar el diseño usando nombres en lugar de medidas exactas.

3. Diseño Responsivo con Media Queries

9. ¿Qué es una Media Query y cómo se usa en CSS?

Una Media Query es una regla en CSS que permite aplicar diferentes estilos según las características del dispositivo del usuario, como el tamaño de la pantalla, la resolución o la orientación.
Se utiliza para hacer que un sitio web se vea bien en distintos dispositivos, desde computadoras hasta teléfonos móviles, ajustando el diseño automáticamente.

10. ¿Qué significa diseño Mobile First y Desktop First? ¿Cuál crees que es más eficiente?

Mobile First: Se diseña primero para dispositivos móviles y luego se adapta a pantallas más grandes.
Desktop First: Se diseña primero para pantallas grandes y luego se ajusta a móviles.
El enfoque Mobile First es más eficiente porque mejora el rendimiento y la experiencia en dispositivos móviles, que son los más usados hoy en día.

11. Explica la diferencia entre unidades relativas (vw, vh, %, em, rem) y en qué casos se recomienda cada una.

vw	es 1% del ancho de la pantalla, se usa en Diseños adaptables a la ventana.
vh	es 1% del alto de la pantalla, se usa en secciones que ocupan toda la altura.
%	es Relativo al tamaño del contenedor padre, se usa en Diseños flexibles.
em	es Relativo al tamaño de fuente del padre, se usa en botones, márgenes.
rem	es Relativo al tamaño de fuente raíz, se usa en tamaños de texto globales.

12. ¿Cómo harías que un diseño se vea bien en pantallas de menos de 768px usando Media Queries?

Se usaría una media query para modificar la disposición de los elementos:

@media (max-width: 768px) {
  .servicios-contenido {
    grid-template-columns: 1fr;
  }
}
 Esto haría que en móviles, en lugar de varias columnas, los elementos se apilen en una sola.#   7 7  
 