let arr = [5, 1, 8, 3, 2]

let min = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i]
    }
}

console.log(min) //1