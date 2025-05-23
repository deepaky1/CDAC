// a function can be passed a parameter while making a function call

function add(p1, p2) {
  console.log('addition = ', p1 + p2)
}

function subtract(p1, p2) {
  console.log('subtraction = ', p1 - p2)
}

function multiply(p1, p2) {
  console.log('multiplication = ', p1 * p2)
}

function divide(p1, p2) {
  console.log('division = ', p1 / p2)
}

function execute(func) {
  func(10, 20)
  func(20, 30)
  func(30, 40)
  func(40, 50)
  func(50, 60)
  console.log('---------------------------')
}

// execute(add)
// execute(subtract)
// execute(multiply)
// execute(divide)

function execute2() {
  // create an array of functions
  const functions = [add, subtract, multiply, divide]
  for (const func of functions) {
    func(10, 20)
    func(20, 30)
    func(30, 40)
    func(40, 50)
    func(50, 60)
    console.log('---------------------------')
  }
}

// execute2()

// add(10, 20)
// add(20, 30)
// add(30, 40)

// subtract(10, 20)
// subtract(20, 30)
// subtract(30, 40)

// console.log('hello world')
// console.log('hello world')
// console.log('hello world')
// console.log('hello world')
// console.log('hello world')

// for (let index = 0; index < 5; index++) {
//   console.log('hello world')
// }
