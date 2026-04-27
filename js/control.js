// If-Else Statements
// If is used when a boolean is set to true
// Else is used when a boolean is set to false
const color = "red";
if (color == "green") {
    console.log("Go");
} else {
    console.log("Stop");
}

const myAge = 16;
if (myAge > 18) {
    console.log("You may enter");
} else {
    console.log("You SHALL NOT PASS");
}

// If-Else If Statement
// Else If is only used when there's 2 lines of code needed
const grade = 80;
if (grade >= 90) {
    console.log("Excellent Performance!");
} else if (grade >= 80) {
    console.log("Good Performance");
} else if (grade >= 70) {
    console.log("Acceptable Performance");
} else if (grade >= 60) {
    console.log("Fair Performance");
} else if (grade >= 50) {
    console.log("Bad Performance");
} else {
    console.log("YOU FAILED");
}

// if want single quote inside code need to use double quote outside sentence
const longString = 'This is a long "Sentence"';
console.log(longString);
