var lengthOfLongestSubstring = function (s) {
    let str = '';
    let len = 0;
    let i = 0;
    while (i < s.length) {
        if (!str.includes(s[i])) str += s[i];
        else {
            str = str.substring(str.indexOf(s[i]) + 1);
            str += s[i];
        }

        if (str.length > len) len = str.length;
        i++;
    }
    return len;
};

console.log(lengthOfLongestSubstring(' '));
