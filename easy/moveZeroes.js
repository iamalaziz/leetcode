const moveZeroes = arr => {
  return arr.filter(item => item!== 0).concat(arr.filter(item => item === 0))
}

console.log(moveZeroes([0,1,0,3,12]));