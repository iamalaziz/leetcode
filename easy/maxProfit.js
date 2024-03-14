var maxProfit = function (prices) {
    let buy = prices[0];
    let profit = 0;
    for (i = 1; i < prices.length; i++) {
        if (buy > prices[i]) {
            buy = prices[i];
        } else {
            profit = Math.max(profit, prices[i] - buy);
        }
    }
    return profit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
