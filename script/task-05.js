const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

input.addEventListener('input', elem => {
    output.textContent = elem.currentTarget.value;
    if (elem.currentTarget.value.length === 0) {
        output.textContent = 'незнакомец';
    }
});