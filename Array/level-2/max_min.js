/*
Find Difference Between Max and Min
Write a program to find the difference between the maximum and minimum elements in an array.
Example:
Input: arr = [12, 5, 8, 19, 3]
Output: Difference = 16
*/

let arr = [12, 5, 8, 19, 3]

let small = Infinity;
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    } else if (arr[i] < small) {
        small = arr[i]
    }
}

console.log('Difference-:', max - small)