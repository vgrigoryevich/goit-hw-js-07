let value = 0;
const spanValue = document.querySelector('span#value');
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
decrement.addEventListener('click', () => {
  value -= 1;
  return (spanValue.textContent = value);
});
increment.addEventListener('click', () => {
  value += 1;
  return (spanValue.textContent = value);
});