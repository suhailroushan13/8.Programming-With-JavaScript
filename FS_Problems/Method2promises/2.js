import fs from "fs";

function writeFile(filename,fileData) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

writeFile("Hello.txt")
    .then((data) => {
        return writeFile('Upper.txt',data.toString());
    
    })
    .then(() => {
        console.log("File created Successfully");
        
    })
    .catch((err) => {
    console.log(err);
    
})
