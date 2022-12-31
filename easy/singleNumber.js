/* 
var singleNumber = function(nums) {
  let result = 0;
  for (let num of nums) {
      result = result ^ num;
  }
  return result;
}; 
*/

var singleNumber = function (nums) {
  const frequency = {"num": 5}
  for(let i of nums) {
    frequency[i] = (frequency[i] || 0) + 1
  }


};

console.log(singleNumber([2, 2, 1]));
