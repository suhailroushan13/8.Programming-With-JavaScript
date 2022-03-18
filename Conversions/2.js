var boy1 = {
  name: "Suhail",
  dob: "2002-02-11",
};

var boy2 = {
    name: "Shasha",
    dob: "2001-02-11",
}

function samedateandmonth(date1, date2)
{
    var sameMonth = date1.getMonth() == date2.getMonth();
    var sameDate = date1.getDate() == date2.getDate();
    return (sameMonth && sameDate)
}

function samebday(boy1, boy2)
{
    var date1 = new Date(boy1, dob);
    var date2 = new Date(boy2, dob);
    return samedateandmonth(date1, date2)
}

var result = samebday(boy1, boy2)
console.log(result);
