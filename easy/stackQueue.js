
var MyStack = function () {
    this.stack = []
};

MyStack.prototype.push = function (x) {
    this.stack.unshift(x)
};


MyStack.prototype.pop = function () {
    return this.stack.shift()
};

MyStack.prototype.top = function () {
    return this.stack[0]
};


MyStack.prototype.empty = function () {
    return this.stack.length === 0
};