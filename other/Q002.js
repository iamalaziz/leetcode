// Create a counter which should increment every time it is called.

function counter() {
    let num = 0;
    return function () {
        return num++;
    };
}

const count = counter();

console.log(count());
console.log(count());
console.log(count());
