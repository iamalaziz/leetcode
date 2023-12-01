var mergeSimilarItems = function (items1, items2) {
    const integerMap = new Map()
    for (let i = 0; i < items1.length; i++) {
        integerMap.set(items1[i][0], items1[i][1])
    }
    for (let i = 0; i < items2.length; i++) {
        if (integerMap.has(items2[i][0])) {
            let last = integerMap.get(items2[i][0])
            integerMap.set(items2[i][0], items2[i][1] + last)
        }
        else {
            integerMap.set(items2[i][0], items2[i][1])
        }
    }

    return Array.from(integerMap.entries()).sort((a, b) => a[0] - b[0])
};

console.log(mergeSimilarItems([[1, 1], [4, 5], [3, 8]], [[3, 1], [1, 5], [7, 8]]))
