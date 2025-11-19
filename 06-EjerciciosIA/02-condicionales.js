// Ejercicio 3: Par o impar
// Pide un número al usuario y determina si es par o impar

let numero = prompt("Introduce un numero: ");
let parNum = parseInt(numero);
if (parNum % 2 === 0){
    console.log("El número " + parNum + " es par.");
}else if (parNum % 2 !== 0){
    console.log("El número " + parNum + " es impar.");
}else{
    console.log("No has introducido un número válido.");
}

// Ejercicio 4: Calculadora de notas
// Dada una nota del 0 al 10, muestra:
// 0-4: Suspenso, 5-6: Aprobado, 7-8: Notable, 9-10: Sobresaliente
let nota = prompt("Introduce una nota del 0 al 10: ");
let calificacion = parseFloat(nota);
if ( 0 < calificacion < 4){
    console.log("Suspenso");
}else if (5 <= calificacion <= 6){
    console.log("Aprobado");
}else if (7 <= calificacion <= 8){
    console.log("Notable");
}else if (9 <= calificacion <= 10){
    console.log("Sobresaliente");
}else{
    console.log("No has introducido una nota válida.");
}