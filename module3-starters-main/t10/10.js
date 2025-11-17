'use strict';

const form = document.getElementById('source');
const target = document.getElementById('target');

form.addEventListener('submit', (event) => {
  event.preventDefault(); //stop default submit

  const first = form.querySelector('input[name="firstname"]').value;
  const last = form.querySelector('input[name="lastname"]').value;

  target.textContent = `Your name is ${first} ${last}`;
});
