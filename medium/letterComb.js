var letterCombinations = function (digits) {
    const letters = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    const result = [];
    const findSingleComb = (index, path) => {
        if (index === digits.length) {
            result.push(path);
            return;
        }
        for (const c of letters[digits[index]]) {
            findSingleComb(index + 1, path + c);
        }
    };
    findSingleComb(0, '');
    return result;
};
console.log(letterCombinations('235'));
