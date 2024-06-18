console.time('Time complexity: ');

var maxProfitAssignment = function (difficulty, profit, workers) {
    let jobs = [];
    let numOfJobs = difficulty.length;
    for (let i = 0; i < numOfJobs; i++) {
        jobs.push({ difficulty: difficulty[i], profit: profit[i] });
    }

    jobs.sort((a, b) => a.difficulty - b.difficulty);

    workers.sort((a, b) => a - b);

    let jobIndex = 0;
    let total = 0;
    let maxProfit = 0; /* max profit for the current worker  */

    for (let i of workers) {
        while (jobIndex < numOfJobs && jobs[jobIndex].difficulty <= i) {
            if (jobs[jobIndex].profit > maxProfit) {
                maxProfit = jobs[jobIndex].profit;
            }
            jobIndex++;
        }
        total += maxProfit;
    }
    return total;
};

console.log(
    maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7])
);

console.timeEnd('Time complexity: ');

/* Time: O(Nlogn) */

/* 
diff    [2,4,6,8,10]
profit  [10,20,30,40,50]
worker  [4,5,6,7]
*/
