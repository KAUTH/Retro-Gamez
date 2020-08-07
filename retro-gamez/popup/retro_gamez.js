// An array of objects containing the available games

var games = [
	{id:1, title:"Super Mario World (USA)", src:"https://www.retrogames.cc/embed/16847-super-mario-world-usa.html"},
	{id:2, title:"Super Mario Kart (USA)", src:"https://www.retrogames.cc/embed/18635-super-mario-kart-usa-hack-by-ok-impala-v1-0-super-mario-kart-the-impala-battles-custom-battle-tracks.html"}
];

var totalGames = Object.keys(games).length;

// Get the date, specifically the day as a number

var date = new Date();
var day = date.getDate();

// Select the game for the current day

if (day % totalGames == 0) {
	var index = totalGames - 1;
	var selectedGameSrc = games[index].src;
} else {
	var index = (day % totalGames) - 1;
	var selectedGameSrc = games[index].src;
}

// Add the source URL to the iframe

document.getElementById("iframe").src = selectedGameSrc;