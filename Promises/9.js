import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    var data = res.data;
    var results = [];
    var temp;
    for (var i = 0; i <= 10; i++) {
      temp = [];
      for (var j = 0; j < data.length; j++) {
        if (data[j].userId == i) {
          temp.push(data[j].title);
        }
      }
      results.push(temp);
    }
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });
