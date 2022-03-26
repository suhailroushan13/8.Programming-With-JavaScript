import axios from "axios";
function box() {

    return axios.get(`https://jsonplaceholder.typicode.com/users/`);
    
}
box()
    .then((res) => console.log(res.data[0]))
    .catch((err) => console.log(err));