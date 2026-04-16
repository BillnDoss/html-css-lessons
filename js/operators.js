//Assignment Operator
//let p = 5;
//p += 2; // same as p = p + 2
//p -= 3; // same as p = p - 3
//p *= 12; // same as p = p * 12
//p /= 8; // same as p = p / 8
const myVar = 50;

// Comparison Operators
// > (greater than)
// < (less than)
// >= (greater than or equal to)
// <= (less than or equal to)
// != (not equal)
// == (equal)
// !== (strict not equal)
// === (strict equal) (checks data type)

console.log(myVar == 50); // true
console.log(30 > 50); // false
console.log(40 < 80); // true
console.log(35 >= 27); // true
console.log(60 <= 70); // true
console.log(80 != 81); // true
console.log(80 != 79); // true
console.log(50 == "50"); // true
console.log(80 != "80"); // false
console.log(50 === "50"); // false
console.log(80 !== "80"); // true

console.log("---------------------");

// Logical Operators
// AND, OR
// &&, ||
// AND needs both sides to be true in order to function, OR needs either side to be true
console.log(50 == 50 && 20 == 15); // false
console.log(50 == 50 || 20 == 15); // true
console.log(50 == 50 && 20 > 15); // true
console.log(50 == 50 || 20 < 15); // true
