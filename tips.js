/**
 * 1. Functions are objects which comes with properties eg name, built-in methods like apply,call,bind
 * 2. Functions can be passed on like data
 */

//functions are first class citizens in javascript
//This means
//1.We can assign them to variables
const stuff = function () {};

//2. Can be passed as arguments to a function
function a(fn) {
  fn();
}

a(function () {
  console.log("Hi there");
});

//3. Functions can be returned as values from other functions

function b() {
  return function c() {
    console.log("bye");
  };
}

/**
 * THINGS TO WATCH OUT FOR IN FUNCTIONS
 */
//1. Initializing functions in loops eg 
for (let i = 0; i < 5; i++) {
  function a() { /**This is wrong since it's being initialized everytime */
    
  }
  a()
}

//2. Returning undefined variables
function a() {
  return param
}
a()

