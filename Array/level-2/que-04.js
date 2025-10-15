/*
Count Numbers Greater Than Average
Write a program to count how many numbers are greater than the average of the array.
Example:
Input: arr = [4, 8, 6, 10, 2]
Output: Average = 6, Count = 2
*/

let arr = [4, 8, 6, 10, 2];
let sum = 0;
for (let value of arr) {
    sum += value;
}
let avg = sum / arr.length;

let count = 0
for (let value of arr) {
    if (value > avg) {
        count++
    }
}
console.log(count)