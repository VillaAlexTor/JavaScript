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