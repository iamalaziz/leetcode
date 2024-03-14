var isPalindrome = function (s) {
    if (s.trim() === '') return true;

    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    return s === s.split('').reverse().join('');
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
