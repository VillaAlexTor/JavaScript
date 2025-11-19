function saludar(){
    console.log("Hola esta es una funcion");
}
function suma(){
    return 2+2;
}
function sumaConVariales(numero_1, numero_2){
    console.log(arguments); //Aceder a todos los valores de la funcion
    let resultado = numero_1 + numero_2;
    return resultado;
}
//Siempre llamar a una funcion
saludar();
// Si tiene return tenemos que dar una variable o console.log(suma());
let resultadoFuncionSuma = suma();
console.log(resultadoFuncionSuma);
// funcion con parametros
let resultadoFuncionSumaConParametros = sumaConVariales(3, 7);
console.log(resultadoFuncionSumaConParametros)
console.log(typeof resultadoFuncionSumaConParametros);