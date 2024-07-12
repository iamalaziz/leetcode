const remove = (s, a, b, x) => {
        /// here x > y
        let stack = [];
        let score = 0;
        for (let char of s) {
                if (
                        stack.length &&
                        stack[stack.length - 1] === a &&
                        char == b
                ) {
                        stack.pop();
                        score += x;
                } else {
                        stack.push(char);
                }
        }

        return [stack.join(''), score];
};

// console.log(remove('cdbcbbaaabab', 5))

var maximumGain = function (s, x, y) {
        /// ab -> x, ba -> y
        let total = 0;

        if (x > y) {
                let [stringWithValues, score1] = remove(s, 'a', 'b', x);
                let [strinWithNoValue, score2] = remove(
                        stringWithValues,
                        'b',
                        'a',
                        y
                );
                return score1 + score2;
        } else {
                let [stringWithValues, score1] = remove(s, 'b', 'a', y);
                let [strinWithNoValue, score2] = remove(
                        stringWithValues,
                        'a',
                        'b',
                        x
                );
                return score1 + score2;
        }
        ///
};

console.log(maximumGain('cdbcbbaaabab', 4, 5));

/* 
cdbcbbaaabab
stack: [c, d, b, c, b, b, ]

*/
