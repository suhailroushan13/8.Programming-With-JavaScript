import axios from "axios";

function api() {
  return axios.get(`https://api.github.com/users`, {
    auth: {
      username: "suhailroushan13",
      password: "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",
    },
  });
}

api()
  .then((res) => {
    console.log(res.data);
    res.data.forEach((ele) => {
      axios
        .get(`https://api.github.com/users/${ele.login}`, {
          auth: {
            username: "suhailroushan13",
            password: "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",
          },
        })
        .then((res) => {
          console.log(res.data.followers + " followers  for " + res.data.login);
        });
    });
  })code --list-extensions > extensions.list

  .catch((err) => {
    console.log(err);
  });
