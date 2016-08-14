var avengersMovie = {
	name : "Avengers",
	runtime : {time: 143, unit: "minutes"},
	releaseYear : 2012,
	director : "Joss Whedon" //Removed quotes from property name to allow dot notation access
};
function logObject(object){
	var logString = "{\n";
	for (var prop in object){
		if (typeof object[prop] == "object"){ //avoid [object Object] representation of a prop that is an object
			logString += " " + prop + ": {";
			for (var p in object[prop]){
				logString += p + ": " + object[prop][p] + ", ";
			}
			logString = logString.slice(0, logString.length - 2) + "},\n"; //Inelegant, but it gets the job done
		}
		else{
			logString += " " + prop + ": " + object[prop] + ",\n";
		}
	}
	console.log(logString.slice(0,logString.length - 2) + "\n}");
};
logObject(avengersMovie);
