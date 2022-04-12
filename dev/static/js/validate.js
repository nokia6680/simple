function validationTel() {
    let tel = document.getElementById('tel-reg').value;
    let telInput = document.getElementById('tel-reg');
    let textTel = document.querySelector('.form__error--tel');
    let patternTel = /^((\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\-]{7,10}$/;

    if (tel.match(patternTel)) {
        telInput.classList.remove('error');
        telInput.classList.add('correct');

    } else {
        telInput.classList.add('error');
        textTel.innerHTML = "Телефон указан неверно. Должно быть 11 цифр, например: +7 (900) 800-70-60";
    }

    if (tel == '') {
        telInput.classList.remove('error');
        telInput.classList.remove('correct');
        textTel.innerHTML = "";
    }

    if (tel == '+') {
        telInput.classList.remove('error');
        telInput.classList.remove('correct');
        textTel.innerHTML = "";
    }

    if (tel == '+7 (') {
        telInput.classList.remove('error');
        telInput.classList.remove('correct');
        textTel.innerHTML = "";
    }
};

function validationMail() {
    let email = document.getElementById('email-reg').value;
    let emailInput = document.getElementById('email-reg');
    let textMail = document.querySelector('.form__error--mreg');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

    if (email.match(pattern)) {
        emailInput.classList.remove('error');
        emailInput.classList.add('correct');

    } else {
        emailInput.classList.add('error');
        textMail.innerHTML = "Поле email заполнено не верно. Оно должно содержать латинские буквы и @";
    }

    if (email == '') {
        emailInput.classList.remove('error');
        emailInput.classList.remove('correct');
        textMail.innerHTML = "";
    }
}
