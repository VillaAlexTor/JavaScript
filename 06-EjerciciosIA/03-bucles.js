// Ejercicio 6: Contador
// Muestra los números del 1 al 10 usando for, while y do-while
for (let i = 1; i <=10; i++){
    console.log("For: " + i);
    i++;
}
let j = 1;
while (j <= 10){
    console.log("While: " + j);
    j++;
}
let k = 1;
do {
    console.log("Do-While: " + k);
    k++;
}while (k <= 10);
// Ejercicio 7: Suma acumulativa
// Suma todos los números del 1 al 100 y muestra el resultado
for(let n = 1, suma2 = 0; n <= 100; n++){
    suma2 += n;
    if (n === 100){
        console.log("Suma acumulativa: " + suma2);
    }
}
// Ejercicio 8: Tabla de multiplicar
// Pide un número y muestra su tabla de multiplicar del 1 al 10
let numTabla = prompt("Introduce un número para ver su tabla de multiplicar: ");
let tabla = parseInt(numTabla);
console.log("Tabla de multiplicar del " + tabla + ":");
for (let n=0; n<=10; n++){
    let resultado = tabla * n;
    console.log(tabla + " x " + n + " = " + resultado);
}