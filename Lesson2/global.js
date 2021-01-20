// the global object

// window.setTimeout() -> don't need window (global object)

console.log(global);

global.setTimeout(() => {
  console.log("timeout ran");
  // stops the interval at 3 secs
  clearInterval(int);
}, 3000);

// same thing
setTimeout(() => {
  console.log("timeout ran");
}, 3000);

const int = setInterval(() => {
  console.log("interval");
}, 1000);

console.log("directory: " + __dirname);
console.log("With filename: " + __filename);

// cannot access the window object!