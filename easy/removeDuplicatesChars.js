function removeDuplicates(s) {
    let stack = [];
    for (l of s) {
        if (stack.length == 0) stack.push(l);
        else {
            stack[stack.length - 1] == l ? stack.pop() : stack.push(l);
        }
    }
    return stack.join('');
}

console.log(removeDuplicates('aababaab'));
