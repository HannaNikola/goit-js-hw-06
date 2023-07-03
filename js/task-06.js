// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст
// щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна
// кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у
// вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
// const validInputEl = document.querySelector('#validation-input.valid ');
// const invalidInputEl = document.querySelector('#validation-input.invalid');
// const inputElement = document.querySelector('#validation-input');
// console.log(validInputEl);
// console.log(invalidInputEl);
// console.log(inputElement);




// inputElement.addEventListener("blur", (validationElement) => {

//     if(inputElementEl.value.length === validInputEl)
// }) 



// const inputEl = document.querySelector("#validation-input");
// inputEl.addEventListener('blur', validateInput);
// const inputLength = Number(inputEl.dataset.length);
// // console.log(inputLength)

// function validateInput() {
//    if(inputEl.value.length === inputLength){
//     inputEl.classList.add('valid');
//     inputEl.classList.remove('invalid');
//   } else {
//     inputEl.classList.add('invalid');
//      inputEl.classList.remove('valid');
//   }
// };