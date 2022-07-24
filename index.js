const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const screen = document.querySelector("#screen");
const dotBtn = document.querySelector("#dotBtn");
const equalBtn = document.querySelector("#equalBtn");
const clearBtn = document.querySelector("#clearBtn");
const deleteBtn = document.querySelector("#deleteBtn");

let first = "";
let second = "";
let operator = null;

window.addEventListener("keydown", handleKeyboardInput);
deleteBtn.addEventListener("click", deleteNum);
clearBtn.addEventListener("click", reset);
equalBtn.addEventListener("click", evaluate);
dotBtn.addEventListener("click", addDot);

digits.forEach((digit) => digit.addEventListener("click", () => addNum(digit.innerText)));
operators.forEach((operatorButton) => operatorButton.addEventListener("click", (e) => setOperator(e.target.innerText)));



function addNum(digit){
    if(screen.innerText === "0") 
        screen.innerText = "";

    screen.innerText += digit;
}

function deleteNum(){
    screen.innerText = screen.innerText.slice(0, -1);
}

function addDot(){
    if(screen.innerText.includes(".")) return;
    
    if(screen.innerText === ""){
        screen.innerText += "0";        
    }
    screen.innerText += ".";
}

function setOperator(newOperator){
    if(operator){
        second = screen.innerText;
        screen.innerText = operate(operator, first, second).toString();
    }

    operator = newOperator;
    first = screen.innerText;
    screen.innerText = "";
}

function evaluate(){
    if(second === ""){
        second = screen.innerText;
    }

    first = operate(operator, first, second).toString();
    screen.innerText = first;
}

function reset(){
    first = "";
    second = "";
    operator = null;
    screen.innerText = "0";
}

function handleKeyboardInput(e){
    console.log(e.key);
    if(e.key >= 0 && e.key <= 9) addNum(e.key);
    if(e.key === ".") addDot();
    if(e.key === "Backspace") deleteNum();
    if(e.key === "Enter") evaluate();
    if(e.key === "Escape") reset();
    if(e.key === "+" || e.key === "-") setOperator(e.key);
    if(e.key === "*" || e.key === "/") 
        setOperator(convertOperator(e.key));

}

function convertOperator(operator){
    console.log(operator);
    if(operator === "*") return "×";
    if(operator === "/") return "÷";
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
