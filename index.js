//This file is the orchestor for detecting words in an invoice image
const {createFile} = require('./createFile');
const fs = require('fs');
var {base64_encode} = require('./base64-encode');
var {textDetect} = require('./textDetect');

var dir = process.argv[2]; // Catches the directory as a parameter

console.log(dir);

fs.readdir(dir, (err, files) => { //Read the files in the directory
    
    if(err){
        console.log("The typed directory doesn't exists");
        return;
    }

	if (files.length == 0){
        console.log("The directory is empty");
        return;
    }

	files.forEach((file) => {
        let ext = file.split('.')[1]
        let fileName = file.split('.')[0];

        if(ext == 'png' || ext == 'jpg' || ext == 'jpeg'){
        
            let buffer = base64_encode(dir, file);

            let params = {
                Image: {
                Bytes: buffer
                },
            };

            textDetect(params).then(data => {
                createFile(data, fileName)
                .then(file =>{
                    console.log(`The file ${file} was succesfully generated`)
                })
                .catch(e => console.log(e));
            }).catch(e => console.log(e));
        } else {
            console.log(`The file ${file} is not an image`);
        }
	});
});         




    