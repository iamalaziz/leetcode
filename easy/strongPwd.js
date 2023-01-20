function checkStrongPassword(password) {
  if (password.length < 8) {
    return false;
  }
  let hasLower = /[a-z]/.test(password);
  let hasUpper = /[A-Z]/.test(password);
  let hasDigit = /[0-9]/.test(password);
  let hasSpecial = /[!@#$%^&*()--+]/.test(password);
  let hasSame = /(.)\1/.test(password);

  console.log(hasLower)
  console.log(hasUpper)
  console.log(hasDigit)
  console.log(hasSpecial)
  console.log(!hasSame)
  return hasLower && hasUpper && hasDigit && hasSpecial && !hasSame;
}

console.log(checkStrongPassword('-Aa1a1a1'))