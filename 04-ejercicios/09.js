let pairs = [
    [1, {name: 'Alice', age: 30}],
    [2, {name: 'Bob', age: 25}],
    [3, {name: 'Charlie', age: 35}]
];
let array = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Charlie'}
];
function toCollection(pairs){
    let collecion = [];
    for (let i = 0; i< pairs.length; i++){
        let elemento = pairs[i];
        collecion[i] = elemento[1];
        collecion[i].id = elemento[0];

    }
    return collecion;
}
let res = toCollection(pairs);
console.log(res);