// POO programacion orientada a objetos
console.log("----- Objetos -----");
let user ={
    email: "alex@kamikaze.com",
    password: "123456",
    nombre: "Alex",
    direccion:{
        calle: "Calle Falsa",
        numero: 123,
    },
    activo: true,
    recuperarPassword: function(){
        console.log("Función para recuperar la contraseña");
    }
}