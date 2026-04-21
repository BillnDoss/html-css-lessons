// let element = document.getElementById("my-element")
// let element = document.getElementsByClassName("my-class")
// let element = document.getElementsByTagName("p")
// Only gives 1 single tag/class specified
// let element = document.querySelector(".my-class")
// Selectorall gives the consle ALL the specified tag/class
// let element = document.querySelectorAll(".my-class");
// console.log(element);

let element = document.getElementById("my-element");
element.style.backgroundColor = "blue";
element.classList.add("my-class");

let paragraph = document.createElement("p");
paragraph.textContent = "This is a new paragraph from JS";
document.body.appendChild(paragraph);

// More recommended to add html elements into html file instead
// javascript addition is not recommended
let catImage = document.createElement("img");
catImage.src = "../assets/El gato.jpeg";
catImage.width = "300";
document.body.appendChild(catImage);

let myDiv = document.getElementsByClassName("my-class");
let newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph in a div with the class my-class";
// 0 makes the new element become the first paragraph inside my-class
// can change the other array indexes to rearrange the order of where it appears
myDiv[0].appendChild(newPara);

let paragraphs = document.getElementsByTagName("p");
// innerHTML makes the console element code become a normal sentence with no tags
// it also allows you to change tag content without removing the original tag in the file
console.log(paragraphs[0].innerHTML);
paragraphs[1].innerHTML = `<h1> This will replace the existing paragraph without removing the p tag</h1>`;
// These changes the cat image into a shiba from wikipedia
// one is more straightforward to replacing while the other uses a attribute
// catImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRQHdpddajkW5HWrg4HYkZVuv8MKIcy0NHQ&s";
catImage.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRQHdpddajkW5HWrg4HYkZVuv8MKIcy0NHQ&s");
// This removes the new paragraph inside the blue styled class
myDiv[0].removeChild(newPara);
