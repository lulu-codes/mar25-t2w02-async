

// (() => {

// })

// someArray.forEach(() => {})

// someArray.forEach(someFunctionThatHandlesArrayStuff())


let favouritePokemon = [
	"haunter",
	"tyranitar",
	"gengar",
	"snorlax",
	"jigglypuff",
	"bulbasaur",
	"hitmonlee",
	"blastoise",
	"pikachu"
];

favouritePokemon.forEach((individualName) => {
	console.log("This is a super cool Pokemon: " + individualName)
});


// setTimeout(() => {})

setTimeout(() => {
	console.log("Subscribe to the newsletter!");
}, 1000 * 5);


console.log("Page loaded!");



// Make API requests to this endpoint to get Pokemon data:
// https://pokeapi.co/api/v2/pokemon/

function getPokemonData(targetPokemon){
	let result = fetch("https://pokeapi.co/api/v2/pokemon/" + targetPokemon).then((response) => {
		console.log(response);
		// If the response body contains JSON data, return that as a valid JSON object
		return response.json();
	}).then((jsonResponse) => {
		// Logging the object with a string requires us to convert the object into a string manually:
		console.log("jsonResponse is: \n" + JSON.stringify(jsonResponse, null, 4));
		// Logging the object directly shows the object in full:
		// console.log(jsonResponse);
		return jsonResponse;
	});


	console.log(result);
	setTimeout(() => {
		console.log(result);
	}, 2000);

}

// function add(num1, num2){
// 	return num1 + num2;
// }

getPokemonData("pikachu");
