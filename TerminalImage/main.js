import readline from "readline-sync";
import axios from "axios";
import fs from "fs";
import terminalImage from "terminal-image";

var username = readline.question("Enter your Github Profile Username: ");
console.log(username);

axios.get(`https://api.github.com/users/${username}`, {
    auth: {
        username: "suhailroushan13",
        password: "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"
    }
}).then((res) => {
    var imageURL = res.data.avatar_url;
    axios.get(imageURL, { responseType: 'stream' }).then((res) => {
        res.data.pipe(fs.createWriteStream(`${username}.png`));
    })
 });
    terminalImage.file(`${username}.png`).then((out) => {
        console.log(out);
}).catch((err) => {
    console.log("");
})