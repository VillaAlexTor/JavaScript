function precioCompleto (precio, impuesto){
    return precio + (precio * impuesto);
}
let res = precioCompleto(200, 0.15);
console.log("El precio completo es: " + res);