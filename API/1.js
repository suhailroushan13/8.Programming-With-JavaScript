import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((start) => {
    var data = start.data.forEach((element) => {
      console.log(element.id);
    });

    // for (var i = 0; i < data.length; i++) {
    //   console.log(data[i].login);
    // }
  })

  .catch((error) => {
    console.log(error);
  });
