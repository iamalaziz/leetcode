function reformat(s) {
    let letters = '';
    let digits = '';

    for (const ch of s) {
        if (ch.match(/[a-z]/i)) {
            letters += ch;
        } else {
            digits += ch;
        }
    }
    if (Math.abs(letters.length - digits.length) > 1) {
        return '';
    }

    let isLetter = false;
    if (letters.length - digits.length == 1) isLetter = true;
    let result = '';
    for (i = 0; i < s.length; i++) {
        if (isLetter) {
            result += letters[0];
            letters = letters.substring(1);
        } else {
            result += digits[0];
            digits = digits.substring(1);
        }
        isLetter = !isLetter;
    }

    return result;
}
console.log(reformat('covid2019'));
