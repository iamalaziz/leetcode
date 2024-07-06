function passThePillow(n, time) {
    let cycleTimes = Math.floor(time / (n - 1));
    let remainder = time % (n-1);
    if (cycleTimes % 2 === 0) {
        return remainder + 1;
    } else {
        return n - remainder;
    }
}

console.log(passThePillow(18, 38))
