var countOfAtoms = function (formula) {
        let stack = []; /// stores the state of unclosed bracket formula
        let currCount = {};
        for (let i = 0; i < formula.length; i++) {
                if (formula[i] === '(') {
                } else if (formula[i] === ')') {
                } else {
                        // case to handle elements and thier counts
                        const [el, index] = nextElement(i);
                        i = index;
                        const [count, ind] = nextNumber(i);
                        i = ind;
                        currCount[el] = (currCount[el] ?? 0) + count;
                }
        }

        function nextNumber(i) {
                if (!formula[i].match(/[0-9]/)) return [1, i];
                let count = '';
                while (formula[i].match(/[0-9]/)) {
                        count += formula[i];
                        i++;
                }
                return [+count, i];
        }

        function nextElement(i) {
                if (!formula[i]?.match([/A-Z/])) return null;
                let el = formula[i];
                i++;
                while (formula[i]?.match([/a-z/])) {
                        el += formula(i);
                        i++;
                }

                return [el, i];
        }

        return currCount;
};
console.log(countOfAtoms('Kkankj4HOmk5'));
