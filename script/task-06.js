const validation = document.querySelector('#validation-input');
const length = Number(
    document.querySelector('#validation-input').dataset.length,
);
validation.addEventListener('blur', elem => {
            validation.classList.add('invalid');
            elem.currentTarget.value.length === length ?
                validation.classList.replace('invalid', 'valid') :
                validation.classList.replace('valid', 'invalid');
        });