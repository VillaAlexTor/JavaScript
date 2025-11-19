/*
Estructura de control FOR

for(inicialización; condición; incremento){
    //bloque de código a ejecutar en cada iteración
}
*/ 
for(let i = 0; i < 10; i++){
    if(i % 2 == 0){
        console.log("Numero par: " + i);
    }
}
for(let j = 0; j < 10; j++){
    if(j % 2 != 0){
        console.log("Numero impar: " + j);
    }
}