// Imperative Style


var data = [{
        a: 1,
        b: 2
    }, {
        aa: 11,
        bb: 22
    }, {
        cc: 222,
        dd: 111
    },
    {
        zz: 88,
        kk: 99
    }
];
var result = [];
var temp;
for (var i = 0; i < data.length; i++) {
    temp = Object.values(data[i]);
    for (var j = 0; j < temp.length; j++) {
        if (temp[j] % 2 == 0) {
            result.push(temp[j]);
        }
    }
}
console.log(result);