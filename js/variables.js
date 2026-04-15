// allows the value or name to be changed
var x = 5;
x = 20;
console.log(x); // Output: 20

// forces it to be a specific name or value no matter what
const y = 30;
//y = 40 //This will produce an error because a is a constant variable

console.log(x + y); // 50

var firstName = "Paulchris";
var lastName = "Yeow";

console.log(firstName + lastName); //PaulChrisYeow
console.log(firstName + " " + lastName); //PaulChris Yeow

/* 
Pirmitive Data Types
String: Represent text, e.g: your name
Numbers (Integers): For math computations
                    Written without quotes (")
Float (Decimal): Also for math, but is decimal
Booleans: True or False values (1 or 0)
*/

// Special Data Type - Undefined and Null
// Undefined: Before a value is assigned - var x
// Null: Absence of a value / No Value - var x = null
// NaN : Not a Number (trying to do something with math that isnt math related)
// Both are different from 0.

// Non-Primitive Data Types - Arrays and Objects
// Arrays

// stores a large of amount of data
// 0 displays the first data
// arranged in sequence and uses numbers instead of text

var anArray = [1, 2, 3, 4, 5];
console.log(anArray[0]); // 1
console.log(anArray[1]); // 2
console.log(anArray[2]); // 3

var fruits = ["Apple", "Orange", "Banana"];
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Banana

// Objects
// no order and uses key value pair
// key: "value"

// const movie = {
//     name: "Avengers: Endgame",
//     year: "2019",
//     directors: "Anthony Russo, Joe Russo",
//     runningTime: "3h 1m",
//     storyBy: "Stan Lee, Jack Kirby, Jim Starlin",
// };
// console.log(movie.name);
// console.log(movie.year);
// console.log(movie.storyBy);

// Arrays are sequential (arranged in order of numbers)
// Starts from 0
// Objects are used by key-value pairs
// Left Side: Key, Right side: Value

// Objects with Arrays
// can be converted into arrays by adding square brackets
// add square brackets behind the constant name and value (position) of the object
// Below is Arrays within an object
const movie1 = {
    /*renamed to movie1 */ name: "Avengers: Endgame",
    year: "2019",
    directors: ["Anthony Russo, Joe Russo"],
    runningTime: "3h 1m",
    storyBy: ["Stan Lee, Jack Kirby, Jim Starlin"],
};
console.log(movie1.directors[0]);

// Arrays of Objects
const movie2 = {
    name: "Up",
    year: "2009",
    directors: ["Pete Doctor"],
    runningTime: "1h 35m",
    storyby: ["Pete Doctor", "Tom McCarthy", "Bob Peterson"],
};

const movies = [movie1, movie2];
console.log(movies);
console.log(movies[1].storyby[1]); //Tom McCarthy

// Multi-dimensional array (20 Array)
// What we have learned is 1D Array
// Its possible to have an array inside an array within this section

const heroes = [
    ["ironman", "spiderman", "hulk"],
    ["superman", "batman", "green arrow"],
    ["Phainon/Khaslana", "Cyrene/Demiurge", "Trailblazer/Deliverer"],
];

console.log(heroes[0][1]); /* Spider */
console.log(heroes[1][2]); /* Green Arrow */
console.log(heroes[2][0]); /* Phainon */
