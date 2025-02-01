//VARIABLES
let number1 = "";
let operator = "";
let number2 = "";

//QUERY SELECTORS
display = document.querySelector("#display");

clearBtn = document.querySelector("#clear-btn");
bracketsBtn = document.querySelector("#brackets");
percentageBtn = document.querySelector("#percentage");
divisionBtn = document.querySelector("#division");
multiplicationBtn = document.querySelector("#multiplication")
subtractionBtn = document.querySelector("#subtraction");
additionBtn = document.querySelector("#addition");
pointBtn = document.querySelector("#point");
deleteBtn = document.querySelector("#delete");
equalsBtn = document.querySelector("#equals");


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