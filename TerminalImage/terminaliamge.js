import readline from "readline-sync";
import axios from "axios";
import fs from "fs";
import terminalImage from "terminal-image";

var username = readline.question("Enter your Github Profile Username: ");
console.log(username);
terminalImage.file(`ip11.png`).then((out) => {
    console.log(out);
}).catch((err) => {
    console.log("");
});
