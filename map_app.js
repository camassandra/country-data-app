//take one parameter from the command line 
//$ node map_app.js Germany
//can be read from teh global array process.argv : test it 
//

//reads and parses the 'countries.json' file, a file that is a big object containing objects and arrays of objects in output .json 
var decryptimport = require("./json-file-reader");

var file = "./countries.json";
var countryname = process.argv[2]; //refers to country name property

//2nd argument needs to be a function definition
//read up on callbacks and function definitions
//this is how a definition looks like function(){}
decryptimport(file, function(parsed){
			console.log("Country: "+ countryname);
		for (var i=0; i< parsed.length; i++) {
		if (parsed[i].name===countryname) {
			console.log("top level domain: "); 
			console.log(parsed[i].topLevelDomain);
			}
		}
});

	
		

	//jrdr.readFile("./countries.json", "utf-8", function(err, countrydata){
	//if (err) throw err;
	//var countrydata_parse = JSON.parse(countrydata);
	//console.log(countrydata_parse);
	

    //console.log(process.argv[2]+" is a country"); //just a test for argv[2] 
	
	 




	//var reader =require(./jsonfile_reader)

	

//read and parse the countries.json using JSON.parse; you could make a very small program with 


//start a  new project 
/*go to the right folder \in the command terminal
git init
npm init
less package.json
		*/ 
