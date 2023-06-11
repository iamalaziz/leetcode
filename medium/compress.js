var compress = function (chars) {
  const s = [];
  const isLast = chars.length - 1 
  let count = 1;
  let curr = chars[0];

  for (let i = 1; i < chars.length; i++) {
    if(chars[i] === curr){
      count+=1
    }else if(chars[i] !== curr){
      s.push(curr);
      if(count != 1){
        console.log(s)
      }
    }
    
  }
  return s;
};

console.log(compress(['a', 'a', 'a', 'b', 'b', 'c', 'c', 'c']));
