const isReminderOne = (n) => {
    let count = n - 1;
    while (count > 1) {
        if (n % count == 1) {
            isReminderOne(count);
            ++total;
        }
        count -= 1;
    }
};

var distinctIntegers = function (n) {
    let total = 0;
    // isReminderOne(n)
    let count = n - 1;
    while (count > 1) {
        if (n % count == 1) {
            // console.log(count)
            ++total;
            distinctIntegers(count);
        }
        count -= 1;
    }
    return total;
};

console.log(distinctIntegers(19));
