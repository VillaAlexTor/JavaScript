function crearUsuario(id, email, nombre, activo){  
    return {
        id: id,
        email: email,
        nombre: nombre,
        activo: true,
        recuperarPassword: function(){
            console.log("Función para recuperar la contraseña");
        },
    };
}
let user1 = crearUsuario(1, "a@gmail.com", "Usuario A", true);
let user2 = crearUsuario(2, "b@gmail.com", "Usuario B", false);
let user3 = crearUsuario(3, "b@gmail.com", "Usuario C", true);
console.log(user1);
console.log(user2);
console.log(user3);