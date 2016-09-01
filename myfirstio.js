/**
 * Created by David on 24 Aug 2016.
 */
var fs = require('fs');

var buf = fs.readFileSync(process.argv[2].toString());
var str = buf.toString();

console.log(str.split("\n").length -1);