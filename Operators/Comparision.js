var a = 15;
var b = 15;
var c = 17;
var d = "15";

console.log(a == b); // a is equal to b ......true
console.log(a != b); // a is not equal to b....false

console.log("----------------------------------------------------");

console.log(a == d); // == checks lose compairison which gives both are same and gives true
console.log(a === d); // == checks tight compairison which gives both are not same and gives false
console.log(a !== b); // == checks e operands are of the same type but not equal, or are of different type.

console.log("----------------------------------------------------");

console.log(a == b); // true
console.log(a < b); // fasle
console.log(a > b); // fasle
console.log(a >= b); // true
console.log(a <= b); // true
