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
        return "Error";
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

for(let i = 0; i < 16; i++)
{
    let buttons = document.querySelector(`.btn${i}`);
    buttons.addEventListener("click", ()=>
    {
        if(i < 10 && clickedNumberTwo === '' && clickedOperators === '')
        {
            clickedNumberOne += `${i}`;
            display.textContent = `${clickedNumberOne}`;
        }
        if(i > 9 && clickedNumberOne !== '' && clickedNumberTwo ==='')
        {
            clickedOperators = '';
            clickedOperators += i;
                    if(i === 13)
                        {
                        clickedNumberOne = '';
                        clickedNumberTwo = '';
                        clickedOperators = '';
                        display.textContent = `0`;
                        }
        return;
        }
        if(i < 10 && clickedOperators !== '' && clickedNumberOne !== '')
        {
            clickedNumberTwo += `${i}`;
            display.textContent = `${clickedNumberTwo}`;
        }
        if(i === 14)
        {   
            display.textContent = `${operate(clickedNumberOne, clickedOperators, clickedNumberTwo)}`;
            clickedNumberOne = `${operate(clickedNumberOne, clickedOperators, clickedNumberTwo)}`;
            clickedNumberTwo = ``;
            clickedOperators = ``;
        }
    });
}