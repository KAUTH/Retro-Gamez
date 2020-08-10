function dayOfYear() {
	// this function calculates the day of the year
	// e.g. January 3 should be 3 and February 1 should be 32
	// https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366#:~:text=function%20getDayOfYear(date)%20%7B%20var,i%2B1%2C%200).
	
	var now = new Date();
	var start = new Date(now.getFullYear(), 0, 0);
	var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
	var oneDay = 1000 * 60 * 60 * 24;
	var day = Math.floor(diff / oneDay);
	
	return day;
}

// Getting the array of objects containing the available games from a local JS file, stored in the gameList variable
var games = gameList;
var totalGames = Object.keys(games).length;

// Get the date, specifically the day as a number
var day = dayOfYear();

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
