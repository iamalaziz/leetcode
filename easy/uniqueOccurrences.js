var uniqueOccurrences = function(arr) {
    const hashMap = new Map();

    arr.forEach(n => hashMap.has(n) ? hashMap.set(n, hashMap.get(n)+1) : hashMap.set(n, 1))
    const setArr = new Set(hashMap.values())

    return hashMap.size === setArr.size
};

console.log(uniqueOccurrences([1,2,2,1,1,3]))