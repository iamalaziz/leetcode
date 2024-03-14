var hammingWeight = function (n) {
    return n.toString(2).split(1).length - 1;
};

console.log(hammingWeight(00000000000000000000000010000000));
