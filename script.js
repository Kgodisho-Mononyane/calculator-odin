//VARIABLES
let number1 = "";
let operator = "";
let number2 = "";

//QUERY SELECTORS
const display = document.querySelector("#display");

const clearBtn = document.querySelector("#clear-btn");
const bracketsBtn = document.querySelector("#brackets");
const percentageBtn = document.querySelector("#percentage");
const divisionBtn = document.querySelector("#division");
const multiplicationBtn = document.querySelector("#multiplication")
const subtractionBtn = document.querySelector("#subtraction");
const additionBtn = document.querySelector("#addition");
const pointBtn = document.querySelector("#point");
const deleteBtn = document.querySelector("#delete");
const equalsBtn = document.querySelector("#equals");


//EVENT LISTENERS
clearBtn.addEventListener("click", () => {
    clear();
})

bracketsBtn.addEventListener("click", () => {
    brackets();
})

percentageBtn.addEventListener("click", () => {
    percentage();
})

divisionBtn.addEventListener("click", () => {
    division();
})

multiplicationBtn.addEventListener("click", () => {
    multiplication();
})

subtractionBtn.addEventListener("click", () => {
    subtraction();
})

additionBtn.addEventListener("click", () => {
    addition();
})

pointBtn.addEventListener("click", () => {
    point();
})

deleteBtn.addEventListener("click", () => {
    deleteFunction();
})

equalsBtn.addEventListener("click", () => {
    equals();
})

//FUNCTIONS
function appendToDisplay() {
    display.value += input;
}


function operate() {

}

function clear() {
    //function that clears out the display completely
}

function brackets() {
}

function percentage() {
}

const division = (a, b) => a/b;
const multiplication = (a, b) => a * b;
const subtraction = (a, b) => a - b;
const addition = (a, b) => a + b;


function point() {
    //function that adds a dot to the display for fractional numbers
}

function deleteFunction() {
    //function that deletes the last value of the display
}

function equals() {
}