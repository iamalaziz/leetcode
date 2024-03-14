var toLowerCase = function (s) {
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
            s = s.replace(s[i], String.fromCharCode(s.charCodeAt(i) + 32));
        }
    }
    return s;
};

console.log(toLowerCase('BAAAfdf'));

// 65 - 90
// 97 - 122
