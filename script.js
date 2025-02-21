// EJERCICIO 1: Funciones en JavaScript

// 1. Función tradicional para calcular descuento
function calcularDescuento(precio, descuento) {
  const precioFinal = precio - precio * (descuento / 100);
  return precioFinal;
}

// Probamos la función con precio=100 y descuento=20%
console.log("Ejercicio 1:", calcularDescuento(100, 20));
// Debería mostrar 80

// 2. Función de flecha para calcular descuento
const calcularDescuentoFlecha = (precio, descuento) =>
  precio - precio * (descuento / 100);

// Probamos la función de flecha con precio=100 y descuento=20%
console.log("Ejercicio 1:", calcularDescuentoFlecha(100, 20));
// Debería mostrar 80

// EJERCICIO 2: Uso de Scope en Funciones

let mensaje = "Este es un mensaje global";

function pruebaScope() {
  let mensajeInterno = "Este es un mensaje interno";
  console.log("Ejercicio 2:", mensajeInterno);
}

pruebaScope();

// Intenta descomentar la siguiente línea para ver el error en la consola.
// console.log("Ejercicio 2 - Fuera de la función:", mensajeInterno);
// ReferenceError: mensajeInterno is not defined (porque está fuera de su scope)

// EJERCICIO 3: Métodos de Arrays

const productos = ["Laptop", "Mouse", "Teclado", "Monitor", "Auriculares"];

// 1. Añade "Webcam" al final y "Micrófono" al inicio
productos.push("Webcam");
productos.unshift("Micrófono");
console.log("Ejercicio 3:", productos);

// 2. Elimina el primer y el último elemento del array
productos.shift(); // Elimina el primer elemento
productos.pop(); // Elimina el último elemento
console.log("Ejercicio 3", productos);

// 3. Reemplazar "Teclado" por "Tablet" con splice()
const indexTeclado = productos.indexOf("Teclado");
if (indexTeclado !== -1) {
  productos.splice(indexTeclado, 1, "Tablet");
}
console.log("Ejercicio 3:", productos);

// 4. Crear un nuevo array con los dos primeros elementos usando slice()
const primerosProductos = productos.slice(0, 2);
console.log("Ejercicio 3:", primerosProductos);

// 5. Encontrar "Monitor" con indexOf() y includes()
const indexMonitor = productos.indexOf("Monitor");
console.log("Ejercicio 3:", indexMonitor); // Índice de "Monitor" o -1 si no está

const existeMonitor = productos.includes("Monitor");
console.log("Ejercicio 3:", existeMonitor); // true si está, false si no

// EJERCICIO 4: Métodos Avanzados de Arrays

const personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 17 },
  { nombre: "Ana", edad: 22 },
];

// 1. Crear un nuevo array con solo los nombres usando map()
const nombres = personas.map((persona) => persona.nombre);
console.log("Ejercicio 4:", nombres);

// 2. Filtrar a las personas mayores de 18 años con filter()
const mayoresDe18 = personas.filter((persona) => persona.edad > 18);
console.log("Ejercicio 4:", mayoresDe18);

// 3. Buscar la primera persona que tenga más de 28 años con find()
const personaMayor28 = personas.find((persona) => persona.edad > 28);
console.log("Ejercicio 4:", personaMayor28);

// 4. Verificar si hay alguna persona menor de edad con some()
const hayMenoresDeEdad = personas.some((persona) => persona.edad < 18);
console.log("Ejercicio 4:", hayMenoresDeEdad);

// 5. Comprobar si todas las personas son mayores de 18 años con every()
const todasMayoresDe18 = personas.every((persona) => persona.edad > 18);
console.log("Ejercicio 4:", todasMayoresDe18);

// 6. Calcular el promedio de edad usando reduce()
const promedioEdad =
  personas.reduce((acumulador, persona) => acumulador + persona.edad, 0) /
  personas.length;
console.log("Ejercicio 4:", promedioEdad);
