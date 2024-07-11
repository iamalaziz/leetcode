var reverseParentheses = function (s) {
    let stack = [];

    for (let i of s) {
        if (i == ')') {
            let temp = [];
            while (stack.length) {
                let char = stack.pop();

                if (char === '(') break;

                temp.push(char);
            }
            stack.push(...temp);
        } else stack.push(i);
    }

    return stack.join('');
};
