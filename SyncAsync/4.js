// JavaScript Works On Both Things

//Synchronous Programming
// Asynchronous Programming

// Synchronous Programming
// when you execute something synchronously,you wait for it to finish before moving on to another task
//  Step By Step ..line By Line
//  Intrepreter By Line By Line .........
//

// console.log("Hello Suhail");
// console.log(suhail);
// console.log("Hello Roushan");

//  You Will Never go to line no.13 untill and unless all lines are correctly
//  As we see the suhail is not defined
//  so it will stop at line no.12
// Its like Team in Line by Line ..like a -> b -> c-> d -> ...
//  If b is having errors
//  rest c d are going to stop
console.log("Hurray");

box();
box1();

function box() {
  console.log("Hello");  
}

function box1() {
  console.log("World");
}
