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
    switch(operator){
        case "+":
            add(first, second);
            break;
        case "-":
            subtract(first, second);
            break;
        case "x":
            multiply(first, second);
            break;
        case "/":
            divide(first, second);
            break;
    }
}

const digits = document.querySelectorAll(".digit");
const result = document.querySelector(".result");

digits.forEach((digit) => digit.addEventListener("click", (e) => {
    result.innerText += e.target.textContent;
}));
