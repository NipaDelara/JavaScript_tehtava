'use strict';

const input = document.getElementById('calculation');
const button = document.getElementById('start');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  const calc = input.value.trim();
  let answer = '';

  //addition
  if (calc.includes('+')) {
    const parts = calc.split('+');
    const a = Number(parts[0]);
    const b = Number(parts[1]);
    answer = a + b;
  }

  //subtraction
  else if (calc.includes('-')) {
    const parts = calc.split('-');
    const a = Number(parts[0]);
    const b = Number(parts[1]);
    answer = a - b;
  }
  // multiplication
  else if (calc.includes('*')) {
    const parts = calc.split('*');
    const a = Number(parts[0]);
    const b = Number(parts[1]);
    answer = a * b;
  }
  //division
  else if (calc.includes('/')) {
    const parts = calc.split('/');
    const a = Number(parts[0]);
    const b = Number(parts[1]);
    answer = a / b;
  }
  //show result
  result.textContent = `Result: ${answer}`;
});
