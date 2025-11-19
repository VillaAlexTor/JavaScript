let array = [5, 9, 2, -9, 3]; 
function letMenorMayor(array){
    let menor = array[0];
    let mayor = array[0];
    for (numero of array){
        menor = menor < numero ? menor : numero;    
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor, mayor];
}
let res = letMenorMayor(array);
console.log(res);