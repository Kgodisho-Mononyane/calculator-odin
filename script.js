const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

/*
FOR all buttons
    button addEventListener
        IF button is clear THEN
            clear display
            clear out operate function
        ELSEIF buttons is backspace THEN
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
*/
/*
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (button.id == "clear-btn") {
            clear();
        }
        

        console.log(`${button.id} clicked`)
    })
})
*/

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
    if (b == 0) {
        return null;
    } else {
        return a / b;
    }
}

function remainder(a, b) {
    return a % b;
}

function clear() {
    display.value = "";
    //remove operate function content 
}

function backspace() {
    //remove last display element
    //remove last function element
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








