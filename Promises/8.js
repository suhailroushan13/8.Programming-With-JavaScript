import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    var data = res.data;
    var results = data.map((loop,index) => {
        var total = loop.title ;
        console.log(index,total);
        
    });
  })
  .catch((err) => {
    console.log(err);
  });
