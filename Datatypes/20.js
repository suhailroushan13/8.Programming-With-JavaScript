var data = [[1, 3, 4], [9, 9], [2, 5, 6, 7, 8], [99], [0, 0, 0, 100]];


// console.log(``);
var data2 = [];

for (var i = 0; i < data.length; i++) {
  for (var j = 0; j < data[i].length; j++) {
data2.push(data[i][j]);
  }
}
console.log(data2);
console.log(`[${data}]`);
console.log(data.flat());

