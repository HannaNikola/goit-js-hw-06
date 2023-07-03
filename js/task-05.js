// Напиши скрипт, який під час набору тексту в інпуті input#name-input
// (подія input), підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


const inputNameEl = document.querySelector('#name-input');
const spanElement = document.querySelector('#name-output');

console.log(inputNameEl);
console.log(spanElement);

inputNameEl.addEventListener('input', (event) => {
    spanElement.textContent = event.currentTarget.value
});




























