const inputName = document.querySelector('#form__input__name');
const inputEmail = document.querySelector('#form__input__email');
const inputCountry = document.querySelector('#form__input__country');
const inputPassword = document.querySelector('#form__input__password');
const inputRetypePassword = document.querySelector('#form__input__retype-password');

//Full name Validation
inputName.addEventListener('input', () => {
    inputName.setCustomValidity('');
    inputName.checkValidity();
});

inputName.addEventListener('invalid', () => {
    if(inputName.value === '') {
        inputName.setCustomValidity('Please enter your name.');
    } else {
        inputName.setCustomValidity('Please enter a proper name.');
    }
});

//Password Validation
inputPassword.addEventListener('input', () => {
    inputPassword.setCustomValidity('');
    inputPassword.checkValidity();
});

inputPassword.addEventListener('invalid', () => {
    if (inputPassword.value === '') {
        inputPassword.setCustomValidity('Please enter a password.');
    } else {
        inputPassword.setCustomValidity('Please enter a password with the correct requirements below');
    };
})

//Checks if password matches
inputRetypePassword.addEventListener('input', () => {
    if (inputPassword.value === inputRetypePassword.value) {
        inputRetypePassword.setCustomValidity('');
        inputPassword.checkValidity();
    } else {
        inputRetypePassword.setCustomValidity('Passwords must match');
    };
});

inputRetypePassword.addEventListener('invalid', () => {
    if (inputRetypePassword.value === '') {
        inputRetypePassword.setCustomValidity('Please re-type your password.');
    };
});

const checkCharLength = document.querySelector('#password-req__icon__6char')
const checkSpecial = document.querySelector('#password-req__icon__special')
const checkUpper = document.querySelector('#password-req__icon__upper')
const checkLower = document.querySelector('#password-req__icon__lower')
const checkNumber = document.querySelector('#password-req__icon__number')

inputPassword.addEventListener('input', () => {

    if (inputPassword.value.length >= 6) {
        checkCharLength.classList.remove('fa-xmark');
        checkCharLength.classList.add('fa-check');
    } else {
        checkCharLength.classList.remove('fa-check');
        checkCharLength.classList.add('fa-xmark');
    }
    
/*     if (passwordCheck.match(/[A-Z]/g)) {
        checkUpper.classList.remove('fa-xmark');
        checkUpper.classList.add('fa-check');
    } else {
        checkUpper.classList.remove('fa-check');
        checkUpper.classList.add('fa-xmark');
    }

    if (passwordCheck.match(/[a-z]/g)) {
        checkLower.classList.remove('fa-xmark');
        checkLower.classList.add('fa-check');
    } else {
        checkLower.classList.remove('fa-check');
        checkLower.classList.add('fa-xmark');
    }

    if (passwordCheck.match(/[^\da-zA-Z0-9]/g)) {
        checkSpecial.classList.remove('fa-xmark');
        checkSpecial.classList.add('fa-check');
    } else {
        checkSpecial.classList.remove('fa-check');
        checkSpecial.classList.add('fa-xmark');
    } */

    validationIconCheck(checkNumber, /[0-9]/g);
});

function validationIconCheck(iconNode, regexpress) {
    let passwordCheck = inputPassword.value;

    if (passwordCheck.match(regexpress)) {
        iconNode.classList.remove('fa-xmark');
        iconNode.classList.add('fa-check');
    } else {
        iconNode.classList.remove('fa-check');
        iconNode.classList.add('fa-xmark');
    }
}

