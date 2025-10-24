//SET display
//SET Buttons

/*
FOR all buttons
    button addEventListener
        IF the button is clear THEN
            clear display
            clear out operate function
        ELSEIF the buttons is backspace THEN
            remove the last element from display
            remove last element from operate function
        ELSEIF operator THEN
            ADD that respective operators function
            add the operator to the display
        ELSEIF the button is equals THEN
            operate function
            append operate value to display
        ElSE the button is a number THEN
            append value to display
            add value to operate function
        ENDIF

FUNCTION add
FUNCTION subtract
FUNCTION multiply
FUNCTION divide
FUNCTION remainder
FUNCTION clear
FUNCTION backspace
FUNCTION operate
FUNCTION






        */



const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (button.id == "clear-btn") {
            clear();
        }
        

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
    display.value = "";
    //clear all data and content
}

function backspace() {
    //remove one element one by one
}

function operate(num1, operator, num2) {
    add(num1, num2)
}