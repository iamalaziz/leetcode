var MyHashMap = function () {
    this.hashMap = [];
};

MyHashMap.prototype.put = function (key, value) {
    this.hashMap[key] = value;
};

MyHashMap.prototype.get = function (key) {
    return this.hashMap[key] !== undefined ? this.hashMap[key] : -1;
};

MyHashMap.prototype.remove = function (key) {
    if (this.hashMap[key]) {
        delete this.hashMap[key];
    }
};

var obj = new MyHashMap();
obj.put(1, 2);
obj.put(1, 4);
obj.put(5, 6);
obj.put(7, 10);

var param_2 = obj.get(7);

console.log(obj);
obj.remove(7);
console.log(obj);
