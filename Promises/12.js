import axios from "axios";

// for (var i = 1; i <= 10; i++) {
axios
    .get(`https://jsonplaceholder.typicode.com/users/`)
    .then((res) => {
        var data = res.data
        data.forEach((item) => {
            console.log(item.id, item.name)
        })
    })
    .catch((err) => {
        console.log(err)
    });

    
// }
