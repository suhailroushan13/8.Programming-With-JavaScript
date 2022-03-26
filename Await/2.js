import axios from "axios";
 
async function box() {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
        console.log(res.data[0]);
    } catch (err) {
        console.log(err);
    }
}

box();