let arr = [2, 5, 8, 7, 4];

let even = 0;
let odd = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        even += arr[i]
    } else {
        odd += arr[i]
    }
}

console.log(`Even:${even}, Odd:${odd}`)  //Even:14, Odd:12