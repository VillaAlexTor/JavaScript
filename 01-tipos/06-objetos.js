// Obejeto literal
let personaje = {
    // Se llaman propiedades o llave valor
    nombre: "Tanjuro",
    anime: "Demon Slayer",
    edad: 16,
};
console.log(personaje);
console.log(typeof personaje); 
// Acceder a las propiedades del objeto
console.log(personaje.nombre);
console.log(personaje["anime"]);
console.log(personaje['edad']);
// Modificar las propiedades del objeto
personaje.nombre = "Tanjiro Kamado"; 
personaje['edad'] = 17;
// Eliminar alguna propiedad
delete personaje.anime;
console.log(personaje);