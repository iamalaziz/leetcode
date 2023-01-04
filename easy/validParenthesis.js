const isValid = (s) => {
  const stack = [];
  for (const bracket of s) {
    if (bracket == "(" || bracket == "[" || bracket == "{") {
      stack.push(bracket);
    } else if (bracket == ")" || bracket == "]" || bracket == "}") {
      if (bracket == ")" && stack[stack.length - 1] !== "(") {
        return false;
      }
      if (bracket == "}" && stack[stack.length - 1] !== "{") {
        return false;
      }
      if (bracket == "]" && stack[stack.length - 1] !== "[") {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
};

console.log(isValid(")"));

