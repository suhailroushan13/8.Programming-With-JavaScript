/*Syntax
Consider x to be the operand:
Increment — x++ or ++x
Decrement — x-- or --x
As you can see, the ++/ —- operators can be used before
 or after the operand. Here’s what that might look in your code: */
// Increment
let a = 1;
a++;
++a;
// Decrement
let b = 1;
b--;
--b;
// Using ++/-- After the Operand
// When you use the increment / decrement operator
//  after the operand, the value will be returned 
//  before the operand is increased / decreased.
// Check out this example:
// Increment
let c = 1;
console.log(a++);    // 1
console.log(a);      // 2
// Decrement
let d = 1;
console.log(b--);    // 1
console.log(b);      // 0
// When we first log out the value of a, or b,
//     neither has changed.That’s because the original 
// value of the operand is being returned prior to 
// the operand being changed.The next time the operator
//  is used, we get the result of the + 1, or - 1.
// Using ++/-- Before the Operand
// If you’d rather make the variable increment / decrement
//  before returning, you simply have to use the increment /
//     decrement operator before the operand:
// Increment
let e = 1;
console.log(++a);    // 2
console.log(a);      // 2
// Decrement
let f = 1;
console.log(--b);    // 0
// console.log(b);      // 0
// As you can see in the above example,
//     the operation executes and adds / subtracts 1 
//     prior to returning.This allows us to instantly 
//     log out and see the resulting value.
