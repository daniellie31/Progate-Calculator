let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const calculatorScreen = document.querySelector('.calculator-screen');

function updateScreen(number){
    calculatorScreen.value = number;
}

function inputNumber(number){
    if(currentNumber === '0'){
        currentNumber = number;
    }
    else{
        currentNumber += number;
    }
}

const operators = document.querySelectorAll(".operator");

operators.forEach((operator)=>{
    operator.addEventListener("click", (event) =>{
        inputOperator(event.target.value);
    })
});

function inputOperator(operator){
    if(calculationOperator === ''){
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number)=>{
    number.addEventListener("click", ()=>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', ()=>{
    calculate();
    updateScreen(currentNumber);
});

function calculate(){
    let result = '';
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
}

function clearAll(){
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', ()=>{
    clearAll();
    updateScreen(currentNumber);
});

function inputDecimal(dot){
    if(currentNumber.includes('.')){
        return;
    }
    currentNumber += dot;
}

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', (event)=>{
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

