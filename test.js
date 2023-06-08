// counter function

function counter(num) {
  // let i = num;
  return function counting () {
    let x = num
    return x++;
  };
}

const count = counter(2);

console.log(counter());
console.log(counter());
console.log(counter());

