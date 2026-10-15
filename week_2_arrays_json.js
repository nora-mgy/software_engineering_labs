//** TIP  SWITCH TO EDITOR VIEW, pull JS tab to left, and open console, bottom left
// Stuck? Read the docs first, then ask me for help!
// But FIRST: read MDN docs – seriously, you’ll need them!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//******************* JSON & ARRAYS **************************************
//******************************************************************
// START WITH A SIMPLE DATASET

const students = [
	{ name: "Alice", age: 19, score: 88 },
	{ name: "Ben", age: 22, score: 75 },
	{ name: "Cara", age: 20, score: 95 },
	{ name: "Dan", age: 21, score: 62 },
	{ name: "Ella", age: 23, score: 81 }
];

//******************* STEP 1 **************************************
// Access and print Cara’s score
console.log(students[2].score);

//******************* STEP 2 **************************************
// Use .map() to create an array of just the student names
// DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Hint: .map() “transforms” every item in an array into something new.

// WRITE CODE BELOW

const mapped = students.map((student) => student.name);
console.log(mapped);

//******************* STEP 3 **************************************
// Use .filter() to get only the students over 21
// DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// Hint: .filter() keeps items where the function returns TRUE

// WRITE CODE BELOW

const result = students.filter((student) => student.age > 21);
console.log(result);
console.log(result[0]);

//******************* STEP 4 **************************************
// Use .find() to get the first student with a score below 70
// DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// Hint: .find() stops at the first match.

// WRITE CODE BELOW

const found = students.find((student) => student.score < 70);
console.log(found);

//******************* STEP 5 **************************************
// Use .reduce() to calculate the TOTAL of all student scores
// DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// Hint: reduce(accumulator, currentItem) → builds up a single value

// WRITE CODE BELOW

const totalScore = students.reduce(
	(total, student) => total + student.score,
	0
);
console.log(totalScore);

//******************* STEP 6 **************************************
// Calculate the AVERAGE score (hint: use .reduce and divide by length)

// WRITE CODE BELOW

const average = totalScore / students.length;
console.log(average);

//******************* STEP 7 **************************************
// Combine methods: filter students over 20, then map to just their names
// Hint: students.filter(...).map(...)

// WRITE CODE BELOW

const overTwenty = students.filter((student) => student.age > 20);
console.log(overTwenty);

const overTwentyNames = overTwenty.map((student) => student.name);
console.log(overTwentyNames);

// Cleaner, chained version
const overTwenties = students
	.filter((student) => student.age > 20)
	.map((student) => student.name);
console.log(overTwenties);

//******************* STEP 8 **************************************
// Sort the students by score (highest to lowest)
// DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// WRITE CODE BELOW

const score = students.map((student) => student.score);
score.sort((a, b) => b - a); //from highest to lowest
console.log(score);

// to keep the names with the score
const sortedStudents = [...students].sort((a, b) => b.score - a.score);
console.log(sortedStudents);

const sortedNamesAndScores = sortedStudents.map((student) => ({
	name: student.name,
	score: student.score
}));
console.log(sortedNamesAndScores);

//******************* STEP 9 **************************************
// BONUS: Imagine this data came from an API, as a JSON string.
// Convert this string to a JS object using JSON.parse
// DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

const jsonData =
	'[{"name":"Fred","age":20,"score":72},{"name":"Gina","age":22,"score":91}]';

// WRITE CODE BELOW

const parsedData = JSON.parse(jsonData);
console.log(parsedData);

//******************* STEP 10 **************************************
// BONUS CHALLENGE:
// From the combined data (students + parsed JSON),
// find the student with the highest score overall.

// WRITE CODE BELOW

const combinedStudents = [...students, ...parsedData];
console.log(combinedStudents);

const highestScore = combinedStudents.reduce((best, student) => {
	return student.score > best.score ? student : best;
});
console.log(highestScore);

//******************* COMPLEX JSON **************************************
//******************************************************************
// REALISTIC SURF FORECAST DATASET (7 DAYS, WITH LAT/LONG + IMAGES)

const surfForecast = {
	location: "Bournemouth Pier",
	latitude: 50.7167,
	longitude: -1.8667,
	forecast: [
		{
			date: "2025-10-02",
			conditions: [
				{
					time: "06:00",
					height: 0.4,
					wind: "N",
					rating: 2,
					map: "https://example.com/maps/2025-10-02-06.png"
				},
				{
					time: "12:00",
					height: 0.9,
					wind: "E",
					rating: 3,
					map: "https://example.com/maps/2025-10-02-12.png"
				},
				{
					time: "18:00",
					height: 1.2,
					wind: "SE",
					rating: 4,
					map: "https://example.com/maps/2025-10-02-18.png"
				}
			]
		},
		{
			date: "2025-10-03",
			conditions: [
				{
					time: "06:00",
					height: 1.5,
					wind: "S",
					rating: 5,
					map: "https://example.com/maps/2025-10-03-06.png"
				},
				{
					time: "12:00",
					height: 1.8,
					wind: "SW",
					rating: 5,
					map: "https://example.com/maps/2025-10-03-12.png"
				},
				{
					time: "18:00",
					height: 1.3,
					wind: "W",
					rating: 3,
					map: "https://example.com/maps/2025-10-03-18.png"
				}
			]
		},
		{
			date: "2025-10-04",
			conditions: [
				{
					time: "06:00",
					height: 0.8,
					wind: "NE",
					rating: 2,
					map: "https://example.com/maps/2025-10-04-06.png"
				},
				{
					time: "12:00",
					height: 1.0,
					wind: "E",
					rating: 3,
					map: "https://example.com/maps/2025-10-04-12.png"
				},
				{
					time: "18:00",
					height: 1.6,
					wind: "SE",
					rating: 4,
					map: "https://example.com/maps/2025-10-04-18.png"
				}
			]
		},
		{
			date: "2025-10-05",
			conditions: [
				{
					time: "06:00",
					height: 1.2,
					wind: "S",
					rating: 4,
					map: "https://example.com/maps/2025-10-05-06.png"
				},
				{
					time: "12:00",
					height: 2.0,
					wind: "SW",
					rating: 5,
					map: "https://example.com/maps/2025-10-05-12.png"
				},
				{
					time: "18:00",
					height: 1.9,
					wind: "W",
					rating: 5,
					map: "https://example.com/maps/2025-10-05-18.png"
				}
			]
		},
		{
			date: "2025-10-06",
			conditions: [
				{
					time: "06:00",
					height: 0.6,
					wind: "N",
					rating: 1,
					map: "https://example.com/maps/2025-10-06-06.png"
				},
				{
					time: "12:00",
					height: 0.7,
					wind: "NW",
					rating: 2,
					map: "https://example.com/maps/2025-10-06-12.png"
				},
				{
					time: "18:00",
					height: 1.1,
					wind: "W",
					rating: 3,
					map: "https://example.com/maps/2025-10-06-18.png"
				}
			]
		},
		{
			date: "2025-10-07",
			conditions: [
				{
					time: "06:00",
					height: 1.3,
					wind: "E",
					rating: 3,
					map: "https://example.com/maps/2025-10-07-06.png"
				},
				{
					time: "12:00",
					height: 1.5,
					wind: "SE",
					rating: 4,
					map: "https://example.com/maps/2025-10-07-12.png"
				},
				{
					time: "18:00",
					height: 1.9,
					wind: "S",
					rating: 5,
					map: "https://example.com/maps/2025-10-07-18.png"
				}
			]
		},
		{
			date: "2025-10-08",
			conditions: [
				{
					time: "06:00",
					height: 1.0,
					wind: "SW",
					rating: 3,
					map: "https://example.com/maps/2025-10-08-06.png"
				},
				{
					time: "12:00",
					height: 1.7,
					wind: "W",
					rating: 4,
					map: "https://example.com/maps/2025-10-08-12.png"
				},
				{
					time: "18:00",
					height: 2.1,
					wind: "NW",
					rating: 5,
					map: "https://example.com/maps/2025-10-08-18.png"
				}
			]
		}
	]
};

//******************* STEP 11 **************************************
// Print the location, latitude, and longitude of the forecast

// WRITE CODE BELOW

console.log(
	surfForecast.location,
	surfForecast.latitude,
	surfForecast.longitude
);

//******************* STEP 12 **************************************
// Print the wave height at 12:00 on the first day (2025-10-02)

// WRITE CODE BELOW

const firstDay = surfForecast.forecast.find((day) => day.date === "2025-10-02");
const midday = firstDay.conditions.find((hour) => hour.time === "12:00");
console.log(firstDay, midday);
console.log(midday.height);

//******************* STEP 13 **************************************
// Loop through ALL days and log each date + all condition times/heights/map
// Example for structure:

for (let t = 0; t < surfForecast.forecast.length; t++) {
	console.log(surfForecast.forecast[t].date);

	for (let c = 0; c < surfForecast.forecast[t].conditions.length; c++) {
		console.log(
			"Time",
			surfForecast.forecast[t].conditions[c].time,
			"Height",
			surfForecast.forecast[t].conditions[c].height,
			"Wind",
			surfForecast.forecast[t].conditions[c].wind,
			"Rating",
			surfForecast.forecast[t].conditions[c].rating,
			"Map",
			surfForecast.forecast[t].conditions[c].map
		);
	}
}

//******************* STEP 14 **************************************
// Find all sessions across the week with rating >= 4
// (Expect multiple results, not just one)

// WRITE CODE BELOW

const allSessions = surfForecast.forecast.flatMap((day) => day.conditions);
//flatMap is a shortcur for map each item into something
// then flatten the result inro one array

const ratingFour = allSessions.filter((session) => session.rating >= 4);
console.log(ratingFour);

//******************* STEP 15 **************************************
// BONUS: Find the absolute best surf session of the week
// (highest rating, then highest height if tie)

// WRITE CODE BELOW

const bestSession = allSessions.reduce((best, session) => {
	if (session.rating > best.rating) {
		return session;
	}
	if (session.rating === best.rating && session.height > best.height) {
		return session;
	}
	return best;
});
console.log(bestSession);

//******************* STEP 16 **************************************
// EXTRA: Print all the map links for sessions with rating = 5
// (Hint: filter first, then map to cond.map)

// WRITE CODE BELOW

const sessionFive = allSessions.filter(
	(cond) => cond.rating === 5);
const mapLinks = sessionFive.map(
	(cond) => cond.map);
console.log(mapLinks);
