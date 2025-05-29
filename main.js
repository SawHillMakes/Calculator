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

for(let i = 0; i < 18; i++)
{
    let buttons = document.querySelector(`.btn${i}`);
    buttons.addEventListener("click", ()=>
    {
        if(i < 10 && clickedNumberTwo === '' && clickedOperators === '')
        {
            clickedNumberOne += `${i}`;
            display.textContent = `${clickedNumberOne}`;
        }
        else if(i > 9 && clickedNumberOne !== '' && clickedNumberTwo ==='')
        {
            clickedOperators = '';
            clickedOperators += i;
            return;
        }
        else if(i < 10 && clickedOperators !== '' && clickedNumberOne !== '')
        {
            clickedNumberTwo += `${i}`;
            display.textContent = `${clickedNumberTwo}`;
        }
        else if(i === 14 && clickedNumberTwo !== '')
        {
            display.textContent = `${operate(clickedNumberOne, clickedOperators, clickedNumberTwo)}`;
        }
        else if(i === 17)
        {
            clickedNumberOne = '';
            clickedNumberTwo = '';
            clickedOperators = '';
            display.textContent = `0`;
        }
        else if(i === 16)
        {
            if(clickedNumberTwo !== '')
            {
                
            }
        }
    });
}
