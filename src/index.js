

// (() => {

// })

// someArray.forEach(() => {})

// someArray.forEach(someFunctionThatHandlesArrayStuff())

// array of pokemons
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

// forEach - looping through each pokemon in the array one at a time
favouritePokemon.forEach((individualName) => {
	console.log("This is a super cool Pokemon: " + individualName)
});


// setTimeout(() => {})
// setTimeout example = waits some time, then runs code
// (schedules the code to run later, doesn't block the rest of code)
setTimeout(() => {
	console.log("Subscribe to the newsletter!");
}, 1000 * 5);   // this code set to run after 5s (1000ms * 5 or 5000ms = 5 secs)

// this log runs immediately (msg will always appear before timeout message)
console.log("Page loaded!");



// Make API requests to this endpoint to get Pokemon data:
// https://pokeapi.co/api/v2/pokemon/

// async/await example of fetching data from API
// async/await makes code look like step by step eg. fetch > wait > parse > return
async function asyncGetPokemonData(targetPokemon){
	// asks the API for pokemon data, waits for response
	let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + targetPokemon);
	// turns the response into a JSON object
	let data = await response.json();
	// logs the object (pokemon data)
	console.log(data);

	// returns the data (wrapped in a promise)
	return data;
}

// // this calls the async function, returns a promise (not the actual data straight away),
// // using .then tells JS when the Promise is done then give me the result
// asyncGetPokemonData("pikachu").then((pikachuData) => {

	// inside .then, we have the actual data as 'pikachuData'
	// JSON.stringify converts the object into a readable string with indentation (4 spaces)
	// without stringify, it would just print the object in one line
// 	console.log("pikachuData is: \n" + JSON.stringify(pikachuData, null, 4));
// });



function getPokemonData(targetPokemon){
	let result = fetch("https://pokeapi.co/api/v2/pokemon/" + targetPokemon).then((response) => {
		console.log(response);
		// if the response body contains JSON data, return that as a valid JSON object
		return response.json();
	}).then((jsonResponse) => {
		// logging the object with a string requires us to convert the object into a string manually:
		console.log("jsonResponse is: \n" + JSON.stringify(jsonResponse, null, 4));
		// logging the object directly shows the object in full:
		// console.log(jsonResponse);
		return jsonResponse;
	});


	console.log(result);
	// this prints a Promise, not the data because fetch() + response.json() are async
	// the value isn't ready yet, so JS shows pending Promise
	// if wanting the actual data here, must use .then() or await it
	// (await only works inside an async function)
	setTimeout(() => {
		// even after 2 seconds, 'result' is still a Promise
		// Promises don't turn into plain objects — they always stay promises
		// need to unwrap it with .then() to see/use the data.
		console.log(result);
	}, 2000);
}

// async/await examples


async function asyncGetMultiplePokemon(){
	// Parallel fetch requests (fetch all at once = fastest):
	// Promise.all waits until all the fetch requests are done, then returns array of results
	// let allResult = await Promise.all(
	// 	favouritePokemon.map((individualName) => {
	// 		return fetch("https://pokeapi.co/api/v2/pokemon/" + individualName).then((response) => response.json())
	// 	})
	// );
	// console.log(allResult);

	// Sequential fetch requests (fetch one at a time = slower):
	// forEach doesn't wait for each fetch, can see results being added one at a time
	let allResultSequential = [];

	favouritePokemon.forEach(async (individualName) => {
		let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + individualName);
		let data = await response.json();
		allResultSequential.push(data);
		// prints each time a pokemon is added
		console.log("Adding this Pokemon to the allResultSequential now: " + data.name);
		console.log(allResultSequential.length);

	});

	// logs the final array after all fetches are done (async)
	console.log(allResultSequential);
	console.log(allResultSequential.length);
}

asyncGetMultiplePokemon();


// Promise.all example of fetching multiple pokemon at once
// (fetches in parallel, then returns all results at once)
function getMultiplePokemon(){
	Promise.all(
		favouritePokemon.map((individualName) => {
			return fetch("https://pokeapi.co/api/v2/pokemon/" + individualName).then((response) => response.json())
		})
	).then((allResult) => {
		console.log(allResult);	// array of all pokemon data
	});


	// Promise.all([
	// 	fetch("https://pokeapi.co/api/v2/pokemon/" + "pikachu").then((response) => response.json()),
	// 	fetch("https://pokeapi.co/api/v2/pokemon/" + "squirtle").then((response) => response.json()),
	// 	fetch("https://pokeapi.co/api/v2/pokemon/" + "blastoise").then((response) => response.json()),
	// ]).then((allResult) => {
	// 	console.log(allResult);
	// });
}

// getMultiplePokemon();

// function add(num1, num2){
// 	return num1 + num2;
// }

// getPokemonData("pikachu");
