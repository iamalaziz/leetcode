var findWords = function (words) {
    let row1 = new Set('qwertyuiop');
    let row2 = new Set('asdfghjkl');
    let row3 = new Set('zxcvbnm');
    let res = [];

    for (let word of words) {
        let loweredWord = word.toLowerCase();

        if (
            Array.from(loweredWord).every((l) => row1.has(l)) ||
            Array.from(loweredWord).every((l) => row2.has(l)) ||
            Array.from(loweredWord).every((l) => row3.has(l))
        ) {
            res.push(word);
        }
    }
    return res;
};

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']));
