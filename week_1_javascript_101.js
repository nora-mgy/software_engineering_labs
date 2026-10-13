//** TIP  SWITCH TO EDITOR VIEW, pull JS tab to left, and open console, bottom left

// !!!! You Might be comfortable with the fundamentals, so feel free to skip down to Objects & Classes !!!!

// Stuck? Read the docs first, then ask me for help!
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

//******************* FUNDAMENTALS **************************************

//**STEP 1**: create a variable called `myName` and set it to the value of your actual name

// WRITE CODE BELOW THIS COMMENT

const myName = "Nora";

//**STEP 2**: create a new variable called "age" and set it to your age. Print the type of this variable to the console.

// WRITE CODE BELOW THIS COMMENT

const age = 21;
console.log(typeof age);

//**STEP 3**: Set a new variable called sentence to a string that reads like: My name is Sam and I am 21 Years Old. Use String Interpolation to achieve this. Print this to the console when you are done.

// WRITE CODE BELOW THIS COMMENT

const sentence = `My name is ${myName} and I am ${age} years old.`;
console.log(sentence);

//**STEP 4**: create an IF/ELSE statement that logs the myName variable and the string " is an adult" if your age variable is 18 or over OR myName + " is not an adult" if your age variable is below 18 years old.

// WRITE CODE BELOW THIS COMMENT

if (age >= 18) {
	console.log(`${myName} is an adult.`);
} else {
	console.log(`${myName} is not an adult.`);
}

//**STEP 5**: write another IF/ELSE statement that evaluates to true if the day is Tuesday.

// WRITE CODE BELOW THIS COMMENT
let day = "Tuesday";
if (day === "Tuesday") {
	console.log(true);
} else {
	console.log(false);
}

//**STEP 6**: Copy and Paste your Step 5 code below. Modify it so it uses the Ternary Operator

// WRITE CODE BELOW THIS COMMENT

day === "Monday" ? console.log(true) : console.log(false);

//**STEP 7**: Write a function called: daysOnEarth that returns the number of days that someone has been on the planet for. Hint: this function should take one parameter.

// WRITE CODE BELOW THIS COMMENT

function daysOnEarth(age) {
	console.log(age * 365);
}
daysOnEarth(27);

//**STEP 8**: Add a default parameter to your function in Step 7.

function daysOnEarthB(age = 21) {
	console.log(age * 365);
}
daysOnEarthB();
daysOnEarthB(10);

//**STEP 9**: Write a function of your choice using the arrow notation

// WRITE CODE BELOW THIS COMMENT
// double the number function

const doubleNumber = (number) => {
	return number * 2;
};
console.log(doubleNumber(5));
console.log(doubleNumber(1.25));

//**STEP 10**: Write two more function using the arrow notation format.
// WRITE CODE BELOW THIS COMMENT
// example 1

const addFive = (number) => {
	return number + 5;
};
console.log(addFive(10));
console.log(addFive(2));

// example 2

const multiplyNumber = (numA, numB) => {
	return numA * numB;
};
console.log(multiplyNumber(2, 5));
console.log(multiplyNumber(3, 9));

//******************* CLASSES **************************************
//******************************************************************

//**STEP 1**: Create a class that represents any 'Animal' you choose

//**STEP 2**: Make two seperate instances of your 'Animal' class

class Animal {
	constructor(breed, name) {
		this._breed = breed;
		this._name = name;
	}
}
const animal1 = new Animal("spaniel", "Layla");
const animal2 = new Animal("staffy", "Diamond");
console.log(animal1);
console.log(animal2);

//**STEP 3**: Make a class that represents a 'Car', add some properties, some getters/setters, and two more functions of your choice

class Car {
	constructor(brand, model, colour) {
		this._brand = brand;
		this._model = model;
		this._colour = colour;
	}
	get brand() {
		return this._brand;
	}
	get model() {
		return this._model;
	}
	get colour() {
		return this._colour;
	}
	set colour(newColour) {
		this._colour = newColour;
	}
	startCar() {
		console.log("Car started.");
	}
	stopCar() {
		console.log("Car stopped.");
	}
}

//**STEP 4**: Make two seperate instances of your 'Car' class

const car1 = new Car("Nissan", "Qashqai", "black");
const car2 = new Car("Audi", "Q7", "grey");

console.log(car1.brand);
console.log(car2.colour);

car1.startCar();
car2.stopCar();

console.log(car1.colour);
car1.colour = "white";
console.log(car1.colour);

//******************* OBJECTS **************************************
//******************************************************************

const exampleObject = {
	exampleKey: "exampleValue",
	exampleKey2: "exampleValue2"
};

console.log(exampleObject.exampleKey);
console.log(exampleObject["exampleKey2"]);

//**STEP 1**: Look at the exampleObject literal, create an object literal representing you! Have at least 5 properties (e.g., name, hometown, favourite chocolate bar...etc)

const me = {
	name: "Nora",
	hometown: "Swanage",
	age: 27,
	favouriteChocolate: "Twix",
	favouriteColour: "black"
};

//**STEP 3**: Log the entire object literal to the console.
console.log(me.name);
console.log(me.hometown);
console.log(me.age);
console.log(me.favouriteChocolate);
console.log(me.favouriteColour);

console.log(me);

//**STEP 4**: Log each individual properties from Step 1 using the dot notation or bracket notation.

let someone = me.name;
let live = me.hometown;
let years = me.age;
let snack = me.favouriteChocolate;
let colour = me.favouriteColour;

console.log(someone);
console.log(live);
console.log(age);
console.log(snack);
console.log(colour);

//**STEP 5**: create an object literal with exactly one function that takes one parameter

let calculator = {
	double: function (number) {
		return number * 2;
	}
};
console.log(calculator.double(6));

//**STEP 6**: create an object literal that represents a movie character, give it some properites and a few functions that say famous quotes when called.

const movieCharacter = {
	name: "Wiggle Bumm",
	movie: "Layla",
	species: "Dog",

	quoteOne: function (quote) {
		console.log("Sniffing is like reading the news paper.");
	},

	quoteTwo: function (quote) {
		console.log("Why walk when you can run.");
	}
};

movieCharacter.quoteOne();
movieCharacter.quoteTwo();

//**STEP 7**: Write another object literal that represents a food item. Give it a quantitiy and price (as if it were a product on a website)

const foodItem = {
	name: "avocado",
	quantity: 6,
	price: 1.99,

	totalPrice: function () {
		console.log("Total price is £", this.quantity * this.price);
	}
};

foodItem.totalPrice();

//************* LOOPS *****************
//******************************************************************

//**STEP *1* Create a FOR loop that runs from 0 to 9.

for (let counter = 0; counter <= 9; counter++) {
	console.log(counter);
}

//**STEP *2* Create a loop that runs WHILE i is less than 10.

let i = 0;
while (i < 10) {
	console.log(i);
	i++;
}

//**STEP *3* Create a loop that runs WHILE long as i is less than 10, but increase i by 2 each time.

let e = 0;
while (e < 10) {
	console.log(e);
	e += 2;
}

//**STEP *4* Uncomment and Finish the loop below. Replace the ??? with code.

let f = 99;
while (f > 0) {
	console.log(f + " bottles of beer on the wall");
	f--;
}

//**STEP *4* Modify the loop above so it is a DO WHILE loop
let k = 99;
do {
	console.log(k + " bottles of beer on the wall");
	k--;
} while (k > 81);

//**STEP *5* Write a nested FOR LOOP

const numbersA = [0, 1, 2, 3];
const numbersB = [2, 3, 4, 5];
const numbersMutual = [];

for (let g = 0; g < numbersA.length; g++) {
	for (let h = 0; h < numbersB.length; h++) {
		if (numbersA[g] === numbersB[h]) {
			numbersMutual.push(numbersA[g]);
		}
	}
}
console.log(numbersMutual);

//************* ARRAYS *****************
//******************************************************************

//**STEP *1*: What is the second element of this array? Print it to the console.

let lotteryNumbers = [44, 48, 22, 3, 4, 78];
console.log(lotteryNumbers[1]);

//**STEP *2*: Print the 0th element of this array to the console.
let hotelFloors = [
	"Ground Floor",
	"First Floor",
	"Second Floor",
	"Third Floor",
	"Executive Floor"
];
console.log(hotelFloors[0]);

//**STEP *3*: Add 3 animals to the array intialization below
let animals = ["dog", "squirrel", "meerkat"];

//**STEP *4*: Print the whole array to the console
console.log(animals);

//**STEP *5*: Print the length of the animals array to the console
console.log(animals.length);

//**STEP *6*: Using push (see MDN link), add another animal to the array
animals.push("dolphin");
console.log(animals);

//**STEP *7*: Declare and initialize an array called 'Planets' with 5 string values
let Planets = ["Pluto", "Mars", "Uranus", "Neptune", "Venus"];

//**STEP *8*: Console.log each item in the 'Planets' array on a seperate line
console.log(Planets);

for (let i = 0; i < Planets.length; i++) {
	console.log(Planets[i]);
}

//**STEP *9*: Using a loop, iterate through this array and console.log all of the people.

// WRITE CODE BELOW THIS COMMENT

let people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++){
	console.log(people[i]);
}

//**STEP *10*: On the 'people' array above, use a new function you've found from reading the Arrays MDN pages.
people.push("Dave");
people.forEach((people) => console.log(people));

