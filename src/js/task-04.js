const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");
let counterValue = 0;

btnDecrement.addEventListener("click", decrementValue);
btnIncrement.addEventListener("click", incrementValue);

function decrementValue() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function incrementValue() {
  counterValue += 1;
  value.textContent = counterValue;
}
