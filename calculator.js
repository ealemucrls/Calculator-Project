
let operator = '';
let previousValue = '';
let currentValue = '';


document.addEventListener("DOMContentLoaded", function() {
    let clear = document.querySelector("#clear");
    let equal = document.querySelector(".equals");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".digit");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((digit) => digit.addEventListener("click", function(s){
        handleNumber(s.target.textContent);
        currentScreen.textContent = currentValue;
    }));

    operators.forEach((op) => op.addEventListener(("click"), function(s){
        handleOperator(s.target.textContent);
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }));
    
    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener("click", function(){
        if(currentValue != '' && previousValue != ''){
        operate();
        previousScreen.textContent = '';
        currentScreen.textContent = previousValue;
        if(previousValue.length <= 10){
            currentScreen.textContent = previousValue;
        }
        else{
            currentScreen.textContent = previousValue.slice(0, 10) + "...";
        }
        }

    })
    decimal.addEventListener("click", function(){
        addDecimal();
    })
});

function handleNumber(num){
    if(currentValue.length <= 10){
        currentValue += num;
    }
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
    
}



function operate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    
    if(operator === "+"){
        previousValue += currentValue 
    }
    else if(operator === "-"){
        previousValue -= currentValue;
    }
    else if(operator === "x"){
        previousValue *= currentValue;
    }
    else if(operator === "/"){
        previousValue /= currentValue;
    }

    previousValue = roundNumber(previousValue);
    console.log(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}

function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += '.';
    }
}