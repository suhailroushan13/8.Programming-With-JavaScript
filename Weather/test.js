import axios from "axios";
import readline from "readline-sync";

axios
  .get(
    `https://api.openweathermap.org/data/2.5/weather?=delhi&appid=`
  )
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
