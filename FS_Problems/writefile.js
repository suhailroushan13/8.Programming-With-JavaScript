import fs from 'fs';
let data = 'Hello i am suhail...wirting this file using fs write file';
fs.writeFile("writing.txt", data,((err) => { 
    if (err) {
        throw err;
    }
    console.log('File created');
}));