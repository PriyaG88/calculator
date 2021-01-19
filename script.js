"use strict"

const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");
let numericInputs = [];
let allInputs = [];

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];

    button.onclick = () => {
        let value = button.getAttribute("data-value");

        addValueToAllInputsArray(value);
        if (!isNaN(value)) {
            addValueToNumericInputsArray(value);
            updateDisplay();
        } else {
            performOperation(value);
        }  
    };
 }

const addValueToAllInputsArray = val => {
    allInputs.push(val);
}

const addValueToNumericInputsArray = val => {
    numericInputs.push(val);
}
 
const updateDisplay = () => {
    display.innerText = numericInputs.join("");
}

const performOperation = val => {
    switch (val) {
        case "clear":
            display.innerText = "";
            numericInputs = [];
            allInputs = [];
            break;
    }
}


