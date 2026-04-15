// Functions are basically reuse-able code that you can
// call upon to do the same thing multiple times

// This is the syntax
function sayHello() {
    console.log("I AM SAYING HELLO");
    console.log("This is what i say after Hello");
}

// This is how you invoke/call the function
sayHello();
sayHello();
sayHello();
sayHello();

// syntax with argument
function sayHelloWithName(name) {
    console.log("Hi " + name);
}

sayHelloWithName("Paul");
sayHelloWithName("Phainon");
sayHelloWithName("Cyrene");

// Need to add if else for function to change text from year to month
// Basic Version
// function sayHellowithNameAndAge(name, age){
//     console.log("Hi " + name + " and you are " + age + " years old")
// }

function sayHellowithNameAndAge(name, age, yearOrMonth) {
    if (yearOrMonth == "year") {
        console.log("Hi " + name + " and you are " + age + " years old");
    } else {
        console.log("Hi " + name + " and you are " + age + " months old");
    }
}

sayHellowithNameAndAge("Trailblazer", "1", "year"); //remove year since its for if else version
sayHellowithNameAndAge("Dan Heng", "200", "year");
sayHellowithNameAndAge("March", "7", "month");

// Return Statement
// evaulate the return statement "n1 + n2" back to function name "add"
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(5, 7));

var num1 = 12;
var num2 = 32;
const sum = add(num1, num2); //44, the return makes the function give back a value, in this case the final sum of the two numbers
console.log(sum);

function sampleReturnStatement() {
    return "This is a sample string"; // This will make the function give back a string value
}
const sampleString = sampleReturnStatement(); //Returns this is a sample string so it is assigning "This is a sample string to the varaiable 'samplestring'
console.log(sampleString);

function subtract(n1, n2){
    return n1 - n2
}
var bigNum = 144
var smallNum = 50
const difference = subtract(bigNum, smallNum) //94
console.log(difference) //94

var anotherBigNum = 300
var anotherSmallNum = 140
const anotherDifference = subtract(anotherBigNum, anotherSmallNum) // 160
console.log(anotherDifference) 

function toCelsius(farenheit){
    return (5/9) * (farenheit - 32)
}
console.log(toCelsius(90)) // 32.222222