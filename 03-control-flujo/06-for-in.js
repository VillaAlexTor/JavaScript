let user = {
    id:1,
    nombre: 'Alex',
    edad: 25,
};
for (let propiedad in user) {
    console.log(propiedad); // Muestra las propiedades: id, nombre, edad
}
console.log("----");
for (let propiedad in user) {
    console.log(propiedad, user[propiedad]); // Muestra los valores: 1, 'Alex', 25
}