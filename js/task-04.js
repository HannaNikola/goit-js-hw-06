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
const decrementItem = document.querySelector('[data-action="decrement"]');
console.log(decrementItem);
const incrementItem = document.querySelector('[data-action="increment"]');
const valueItem = document.querySelector('#value');


 const counterValue = 0;
// decrementItem.addEventListener("click", () => {
//     counterValue -= 1;
//     valueItem.textContent = counterValue;
//     console.log(counterValue);
      
     
//   })

//  incrementItem.addEventListener("click", () => {
//      counterValue += 1;
//      valueItem.textContent = counterValue;
     
    
//  })


//  decrementItem.addEventListener('click',  function() {
//     console.log('click decrement');
    
// })

//  decrementItem = (event)  {
//     counterValue -= 1;
//     valueItem.textContent = counterValue;
// };



// incrementItem.addEventListener('click', function () {
//     console.log('click increment');
    
// })
//   incrementItem = (event) => {
    
//     counterValue += 1;
//     valueItem.textContent = counterValue;
//  }