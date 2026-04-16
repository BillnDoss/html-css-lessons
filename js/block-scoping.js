var globalVar = "This is a global variable";

// 3 Types of Scope
// Global Scope - Accessible anywhere in the code
// Function Scope - Accessible inside the function
// Block Scope - Accessible within the 'block' only {}
// anything inside {} is a scope
// Let - is a block scope declaration
// Var - is a function-scope declaration

// Example of Function Scope
function exampleFunction() {
    var functionVar = "I am a function-scoped variable";
    console.log(globalVar);
    console.log(functionVar);

    if (true) {
        // var blockVar = "I am a block-scoped variable";
        let blockVar = "I am a block-scoped variable";
        console.log(blockVar);
        console.log(functionVar);
    }
    // This will not work because it is outside the designated scope with let
    // instead of a var
    // console.log(blockVar);
}

// This will not work because its not in the scope
exampleFunction();
// console.log(functionVar);

// code from Portal
for (var i = 0; i < 3; i++) {
    console.log("Inside the loop: " + i);
}

console.log("Outside the loop: " + i); // "Outside the loop: 3"
// if change the var to let it will give an error because it cannot access the loop outside the designated {}
