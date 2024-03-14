var countConsistentStrings = function (allowed, words) {
    return words.reduce(
        (a, w) => a + +w.split('').every((c) => allowed.indexOf(c) > -1),
        0
    );
};
console.log(countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab']));
