var maximumProduct = function (nums) {
    let sorted = nums.sort((a, b) => a - b);

    let product1 = sorted[0] * sorted[1] * sorted[sorted.length - 1];
    let product2 =
        sorted[sorted.length - 1] *
        sorted[sorted.length - 2] *
        sorted[sorted.length - 3];

    return Math.max(product1, product2);
};

console.log(maximumProduct([-100, -98, -1, 2, 3, 4]));
