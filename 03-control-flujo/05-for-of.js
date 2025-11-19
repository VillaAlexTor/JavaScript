// Iterirar un listado de elementos con for...of
let animales = ['gato', 'perro', 'ratón', 'tortuga'];
for (let animal of animales) {
    console.log(animal);
}
console.log('---');
// Hacer lo mismo con while
let i = 0;
while (i< animales.length) {
    console.log(animales[i]);
    i++;
}