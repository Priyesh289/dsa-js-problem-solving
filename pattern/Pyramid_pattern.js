/*
   *
  ***
 *****
*******
*/
let n = 2
for (let i = 1; i <= n; i++) {

    let space = ''
    for (let spa = i; spa <= n - i; spa++) {
        space += " "
    }

    let star = '';
    for (let j = 1; j <= i * 2 - 1; j++) {
        star += '*'
    }
    console.log(space + star)
}