var singleNumber = function (nums) {
        let res = new Set();

        for (let n of nums) {
                if (res.has(n)) {
                        res.delete(n);
                } else res.add(n);
        }

        return [...res];
};
