var data = ["prash", "nehra", "adnan", "msdhnoni", "Kohli"];

for (var i = 0; i < data.length; i++) {
    var box = data[i][0].toUpperCase();
    console.log(box+data[i].slice(1,data.length));
}

