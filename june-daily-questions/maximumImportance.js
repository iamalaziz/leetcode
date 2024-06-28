const maximumImportance = function(n, roads) {
    let freq = new Array(n).fill(0);

    for (const road of roads) {
        freq[road[0]]++;
        freq[road[1]]++;
    }

    freq.sort((a, b) => b - a);

    let res = 0;
    for (let f of freq) {
        console.log(f, n);
        res += f * n;
        n--;
    }
    return res;
};

console.log(maximumImportance(5, [[0, 1], [1, 2], [2, 3], [0, 2], [1, 3], [2, 4]]));

/*
0:2     3
1:3     4
2:4 ->  5
3:2     2
4:1     1

4 3 2 2 1
5 4 3 2 1
20+12+6+4+1=43
*/
// 7+9+7+8+6+6 = 43