// Ejercicio 1: Calculadora simple
// Crea variables para dos números y muestra:
// - Suma, resta, multiplicación y división
// - El resto de la división
// - El resultado de elevar el primero al segundo

let numero_1 = 9;
let numero_2 = 3;
function calculadora(num1, num2) {
    console.log("Suma: " + (num1 + num2));
    console.log("Resta: " + (num1 - num2));
    console.log("Multiplicación: " + (num1 * num2));
    console.log("División: " + (num1 / num2));
    console.log("Resto de la división: " + (num1 % num2));
    console.log("Elevado: " + (num1 ** num2));
}
calculadora(numero_1, numero_2);

// Ejercicio 2: Intercambio de valores
// Dadas dos variables a = 5 y b = 10, intercambia sus valores
let a = 5;
let b = 10;
console.log("Antes del intercambio: a =", a, ", b =", b);
let c = a;
a = b;
b = c;
console.log("Después del intercambio: a =", a, ", b =", b);