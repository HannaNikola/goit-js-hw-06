// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.



const counterEl = document.querySelector('#counter');
const decrementEl = document.querySelector('[data-action="decrement"]');
const volueEl = document.querySelector('#value');
const incrementEl = document.querySelector('[data-action="increment"]');
console.log(counterEl);
console.log(decrementEl);
console.log(volueEl);
console.log(incrementEl);


let counterVolue = 0; 

decrementEl.addEventListener('click', countDecrement);


function countDecrement () {
    counterVolue -= 1;
    volueEl.textContent = counterVolue;
    console.log(counterVolue);

};



incrementEl.addEventListener('click', countIncrement);

function countIncrement() {
    counterVolue += 1;
    volueEl.textContent = counterVolue;
    console.log(counterVolue);
}
