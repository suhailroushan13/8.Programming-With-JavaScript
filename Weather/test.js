import axios from "axios";
import readline from "readline-sync";

axios
  .get(
    `https://api.openweathermap.org/data/2.5/weather?=delhi&appid=2ab550f885d86788105fd24fd8c985cd`
  )
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
