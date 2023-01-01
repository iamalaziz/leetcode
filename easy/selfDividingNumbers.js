var selfDividingNumbers = function(left, right) {
  const numbers = []
  for(let i = left; i <= right; i++){
    isSelfDividing(i) && numbers.push(i) 
  }
  return numbers
};
const isSelfDividing = num => {
  const digits = num.toString().split('')
  for(i of digits) {
    if(num % i !== 0) return false
  }
  return true
}
console.log(selfDividingNumbers(1, 22))