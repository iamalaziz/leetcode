function guess(n: number, pick: number = 67): number {
    if (n > pick) return -1;
    if (n < pick) return 1;
    return 0;
}

function guessNumber(n: number): number {
    let min: number = 1;
    let max: number = n;

    while (true) {
        const myGuess = (min + max) / 2;
        const guessOut = guess(myGuess);
        if (guessOut == 1) {
            min = myGuess;
        } else if (guessOut == -1) {
            max = myGuess;
        } else {
            return myGuess
        }
    }
    return n;
}

console.log(guessNumber(100));
