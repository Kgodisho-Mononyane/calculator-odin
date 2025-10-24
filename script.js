const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id == "clear-btn") {
            clear();
        } else if (button.id == "delete-btn") {
            backspace();
        } else if (button.id == "addition") {
            appendToDisplay("+");
        } else if (button.id == "subtraction") {
            appendToDisplay("-");
        } else if (button.id == "multiplication") {
            appendToDisplay("x");
        } else if (button.id == "division") {
            appendToDisplay("/");
        } else if (button.id == "remainder") {
            appendToDisplay("%");
        } else if (button.id == "equals") {
            operate();
        } else if (button.id == "point") {
            appendToDisplay(".")
        } else {
            appendToDisplay(button.textContent);
        }
    });            
});


//FUNCTIONALITY
function add(a, b) {return a + b;}
function subtract(a, b) {return a - b;}
function multiply(a, b) {return a * b;}

function divide(a, b) {
    if (b == 0) {
        return null;
    } else {
        return a / b;
    }
}

function remainder(a, b) {return a % b;}

function clear() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
    console.log("backspace clicked")
    //remove last display element
    //remove last function element
}

function appendToDisplay(input) {
    display.value += input;
}

function operate(num1, operator, num2) {
    // take in num1, num2 and operator
    // IF num1, num2 or operator is missing THEN
    //     return Null

    if (operator == "add") {
        return add(num1,num2);
    } else if (operator == "subtract") {
        return subtract(num1, num2);
    } else if (operator == "multiply") {
        return multiply(num1, num2);
    } else if (operator == "divide") {
        return divide(num1, num2);
    } else if (operator == "remainder") {
        return remainder(num1, num2);
    } else {
        return null;
    }   
}








