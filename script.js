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
function remainder(a, b) {return a % b;}

function divide(a, b) {
    if (b == 0) {
        return "Error";
    } else {
        return a / b;
    }
}

function clear() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(input) {
    display.value += input;
}

function operate(num1, operator, num2) {
    let displayValue = display.value;
    let operator = null;

    if (displayValue.includes("+")) operator = "+";
    else if (displayValue.includes("-")) operator = "-";
    else if (displayValue.includes("x")) operator = "x";
    else if (displayValue.includes("/")) operator = "/";
    else if (displayValue.includes("%")) operator = "%";

    if (!operator) {
        return "Error";
    }

    let [num1, num2] = displayValue.split(operator);
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    
       
}








