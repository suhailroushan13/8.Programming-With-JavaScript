var data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

data.forEach((run) => {
  console.log(run);
});

// Imperative Method

console.log("Imperative Method");
// Var is a Global variable
for (var i = 1; i <= 10; i++) {
  console.log(i);
}
console.log(i); // Here i can still access the global variable i

console.log("Now Using Let");

for (let j = 1; j <= 10; j++) {
    console.log(j);
}
//
console.log(j); // Here j can not access the global variable i
 // j is not defined in the let


 
 // WHY NOT TO USE VAR
//  1. It is not a good practice to use var
//  2. IF You asssign a value to a variable using var, it will be accessible in the global scope
// 3. If you assign var i = 1 and same let i = 1 and then it will be conflict with let
// 4. If you use var in a loop, it will be accessible in the global scope
// 5. Because the let i will be print everywhere out of the block as it is having the previous value of i from var 
// 6 So let will become a global varibale...if u have same varibale using let and var
// 7. So Stop using var to declare variables
