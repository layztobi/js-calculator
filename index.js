

alert("Welcome, This is a simple Calculator")
simpleCalculator()
alert("Thank You! and Goodbye!")

// program for a simple calculator
function simpleCalculator() {
    // take the operator input
    let operator = prompt('Enter operator ( either +, -, * or / ): ');
    while (validateOperator(operator)) {
        if (operator === null) return
        operator = prompt("Enter a valid operator ( either +, -, * or / ):")        
    }

    // take the operand input
    let number1 = parseFloat(prompt('Enter first number: '));

    while (!Number.isFinite(number1)) {
         number1 = parseFloat(prompt('Enter a valid first number:'));         
    }
    let number2 = parseFloat(prompt('Enter second number: '));

    while (!Number.isFinite(number2)) {
         number2 = parseFloat(prompt('Enter a valid second number:'));  
    }

    let result;

    // using if...else if... else
    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else {
        result = number1 / number2;
    }

    // display the result
    console.log(`${number1} ${operator} ${number2} = ${result}`);
    alert(`${number1} ${operator} ${number2} = ${result}`)
}
function validateOperator(operator){
    if (operator == '+') return false
    if (operator =='-') return false
    if (operator == '*') return false
    if (operator == '/') return false
    return true
}
