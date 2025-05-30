let numberOne = 0; 
let numberTwo = 0; 
let givenOperator = '';


let addition = function (num1, num2)
{
    return num1 + num2;
}

let multiplication = function (num1, num2)
{
    return num1 * num2;
}

let division = function (num1, num2)
{
    if(num2 === 0)
    {
        return "No dividing by zero!";
    }
    return num1 / num2;
}

let subtraction = function(num1, num2)
{
    return num1 - num2; 
}

let operate = function (number1, operator, number2)
{
    number1 = Number(number1);
    number2 = Number(number2);
    operator = Number(operator);

    if(operator === 15)
    {
        return addition(number1, number2);
    }
    if(operator === 12)
    {
        return subtraction(number1, number2);
    }
    if(operator === 11)
    {
        return multiplication(number1, number2);
    }
    if(operator === 10)
    {
        return division(number1, number2);
    }
}


let display = document.querySelector("#display");
let clickedNumberOne = '';
let clickedNumberTwo = '';
let clickedOperators = '';
let clearingNumber = 0;


let whenBtnClicked = function(btnClicked)
{
    if(btnClicked < 10 && clickedNumberTwo === '' && clickedOperators === '')
    {
        clickedNumberOne += `${btnClicked}`;
        display.textContent = `${clickedNumberOne}`;
    }
    else if(btnClicked < 10 && clickedNumberOne !== '' && clickedOperators !== '')
    {
        clickedNumberTwo += `${btnClicked}`;
        display.textContent = `${clickedNumberTwo}`;
    }
    else if(btnClicked > 9 && clickedNumberOne !== '' && clickedNumberTwo === '' && btnClicked !== 16 && btnClicked !== 14 && btnClicked !== 13)
    {
        clickedOperators = '';
        clickedOperators += `${btnClicked}`;
    }
    else if(btnClicked === 14 && clickedNumberTwo !== '')
    {
        result = operate(clickedNumberOne, clickedOperators, clickedNumberTwo);
        display.textContent = `${result}`;
        clickedNumberOne = `${result}`;
        clickedNumberTwo = ``;
        clickedOperators = ``;
    }
    else if(btnClicked === 16)
    {
        clickedNumberOne = '';
        clickedNumberTwo = '';
        clickedOperators = '';
        display.textContent = `0`;
    }
    else if(btnClicked === 13)
    {
        display.textContent = `:)`;
    }
}


for(let i = 0; i < 17; i++)
{
    let buttons = document.querySelector(`.btn${i}`);
    buttons.addEventListener("click", ()=>
    {
        whenBtnClicked(i);
    });
}
