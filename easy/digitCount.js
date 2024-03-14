function digitCount(num) {
    for (let i = 0; i < num.length; i++) {
        if (num.split(i).length - 1 !== parseInt(num[i])) {
            return false;
        }
    }
    return true;
}

console.log(digitCount('1210'));
