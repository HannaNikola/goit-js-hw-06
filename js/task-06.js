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




const inputElement = document.querySelector('#validation-input');
console.log(inputElement);




inputElement.addEventListener("blur", validationElement);

const inputLength = Number(inputElement.dataset.length);
console.log(inputLength);

function validationElement() {
    if (inputElement.value.trim().length === inputLength) {
        inputElement.classList.add('valid');
        inputElement.classList.remove('invalid');

    } else {
        
        inputElement.classList.add('invalid');
        inputElement.classList.remove('valid');
    }
}



