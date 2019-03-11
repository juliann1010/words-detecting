//This file allows to create a JSON file when receiving JSON data
const fs = require('fs');

let createFile = (data, fileName) =>{

    return new Promise((resolve, reject) =>{

        var file = JSON.stringify(data, null, 2); //Stringify configuration for a better view of the JSON file

        if(Object.getOwnPropertyNames(data).length === 0){
            reject('Words were not found in the image');
            return;
        }
    
        fs.writeFile(`${fileName}.json`, file, (err) => {
            if (err) reject(err);
            else{
                resolve(`${fileName}.json`);
            }
        });
    })
}

module.exports = {
    createFile
}