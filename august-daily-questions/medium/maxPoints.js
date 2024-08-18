var maxPoints = function (points) {
        let rows = points.length;
        let cols = points[0].length;
        let currMax = points[0];

        for (let i = 1; i < rows; i++) {
                let left = [currMax[0]];
                let right = new Array(cols);
                right[cols - 1] = currMax[cols - 1];

                /// left max
                for (let j = 1; j < cols; j++) {
                        left.push(Math.max(left[j - 1] - 1, currMax[j]));
                }

                console.log(left);

                /// right max
                for (let j = cols - 2; j >= 0; j--) {
                        right[j] = Math.max(right[j + 1] - 1, currMax[j]);
                }
                console.log('right:', right);

                for (let j = 0; j < cols; j++) {
                        currMax[j] = Math.max(left[j], right[j]) + points[i][j];
                }
        }

        return Math.max(...currMax);
};

console.log(
        maxPoints([
                [7, 3, 5, 9, 1],
                [1, 9, 5, 7, 8]
        ])
);
