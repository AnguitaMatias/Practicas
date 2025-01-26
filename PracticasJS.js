// Muestra un mensaje de bienvenida en la consola
let mensajeBienvenida = '¡Bienvenido al mundo del mañana, HOY!';
console.log(mensajeBienvenida);

// Muestra un mensaje de saludo con el nombre en la consola
let nombre = 'Matias';
console.log(`¡Hola, ${nombre}!`);

// Muestra un mensaje de saludo con el nombre en una alerta
let nombre = 'Matias';
alert(`¡Hola, ${nombre}!`);

// Pregunta al usuario cuál es el lenguaje de programación que más le gusta y muestra la respuesta en la consola
let pregunta = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(pregunta);

// Realiza la suma de dos valores y muestra el resultado en la consola
let valor1 = 7;
let valor2 = 8;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

// Realiza la resta de dos valores y muestra el resultado en la consola
valor1 = 10;
valor2 = 8;
resultado = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}`);

// Verifica si la persona es mayor o menor de edad y muestra un mensaje en la consola
let edad = parseInt(prompt('Ingresa tu edad'));
let mensaje = (edad >= 18) ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(mensaje);

// Verifica si un número es positivo, negativo o cero y muestra un mensaje correspondiente
let numero = parseInt(prompt('Ingrese un número: '));
console.log(`Número ingresado: ${numero}`);
if (numero > 0) {
    alert(`El número ${numero} es positivo`);
} else if (numero < 0) {
    alert(`El número ${numero} es negativo`);
} else {
    alert('El número es 0');
}

// Muestra los números del 1 al 10 en la consola utilizando un bucle while
let n = 1;
while (n <= 10) {
    console.log(n);
    n++;
}

// Determina si una nota es aprobada o reprobada y muestra el resultado en la consola
let nota = 9;
console.log(`La nota ingresada fue ${nota}`);
let estado = (nota >= 7) ? 'Aprobado' : 'Reprobado';
console.log(estado);

// Genera un número aleatorio y lo muestra en la consola
let numeroAlea = Math.random();
console.log(`El número aleatorio es: ${numeroAlea}`);

// Genera un número entero aleatorio entre 1 y 10 y lo muestra en la consola
let numeroEnt10 = Math.floor(Math.random() * 10) + 1;
console.log(`El número entero aleatorio entre 1 y 10 es: ${numeroEnt10}`);

// Genera un número entero aleatorio entre 1 y 1000 y lo muestra en la consola
let numeroEnt1000 = Math.floor(Math.random() * 1000) + 1;
console.log(`El número entero aleatorio entre 1 y 1000 es: ${numeroEnt1000}`);
