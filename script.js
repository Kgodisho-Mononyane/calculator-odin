let num1;
let operator;
let num2;

const buttonContainer = document.querySelector("#button-container")

buttonContainer.addEventListener("click", (event) => {
    let target = event.target;
    switch(target.id) {
        case "delete-btn":
            console.log("delete clicked")
            break;
        case "clear-btn":
            console.log("clear clicked")
            break;
        case "remainder":
            console.log("remainder clicked")
            break;
        case "division":
            console.log("division clicked")
            break;
        case "seven":
            console.log("seven clicked")
            break;
        case "eight":
            console.log("eight clicked")
            break;
        case "nine":
            console.log("nine clicked")
            break;
        case "multiplication":
            console.log("multiplication clicked")
            break;
        case "four":
            console.log("four clicked")
            break;
        case "five":
            console.log("five clicked")
            break;
        case "six":
            console.log("six clicked")
            break;
        case "subtraction":
            console.log("subtraction clicked")
            break;
        case "one":
            console.log("one clicked")
            break;
        case "two":
            console.log("two clicked")
            break;
        case "three":
            console.log("three clicked")
            break;
        case "addition":
            console.log("addition clicked")
            break;
        case "zero":
            console.log("zero clicked")
            break;
        case "point":
            console.log("point clicked")
            break;
        case "equals":
            console.log("equals clicked")
            break;  
    }
})

//FUNCTIONALITY

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function remainder(a, b) {
    return a % b;
}

function clear() {
    //clear all data and content
}

function backspace() {
    //remove one element one by one
}

function equals() {
    //do the mathematical operation
}