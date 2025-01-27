//VARIABLES
let number1 = "";
let operator = "";
let number2 = "";

//QUERY SELECTORS
display = document.querySelector("#display");
display.textContent = "hello";

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
    deleteFunction()
})

equalsBtn.addEventListener("click", () => {
    equals();
})

//FUNCTIONS
function operate() {

}

function clear() {
    display.textContent = "";
}

function brackets() {
}

function percentage() {
}

function division(a, b) {
    return a/b;
}

function multiplication(a, b) {
    return a * b;
}

function subtraction(a, b) {
    return a - b
}

function addition(a, b) {
    return a + b
}

function point() {
}

function deleteFunction() {
}

function equals() {
}