// Creating an Own Promises
// Promise is an Asynchronous programming model for JavaScript.
// Promise is a constructor function that returns a promise object.
// Promise has .then() and .catch() methods.
// .then for fulfilled and .catch for rejected.
// .then() is called when the promise is resolved.
// .catch() is called when the promise is rejected.
// .then() and .catch() are called asynchronously.
// Syantax: new Promise ((resolve, reject) => {
// code here
// });
// Promise is a constructor function that returns a promise object.

function haveFun() {
  /* A callback function that is called when the promise is resolved or rejected. */
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I have fun");
    }, 5000);
  });
}

haveFun() 
    .then(result => { 
        console.log(result);
    })
    .catch((err) => { 
        console.log(err);
    });
