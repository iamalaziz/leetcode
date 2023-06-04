
// Create your own bind function
// -----------------------

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: "Anton", age: "22", job: "Designer"}
const person2 = {name: "Igor", age: "24", job: "Manager"}

const mybind = (context, fn) => {
  return function(...args){
    fn.apply(context, args)
  }
}

// mybind(person1, logPerson)()
// mybind(person2, logPerson)
