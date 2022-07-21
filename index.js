const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const screen = document.querySelector("#screen");
const dotBtn = document.querySelector("#dotBtn");
const equalBtn = document.querySelector("#equalBtn");
const clearBtn = document.querySelector("#clearBtn");
const deleteBtn = document.querySelector("#deleteBtn");

let first = "";
let second = "";
let operator = "";

digits.forEach((digit) => digit.addEventListener("click", (e) => {
    screen.innerText += e.target.textContent;
}));

operators.forEach((operator) => operator.addEventListener("click", (e) => {
    first = screen.innerText;
    setOperator(e.target.innerText);
    screen.innerText = "";
}))

dotBtn.addEventListener("click", (e) => {
    if(!screen.innerText.includes("."))
        screen.innerText += e.target.textContent;
})

equalBtn.addEventListener("click", (e) => {
    second = screen.innerText;
    screen.innerText = operate(operator, first, second).toString();
})

deleteBtn.addEventListener("click", (e) => {
    screen.innerText = screen.innerText.slice(0, -1);
})

clearBtn.addEventListener("click", (e) => {
    screen.innerText = "";
})

function setOperator(newOperator){
    operator = newOperator;
}

function add(first, second){
    return first + second;
}

function subtract(first, second){
    return first - second;
}

function multiply(first, second){
    return first * second;
}

function divide(first, second){
    if(first != 0)
        return first / second;
}

function operate(operator, first, second){
    let screen;
    first = Number(first);
    second = Number(second);

    switch(operator){
        case "+":
            screen = add(first, second);
            break;
        case "-":
            screen = subtract(first, second);
            break;
        case "×":
            screen = multiply(first, second);
            break;
        case "÷":
            screen = divide(first, second);
            break;
    }

    return screen;
}
