let array = [{
    id: 1,
    name: "Alex",
},{
    id: 2,
    name: "Juan"
},{ 
    id: 3,
    name: "Felipe"
}];
function toPairs(arr) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        let elemento = arr[i];
        pairs[i] = [elemento.id, { id: elemento.id, name: elemento.name }];
    }
    return pairs;
}
let resultado = toPairs (array);
console.log(resultado);
// Deberia mostrar:
// [1,  {id: 1 , name: 'Alex' }],
// [2,  {id: 2 , name: 'Juan' }],
// [3,  {id: 3 , name: 'Felipe' }],