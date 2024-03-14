Array.prototype.last = function () {
    return this.length > 0 ? this[this.length - 1] : -1;
};
const arr = [1, 2, 3, 4, 9];
console.log(arr.last());
