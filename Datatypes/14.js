var mat1 = [[[1, 2], [3, 4, 9, "prash"], [1], [11, 22, 33]], 
[[1, 2], [3, 4, 9, "prash"], [1], [11, 22, 33]]];
var mat2 = [[0, 1], [2, 2]];

for (var i = 0; i < mat1.length; i++) {
    for (var j = 0; j < mat1[i].length; j++) {
        for (var k = 0; k < mat1[i][j].length; k++) {
            console.log(mat1[i][j][k]);
        }
    }
}