/*
Find Index of Max and Min Elements
Write a program to find the index positions of the maximum and minimum elements.
Example:
Input: arr = [5, 10, 3, 8, 2]
Output: Max at index 1, Min at index 4
*/

let arr = [5, 10, 3, 8, 2];

let maxIndex = 0;
let max = 0
let minIndex = 0;
let min = Infinity;

for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i]
        maxIndex = i
    } else if (min > arr[i]) {
        min = arr[i];
        minIndex = i
    }
}

console.log(maxIndex,minIndex)