function substituirPares(array) {
    if (!array) return -1;
    if (!array.length) return -1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {

            console.log(`Substituindo ${array[i]} por 0...`);
        } else if (array[i] % 2 === 0) {
            array[i] = 0;
        }
    }
    return array;
}
let arr = [1, 3, 2, 5, 4, 6, 8,55,65, 66, 22]
console.log(substituirPares(arr));