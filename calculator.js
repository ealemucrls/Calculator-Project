function add(a,b){
    let sum = a + b;
    return sum; 
}

function subtract(a,b){
    let sum = a - b;
    return sum;
}

function multiply(a,b){
    let sum = a * b;
    return sum;
}

function division(a, b){
    let sum = a / b;
    return sum; 
}


function operate(operators, a, b){
    let operator = operator.toLowerCase();
    if(operator.equals("add")){
        add(a, b);
    }
    else if(operator.equals("subtract")){
        subtract(a,b);
    }
    else if(operator.equals("multiply")){
        multiply(a,b);
    }
    else if(operator.equals("division")){
        division(a,b);
    }
}

let operatorz = '';
let previousValue = '';
let currentValue = '';


document.addEventListener("DOMContentLoaded", function() {
    let clear = document.querySelector("#clear");
    let equal = document.querySelector(".equals");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".digit");
    let operators = document.querySelectorAll(".operator");

    let previouScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((digit) => digit.addEventListener("click", function(s){
        handleNumber(s.target.textContent);
    }))
})

function handleNumber(num){
    console.log(num);
}