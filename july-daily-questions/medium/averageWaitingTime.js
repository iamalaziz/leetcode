var averageWaitingTime = function (customers) {
    let currTime = customers[0][0];
    let res = 0;

    for (let customer of customers) {
        let [arr, t] = customer;

        if (currTime >= arr) {
            res += currTime - arr + t;
            currTime += t;
        } else {
            res += customer[1];
            currTime = arr + t;
        }
    }

    return Math.round((res / customers.length) * 100000) / 100000;
};

console.log(
    averageWaitingTime([
        [1, 2],
        [2, 5],
        [4, 3]
    ])
);
