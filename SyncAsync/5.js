console.log("I am First"); // 1
console.log("I am Second"); // 2
setTimeout(() => {
  console.log("I am Waiting for 5 seconds");  // 6
}, 5000);

console.log(" I am coming Third"); // 3
console.log("I am 4th"); // 4
setTimeout(() => {
  console.log(" I am Dusra TimeOut"); // 7
}, 10000);

console.log("Lasy"); // 5
