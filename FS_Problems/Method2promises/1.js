import fs from 'fs';
// Method 2 Promises
// Step 1 : Convert Exisitng Callback to Promise 
function readFile(fileName){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}

readFile('1.txt')
    .then(data => {
        console.log(data.toString());
        
    })
    .catch(err => { 
        console.log(err);
        
    });