const user = {id:1};
user.name = "Nicolas";
user.guardar = function(){
    console.log("Guardar usuario    "+ user.name);
}
user.guardar();
delete user.name;
delete user.guardar;
console.log(user);

