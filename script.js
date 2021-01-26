"use strict"

const numberButtons = document.querySelectorAll("button[data-number]");
const clearBtutton = document.querySelector("button[data-clear]");
const operatorButtons = document.querySelectorAll("button[data-operator]");
const display = document.querySelector("#display");
let inputs = [];
let currentNumberStr = "";
let previousNumberStr = "";

numberButtons.forEach(button => {
    button.onclick = () => {
        let value = button.getAttribute("data-number");
        if (value === "." && currentNumberStr.includes(".")) return;
        else if (value === "0" && currentNumberStr.length === 0) return;
        currentNumberStr += value;
        updateDisplay();
    }
});

clearBtutton.onclick = () => {
    display.innerText = 0;
    inputs = [];
    currentNumberStr = "";
    previousNumberStr = "";
}

operatorButtons.forEach(button => {
    button.onclick = () => {
        let value = button.getAttribute("button[data-operator]");
        updateCurrentNumberStr();
    }
});


// for (let i = 0; i < buttons.length; i++) {
//     let button = buttons[i];

//     button.onclick = () => {
//         let value = button.getAttribute("data-value");

//         if (isNumber(value)) {
//             if (isCurrentNumberStrEmpty() && value === "0") { //don't want to add leading zeros to string but have to think of a more elegant way of doing this
//             } else {
//                 currentNumberStr += value;
//                 updateDisplay();
//             }       
//         } else if (value === ".") {
//             if (!currentNumberStr.includes(".")) {
//                 currentNumberStr += value;
//                 updateDisplay();
//             }
//         } else if (value === "clear") {
//             clearCalculator();
//         } else {
//             updateCurrentNumberStr();
//             updateInputsArray(value);
//             if (isCalculable()) {
//                 calculateResult();
//             }
//         }
//     };
//  }

const isCurrentNumberStrEmpty = () => {
    return currentNumberStr.length === 0;
}

const updateCurrentNumberStr = () => {
    previousNumberStr = currentNumberStr;
    currentNumberStr = "";
}

const updateInputsArray = val => {
    const prevNum = parseInt(previousNumberStr);

    if (isNumber(prevNum)) {
        inputs.push(prevNum);
    } else if (inputs.length === 0 && isNaN(val)) {
        inputs.push(0, val); // add 0 to inputs array if user uses operator button before numeric value
    } else if (inputs.length > 0 && isLastInputOperator()) {
        inputs[inputs.length - 1] = val; //when consecutive operators are inputted by user, only track last input
    } else {
        inputs.push(val);    
    }
}

const updateDisplay = () => {
    display.innerText = currentNumberStr;
}

const isNumber = val => {
    return !isNaN(val);
}

const isCalculable = () => {
    if (inputs.length > 2) { // need at least two numbers and an operator to calculate
        return true;
    }
    return false;
}


const isLastInputOperator = () => {
    return isNaN(inputs[inputs.length - 1]);
}
