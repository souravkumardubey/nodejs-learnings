/*
const greet = (name) => {
  console.log(`Hello, ${name}`);
};

greet("sourav");
*/

// ? Global Object
// console.log(global);
global.setTimeout((text = "in the timeout") => {
  // ! not necessary to use global keyword
  console.log(text);
  clearInterval(interval);
}, 3000);

const interval = setInterval((text = "in the interval") => {
  console.log(text);
}, 1000);
