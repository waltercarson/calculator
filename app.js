const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try{
        display.value = eval(display.value); 
    }
    catch(error){
        display.value = "Error";
    }
}

function backspace() {
    let currentValue = display.value; // Or displayElement.textContent if it's a div/span
  // Remove the last character using slice(0, -1)
    let newValue = currentValue.slice(0, -1);
  // Update the display with the new value
    display.value = newValue;
}


