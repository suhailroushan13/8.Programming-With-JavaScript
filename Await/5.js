import readlineSync from "readline-sync";
import axios from "axios";
var a = readlineSync.question("Enter your Number 1 : ");
var b = readlineSync.question("Enter your Number 2 : ");

function hitAPI(num1, num2) {
  return axios.get(`http://59.92.225.188:5000/add/${num1}/${num2}`);
}

hitAPI(a, b)
  .then((res) => {
    var sum1 = res.data;
    console.log("The sum of first 2 nums are ", sum1);
    var num3 = readlineSync.question("Enter your Number 3 : ");
    axios
      .get(`http://59.92.225.188:5000/add/${sum1}/${num3}`)
      .then((res) => {
        console.log("The sum of first 3 nums are ", res.data);
        var num4 = readlineSync.question("Enter your Number 4 : ");
        axios
          .get(`http://59.92.225.188:5000/add/${res.data}/${num4}`)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
