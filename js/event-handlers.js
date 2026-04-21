/* What are Event Handlers?
Event Handlers are basically JavaScript
DOM Methods for when events happen in your browser.
E.g.: Click Events.
Get the DOM element first
*/
// let myButton = document.getElementById("myButton");

// Add a click event handler
// upon click activates a popup that can be closed
// myButton.onclick = function () {
//     alert("Button clicked!");
// };

// Selects all the buttons
let buttons = document.querySelectorAll(".myButton");
// Uses a loop to add a listener to all the buttons
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].onclick = function () {
//         alert(`Button ${i + 1} has been clicked!`);
//     };
// }

// Can you do the same with a .forEach loop?
// need to add variable name behind foreach
// replace foreach with function and function (name, index)
buttons.forEach(function (button, i) {
    //     buttons[i].onclick = function () {
    //         alert(`Button ${i + 1} has been clicked!`);
    //     };
    // });

    // EventListener
    // unable to add multiple events into a single eventlistener
    button.addEventListener("click", function () {
        alert(`Button ${i} was clicked!`);
    });
    // removes the entire button function
    // button.removeEventListener("click");
});
// makes buttons change color on hover like css but it wont revert back to default color
buttons.forEach(function (button) {
    // button.onmouseover = function () {
    //     button.style.backgroundColor = "green";
    // };
    button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "green";
    });
    button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "yellow";
    });
});

// after adding anything into the input text box and pressing enter or clicking away activate a popup
const myInput = document.getElementById("myInput");
// myInput.onchange = function () {
//     alert("Input value changed!");
// };
// adding event inside the function bracket allows it to be targeted example is the code below
// default function is the alert above
myInput.addEventListener("change", function (event) {
    const inputValue = event.target.value;
    alert(`The input is ${inputValue}`); //Output The input is (inputted value abc, 123)
});

// Pressing a key inside the input box while log it inside the console
// key shows the button pressed
// keyCode shows the button code instead ex. s = 83
// This is often used by hackers to get password even as simple as typing in the fake input
// without pressing enter or clicking away can comprimise your details
myInput.onkeydown = function (event) {
    console.log(event.key);
};

// function only works if you scroll down the webpage
// for example it logs everytime you scroll down in console
let myWindow = window;

myWindow.onscroll = function () {
    console.log("Window scrolled!");
};
