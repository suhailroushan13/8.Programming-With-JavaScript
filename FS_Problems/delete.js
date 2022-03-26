import fs from 'fs';

fs.unlink('delete.txt', (err) => {
    if (err) {
        throw err;
    }
    console.log('File deleted');
}); 