const inputName = document.querySelector('#form__input__name');
const inputEmail = document.querySelector('#form__input__email');
const inputCountry = document.querySelector('#form__input__country');
const inputPassword = document.querySelector('#form__input__password');
const inputRetypePassword = document.querySelector('#form__input__retype-password');

//Full name Validation
/* inputName.addEventListener('input', () => {
    inputName.setCustomValidity('');
    inputName.checkValidity();
});

inputName.addEventListener('invalid', () => {
    if(inputName === '') {
        inputName.setCustomValidity('Please enter your name.');
    } else {
        inputName.setCustomValidity('Please enter a proper name.');
    }
}); */


//Check if password matches
/* PASSWORD PSUEDOCODE
Check is password is valid
if valid, then setCustomValidity is an empty string
else invalid, then setCustomValidity with error message
*/

