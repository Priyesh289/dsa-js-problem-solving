/*
Find Second Largest Element
Write a program to find the second largest element in an array (without sorting).
Example:
Input: arr = [10, 25, 5, 8, 20]
Output: Second Largest = 20
*/

let arr = [10, 25, 5, 8, 20];

let large1 = arr[0];
let large2 = 0;

for (let i = 0; i < arr.length; i++) {
    if (large1 < arr[i]) {
        large2 = large1;
        large1 = arr[i];

    } else if (large1 > arr[i] && large2 < arr[i]) {
        large2 = arr[i]
    }
}
console.log('second largest-', large2)