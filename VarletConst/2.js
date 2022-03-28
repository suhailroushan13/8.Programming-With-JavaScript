// 1. Scoping
//  What is the scope of a variable?
// 
//  There are three types of scope
// 1. Block Scope
// 2. Function Scope
// 3. Global Scope


// 1. Block Scope

{
    let letA = 'let';
    var varA = 'var';
    const constA = 'const';
}

// console.log(letA);
console.log(varA);
// console.log(constA);

//  2. Function Scope
console.log("FUNCTION SCOPE");

function scope() {
    // const constB = 'const';
    var varB = 'var';
    // let letB = 'let';

}

    console.log(varB);
    // console.log(letB);
    // console.log(constB);
scope();









// In a block scope ...you can only access var variables 
//                VAR      LET      CONST
// Block Scope  - ✅
