var expect = function (val) {
  return {
    toBe: function (n) {
      if (val === n) {
        return true;
      }
      throw Error('Not Equal')
    },
    notToBe: function (n) {
      if (val !== n) {
        return true;
      }
      throw Error('Equal')
    },

  };
};

console.log(expect(5).toBe(5))
console.log(expect(5).notToBe(5))
