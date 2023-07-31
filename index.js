//Path Example
const path = require('path');
console.log(path.join(__dirname, 'index.js'));

//fs Example
const fs = require('fs');
fs.writeFile('laiquahcotie3.txt', 'Laiquah cotie Loves Ganiefah', function(err){
    try{
        console.log("Finished!")
    } catch(err){
        throw (err)
    }
})

//os Example
const os = require('os');
console.log("Hostname:" + os.hostname());