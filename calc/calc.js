let display = document.getElementById('display');
let currentInput = '';
let lastOperator = '';
let lastValue = '';
let resetNext = false;
const MAX_LENGTH = 16;

function updateDisplay() {
  // Limit to the max length of characters
  display.textContent = currentInput.length > MAX_LENGTH ? currentInput.slice(0, MAX_LENGTH) : currentInput || '0';
}

function appendNumber(num) {
  if (resetNext) {
    currentInput = '';
    resetNext = false;
  }
  currentInput += num;
  updateDisplay();
}

function appendDecimal() {
  const lastNumber = currentInput.split(/[-+*/]/).pop();
  if (!lastNumber.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function appendOperator(op) {
  if (!currentInput) return;

  if (/[+\-*/]$/.test(currentInput)) {
    currentInput = currentInput.slice(0, -1) + op; // replace last operator
  } else if (/[-+*/]/.test(currentInput)) {
    calculate(); // auto-calculate if an operator already exists
    currentInput += op;
  } else {
    currentInput += op;
  }

  resetNext = false;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  lastOperator = '';
  lastValue = '';
  updateDisplay();
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function toggleSign() {
  if (currentInput) {
    // Toggle the sign of the last number only
    const tokens = currentInput.split(/[-+*/]/);
    const lastToken = tokens[tokens.length - 1];
    const toggled = lastToken.startsWith('-') ? lastToken.slice(1) : '-' + lastToken;
    currentInput = currentInput.slice(0, currentInput.lastIndexOf(lastToken)) + toggled;
    updateDisplay();
  }
}

function percentage() {
  try {
    currentInput = String(eval(currentInput) / 100);
    resetNext = true;
  } catch (e) {
    currentInput = 'Error';
  }
  updateDisplay();
}

function calculate() {
  try {
    if (currentInput.includes('/0')) {
      currentInput = 'nah lol';  // Handle division by zero
    } else {
      currentInput = String(eval(currentInput));
    }
    resetNext = true;
  } catch (e) {
    currentInput = 'Error';
  }
  updateDisplay();
}
