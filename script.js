let num1;
let operator;
let num2;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        console.log(`${button.id} clicked`)
    })
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

function operate(num1, operator, num2) {
    add(num1, num2)
}

function populate() {
    
}