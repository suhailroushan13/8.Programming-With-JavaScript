import axios from "axios";

async function hitAPI() {
  try {
    var userData;
    var res = await axios.get(`https://api.github.com/users`);
    res.data.forEach(async (user) => {
      userData = await axios.get(
        `https://api.github.com/users/${user.login}`
      );
      console.log(
        userData.data.followers + " followers  for " + userData.data.login
      );
    });
  } catch (error) {
    console.log(error);
  }
}

hitAPI();
