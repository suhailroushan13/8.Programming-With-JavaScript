import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    var data = res.data;

  
      
    // console.log(results);

    // console.log(data);
  })

  .catch((err) => {
    console.log(err);
  });
