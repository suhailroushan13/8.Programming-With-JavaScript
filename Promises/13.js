import axios from "axios";
function ApI() {
  return axios.get(`https://jsonplaceholder.typicode.com/users/`);
}

ApI()
  .then((res, index) => {
    var data = res.data
    data.forEach((item) => { 
      console.log(item.id, item.name)
    })
    // console.log(index,res.id);
  })
  .catch((err) => {
    console.log(err);
  });
