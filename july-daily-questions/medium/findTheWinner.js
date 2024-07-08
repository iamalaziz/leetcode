function findTheWinner(n, k) {
    let circle = Array.from({ length: n }, (_, i) => i + 1);
    let count = 1
    let i = 0

    while (n > 1) {
        if (count == k) {
            circle.splice(i, 1)
            i--
            n--
            count = 0
        }

        if (i == n - 1) { 
            i = -1
        }
        count++
        i++
    }
    return circle[0]
}

console.log(findTheWinner(5, 2))