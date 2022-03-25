import axios from "axios";
import terminalImage from "terminal-image";

// hit the api https://api.github.com/users
function githubUsers() {
  return axios.get(`https://api.github.com/users`, {
    auth: {
      username: "suhailroushan13",
      password: "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",
    },
  });
}

githubUsers()
  .then((res) => {
    var users = res.data.map((user) => user.login);
    return users;
  })
  .then((users) => {
    var result = users.map((user) =>
      axios.get(`https://api.github.com/users/${user}`, {
        auth: {
          username: "suhailroushan13",
          password: "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",
        },
      })
    );
    return result;
  })
  .then((result) => {
    // console.log(result);
    var temp = [];
    result.forEach((ele) => {
      ele.then((res) => {
        temp.push(res.data.avatar_url);
      });
    });
    setTimeout(() => {
      console.log(temp);
    }, 1000);
  })
  .catch((err) => {
    console.log(err);
  });
