let currentStrVal = "";
let strArray = [];
let nrArray = [];
let signArray = [];
let firstNum = 0;
let secondNum = 0;
let operator = "";
let result = 0;
const container = document.querySelector('div.container');
const display = document.querySelector('.display');
const button = document.querySelectorAll('button');

button.forEach(function (btn) {
    btn.addEventListener('click', getStr);
});


function getStr(event) {


    if (event.target.value == "/") {
        equal(currentStrVal);
        display.innerHTML = result;
        operator = "/";
        currentStrVal = result.toString().concat(operator);

    } else if (event.target.value == "*") {
        equal(currentStrVal);
        display.innerHTML = result;
        operator = "*";
        currentStrVal = result.toString().concat(operator);

    } else if (event.target.value == "-") {
        equal(currentStrVal);
        display.innerHTML = result;
        operator = "-";
        currentStrVal = result.toString().concat(operator);

    } else if (event.target.value == "+") {
        equal(currentStrVal);
        display.innerHTML = result;
        operator = "+";
        currentStrVal = result.toString().concat(operator);

    } else if (event.target.value == "=") {
        equal(currentStrVal);
        display.innerHTML = result;


    } else if (event.target.value == "C") {
        location.reload();


    } else {
        let presDigi = event.target.value;
        display.innerHTML = presDigi;
        result = presDigi
        currentStrVal = currentStrVal + result;
        display.innerHTML = currentStrVal;

    }

}

function equal(str) {

    makeArrays(currentStrVal);

    nrArray = strArray.map(function (item) {
        return parseFloat(item);
    });

    makeCalc(nrArray, signArray);

}


function makeArrays(str) {
    strArray = [];
    strArray.push('');
    signArray = [];
    signArray.push('');


    for (i = 0; i < currentStrVal.length; i++) {

        var chAr = currentStrVal.charAt(i);

        if (chAr != "/" && chAr != "*" && chAr != "+" && chAr != "-") {

            strArray[strArray.length - 1] += chAr;

        } else {
            signArray[signArray.length - 1] += chAr;
            strArray.push('');
        }

    }

    if (strArray[strArray.length - 1] == '') {

        strArray.pop();
    } 

}


function makeCalc(nrArray, signArray) {

    var partialRes = nrArray[0];

    for (var i = 0; i < signArray.length; i++) {
        if (signArray[i] == "+") {
            operator = "+";
            firstNum = partialRes;
            secondNum = (nrArray.length == 1) ? 0 : nrArray[i + 1];
            partialRes = operate(operator, firstNum, secondNum);


            console.log(partialRes);

        } else if (signArray[i] == "-") {
            operator = "-";
            firstNum = partialRes;
            secondNum = (nrArray.length == 1) ? 0 : nrArray[i + 1];
            partialRes = operate(operator, firstNum, secondNum);



        } else if (signArray[i] == "*") {
            operator = "*";
            firstNum = partialRes;
            secondNum = (nrArray.length == 1) ? 1 : nrArray[i + 1];
            partialRes = operate(operator, firstNum, secondNum);


        } else {
            operator = "/";
            firstNum = partialRes;
            secondNum = (nrArray.length == 1) ? 1 : nrArray[i + 1];
            partialRes = operate(operator, firstNum, secondNum);

        }

        result = Math.round(partialRes * 100)/100;
    }
}

function operate(operator, firstNum, secondNum) {
    if (operator == "+") {

        return add(firstNum, secondNum);

    } else if (operator == "-") {

        return subtract(firstNum, secondNum);

    } else if (operator == "*") {

        return multiply(firstNum, secondNum);

    } else return divide(firstNum, secondNum);
}


function add(a, b) {

    return a + b;

}

function subtract(a, b) {

    return a - b;
}

function multiply(a, b) {

    return a * b;
}

function divide(a, b) {

    return a / b;
}





