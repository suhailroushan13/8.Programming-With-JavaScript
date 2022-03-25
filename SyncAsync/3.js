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

var result = data.map(start => Object.values(start)).flat().filter(ele => ele % 2 == 0);

console.log(result);