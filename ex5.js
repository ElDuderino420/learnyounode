/**
 * Created by David on 24 Aug 2016.
 */
var fs = require('fs');



function sorta(item) {
    var type = item.split('.');
    return type[type.length-1] == process.argv[3] && type.length != 1;
}

fs.readdir(process.argv[2], function done(err, list){

        var items = list.toString().split(",");
        var filtered = items.filter(sorta);

        for(var l in filtered){
            console.log(filtered[l]);
        }
    });


var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
    if (err) return console.error(err)
    files.forEach(function(file) {
        if (path.extname(file) === ext) {
            console.log(file)
        }
    })
})
