Parte 1: Cuestionario Teórico

Responde las siguientes preguntas con tus propias palabras:

1. Funciones en JavaScript

¿Qué es una función en JavaScript y para qué se usa?

Una función en JavaScript es un bloque de código diseñado para realizar una tarea específica. Se utiliza para organizar, reutilizar y mantener más ordenado el programa. Gracias a ellas, podemos ejecutar la misma lógica varias veces sin tener que reescribir el código.

¿Cuál es la diferencia entre una función declarada y una función de flecha (=>)?

Una función declarada se define usando la palabra clave function, por ejemplo function miFuncion() {}, y puede “subir” de nivel por el hoisting, o sea, el intérprete la reconoce incluso antes de llegar a esa línea en tiempo de ejecución.
En cambio, una función de flecha (arrow function) se crea como una expresión, por ejemplo const miFuncion = () => {}, y no se “mueve” por hoisting de la misma forma. Además, las funciones de flecha tienen un comportamiento especial con la palabra clave this, manteniendo el contexto en el que se crean.

¿Qué es el return en una función y cuándo se usa?

return es la instrucción que indica qué valor o resultado debe “devolver” la función una vez que termina de procesar. Se usa cuando necesitamos obtener un resultado concreto de la operación que realizó la función, de forma que podamos almacenarlo o usarlo en otra parte del código.

Explica la diferencia entre parámetros y argumentos en una función.

Los parámetros son las variables que se especifican en la definición de la función; por ejemplo, en function sumar(a, b) {}, a y b son parámetros.
Los argumentos son los valores reales que pasamos a la función cuando la llamamos; por ejemplo, sumar(3, 5), aquí 3 y 5 son los argumentos.

¿Cuál es la diferencia entre scope global y scope local en JavaScript?

El scope global es el espacio donde las variables son accesibles desde cualquier parte del programa. Si declaras una variable fuera de todas las funciones, pertenece al scope global.
El scope local es el ámbito limitado a una función o bloque de código. Las variables declaradas dentro de una función solo se pueden usar ahí, y no están disponibles fuera de ella.

¿Qué es una función anónima y cuándo se usa?

Una función anónima es aquella que no tiene un nombre después de la palabra clave function o en la expresión de flecha. Por ejemplo: function() {} o () => {}. Se usan mucho cuando quieres pasar funciones como argumentos a otros métodos (por ejemplo en métodos de arrays como map o filter) o cuando no necesitas invocar la función varias veces de forma directa, sino que la requieres en el momento.

2. Arrays y Métodos de Arrays

¿Qué es un array en JavaScript y cómo se declara?

Un array es una lista ordenada de elementos. En JavaScript, se declaran usando corchetes [].

¿Cuál es la diferencia entre push() y unshift()?

push() añade uno o más elementos al final del array, mientras que unshift() los añade al inicio. Por ejemplo, si tienes const numeros = [2, 3] y haces numeros.push(4), el array queda [2, 3, 4]. En cambio, si haces numeros.unshift(1), el array se convierte en [1, 2, 3].

¿Para qué se usa splice() y slice()? ¿En qué se diferencian?

splice() modifica el array original: puedes eliminar elementos, reemplazarlos o insertar nuevos en una posición específica.
slice() no modifica el array original, sino que devuelve una copia parcial del array, basada en los índices que le indiques.
«Por ejemplo, miArray.splice(1, 2) eliminaría dos elementos desde la posición 1 del array original. En cambio, miArray.slice(1, 3) crearía un nuevo array con los elementos desde la posición 1 hasta antes de la 3, sin afectar el array original.

¿Qué hace el método map() en un array?

map() crea un nuevo array aplicando una función que definas a cada elemento del array original. Deja el array original sin cambios.

¿Cómo funciona filter() y en qué se diferencia de find()?

filter() retorna un nuevo array con todos los elementos que cumplan la condición que se especifique. Si ningún elemento cumple la condición, devuelve un array vacío.
find() retorna solo el primer elemento que cumpla la condición y, si no encuentra ninguno, devuelve undefined.
Por ejemplo, si quieres encontrar personas mayores de 18 años, filter() te devolverá un array con todas las personas que cumplan ese requisito, mientras que find() solo te regresará la primera persona que lo cumpla.

Explica la diferencia entre some() y every().

some() verifica si al menos un elemento del array cumple la condición dada. Si es así, devuelve true; de lo contrario, false.
every() comprueba si todos los elementos cumplen la condición. Devuelve true solo si ninguno de ellos falla la prueba; basta que uno no la cumpla para que devuelva false.
Por ejemplo, numeros.some(num => num > 5) será true si hay al menos un número mayor a 5, mientras que numeros.every(num => num > 5) solo será true si todos son mayores a 5.

¿Qué hace reduce() y cómo funciona?

reduce() toma una función que combina todos los elementos del array en un único valor. Por ejemplo, si quieres sumar todos los números de un array, reduce() te permite acumular cada valor hasta obtener el resultado final. Funciona recibiendo un acumulador y el valor actual en cada iteración, y tú decides la operación a realizar.