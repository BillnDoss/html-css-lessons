// Loops --> Infinity Loop (Something that repeats and will never end)
// Finite Loop (Something that loops and will eventually end)
// Only use Finite Loops in programming
// Loops are basiaclly code that repeats itself until a condition is met

// It's important to know what condition causes the loop to stop
// Eating - Stomach full or food is finished
// Running - Completed number of rounds on the track
// Push-ups - Completed number of push-ups

// Now reverse those conditions, what KEEPS the loop running.
// Eating - food is still available or stomach is hungry
// Running - Have not yet reach the number of rounds
// Push-ups Have not yet completed the number of push-ups

// for (initialization; condition; iteration;){}
// intialization is only executed once (the beginning of the loop)
// condition is why it stops
// iteration is increment or decrement
// (i) is the variables name can be changed
// increment (0 - 10)
// if its lesser then
 for (var i = 0; i <= 10; i++) {
    console.log(i);
} 

// decrement (100 - 1)
for (var eat = 30; eat >= 1; eat--) {
    console.log("Number of mouthfulls left: " + eat);
} 

// Simple exercise:
// Write me a loop that prints the odd number from 1 to 30
// Combine loop with if
// % is a moduless gets remainader of what's been divided (division but use the number below instead of above)
// For Loop
// Good for number based conditions
// odd numbers use % 2 == 1
/* for (var odd = 1; odd <= 30; odd++) {
    if (odd % 2 == 1) {
        console.log(odd);
    }
} */

// While Loop
// good for external input conditions
// While(condition){}

var i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

// Simple Exercise: Write me a loop that prints even numbers
// Using while loop. 1 to 30
// even numbers use % 2 == 0
var n = 1;

while (n <= 30) {
    if (n % 2 == 0) {
        console.log(n);
    }
    n++;
}

// Pop up text input
// Loops until you give the specified answer (Yes or No)
// Forces the webpage to not refresh until given an answer
/* var input;

while (input !== "yes" && input !== "no") {
    input = prompt("Please enter 'yes' or 'no' only.");
}

console.log("User entered: " + input); */

// Write a loop that asks if you are full
// and only stops if you are full

var hunger;

while (hunger != "full") {
    hunger = prompt("Are you full? If you are, type 'full' thx.");
}

console.log("Customer Answered: " + hunger);
