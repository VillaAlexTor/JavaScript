// Ejercicio 12: Manipulación de arrays
// Dado un array de números:
// - Encuentra el máximo y mínimo
// - Calcula el promedio
// - Filtra los números pares
// - Duplica todos los valores
// Ejercicio 12: Manipulación de arrays
// Dado un array de números:
// - Encuentra el máximo y mínimo
// - Calcula el promedio
// - Filtra los números pares
// - Duplica todos los valores

let numeros = [3, 7, 2, 9, 4, 6, 1, 8, 5];

// 1. Encontrar máximo
function encontrarMax(arr) {
    let max = arr[0]; 
    for (let n of arr) {
        if (n > max) {
            max = n;
        }
    }
    return max;
}

// 2. Encontrar mínimo
function encontrarMin(arr) {
    let min = arr[0];
    for (let n of arr) {
        if (n < min) {
            min = n;
        }
    }
    return min;
}

// 3. Calcular promedio
function calcularPromedio(arr){
    let suma = 0;
    for (let n of arr) {
        suma += n;
    }
    return suma / arr.length;
}

// 4. Filtrar números pares
function filtrarPares(arr) {
    let pares = [];
    for (let n of arr) {
        if (n % 2 === 0) {
            pares.push(n);
        }
    }
    return pares;
}

// 5. Duplicar todos los valores
function duplicarValores(arr) {
    let duplicados = [];
    for (let n of arr) {
        duplicados.push(n * 2);
    }
    return duplicados;
}

// Ejecutar todas las operaciones
let resMax = encontrarMax(numeros);
console.log("El número máximo es: " + resMax); 

let resMin = encontrarMin(numeros);
console.log("El número mínimo es: " + resMin); 

let promedio = calcularPromedio(numeros);
console.log("El promedio es: " + promedio);

let numerosPares = filtrarPares(numeros);
console.log("Números pares: " + numerosPares);

let numerosDuplicados = duplicarValores(numeros);
console.log("Números duplicados: " + numerosDuplicados);

// Ejercicio 13: Buscar elemento
// Función que busque un elemento en un array y devuelva su posición