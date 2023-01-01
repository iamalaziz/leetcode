var isHappy = function (n) {
  const sequence = [n]
  while(n != 1){
    n = [...n.toString()].reduce((acc, curr) => acc + (+curr) ** 2, 0);
    if(sequence.includes(n)) return false;
    sequence.push(n)
  }
  return true;
};

console.log(isHappy(2));

