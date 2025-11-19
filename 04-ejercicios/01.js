function cualEsMayor(a, b) {
    if (a > b){
        return console.log(a + " Es el mayor");
    } else if (a < b ){
        return console.log(b + " Es el mayor");
    } else{
        return console.log("Son iguales");
    }
}
function cualEsMayor1(a, b) {
    return (a > b) ? a : b;
}
let resultado = cualEsMayor(7, 5);
console.log(resultado);
let resultado1 = cualEsMayor1(7, 5);
console.log(resultado1);