// {id: 1, recuperarClave: function()}
console.log("Constructor");
function Usuario(){
    this.id = 1,
    this.recuperarClave = function(){
        console.log("Recuperando clave...");
    }
}
let usuario = new Usuario();
console.log(usuario);