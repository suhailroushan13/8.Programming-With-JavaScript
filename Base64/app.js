import readlineSync from 'readline-sync';

var question = readlineSync.question("Enter the input: ");
console.log(question);

var step2 = question.split('');
console.log(step2);
var step3 = step2.forEach((start) => {
    console.log(start +"-"+  start.charCodeAt(0));
    
}) 

var step4 = step2.forEach((start) => {
    console.log(start + "-" + start.charCodeAt(0).toString(2));

})

var step5 = step2.forEach((start) => {
    console.log(start.charCodeAt(0).toString(2));

})



