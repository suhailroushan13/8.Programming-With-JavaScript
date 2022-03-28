function xyz() {
  var i = 0;
  console.log(i);
}
xyz();

// The above function works fine its in the function scope

function xyz() {
   j = 0;
  console.log(i);
}
xyz();

// if you didnt use any keyword to declare it will take by default var and it will be in the function scope



// ARRAYS and OBJECT Go with CONST
//  lOOPS AND ALL Go with LET

//  And Dont use VAR


