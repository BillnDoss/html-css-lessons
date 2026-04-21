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
    buttons[i].onclick = function () {
        alert(`Button ${i + 1} has been clicked!`);
    };
});
