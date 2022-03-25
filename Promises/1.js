import axios from "axios";

function hitAPI() {
    console.log("I am One");

    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            console.log(res.data[0].phone);
        })
        .catch((err) => {
            console.log(err);
        });
    console.log("I am Last");

}
console.log(axios.get);

hitAPI();