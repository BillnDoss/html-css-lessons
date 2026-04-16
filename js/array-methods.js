// Array Methods 1

// Length
// length shows how many things are in the array

const fruits = ["apple", "kiwi", "durian", "mango"];
console.log(fruits.length);

// Using length, can you write a loop to output all the fruits
// uses the I variable to show the fruit's names rather than value

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Addition, Subtraction, Add in the middle, Take from the middle
// Push, Pop, Shift, Unshift

fruits.push("banana");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("pineapple");
console.log(fruits);
fruits.shift();
console.log(fruits);

// Splice, Slice
// removes the second element
// if want to remove first 2 use both digits
// if want to remove only first element use 0, 1
// .splice (index, how many)
fruits.splice(1, 1);
console.log(fruits);

// Add an element in the (second) middle position
// .splice (index, 0, 'item') it can also still remove elemenets
fruits.splice(1, 0, "passion fruit");
console.log(fruits);

// You can also remove and add at the same time
// fruits.splice(1, 1, 'passion fruit')

// Sample Replacement
// changed passion fruit
fruits.splice(1, 1, "dragon fruit");
console.log(fruits);

// Slice
// .slice(start, end)
// console.log(fruits.slice(0, 3))

const firstThree = fruits.slice(0, 3);
console.log(firstThree);

// Get the last few elements
// .slice(number of elements to remove)
console.log(fruits.slice(3));