var words = [
  "spray",
  "limit",
  "exuberant",
  "destruction",
  "elite",
  "present",
  "apple",
  "omg",
  "uno",
  "italy",
];

// var result = [];
// var char;

// for (var i = 0; i < words.length; i++) {
//   char = words[i][0];
//   if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//     result.push(words[i]);
//   }
// }
// console.log(result);

// for (var i = 0; i < words.length; i++) {
//   var first = words[i][0];
//   if (first == "a") {
//     console.log(words[i]);
//   }
//   if (first == "e") {
//     console.log(words[i]);
//   }
//   if (first == "i") {
//     console.log(words[i]);
//   }
//   if (first == "o") {
//     console.log(words[i]);
//   }
//     if (first == "u") {
//       console.log(words[i]);
//     }
// }

for (var i = 0; i < words.length; i++) {
  var first = words[i][0];
  if (
    first == "a" ||
    first == "e" ||
    first == "i" ||
    first == "o" ||
    first == "u"
  ) {
    //   console.log(words[i]);
    var result = [];
    result.push(words[i]);
    console.log(result);
  }
}
