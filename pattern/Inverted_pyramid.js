let n = 4;
for (let i = 1; i <= n; i++) {
    let space = '';
    for (let spa = 0; spa <= i - 1; spa++) {
        space += ' '
    }

    let star = '';
    for (let j = 2 * (n - i) + 1; j > 0; j--) {
        star += '*'
    }
    console.log(space + star)
}