var num = 1;
var num2 = 44;
var obj = {
    [num + 40]: "Hello",
    "Hola": "Bye",
    [num2]: [num, num2],
    [num + num2]: "123"
}


console.log(obj['Hola']);
console.log(obj[41]);
console.log(obj[45]);


