//This file uses AWS for detecting words out of an image

var AWS = require('aws-sdk');
// Load credentials and set region from JSON file
AWS.config.loadFromPath('./config.json');
var rekognition = new AWS.Rekognition({apiVersion: '2016-06-27'});
var s3 = new AWS.S3({apiVersion: '2006-03-01'});

let textDetect = params =>{
    return new Promise((resolve, reject) => {
        rekognition.detectText(params, function(err, data) {
            if (err){ // an error occurred
                reject(console.log(err, err.stack));
             } 
            else{  // successful response
                resolve(data)                              
            }
        })
    })
}

module.exports = {
    textDetect
}