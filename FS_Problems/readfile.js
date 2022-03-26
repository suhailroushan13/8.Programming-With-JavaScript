// Method 1 : Callback Approach;
import fs from "fs";

// To Read a File :
fs.readFile("SAMPLE.TXT", (err, data) => {
  if (err) {
    throw err;
  }

  console.log(data.toString().toUpperCase());

});

// No Radix ..because its in Alphabet
//
