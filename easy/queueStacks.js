class MyQueue {
    constructor() {
        this.stack = []
    }
    push(x) {
        this.stack.push(x)
    }
    pop() {
        return this.stack.shift()
    }
    peek() {
        return this.stack[0]
    }
    empty() {
        return this.stack.length === 0 
    }
}

let obj = new MyQueue()

obj.push(3)
obj.push(4)
obj.push(5)

let popping = obj.pop()

console.log(obj)

// 
// 