// Method 4 
import { readFile, writeFile, unlink } from 'fs/promises';

readFile("sample.txt")
    .then((data) => {
        return writeFile("UPPPER.TXT", data.toString().toUpperCase());
    
    })
    .then(() => {
        console.log("Sucess");
        return unlink("sample.txt");
        
    })
    .then(() => {
        console.log("File Deleted");
        
    })
    .catch((err) => {
        console.log(err);
        
    })

