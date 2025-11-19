function getbyIdx(arr, idx) {
    if (idx < 0 || arr.length <= idx ){
        console.log("Elemento no existe")
    }
    return arr[idx];
}
let res = getbyIdx([10, 20, 30, 40, 50], 0);
console.log(res); // 30