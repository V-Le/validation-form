const inputName = document.querySelector('#form__input__name');
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

//Shows user the password requirements
const checkCharLength = document.querySelector('#password-req__icon__6char');
const checkSpecial = document.querySelector('#password-req__icon__special');
const checkUpper = document.querySelector('#password-req__icon__upper');
const checkLower = document.querySelector('#password-req__icon__lower');
const checkNumber = document.querySelector('#password-req__icon__number');
const checkMatch = document.querySelector('#password-req__icon__match');

inputPassword.addEventListener('input', () => {
    if (inputPassword.value.length >= 6) {
        checkCharLength.classList.remove('fa-xmark');
        checkCharLength.classList.add('fa-check');
    } else {
        checkCharLength.classList.remove('fa-check');
        checkCharLength.classList.add('fa-xmark');
    }
    validationIconCheck(checkUpper, /[A-Z]/g);
    validationIconCheck(checkLower, /[a-z]/g);
    validationIconCheck(checkSpecial, /[^\da-zA-Z0-9]/g);
    validationIconCheck(checkNumber, /[0-9]/g);
    checkPasswordMatch();
});

//Checks if password matches
inputRetypePassword.addEventListener('input', checkPasswordMatch);

inputRetypePassword.addEventListener('invalid', () => {
    if (inputRetypePassword.value === '') {
        inputRetypePassword.setCustomValidity('Please re-type your password.');
    };
});

function validationIconCheck(nodeIcon, regexpress) {
    let passwordCheck = inputPassword.value;

    if (passwordCheck.match(regexpress)) {
        nodeIcon.classList.remove('fa-xmark');
        nodeIcon.classList.add('fa-check');
    } else {
        nodeIcon.classList.remove('fa-check');
        nodeIcon.classList.add('fa-xmark');
    }
};

function checkPasswordMatch() {
    if ((inputPassword.value === inputRetypePassword.value) && (inputPassword.value.length > 0)) {
        checkMatch.classList.remove('fa-xmark');
        checkMatch.classList.add('fa-check');
        inputRetypePassword.setCustomValidity('');
        inputPassword.checkValidity();
    } else {
        checkMatch.classList.remove('fa-check');
        checkMatch.classList.add('fa-xmark');
        inputRetypePassword.setCustomValidity('Passwords must match');
    };
};

