import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((start) => {
    var data = start.data;
    var arr = data.map((ele, index) => {
      console.log(index, ele.title);
    });

  }
  )
  .catch((err) => {
    console.log(err);
  });
