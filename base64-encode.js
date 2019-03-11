const fs = require('fs');

var base64_encode = (dir, file) => {
    image = `${dir}/${file}`;
    let bitmap = fs.readFileSync(image);
    let buffer = new Buffer.from(bitmap, 'base64');
    return buffer;
}

module.exports = {
    base64_encode
}