let array = [5, 7, -2, 9, 3];
function cuantosPositivos(arr){
    let contador = 0;
    for (let i = 0; i< array.length; i++){
        if (array[i] > 0)
            contador++;
    }
    return contador;
}
function cuantosPositivos1(arr){
    let contador = 0;
    for (elementos of arr){
        if (elementos > 0)
            contador++;
    }
    return contador;
}
let res = cuantosPositivos1(array);
console.log(`El array tiene ${res} números positivos.`);