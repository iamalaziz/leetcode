var isStrictlyPalindromic = function (n) {
    for (let i = 2; i <= n - 2; i++) {
        let str = n.toString(i);
        if (!isPalindromic(str)) return false;
    }
    return true;
};

const isPalindromic = (n) => {
    return n === n.split('').reverse().join('');
};

console.log(isStrictlyPalindromic(9));
