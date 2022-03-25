import readlineSync from "readline-sync";
import axios from "axios";
import figlet from "figlet";

console.log("*******************");
console.log("Weather CLI Application");
console.log("*******************");
{
  var city_name = readlineSync.question("Enter a City Name  :  ");
  console.log(
    `Press 1 for Temperature at ${city_name} in Celsius\nPress 2 for Temperature at ${city_name} in Farhenheit\nPress 3 for Latitude and Longitude of ${city_name}\nPress 4 for Humidity in ${city_name}\nPress 0 to exit`
  );
  var choice = readlineSync.questionInt("Enter your Choice  :  ");
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=a19b7eca3271e89ba945e31e43c2aac4`
    )
    .then((res) => {
      var data = res.data;
      var Kelvin = data.main["temp"];
      var Celsius = Kelvin - 273;
      switch (choice) {
        case 1:
          //Kelvin to Celsius
          Celsius = Celsius.toFixed(2);
          console.log(
            `Temperature at ${city_name} in Celsius is :  `,
            Celsius + " \u2103"
          );
          break;
        case 2:
          var Farhenheit = Celsius * 1.8 + 32;
          Farhenheit = Farhenheit.toFixed(2);
          console.log(
            `Temperature at ${city_name} in Farhenheit is :`,
            Farhenheit + " \u2109"
          );

          break;
        case 3:
          var Latitude = data.coord["lat"];
          var Longitude = data.coord["lon"];
          console.log(
            `Latitude of ${city_name} is ${Latitude}\nLongitude of ${city_name} is ${Longitude}`
          );
          break;
        case 4:
          var Humidity = data.main["humidity"];
          console.log(`The Humidity in ${city_name} is ${Humidity}`);
          break;
        default:
          console.log("Please Make a Valid Choice");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}