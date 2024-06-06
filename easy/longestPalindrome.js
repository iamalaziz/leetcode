var longestPalindrome = function (s) {
    let count = 0
    let map = {}
    for (let i of s) {
        map[i] ? (map[i]++) : (map[i] = 1)
        if(map[i] % 2 == 0) count += 2
    }
    console.log(map)
    for(let i in map){  
        if(map[i] % 2 === 1){
            count++
            break
        }
    }
    return count
};

console.log(longestPalindrome('ccc'))