function dayOfYear() {
	// this function calculates the day of the year
	// e.g. January 3 should be 3 and February 1 should be 32
	// https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366#:~:text=function%20getDayOfYear(date)%20%7B%20let,i%2B1%2C%200).

	const now = new Date();
	const start = new Date(now.getFullYear(), 0, 0);
	const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
	const oneDay = 1000 * 60 * 60 * 24;
	const day = Math.floor(diff / oneDay);

	return day;
}

async function main() {
	// Getting the array of objects containing the available games from a local JS file, stored in the gameList variable
	const response = await fetch('https://raw.githubusercontent.com/KAUTH/Retro-Gamez/master/retro-gamez/popup/game_list.json');
	const games = await response.json();
	const totalGames = Object.keys(games).length;

	// Get the date, specifically the day as a number
	const day = dayOfYear();
	let selectedGameSrc;

	// Select the game for the current day
	if (day % totalGames == 0) {
		let index = totalGames - 1;
		selectedGameSrc = games[index].src;
	} else {
		let index = (day % totalGames) - 1;
		selectedGameSrc = games[index].src;
	}

	console.log(selectedGameSrc);
	// Add the source URL to the iframe
	document.getElementById("iframe").src = selectedGameSrc;
}

main()