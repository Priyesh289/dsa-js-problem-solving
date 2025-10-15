/*
Separate Even and Odd Numbers
Write a program to store even numbers in one array and odd numbers in another.
Example:
Input: arr = [1, 2, 3, 4, 5, 6]
Output:
Even = [2, 4, 6], Odd = [1, 3, 5]
*/

let arr = [1, 2, 3, 4, 5, 6];
let odd = [];
let even = [];

for (let value of arr) {
    if (value % 2 == 0) {
        even.push(value)
    } else {
        odd.push(value)
    }
}

console.log(even, odd)