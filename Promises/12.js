import axios from "axios";

for (var i = 1; i <= 10; i++) {
    axios
        .get(`https://jsonplaceholder.typicode.com/users/${i}`)
        .then((res) => {
            console.log(res.data.username, res.data.id);
        })
        .catch((err) => {
            console.log(err);
        });
}