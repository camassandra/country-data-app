/*This module should have a function that takes in a filename and a callback function as a parameter. 
It should then read that file, then parse the JSON. Finally, it should call the callback function and pass 
the parsed JSON to it.
One way to think of this module is as a helper that can read and parse any JSON file. 
It has nothing to do with 'countries', so to speak.
Another way to think of it is as a small wrapper to fs.readFile, except that this 
function only works with JSON files.*/ 


var fs= require("fs");

var decrypt = function (filename, callback){
	fs.readFile(filename, 'utf-8', function(err, data) {
	if (err){
		console.log('not good');
		throw err //and here the function stops and the rogram crashes if there is an error
	}

	var countrydata_parse = JSON.parse(data);

	callback (countrydata_parse);
	});
};

module.exports = decrypt;

