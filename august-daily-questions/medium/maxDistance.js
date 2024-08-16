var maxDistance = function (arrays) {
        let min = arrays[0][0];
        let max = arrays[0][arrays[0].length - 1];

        let res = 0;

        for (let i = 1; i < arrays.length; i++) {
                let currMin = arrays[i][0];
                let currMax = arrays[i][arrays[i].length - 1];

                res = Math.max(
                        res,
                        Math.abs(currMax - min),
                        Math.abs(max - currMin)
                );

                if (min > currMin) min = currMin;
                if (max < currMax) max = currMax;
        }

        return res;
};
