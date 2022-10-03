const inputName = document.querySelector('#form__input__name');
const inputEmail = document.querySelector('#form__input__email');
const inputCountry = document.querySelector('#form__input__country');
const inputPassword = document.querySelector('#form__input__password');
const inputRetypePassword = document.querySelector('#form__input__retype-password');

inputName.addEventListener('input', () => {
    inputName.setCustomValidity('');
    inputName.checkValidity();
});

inputName.addEventListener('invalid', () => {
    if(inputName === '') {
        inputName.setCustomValidity('Please enter your name.');
    } else {
        inputName.setCustomValidity('Please enter a proper name.');
    }
});