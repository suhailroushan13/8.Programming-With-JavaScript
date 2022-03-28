let a = {
    fname: "Suhail",
    age: 14,
}

let b = a;

let c = {
    fname: "Roushan",
    age: 23,
}

console.log(a == a); // True
console.log(a == b); // True
console.log(c == c); // True

// let a = 10;
// b = a;
// if you think whole a is copied into b then you are thinking wrong.
// its a pointer to a ..its like ....b = *a; In C
// Its not copying 10 into b 
//  Its Just pointing its address of a 
//  There is no concept of copying a whole data into another variable
//  Its just pointing to the same address of a to b;



// By Default no two objetcs are comparable in JavaScript
//  Unless and untill ...its comparing with itself
//  Thats why we have to compare with == and it gives true ...instead of false ...
console.log(a==c); // False
