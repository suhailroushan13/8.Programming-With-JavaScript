import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((start) => {
    var data = start.data;
    data.forEach((ele, index) => {
      console.log(index, ele.title);
    });
  })
  .catch((err) => {
    console.log(err);
  });
