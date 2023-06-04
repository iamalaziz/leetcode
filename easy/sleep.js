async function sleep(millis) {
  return new Promise((res) => setTimeout(res, millis));
}

async function myFunc() {
  console.log('Before Sleep');
  await sleep(2000);
  console.log('After Sleep');
}

myFunc();
