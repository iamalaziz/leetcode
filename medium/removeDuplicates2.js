function removeDuplicates(s, k) {
    let stack = [];
    for (const l of s) {
        if (stack.length && l === stack[stack.length - 1][0]) {
            stack[stack.length - 1] += l;
            if (stack[stack.length - 1].length == k) {
                stack.pop();
            }
        } else {
            stack.push(l);
        }
    }
    return stack.join('');
}

console.log(removeDuplicates('deeedbbcccbdaa', 3));
