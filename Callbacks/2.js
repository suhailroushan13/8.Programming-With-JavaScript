let abc  =[ function ( )
{
return "Suhail"
}
]
// datatype of abc should be  in array ....then only it can be annomynos function
// without name function is called annomynos function
// in the above function abc is not the name of the function
//  we did abc because you cannot do this
// 
// function () // this will give error 
// {
//  retun "suhail"
//  }


//  To hold or capture that we decalre something abc from let/var to hold it
//  But till now there is no name for function
//  so this will be called the Annomoyus Function
console.log(abc); // This will give [Function : Annomoyus]

// console.log(abc()); // This will give Suhail // This is called Invoking Function

//  Invoking will work with console.log(abc[0]());
// Invoking will not work if you didnt add [] in console.log() of Invoking Function

