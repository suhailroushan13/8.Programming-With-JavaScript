//Write an Algorithm (function) which accepts string in the below format
// 9:30 PM
// 21:30
//Convert the 12h format into 24h format
function add12Hours (time) {
    var hourMinute = time.split(':')
    return 12 + parseFloat(hourMinute[0]) + ':' + hourMinute[1];
}

function to24HourTime(time) {
    var parts = time.split(' ');
    if (parts[1] === "AM") {
      return parts[0];
    }
    return add12Hours (parts[0]);
}
var result = to24HourTime('12:00 PM');
console.log(result);
