/*
        1
        2 3
        4 5 6
        7 8 9 10
*/

let n = 4;
let count = 0;
for (let i = 1; i <= n; i++) {
    let str = ''
    for (let j = 1; j <= i; j++) {
        count++
        str = str + count + ' ';
    }
    console.log(str);

}