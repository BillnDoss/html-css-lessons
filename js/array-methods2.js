// const numbers = [1, 2, 3, 4, 5];

// For Each Method
// numbers.forEach(function(number) {
//     console.log(number);
// })

// numbers.forEach(function (number, index, array) {
//     /* Take note: ' and ` are different things.
//     One of them is a single quote
//     the other is known as a back-tick.
//     ` should be above your tab key on the left side of your keyboard (tilde key)
//     */
//     console.log(`Number ${number} is at index ${index}`);
// });

// .map() Method

// const doubledNumbers = numbers.map(function (number) {
//     return number * 2;
// });

// console.log(doubledNumbers);

// // With the .map method, can you triple the numbers?
// const tripledNumbers = numbers.map(function (number) {
//     return number * 3;
// });
// console.log(tripledNumbers);
// // With the .map method, can you increase all numbers by 2?
// const newNumbers = numbers.map(function (number) {
//     return number + 2;
// });

// console.log(newNumbers);

// You may call it newNumbers

// .find() and findIndex() methods

const numbers = [1, 3, 5, 6, 7, 9];

const firstEven = numbers.find(function (number) {
    return number % 2 === 0;
});
console.log(firstEven); //Output: 6

const FirstEvenIndex = numbers.findIndex(function (number) {
    return number % 2 === 0;
});
console.log(FirstEvenIndex); //Output: 3

// Given array of numbers below
const newNumbers = [100, 300, 600, 200, 1300, 900, 1600];

// Write me the .find() method for the first number above 1000
const FirstNumber = newNumbers.find(function (number) {
    return number > 1000;
});
console.log(FirstNumber); //Output : 1300
// And the .findIndex() method for the firt number above 1500
const FirstNumberIndex = newNumbers.findIndex(function (number) {
    return number > 1500;
});
console.log(FirstNumberIndex); //Output: 6

// filter () Method

const basicNumber = [1, 2, 3, 4, 5];

const evenNumbers = basicNumber.filter(function (number) {
    return number % 2 === 0;
});

console.log(evenNumbers); //Output: [2, 4]

/*
    Based on the example above, write me the .filter function
    For newNumbers const, for values above 1000,
    and another one for values below 800.
*/

const HigherThan1000 = newNumbers.filter(function (number) {
    return number > 1000;
});
console.log(HigherThan1000);

const LowerThan800 = newNumbers.filter(function (number) {
    return number < 800;
});
console.log(LowerThan800);

// .some() Method

const fruits = ["apple", "banana", "orange", "grape", "mango"];

const hasBanana = fruits.some(function (fruit) {
    return fruit === "banana";
});

console.log(hasBanana); // Output: true

// .concat() Method
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const newArray = array1.concat(array2); // Output: [1, 2, 3, 4, 5, 6]

console.log(newArray);

// .toString() / .join() Methods

// only uses comma inbetween elements
const fruitString = fruits.toString();
console.log(fruitString);

// Join method is to use a different seperator inbetween elements
const fruitsWithDash = fruits.join("-");
console.log(fruitsWithDash);
