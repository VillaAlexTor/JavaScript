// Ejercicio 9: Calculadora con funciones
// Crea funciones para: sumar, restar, multiplicar y dividir
function calculadora(a, b){
	return {
        "Suma: ": a + b,
        "Resta: ": a - b,
        "Multiplicacion: ": a * b, 
        "Division: ": a / b,
    } 
}
let res = calculadora(6,8);
console.log(res);

// Ejercicio 10: Factorial
// Crea una función que calcule el factorial de un número
function factorial(a){
    let fact = 1;
    for(let i = 1; i <= a; i++){
        fact = fact * i;
    }
    return fact;
}
let res1 = factorial(3);
console.log(res1);

// Ejercicio 11: Números primos
// Función que determine si un número es primo
function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }  
    return true;
}
let res2 = esPrimo(7);
console.log(res2);