import fs from 'fs';
function deleteFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.unlink(fileName, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
deleteFile("1.txt")
  .then((data) => {
    console.log("Sucessfully Deleted");
  })
  .catch((err) => {
    console.log(err);
  });
