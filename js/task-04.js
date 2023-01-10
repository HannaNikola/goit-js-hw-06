// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterItem = document.querySelector('#counter');
const decrementItem = document.querySelector('[data-action="decrement]');
const incrementItem = document.querySelector('[data-action="increment"]');
const valueItem = document.querySelector('#value');
console.log(incrementItem);

const counterValue = 0;
 decrementItem.addEventListener("click", () => {
     this.value += 1;
     console.log(this.decrement);
 })

 incrementItem.addEventListener("click", () => {
     this.value += 1;
     console.log(this.increment);
 })