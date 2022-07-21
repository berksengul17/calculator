const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const result = document.querySelector(".result");
const dotBtn = document.querySelector(".dotBtn");
const equalBtn = document.querySelector(".equalBtn");

let first = "";
let second = "";
let operator = "";

digits.forEach((digit) => digit.addEventListener("click", (e) => {
    result.innerText += e.target.textContent;
}));

operators.forEach((operator) => operator.addEventListener("click", (e) => {
    first = result.innerText;
    setOperator(e.target.innerText);
    result.innerText = "";
}))

dotBtn.addEventListener("click", (e) => {
    if(!result.innerText.includes("."))
        result.innerText += e.target.textContent;
})

equalBtn.addEventListener("click", (e) => {
    second = result.innerText;
    result.innerText = operate(operator, first, second).toString();
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
    let result;
    first = Number(first);
    second = Number(second);

    switch(operator){
        case "+":
            result = add(first, second);
            break;
        case "-":
            result = subtract(first, second);
            break;
        case "×":
            result = multiply(first, second);
            break;
        case "÷":
            result = divide(first, second);
            break;
    }

    return result;
}
