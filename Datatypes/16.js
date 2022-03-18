// var str = "";
// for (var i = 1; i <= 10; i++)
// {
//     str += i;
//     console.log(str);

// }

var str = "";
for (var i = 7; i >= 1; i++) {
  for (var j = 5; j <= i; j--) {
    str += " " + i;
    console.log(str);
  }
}
