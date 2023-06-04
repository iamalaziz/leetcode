//  What will print out the code below?


/*
// ################################################
const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
});

promise1.then(() => {
  console.log(3);
});

console.log(4);
*/

/*
Answer----------------------------------------------
First, Promise returns 1
Second, since the promise is resolved, callback in "then" is in queue
Third, 4 is returned
Lastly, 3 will be printed out from queue.
1
4
3
*/

/*
// ################################################
const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});

promise1.then(() => {
  console.log(3);
});

console.log(4);
*/

/*
Answer----------------------------------
The code returns >>
1
4
Because the promise is not resolved so code in then is not executed.
*/


/*
// ################################################
const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve('resolve1')
})

const promise2 = promise1.then(res => {
  console.log(res)
})

console.log('promise1:', promise1);
console.log('promise2:', promise2);
*/

/*
Answer --------------------------------------------------
1
promise1: Promise {'resolve1'}
promise2: Promise {<pendiing>}
resolve1
*/


/*
// ################################################
const fn = () => (new Promise((resolve, reject) => {
  console.log(1)
  resolve('success')
}));

fn().then(res => {
  console.log(res)
});

console.log(2)

*/

/*
Answer
1
2
'success'
*/


/*
// ################################################
console.log('start')

setTimeout(() => {
  console.log('setTimeout')
})

Promise.resolve().then(() => {
  console.log('resolve')
})

console.log('end')

*/

/*
Answer ------------------------------------------------
1. "start"
2. setTimout callback is moved in MACROTASK. 
3. Promise.resolve().then() is executed and callback is moved into MICROTASK
4. "end"
5. checks MICROTASK, prints "resolve"
6. checks another MACROTASK, prints "setTimeout"
*/