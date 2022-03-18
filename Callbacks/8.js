var words = [
  "spray",
  "limit",
  "exuberant",
  "destruction",
  "elite",
  "present",
  "apple",
];

// for (var i = 0; i < words.length; i++) {
//   console.log(words[i]);
// }

// Callback : A Function Calling Another Function As a Parameter

// Now What The Hell Is ForEach .....Alternative For For Loop

// ForEach : It works with Array
//  Its also a Array Helper Method
// Syntax : Array.forEach()


// Parameters are something which you can name them as a variables

// 1st parameter is to print the whole array 
//  2nd parameter is for Indexing the array with numbers
 
words.forEach((start,number) => {
    console.log(number,start);
});
// index and Array
// number and start
// 0 spray
// 1 limit
// 2 exuberant
// 3 destruction
// 4 elite
// 5 present
// 6 apple