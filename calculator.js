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


function operate(operator, a, b){
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
    

   


