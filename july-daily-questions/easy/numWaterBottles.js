function numWaterBottles(numBottles, numExchange) {
    let totalRemainder = 0;
    let sum = numBottles;

    while (numBottles > numExchange) {
        sum += Math.floor(numBottles / numExchange);
        totalRemainder += numBottles % numExchange;
        numBottles = Math.floor(numBottles / numExchange);
    }
    totalRemainder += numBottles;
    return sum + Math.floor(totalRemainder / numExchange);
}

console.log(numWaterBottles(17, 3));
// console.log(Math.floor(3 / 3))
