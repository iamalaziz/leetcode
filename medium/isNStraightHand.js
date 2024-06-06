var isNStraightHand = function (hand, groupSize) {
    if (hand.length % groupSize !== 0) return false;

    let map = {}
    
    for (let i of hand) {
        map[i] ? map[i] += 1 : map[i] = 1
    }
    
    let arr = Object.keys(map).map(Number).sort((a, b) => a - b)
    
    for(let i of arr){
        if(map[i] > 0){
            let count = map[i]

            for(let j = 0; j < groupSize; j++) {
                let nextCard = i + j
                if(map[nextCard] === undefined || map[nextCard] < count){
                    return false
                }
                map[nextCard] -= count
            }
        }
    }
    return true
};

console.log(isNStraightHand([1,2,3,6,2,3,4,7,8], 3))