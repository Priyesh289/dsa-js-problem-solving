let arr = [9, 4, 7, 1, 3]

let min1 = Infinity;
let min2 = Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min1) {
        min2 = min1;
        min1 = arr[i]
    } else if (min1 < arr[i]) {
        min2 = arr[i]
    }
}
console.log('Second Minimum', min2)