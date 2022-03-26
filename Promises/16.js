import axios from "axios";
function hitAPI() {
  return axios.get(`https://api.github.com/users`, {
    auth: {
      username: "suhailroushan13",
      password: "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",
    },
  });
}
hitAPI()
  .then((res) => {
    return axios
      .get(`https://api.github.com/users/${ele.login}`, {
        auth: {
          username: "suhailroushan13",
          password: "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",
        },
      })
      .then((res) => {
        console.log(res.data.followers + " followers  for " + res.data.login);
      });
  })

  .catch((err) => {
    console.log(err);
  });
