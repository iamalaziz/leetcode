var findComplement = function (num) {
        let binary = num.toString(2).split('');

        binary.forEach((c, i) => {
                if (c == '1') binary[i] = '0';
                else binary[i] = '1';
        });

        return parseInt(binary.join(''), 2);
};

console.log(findComplement(5));
