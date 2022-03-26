import fs from 'fs';

fs.unlink("upper.txt", ((err) => {
    if (err) {
        throw err;
    }
    console.log('File deleted');
}));