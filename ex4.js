/**
 * Created by David on 24 Aug 2016.
 */
var fs = require('fs');

var num = undefined;
var path = process.argv[2];

function read(callback) {
    fs.readFile(path, "utf8", function doneReading(err, fileContents){
        num = fileContents.split("\n").length -1;
        callback();
    })
}

function done(){
    console.log(num);
}

read(done);